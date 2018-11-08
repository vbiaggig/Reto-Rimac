import React, { Component } from 'react';
import { Container } from 'mdbreact';


class Successful extends Component {
  render() {
    return (
      <Container className="text-center">
        <div className="successful">
          <h2>Compra realizada con éxito</h2>
          <img src="https://www.rimac.com.pe/assets/rimac-home/images/img-header.png" alt=""/>
        </div>
      </Container>
    );
  }
}

export default Successful;