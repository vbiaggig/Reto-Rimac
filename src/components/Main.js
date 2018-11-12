import React, { Component } from 'react';
import { Container, Button } from 'mdbreact';
import { HashLink as Link } from 'react-router-hash-link'; 


class Main extends Component {
  render() {
    return (
      <div className="view-height-bg" id="inicio">
        <Container className="text-center">
          <div className="pt-5">
            <h2 className="title">Seguro hogar</h2>
            <p className="subtitle">Esto no es un gasto, es una inversión.</p>
            <p>¡Además recibe armado y limpieza de muebles y más!</p>
          </div>
          <div className="container-btn">
            <Link to="/Reto-Rimac/#planes" className="text-white btn btn-default Ripple-parent">Ver planes</Link>
          </div>
          <div className="container-img">
            <img src="https://www.rimac.com.pe/img/personajes_yo_me_cuido.png" alt="familia"/>
          </div>
        </Container>
      </div>
    );
  }
}

export default Main;