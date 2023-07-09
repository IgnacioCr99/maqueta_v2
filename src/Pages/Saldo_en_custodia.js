import Table from 'react-bootstrap/Table';

function Saldo_en_custodia() {
  return (
    
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Fecha vencimiento</th>
          <th>Fecha Operacion</th>
          <th>cliente</th>
          <th>detalle</th>
          <th>fecha de pago BPC a CTP</th>
          <th>Nemotécnico</th>
          <th>Monto</th>
          <th>dias en mora</th>
          <th>Cedente</th>
          <th>Interes ganado</th>
          <th>Observacion</th>  
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
  );
}

export default Saldo_en_custodia;