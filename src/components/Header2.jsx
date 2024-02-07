import React from 'react'
import Nav from 'react-bootstrap/Nav';

function Header2() {
  return (
    <>
     <Nav className="justify-content-end mt-4 mb-2" style={{marginRight:'250px'}} activeKey="/home">
        <Nav.Item>
          <Nav.Link style={{marginRight:'50px',color:'white'}} href="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  style={{marginRight:'50px',color:'white'}} href='/login'>Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  style={{marginRight:'150px',color:'white'}}  eventKey="/footer">Trainers</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  style={{marginRight:'150px',color:'white'}}  eventKey="/footer">Contact us</Nav.Link>
        </Nav.Item>
      

      
      </Nav>
    </>
  )
}

export default Header2