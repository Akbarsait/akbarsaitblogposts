---
title: "Configuring and Running Railo Powered CFML Applications on Jelastic Cloud"
date: 2012-01-25T18:00:00.000
tags: ["coldfusion","learning"]
redirect_from: 
  - /blog/index.cfm/2012/1/25/Configuring-and-Running-Railo-Powered-CFML-Applications-on-Jelastic-Cloud/
  - /blog/index.cfm/2012/1/25/configuring-and-running-railo-powered-cfml-applications-on-jelastic-cloud/
permalink: /blog/2012/1/25/configuring-and-running-railo-powered-cfml-applications-on-jelastic-cloud/
---

I have been following the Jelastic Cloud for a month and wanted to try their offering. The team behind Jelastic did all the ground works for us to get up and Running with railo in their environment. I configured railo and created a sample job search application [**railoweb.akbarsait.com**](http://railoweb.akbarsait.com/) and hosted it in their Cloud that required only 10 minutes.


The below configuration information are one which I read and learned from CFML community geeks [Matt Woodward](http://goo.gl/Dh5dV), [Sean Corfield](http://goo.gl/Aw7UE), [Todd Rafferty](http://goo.gl/wrdwb), and Jamie Krug and the credits are going to them completely.

Before we proceed, follow the video by the Jelastic team on  [Deploying Railo in Jelastic Cloud.](http://www.youtube.com/watch?v=USIX4wYKREM)

**Installing Railo and Tomcat on Jelastic Cloud:**<br/>

-  Signup for the  [Jelastic Cloud](http://www.jelastic.com/)  account and Create your environment by adding Tomcat 6, JDK 6 and MySQL.
    
-  Copy the latest Railo WAR file link from  [Railo download](http://www.getrailo.org/index.cfm/download/)  section.
    
-  Under deployment manger, select Upload and enter the Railo WAR URL link. Wait until you see the railo.war is added to the Deployment Management section.
    
-  Deploy railo to the environment you created in the first step. Wait for a minute and once installed, click browse button to launch the railo administrator. The URL link is below. 
>   **yourenvironmentname.jelastic.servint.net**

![Configuring and Running Railo Powered ColdFusion Applications on Jelastic Cloud](/assets/images/blog/JelasticCloud_Railo.png "Configuring and Running Railo Powered ColdFusion Applications on Jelastic Cloud")

- In case if you are unable to view Railo Administrator and getting any 502 or related errors then go and refresh your environment and try again. 

**Configuring a Railo powered ColdFusion site:**
- Click on the Config icon in your Tomcat setting and select the catalina.properties file under the server folder and add your Railo paths to common.loader class path and save it.

```xml
#Added the Railo *.JAR path
common.loader=${catalina.home}/lib,${catalina.home}/lib/*.jar,${catalina.home}/webapps/ROOT/WEB-INF/lib/*.jar
```

> Note: Currently Jelastic allows us to upload new files, generate files/folders under /opt/tomcat/(catlina.home) of your environment. File/folder moving functionality is unavailable during this beta. Hence, I kept the railo JAR files under the default installed location and appended this path to the existing common.loader class as below. 
 
```cfscript
${catalina.home}/webapps/ROOT/WEB-INF/lib/*.jar"
```
- Open web.xml file and paste the following contents under the "servlet","servlet-mapping" and "welcome-file-list"" sections and save it.

```xml
<!-- Railo Servlet section-->
<servlet>
	<servlet-name>GlobalCFMLServlet</servlet-name>
	<description>CFML runtime Engine</description>
	<servlet-class>railo.loader.servlet.CFMLServlet</servlet-class>
	<init-param>
		<param-name>configuration</param-name>
		<param-value>{web-root-directory}/WEB-INF/railo/</param-value>
		<description>Configuraton directory</description>
	</init-param>    
	<load-on-startup>1</load-on-startup>
</servlet>

<servlet>
	<servlet-name>GlobalAMFServlet</servlet-name>
	<description>AMF Servlet for flash remoting</description>
	<servlet-class>railo.loader.servlet.AMFServlet</servlet-class>
	<load-on-startup>1</load-on-startup>
</servlet>

<servlet>
	<servlet-name>GlobalRailoFileServlet</servlet-name>
	<description>File Servlet for simple files</description>
	<servlet-class>railo.loader.servlet.FileServlet</servlet-class>
	<load-on-startup>2</load-on-startup>
</servlet>
```

```xml
<!-- Railo Servlet Mapping section-->
<servlet-mapping>
    <servlet-name>GlobalCFMLServlet</servlet-name>
    <url-pattern>*.cfm</url-pattern>
</servlet-mapping>

<servlet-mapping>
    <servlet-name>GlobalCFMLServlet</servlet-name>
    <url-pattern>/index.cfm/*</url-pattern>
</servlet-mapping>

<servlet-mapping>
    <servlet-name>GlobalCFMLServlet</servlet-name>
    <url-pattern>*.cfml</url-pattern>
</servlet-mapping>

<servlet-mapping>
    <servlet-name>GlobalCFMLServlet</servlet-name>
    <url-pattern>*.cfc</url-pattern>
</servlet-mapping>

<servlet-mapping>
    <servlet-name>GlobalAMFServlet</servlet-name>
    <url-pattern>/flashservices/gateway/*</url-pattern>
</servlet-mapping>
```

```xml
<!-- Added Index.cfm to welcome File list section -->
<welcome-file>index.cfm</welcome-file>
```

- Create a folder called railoweb under webapps directory and upload a index.cfm file with some dynamic contents in it. 

- Create a custom domain or a CNAME entry with your existing domain and point it to the environmentname.jelastic.servint.net and add the CNAME entry to Custom domains section. I have created one called railoweb.akbarsait.com for this purpose.

- Open server.xml and add the following host entry to it and save. 

```xml
	<Host name="railotomcat.akbarsait.com" appBase="webapps" 
		unpackWARs="true" autoDeploy="true" xmlValidation="false" 
		xmlNamespaceAware="false">
		<Context path="" docBase="/opt/tomcat/webapps/railoweb/" />
	</Host>
```

- Now its time to Restart the Tomcat and hit our application.

The sample application is available at [**railoweb.akbarsait.com**](http://railoweb.akbarsait.com/). Hope this helps and share your experience or issues while configuring applications.