import React, { Component } from 'react';
import {Container, Row, Col, Button, Table, TableBody, Input} from 'mdbreact';
import { Link } from "react-router-dom";

class FormVenta extends Component {
  

  render() {
    return(
        <Container className="text-center facturation">
          <Row>
            <Col s12>
              <h4>Confirma tu ciclo de facturación</h4>
            </Col>
          </Row>
          <Row>
            <Col s6>
              <Button>Mensual S/. 59.90</Button>
            </Col>
            <Col s6>
              <Button>Anual S/. 680</Button>
            </Col>
          </Row>
          <Container className="text-center">
            <Row>
              <Col s = {12}>
              <Table>
                <TableBody>
                  <tr>
                    <td>Importe:</td>
                    <td>S/. 59.90</td>
                  </tr>
                  <tr>
                    <td>Frecuencia:</td>
                    <td>Mensual</td>
                  </tr>
                  <tr>
                    <td>Seguro:</td>
                    <td>Hogar completo</td>
                  </tr>
                  <tr>
                    <td>Inicio:</td>
                    <td>8 de noviembre</td>
                  </tr>
                  <tr>
                    <td>Usuario:</td>
                    <td>Gaby Marapi</td>
                  </tr>
                </TableBody>
              </Table>              
              </Col>
            </Row>
          </Container>
          <Row>
            <Col s12>
              <h4>Pago con tarjeta</h4>
            </Col>
          </Row>
          <Row>
            <Col s12>
            <form>
              <div className="grey-text">
                <Input label="Nro tarjeta:" group type="text" validate error="wrong" success="right" />
                <Input label="Caducidad:" group type="text" validate error="wrong" success="right" />
                <Input label="Mes:" group type="text" validate error="wrong" success="right" />
                <Input label="Año:" group type="text" validate error="wrong" success="right" />
                <Input label="Cod. Seguridad:" group type="text" validate error="wrong" success="right" />
              </div>
              <div className="text-center py-4 mt-3">
                <Button color="cyan" type="button"><Link className="text-white" to="/Reto-Rimac/Successful">Comprar</Link></Button>
              </div>
            </form>
            </Col>
          </Row>
        </Container>
    );
  }
}

export default FormVenta;