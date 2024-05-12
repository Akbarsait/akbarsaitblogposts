---
title: "Adding Highslide JS to BlogCFC"
date: 2010-01-07T18:00:00.000
tags: ["blog","coldfusion"]
redirect_from: 
  - /blog/index.cfm/2010/1/7/Adding-Highslide-JS-to-BlogCFC/
  - /blog/index.cfm/2010/1/7/adding-highslide-js-to-blogcfc/
permalink: /blog/2010/1/7/adding-highslide-js-to-blogcfc/
---

This post is to demonstrate how quickly we can include [Highslide JS](http://highslide.com/) to blogCFC in a four simple steps. Highslide JS is an open source JavaScript image/gallery library and is free Non-commercial use. Highslide will be extremely useful in placing full-size images without worrying about the blog layout. Over here are the steps on how we can include Highslide to blogCFC.

-   Download Highslide JS from [here](http://ur.ly/3S7A) and extract the zip file once downloaded. The core files are in the Highslide folder (Highslide.min.js, Highslide.css) and graphics images are in the graphics folder.
-   Copy the highslide folder with above-mentioned files and Upload that to includes folder of blogCFC. For my installation it will be like this akbarsait.com/blog/includes/highslide/.
-   Edit your layout.cfm file to add the code as below.

```cfscript
<!--- HighSlide JS and CSS Files --->
<script  type="text/javascript"   src="#application.rooturl#/includes/highslide/highslide.min.js">
</script>
<link rel="stylesheet" type="text/css" href="#application.rooturl#/includes/highslide/highslide.css" />

<!---
Optionally override the settings defined at the top of the highslide.js file. The parameter hs.graphicsDir is important!
 --->
<script type="text/javascript">
hs.graphicsDir = '#application.rooturl#/includes/highslide/graphics/';
hs.outlineType = 'rounded-white';
</script>
```
- Link the images in your blog post as below.
```cfscript
<a id="img1" href="http://www.akbarsait.com/blog/images/ChicagoSnow.jpg" class="highslide" onclick="return hs.expand(this)">
<img src="http://www.akbarsait.com/blog/images/ChicagoSnow.jpg" alt="Snow at Chicago" title="Click to enlarge" height="160" width="150" />
</a>
<!---
This is optional one to for display caption for the highlighted image
--->
<div class="highslide-caption">
Another snow day at Chicago!
</div>
```

We have all done to use the Highslide in blogCFC and over here is the demo on how it works. 

![Highslide JS](http://www.akbarsait.com/blog/images//ChicagoSnow.jpg "Click to enlarge")
