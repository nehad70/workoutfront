import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div className='border m-5'>
      
      </div>
      <div style={{width:'100%',height:'300px',color:'black'}} className='d-flex   justify-content-center align-items-center w-100 flex-column mt-5 mb-5'>
      <div className='footer d-flex align-items-center justify-content-evenly w-100'>
          <div className='websites mt-5' style={{width:'400px'}}>
          
              <h4  style={{overflow:'hidden', color:'gray',fontWeight:'bolder'}}><span style={{fontWeight:'bold', fontSize:'75px',color:'red'}} >𝕩</span> treme fitness{' '}
               </h4>
               <h6 style={{color:'gray'}}>Getting to the gym and prioritizing your fitness isn't easy we know! But staying on track and working toward your health goals is essential. 
               So for those days when you need some extra motivation, these motivating fitness and our gym can help.</h6>
               <h6 style={{color:'gray'}}>similique? Nesciunt ,aspernature</h6>
        </div>
          <div className='links d-flex flex-column mt-5 '>
               <h4 className='mb-3' style={{color:'gray',fontWeight:'bolder'}}>Links</h4>
               <Link to={'/'} style={{textDecoroation:'none' ,color:'gray',fontWeight:'bolder'}}>Home page</Link>
               <Link to={'/Login'} style={{textDecoroation:'none' ,color:'gray',fontWeight:'bolder'}}>Login Page</Link>
               <Link to={'/Register'} style={{textDecoroation:'none' ,color:'gray',fontWeight:'bolder'}}>Register Page</Link>
               <Link to={'/about'} style={{textDecoroation:'none' ,color:'gray',fontWeight:'bolder'}}>About Us</Link>
          </div> 
          <div className='contacts mt-5'>
                 <h4 style={{overflow:'hidden', color:'gray ',fontWeight:'bolder'}} className='mb-3'>Contact us</h4>
                  <div className='d-flex mb-4 '>
                      <input type="text" className='form-control bg-transparent border' placeholder='Email id '  />
                      <button className=" bg-warning btn text-white d-flex" style={{opacity:'0.5',fontSize:'20px'}}><i class="fa-solid fa-angle-right"></i><i class="fa-solid fa-angle-right"></i></button>
                  </div>
           
                 <div className='d-flex justify-content-evenly align-items-center ml32'>
                     <Link to={'https://bootswatch.com/'} style={{textDecoroation:'none' ,color:'red'}}><i class="fa-brands fa-instagram fa-2x me-3 "></i></Link>
                    <Link to={'https://bootswatch.com/'} style={{textDecoroation:'none' ,color:'red'}}><i class="fa-brands fa-twitter fa-2x me-3"></i></Link>
                    <Link to={'https://bootswatch.com/'} style={{textDecoroation:'none' ,color:'red'}}><i class="fa-brands fa-linkedin fa-2x me-3"></i></Link>
                    <Link to={'https://bootswatch.com/'} style={{textDecoroation:'none' ,color:'red'}}><i class="fa-brands fa-facebook fa-2x me-3"></i></Link>
                  </div>
           </div>     
        <div className='guides d-flex flex-column mt-5'>
          <h4 style={{overflow:'hidden', color:'gray'}} className='mb-3 '>Guides</h4>
               <Link to={'https://bootswatch.com/'} style={{textDecoroation:'none' ,color:'gray',fontWeight:'bolder'}}>React</Link>
               <Link to={'https://bootswatch.com/'} style={{textDecoroation:'none' ,color:'gray',fontWeight:'bolder'}}>React Bootstrap</Link>
               <Link to={'https://bootswatch.com/'} style={{textDecoroation:'none' ,color:'gray',fontWeight:'bolder'}}>Bootswatch</Link>
        </div>
        
      </div>
     
  </div>
    </div>

  )
}
  


export default Footer