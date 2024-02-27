import React, { useState } from 'react'
import { Form } from 'react-router-dom'

function Rating() {

    const[selectedstarCount,setselectedstarCount]=useState(0)
    
  return (
    <div className=''>
        <div>
        <div className='rating border container  ' style={{boxShadow:' 5px 5px 15px 5px #303024'}}>
       <h4 className='rate mt-5'> RATE YOUR EXPERIENCE</h4>

      <div className=' input  '>
    
            <input type="username" className= 'box rounded  border mt-5 ' placeholder='username' />
            <input type="username" className= 'box rounded mb-3 mt-3 border' placeholder=' email' />
            <input type="username" className= 'feedback rounded mb-3 mt-2 bg-transparent border'  placeholder='share your feedback' />
            <button className='btn btn-primary'>Submit</button>

      </div>

        <div className='stars  '>
            {[...Array(5)].map((_, index)=>{
                return<span key={index} 
                className={`${index+1<=selectedstarCount? 'selected ms-2':''}`}
               
                onClick={()=>{
                    setselectedstarCount(index+1);
                }}
                >&#9733;</span>
            }
            )}
        
        
        </div>
        <div>
            <form action=""></form>
        </div>
        <p className='mb-5'>Rating count : {selectedstarCount}</p>
        </div>
        </div>
    </div>
  )
}

export default Rating