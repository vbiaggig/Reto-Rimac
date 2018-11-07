import React, { Component } from 'react';
import './App.scss';
import Header from './components/header/Header';
import Content from './components/content/Content';
import items from './data/routes';
import FormCotizar from './components/FormCotizar';

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
          <FormCotizar/>
      </div>
    );
  }
}

export default App;