import React from 'react'
import './Solution.css'

const Solution = (props) => {

  const {results, sunburn} = props
  
//   console.log(results)
//   console.log(sunburn)

  return (
    <>
        {(results && sunburn) ? 
            (<div className='solution'>
                <div className='result-digit'>{results}</div> 
                <div className='result-message'>MINUTES TO TOP OFF VITAMIN D</div>
                <div className='result-digit'>{sunburn}</div> 
                <div className='result-message'> MINUTES UNTIL SUNBURN</div>
            </div>) : 
        (null)}
    </>
  )
}

export default Solution
