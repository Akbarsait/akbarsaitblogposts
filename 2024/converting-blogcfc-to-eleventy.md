---
title: Converting BlogCFC blog to Eleventy
date: 2024-03-16T23:30:00.000
tags: ["blog", "learning"]
image: /assets/images/blog/Yosemite-water-mountain-sky.jpg
permalink: /blog/2024/03/16/converting-blogcfc-to-eleventy/
---

This post outlines the steps for migrating an existing [BlogCFC](https://github.com/teamcfadvance/BlogCFC5) blog to a [JamStack](https://jamstack.org/what-is-jamstack/), with a focus on using [Eleventy](https://www.11ty.dev/).

**Blog Posts Conversion to MD Files:** First, convert the existing blog posts to Markdown files. Since all the BlogCFC posts are data-driven, this simplifies the process of converting them to MD files. Adrian Moreno has created a three-step script to make this even easier. Simply use the ColdFusion scripts and customize them as needed

- https://adrianmoreno.com/2018/10/06/converting-blogcfc-posts-to-markdown.html

**Comments Handling:** Next, I needed to migrate the comments from the blog. Initially, I used the built-in comments functionality that saved comments to the BlogCFC database. Later, I migrated to Disqus. Despite the low comment count, I followed these steps to manage them.

-  **Comments Export from Disqus**: Raymond Camden outlines the steps for converting: https://www.raymondcamden.com/2014/11/26/disqus-update-and-blogcfc-export-script

-  **Comments Import to Eleventy**: After converting the content to XML files, the next step is to create a JSON file with a name similar to the blog post’s Markdown (MD) files. Eleventy will automatically handle this JSON data within our markdown template. The process is documented through utility by Zach Leatherman. https://github.com/11ty/eleventy-import-disqus

```html
coldfusion-builder-extension-appcore-creator.md
coldfusion-builder-extension-appcore-creator.json
```
- The result of the imported comments will display as follows.
	- https://akbarsait.com/blog/2009/1/13/blogcfc-redesign/
	- https://akbarsait.com/blog/2013/11/23/getcfmljobscom-for-cfml-developers/
	- https://akbarsait.com/blog/2012/1/25/configuring-and-running-railo-powered-cfml-applications-on-jelastic-cloud/

-  **Handling New Comments**: There are excellent lightweight comment utilities available for managing comments on your eleventy blog. I personally use [Utterances](https://utteranc.es/), but [Giscus](https://giscus.app/) is also a great alternative.

**Redirect and Netlify:** If you’re hosting your blog on Netlify and intend to set up redirects for changes to your page URLs, create a new front-matter entry using the following script. This step is necessary only if you plan to alter the URL pattern from your previous blog to the new one.
- https://willvincent.com/2022/07/27/redirects-with-11ty-and-netlify/

The [transition](/blog/2023/12/09/blog-poweredby-11ty/) from BlogCFC to Eleventy was smoother than anticipated, and I successfully deployed the website on [Netlify](https://www.netlify.com/). 
Thanks to Adrian Moreno, Raymond Camden and Zach Leatherman. If you have any questions, feel free to leave a comment! 

**Related Post:**
- [Blog Powered by 11ty](/blog/2023/12/09/blog-poweredby-11ty/)
- [BlogCFC Redesign](/blog/2009/1/13/blogcfc-redesign/)

> Title Photo by <a href="https://unsplash.com/@akbarsait?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Akbar Noormohamed</a> on <a href="https://unsplash.com/photos/Upr4-ZYhSAo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>