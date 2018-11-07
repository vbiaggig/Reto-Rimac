import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import items from './data/routes';

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="App">
          <Header props={this.props} items={items}/>
          <Content body={children} />
      </div>
    );
  }
}

export default App;