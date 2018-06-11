import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import {Game} from '../../static/spaceinvaders.js';
import Starfield from '../../static/starfield.js';

const styles = {
  starfield: {
    position: 'absolute',
    zIndex: '-1',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    overflow: 'hidden',
    paddingBottom: '5rem',
  },
  title: {
    marginBottom: '1rem',
  },
  filler: {
    marginTop: '5rem',
    height: '10%',
    position: 'relative',
  }
}

class NotFoundPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props.classes,
    }
  } 

  componentDidMount() {
    const canvas = document.getElementById('gameCanvas');
    canvas.width = 800;
    canvas.height = 600;
    let game = new Game();
    game.initialise(canvas, game);
    game.start();

    let pressedKeys = [];

    window.addEventListener('keydown', function keydown(e) {
      let keycode = e.which || window.event.keycode;
      if(!pressedKeys[keycode]){ pressedKeys[keycode] = true; }
        //	Supress further processing of left/right/space (37/29/32)
      if(keycode == 37 || keycode == 39 || keycode == 32) {
        e.preventDefault();
      }
      game.keyDown(keycode);
    });

    window.addEventListener("keyup", function keydown(e) {
      let keycode = e.which || window.event.keycode;
      if(pressedKeys[keycode]) { delete pressedKeys[keycode]; }
      game.keyUp(keycode);
    });
    //starfield
    let starContainer = document.getElementById('starfield');
    let starfield = new Starfield();
    starfield.initialise(starContainer);
    starfield.start();
  }
  
  render() {
    return (
      <div>
        <div className='not-found-wrapper' >
          <Paper className='not-found-container'>
            <br />
            <Typography 
              align='center' 
              variant='headline'
            >
              Error 404: This Page Could Not Be Found!
            </Typography>
            <Typography 
              align='center' 
              variant='title'
              className={this.state.classes.title}
            >
              But you did find this cool space invaders game...
            </Typography>
          </Paper>
          <canvas id='gameCanvas' className='not-found-game' />
          <div className={this.state.classes.filler} />
        </div>
      <div id='starfield' className={this.state.classes.starfield} />
    </div>
    );
  }
}

export default withStyles(styles)(NotFoundPage);


