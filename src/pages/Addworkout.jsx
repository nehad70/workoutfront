import React from 'react';
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { addAPI } from '../services/allAPI';
import Header from '../components/Header';

function AddWorkout() {
  const [addData,setAddData]= useState({
    title:"",
    image:"",
    repeat:"",
    instructions:"",
    category:"",
    focusArea:""

  })
  console.log(addData);
  const handleCancel=()=>{
    setAddData({
      title:"",

      image:"",
      repeat:"",
      instructions:"",
      category:"",
      focusArea:""
  
    })

  }

  const handleAdd = async()=>{
    const {title,image,repeat,instructions,category,focusArea}=addData
    if (!title || !image || !repeat || !instructions || !category || !focusArea) {
      alert('please fill the form completely')
      
    }else{
      const reqBody = new FormData()
      reqBody.append("title",title)
      reqBody.append("image",image)
      reqBody.append("repeat",repeat)
      reqBody.append("instructions",instructions)
      reqBody.append("category",category)
      reqBody.append("focusArea",focusArea)
       
      const token = sessionStorage.getItem("token")
      console.log(token);
      const reqheader = {
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
      }
      const result = await addAPI(reqBody,reqheader)
      console.log(result);

      if (result.status === 200) {
        alert("Plans added succesfully")
        
      }
      else{
      alert(result.response.data)
      }

    }
  }
  return (
    <Container className='border rounded mt-5'>
      <Header/>
      <Row className='m-5 d-flex mr-3'>
        <Col md={6}>
        <Form.Group controlId="formRepeatType">
            <Form.Label className='mt-5'>Title </Form.Label>
            <Form.Control className='bg-transparent border' value={addData.title} onChange={(e)=>setAddData({...addData,title:e.target.value})} type="text" placeholder=" " />
            {/* <Form.Label className="floating-label">Repeat Type</Form.Label> */}
          </Form.Group>
      <Form.Group controlId="formRepeatType">
      <label for="formFile" class="form-label mt-4">Default file input example</label>
      <input class="form-control bg-transparent border "   type="file" onChange={(e)=>setAddData({...addData,image:e.target.files[0]})} id="formFile"/>
       {/* <Form.Label className="floating-label">Repeat Type</Form.Label> */}
          </Form.Group>
          <Form.Group controlId="formRepeatType" className='mt-4'>
            <Form.Label>Repeat </Form.Label>
            <Form.Control value={addData.repeat} className='bg-transparent border' onChange={(e)=>setAddData({...addData,repeat:e.target.value})} type="text" placeholder=" " />
            {/* <Form.Label className="floating-label">Repeat Type</Form.Label> */}
          </Form.Group>

          <Form.Group controlId="formInstructions " className='mt-4'>
            <Form.Label>Instructions</Form.Label>
            <Form.Control className='bg-transparen border ' value={addData.instructions} onChange={(e)=>setAddData({...addData,instructions:e.target.value})} as="textarea" rows={3} placeholder=" " />
            {/* <Form.Label className="floating-label">Instructions</Form.Label> */}
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="formCategory">
            <Form.Label className='mt-5 ms-5'>Category</Form.Label>
            <Form.Control className=' ms-5 bg-transparent border 'value={addData.category} onChange={(e)=>setAddData({...addData,category:e.target.value})} as="select" custom>
              <option value="" style={{color:'wheat'}}>Select category</option>
              <option value="chest"> Chest</option>
              <option value="Back">Back</option>
              <option value="shoulder">Shoulder</option>
              <option value="leg">Leg</option>
              <option value="biceps">Biceps & Triceps</option>
              {/* Add more options as needed */}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formFocusArea">
            <Form.Label className='mt-4 ms-5'>Focus Area</Form.Label>
            <Form.Control className=' ms-5 bg-transparen border'value={addData.focusArea} onChange={(e)=>setAddData({...addData,focusArea:e.target.value})} type="text" placeholder=" " />
            {/* <Form.Label className="floating-label">Focus Area</Form.Label> */}
          </Form.Group>
        </Col>
        <Col md={6} className='mb-5 mt-4' >
          <Button style={{width:"375px",height:"55px",fontSize:'23px'}} onClick={handleAdd} variant="primary" type="submit" block>
            Add
          </Button>
          <Button className='ms-5 bg-warning' style={{width:"150px",height:"55px",fontSize:'20px'}} onClick={handleCancel} variant="secondary" type="button" block>
            Cancel
          </Button>
        </Col>
       
      </Row>

      <Row className="justify-content-center mt-3 ">
       
      </Row>
    </Container>
  );
}

export default AddWorkout;
