import React from 'react'
import Nav from 'react-bootstrap/Nav';

function Header2() {
  return (
    <>
     <Nav variant='tabs ' className="justify-content-end mt-2 mb-1" style={{marginRight:'250px',fontWeight:'bolder'}} activeKey="/home">
        <Nav.Item>
          <Nav.Link className=' ms-4 ' style={{marginRight:'',color:'white',fontSize:'20px',height:'40px'}} href="/about">About <i class="fa-regular fa-address-card"></i></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  className=' ms-4' style={{marginRight:'',color:'white',fontSize:'20px'}} href='/login'>Login <i class="fa-solid fa-right-to-bracket"></i></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/trainer'  className=' ms-4' style={{marginRight:'',color:'white',fontSize:'20px'}}  eventKey="/footer">Trainers <i class="fa-solid fa-user"></i></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/trainer'  className=' ms-4 btn btn-warning mb-1'  style={{marginRight:'',color:'white',fontSize:'20px'}}  eventKey="/footer">Premium <i class="fa-solid fa-crown"></i></Nav.Link>
        </Nav.Item>
       
      

      
      </Nav>
    </>
  )
}

export default Header2