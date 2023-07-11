import React from "react";
import {  Card, Col, Container, Row  } from "react-bootstrap";

import { Divider } from "rsuite";

import { MDBDataTable, MDBTable,Table } from 'mdbreact';




export default function Saldo_en_custodia() {
  return (
    
    <div className="saldo_en_custodia">
       <Container fluid>
        
       <Row>
        <Col >

    
        <h1> Saldo En Custodia </h1>
      
        <Divider />
       
    <Card>
    
    <table class="table">
  <thead >
    <tr >
      <th scope="col">Fecha Vencimiento</th>
      <th scope="col">Fecha Operación</th>
      <th scope="col">CLIENTE</th>
      <th scope="col">DETALLE</th>
      <th scope="col">Fecha de Pago BPC a CTP</th>
      <th scope="col">Nemotécnico</th>
      <th scope="col">MONTO</th>
      <th scope="col">DÍAS EN MORA</th>
      <th scope="col">CEDENTE</th>
      <th scope="col">INTERES GANADO</th>
      <th scope="col">OBSERVACION</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>09/06/2023</td>
      <td>09/06/2023</td>
      <td>FRUMERC S.A </td>
      <td>SALDO EXCEDENTES</td>
      <td>Otto</td>
      <td>FCENCOS</td>
      <td>=1217097</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      
    </tr>
    <tr>
    <th scope="row">1</th>
      <td>09/06/2023</td>
      <td>09/06/2023</td>
      <td>FRUMERC S.A </td>
      <td>SALDO EXCEDENTES</td>
      <td>Otto</td>
      <td>FCENCOS</td>
      <td>=1217097</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
    <tr>
    <th scope="row">1</th>
      <td>09/06/2023</td>
      <td>09/06/2023</td>
      <td>FRUMERC S.A </td>
      <td>SALDO EXCEDENTES</td>
      <td>Otto</td>
      <td>FCENCOS</td>
      <td>=1217097</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
  </tbody>
</table>
    

    </Card>
      </Col>
    <Col> 
    
    </Col>
    </Row>
    
    </Container>
    </div>
  );
}
