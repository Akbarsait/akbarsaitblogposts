---
title: "CFWheels and ORM"
date: 2009-12-14T18:00:00.000
tags: ["coldfusion"]
redirect_from: 
  - /blog/index.cfm/2009/12/14/CFWheels-and-ORM/
  - /blog/index.cfm/2009/12/14/cfwheels-and-orm/
permalink: /blog/2009/12/14/cfwheels-and-orm/
---

Object Relation mapping is one of the key feature in CFWheels. It makes things easier to start using ORM in applications. The ORM configuration is implemented by creating a mapping between a db table and CF component of the application. To demonstrate ORM feature, lets create a utility to list the tags with edit/delete/add options in a table.

First set the datasource name in settings.cfm file under config folder.

```cfscript
<cfset set(dataSourceName="CFWheelsORMDSN")>
```

I'm using blogCFC db for this example to map the tblblogtags table. I created a CFC under the model folder in CFWheels framework and named it as tblblogCategory.cfc. The thumb rule of ORM mapping in CFWheels is that the CFC name should be a singular version of your table name. 

```cfscript
<cfcomponent extends="Model">
</cfcomponent>
```

In addition, CFWheels provides flexibility of creating CFC's with other names to map a table. I created CFC as category.cfc to map the tblblogtags and the code I need to write is below. 

```cfscript
<cfcomponent extends="Model">
	<cffunction name="init">
		<cfset table("tblblogtags") />
	</cffunction>
</cfcomponent>
```
One important thing to note, is all the CFC's created for database table mapping should need to extend the model component. Mapping is done, let's create some functions to perform CRUD operation in tblblogtags. Find below the code for the controller CFC that named as CFWheelsORM.cfc.

```cfscript
<cffunction name="createCategory">
	<!--- calling the new() method --->
	<cfset objCategory = model("tblBlogCategory").new() />
		
	<!---  setting values to Category Object --->
	<cfset objCategory.categoryid		= createUUID() />
	<!---  dynamic ID for Category name --->
	<cfset dCatID				= ListGetAt(objCategory.categoryid , 2, '-') />
	<cfset objCategory.categoryName 	= "CFWheelsORM" />
	<cfset objCategory.categoryAlias 	= "CFWheelsORM" />
	<cfset objCategory.blog	 		= "Default" />
		
	<!---  calling the save() method to save the content to DB--->
	<cfset objCategory.save() />
	<cfset redirectTo(action="getCategory") />
</cffunction>
	
<cffunction name="getCategory">
	<cfset qGetCategory = model("tblBlogCategory").findAll(
					SELECT="categoryid, categoryname",
					WHERE="categoryName LIKE 'C%'", 
					ORDER="categoryname") />
</cffunction>
	
<cffunction name="editCategory">
	<cfset objCategory = model("tblBlogCategory").findByKey(params.key) />
	<!---  dynamic ID for Category name --->
	<cfset dCatID		= ListGetAt(params.key , 3, '-') />
	<cfset objCategory.update(categoryName="CFWheels") />
	<cfset redirectTo(action="getCategory") />
</cffunction>
	
<cffunction name="deleteCategory">
	<cfset objCategory = model("tblBlogCategory").findByKey(params.key) />
	<cfset objCategory.delete() />
	<cfset redirectTo(action="getCategory") />
</cffunction> 
```

I'm not using any form controls in this CRUD, hence I utilized the values to createCatetory/editCategory as static. In the createCategory, created the new instance for tblBlogCategory model by passing the necessary params to develop a new category. Calling the save() method will store the values to the database. In getCategory, the findAll() method is used by passing SQL statements. If we didn't pass any SQL string then findAll() method will return all records. By default findAll() method will return a query object that can be changed to receive an array of objects with the below settings. 

```cfscript
<cfset qGetCategory = model("tblBlogCategory").findAll(returnAs="objects") />
```

In editCategory/deleteCategory, used an another ORM function findByKey(). As name denotes, it helps to retrive data based on the parameter passed. The Update()/Delete() methods are used to update/delete respectively. CFWheels automatically convert all the inputs passed to the ORM methods to CFQueryParam. Like the controller file name, we require to create a folder under the CFWheels framework's view folder and the file manageCategory.cfm with the following code.

```cfscript
<cfoutput query="qGetCategory">
	##### 
	#qGetCategory.categoryName#
	[ #linkTo(text="Edit", key=qGetCategory.categoryID, action="editCategory")# | 	#linkTo(text="Delete", id=qGetCategory.categoryID, action="deleteCategory")# ]
	 
</cfoutput>

<cfoutput>
	#linkTo(text="Add",  action="createCategory")#
</cfoutput>
```

I used the linkTo() function to develop a link in my view page to links the editCategory/deleteCategory actions with categoryID as a key. We did with a basic ORM example and to learn more about CFWheels ORM features read the documentation at [CFWheels site.](http://cfwheels.org/docs)