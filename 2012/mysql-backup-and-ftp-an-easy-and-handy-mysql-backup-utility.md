---
title: "MySQL Backup and FTP: An easy and handy MySQL Backup Utility"
date: 2012-01-20T18:00:00.000
tags: ["utilities"]
redirect_from:
  - /blog/index.cfm/2012/1/20/MySQL-Backup-and-FTP-An-Easy-and-Handy-MySQL-Backup-Utility/
  - /blog/index.cfm/2012/1/20/mysql-backup-and-ftp-an-easy-and-handy-mysql-backup-utility/
permalink: /blog/2012/1/20/mysql-backup-and-ftp-an-easy-and-handy-mysql-backup-utility/
---
There are many ways out there to automate the backup process of SQL Databases. I have been using some of them over the time and was found something missing in it on the functionality side. Quite recently I started using the  [MySQL Backup FTP](http://mysqlbf.com/)  tool which is really handy and I would say it does the job perfectly on taking the databases backups.

MySQL Backup FTP helps backup your MySQL database and save them in your preferred choice of locations. Backups can be stored in a network server, FTP or on your local machine itself. We can schedule a backup process in a minute implementing their simplified interface. Once the backup is completed, you will receive an email on about the success or failure of the process.

![MySQL Backup and FTP: An Easy and Handy MySQL Backup Utility](/assets/images/blog/MySQLBackUpFTP.png "MySQL Backup and FTP: An Easy and Handy MySQL Backup Utility")  

Instead of going through each and every feature of it, I just want to highlight some of them which I like most.

- It lets you choose on which file format you want the backup to be taken either in zip or 7z formats.

- Let's you to choose the backup file compression option which help in saving it in an encrypted format.

- Customized backup filename.

- Completely logs the backup process and allows you to choose the location for storing the logs. Either locally in your machine or on their server using the weblog option.

- Options for what needs to be included in the Structure and Data of the generated SQL backup Script. Like adding a custom comment, disabling the foreign key checks and so on.

- Features like setting the timeout duration and temp folder location for large database backups.

[MySQL Backup FTP](http://mysqlbf.com/)  has  some  limitations  as well like it supports  only  MySQL 5.0 and higher versions, available  only  for windows platform. Apart from these  limitations  I  think  this  is  and really  handy  utility with  tons  of  features. The tool  will  allow transferring backups to the cloud storage services like Amazon S3, Dropbox  and  [Dropbox like  service](http://www.yousendit.com/solutions/dropbox),  and  Box.net etc.  
  
I am certain this  tool  will be  really  helpful for  you  too. Give  a try to the free  version  available  if  you  haven't utilized it already. Let  me  know  what  you  think.