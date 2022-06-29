require('dotenv').config()
const weatherKey = process.env.WEATHER_KEY;

const express = require('express')
const axios = require('axios')
// const weatherAPI = process.env.WEATHER_KEY

// const longitude = response.data from weather api
// const latitude = response.data from weather api

const url = require('url')
const circularJSON = require('circular-json')
//this converts disgusting response to json and then string

const monthConversion = {
    0:0,
    1:31,
    2:59,
    3:90,
    4:120,
    5:151,
    6:181,
    7:212,
    8:243,
    9:273,
    10:304,
    11:334
}



// const calculationBody = {
//     month:90,
//     mday:14,
//     latitude:50.5,
//     longitude:4.2,
//     sza_angle:60,
//     skin_index:0,
//     exposure_timing:0,
//     start_time:10.5,
//     dietary_equivalent:1000,
//     sky_condition:0,
//     aerosol_specification:0,
//     visibility:50,
//     angstrom_beta:.11,
//     cloud_fraction:50,
//     wc_column1:400,
//     wc_column2:400,
//     wc_column3:100,
//     UVI:3.4,
//     ozone_column:350,
//     altitude:.150,
//     surface:0,
//     albedo:.03,
//     type:2,
//     body_exposure:25
// }

const calculationConfig = {
    method: 'post',
    url: `https://fastrt.nilu.no/cgi-bin/olaeng/VitD_quartMEDandMED.cgi`
}

const weatherConfig = (city, country) => {
    return{
    method: 'get',
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=3e48a16bb7b16131bd36fe56852b49a8&units=metric`
}}
// ${weatherKey}
// const elevationConfig = {
//     method: 'get',
//     url: `https://api.open-elevation.com/api/v1/lookup?locations=${longitude},${latitude}`
// }
const elevationConfig = (latitude, longitude) => {
    return {
    method: 'get',
    url: `https://api.open-elevation.com/api/v1/lookup?locations=${latitude},${longitude}`
}}

//needs to be converted from meters to kilometers before post request

// const {CONNECTION_STRING} = process.env


module.exports = {

    getStuff: async (req, res) => {
        let {city, country, skinTone, skinCoverage} = req.body
        let elevation
        let weather

        console.log(req.body)
        
        await axios(weatherConfig(city, country))
            .then((response) => {
                weather = response.data
                console.log(weather)
            })
            .catch(err => console.log('GETTING', err))

        await axios(elevationConfig(weather.coord.lat, weather.coord.lon))
            .then((response) => {
                elevation = response.data.results[0]
                console.log(elevation)
            })
            .catch(err => console.log('GETTING', err))
        
        const dateConversion = new Date(weather.dt)
        
        const utcDateConversion = dateConversion.getUTCDate()

        const utcMonthConversion = dateConversion.getUTCMonth()

        const calculationBody = {
            month:monthConversion[utcMonthConversion],
            mday:utcDateConversion,
            latitude:weather.coord.lat,
            longitude:weather.coord.lon,
            sza_angle:60,
            skin_index:skinTone,
            exposure_timing:0,
            start_time:10.5,
            dietary_equivalent:1000,
            sky_condition:0,
            aerosol_specification:0,
            visibility:weather.visibility,
            angstrom_beta:.11,
            cloud_fraction:50,
            wc_column1:400,
            wc_column2:400,
            wc_column3:100,
            UVI:3.4,
            ozone_column:350,
            altitude:.150,
            surface:0,
            albedo:.03,
            type:2,
            body_exposure:skinCoverage
        }

        const params = new url.URLSearchParams(calculationBody).toString()

        axios.post('https://fastrt.nilu.no/cgi-bin/olaeng/VitD_quartMEDandMED.cgi', params).then((response) => {

            const responseString = circularJSON.stringify(response.data)
            // console.log(responseString)
            // const newLineSplit =responseString.split('\n')
            // console.log(newLineSplit)
            // const timeFrames = [newLineSplit[18], newLineSplit[24]].map((str) => {
            //     const splitter = str.split(':')
            //     return {
            //         hours: +splitter[0].trim(),
            //         mins: +splitter[1].trim()
            //     }
            // })

            // res.send(timeFrames)
            res.send(responseString)
        })
        .catch(err => console.log('FINAL CALC', err))
    
    }
}
