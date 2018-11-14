import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col, Button, Table, TableBody, Input, ToastContainer, toast} from 'mdbreact';

class FormVenta extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {
      amount: '59.90',
      frequency: 'mensual',
      numberCard: '',
      dateExpiration: '',
      month: '',
      year: '',
      codeSecurity: ''
    }   
  }

  updateData = (amount, frequency) => {
    this.setState({
      amount: amount,
      frequency: frequency
    })  
  }

  changeNumberCard = (e) => {
    this.setState({
      numberCard: e.target.value  
    })
  }

  changeDateExpiration = (e) => {
    this.setState({
      dateExpiration: e.target.value  
    })
  }

  changeMonth = (e) => {
    this.setState({
      month: e.target.value  
    })
  }

  changeYear = (e) => {
    this.setState({
      year: e.target.value  
    })
  }

  changeCodeSecurity = (e) => {
    this.setState({
      codeSecurity: e.target.value  
    })
  }  

  validate = () => {
    if((this.state.numberCard !== '') && (this.state.dateExpiration !== '') && (this.state.month !== '') && (this.state.year !== '') && (this.state.codeSecurity !== '')) {
      this.context.router.history.push('/Reto-Rimac/Completado');
    }
    else {
      toast.error('Debe llenar todos sus datos', {
        autoClose: 3000
      });
    }
  }

  render() {
    return(
        <Container className="text-center facturation">
          <Row>
            <Col sm={'12'}>
              <h4>Confirma tu ciclo de facturación</h4>
            </Col>
          </Row>
          <Row>
            <Col sm={'6'}>
              <Button onClick={() => {this.updateData('59.90', 'mensual')}}>Mensual S/. 59.90</Button>
            </Col>
            <Col sm={'6'}>
              <Button onClick={() => {this.updateData('680', 'anual')}}>Anual S/. 680</Button>
            </Col>
          </Row>
          <Container className="text-center">
            <Row>
              <Col sm={'12'}>
              <Table>
                <TableBody>
                  <tr>
                    <td>Importe:</td>
                    <td>S/. {this.state.amount}</td>
                  </tr>
                  <tr>
                    <td>Frecuencia:</td>
                    <td>{this.state.frequency}</td>
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
            <Col sm={'12'}>
              <h4>Pago con tarjeta</h4>
            </Col>
          </Row>
          <Row>
            <Col sm={'12'}>
            <form>
              <div className="grey-text">
                <Input label="Nro tarjeta:" group type="text" validate error="wrong" success="right" onChange={this.changeNumberCard} value={this.state.numberCard} />
                <Input label="Caducidad:" group type="text" validate error="wrong" success="right" onChange={this.changeDateExpiration} value={this.state.dateExpiration} />
                <Input label="Mes:" group type="text" validate error="wrong" success="right" onChange={this.changeMonth} value={this.state.month} />
                <Input label="Año:" group type="text" validate error="wrong" success="right" onChange={this.changeYear} value={this.state.year} />
                <Input label="Cod. Seguridad:" group type="text" validate error="wrong" success="right" onChange={this.changeCodeSecurity} value={this.state.codeSecurity} />
              </div>
              <div className="text-center py-4 mt-3">
                <Button color="success" type="button" onClick={this.validate}>Comprar</Button>
              </div>
            </form>
            <ToastContainer
              hideProgressBar={true}
              position={'bottom-center'}
              autoClose={5000}
            />
            </Col>
          </Row>
        </Container>
    );
  }
}

export default FormVenta;