---
title: "Scheduling Tasks in Windows 7"
date: 2011-07-31T18:00:00.000
tags: ["utilities"]
redirect_from: 
  - /blog/index.cfm/2011/7/31/Scheduling-Tasks-in-Windows-7/
  - /blog/index.cfm/2011/7/31/scheduling-tasks-in-windows-7/
permalink: /blog/2011/7/31/scheduling-tasks-in-windows-7/
---

Windows 7 make many things simpler, and one of them is the Task Scheduler feature. Task Scheduler help to perform automation of tasks that can run on regular/schedule intervals.Either on daily or weekly or on a monthly basis. Task Scheduler help to perform automation of tasks that can run on regular/schedule intervals. Either on daily or weekly or on a monthly basis.


Using it, we can operate a program, send an email/display a message. One thing I managed to perform in my dev system regularly is manually restarting ColdFusion server on a daily basis with this batch script. 

```cmd
@echo off
echo Stopping ColdFusion 9 Services
echo ======================================================
net stop "ColdFusion 9 Application Server"
echo Starting ColdFusion 9 Services
echo ======================================================
net start "ColdFusion 9 Application Server"
echo ======================================================
echo ColdFusion 9 Services are Started

``` 

Let note how we can utilize the Task Scheduler in Windows 7 to automate this process.

- To Launch the Task Scheduler go to **Control Panel > Administrative Tools > Task Scheduler** or just type "Task" on the Windows menu search.

- Create a Basic Task and follow the steps which ask for when and what time you want to trigger a job (Email, Program etc.) the remaining steps are self-explanatory.

- To execute the above batch file I just mentioned the file location of it in "Start a Program" wizard which triggers my ColdFusion Server restart.

![Scheduling Tasks in Windows 7](/assets/images/blog/W7ST5.png "Scheduling Tasks in Windows 7")

Done. I am certain many of us are utilizing this feature already but if you're not then don't wait. This utility undoubtedly reduces our time in performing these types of repetitive works.