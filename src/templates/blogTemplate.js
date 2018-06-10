import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';


class BlogPostTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: props.data.markdownRemark,
      siteTitle: props.data.site.siteMetadata.title,
      author: props.data.site.siteMetadata.author,
      date: props.data.markdownRemark.frontmatter.date,
    };
  } 

  render() {
    const {previous, next} = this.props.pathContext;
    return (
      <div className='single-post-content'>
        <Helmet title={`${this.state.post.title} | ${this.state.siteTitle}`}/>
        <Paper elevation='4' className='paper-wrapper'>
          <article className='post' itemScope itemType='http://schema.org/BlogPosting'>
            <header className='post-header'>
              <h1 className='post-title' itemProp='name headline'>{this.state.post.title}</h1>
              <p className='post-meta'>
                <time dateTime={this.state.date} itemProp='datePublished'>
                  {this.state.date}
                </time>
                <span itemProp='author' itemScope itemType='http://schema.org/Person'>
                  <span itemProp='name'>this.state.author</span>
                </span>
              </p>
            </header>
            <div className='post-content' itemProp='articleBody'>
              {this.state.post.html}
            </div>
          </article>
        </Paper>
      </div>
    );
  }
}

export default BlogPostTemplate;


export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        categories
        tags
      }
    }
  }
`
