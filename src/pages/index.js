import React from 'react';
import Link from 'gatsby-link'
import PostIndexItem from '../components/post_index_item';

const IndexPage = ({data}) => {
  const posts = data.allMarkdownRemark.edges;
  const siteInfo = data.site.siteMetadata;
  console.log(posts);
  return (
    <div>
      <PostIndexItem posts={posts} siteInfo={siteInfo} />
    </div>
  );
}

export default IndexPage



export const pageQuery = graphql`
query AllPosts {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMM DD, YY")
          tags
          categories
        }
        excerpt(pruneLength: 400)
        timeToRead
        wordCount {
          words
          paragraphs
        }
      }
    }
  }
}
`

