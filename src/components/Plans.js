import React, { Component } from 'react';
import { Container, Button, Row, Col, Card, CardBody, CardHeader, CardText, CardFooter } from 'mdbreact';

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
                  <CardHeader tag="h3">Solo Contenido</CardHeader>
                  <CardBody>
                    <img src="https://www.rimac.com.pe/productoweb/flujodomi2/images/solo-contenido.png" alt="solo-contenido" />

                    {/* <CardTitle>Solo Contenido</CardTitle> */}
                    <CardText>Asegura únicamente el Contenido de tu inmueble según el plan y cobertura que elijas.</CardText>
                    <div className="container-btn">
                      <Button>Elegir</Button>
                    </div>
                  </CardBody>
                  <CardFooter className="bg-orange">Desde S/ 14.90 al mes</CardFooter>

                </Card>
              </div>
            </Col>
            <Col sm={4}>
              <div className="container-card">
                <Card style={{ marginTop: '1rem' }} className="text-center">
                  <CardHeader tag="h3">Solo Edificación</CardHeader>
                  <CardBody>
                    <img src="https://www.rimac.com.pe/productoweb/flujodomi2/images/solo-edificacion.png" alt="solo-edificacion" />

                    {/* <CardTitle>Solo Edificación</CardTitle> */}
                    <CardText>Asegura únicamente la Edificación de tu inmueble según el plan y cobertura que elijas.</CardText>
                    <div className="container-btn">
                      <Button>Elegir</Button>
                    </div>
                  </CardBody>
                  <CardFooter className="bg-orange">Desde S/ 45.90 al mes</CardFooter>
                </Card>
              </div>
            </Col>
            <Col sm={4}>
              <div className="container-card">
                <Card style={{ marginTop: '1rem' }} className="text-center">
                  <CardHeader tag="h3">Edificación y Contenido</CardHeader>
                  <CardBody>
                    <img src="https://www.rimac.com.pe/productoweb/flujodomi2/images/contenido-edificacion.png" alt="contenido-edificacion" />
                    {/* <CardTitle>Edificación y Contenido</CardTitle> */}
                    <CardText>Asegura la Edificación y Contenido de tu inmueble según el plan y cobertura que elijas.</CardText>
                    <div className="container-btn">
                      <Button>Elegir</Button>
                    </div>
                  </CardBody>
                  <CardFooter className="bg-orange">Desde S/ 55.90 al mes</CardFooter>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Plans;