import React, { Component } from 'react';
import {Container, Row, Col } from 'mdbreact';

class Quotation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="banner">
        <h3>Principales coberturas</h3>
        <Container>
          <Row>
            <Col s6>
              <div>
                <img src="https://www.rimac.com.pe/productoweb/flujodomi2/images/destruccion-verde.png"></img>
                <h4>Terremoto</h4>
                <p>
                  Según tu plan recibirás cobertura contra terremoto, temblor, sismo, maremoto, oleaje, salida del mar.
                </p>
              </div>
            </Col>
            <Col s6>
              <div>
                <img src="https://www.rimac.com.pe/productoweb/flujodomi2/images/robo-verde.png"></img>
                <h4>Robo o Intento de Robo</h4>
                <p>
                Según tu plan recibirás cobertura contra robo o el intento de robo bajo múltiples modalidades.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="text-center">
        <a href="javascript:void(0);">VER DETALLES</a>          
        </div>
        <h3>Tu seguro cubrirá</h3>
        <Container>
          <Row>
            <Col s={12}><span>Desde</span><input placeholder="Ingresa el monto"></input><span>Hasta</span></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Quotation;