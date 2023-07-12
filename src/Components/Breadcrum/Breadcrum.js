import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";

const Breadcrumb = () => (
    <MDBBreadcrumb style={{marginBottom: 0}} >
    <MDBBreadcrumbItem>
      <a href='#'>Home</a>
    </MDBBreadcrumbItem>
    <MDBBreadcrumbItem active>Control de Operaciones</MDBBreadcrumbItem>
  </MDBBreadcrumb>
);

export default Breadcrumb;