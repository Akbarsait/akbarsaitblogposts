---
title: "Adobe AIR For Web Developers"
date: 2009-01-18T18:00:00.000
tags: ["learning","web"]
redirect_from: 
  - /blog/index.cfm/2009/1/18/Adobe-AIR-For-Web-Developers/
  - /blog/index.cfm/2009/1/18/adobe-air-for-web-developers/
permalink: /blog/2009/1/18/adobe-air-for-web-developers/
---
This is a quick guide for setting up the AIR SDK and running your HTML based AIR Desktop Application on windows operating system. This topic might be an old one for seasoned AIR developers but I hope this is useful for AIR beginners like me.

**Download and Install Java JRE or JDK:**  AIR SDK requires either JRE or JDK to be installed on you computer. If you have JRE or JDK installed in your computer move to next step. You can download Java JRE at  [http://java.sun.com/j2se/1.4.2/download.html](http://java.sun.com/j2se/1.4.2/download.html)  and the java JDK at  [http://java.sun.com/javase/downloads/index.jsp](http://java.sun.com/javase/downloads/index.jsp).

**Download and Install AIR SDK:**  Download AIR SDK at  [http://www.adobe.com/products/air/tools/sdk/](http://www.adobe.com/products/air/tools/sdk/)  and choose the windows version. Extract the AIR SDK content to another location on your computer. I have extracted the content to "D:\Program Files\Adobe AIR\AIRSDK&quot;.  
Note: Please do remember the location you've extracted the SDK.

Add the AIR SDK folder’s bin directory to your system path. To do this right click on your systems  **My Computer > Properties > Advanced > Environment Variable > Systems Variables > Path > and select Edit**. At the end of the variable add a semicolon and add your AIR SDK bin folder path. Ex: "D:\Program Files\Adobe AIR\AIRSDK\bin&quot; and click OK to close them.

The AIR SDK contains the AIR Development Tool (ADT) which allows us to Package AIR applications and AIR Debug launcher (ADL) allows us to run and debug AIR application.

**Creating Project Folders and Files:**  Create a Folder called "HelloWorld" into which all the files and other folders will go. Create other folders for the application within the "HelloWorld" folder and named it us "javascripts" for to store all the JavaScript files, "style sheets" for to store application’s css files, "images" for to store graphics and "icons" to store the unique icons of your application.

**Application HTML File:** A simple HTML file with hello world text.
```html
<html>
	<head>
		<title>Hello World AIR Application</title>
	</head>
	
	<body> 
		# Hello World!
	</body>
</html>
```

**Application Descriptor XML File:** This file holds all the information about the application. 
```xml
<?xml version="1.0" encoding="UTF-8"?>
<application xmlns="http://ns.adobe.com/air/application/1.0">

<!--
    Adobe AIR Application Description File.
    1.0: This Application should be run on any version of the AIR runtime after 1.0.
    Required and optional parameters for identifying, installing, and launching AIR applications.
-->

    <!-- An unique application identifier string. The Maximum length is 255 characters.-->
    <id>projects.air.html.helloworld</id>
	
    <!-- Version of the application. -->
    <version>0.1</version>
	
    <!-- Name of the application.This will appear in About Menu, Shortcuts and Start menu.-->
    <filename>Hello World</filename>
	
    <!-- Application's initial window settings.-->
    <initialWindow>
		
	<!-- Main HTML file of the Application -->
	<content>helloworld.html</content>
	
	<!-- Default false. Makes the window visible while it runs.-->
	<visible>true</visible>

	<!-- Initial width of the window. -->
	<width>500</width> 

	<!-- Initial height of the window.-->
	<height>250</height>

    </initialWindow>

</application>
```

Both these files need to be saved in the root of the application directory.

**Testing Your Application:** Open the Command prompt and Navigate to your project directory and type this command.
```xml
> adl yourApplicationFileName.xml
```

If you&rsquo;re able to see the AIR application in a separate window then you have successfully created your first AIR Application. If you have got any messages like &quot;adl not being recognized&quot; or &quot;Java not being recognized&quot; which means that you have not installed JRE or the adl utility in not set in your systems path. Correct the issues as described in the previous steps.

**Creating a Self-Signed Certificate:** Now we can build and distribute the application to end users. To ensure the security of AIR application every application must be signed. ADT will allow us to generate a self-signed certificate. Use the following command in command prompt to generate the certificate.

```xml
> adt &#x2010;certificate &#x2010;cn mySelfSignedCertificateName 1024&#x2010;RSA mycertName.pfx mycertpassword
```

**mySelfSignedCertificateName:** A common name you provide for your certificate. (Ex: your Company&rsquo;s name.).<br/>
**mycertName.pfx:** The name of the generated certificate file.<br/>
**mycertpassword:** Password for your certificate file that you need to use when packaging the application.<br/>
**1024-RSA:** Key type of the certificate. You can also use 2048-RSA.<br/>

Now check the application folder for the newly created certificate. The self-signed certificate is valid for five years period after that you&rsquo;ll need to release the application using a new certificate.

**Packaging Your AIR Application:** Use the following command in command prompt for to package the AIR application.
```xml
> adt &#x2010;package &#x2010;storetype pkcs12 &#x2010;keystore myCertName.pfx AIRInstallerName.air application.xml helloworld.html 
```

**AIRInstallerName.air:** Name of the AIR Installer file.

We need to mention all the files, folders, assets that need to package with the application in the command line. Once the command executed it will generate the AIR distributable and installable file for your application in the application directory.