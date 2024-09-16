---
title: Connecting and Loading data in Power BI
date: 2024-04-21T08:30:00.000
tags: ["learning" , "powerBI"]
image: /assets/images/post/nyc-akbar-sized.jpg
permalink: /blog/2024/04/21/connecting-and-loading-data-in-powerbi/
---
   

To start, you can load data for analysis into Power BI by using the "Get Data" option. Power BI offers a wide range of data sources and connections that allow you to import external or local data into the Power BI desktop.
For this example, let's utilize the [Employee Salaries Analysis](https://www.kaggle.com/datasets/sahirmaharajj/employee-salaries-analysis/data) dataset from Kaggle. Just click on "Get Data" and choose Text/CSV, like in the screenshot, to load the downloaded file from Kaggle.    


![Power BI Get Data](/assets/images/blog/getdata2.png)   


When we bring Excel or CSV data into Power BI, it needs to be in a table or data model format. After selecting the file, Power BI analyzes it and shows a preview window where you choose the data or sheet to import. In this preview, you have two choices:

1.  Load: Directly imports the data to Power BI without changing the source data.
2.  Transform Data: Allows you to review and fix issues in the data before loading it by performing transformations.   


![Power BI Load and Transform Data](/assets/images/blog/getdata-loadntransform.png)   


Clicking "Transform Data" opens the Power Query editor, which is Power BI's data transformation tool. The Power Query can accessed easily by clicking Transform Data in the Home menu. With Power Query, you can:

-   Convert data types like text to numbers or dates.
-   Merge/Append data from different files and sources in Power BI.
-   Clean data by removing unnecessary rows and columns.
-   Add conditional columns based on specific criteria.

Power BI simplifies the process of loading and transforming data using Power Query, streamlining data analysis and reporting tasks. Let's learn the transformation options in detail in the next post. 

**Related Post:**
- [Getting Started with Power BI](/blog/2024/02/13/getting-started-with-powerbi/)  


> Title Photo by <a href="https://unsplash.com/@akbarsait?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Akbar Noormohamed (me :-))</a> on <a href="https://unsplash.com/photos/unuO94cSQEc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  