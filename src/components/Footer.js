import React from "react";
import { Col, Container, Row, Footer, Button, Fa } from "mdbreact";

class FooterPage extends React.Component {
render() {
return (
<Footer className="font-small pt-4 mt-4 bg-rimac">
  <Container fluid className="text-center text-md-left">
    <Row>
      <Col md="12" className="container-btn-footer">
      <Button tag="a" floating color="white" className="radius"><Fa icon="facebook" /></Button>
      <Button tag="a" floating color="white" className="radius"><Fa icon="twitter" /></Button>
      <Button tag="a" floating color="white" className="radius"><Fa icon="linkedin" /></Button>
      <Button tag="a" floating color="white" className="radius"><Fa icon="youtube" /></Button>
      </Col>
    </Row>
  </Container>
  <div className="footer-copyright text-center py-3">
    <Container fluid>
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a href="https://www.rimac.com.pe/"> Rimac </a>
    </Container>
  </div>
</Footer>
);
}
}

export default FooterPage;