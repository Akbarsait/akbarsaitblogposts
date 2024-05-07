---
title: "ColdFusion 9 UI Enhancements: Creating Accordion Navigation Using CFLayout tag"
date: 2009-07-21T18:00:00.000
tags: ["coldfusion"]
redirect_from: 
  - /blog/index.cfm/2009/7/21/ColdFusion-9-Using-Accordion-in-CFLayout/
  - /blog/index.cfm/2009/7/21/coldfusion-9-using-accordion-in-cflayout/
permalink: /blog/2009/7/21/coldfusion-9-using-accordion-in-cflayout/
---

The UI Enhancement in ColdFusion 9 includes many new AJAX control tags and enhancement to the existing UI controls in ColdFusion 8. The AJAX controls in ColdFusion leverages the ExtJS 3.0 Library for to create Rich UI Controls. The new addition is Accordion navigation to CFLayout tag. The accordion is very useful for compressing many elements in a compacts space in our web sites. Using the below code we can create accordion navigation in ColdFusion very easily.

```cfscript
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
	<title>Using Accordion in CFLayout</title>
</head>
<body>
    ### Using Accordion in CFLayout
    
    <cflayout name="myAccordionLayout" type="accordion" width="600px">
        
	<cflayoutarea title="ColdFusion 9 Tutorials" align="left">
		### ColdFusion 9 Tutorials
		<p>ColdFusion 9 Tutorials.</p>
	</cflayoutarea>

	<cflayoutarea title="CFScript Enhancement Tutorials">
		### ColdFusion Builder Tutorials
		<p>CFScript Enhancement Tutorials</p>
	</cflayoutarea>
					
	<cflayoutarea title="ColdFusion As a Serveice Tutorials" align="left">
		### ColdFusion 9 Tutorials
		<p>ColdFusion As a Serveice Tutorials</p>
	</cflayoutarea>
				
	<cflayoutarea title="Hibernate-based ORM Tutorials" align="left">
		### ColdFusion Builder Tutorials
		<p>Hibernate-based ORM Tutorials</p>
	</cflayoutarea>
    
    </cflayout>

</body>
</html>
```


![CFLayout with Accordion Example](/assets/images/blog/CFLayoutWithAccordion.png "CFLayout with Accordion Example")

Each Accordion navigation generated using CFLayout tag will have a &#43; or &#45; button on the title area for to expand and collapse the accordion. By default the layout area will expand and collapse by clicking anywhere in the accordion title bar. This can be prevented using the attribute titleCollapse which makes the layout area will be expandable and collapsible only by clicking the &#43; or &#45; button in the title bar.