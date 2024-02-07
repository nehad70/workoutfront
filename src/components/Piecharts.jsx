import React from 'react'
import { Tooltip } from 'react-bootstrap'
import { Pie } from 'react-chartjs-2'
import { PieChart } from 'recharts'

function Piecharts() {


const app =()=>{
    const data =[
        {name:"chest",value:2222244444},
        {name:"back",value:222255555},
        {name:"cccccccc",value:22233333333},
        {name:"ffffffff",value:22222255555}
    ]
}

  return (
    <div className='app'>
        <PieChart width={400} height={400}>
            
            <Pie 
            datakey="value"
            isanimationActive={false}
            data={data01}
            cx={200}
            cy={200}
            outRadius={80}
            fill='#8884d8' 
            label/>
            <Tooltip/>
           
            
             </PieChart>



    </div>
  )
}

export default Piecharts