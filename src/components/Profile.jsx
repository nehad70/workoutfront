import React, { useEffect } from 'react'
import profileimage from '../assets/img9.jpg'
import { useState } from 'react';
import {Row, Col } from 'react-bootstrap';
import { BASE_URL } from '../services/baseurl';
import { updateProfileAPI } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';



function Profile() {
    const [preview,setPreview] = useState("")

    const [profileData,setProfileData] = useState({
        id:"",
        username:"",
        email:"",
        password:"",
        instagram:"",
        phone:"",
        height:"",
        weight:"",
        profile:""
      })

      console.log(profileData);
      const [existingImage,setExistingImage] = useState("")

      useEffect(()=>{
        const user = JSON.parse(sessionStorage.getItem("existingUser"))
        setProfileData({
          
        ...profileData,
        username:user.username,
        email:user.email,
        password:user.password,
        id:user._id,
        instagram:user.instagram,
        phone:user.phone,
        height:user.height,
        weight:user.weight,
        profile:""
        })
        setExistingImage(user.profile)
      },[]) 
  
      useEffect(()=>{
        if (profileData.profile) {(setPreview(URL.createObjectURL(profileData.profile)))
       
        }
        else{
          setPreview("")
        }
  
      },[profileData.profile])


      const profileUpdate = async(e)=>{
        e.preventDefault()
        const {id,username,email,password,instagram,phone,height,weight,profile} = profileData
        console.log(profileData);
        if (!username || !email || !password || !instagram || !phone || !height || !weight || !profile) {
          toast.warning("fill all details")
          
        }
        else{
          const reqBody = new FormData()
  
          reqBody.append("username",username)
          reqBody.append("email",email)
          reqBody.append("password",password)
          reqBody.append("instagram",instagram)
          reqBody.append("phone",phone)
          reqBody.append("height",height)
          reqBody.append("weight",weight)
          reqBody.append("profile",profile)


  
          const token = sessionStorage.getItem("token")
          console.log(token);
          if (preview) {
            const reqheader = {
                "Content-Type":"multipart/form-data",
                "Authorization":`Bearer ${token}`
              }
              const result = await updateProfileAPI(id,reqBody,reqheader)
              console.log(result);
            if (result.status === 200) {
              console.log(result.data);  
              toast.success('updated successfully')
              
              sessionStorage.setItem("existingUser",JSON.stringify(result.data))
  
              
            }
          }  
          else{
            const reqheader = {
              "Content-Type":"application/json",
              "Authorization":`Bearer ${token}`
            }
            const result = await updateProfileAPI(id,reqBody,reqheader)
            console.log(result);
          if (result.status === 200) {
            console.log(result.data); 
            toast.success('updated successfully') 
            
            sessionStorage.setItem("existingUser",JSON.stringify(result.data))
  
            
          }
          }
  
  
  
  
          
        }
  
      }
  return (

 <div className='profile d-flex justify-content-center align-items-center rounded ' >
  
       <div className='   p-5 mb-5 m-5 mt-5 rounded border  ' style={{width:'650px',boxShadow:' 5px 5px 15px 5px #303024'}}>
        <div className='d-flex justify-content-between' style={{}}>
          
            <h3 className='  ' style={{fontWeight:'bolder',opacity:'0.4'}}>PROFILE</h3>
            
           
        </div>
      
            <div className='row d-flex justify-content-center align-items-center  flex-column mt-3 ' style={{}}>
            <label className=' d-flex justify-content-center mt-5' htmlFor="profile">
        <input id="profile" type="file" style={{display:'none'}} onChange={(e)=>setProfileData({...profileData,profile:e.target.files[0]})} />
        {
          existingImage==""?
          <img  width={'200px'} height={'200px'} src={preview?preview:`https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png`}className='rounded-circle justify-content-center border ' alt="" />
        :          <img width={'200px'} height={'200px'} src={preview?preview:`${BASE_URL}/uploads/${existingImage}`}className='rounded-circle justify-content-center ' alt="" />

        }
        </label>
               
                <div className='mb-3'>
                    <input type="text" className='form-control mt-5 ' style={{height:'45px'}}  placeholder='Instagram ' value={profileData.instagram}  onChange={(e)=>setProfileData({...profileData,instagram:e.target.value})} />

                </div>
                <div className='mb-3'>
                    <input type="text" className='form-control mt-2' style={{height:'45px'}}  placeholder='Phone number ' value={profileData.phone}  onChange={(e)=>setProfileData({...profileData,phone:e.target.value})} />

                </div>
                <div className='mb-3'>
                   <Row>
                    <Col>
                    <input type="text" className='form-control bg-transparent border mt-1' style={{height:'45px'}}  placeholder='Height ' value={profileData.height} onChange={(e)=>setProfileData({...profileData,height:e.target.value})}  />
                    </Col>
                    <Col>
                     <input type="text" className='form-control bg-transparent border mt-1'  style={{height:'45px'}}  placeholder='Weight' value={profileData.weight} onChange={(e)=>setProfileData({...profileData,weight:e.target.value})} />
                    </Col>
                   </Row>
                </div>
            
            
                <div className='mb-5 mt-3'>
                 <button className='btn btn-warning rounded w-100 ' onClick={profileUpdate}>Update</button>
                </div>

             </div>
       
</div>
<ToastContainer autoClose={2000} theme='colored' position='top-center' />
 </div>

  )
}

export default Profile