import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { details } from '../services/allAPI';
import { BASE_URL } from '../services/baseurl';
import Footer from '../components/Footer';

function Details() {

  const params = useParams()
  console.log(params.id);
  

  const [detail,setdetail]=useState([])

  const getadetails = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      const reqheader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      };

      const result = await details(params.id, reqheader);
      console.log(result);
      setdetail(result.data)
    }
  };

useEffect(()=>{
getadetails()
},[])


  return (
<div className='m-5 '>
<Container fluid className='mt-5 p-5 rounded '>

<Row  className=''>
  {/* Title and Image */}
  <Col md={6}>
    <div style={{ backgroundColor: '', padding: '20px' }}>
      <h1 className='text-dark mt- ms-5' style={{fontWeight:'bolder'}}>{detail.title}</h1>
      <img className='detail ms-5 mb-5 mt-5 rounded border'
        src={`${BASE_URL}/uploads/${detail.image}`}
        alt="Card Image"
        style={{ width: '520px', height: '450px' }}
      />
    </div>
  </Col>

  {/* Focus Area */}
  <Col md={6}>

   <div className='border  ' >
   <div>
    <h1 className=' mt-4' style={{marginLeft:'70px',opacity:'0.3',fontWeight:'bolder'}}>Focus area</h1>
      <div style={{ padding: '20px' }} className='mt-2 ms-5 '>
      <h2  className=' w-100   ' style={{fontSize:'20px'}}>{detail.focusArea}</h2>
      {/* Your focus area content goes here */}
    </div>
   </div>


   <div className=''>
      <h1 className=' 'style={{marginLeft:'75px',opacity:'0.3',fontWeight:'bolder'}} >Repeat</h1>
    <div style={{ padding: '20px' }} className='mt-2 ms-5'>
      <h2 className='ms-2' style={{fontSize:'35px' ,fontWeight:'bold'}}>{detail.repeat}</h2>
      {/* Your instructions conten  goes here */}
    </div>
    </div>
    <div className=''>
      <h1 className=' 'style={{marginLeft:'75px',opacity:'0.3',fontWeight:'bolder'}} >Instruction</h1>
    <div style={{ padding: '20px' }} className='mt-1 ms-5'>
      <h2 className='' style={{fontSize:'20px'}}>{detail.instructions}</h2>
      {/* Your instructions conten  goes here */}
    </div>
    </div>
   </div>
  </Col>

  {/* Instructions */}
  <Col md={4}>
   
  </Col>
</Row>

</Container>
<Footer/>

</div>

  );
}

export default Details;