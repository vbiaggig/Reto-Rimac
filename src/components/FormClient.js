import React, { Component } from 'react';
import { Container, Row, Col, Input, Button, Card, CardBody, ToastContainer, toast} from 'mdbreact';
import '../App.scss';


class FormClient extends Component {
  constructor(prop) {
    super(prop)
    this.state = {
      typeDocument: 'DNI',
      document: '',
      name: '',
      lastName: '',
      phone: '',
      email: ''
    }
  }

  changeDocument = (e) => {
    this.setState({
      document: e.target.value
    })
  }
  changeName = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  changeLastname = (e) => {
    this.setState({
      lastName: e.target.value
    })
  }
  changeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }
  changePhone = (e) => {
    this.setState({
      phone: e.target.value
    })
  }

  validate = () => {
    if((this.state.document !== '') && (this.state.name !== '') && (this.state.lastName !== '') && (this.state.phone !== '') && (this.state.email !== '')) {
      this.props.onClickNext();
    }
    else {
      toast.error('Debe llenar todos sus datos', {
        autoClose: 3000
      });
    }
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
          <Col md="12">
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
                    <Input label="Documento" id="document" group type="text" onChange={this.changeDocument} value={this.state.document} />
                  </div>
                </Row>
                <Input label="Nombres" id="Nombres" group type="text" validate error="wrong" success="right" onChange={this.changeName} value={this.state.name} />
                <Input label="Apellidos" id="Apellidos" group type="text" validate error="wrong" success="right" onChange={this.changeLastname} value={this.state.lastName} />
                <Input label="Celular" id="Celular" group type="text" validate error="wrong" success="right" onChange={this.changePhone} value={this.state.phone}/>
                <Input label="Correo" id="Correo" group type="text" validate error="wrong" success="right" onChange={this.changeEmail} value={this.state.email}/>
              </CardBody>
            </Card>
             <div className="text-center py-4 mt-3">
              <Button type="button" color="success" onClick={this.validate}>Continuar</Button>
            </div>
            <ToastContainer
              hideProgressBar={true}
              position={'bottom-center'}
              autoClose={5000}
            />
          </Col>

        </Row>
      </Container>
    )
  }
}

export default FormClient;