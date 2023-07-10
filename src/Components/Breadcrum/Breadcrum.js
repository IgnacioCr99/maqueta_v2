import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";

const Breadcrumb = () => (
    <MDBBreadcrumb>
    <MDBBreadcrumbItem>
      <a href='#'>Home</a>
    </MDBBreadcrumbItem>
    <MDBBreadcrumbItem active>Control de Operaciones</MDBBreadcrumbItem>
  </MDBBreadcrumb>
);

export default Breadcrumb;