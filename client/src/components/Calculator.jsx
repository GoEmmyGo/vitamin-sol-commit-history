import React from 'react'
import {countryCodes} from '../countryCodes.js'

const Calculator = () => {

  const countryNames = countryCodes.map((country) => {
    return <option key={country.code} value={country.code}>{country.name}</option>
  })

  console.log(countryCodes)
  
  return (
    <div className='app'>
      <div className='input-box'>
        <input type="text" placeholder='City'></input>
        <select type="text" placeholder='Country'>{countryNames}</select>
        <input type="text" placeholder='Skin Tone'></input>
        <input type="text" placeholder='Coverage'></input>
      </div>
      <div className='calculate-button'>
        <button>How many minutes do I need to stand outside?</button>
      </div>
    </div>
  )
}

export default Calculator


//next steps

//event handlers to update these ---->, state values for each input (onChange -> setState, submit fires takes state values to use as body for back-end to do its thing)
//4 states, single submit
//loading screen/symbol, lightweight libraries for loading symbol (use a state value, set loading display to true, then false)