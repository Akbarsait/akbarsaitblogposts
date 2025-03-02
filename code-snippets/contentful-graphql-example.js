// Querying Content with GraphQL
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


// Fetching Featured Blog Posts
const query = `{
    blogPostCollection(where: { featured: true }) {
      items {
        title
        author
        publishedDate
      }
    }
  }`;


//  Fetching Related Blog Posts by Category
const query = `{
    blogPostCollection(where: { category: "Technology" }) {
      items {
        title
        slug
        category
      }
    }
  }`;


//Fetching Blog Posts by Tags
const query = `{
    blogPostCollection(where: { tags_contains: "GraphQL" }) {
      items {
        title
        tags
      }
    }
  }`;

// Fetching Blog Posts Between Two Dates
const query = `{
    blogPostCollection(where: { publishedDate_gte: "2023-01-01", publishedDate_lte: "2023-12-31" }) {
      items {
        title
        publishedDate
      }
    }
  }`;