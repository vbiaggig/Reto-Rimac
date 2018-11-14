import React, { Component } from 'react';
import { Container, Row, Col, Input, Button, Card, CardBody,ToastContainer, toast } from 'mdbreact';
import '../App.scss';
class FormHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
      departament: '',
      province: '',
      distrit: '',
      typeOfRoad: '',
      number: '',
      material: '',
      floors: '',
      basement: '',
      yearContruc: ''
      ,
      departaments: ['Lima', 'La Libertad', 'Ayacucho'],
      provinces: [['Lima'], ['Trujillo'], ['Huamanga']],
      distrits: [['Surco', 'Barranco'], ['La Esperanza', 'Moche'], ['San Juan', 'Miraflores']],
      typeOfRoad: ['Av.', 'Jr.', 'Calle', 'Urb.'],
      material: ['Concreto armado', 'Ladrillo cemento'],
      currentDepartment: 0,
      currentProvince: 0,
      currentDistrit: 0
    }
  }
 
  getDepartament = (e) => {
    this.setState({
      departament: e.target.value
    })
  }
  getProvince = (e) => {
    this.setState({
      province: e.target.value      
    })
  }
  getDistrit = (e) => {
    this.setState({
      distrit: e.target.value      
    })
  }
  getTypeOfRoad = (e) => {
    this.setState({
      typeOfRoad: e.target.value
    })
  }
  getNumber = (e) => {
    this.setState({
      number: e.target.value
    })
  }
  getMaterial = (e) => {
    this.setState({
      material: e.target.value
    })
  }
  getFloors = (e) => {
    this.setState({
      floors: e.target.value      
    })
  }
  getBasement = (e) => {
    this.setState({
      basement: e.target.value
    })
  }
  getYearContruc = (e) => {
    this.setState({
      yearContruc: e.target.value
    })
  }
  changeAddress = (e) => {
    this.setState({
      address: e.target.value
    })
  }

  validate = () => {
    console.log(this.state.address);
    if(this.state.address !== '') {
      this.props.onClickNext();
    }
    else {
      toast.error('Debe llenar su dirección', {
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
       
        <Row id="#dataHome">
          <Col>
            <Card>
              <CardBody>
              LOS DATOS DE TU HOGAR
                <div className="floating-label">
                  <select className="form-control floating-select">
                    {
                      this.state.departaments.map((elem, i) => <option key={i} id={elem}>{elem}</option>)
                    }
                  </select>
                  <label>Departamento</label>
                </div>
                <div className="floating-label">
                  <select className="form-control floating-select">
                    {
                      this.state.provinces[this.state.currentDepartment].map((elem, i) => <option key={i} id={elem}>{elem}</option>)
                    }
                  </select>
                  <label>Provincia</label>
                </div>
                <div className="floating-label">
                  <select className="form-control floating-select">
                    {
                      this.state.distrits[this.state.currentProvince].map((elem, i) => <option key={i} id={elem}>{elem}</option>)
                    }
                  </select>
                  <label>Distrito</label>
                </div>   
                <div className="floating-label"> 
                  <select className="form-control floating-select">
                    {
                      this.state.typeOfRoad.map((elem, i) => <option key={i} id={elem}>{elem}</option>)
                    }
                  </select>
                  <label>Tipo de vía</label>
                </div> 
                <Input label="Dirección" id="address" group type="text" validate error="wrong" success="right" onChange={this.changeAddress}  value={this.state.address} />
                <div className="floataddressing-label"> 
                  <select className="form-control floating-select">
                    {
                      selectNumber(1, 8).map((elem, i) => <option key={i} id={elem}>{elem}</option>)
                    }
                  </select>
                  <label>N° Sótanos</label>
                </div>  
                <div className="floating-label"> 
                  <select className="form-control floating-select">
                    {
                      selectNumber(1, 21).map((elem, i) => <option key={i} id={elem}>{elem}</option>)
                    }
                  </select>
                  <label>N° Pisos</label>
                </div>
                <div className="floating-label">    
                  <select className="form-control floating-select">
                    {
                      this.state.material.map((elem, i) => <option key={i} id={elem}>{elem}</option>)
                    }
                  </select>
                  <label>Material</label>
                </div>
                
                <div className="floating-label">  
                  <select className="form-control floating-select">
                    {
                      selectNumber(1860, 2018).map((elem, i) => <option key={i} id={elem}>{elem}</option>)
                    }
                  </select>
                  <label>Año de construcción</label>
                </div>
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
export default FormHome;



