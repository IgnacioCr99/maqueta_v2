import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function fecha_vencimiento() {
  return (
    
    <Container fluid>
      <Container>
    <h1>Operaciones por fecha de vencimiento</h1>
    </Container>  
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>fecha de vencimiento</th>
          <th>Fecha Operacion</th>
          <th>inversionista</th>
          <th>forma de pago al cliente</th>
          <th>fecha de pago BPC a CTP</th>
          <th>Nemotécnico</th>
          <th>total</th>
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

export default fecha_vencimiento;