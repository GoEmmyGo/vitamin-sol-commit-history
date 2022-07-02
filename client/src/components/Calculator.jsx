import React, { useState } from 'react'
import {countryCodes} from '../countryCodes.js'
import axios from 'axios'
// import Solution from './Solution.jsx'


const Calculator = () => {

  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [skinTone, setSkinTone] = useState('')
  const [skinExposure, setskinExposure] = useState('')

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post("/api/getStuff", {city, country, skinTone, skinExposure}).then(
    (res) => {
      const newLineSplit =res.data.split('\n')

      const timeFrames = [newLineSplit[18], newLineSplit[24]].map((str) => {
          const splitter = str.split(':')

          const timeObject = {
            hours: +splitter[0].trim(),
            mins: +splitter[1].trim()
          }

          return (
            // hours: +splitter[0].trim(),
            // mins: +splitter[1].trim()
            timeObject
          )
        })
      
      const results = timeFrames[0].mins
      const sunburn = timeFrames[1].mins
      // console.log(timeFrames)
      // console.log(newLineSplit)
      console.log(results)
      console.log(sunburn)
      })
      .catch(err => console.log('POSTING CALC RESULT', err))
  }


  const countryNames = countryCodes.map((country) => {
    return <option key={country.code} value={country.code}>{country.name}</option>
  })

  console.log(countryCodes)


  return (
    <div className='app'>
      <form className='input-form' onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder='city' onChange={(e) => handleChange(e)}></input>
        <select type="text" placeholder='country' onChange={(e) => setCountry(e.target.value)}>
          <option defaultValue disabled selected>country</option>{countryNames}
        </select>
        <input type="text" placeholder='skin tone' onChange={(e) => setSkinTone(e.target.value)}></input>
        <input type="text" placeholder='skin exposure' onChange={(e) => setskinExposure(e.target.value)}></input>
        <button type='submit'>How many minutes do I need to stand outside?</button>
      </form>
      {/* <div className='solution-box' ><Solution /></div> */}
    </div>
  )
}

export default Calculator


//next steps

//event handlers to update these ---->, state values for each input (onChange -> setState, submit fires takes state values to use as body for back-end to do its thing)
//4 states, single submit
//loading screen/symbol, lightweight libraries for loading symbol (use a state value, set loading display to true, then false)