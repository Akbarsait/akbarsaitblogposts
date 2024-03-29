---
title: "Using Result attribute in CFQuery to retrieve Auto-Generated Key on Insert in ColdFusion 8"
date: 2008-09-14T18:00:00.000
tags: ["coldfusion"]
redirect_from: 
  - /blog/index.cfm/2008/9/14/Using-Result-attribute-in-CFQuery-to-retrieve-AutoGenerated-Key-on-Insert-in-ColdFusion-8/
  - /blog/index.cfm/2008/9/14/using-result-attribute-in-cfquery-to-retrieve-autogenerated-key-on-insert-in-coldfusion-8/
permalink: /blog/2008/9/14/using-result-attribute-in-cfquery-to-retrieve-autogenerated-key-on-insert-in-coldfusion-8/
---

ColdFusion 8 added the functionality of retrieving the auto-generated key ID in the result structure of the CFQuery after the specific insert operation to each database used. 

```sql
Database Specific Auto-Generated Keys:
SQL Server: IDENTITYCOL
MySQL: GENERATED_KEY
Sybase: SYB_IDENTITY
Informix: SERIAL_COL
Oracle: ROWID
```

Here I'm inserting a value into the members table of my MySQL database.

```cfscript
<cfquery datasource=" MySQL_ChennaiCFUG " result="mysqlresult">
	Insert Into members (name) values ('Akbar')
</cfquery>
```

Here is the Result structure when I dump it:
![MySQL with Auto Generate Key](/assets/images/blog/MySQLResult_WithAutoGeneratedKey.JPG "MySQL with Auto Generate Key")

This is extremely refreshing thing from ColdFusion 8 which reduces the developer time on writing another query to fetch the newly created row ID value.

> Note: I have created another datasource name for the same database but I have used ODBC socket as datasource driver.

![MySQLODBCConnection](/assets/images/blog/MySQLODBCConnection.JPG "MySQLODBCConnection")

```cfscript
<cfquery datasource="MySQL_ODBC_ChennaiCFUG" result="mysqlodbcresult">
	Insert Into members (name) values ('Govindh')
</cfquery>
```

The cfdump result for the above query:
![MySQLResult_WithoutAutoGeneratedKey](/assets/images/blog/MySQLResult_WithoutAutoGeneratedKey.JPG "MySQLResult_WithoutAutoGeneratedKey")


In the above dump GENERATED_KEY is not available but other items in the structure are available. Anyone have any idea about this scenario please comment.