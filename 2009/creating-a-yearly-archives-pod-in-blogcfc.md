---
title: "Creating a Yearly Archives Pod in blogCFC"
date: 2009-03-14T18:00:00.000
tags: ["blog","coldfusion"]
redirect_from: 
  - /blog/index.cfm/2009/3/14/Creating-a-Yearly-Archives-Pod-in-blogCFC/
  - /blog/index.cfm/2009/3/14/creating-a-yearly-archives-pod-in-blogcfc/
permalink: /blog/2009/3/14/creating-a-yearly-archives-pod-in-blogcfc/
---

This post is to show how we can create a yearly archive pod in blogCFC. I have recently modified my <strong><a href="http://www.akbarsait.com/blog/index.cfm/2009/1/13/BlogCFC-Redesign" target="_blank">blogCFC design</a></strong> and I'm really happy on that customization. So the first thing we need to do is adding a new function in the blog.cfc component which is under org &gt; camden &gt; blog folder in your blog root.

```cfscript
<cffunction name="getYearlyArchives" access="remote" returnType="query" output="false"
hint="Function to fetch the blogged years.">
	
<cfset var getYearlyArchives = "" />

<cfquery name="getYearlyArchives" datasource="#instance.dsn#" username="#instance.username#" password="#instance.password#">
	Select year(tblblogentries.posted) as bloggedyears
	From	 tblblogentries
	Where	 tblblogentries.blog =  <cfqueryparam value="#instance.name#" cfsqltype="cf_sql_varchar">
	group by year(tblblogentries.posted)
	order by bloggedyears desc
</cfquery>

<cfreturn getYearlyArchives />

</cffunction>
```

In getYearlyArchives function we are just retrieving the blogged years from tblblogentries table. Next we need to change the code in two **important** files the first one is **parseses.cfm** which is under tags folder of your blog root. 

```cfscript
<cfif len(trim(sesInfo.categoryName)) and len(trim(sesInfo.categoryName)) lte 50>
<!--- translate back --->
<cfset categoryID = application.blog.getCategoryByAlias(sesInfo.categoryName)>

<cfif len(categoryID)>

    <cfset url.mode = "cat">
    <cfset url.catid = categoryID>

</cfif>

</cfif>
```

This code need to be replaced with the following code.

```cfscript
<!--- Replacing the '/' with empty string to check the categoryName is in Numeric format. --->
<cfset sesInfo.categoryName = ReplaceNoCase(sesInfo.categoryName,'/','') />

<!--- Checking whether the categoryName is in Numeric format and the length is 4. --->
<cfif len(trim(sesInfo.categoryName)) and IsNumeric(sesInfo.categoryName) and len(trim(sesInfo.categoryName)) eq 4> 

<cfset url.mode = "year">
<cfset url.year = sesInfo.categoryName>

<cfelseif len(trim(sesInfo.categoryName)) and len(trim(sesInfo.categoryName)) lte 50>

<!--- translate back --->
<cfset categoryID = application.blog.getCategoryByAlias(sesInfo.categoryName)>

<cfif len(categoryID)>

    <cfset url.mode = "cat">
    <cfset url.catid = categoryID>

</cfif>
</cfif>
```

Now we have created a new mode called year and assigned the value of categoryName which is nothing but the year to url.year. Next we need edit the **getmode.cfm** file which is under the same tags folder of your blog. Add this code just below the second cfelseif statement.

```cfscript
<!--- to check the mode is year and year is exist in the url. --->
<cfelseif url.mode is "year" and isDefined("url.year")>

	<cfset params.byYear = val(url.year)>
	<cfset year = val(url.year)>
```

Here in this code we are setting the selected year value to params.byYear and year parameters. We have done with the code changes and now we can create a pod in blogCFC administrator for to display the list of years in your blog.

```cfscript
<cfprocessingdirective pageencoding='utf-8'>
<!---
   Name : YearlyArchive.cfm
   blogCFC Author : Raymond Camden 
   Pod Author :Akbarsait(akbarsaitn.cfmx@gmail.com) 
   Created : March 14, 2009
   Purpose : Pod to display yearly archives.
--->
<cfoutput>

<cfmodule template="../../tags/scopecache.cfm" cachename="pod_yearlyarchives" scope="application" timeout="#application.timeout#">

<cfmodule template="../../tags/podlayout.cfm" title="Yearly Archives">
<cfset yearlyArchives = application.blog.getYearlyArchives() />

<cfloop query="yearlyArchives">
    <a href="#application.blog.getProperty("blogurl")#/#bloggedYears#/">
        #bloggedYears#
    </a><br/>
</cfloop>

</cfmodule>

</cfoutput>		

<cfsetting enablecfoutputonly='false'/>
```

Just paste this code in your new pod and save. You can view the sidebar of this blog where I included the yearly archives pod. The existing blogCFC functionality will create the necessary page navigation while clicking the more entries link in the blog. Let me know if you have any issues in implementing this code.