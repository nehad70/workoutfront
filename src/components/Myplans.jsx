import React from 'react'
import Addplans from './Addplans'

function Myplans() {
  return (
    <div className=' card shadow p-5 ms-3 me-3 mb-5' style={{background:'black'}}>
    <div className='d-flex'>

      <h3 className='text-  ms-3' style={{fontWeight:'bolder',fontSize:'75px' ,opacity:'0.4'}} >My Plans</h3>
        <div className='ms-auto'>
            <Addplans/>
        </div>
        </div>
        <div className='mt-5'>
            <div className='border d-flex align-items-center rounded p-2'>
                <h5 style={{opacity:'0.3',fontSize:"x-large"}} className='ms-5'>Program</h5>
                <div className='ms-auto'>
                    <button className='btn '><i class="fa-solid fa-pen-to-square text-info"></i></button>
                    <button className='btn'><i class="fa-brands fa-github text-success"></i></button>
                    <button className='btn'> <i class="fa-solid fa-trash text-danger"></i></button>

                </div>

            </div>
            

        </div>
    </div>
    )
}

export default Myplans