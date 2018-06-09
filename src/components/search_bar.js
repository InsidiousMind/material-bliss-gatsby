import React, { Component } from 'react';
import _ from 'lodash';

import IconButton from '@material-ui/core/IconButton';
import AutoComplete from '@material-ui/core/AutoComplete';


export default class SearchBar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      posts: props.posts,
    }
  }

  styles = {
    root: {
      width: inherit,
    },
    textField: {
      width: inherit,
    }
  }

  handleClick() {
    const toggleBox = document.getElementById('search-form-auto');
    if (!toggleBox) {
      return
    }
    toggleBox.classList.toggle('search-hidden');
  }
  
  handleNewRequest = (term, index) => {
    
  }

  handleUpdateInput = (term, data, params) => {
    const debFetch
  }
}
