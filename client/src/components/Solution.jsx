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
                <p className='msg'>min</p>
                {/* <p className='digit-2'></p>  */}
                <p className='msg-2'>{sunburn} minutes until sunburn, careful</p> 
            </div>) : 
        (null)}
    </div>
  )
}

export default Solution
