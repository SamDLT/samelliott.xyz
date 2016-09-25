import React, { Component } from 'react';
import me from '../assets/me.jpg';

const imgStyles = {
  borderRadius: '50%',
  width: '19.5em',
  height: '19.5em',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto'
}

class ImageContainer extends Component {
  render() {
    return (
      <img src={me} style={imgStyles} />
    );
  }
}

export default ImageContainer;
