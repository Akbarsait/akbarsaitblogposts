---
title: "Installing CFWheels 1.0"
date: 2009-11-24T18:00:00.000
tags: ["coldfusion"]
redirect_from: 
  - /blog/index.cfm/2009/11/24/Installing-CFWheels-10/
  - /blog/index.cfm/2009/11/24/installing-cfwheels-10/
permalink: /blog/2009/11/24/installing-cfwheels-10/
---

[**ColdFusion on Wheels 1.0**](http://cfwheels.org/), the production ready version hits the web today. I haven't utilized it before and wanted to discover its features over the other frameworks available for ColdFusion. Installation is simple without worrying about setting any configuration variables. Here is the simple three steps installation of the framework in windows with IIS.

-   Download CFWheels 1.0 from  [here](http://cfwheels.org/download/latest-version)  or check out it from SVN Trunk  [here](http://cfwheels.googlecode.com/svn/trunk/).
-   Unzip and copy the contents of "cfwheels.1.0-final" directory from the downloaded CFWheels 1.0 framework and put that into any folder in your systems. I placed the contents at the following path. "D:\Websites\Development\myCFWheelsApp"
-   Create a new Virtual Directory or Web Site in the IIS and map the above folder path to it. I have named this virtual directory as "mycfwheelsapp".

!["CFWheels"](/assets/images/blog/CFWheels.png "CFWheels")
 
!["CFWheels Footer"](/assets/images/blog/CFWheelsFooter.png "CFWheels Footer")
 
Done. We completed the installation and ready to create our first CFWheels powered app. In the screenshot, you can find useful information like CFWheels running version, CFML Engine and the current active environment. By default, it be design, we can modify it in the environment.cfm file resides in config folder. In addition, we can refresh the CFWheels application scope by clicking reload link.