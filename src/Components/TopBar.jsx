import "../App.css";
import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

@inject("store")
@observer
class TopBar extends Component {
  render() {
    const { store } = this.props;
    return (
      <Navbar bg="light" expand="lg" style={{backgroundColor: "#f4f5f8"}}>
      <Container>
        <Navbar.Brand href="/">Yarn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/#learn">Get Started</Nav.Link>
            <Nav.Link href="/#about">About</Nav.Link>
            <Nav.Link href="/#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
}

export default TopBar;
