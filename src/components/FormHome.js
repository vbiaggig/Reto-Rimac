import React, { Component } from 'react';
import { Container, Row, Col, Input, Button, Card, CardBody, } from 'mdbreact';
import '../App.scss';
class FormHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataHome: {
        dirección: null,
        departamento: null,
        provincia: null,
        distrito: null,
        fdo: null,
        number: null,
        material: null,
        floors: null,
        basement: null,
        yearContruc: null
      },
      departamentos: ['Lima', 'La Libertad', 'Ayacucho'],
      provincias: [['Lima'], ['Trujillo'], ['Huamanga']],
      distritos: [['Surco', 'Barranco'], ['La Esperanza', 'Moche'], ['San Juan', 'Miraflores']],
      fdo: ['Av.', 'Jr.', 'Calle', 'Urb.'],
      material: ['Concreto armado', 'Ladrillo cemento'],
      currentDepartment: 0,
      currentProvincia: 0,
      currentDistrito: 0
    }
  }
 
  getDepartamento = (e) => {
    this.setState({
      dataHome: {
        departamento: e.target.id
      }
    })
  }
  getProvincia = (e) => {
    this.setState({
      dataHome: {
        provincia: e.target.id
      }
    })
  }
  getDistrito = (e) => {
    this.setState({
      dataHome: {
        distrito: e.target.id
      }
    })
  }
  getFdo = (e) => {
    this.setState({
      dataHome: {
        fdo: e.target.id
      }
    })
  }
  getNumber = (e) => {
    this.setState({
      dataHome: {
        number: e.target.id
      }
    })
  }
  getMaterial = (e) => {
    this.setState({
      dataHome: {
        material: e.target.id
      }
    })
  }
  getFloors = (e) => {
    this.setState({
      dataHome: {
        floors: e.target.id
      }
    })
  }
  getBasement = (e) => {
    this.setState({
      dataHome: {
        basement: e.target.id
      }
    })
  }
  getYearContruc = (e) => {
    this.setState({
      dataHome: {
        yearContruc: e.target.id
      }
    })
  }
  changeDireccion = (e) => {
    this.setState({
      dataClient: {
        direccion: e.target.id
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
       
        <Row id="#dataHome">
          <Col sm='12'>
            <Card>
              <CardBody>
              LOS DATOS DE TU HOGAR
                <select className="form-control">
                  <option id="">Departamento</option>
                  {
                    this.state.departamentos.map((elem, i) => <option key={i} id={elem}>{elem}</option>)
                  }
                </select>
                <select className="form-control">
                  <option id="">Provincia</option>
                  {
                    this.state.provincias[this.state.currentDepartment].map((elem, i) => <option key={i} id={elem}>{elem}</option>)
                  }
                </select>
                <select className="form-control">
                  <option id="">Distrito</option>
                  {
                    this.state.distritos[this.state.currentProvincia].map((elem, i) => <option key={i} id={elem}>{elem}</option>)
                  }
                </select>
                <select className="form-control">
                  <option id="">Tipo de vía</option>
                  {
                    this.state.fdo.map((elem, i) => <option key={i} id={elem}>{elem}</option>)
                  }
                </select>
                <Input label="Dirección" id="Dirección" group type="text" validate error="wrong" success="right" onChange={this.changeDireccion} />
                
                    <select className="form-control">
                      <option id="">N° Sótanos</option>
                      {
                        selectNumber(1, 8).map((elem, i) => <option key={i} id={elem}>{elem}</option>)
                      }
                    </select>
                
                    <select className="form-control">
                      <option id="">N° Pisos</option>
                      {
                        selectNumber(1, 21).map((elem, i) => <option key={i} id={elem}>{elem}</option>)
                      }
                    </select>
              
                <select className="form-control">
                  <option id="">Material</option>
                  {
                    this.state.material.map((elem, i) => <option key={i} id={elem}>{elem}</option>)
                  }
                </select>
                <select className="form-control">
                  <option id="">Año de construcción</option>
                  {
                    selectNumber(1860, 2018).map((elem, i) => <option key={i} id={elem}>{elem}</option>)
                  }
                </select>
              </CardBody>
            </Card>
            <div className="text-center py-4 mt-3">
              <Button type="submit" color="success" onClick={this.props.onClickNext}>Continuar</Button>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default FormHome;



