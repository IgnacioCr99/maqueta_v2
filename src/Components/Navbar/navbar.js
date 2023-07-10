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
import { AvatarGroup, Badge, Avatar, Stack, Divider } from 'rsuite';
import NoticeIcon from '@rsuite/icons/Notice';
import { IconButton, ButtonToolbar, ButtonGroup } from 'rsuite';
import { Link } from 'react-router-dom';

const renderAvatar = (props, ref) => {
  return (
    <Avatar circle src="https://avatars.githubusercontent.com/u/12592949" alt="@superman66" />
  );

};

function BasicExample() {
  return (
    <div>
    <Navbar bg='white' expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to={'/'}><img  alt=""
              src={logo}
              width="200"
              height="100"
              className="d-inline-block align-top"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
        </Navbar.Collapse>
        <Divider vertical />
        <Dropdown title="AYUDA">
    <Dropdown.Item>Documentacion</Dropdown.Item>
    <Dropdown.Item>Manuales de uso de la plataforma</Dropdown.Item>
    <Dropdown.Item>preguntas frecuentes</Dropdown.Item>

  </Dropdown>
  <Divider vertical />
  <ButtonToolbar>
    
  <IconButton icon={<NoticeIcon />} />
  
  </ButtonToolbar>
  <Divider vertical />
  <AvatarGroup>
    <Badge>
    
      <Dropdown renderToggle={renderAvatar} >
     <Dropdown.Item  panel style={{ padding: 10, width: 160 }}>
      <p>Signed in as</p>
      <strong>foobar</strong>
    </Dropdown.Item>
    <Dropdown.Item divider />
    <Dropdown.Item>Your profile</Dropdown.Item>
    <Dropdown.Item>Your stars</Dropdown.Item>
    <Dropdown.Item>Your Gists</Dropdown.Item>
    <Dropdown.Item divider />
    <Dropdown.Item>Help</Dropdown.Item>
    <Dropdown.Item>Settings</Dropdown.Item>
    <Dropdown.Item>Sign out</Dropdown.Item>
  </Dropdown>
    </Badge>
   


    
  </AvatarGroup>
      </Container>
    </Navbar>
    
    </div>
  );
}

export default BasicExample;