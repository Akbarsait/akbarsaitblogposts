---
title: "Installing Subversion Server and Client on Windows"
date: 2008-06-02T18:00:00.000
tags: ["utilities"]
redirect_from: 
  - /blog/index.cfm/2008/6/2/Installing-Subversion-Server-and-Client-on-Windows/
  - /blog/index.cfm/2008/6/2/installing-subversion-server-and-client-on-windows/
permalink: /blog/2008/6/2/installing-subversion-server-and-client-on-windows/
---

Last week I installed Subversion in my systems and found "Mere-Moments Guide to installing a Subversion server on Windows" very helpful indeed and which minimize my time from googling on for more information's about installation. I found another blog entry for subversion installation with screen-shots about each step during installation. I am sharing both the links here for your reference on installing Subversion and I'm sure it will save your time.

**Joe White's Blog: Mere Moments Guide To Installing A Subversion Server On Windows:**  [http://blog.excastle.com/2005/05/31/mere-moments-guide-to-installing-a-subversion -server-on-windows/](http://blog.excastle.com/2005/05/31/mere-moments-guide-to-installing-a-subversion-server-on-windows/ "http://blog.excastle.com/2005/05/31/
mere-moments-guide-to-installing-a-subversion-server-on-windows/")  

**Team Systems : Setting up a Subversion Server under (Installation steps with screen-shots) Windows:**  [http://blogs.vertigosoftware.com/teamsystem/archive/2006/01/16/Setting_up_a_Subversion_Server_under_ Windows.aspx](http://blogs.vertigosoftware.com/teamsystem/archive/2006/01/16/Setting_up_a_Subversion_Server_under_Windows.aspx "http://blogs.vertigosoftware.com/teamsystem/archive/2006/01/16/
Setting_up_a_Subversion_Server_under_Windows.aspx")  

Download the SVNService.zip (the link is no longer available in above blogs): [http://www.stanford.edu/~bsuter/subversion-setup-guide/SVNService.zip](http://www.stanford.edu/~bsuter/subversion-setup-guide/SVNService.zip "http://www.stanford.edu/~bsuter/subversion-setup-guide/SVNService.zip")  

**Subversion books**  
- O'Reilly Online Book:  [http://svnbook.red-bean.com](http://svnbook.red-bean.com/ "http://svnbook.red-bean.com/")  
- Manning Publications:  [http://www.manning.com/machols/](http://www.manning.com/machols/ "http://www.manning.com/machols/")  
- Apress:  [http://www.apress.com/book/view/1590597532](http://www.apress.com/book/view/1590597532 "http://www.apress.com/book/view/1590597532")  
- William Nagel [http://www.informit.com/content/images/0131855182/downloads/Nagel_book.pdf](http://www.informit.com/content/images/0131855182/downloads/Nagel_book.pdf "http://www.informit.com/content/images/0131855182/downloads/Nagel_book.pdf")  

During my installation I got some issues one after another they are mostly because of the spaces in svnserve.conf and in passwd files of svn_repos\conf folder. I am sharing this information because it will be useful during your installation process.

**Error Message (This error occurred while starting the server manually and creating a project):**  

> svn: C:\Documents and Settings\Subversion Repository\conf\svnserve.conf:12: Option expected svn: Your commit message was left in a temporary file: svn: 'svn-commit.3.tmp'

The issue is because in my svnserve.conf there where some leading space character I left while uncommenting my svnserve.conf file.
```svn
** Cause for error: [general]  
anon-access=read  
auth-access=write  
password-db=passwd  
```
Altered Lines to Resolve the error: **  

[general] anon-access=read auth-access=write password-db=passwd

Here is another link for Subversion installation from Brain kohars' Blog about  [Less Than Mere-Moments Installation of Subversion](http://blog.briankohrs.com/2005/09/06/less-than-mere-moments-installation-of-subversion/ "http://blog.briankohrs.com/2005/09/06/less-than-mere-moments-installation-of-subversion/")

**Subclipse - Subversion Plug-in for Eclipse:**
- Download most recent version of Subclipse at  [http://subclipse.tigris.org/](http://subclipse.tigris.org/ "http://subclipse.tigris.org/")
- Installing Subclipse  [http://subclipse.tigris.org/install.html](http://subclipse.tigris.org/install.html "http://subclipse.tigris.org/install.html")
- Using Subclipse  [http://open.ncsu.edu/se/tutorials/subclipse/](http://open.ncsu.edu/se/tutorials/subclipse/ "http://open.ncsu.edu/se/tutorials/subclipse/")

