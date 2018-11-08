import React, { Component } from 'react';
import { Container, Button } from 'mdbreact';


class Landing extends Component {
  render() {
    return (
      <div className="view-height-bg" id="inicio">
        <Container>
          <div>
            <h2>Seguro hogar</h2>
            <p>Esto no es un gasto, es una inversión.</p>
            <p>¡Además recibe armado y limpieza de muebles y más!</p>
          </div>
          <div>
            <Button>Cotiza aquí</Button>
          </div>
        </Container>
      </div>
    );
  }
}

export default Landing;