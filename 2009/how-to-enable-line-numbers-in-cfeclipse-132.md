---
title: "How to Enable Line Numbers in CFEclipse 1.3.2"
date: 2009-03-06T18:00:00.000
tags: ["utilities"]
redirect_from: 
  - /blog/index.cfm/2009/3/6/How-to-Enable-Line-Numbers-in-CFEclipse-132/
  - /blog/index.cfm/2009/3/6/how-to-enable-line-numbers-in-cfeclipse-132/
permalink: /blog/2009/3/6/how-to-enable-line-numbers-in-cfeclipse-132/
---
**Problem:**  I got an issue when I installed the CFEclipse in one of my system at work place. The installed versions are Eclipse 3.3.2 Europa and CFEclipse 1.3.2 beta. In previous version of CFEclipse we have the option for enabling line numbers by selecting "Windows > Preferences > CFEclipse > Editor > Show Line Number Checkbox". But this is not available in CFEclipse 1.3.2. There is another way for enabling is by right clicking the editor and check marking the "Show Line Numbers" this is also not worked for me. After goggling I have found the solution from  [CFEclipse discussion group](http://groups.google.com/group/cfeclipse-users/browse_thread/thread/3ee684cc2432ecfa/0cddd9cfb9bc446a?hl=en&pli=1).

**Solution:**  Navigate to your Eclipse Workspace and open the File org.cfeclipse.cfml.prefs from "Workspace > .metadata > .plugins >. org.eclipse.core.runtime > .settings" folder and add this line at the end of the page.

```vscode
lineNumberRuler=true 
```

Close the page and restart CFEclipse. Now you can able to see the line numbers in CFEclipse.