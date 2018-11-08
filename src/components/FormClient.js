import React, { Component } from 'react';
import { Container, Row, Col, Input, Button, Card, CardBody, } from 'mdbreact';
import '../App.scss';


class FormClient extends Component {
  constructor(prop) {
    super(prop)
    this.state = {
      dataClient: {
        typeDocument: 'DNI',
        document: null,
        name: null,
        lastName: null,
        phone: null,
        email: null
      },
    }
  }


  changeName = (e) => {
    this.setState({
      dataClient: {
        name: e.target.id
      }
    })
  }
  changeLastname = (e) => {
    this.setState({
      dataClient: {
        lastName: e.target.id
      }
    })
  }
  changeEmail = (e) => {
    this.setState({
      dataClient: {
        email: e.target.id
      }
    })
  }
  changePhone = (e) => {
    this.setState({
      dataClient: {
        phone: e.target.id
      }
    })
  }



  render() {
    const selectNumber = (inicio, limite) => {
      let etiqueta = [];
      for (let i = inicio; i <= limite; i++) {
        etiqueta.push(i)
      }
      return etiqueta;
    }
    return (
      <Container>
        <Row>
          <Col md="6">
            <Card>
              <CardBody>
                TUS DATOS PERSONALES
                <Row className='FormClient'>
                  <div className='col'>
                    <select className="form-control" onChange={this.getDocument}>
                      <option id="DNI">DNI</option>
                      <option id="CE">CE</option>
                    </select>
                  </div>
                  <div className='col' >
                    <Input label="Document" id="document" group type="text" validate error="wrong" success="right" />
                  </div>
                </Row>
                <Input label="Nombres" id="Nombres" group type="text" validate error="wrong" success="right" onChange={this.changeName}/>
                <Input label="Apellidos" id="Apellidos" group type="text" validate error="wrong" success="right" onChange={this.changeLastname}/>
                <Input label="Celular" id="Celular" group type="text" validate error="wrong" success="right" onChange={this.changePhone}/>
                <Input label="Correo" id="Correo" group type="text" validate error="wrong" success="right" onChange={this.changeEmail}/>
              </CardBody>
            </Card>
             <div className="text-center py-4 mt-3">
              <Button color="cyan" type="submit" onClick={this.props.onClickNext}>Continuar</Button>
            </div>
          </Col>

        </Row>
      </Container>
    )
  }
}

export default FormClient;