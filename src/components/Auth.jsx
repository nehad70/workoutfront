import React, { useState } from 'react'



import {  Link, useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { loginAPI, registerAPI } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';




function Auth({Register}) {

    // to hold the value from input box
        const [userData, setUserData]= useState({
            username:"",
            email:"",
            password:""
        })
        console.log(userData);
        // navigate
        const navigate  = useNavigate()
    const registerForm = Register?true:false 


    // handle register
    const  handleRegister =async(e)=>{
        e.preventDefault()
        const{username,email,password}=userData

        if(!username || !email || !password){

            toast.info('please fill the form completely')
        }
        else{
          const result =   await registerAPI(userData)
           console.log(result); 
           if (result.status == 200){ 
           
            toast.success(`${result.data.username} is successfully registered`) 
                setUserData({
                    username:"",
                    email:"",
                    password:""
                })
                    //move to login page
                    navigate('/Login') 

            }
            else{
                toast.error(result.response.data)
            }
        }
    }
     // login function

     const handleLogin = async(e)=>{

        e.preventDefault()

        //destructure

        const{email,password}=userData
        if(!email || !password){
            toast.danger('please fill the form compltely')
        }else{
            const result = await loginAPI(userData)
            console.log(result);

            if(result.status===200){
               toast.success('Login successfull')


                sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
                sessionStorage.setItem("token",result.data.token)

                setUserData({
                    username:"",
                    email:"",
                    password:""
                })

                //navigate to home
if (result.data.existingUser.username =="admin" && result.data.existingUser.email =="admin@gmail.com" && result.data.existingUser.password =="admin") {
    
    setTimeout(()=>{
       navigate(`/addworkout`)

    },2500)
}
 else{
    setTimeout(()=>{
        navigate(`/program`)
 
     },2500)

}




            
            }   
            else{
                alert(result.response.data)
            }
        }
     }
    

  return (
    
   <div style={{width:'100%', height:'100vh'}} className= '  d-flex justify-content-center align-items-center'>
    
    <div className=' w-75 container ' >
   
    
    <div className=' login p-5 rounded   ' style={{backgroundColor:'black'}}>
        <div className='row align-items-center rounded shadow border mt-4 '>
        <div className='col-lg-6 '>
           
        </div>
        <div className='  col-lg-6 p-5'>
            <div className='d-flex align-items-center flex-column'>
            <h1 className='text-center  ' style={{color:'wheat',fontWeight:'bold'}}>
            <span style={{fontSize:'150px'}}>𝕩</span>treme Fitness</h1>
            <h5 className='  ms-3  ' style={{fontWeight:'bold',fontSize:'35px',opacity:"0.2"}}>
             {
                registerForm?  "sign up to your account": "sign in to your account"
             }
            </h5>
            <Form className='mt-4'>
             
             
             {
                registerForm &&
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Control className='bg-transparent border' type="text" placeholder="username" value={userData.username}
                     onChange={(e)=>setUserData({...userData,username:e.target.value})} />
                </Form.Group>

             }
              <Form.Group className="mb-3  " controlId="formBasicEmail" >
                <Form.Control className='bg-transparent border'   type="email" placeholder="Email Id " 
                     value={userData.email}
                    onChange={(e)=>setUserData({...userData,email:e.target.value})}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='bg-transparent border'  type="password" placeholder="password" 
                     value={userData.password}
                        onChange={(e)=>setUserData({...userData,password:e.target.value})}/>
                </Form.Group>
                

                
                {
                    registerForm?
                    <div>
                        <button onClick={handleRegister}  className='btn btn-primary rounded'> Register</button>
                        <p className='mt-3'>Already have an account? click here to <Link to={'/Login'}>Login</Link></p>
                    </div>:
                    <div>
                    <button onClick={handleLogin} className='btn btn-danger rounded' >Login </button>
                    <p className='mt-3'>New user? click here to <Link to={'/Register'}>Register</Link></p>
                    </div>
                }
            </Form>
        </div> 
              
         </div>
        </div>
        

        </div>
         </div>
         <ToastContainer autoClose={2000} theme='colored' position='top-center' />
    </div>

            
    
  )
}

export default Auth