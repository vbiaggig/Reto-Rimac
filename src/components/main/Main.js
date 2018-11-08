import React, { Component } from 'react';
import { Container } from 'mdbreact';


class Main extends Component {
  render() {
    return (
      <div className="view-height">
        <Container>
          <div>
            <h1>Seguro hogar</h1>
          </div>
          <p>Esto no es un gasto, es una inversión.</p>
        </Container>
      </div>
    );
  }
}

export default Main;