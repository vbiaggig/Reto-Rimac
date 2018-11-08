import React, { Component } from 'react';
import { Container } from 'mdbreact';

class Page404 extends Component {
  render() {
    return (
      <Container className="text-center">
        <div className="notFound">
          <h1>404 NOT FOUND</h1>
        </div>
      </Container>
    );
  }
}

export default Page404;