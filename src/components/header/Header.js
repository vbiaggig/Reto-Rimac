import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Container } from 'mdbreact';


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
        <Navbar color="" dark expand="md" scrolling>
          <Container>
            <NavbarBrand href="/">
              <img src="https://www.rimac.com.pe/assets/vehicular/images/logo-rimac.png" alt="Rimac" />
            </NavbarBrand>
            <NavbarToggler onClick={this.onClick} />
            <Collapse isOpen={this.state.collapse} navbar>
              <NavbarNav left>
                {items && items.map((item, key) =>
                  <NavItem key={`navmobile${key}`} name={item.title}><NavLink to={item.url}>{item.title}</NavLink></NavItem>
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