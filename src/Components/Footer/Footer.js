import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import logo from '../logo_contempora.png'


const FooterPage = () => {
  return (
    <div className="fixed-bottom">
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
         
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright © Contempora S.A 2020
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default FooterPage;