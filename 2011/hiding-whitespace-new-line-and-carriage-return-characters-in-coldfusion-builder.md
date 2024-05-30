---
title: "Hiding Whitespace, New Line and Carriage Return Characters in ColdFusion Builder"
date: 2011-06-24T18:00:00.000
tags: ["cfbuilder","utilities"]
redirect_from: 
  - /blog/index.cfm/2011/6/24/Hiding-Whitespace-New-Line-and-Carriage-Return-Characters-in-ColdFusion-Builder/
  - /blog/index.cfm/2011/6/24/hiding-whitespace-new-line-and-carriage-return-characters-in-coldfusion-builder/
permalink: /blog/2011/6/24/hiding-whitespace-new-line-and-carriage-return-characters-in-coldfusion-builder/
---

Just a  quick  note to myself, this  issue  is  happened  to me previously and  I  somehow overlook how  I addressed  it. Yesterday I accidently enabled the whitespace characters in CF Builder that in turn displays the new line (\n) and carriage return (\r)  characters as well in the Editor.  

This  is  how my  editor  looks  even after the "Show whitespace  characters" is unchecked in  preferences.

> Preferences > Editors > Text Editor Section of my ColdFusion Builder.

![Hiding Whitespace, New Line and Carriage Return Characters in ColdFusion Builder](/assets/images/blog/BP_CFBWhiteSpace.png "Hiding Whitespace, New Line and Carriage Return Characters in ColdFusion Builder")

After a  bit  of goggling, I  got  the  solution  from  [Raymond Camden](http://goo.gl/gOeJg)  blog  for  hiding  the white space characters. To  enable  Show/Hide of whitespace/new line/carriage return characters in ColdFusion Builder/Eclipse all we  require  to  utilize  is  **CTRL  + .**  (CTRL  + DOT)  key combinations.