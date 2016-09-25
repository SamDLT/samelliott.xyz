import React, { Component } from 'react';
import '../../node_modules/font-awesome/css/font-awesome.css';
import FontAwesome from 'react-fontawesome';
import styles from './TextField.styles.json';

class TextField extends Component {
  render() {
    return (
      <div style={styles.containerStyles}>
          <header style={styles.headerStyles}>
              <h1 style={styles.h1Styles}>Hi. I'm <strong style={styles.strongStyles}>Sam Elliott</strong>.</h1>
          </header>
          <p style={styles.pStyles}>I'm a software developer from Puerto Rico currently working in the New Jersey/New York area.</p>
          <div>
            {styles.faNames.map((name) => <FontAwesome
              style={ {margin: '3px'} }
              name={name} size='4x'
              key={name}
              onClick={() => this.navigateTo(name)} />)}
          </div>
      </div>
    );
  }
  
  navigateTo(name) {
    switch (name) {
      case "linkedin-square":
        window.location = 'https://www.linkedin.com/in/samelliott7c7';
        break;
      case "github":
        window.location = 'https://github.com/SamDLT';
        break;
      case "angellist":
        window.location = 'https://angel.co/samelliott7c7';
        break;
      case "twitter":
        window.location = 'https://twitter.com/SamElliott7C7';
        break;
    }
  }
}

export default TextField;
