---
title: ColdFusion 10 Resetting ColdFusion Administrator Password
date: 2012-02-22T18:00:00.000
tags: ["coldfusion"]
redirect_from: 
  - /blog/index.cfm/2012/2/22/ColdFusion-10-Resetting-ColdFusion-Administrator-Password/
  - /blog/index.cfm/2012/2/22/coldFusion-10-resetting-coldfusion-administrator-password/
permalink: /blog/2012/2/22/coldfusion-10-resetting-coldfusion-administrator-password/
---

In ColdFusion 10 if you forget the ColdFusion Administrator password, open up the Command prompt in windows or Terminal in Linux/Mac and Run the  **passwordreset.bat**  (passwordreset.sh for Linux/Mac) file which can be found under the cfusion/bin folder of your ColdFusion installed location.

You will get an option of which password you want to change either the ColdFusion Administrator or Admin Component (jetty) password. Choose the one you want to change then enter the new password and once done Restart the ColdFusion Server. Click to enlarge the below screenshot where I have opted to change the Administrator password.

![ColdFusion 10: Resetting ColdFusion Administrator Password](/assets/images/blog/CF10-PasswordReset.png "Resetting ColdFusion Administrator Password")

This feature is really a quick and handy one when comparing to the prior methods of resetting CF Admin password in the older versions of ColdFusion.