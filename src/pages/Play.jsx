import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { allplan } from '../services/allAPI';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { BASE_URL } from '../services/baseurl';
import AddWorkout from './Addworkout';
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
    <Container>
    
          

         {
          cat?.length>0?
          cat?.map((item)=>(
          <Link to={`/details/${item._id}`}>  
          <Card style={{ width: '50rem' }} className='mt-4 rounded'>

          <div className="row">
            <div className="col-lg-4"><img src={`${BASE_URL}/uploads/${item.image}`} width={'100%'} alt="" />
</div>
            <div className="col-lg-8">
             <h1>{AddWorkout.title}</h1>
            </div>
          </div>
        </Card>
          </Link>

          )):
          <p>Nothing to display</p>
         }
          

         


    
    </Container>
  );
}

export default Play;
