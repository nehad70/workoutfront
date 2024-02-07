import React from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap'; 
import { useState } from 'react';
import Button from 'react-bootstrap';

function Plancards() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className='d-flex mt-5' style={{marginBottom:"210px"}}>
    <div className='mt-5'>
      <Card style={{ width: '23rem' ,display:'flex',height:"20px" }} className='mt-5 ms-5'>
         <Card.Img style={{opacity:'1'}} variant="top" src="https://www.transparentlabs.com/cdn/shop/articles/TL-177_1200x1200.jpg?v=1659513749"  />
           <Card.Body>
            <Card.Title>Home workout</Card.Title>
        
           </Card.Body>

       </Card>
       
       
       
    </div>
    <div className='mt-5'>
         <Card style={{ width: '23rem',float:'left',height:"20px"  }} className='mt-5 ms-5 mb-5'>
            <Card.Img style={{opacity:'1'}} variant="top" src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  />
            
            <Card.Body>
            <Card.Title>Home workout</Card.Title>
        
           </Card.Body>

          </Card>
    </div>


    <div className='mt-5'>
    <Card style={{ width: '23rem',height:"20px",boxShadow:"5px 5px 15px 5px #303024"  }} className='mt-5 ms-5 rounded'>
      <Card.Img style={{opacity:'1'}} variant="top" src="https://images.indulgexpress.com/uploads/user/imagelibrary/2023/5/13/original/Untitled_design_20.png" />
      <Card.Body>
        <Card.Title>advanced</Card.Title>
        
      </Card.Body>
    </Card>
    </div>
    <div className='mt-5 rounded' style={{}}>
    <Card style={{ width: '23rem',height:"20px" }} className='mt-5 ms-5'>
      <Card.Img className='rounded shadow' style={{opacity:'1'}} variant="top" src="https://nypost.com/wp-content/uploads/sites/2/2018/06/180628-skipping-workout-feature.jpg?quality=75&strip=all&w=1200" />
      <Card.Body>
        <Card.Title>advanced</Card.Title>
        
      </Card.Body>
    </Card>
    </div>
    
        
    
    </div>
  )
}

export default Plancards