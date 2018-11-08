import React, { Component } from 'react';
import Main from './Main';
import Why from './Why';

class Landing extends Component {
  render() {
    return (
      <div>
        <Main />
        <Why />
      </div>
    );
  }
}

export default Landing;