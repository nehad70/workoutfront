import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';

function  Header() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-dark mb-3">
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <span style={{fontSize:"55px"}}>𝕩</span>treme Fitness
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>

                             <Nav.Link href="/" style={{fontWeight:"bolder",fontSize:"27px"}}>Home</Nav.Link>
                             <Nav.Link href="/profile" className='mt-3' style={{fontWeight:"bolder",fontSize:"27px"}}>profile</Nav.Link>
                             <Nav.Link href="/admin" className='mt-3' style={{fontWeight:"bolder",fontSize:"27px"}}>add</Nav.Link>

              
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;