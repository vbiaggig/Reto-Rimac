import React, { Component } from 'react';
import { Container } from 'mdbreact';
import { Row, Col, Card, CardImage, CardBody, CardTitle, CardText } from 'mdbreact';

class Coverage extends Component {
  render() {
    return (
      <div className="view-auto bg-white" id="cobertura">
        <Container className="text-center">
          <div className="pt-5">
            <h2 className="title">Cobertura</h2>
            <p>Cobertura para que te sientas seguro, beneficios para que disfrutes.</p>
            <p>Si deseas más información haz click <a href="https://www.rimac.com.pe/uploads/COBERTURAS_V201806.pdf" target="_blank" rel="noopener noreferrer">aquí</a>.</p>
          </div>
          <Row>
            <Col sm={4}>
              <Card reverse>
                <CardImage cascade className="img-fluid mt-4" src={require("../img/building.png")} />
                <CardBody cascade>
                  <CardTitle>Incendios</CardTitle>
                  <CardText><span className="index">63%</span> de las viviendas sufren un incendio repentino</CardText>
                  <CardText>¿Qué cubrimos?</CardText>
                  <CardText>Nos encargamos de pagar el daño al contenido a causa de incendio + daños por agua/humo + explosión + lluvia + inundación + otras coberturas no excluidas..</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm={4}>
              <Card reverse>
                <CardImage cascade className="img-fluid mt-4" src={require("../img/earthquake.png")} />
                <CardBody cascade>
                  <CardTitle>Terremoto</CardTitle>
                  <CardText><span className="index">71%</span> de las viviendas se destruyen en terremotos</CardText>
                  <CardText>¿Qué cubrimos?</CardText>
                  <CardText>Asumimos el valor de la recontrucción de tu hogar a causa de terremoto, temblor, maremoto.</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm={4}>
              <Card reverse>
                <CardImage cascade className="img-fluid mt-4" src={require("../img/robbery.png")} />
                <CardBody cascade>
                  <CardTitle>Robos</CardTitle>
                  <CardText><span className="index">45%</span> de las viviendas son robadas en el verano</CardText>
                  <CardText>¿Qué cubrimos?</CardText>
                  <CardText>Protegemos tu hogar a causa de robo o intento de robo solo bajo las modalidades de asalto, fractura, ganzua, escalamiento.</CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Coverage;