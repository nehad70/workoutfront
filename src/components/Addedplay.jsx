import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { allplan, deleteplan } from '../services/allAPI';
import { BASE_URL } from '../services/baseurl';

function Addedplay() {
 
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
    console.log(filteredPlans);

        if (result.status === 200) {
          // Filter plans based on category
          setgplan(result.data);
        }
      }
    };

    getallplan();
  },[]);

  useEffect(() => {
    
    console.log(cat);
    console.log(cat.length);

  }, [gplan, params.cat]);


  const handleDelete=async(id)=>{
    const token = sessionStorage.getItem("token")
    const reqheader = {
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
    const result = await deleteplan (id,reqheader)
    console.log(result);
   
//           if (result.status===200)   {
// getallplan ()
     
      
//     }
//     else{
//       console.log(result.response.data);
//     }
   }
  return (
    <div className='container mt-5 border'>
            <div className='bg-light mt-5  m-5' >
               {
                cat?.length>0?

                cat.map((item)=>( <div className=' border d-flex align-items-center justify-content-between p2 mb-2 rounded'>
               
               <img src={`${BASE_URL}/uploads/${item.image}`} height={'150px'} alt="" />
                <h5 className='ms-5 mt-3 mb-3'>{item.title}</h5>
                
            <div className='d-flex '>
     
                <button onClick={()=>handleDelete(item._id)} className='btn'> <i class="fa-solid fa-trash text-danger"></i></button>
            </div>
                    
                 
        </div>)):<p>nothing to display</p>

               }
            </div>
    </div>
  )
}

export default Addedplay