import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function Contratos() {
  return (
    
    <Container fluid>
   <Container>
    <h1>Contratos</h1>
    </Container>  
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Rut</th>
          <th>Dv</th>
          <th>Cendente</th>
          <th>Contrato</th>
          <th>Ejecutivo</th>
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
  );
}

export default Contratos;