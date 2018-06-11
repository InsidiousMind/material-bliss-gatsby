import React from 'react';
import Paper from '@material-ui/core/Paper';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from 'gatsby-link';


const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: 'left',
  },
  chip: {
    margin: 4,
  },
  button: {
    float: 'right',
  }
};

const getCategories = (cats) =>  
  cats.map((cat) => (
      <Link to={`/${cat}/`}>
        {`${cat} `}
      </Link>
  ));


const renderChips = (data) => data.map((tag) => (
  <Chip key={tag} style={styles.chip} label={tag}> {tag} </Chip>));

const renderPosts = (props) => props.posts.map((post) => {
  post = post.node;
  const fm = post.frontmatter; //frontmatter
  const postLink = `${post.fields.slug}`; //change
  return (
    <Paper key={fm.title} elevation={4} className="paper-wrapper" >
      <li key={fm.title}>
        <a href={postLink}><strong><h2>{fm.title}</h2></strong></a>
        <div className="post-meta">
          <ul>
            <li>
              <time>{fm.date}</time>
            </li>
            <li className='divider'>/</li>
            <li className='divider'>{getCategories(fm.categories)}</li>
            <li className='divider'>/</li>
            <li>Read Time: {post.timeToRead} minutes</li>
          </ul>
        </div>

        <Typography variant='body1'>{post.excerpt}</Typography>

        <div className="div-container">
          <a href={postLink} >
            <Button variant='contained' className={props.classes.button}>
              Read More 
              <PlayArrow/>
            </Button>
          </a>
      </div>

      <div>
        {renderChips(fm.tags)}
      </div>
    </li>
  </Paper>
  );
});

const PostIndexItem = (props) => {
  return (
    <ul>
      {renderPosts(props)}
    </ul>
  );
};

export default withStyles(styles)(PostIndexItem);
