---
title: "Using QueryParam Scanner"
date: 2009-03-21T18:00:00.000
tags: ["utilities","coldfusion"]
redirect_from: 
  - /blog/index.cfm/2009/3/21/Using-QueryParam-Scanner/
  - /blog/index.cfm/2009/3/21/using-queryparam-scanner/
permalink: /blog/2009/3/21/using-queryparam-scanner/
---

Last  month  while fixing an  issue  in a legacy code I  found some of the  queries  haven't had the  cfqueryparam  for  variables  in  SQL statements. So  I  thought  of fixing  all  these queries in that application and  want  to  implement  cfqueryparam  for  all  parameters. But It will  take  more  time  to  search  all  the  cfquery  that are not having  cfqueryparam  in  SQL statements. However, the [QueryParam Scanner](http://www.hybridchill.com/projects/qpscanner.html "http://www.hybridchill.com/projects/qpscanner.html")  by  [Peter Boughton](http://blog.bpsite.net/ "http://blog.bpsite.net/")  has made it possible and easier for me.  

Installing QueryParam Scanner is simple. Just download the code from  [http://www.hybridchill.com/projects/downloads.html](http://www.hybridchill.com/projects/downloads.html "http://www.hybridchill.com/projects/downloads.html")  or from  [http://qpscanner.riaforge.org/](http://qpscanner.riaforge.org/ "http://qpscanner.riaforge.org/")  and unzipped its content to your web root. Now you can start scanning your applications for all the missing cfqueryparam tags in the cfquery. The UI of QueryParam Scanner is simple and friendly with options to select the formats of the results after scanning.  

![CF QueryParam Scanner](/assets/images/blog/QueryParamScannerFull.png "CF QueryParam Scanner")  
  

QueryParam Scanner saved my time on identifying all the variables in the queries that are unused with cfqueryparam. All credits to Peter Boughton for this tool. I'm certain this will help on saving most of our time on testing our applications environments to cross check whether they have utilized cfqueryparam in their modules.

There is an Eclipse Plugin also available for Eclipse lovers that can be at downloaded from here  [http://www.hybridchill.com/projects/downloads.html](http://www.hybridchill.com/projects/downloads.html "http://www.hybridchill.com/projects/downloads.html"). Eclipse plugin allows you to scan by right clicking your project folder and selecting "Scan with QueryParam Scanner" option from your Eclipse IDE. 

I added the QueryParam Scanner in my ColdFusion Administrator as a Custom Extension which will be handier for developers who are not using Eclipse and easier to launch QueryParam Scanner from ColdFusion Administrator itself. For more on creating ColdFusion Administrator Extensions read Raymond Camden blog post here  [http://www.coldfusionjedi.com/page.cfm/Guide-to-ColdFusion-Administrator-Extensions](http://www.coldfusionjedi.com/page.cfm/Guide-to-ColdFusion-Administrator-Extensions "http://www.coldfusionjedi.com/page.cfm/Guide-to-ColdFusion-Administrator-Extensions")


