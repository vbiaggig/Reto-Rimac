import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Content from './components/Content';
import items from './data/routes';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

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