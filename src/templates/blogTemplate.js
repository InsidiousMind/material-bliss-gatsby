import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';


const styles = {
  title: {
    fontSize: '2.5rem',
    paddingBottom: '1rem'
  },
  divider: {
    marginBottom: '1.5rem'
 },
}
class BlogPostTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: props.data.markdownRemark,
      siteTitle: props.data.site.siteMetadata.title,
      author: props.data.site.siteMetadata.author,
      date: props.data.markdownRemark.frontmatter.date,
      classes: props.classes,
    };
  } 

  render() {
    const {previous, next} = this.props.pathContext;
    const fm = this.state.post.frontmatter;
    console.log(this.state.post);
    return (
      <div className='single-post-content'>
        <Helmet title={`${fm.title} | ${this.state.siteTitle}`}/>
        <Paper elevation={4} className='paper-wrapper'>
          <article className='post' itemScope itemType='http://schema.org/BlogPosting'>
            <header className='post-header'>
              <Typography 
                variant='title'
                itemProp='name headline'
                align='center'
                className={this.state.classes.title}
              >
                {fm.title}
              </Typography>
              <Typography variant='subheading' paragraph className='post-meta' align='center'>
                <time dateTime={fm.date} itemProp='datePublished'>
                  {this.state.date} •
                </time>
                <span itemProp='author' itemScope itemType='http://schema.org/Person'>
                  <span itemProp='name'> {this.state.author} • </span>
                </span>
                <span>
                  Read Time: {this.state.post.timeToRead} minutes • </span>
                <span>
                  Word Count: {this.state.post.wordCount.words}
                </span>
              </Typography>
            </header>
            <Divider className={this.state.classes.divider}/>
            <div className='post-content' itemProp='articleBody'>
              <Typography 
                variant='body2'
                dangerouslySetInnerHTML={{ __html: this.state.post.html }} 
              />
            </div>
          </article>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(BlogPostTemplate);


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
      timeToRead
      wordCount {
        words
      }
    }
  }
`
