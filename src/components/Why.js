import React, { Component } from 'react';
import { Container } from 'mdbreact';
import benefits from '../data/benefits';
import InfiniteCarousel from 'react-leaf-carousel';
import ItemCarousel from './ItemCarousel';

class Why extends Component {
  render() {
    return (
      <div className="view-auto" id="porquérimac">
        <Container className="text-center">
          <div className="pt-5">
            <h2 className="title">¿Por qué tener un seguro de hogar RIMAC?</h2>
            <p>Rimac seguros es una empresa de respaldo que lleva gran tiempo en el mercado y presenta este producto para adquirirlo 100% digital y a un precio estimado.</p>
          </div>
          <div className="pt-3">
            <h2 className="title">Beneficios</h2>
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
              slidesToScroll={3}
              slidesToShow={3}
              scrollOnDevice={true}
            >
              {
                benefits.map(benefit => {
                  return (<ItemCarousel key={`benefit${benefit.itemID}`} itemIMG={benefit.itemIMG} itemTitle={benefit.itemTitle} itemText={benefit.itemText}/>)
                })
              }

            </InfiniteCarousel>

          </div>
        </Container>
      </div>
    );
  }
}

export default Why;