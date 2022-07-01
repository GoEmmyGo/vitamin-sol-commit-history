import React, { useState } from 'react'
import {countryCodes} from '../countryCodes.js'
import axios from 'axios'


const Calculator = () => {

  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [skinTone, setSkinTone] = useState('')
  const [skinCoverage, setSkinCoverage] = useState('')

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post("/api/getStuff", {city, country, skinTone, skinCoverage}).then(
    (res) => {
      const newLineSplit =res.data.split('\n')
      // console.log(newLineSplit)
      const timeFrames = [newLineSplit[18], newLineSplit[24]].map((str) => {
          const splitter = str.split(':')

          // console.log(newLineSplit)
          // console.log(splitter)
          return {
            hours: +splitter[0].trim(),
            mins: +splitter[1].trim()
          }

        })
      console.log(timeFrames)
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
        <input type="text" placeholder='coverage' onChange={(e) => setSkinCoverage(e.target.value)}></input>
        <button type='submit'>How many minutes do I need to stand outside?</button>
      </form>
    </div>
  )
}

export default Calculator


//next steps

//event handlers to update these ---->, state values for each input (onChange -> setState, submit fires takes state values to use as body for back-end to do its thing)
//4 states, single submit
//loading screen/symbol, lightweight libraries for loading symbol (use a state value, set loading display to true, then false)