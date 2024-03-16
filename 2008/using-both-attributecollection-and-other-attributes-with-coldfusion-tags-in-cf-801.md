---
title: "Using both AttributeCollection and other Attributes with ColdFusion tags in CF 8.0.1"
date: 2008-07-17T18:00:00.000
tags: ["coldfusion"]
redirect_from: 
  - /blog/index.cfm/2008/7/17/Using-both-AttributeCollection-and-other-Attributes-with-ColdFusion-tags-in-CF-801/
  - /blog/index.cfm/2008/7/17/using-both-attributecollection-and-other-attributes-with-coldfusion-tags-in-cf-801/
permalink: /blog/2008/7/17/using-both-attributecollection-and-other-attributes-with-coldfusion-tags-in-cf-801/
---

The ColdFusion 8 AttributeCollection is one of the coolest features with ColdFusion 8 Release. The ColdFusion 8.0.1 release gave some enhancements to AttributeCollection which is nothing but combining both attributes and attributecollection with a ColdFusion tag. We can use attributecollection like this


```cfscript
<!--- Creating attributecollection name/value pairs for cfmail tag --->

<cfset objMailAttributes = {
    Server   = "mail.mycompany.com",
    Username = "companyxyz",
    Password = "zyxcompany",
    To       = "tomail@mycompany.com",
    From     = "frommail@mycompany.com",
    Subject  = "Using AttributeCollection and Attributes in CF8",
    Type     = "plain"

                   } />

<!--- Using attributecollection structure in the cfmail tag --->
<cfmail attributecollection = "#objMailAttributes#" type="html">
    <p>
        Now we can use both AttributeCollection and Attributes with ColdFusion tags in CF 8.0.1
    </p>
</cfmail>
``` 

In the above code I have added an attribute type with value "html". So if an individual attribute is already defined in the attributecollection then ColdFusion will only use the individual attribute value. Executing the above code with CF 8.0.0 will throw you an error like below. 

> The attributeCollection attribute cannot be used in combination with other attributes in the cfmail tag.

Related Information:

- ColdFusion 8 Update 1 Download Link:  
[http://www.adobe.com/support/coldfusion/downloads_updates.html#cf8](http://www.adobe.com/support/coldfusion/downloads_updates.html#cf8)
- ColdFusion 8 Livedocs about AttributeCollection:  
[http://livedocs.adobe.com/coldfusion/8/htmldocs/help.html?content=Elements_04.html](http://livedocs.adobe.com/coldfusion/8/htmldocs/help.html?content=Elements_04.html)
- Ben Nadel Blog Entry About AttributeCollection in CF8:  
[http://www.bennadel.com/blog/755-Learning-ColdFusion-8-Defining-Tags-With-AttributeCollection.htm](http://www.bennadel.com/blog/755-Learning-ColdFusion-8-Defining-Tags-With-AttributeCollection.htm)