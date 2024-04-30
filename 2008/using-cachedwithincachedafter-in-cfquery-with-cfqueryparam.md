---
title: "Using cachedWithin/cachedAfter in CFQUERY with CFQUERYPARAM"
date: 2008-06-30T18:00:00.000
tags: ["coldfusion"]
redirect_from: 
  - /blog/index.cfm/2008/6/30/Using-cachedWithincachedAfter-in-CFQUERY-with-CFQUERYPARAM/
  - /blog/index.cfm/2008/6/30/using-cachedwithincachedafter-in-cfquery-with-cfqueryparam/
permalink: /blog/2008/6/30/using-cachedwithincachedafter-in-cfquery-with-cfqueryparam/
---

Earlier morning, I was working on creating a cached query for to display Next N record-navigation interface. I'm having the ColdFusion 8 installed in my system. The below query with CFQUERYPARAM executes well and my aim of displaying Next N record-navigation is achieved. 

```cfml
<cfquery name="qBlogFeedResult" datasource="#application.dsn#" cachedwithin="#createTimeSpan( 0,0,30,0 )#">
select  *
from    blogfeed
where   datecreated > <cfqueryparam value="#attributes.date#" cfsqltype="cf_sql_timestamp">
order by    datecreated desc
</cfquery>
</code>
```

When testing this query in my other system having ColdFusion 7 installed I got the below error because CF 7 will not allow of using cfqueryparam in cfquery with cachedWithin/cachedAfter.

> Using "cachedWithin" or "cachedAfter" in CFQUERY with CFQUERYPARAM is not allowed.

The great news is ColdFusion 8 allows cachedWithin/cachedAfter in cfquery with cfqueryparam and this is one of the hidden gems of ColdFusion 8. But in  [CF8 documentation](http://livedocs.adobe.com/coldfusion/8/htmldocs/help.html?content=Tags_p-q_18.html)  which is not having the updated information about this functionality.

To explore more about CF 8 Hidden Gems please check  [Charlie Arehart's](http://www.carehart.org/)  presentation on  [Hidden Gems in ColdFusion 8 PDF](http://www.carehart.org/presentations/Hidden%20Gems%20in%20CF8.pdf)  and his recorded  [Adobe Connect Presentation.](https://admin.na3.acrobat.com/_a204547676/p62023969/)

