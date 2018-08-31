import React, { Component } from 'react';
import _ from 'lodash';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Masonry from 'react-masonry-component';

class ProjectsIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {
      siteInfo: props.data.site.siteMetadata,
      projects: props.data.site.siteMetadata.projects
    };
  }

  renderProjects() {

    return this.state.projects.map((project) => (
      <div className='masonry-content' key={project.title}>
        <a href={project.homepage}>
          <Card>
            <CardHeader
              title={project.author}
              subheader={project.author_tag}
              avatar={this.state.siteInfo.avatar ? this.state.siteInfo.avatar : ''}
            />
            <CardMedia
              image={`${this.state.siteInfo.url}/${this.state.siteInfo.cardImage}`}
              title={project.title}
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {project.title}
              </Typography>
              <Typography>
                {project.description}
              </Typography>
            </CardContent>
          </Card>
        </a>
      </div>
    ));
  }

  render() {
   return (
      <div className="masonry-wrapper">
        <Masonry>
          {this.renderProjects()}
      </Masonry>
    </div>
    );
  }
}
export default ProjectsIndex;
export const pageQuery = graphql`
query ProjectQuery {
  site {
    siteMetadata {
      title
      author
      projects {
        homepage
        title
        cardImage
        subtitle
        date
        description
        cardSubtitle
        author
        author_tag
        avatar
      }
    }
  }
}
`;
