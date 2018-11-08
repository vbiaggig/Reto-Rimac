import React, { Component } from 'react';
import { Container, Button, Row, Col, Card, CardBody, CardHeader, CardText, CardFooter, CardImage } from 'mdbreact';
import { Link } from "react-router-dom";

class Plans extends Component {
  render() {
    return (
      <div className="view-auto bg-white" id="planes">
        <Container className="text-center">
          <div className="pt-5">
            <h2 className="title">Nuestros planes</h2>
            <p>Asegura tu hogar y disfrútalo con los tuyos sin preocupaciones.</p>
          </div>
          <Row>
            <Col sm={4}>
              <div className="container-card">
                <Card style={{ marginTop: '1rem' }} className="text-center">
                  <CardHeader className="card-header" tag="h3" className="background-img">Plan Contenido</CardHeader>
                  <CardBody>
                  <CardText>Desde <span className="price-buy">S/ 14.90</span> al mes</CardText>
                    <CardText>Asegura únicamente el Contenido de tu inmueble según el plan y cobertura que elijas.</CardText>
                    <div className="container-btn">
                      <Button name="solo-contenido" onClick={this._handleClick}><Link name="solo-contenido" className="text-white" to="/Cotizacion">Cotizar</Link></Button>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col sm={4}>
              <div className="container-card">
                <Card style={{ marginTop: '1rem' }} className="text-center">
                  <CardHeader className="card-header" tag="h3">Plan Edificación</CardHeader>
                  <CardBody>
                  <CardText>Desde <span className="price-buy">S/ 45.90</span> al mes</CardText>
                    <CardText>
                      Asegura únicamente la Edificación de tu inmueble según el plan y cobertura que elijas.
                    </CardText>
                    <div className="container-btn">
                      <Button name="solo-edificacion" onClick={this._handleClick}><Link name="solo-edificacion" className="text-white" to="/Cotizacion">Cotizar</Link></Button>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col sm={4}>
              <div className="container-card">
                <Card style={{ marginTop: '1rem' }} className="text-center">
                  <CardHeader className="card-header" tag="h3">Plan Edificación y Contenido</CardHeader>
                  <CardBody>
                    <CardText>Desde <span className="price-buy">S/ 55.90</span> al mes</CardText>
                    <CardText>Asegura la Edificación y Contenido de tu inmueble según el plan y cobertura que elijas.</CardText>
                    <div className="container-btn">
                      <Button name="contenido-edificacion" onClick={this._handleClick}><Link name="contenido-edificacion" className="text-white" to="/Cotizacion">Cotizar</Link></Button>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  _handleClick = (e) => {
    window.localStorage.setItem('planName', e.target.name)
  }
}

export default Plans;