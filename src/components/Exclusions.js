import React, { Component } from 'react';
import { Container, Button } from 'mdbreact';

class Exclusions extends Component {
  render() {
    return (
      <div className="view-auto" id="exclusiones">
        <Container className="text-center">
          <div className="pt-5">
            <h2 className="title">Exclusiones</h2>
            <p>Para mayor información sobre las exclusiones del seguro Domiciliario, revisar el articulo 2 y 3 del condicionado general, que lo encontrara en el link Documentos del Seguro Domiciliario.</p>
          </div>
          <div className="container-btn">
            <Button><a className="text-white" href="https://www.rimac.com.pe/uploads/Exclusiones-Domiciliario-a-tu-Medida.pdf" target="_blank" rel="noopener noreferrer">Descarga aquí</a></Button>
          </div>
          {/* <Row>
            <Col sm={4}>
              <Card reverse>
                <CardBody cascade>
                  <CardTitle>Incendios</CardTitle>         
                  <CardText>Pérdidas o daños o destrucción o accidentes o responsabilidades que, en su origen o
extensión, sean causados directa o indirectamente</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm={4}>
              <Card reverse>
                <CardBody cascade>
                  <CardTitle>Terremoto</CardTitle>
                  <CardText>Asumimos el valor de la recontrucción de tu hogar a causa de terremoto, temblor, maremoto.</CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm={4}>
              <Card reverse>
                <CardBody cascade>
                  <CardTitle>Robos</CardTitle>
                  <CardText>Protegemos tu hogar a causa de robo o intento de robo solo bajo las modalidades de asalto, fractura, ganzua, escalamiento.</CardText>
                </CardBody>
              </Card>
            </Col>
          </Row> */}
        </Container>
      </div>
    );
  }
}

export default Exclusions;