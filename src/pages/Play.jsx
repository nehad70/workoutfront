import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { allplan } from '../services/allAPI';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { BASE_URL } from '../services/baseurl';
import AddWorkout from './Addworkout';
import Header from '../components/Header';
function Play() {
  
  const [cat, setcat] = useState([]);
  const [gplan, setgplan] = useState([]);
  const params = useParams();
  console.log(params.cat);

  useEffect(() => {
    const getallplan = async () => {
      if (sessionStorage.getItem("token")) {
        const token = sessionStorage.getItem("token");
        const reqheader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        };

        const result = await allplan( reqheader);
        console.log(result.data);
        const filteredPlans = result.data.filter(plan => plan.category.toLowerCase() === params.cat.toLowerCase());
    setcat(filteredPlans);

        if (result.status === 200) {
          // Filter plans based on category
          setgplan(result.data);
        }
      }
    };

    getallplan();
  }, []);

  useEffect(() => {
    
    console.log(cat);
    console.log(cat.length);

  }, [gplan, params.cat]);

  return (
   <div className='welcome '>
    <Header/>
    
     <Container  className=''>
  
  
         {
          cat?.length>0?
          cat?.map((item)=>(
          <Link style={{textDecoration:'none'}} to={`/details/${item._id}`}>  
          <Card style={{ width: '75rem' }} className='play mt-4 rounded bg-transparent border p-1' >

          <div className="row ">
            <div className="col-lg-4"><img src={`${BASE_URL}/uploads/${item.image}`} width={'200pc'} alt="" />
</div>
            <div className="col-lg-8 d-flex">
            <div className="col-lg-8 d-flex">
             <h3 className='m-3  mt-5' style={{fontWeight:'bold'}}>{item.title}</h3>
            
            </div>
            <div>
            <h3 className=' mt-5' style={{color:'wheat',fontWeight:'bold',marginLeft:'125px',opacity:'0.5'}}>{item.repeat}</h3>
            </div>
            </div>
            
          </div>
          
        </Card>
          </Link>

          )):
          <p>Nothing to display</p>
         }
          

         


    
    </Container>
   </div>
  );
}

export default Play;
