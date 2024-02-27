import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap'
import Header from './Header';
import { PieChart } from 'recharts';
import { Link } from 'react-router-dom';
import { allUsersAPI } from '../services/allAPI';


function Admin() {

  const [users,setUsers] = useState({})

  const allUsers = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      const reqheader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      };

      const result = await allUsersAPI(reqheader);
      console.log(result.data);

      const filterUSer = result.data.filter(user=>user.email!=="admin@gmail.com" && user.password !== "admin") 
      console.log(filterUSer);
      setUsers(filterUSer)
    }}

    useEffect(()=>{
      allUsers()
    },[])


  return (
    
    <Row className='container-fluid mt-5'>
      <Header/>
       
        
        
        
        <Col sm={12} md={4}>
        <div className='mt-5 ms-5 mb-5'>
                    <div className='border d-flex align-items-center rounded p-2 mt-3'>
                        <h5 className='ms-5 mt-3 mb-3' style={{opacity:'0.2'}} >Wrokout List</h5>
                        <div className='ms-auto'>
                           
                          
                        <div>
                           <Link to={'/addedplay/chest'}>
                           
                           <div className='mt-3 bg-light '>
                           <div className=' border d-flex align-items-center justify-content-between p2 mb-2 rounded'>
                              <h5 className='ms-3 mt-4 mb-3'>Chest</h5>
                              <div className='d-flex '>
             
                                <button className='btn'> <i class="fa-solid fa-trash text-danger"></i></button>
                              </div>
                            
                         
                            </div>
                           </div>
                           </Link>
                           <Link to={'/addedplay/back'}> 
                           
                           <div  className='mt-4 bg-light'>
                           <div className=' border d-flex align-items-center justify-content-between p2 mb-2 rounded'>
                              <h5 className='ms-3 mt-4 mb-3'>Back</h5>
                              <div className='d-flex '>
             
                                <button className='btn'> <i class="fa-solid fa-trash text-danger"></i></button>
                              </div>
                            
                         
                            </div>
                           </div>
                           </Link>
                           
                      
                           <Link to={'/addedplay/shoulder'}>
                           
                           <div className='mt-4 bg-light'>
                           <div className=' border d-flex align-items-center justify-content-between p2 mb-2 rounded'>
                              <h5 className='ms-3 mt-4 mb-3'>Shoulder</h5>
                              <div className='d-flex '>
             
                                <button className='btn'> <i class="fa-solid fa-trash text-danger"></i></button>
                              </div>
                            
                         
                            </div>
                           </div>
                           </Link>
                         <Link to={'/addedplay/leg'}>
                         <div className='mt-4 bg-light'>
                            <div className=' border d-flex align-items-center justify-content-between p2 mb-2 rounded'>
                              <h5 className='ms-3 mt-4 mb-3'>Leg</h5>
                              <div className='d-flex '>
             
                              <button className='btn'> <i class="fa-solid fa-trash text-danger"></i></button>
                


                            </div>
                            
                         
                         </div>
                         </div>
                         </Link>
                         <Link to={'/addedplay/bicetrice'}>
                         <div className='mt-4 mb-4 bg-light' >
                            <div className=' border d-flex align-items-center justify-content-between p2 mb-2 rounded'>
                              <h5 className='ms-3 mt-4 mb-3'>Biceps & Triceps</h5>
                              <div className='d-flex '>
             
                              <button className='btn'> <i class="fa-solid fa-trash text-danger"></i></button>
                


                            </div>
                            
                         
                         </div>
                         </div>
                         </Link>
                         

                        </div>

                    </div>
                   
                </div>
                </div>
             
           
            
        
        </Col>

       
        
        
        
        <Col sm={12} md={8}>
        <div className='mt- ms-5'>
          
                    <div className='border d-flex align-items-center rounded p-2 ms-5'>
                    
                    <table class="table flex-column table-bordered  shadow mt-5 rounded m-2 mb-2">
                      
                <thead className=''>
                    <tr class="">
                        <th class="py-3 text-center">id</th>
                        <th class="py-3 text-center">Email</th>
                        <th class="py-3 text-center">User Name</th>
                        <th class="py-3 text-center">Instagram</th>
                        <th class="py-3 text-center">Phone Number</th>
                        <th class="py-3 text-center"> Height</th>
                        <th class="py-3 text-center"> Weight</th>
                        

                      
                
                    </tr>
                
                </thead>
                <tbody>
                    {
                      users.length>0?
                      users.map((item,index)=>(<tr>
                        <td class="text-center">{index+1}</td>
                            <td class="text-center">{item.email}</td>
                            <td class="text-center">{item.username}</td>
                            <td class="text-center">{item.instagram}</td>
                            <td class="text-center">{item.phone}</td>
                            <td class="text-center">{item.height}</td>
                            <td class="text-center">{item.weight}</td>
                            
                                
                               
                        </tr>)):
                        <p>No Users</p>
                    }
                </tbody>
            </table>

                    </div>
                   
                </div>
       
        </Col>
        <Col sm={12} md={4}>
          
        <PieChart/>
        </Col>
        
      </Row>
);
}

export default Admin