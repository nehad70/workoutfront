import React from 'react'
import { Col,Row,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import titileimage from '../assets/img2.jpg'

import image3 from '../assets/image4.avif'
import image8 from '../assets/image70.avif'
import Header2 from '../components/Header2'
import Footer from '../components/Footer'
import Carousel from 'react-bootstrap/Carousel';
function Home() {
  return (
    <>
    <div className='transparent'>
    <Header2/>
    </div>
  <div style={{width:'100%', height:'100vh'}} className=' mb-5'> 
    < div className='image-wrapper container-fluid rounded' >
      <img style={{width:'100%',height:'900px',opacity:'0.2'}} src={titileimage}  alt="" className='image' />
      
        <h1 className='image-text mt-5 text-align-center align-items-center ms-5 ' style={{fontSize:'110px', opacity:'0.4',position:'absolute',top:'12%',padding:'20px', fontWeight:'bold'}}><span style={{color:'red',textTransform:'uppercase',fontSize:'200px'}}>𝕩</span>treme Fitness</h1>
        <p style={{position:'absolute',top:'45%',fontWeight:'bold',fontSize:'25px',opacity:'0.4',marginLeft:'250px'}} className='ms-5 align-items-center ' >Don't be afraid of failure...</p>
    
        


    </div>
    <div className='all-projects mt-5 mb-5'>
      <div className='text-center'>
        <h1 style={{fontWeight:'bold', opacity:'0.4'}}>CHOOSE a <span style={{color:'red' , text:'bold'}} > PROGRAM</span></h1>
        <p className='mb-5' style={{fontWeight:'bold', opacity:'0.5'}}>DON'T THINK , BEGIN TODAY!</p>      
      </div>

    </div>
    
  </div>
  <div className='all-projects mt-5 mb-5'>
    <div className='text-center'>
      
      
      <div className='d-flex mt-5'>

        
        <div className='ms-5 mt-5' style={{width:'350px'}} >
         
        </div>


        
        
      </div>
      
      <div className='text-center mt-5'>
        <h7 ><Link style={{color:'red', opacity:'0.4',fontSize:"35px",rotate:"revert-layer"}} to={'/Login'}><i class="fa-solid fa-angles-right  "></i><i class="fa-solid fa-angles-right  "></i><i class="fa-solid fa-angles-right  "></i></Link> </h7>

      </div>
    </div>
  </div> 
  <div className='' > 
  <Carousel>
      <Carousel.Item interval={1000}>
       <img  src='https://cutewallpaper.org/21/gym-hd/02536-Interior-of-Modern-Fitness-Stock-Footage-Video-100-Royalty-free-14594866-Shutterstock.jpg'  width='100%' height={'700px'} style={{opacity:'0.3'}} alt="" />
        <Carousel.Caption>
        <h1 className='' style={{padding:'10px',fontWeight:'bold' ,marginTop:"-350px",opacity:'0.5'}}>BE THE BEST VERSION OF <span style={{color:'red'}}>YOURSELF</span></h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
       <img src={image3} width='100%' height={'700px'} style={{opacity:'0.3'}} alt="" />
        <Carousel.Caption>
        <h1 className='' style={{padding:'10px',fontWeight:'bold' ,marginTop:"-350px",opacity:'0.5'}}>BE THE BEST VERSION OF <span style={{color:'red'}}>YOURSELF</span></h1>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src="https://png.pngtree.com/background/20230614/original/pngtree-people-exercising-inside-of-a-gym-picture-image_3488212.jpg"  width='100%' height={'700px'} style={{opacity:'0.3'}} alt="" />
        <Carousel.Caption>
        <h1 className='' style={{padding:'10px',fontWeight:'bold' ,marginTop:"-350px",opacity:'0.5'}}>BE THE BEST VERSION OF <span style={{color:'red'}}>YOURSELF</span></h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  </div> 
  <Container className='mt-' style={{marginBottom:'100px'}}>
        <Row className='align-items-center p-'>
          <Col sm={12} md={6} style={{marginTop:'0px'}}>
            <h1 className='section-title ' style={{fontWeight:"bolder", opacity:'0.4',fontSize:'100px'}}>Come Train With Us</h1>
            <p className='section-subtitle' style={{fontWeight:'bold',fontSize:'25px'}}>
              : Body building <br />
              : Weight Training <br />
              : Diet Nutrition <br />
              : Personal Training
            </p>
            <Link to={'/Login'} className='btn btn-danger'>Become a member <i className="fa-solid fa-arrow-right"></i></Link>
          </Col>
          <Col sm={12} md={6}>
            <img className='rounded' style={{marginTop:'100px ', opacity:'0.4',width:"750px"}} src={image8} alt="" />
          </Col>
        </Row>
      </Container>

  <div>
    
  </div>
  <Footer/>

  
  </>
  )
}
  


export default Home