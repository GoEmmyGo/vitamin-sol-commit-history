import React from 'react'
import './Solution.css'

const Solution = (props) => {

  const {results, sunburn} = props
  
//   console.log(results)
//   console.log(sunburn)

  return (
    <div className='solution-blob'>
        {(results && sunburn) ? 
            (<div className='solution-popup animate splat'>
                <p className='digit'>{results}</p> 
                <p className='msg'>MINUTES TO TOP<br/>OFF VITAMIN D</p>
                <p className='digit-2'>{sunburn}</p> 
                <p className='msg-2'>MINUTES<br/>UNTIL SUNBURN</p> 
            </div>) : 
        (null)}
    </div>
  )
}

export default Solution
