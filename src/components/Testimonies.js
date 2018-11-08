import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, Container } from 'mdbreact';
import InfiniteCarousel from 'react-leaf-carousel';


class Testimonies extends Component {
  render() {
    return (
      <div className="view-height" id="testimonios">
        <Container className="text-center">
          <div className="pt-5">
            <h2 className="title">Exclusiones</h2>
            <p>Para mayor información sobre las exclusiones del seguro Domiciliario, revisar el articulo 2 y 3 del condicionado general, que lo encontrara en el link Documentos del Seguro Domiciliario.</p>
          </div>
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
                <CardTitle>Alexandra Miñano</CardTitle>
                <CardTitle tag="h6" sub className="mb-2 text-muted">Noviembre 2018</CardTitle>
                <CardText>Con seguros hogar siento que mi casa esta protegida contra robos, ya que he conocido situaciones que han sucedido cerca a mi vivienda.</CardText>
              </CardBody>
            </Card>
            <Card className="testimonies-card" style={{ marginTop: '1rem' }}>
              <CardBody>
                <CardTitle>Valeria Biaggi</CardTitle>
                <CardTitle tag="h6" sub className="mb-2 text-muted">Noviembre 2018</CardTitle>
                <CardText>El mejor producto que ha existido porque a parte de seguridad me ofrecen beneficios extras.</CardText>
              </CardBody>
            </Card>
            <Card className="testimonies-card" style={{ marginTop: '1rem' }}>
              <CardBody>
                <CardTitle>Gaby Marapi</CardTitle>
                <CardTitle tag="h6" sub className="mb-2 text-muted">Marzo 2018</CardTitle>
                <CardText>Me encanta los beneficios extras que ofrece Rimac con la compra de este seguro que encima es super cómodo para mi bolsillo.</CardText>
              </CardBody>
            </Card>
            <Card className="testimonies-card" style={{ marginTop: '1rem' }}>
              <CardBody>
                <CardTitle>Virginia Contreras</CardTitle>
                <CardTitle tag="h6" sub className="mb-2 text-muted">Julio 2018</CardTitle>
                <CardText>Me siento cuidada y protegida gracias al seguro hogar de Rimac y gracias a ello tengo muchos beneficios que me brindan bienestar.  </CardText>
              </CardBody>
            </Card>

          </InfiniteCarousel>
        </Container>
      </div>
    );
  }
}

export default Testimonies;