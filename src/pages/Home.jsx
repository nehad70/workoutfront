import React from 'react'
import { Col,Row,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import titileimage from '../assets/img2.jpg'
import Plancards from '../components/Plancards'
import image3 from '../assets/image4.avif'
import image8 from '../assets/image70.avif'
import Header2 from '../components/Header2'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <div className='transparent'>
    <Header2/>
    </div>
  <div style={{width:'100%', height:'100vh'}} className=' mb-5'> 
    < div className='image-wrapper container-fluid rounded' >
      <img style={{width:'100%',height:'900px',opacity:'0.2'}} src={titileimage}  alt="" className='image' />
      
        <h1 className='image-text mt-5 text-align-center align-items-center ' style={{fontSize:'110px', opacity:'0.4',position:'absolute',top:'12%',padding:'20px', fontWeight:'bold'}}><span style={{color:'red',textTransform:'uppercase',fontSize:'200px'}}>𝕩</span>treme Fitness</h1>
        <p style={{position:'absolute',top:'45%',fontWeight:'bold',fontSize:'25px',opacity:'0.4',marginRight:'250px'}} className='ms-5 align-items-center ' >Don't be afraid of failure...</p>
    
        


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
          <Plancards/>
        </div>


        
        
      </div>
      
      <div className='text-center mt-5'>
        <h7 ><Link style={{color:'red', opacity:'0.4',fontSize:"35px",rotate:"revert-layer"}} to={'/Login'}><i class="fa-solid fa-angles-right  "></i><i class="fa-solid fa-angles-right  "></i><i class="fa-solid fa-angles-right  "></i></Link> </h7>

      </div>
    </div>
  </div> 
  <div className='' > 
    < div className='mt-3 text-center' >
      <img style={{width:'100%',height:'650px',opacity:'0.3'}} src={image3} alt="" />
      <h1 className='' style={{padding:'10px',fontWeight:'bold' ,marginTop:"-350px"}}>BE THE BEST VERSION OF <span style={{color:'red'}}>YOURSELF</span></h1>
    </div>
    
  </div> 
  <Container className='mt-5' style={{marginBottom:'100px'}}>
        <Row className='align-items-center p-5'>
          <Col sm={12} md={6} style={{marginTop:'200px'}}>
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
            <img className='' style={{marginTop:'250px ', opacity:'0.5',width:"750px"}} src={image8} alt="" />
          </Col>
        </Row>
      </Container>

  <div>
    <div className='text-center justify-content-evenly' >
      <h1 style={{fontWeight:'bold',fontSize:'50px' ,opacity:'0.4'}}>ABOUT OUR TEAM </h1>
      <p className='mt-3 justify-content-evenly' style={{fontSize:'20px',alignItems:''}}>Strength Training Equipment:

Dumbbells: Different weights for various exercises. <br />
Barbells: Essential for compound lifts like squats, deadlifts, and bench presses. <br />
Power Racks: Used for squats, overhead presses, and other exercises. <br />
Cable Machines: Provide resistance for targeted muscle exercises. <br />

Machines:

Various resistance machines for targeting specific muscle groups. <br />
Free Weights Area:

Dedicated space for free weight exercises and lifting platforms. <br />

Group Classes:

Bodybuilding classes or group sessions available, focusing on hypertrophy and muscle development. <br />
Nutritional Guidance:

Some gyms provide nutritional counseling or guidance to support your bodybuilding goals. <br />
Clean and Well-Maintained Facilities:

A clean and well-maintained environment with proper hygiene and safety measures. <br />
</p>
    </div>
  </div>
  <Footer/>

  
  </>
  )
}
  


export default Home