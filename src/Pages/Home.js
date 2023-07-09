import React from "react";
import { Container, Table } from "react-bootstrap";

export function Home() {
  return (
    <div className="home">
       <Container fluid>
       <Container>
    <h1>Control de operaciones </h1>
    </Container>  
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Fecha Operacion</th>
          <th>fecha Liquidacion</th>
          <th>Nro de documento</th>
          <th>Nro de factura</th>
          <th>Ejecutivo</th>
          <th>folio</th>
          <th>Rut</th>
          <th>Dv</th>
          <th>INVERSIONISTA</th>
          <th>Tasa Efectiva Comp.</th>
          <th>Dv</th>
          <th>Dv</th>
          <th>Dv</th>
          <th>Dv</th>
          <th>Dv</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </Container>
    </div>
  );
}
