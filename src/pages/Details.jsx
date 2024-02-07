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
<Container fluid className='mt-5 p-5 rounded ' style={{backgroundColor:'#212121  '}}>

<Row  className=''>
  {/* Title and Image */}
  <Col md={4}>
    <div style={{ backgroundColor: '', padding: '20px' }}>
      <h3 className='text-dark mt-5 ms-5'>{detail.title}</h3>
      <img className='ms-5 mb-5 mt-5 rounded border'
        src={`${BASE_URL}/uploads/${detail.image}`}
        alt="Card Image"
        style={{ width: '450px', height: '400px' }}
      />
    </div>
  </Col>

  {/* Focus Area */}
  <Col md={4}>

   <div>
    <h1 className='mt-5 ' style={{marginLeft:'120px',opacity:'0.3'}}>Focus area</h1>
      <div style={{ padding: '20px' }} className='mt-4 ms-5 '>
      <h5  className='   ' style={{fontSize:'20px'}}>{detail.focusArea}</h5>
      {/* Your focus area content goes here */}
    </div>
   </div>
  </Col>

  {/* Instructions */}
  <Col md={4}>
    <div className=''>
      <h1 className='mt-5 'style={{marginLeft:'75px',opacity:'0.3'}} >Instruction</h1>
    <div style={{ padding: '20px' }} className='mt-4 ms-5'>
      <h5 className='' style={{fontSize:'20px'}}>{detail.instructions}</h5>
      {/* Your instructions conten  goes here */}
    </div>
    </div>
  </Col>
</Row>

</Container>
<Footer/>

</div>

  );
}

export default Details;