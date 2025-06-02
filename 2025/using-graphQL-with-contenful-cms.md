---
title: Using GraphQL with Contentful CMS
date: 2025-03-02T08:30:00.000
tags: ["learning"]
image: /assets/images/post/newyork-sea-lamp.jpg
permalink: /blog/2025/03/02/using-graphql-with-contentfulcms/
---

In the earlier blog post, we explored how to use Contentful with a [basic JS/REST integration](/blog/2025/02/09/exploring-and-getting-started-with-contentfulcms/). Now, let's take a quick look into using GraphQL with Contentful, which provides more efficiency and flexibility when fetching content.

GraphQL simplifies managing and querying content efficiently. It provides the flexibility of fetching only the data you need, instead of dealing with unnecessary payloads, GraphQL is the perfect solution when working with Contentful.

### Getting Started with GraphQL in Contentful

First, we need to set Contentful space and define a content model. I created a simple **Blog Post** model with fields like `title`, `body`, `author`, `publishedDate`, `slug`, and `tags`. After adding some dummy content, I was ready to query it using GraphQL.

To interact with Contentful’s GraphQL API, we require:

- A **Contentful space ID**
- A **Content delivery API key**
- The **GraphQL endpoint**: `https://graphql.contentful.com/content/v1/spaces/{SPACE_ID}`

### Querying Content with GraphQL

Here’s a simple JS example that fetches blog posts: https://github.com/Akbarsait/akbarsaitblogposts/blob/main/code-snippets/contentful-graphql-example.js

```javascript
const spaceId = 'your_space_id';
const accessToken = 'your_access_token';
const query = `{
  blogPostCollection {
    items {
      title
      slug
      body
      author
      publishedDate
      tags
    }
  }
}`;

fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
  body: JSON.stringify({ query }),
})
  .then((response) => response.json())
  .then((data) => console.log(data.data.blogPostCollection.items))
  .catch((error) => console.error("Error fetching GraphQL data:", error));
```

This query fetches all blog posts along with their title, slug, body, author, published date, and tags. What I love about GraphQL is that you can easily modify the query to retrieve only the fields you need—no extra data cluttering the response.

### Displaying Content on a Web Page

To make things more practical, let’s display the fetched blog posts inside an HTML page: https://github.com/Akbarsait/akbarsaitblogposts/blob/main/code-snippets/contentful-graphql-example.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Posts</title>
</head>
<body>
    <h1>My Blog</h1>
    <div id="blog-container"></div>

    <script>
        const spaceId = 'your_space_id';
        const accessToken = 'your_access_token';
        const query = `{
            blogPostCollection {
                items {
                    title
                    slug
                    body
                    author
                    publishedDate
                    tags
                }
            }
        }`;

        fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({ query }),
        })
        .then((response) => response.json())
        .then((data) => {
            const blogContainer = document.getElementById("blog-container");
            data.data.blogPostCollection.items.forEach(post => {
                const postElement = document.createElement("div");
                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p><strong>Author:</strong> ${post.author}</p>
                    <p><strong>Published Date:</strong> ${post.publishedDate}</p>
                    <p><strong>Tags:</strong> ${post.tags.join(", ")}</p>
                    <p>${post.body}</p>
                    <p><strong>Slug:</strong> ${post.slug}</p>
                `;
                blogContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error fetching content:', error));
    </script>
</body>
</html>
```

Let's fetch data with some scenario based examples. 

### Fetching Featured Blog Posts
To fetch only the blog posts marked as "featured", we can modify your query like this:

```javascript
const query = `{
  blogPostCollection(where: { featured: true }) {
    items {
      title
      author
      publishedDate
    }
  }
}`;
```

### Fetching Related Blog Posts by Category
To fetch blog posts based on a specific category, use:

```javascript
const query = `{
  blogPostCollection(where: { category: "Technology" }) {
    items {
      title
      slug
      category
    }
  }
}`;
```

### Fetching Blog Posts by Tags
To fetch blog posts that contain a specific tag:

```javascript
const query = `{
  blogPostCollection(where: { tags_contains: "GraphQL" }) {
    items {
      title
      tags
    }
  }
}`;
```

### Fetching Blog Posts Between Two Dates
To get blog posts published between two dates:

```javascript
const query = `{
  blogPostCollection(where: { publishedDate_gte: "2023-01-01", publishedDate_lte: "2023-12-31" }) {
    items {
      title
      publishedDate
    }
  }
}`;
```

### Why Use GraphQL with Contentful?

- **Efficient queries**: Get only the data you need, reducing API response sizes.
- **Easier frontend integration**: Fetch structured content without multiple API calls.
- **More flexibility**: Modify queries easily without backend changes.

So far, my experience with GraphQL and Contentful has been fantastic. It streamlines data fetching and makes content management way more efficient. If you’re working on a content-driven app or website, I’d highly recommend giving it a shot!

### Helpful Links I Used

- [Contentful GraphQL API Docs](https://www.contentful.com/developers/docs/references/graphql/)
- [Contentful JavaScript SDK](https://github.com/contentful/contentful.js)
- [Try GraphQL Playground](https://graphql.contentful.com/content/v1/spaces/your_space_id/explore?access_token=your_access_token)

Let me know if you try this out or run into any issues! 🚀

> Title Photo by <a href="https://unsplash.com/@akbarsait?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Akbar Noormohamed</a> on <a href="https://unsplash.com/photos/_HFzvEaJAbI">Unsplash</a>