import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, Container } from 'mdbreact';
import { HashLink as Link } from 'react-router-hash-link'; 

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  render() {
    const { items } = this.props;

    return (
      <div className="header">
        <Navbar className="bg-rimac" dark expand="md" scrolling>
          <Container>
            <NavbarBrand href="/">
              <img src="https://www.rimac.com.pe/assets/vehicular/images/logo-rimac.png" alt="Rimac" />
            </NavbarBrand>
            <NavbarToggler onClick={this.onClick} />
            <Collapse isOpen={this.state.collapse} navbar>
              <NavbarNav right>
                {items && items.map((item, key) =>
                  <NavItem key={`navmobile${key}`} name={item.title}><Link className="nav-link" to={item.url}>{item.title}</Link></NavItem>
                )}
              </NavbarNav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;