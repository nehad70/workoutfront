import React from 'react'
import Footer from './Footer'
import { Col,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className=''>
         <div>
         <Row className='mt-5 m-5 border '>
            <Col sm={12} md={6} className='mt-5'>
              <h1 className='ms-3' style={{fontWeight:"bolder", opacity:'0.4',fontSize:'90px'}}> Our vision is to empower individuals to transform their lives .</h1>
            </Col>
            <Col sm={12} md={6}  className='mt-5 '>
              <img src="https://wallpapers.com/images/high/chris-bumstead-with-fellow-bodybuilder-0cze8z1j03gt6gk6.webp"width={'800px'} height={'520px'} alt="" />
            </Col>
          </Row>
         </div>
          <div>
          <div className='border m-5'></div>

          <div className='ms-5'>
          <iframe width="850" height="480" src="https://www.youtube.com/embed/o9zCgPtsups" title="How To Train For Mass | Arnold Schwarzenegger&#39;s Blueprint Training Program" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe className='ms-2' width="845" height="480" src="https://www.youtube.com/embed/8zRlH0Jl7aQ" title="CBUM POSING - Mr Olympia  2023 💥💪" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          </div>
          <div className='border mt-2 m-5'>
           
          </div>
          <div className='justify-content-center align-items-center d-flex'>
              <h4 style={{color:'red',opacity:'0.4'}}><Link><i class="fa-solid fa-angles-right  "></i><i class="fa-solid fa-angles-right  "></i><i class="fa-solid fa-angles-right  "></i></Link></h4>
            </div>
          
       <div>
       <Footer/>
       </div>
    </div>
  )
}

export default About