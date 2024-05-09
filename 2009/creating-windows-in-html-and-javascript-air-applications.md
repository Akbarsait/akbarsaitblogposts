---
title: "Creating Windows in HTML and JavaScript AIR Applications"
date: 2009-06-01T18:00:00.000
tags: ["learning","web"]
redirect_from: 
  - /blog/index.cfm/2009/6/1/Creating-Windows-in-HTML-and-JavaScript-AIR-Applications/
  - /blog/index.cfm/2009/6/1/creating-windows-in-html-and-javascript-air-applications/
permalink: /blog/2009/6/1/creating-windows-in-html-and-javascript-air-applications/
---
[Adobe AIR](http://www.adobe.com/products/air/ "Adobe AIR")  is such a great technology from Adobe for developers who wish to use their existing web development knowledge to create Desktop application. If you would like to learn more on using  [jQuery](http://jquery.com/ "jQuery")  with AIR please do keep an eye on  [Andy Mathews](http://www.andymatthews.net/ "Andy Mathews")  and  [Jason Dean](http://www.12robots.com/ "Jason Dean")  blogs.

In my previous post about  [AIR for Web Developers](http://www.akbarsait.com/blog/index.cfm/2009/1/18/Adobe-AIR-For-Web-Developers "AIR for Web Developers")  where I have explained about Installing AIR SDK and creating, testing and running your AIR Application using command prompt in Windows OS and for using Aptana with AIR follow this blog  [post](http://www.andymatthews.net/read/2009/05/26/jQuery-and-AIR:-Creating-a-new-AIR-project-in-Aptana "Using Apatan for AIR")  by Andy Mathews. So now let's starts with a simple example of creating windows in AIR Application. Apart from the initial main window, we can also creates other windows in HTML based AIR application. We can create two types of window and they are called as standard HTML windows which look similar as windows in web browsers and Native windows which look similar to the windows of native Operating system (Windows, Mac, or Linux).

The Standard HTML type window in AIR can be created using window.open() method with the following parameters.

```javascript
<html>
	<head>
		<title>Creating Windows in HTML and JavaScript AIR Applications</title>
	</head>
	<script>
	        function createStandardHTMLWindow(){
                window.open("myWindow.html","StandardHTMLWindow", "height=250,width=500");
                }
        </script>
	<body> 
		# Creating Windows in HTML and JavaScript AIR Applications
		<button onclick="createStandardHTMLWindow();">Standard HTML Window</button>
	</body>
</html>
```

In the above code I passed three values the url parameter, name and features (height, width, toolbar, scroll bar etc,). The value for the url parameter (myWindow.html) can be either within the AIR application sandbox or outside of the application sandbox scope like external pages or website url. The new window will load the content of the page once user clicks the button in AIR Application.

To create a native window in AIR application first thing we have to do is to create an instance of **NativeWindowInitOptions** class of flash.display package. This class defines the necessary options for to create native window instance. It has the following 6 properties systemChrome (standard, none), transparent, type (normal, lightweight, utility), maximizable, minmizable and resiazable. Other then systemChrome and type all the other properties will take Boolean values either true or false. In the below code we just created an object of type NativeWindowInitOptions class. 

```javascript
/* Defining native window options. */
var nativeWindowsOptions	= new air.NativeWindowInitOptions();
```

Next we are creating a Rectangle object which aligns as 200 pixels from left and bottom with 300 pixels as height and width.

```javascript
/* Defining the boundaries of new window. */
var nativeWindowdBoundaries	= new air.Rectangle(200,200,300,300);
```

Using HTMLLoader.createRootWindow method we can create window with more options. It has the following 4 properties, **visible** to set whether the window is visible or not,  **windowInitOptions** for to specify the object which holds the initialization options, **scrollBarsVisible** for display scroll bars and **bounds** for setting the window boundaries.

```javascript
/* creating the window using HTMLLoader object. */
var nativeWindowHTMLLoader	= air.HTMLLoader.createRootWindow(true,  nativeWindowsOptions, true, nativeWindowdBoundaries);
```

Now we need to load the actual page with content to do that we need to use the load() method of HTMLLoader object. Before using load() method lets fetch the actual file and assign it to a variable nativeWindowPage.


```javascript
/* Defining the page of new native window. */
var nativeWindowPage    =   air.File.applicationDirectory.resolvePath('myWidow.html');
	
/* Loading the window. */
nativeWindowHTMLLoader.load(new air.URLRequest(nativeWindowPage.url));	
```

To summarize the above code create a new function createNativeWindow() and call it in the onclick event of an button. I have added AIRAliases.js file at the top of which helps to provide alias definition for to access the runtime class with lesser amount typing in AIR applications.

```javascript
<html>
	<head>
		<title>Creating Windows in HTML and JavaScript AIR Applications</title>
		<script type="text/javascript" src="lib/air/AIRAliases.js" />
		<script>
		function createNativeWindow(){

		/* Defining native window options. */
		var nativeWindowsOptions	= new air.NativeWindowInitOptions();

		/* Defining the boundaries of new window. */
		var nativeWindowdBoundaries	= new air.Rectangle(200,200,300,300);
        
		/* creating the window using HTMLLoader object. */
		var nativeWindowHTMLLoader	= air.HTMLLoader.createRootWindow(true,  nativeWindowsOptions, true, nativeWindowdBoundaries);

		/* Defining the page of new native window. */
		var nativeWindowPage            =   air.File.applicationDirectory.resolvePath('myWidow.html');
	
		/* Loading the window. */
		nativeWindowHTMLLoader.load(new air.URLRequest(nativeWindowPage.url));	
		}
		</script>
	</head>
	<body> 
		# Creating Windows in HTML and JavaScript AIR Applications
		<button onclick="createNativeWindow();">Native HTML Window</button>
	</body>
</html>
```

We have created the Native window in AIR Application with just 5 lines of code. Adobe AIR Rocks!