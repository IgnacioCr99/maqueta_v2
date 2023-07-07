import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import logo from '../logo_contempora.png';
import { Dropdown } from 'rsuite';
import { AvatarGroup, Badge, Avatar } from 'rsuite';
import NoticeIcon from '@rsuite/icons/Notice';
import { IconButton, ButtonToolbar, ButtonGroup } from 'rsuite';



function BasicExample() {
  return (
    <div>
    <Navbar bg='default' expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img  alt=""
              src={logo}
              width="200"
              height="100"
              className="d-inline-block align-top"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Dropdown title="AYUDA">
    <Dropdown.Item>Documentacion</Dropdown.Item>
    <Dropdown.Item>Manuales de uso de la plataforma</Dropdown.Item>
    <Dropdown.Item>preguntas frecuentes</Dropdown.Item>

  </Dropdown>
  <ButtonToolbar>
    
  <IconButton icon={<NoticeIcon />} />
  
  </ButtonToolbar>
  <AvatarGroup>
    <Badge>
      <Avatar src="https://avatars.githubusercontent.com/u/12592949" alt="@superman66" />
    </Badge>

    
  </AvatarGroup>
      </Container>
    </Navbar>
    
    </div>
  );
}

export default BasicExample;