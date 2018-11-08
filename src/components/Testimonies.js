import React, { Component } from 'react';
import { Card, Button } from 'mdbreact';
import { HashLink as Link } from 'react-router-hash-link';
import InfiniteCarousel from 'react-leaf-carousel';


class Testimonies extends Component {
  render() {
    return (
      <div className="view-height-bg" id="inicio">
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
          <Card>

          </Card>
          <Card>

          </Card>
          <Card>
            
          </Card>

        </InfiniteCarousel>

      </div>
    );
  }
}

export default Testimonies;