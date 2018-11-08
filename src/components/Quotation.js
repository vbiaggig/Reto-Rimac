import React, { Component } from 'react';
import { Container, Row, Col, Card, CardText, CardTitle, CardImage, Input, Button } from 'mdbreact';
import { Link } from "react-router-dom";

class Quotation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planName: '',
      planImgTerremoto: '',
      planImgRobo: '',
      priceMonth: 0,
      priceYear: 0,
      coverageEDFmin: 0,
      coverageEDFmax: 0,
      coverageCONTmin: 0,
      coverageCONTmax: 0,
    }
  }

  componentDidMount() {
    const planName = window.localStorage.getItem('planName');

    if (planName === 'contenido-edificacion') {
      this.setState({
        planName: 'Contenido y edificación',
        planImgTerremoto: 'https://www.rimac.com.pe/productoweb/flujodomi2/images/destruccion-verde.png',
        planImgRobo: 'https://www.rimac.com.pe/productoweb/flujodomi2/images/robo-verde.png',
        priceMonth: 55.90,
        priceYear: 670.83,
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
        priceMonth: 45.90,
        priceYear: 550.85,
        coverageEDFmin: 50000,
        coverageEDFmax: 100000
      })
    } else if (planName === 'solo-contenido') {
      this.setState({
        planName: 'Solo contenido',
        planImgTerremoto: 'https://www.rimac.com.pe/productoweb/flujodomi2/images/destruccion-amarillo.png',
        planImgRobo: 'https://www.rimac.com.pe/productoweb/flujodomi2/images/robo-amarillo.png',
        priceMonth: 14.90,
        priceYear: 178.81,
        coverageCONTmin: 10000,
        coverageCONTmax: 60000
      })
    }
  }

  render() {
    return (
      <div className="banner">
        <h3>¡Escogiste el plan <b>{this.state.planName}</b>! Selecciona cuanto quieres valorizar</h3>
        <Container>
          <Row>
            {
              this.state.coverageEDFmin !== 0 ?
                (<Col sm={6} md={5} className="mx-auto">
                  <Card className="card-body">
                    <CardImage className="img-fluid" src={require("../img/house.png")} />
                    <CardTitle>Infraestructura</CardTitle>
                    <CardText>Ingresa un valor entre S/ {this.state.coverageEDFmin} hasta S/ {this.state.coverageEDFmax}</CardText>
                    <CardText>
                      <Input label="Monto" min={this.state.coverageEDFmin} max={this.state.coverageEDFmax} />
                    </CardText>
                  </Card>
                </Col>) : null}
            {
              this.state.coverageCONTmin !== 0 ?
                (<Col sm={6}  md={5} className="mx-auto">
                  <Card className="card-body">
                    <CardImage className="img-fluid" src={require("../img/sofa.png")} />
                    <CardTitle>Bienes de mi hogar</CardTitle>
                    <CardText>Ingresa un valor entre S/ {this.state.coverageCONTmin} hasta S/ {this.state.coverageCONTmax}</CardText>
                    <CardText>
                      <Input label="Monto" min={this.state.coverageCONTmin} max={this.state.coverageCONTmax} />
                    </CardText>
                  </Card>
                </Col>) : null
            }
            <Row className="price-container mt-4">
              <Col sm={12}>
                <p><span className="month-price">S/ {this.state.priceMonth}</span> mensual</p>
                <p>al contado S/ {this.state.priceYear} anual</p>
              </Col>
              <Col sm={12}>
                <Button className="btn-buy"><Link className="text-white" to="/Reto-Rimac/Venta">COMPRARLO</Link></Button>
              </Col>
              <Col sm={12}>
                <Button outline className="btn-assesor">SOLICITAR ASESOR</Button>
              </Col>
              <Col sm={12}>
                <a>Ver los términos y condiciones del seguro</a>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Quotation;