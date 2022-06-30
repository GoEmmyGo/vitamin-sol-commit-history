require('dotenv').config()
const weatherKey = process.env.WEATHER_KEY;
const UVIKey = process.env.UVI_KEY
// const {WEATHER_KEY} = process.env
// const {UVI_Key} = process.env


const express = require('express')
const axios = require('axios')


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

const weatherConfig = (city, country) => {
    return {
    method: 'get',
    // url: `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${weatherKey}&units=metric`
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=ecf351cc8cebec95596eb214539a9ab4&units=metric`
}}

const UVIConfig = (latitude, longitude) => {
    return {
    //     method: 'get',
    //     url: `https://api.openuv.io/04b11b5ac02d7453dba4e7a5e68c2b71/v1/uv`,
    //     params: {
    //         lat: 'latitude, from -90.00 to 90.00',
    //         lng: 'longitude, from -180.00 to 180.00'
    //       },
    //       headers: {
    //         'x-access-token': 'undefined',
    //         'X-RapidAPI-Key': UVIKey,
    //         'X-RapidAPI-Host': 'aershov-openuv-global-real-time-uv-index-v1.p.rapidapi.com'
    //       }
    // }
    method: 'get',
    url: `https://api.openuv.io/api/v1/uv`,
    qs: { 
        lat: `${latitude}`, 
        log: `${longitude}`, 
        headers: {
            contenttype: 'application/json',
            // 'x-access-token': `${UVIKey}`
            xaccesstoken: '04b11b5ac02d7453dba4e7a5e68c2b71'
        },
    data: '04b11b5ac02d7453dba4e7a5e68c2b71'
}}}

const elevationConfig = (latitude, longitude) => {
    return {
    method: 'get',
    url: `https://api.open-elevation.com/api/v1/lookup?locations=${latitude},${longitude}`
}}

const calculationConfig = {
    method: 'post',
    url: `https://fastrt.nilu.no/cgi-bin/olaeng/VitD_quartMEDandMED.cgi`
}

module.exports = {

    getStuff: async (req, res) => {
        let {city, country, skinTone, skinCoverage} = req.body
        let elevationData
        let weather
        let UVIndex
        let lat
        let lon
        let visibility

        console.log(req.body)
        
        await axios(weatherConfig(city, country))
            .then((response) => {
                weather = response.data
                visibility = weather.visibility
                lat = weather.coord.lat
                lon = weather.coord.lon
                console.log(weather)

            })
            .catch(err => console.log('GETTING WEATHER', err))

        await axios(elevationConfig(lat, lon))
            .then((response) => {
                elevationData = response.data.results[0]
                console.log(elevationData)
            })
            .catch(err => console.log('GETTING ELEVATION', err))

        await axios(UVIConfig(lat, lon))
            .then((response) => {
                UVIndex = response.data
                // UVIndex = response.data.result.uv
                // ozone = response.data.result.ozone
                console.log(UVIndex)
                // console.log(ozone)
            })
            .catch(err => console.log('GETTING UV INDEX', err))


        const elevationConversion = parseInt(elevationData) * 1000
        // console.log(elevationConversion)
        const dateGenerator = new Date()
        // console.log(dateGenerator)
        const startTimeGenerator = dateGenerator.getUTCHours()
        // console.log(startTimeGenerator)
        const monthGrabber = dateGenerator.getMonth()
        // console.log(monthGrabber)
        const dayGrabber = dateGenerator.getUTCDate()
        // console.log(dayGrabber)
        

        const calculationBody = {
            month:monthConversion[monthGrabber],
            mday:dayGrabber,
            latitude:lat,
            longitude:lon,
            sza_angle:60,
            skin_index:skinTone,
            exposure_timing:0,
            start_time:startTimeGenerator,
            dietary_equivalent:1000,
            sky_condition:0,
            aerosol_specification:0,
            visibility:visibility,
            angstrom_beta:.11,
            cloud_fraction:50,
            wc_column1:400,
            wc_column2:400,
            wc_column3:100,
            UVI:0,
            ozone_column:0,
            altitude:elevationConversion,
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
