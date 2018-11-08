import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'mdbreact';
import InfiniteCarousel from 'react-leaf-carousel';


class Testimonies extends Component {
  render() {
    return (
      <div className="view-height" id="testimonios">
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
          ]}
          dots={true}
          showSides={true}
          sidesOpacity={.5}
          sideSize={.1}
          slidesToScroll={1}
          slidesToShow={1}
          scrollOnDevice={true}
        >
          <Card className="testimonies-card" style={{ marginTop: '1rem' }}>
            <CardBody>
              <CardTitle>Valeria Biaggi</CardTitle>
              <CardTitle tag="h6" sub className="mb-2 text-muted">Noviembre 2018</CardTitle>
              <CardText>El mejor producto que ha existido.</CardText>
            </CardBody>
          </Card>
          <Card className="testimonies-card" style={{ marginTop: '1rem' }}>
            <CardBody>
              <CardTitle>Gaby Marapi</CardTitle>
              <CardTitle tag="h6" sub className="mb-2 text-muted">Marzo 2018</CardTitle>
              <CardText>Some quick example text to build on the panel title and make up the bulk of the panel's content. </CardText>
            </CardBody>
          </Card>
          <Card className="testimonies-card" style={{ marginTop: '1rem' }}>
            <CardBody>
              <CardTitle>Virginia Contreras</CardTitle>
              <CardTitle tag="h6" sub className="mb-2 text-muted">Julio 2018</CardTitle>
              <CardText>Some quick example text to build on the panel title and make up the bulk of the panel's content. </CardText>
            </CardBody>
          </Card>

        </InfiniteCarousel>

      </div>
    );
  }
}

export default Testimonies;