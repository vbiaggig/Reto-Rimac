import React, { Component } from 'react';
import { Container, Row, Col } from 'mdbreact';
const planName = window.localStorage.getItem('planName');

class Quotation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planName: '',
      planImgTerremoto: '',
      planImgRobo: '',
      price: 0,
      coverageEDFmin: 0,
      coverageEDFmax: 0,
      coverageCONTmin: 0,
      coverageCONTmax: 0,
    }
  }

  componentDidMount() {
    if (planName === 'contenido-edificacion') {
      this.setState({ 
        planName: 'Contenido y edificación', 
        planImgTerremoto: 'https://www.rimac.com.pe/productoweb/flujodomi2/images/destruccion-verde.png', 
        planImgRobo: 'https://www.rimac.com.pe/productoweb/flujodomi2/images/robo-verde.png', 
        price: 55.90, 
        coverageEDFmin: 50000, 
        coverageEDFmax: 100000, 
        coverageCONTmin: 10000,
        coverageCONTmax: 15000
      })
    } else if (planName === 'solo-edificacion') {
      this.setState({ 
        planName: 'Solo edificación', 
        planImgTerremoto: 'https://www.rimac.com.pe/productoweb/flujodomi2/images/destruccion-purple.png', 
        planImgRobo: 'https://www.rimac.com.pe/productoweb/flujodomi2/images/robo-purple.png', 
        price: 45.90, 
        coverageEDFmin: 50000, 
        coverageEDFmax: 100000
      })
    } else if (planName === 'solo-contenido') {
      this.setState({ 
        planName: 'Solo contenido', 
        planImgTerremoto: 'https://www.rimac.com.pe/productoweb/flujodomi2/images/destruccion-amarillo.png', 
        planImgRobo: 'https://www.rimac.com.pe/productoweb/flujodomi2/images/robo-amarillo.png', 
        price: 14.90, 
        coverageCONTmin: 10000,
        coverageCONTmax: 60000
      })
    }
  }

  render() {
    return (
      <div className="banner">
        <h3>{this.state.planName}</h3>
        <Container>
          <Row>
            <Col s6>
              <div className="container-quotation">
                <div className="container-img">
                  <img className="mx-auto" alt="" src={this.state.planImgTerremoto}></img>
                </div>
                <h4>Terremoto</h4>
                <p>
                  Según tu plan recibirás cobertura contra terremoto, temblor, sismo, maremoto, oleaje, salida del mar.
                </p>
              </div>
            </Col>
            <Col s6>
              <div className="container-quotation">
                <div className="container-img">
                  <img className="mx-auto" alt="" src={this.state.planImgRobo}></img>
                </div>
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
            {this.state.coverageEDFmin !== 0 ? (
              <Col s={6}>
              <h5>Edificación</h5>
              <p>Desde {this.state.coverageEDFmin} - Hasta {this.state.coverageEDFmax}</p>
            </Col>
            ) : null }
            {this.state.coverageCONTmin !== 0 ? (
              <Col s={6}>
              <h5>Cotenido</h5>
              <p>Desde {this.state.coverageCONTmin} - Hasta {this.state.coverageCONTmax}</p>
            </Col>
            ) : null }
          </Row>
        </Container>
      </div>
    );
  }
}

export default Quotation;