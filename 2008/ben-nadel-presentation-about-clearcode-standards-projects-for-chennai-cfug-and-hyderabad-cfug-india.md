---
title: "Ben Nadel Presentation About ClearCode Standards Projects For Chennai CFUG and Hyderabad CFUG, India"
date: 2008-04-27T18:00:00.000
tags: ["chennai cfug","coldfusion"]
redirect_from: 
  - /blog/index.cfm/2008/4/27/Ben-Nadel-Presentation-About-ClearCode-Standards-Projects-For-Chennai-CFUG-and-Hyderabad-CFUG-India/
  - /blog/index.cfm/2008/4/27/ben-nadel-presentation-about-clearcode-standards-projects-for-chennai-cfug-and-hyderabad-cfug-india/
permalink: /blog/2008/4/27/ben-nadel-presentation-about-clearcode-standards-projects-for-chennai-cfug-and-hyderabad-cfug-india/
---

Yesterday,  [Ben Nadel](http://www.bennadel.com/) gave a great connect presentation to both [Chennai and Hyderabad ColdFusion User Groups](http://www.cfug.in/) about his ClearCode standards project. The presentation was excellent that guides on how it is valuable to create and deliver application with better coding standards and conventions in ColdFusion. He clearly explained about the Code readability, alignment, Spaces between values, assignment statements, functions and scope variables case and standards.

I want thanking [Ben Nadel](http://www.bennadel.com/) for his presentation and also would like to thank [Clark Valberg](http://www.clarkvalberg.com/) and Ayub Khan for this event a massive success for [India CFUG](http://www.cfug.in/).

Some examples From Ben Nadel's coding standards:

ColdFusion Code:

```cfscript
<cfloop
	index="intFileIndex"
	from="1"
	to="#REQUEST.FileCount#"
	step="1">
 
	<label for="file#intFileIndex#">
		File #intFileIndex#:
	</label>
 
	<input
		type="file"
		name="file#intFileIndex#"
		id="file#intFileIndex#"
		/>
 
	<br />

</cfloop>
```

SQL Statements:

```sql
INSERT INTO user
(
	first_name,
	last_name
)
VALUES
(
	<cfqueryparam cfsqltype="CF_SQL_VARCHAR" value="#FORM.first_name#" />,
	<cfqueryparam cfsqltype="CF_SQL_VARCHAR" value="#FORM.last_name#" />
)
```

CSS Rules:

```css
	<style type="text/css">
	
	body {
		color: #262626 ;
		font-family: verdana, arial, georgia ;
		font-size: 62.5% ;
		}
	h1,
	h2,
	h3,
	h4,
	h5,
	form,
	table,
	p,
	ul,
	ol {
		margin-bottom: 1.8em ;
		margin-top: 0px ;
		}
```
Ben Coding Methodology Links:

- [My Coding Methodology - Understanding The Madness And The Man Behind It](http://www.bennadel.com/blog/391-My-Coding-Methodology-Understanding-The-Madness-And-The-Man-Behind-It.htm).

- [Ben Nadel's Easy Tips For Writing Better, More Optimized SQL](http://www.bennadel.com/blog/1189-Ben-Nadel-s-Easy-Tips-For-Writing-Better-More-Optimized-SQL.htm).

- Presentation Link:  [ClearCode Standards Project By Ben Nadel](http://adobechats.adobe.acrobat.com/p47494637/)