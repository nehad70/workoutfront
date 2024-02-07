import React from 'react'
import profileimage from '../assets/img9.jpg'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import {Row, Col } from 'react-bootstrap';


function Profile() {
    const [open, setOpen] = useState(false);
  return (

 <div className='d-flex justify-content-center align-items-center rounded' >
       <div className='   p-5 mb-5 m-5 mt-5 rounded ' style={{width:'650px',boxShadow:' 5px 5px 15px 5px #303024'}}>
        <div className='d-flex justify-content-between' style={{}}>
            <h3 className='text-shadow' style={{fontWeight:'bolder',opacity:'0.4'}}>PROFILE</h3>
           
        </div>
      
            <div className='row d-flex justify-content-center align-items-center  flex-column mt-3 ' style={{}}>
                <label  htmlFor="Profile">
                    <input id='Profile' type="file" style={{display:'none'}} />
                    <img src={profileimage} width={'200px'} height={'185px'} className='rounded-circle mb-4 mt-4' alt="no image" />
                 </label>
               
                <div className='mb-3'>
                    <input type="text" className='form-control ' style={{height:'45px'}}  placeholder='Instagram ' />

                </div>
                <div className='mb-3'>
                    <input type="text" className='form-control' style={{height:'45px'}}  placeholder='Phone number ' />

                </div>
                <div className='mb-3'>
                   <Row>
                    <Col>
                    <input type="text" className='form-control bg-transparent border' style={{height:'45px'}}  placeholder='Height ' />
                    </Col>
                    <Col>
                     <input type="text" className='form-control bg-transparent border' style={{height:'45px'}}  placeholder='Weight' />
                    </Col>
                   </Row>
                </div>
            
            
                <div className='mb-5 mt-3'>
                 <button className='btn btn-warning rounded w-100'>Update</button>
                </div>

             </div>
       
</div>
 </div>

  )
}

export default Profile