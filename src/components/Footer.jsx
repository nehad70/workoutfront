import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'100%',height:'300px',color:'black'}} className='d-flex   justify-content-center align-items-center w-100 flex-column mt-5'>
    <div className='footer d-flex align-items-center justify-content-evenly w-100'>
        <div className='websites mt-5' style={{width:'400px'}}>
        
            <h4  style={{overflow:'hidden', color:'gray',text:''}}><span style={{fontWeight:'bold', fontSize:'75px',color:'red'}} >𝕩</span> treme fitness{' '}
             </h4>
             <h6 style={{color:'gray'}}>Getting to the gym and prioritizing your fitness isn't easy we know! But staying on track and working toward your health goals is essential. 
             So for those days when you need some extra motivation, these motivating fitness and our gym can help.</h6>
             <h6 style={{color:'gray'}}>similique? Nesciunt ,aspernature</h6>
      </div>
        <div className='links d-flex flex-column mt-5 '>
             <h4 className='mb-3' style={{color:'gray'}}>Links</h4>
             <Link to={'/'} style={{textDecoroation:'none' ,color:'gray'}}>Home page</Link>
             <Link to={'/Login'} style={{textDecoroation:'none' ,color:'gray'}}>Login Page</Link>
             <Link to={'/Register'} style={{textDecoroation:'none' ,color:'gray'}}>Register Page</Link>
        </div> 
      <div className='guides d-flex flex-column mt-5'>
        <h4 style={{overflow:'hidden', color:'gray'}} className='mb-3 '>Guides</h4>
             <Link to={'https://bootswatch.com/'} style={{textDecoroation:'none' ,color:'gray'}}>React</Link>
             <Link to={'https://bootswatch.com/'} style={{textDecoroation:'none' ,color:'gray'}}>React Bootstrap</Link>
             <Link to={'https://bootswatch.com/'} style={{textDecoroation:'none' ,color:'gray'}}>Bootswatch</Link>
      </div>
      <div className='contacts mt-5'>
        <h4 style={{overflow:'hidden', color:'gray '}} className='mb-3'>Contact us</h4>
         
         <div className='d-flex justify-content-evenly align-items-center ml32'>
            <Link to={'https://bootswatch.com/'} style={{textDecoroation:'none' ,color:'red'}}><i class="fa-brands fa-instagram fa-2x me-3 "></i></Link>
             <Link to={'https://bootswatch.com/'} style={{textDecoroation:'none' ,color:'red'}}><i class="fa-brands fa-twitter fa-2x me-3"></i></Link>
             <Link to={'https://bootswatch.com/'} style={{textDecoroation:'none' ,color:'red'}}><i class="fa-brands fa-linkedin fa-2x me-3"></i></Link>
              <Link to={'https://bootswatch.com/'} style={{textDecoroation:'none' ,color:'red'}}><i class="fa-brands fa-facebook fa-2x me-3"></i></Link>
         </div>
      </div>     
    </div>
    <p className='mt-5 mb-5' style={{color:'gray'}}>copyright © 2023 xtreme fitness. Built with react </p>
</div>

  )
}
  


export default Footer