import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function  Header() {
  const [isUser,setIsUser] = useState(false)
  useEffect(()=>{
    if (sessionStorage.getItem("existingUser")) {
      const userType =  JSON.parse(sessionStorage.getItem("existingUser")).email
    console.log(userType);
    if (userType == "admin@gmail.com") {
      setIsUser(true)
      
    }
    else{
      setIsUser(false)
    }
    }
    },[])
  
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-dark mb-3">
          <Container fluid>
          <Link to={'/login'} className='rounded btn btn-warning ms-auto m-3' style={{marginLeft:'', width:'7rem'}}>Logout<i class="fa-solid fa-power-off ms-2 "></i></Link>
           
           
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='border ' />
            
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={ `offcanvasNavbarLabel-expand-${expand}`}>
              <span style={{fontSize:"55px",color:'red'}}>𝕩</span>treme Fitness
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>

                             {
                              isUser?

//Admin Header
<>
                               
                               <Nav.Link href="/admin" className='ms-3 mt-5' style={{fontWeight:"bolder",fontSize:"27px"}}>Dashboard</Nav.Link>
                             </>
                             :
                             //User Header
                             <>
                             <Nav.Link href="/" style={{fontWeight:"bolder",fontSize:"27px"}} className='ms-3 mt-5'>- Home</Nav.Link>
                            <Nav.Link href="/profile" className='mt-3 ms-3' style={{fontWeight:"bolder",fontSize:"27px"}}>- profile</Nav.Link>
                            <Nav.Link href="/about" className='mt-3 ms-3' style={{fontWeight:"bolder",fontSize:"27px"}}>- About Us</Nav.Link>
                            <Nav.Link href="/rating" className='mt-3 ms-3' style={{fontWeight:"bolder",fontSize:"27px"}}>- <i class="fa-regular fa-star"></i></Nav.Link>

                            {/* <Nav.Link href="/admin" className='mt-3' style={{fontWeight:"bolder",fontSize:"27px"}}>add</Nav.Link> */}
                          </>
}
              
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;