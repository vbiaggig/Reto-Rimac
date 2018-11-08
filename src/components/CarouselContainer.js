import React, { Component } from 'react';
import { Col, Card, CardImage, CardBody, CardTitle, CardText } from 'mdbreact';
class CarouselContainer extends Component {
  render() {

    return (
      <Col sm={6} md={4}>
        <Card className="m-3" wide>
          <CardImage cascade className="img-fluid" src={this.props.itemIMG} />
          <CardBody cascade>
            <CardTitle>{this.props.itemTitle}</CardTitle>
            <CardText>{this.props.itemText}</CardText>
            {/* <Button href="#">Button</Button> */}
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default CarouselContainer;