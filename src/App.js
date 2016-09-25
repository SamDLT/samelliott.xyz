import React, { Component } from 'react';
import './App.css'

import ImageContainer from './ImageContainer/ImageContainer.js';
import TextField from './TextField/TextField.js';

const styles = {
  backgroundColor: '#fafafa',
  paddingTop: '4em',
  fontFamily: "'Open Sans', sans-serif"
}

class App extends Component {
  render() {
    return (
      <div style={styles}>
        <ImageContainer />
        <TextField />
      </div>
    );
  }
}

export default App;
