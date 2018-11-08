import React, { Component } from 'react';
import { Row, Col, Container } from 'mdbreact';


class Statistics extends Component {
  render() {
    return (
      <div className="view-auto text-center" id="estadisticas">
        <Container>
          <div className="pt-5">
            <h2 className="title">Te protegemos</h2>
          </div>
          <Row className="mt-3">
            <Col xs={1}></Col>
            <Col xs={5}>
              <div className="mt-3 mb-3 ml-3">
                <img src={require("../img/robbery.png")} alt="robbery" />
                <p><span className="index">45%</span> de las viviendas son robadas en el verano</p>
              </div>
            </Col>
            <Col xs={5}>
              <div className="mt-3 mb-3 mr-3">
                <img src={require("../img/building.png")} alt="building" />
                <p><span className="index">62%</span> de las viviendas se incendian</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    );
  }
}

export default Statistics;