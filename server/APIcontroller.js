require('dotenv').config()
const weatherKey = process.env.WEATHER_KEY;
const UVIKey = process.env.UVI_KEY
const express = require('express')
const axios = require('axios')
const url = require('url')
const circularJSON = require('circular-json')
//this converts disgusting response to json and then a string

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

const cloudConversion = {
    '1': '0',
    '2': '0',
    '3': '0',
    '4': '0',
    '5': '0',
    '6': '0',
    '7': '0',
    '8': '0',
    '9': '0',
    '10': '0',
    '11': '0',
    '12': '0',
    '13': '0',
    '14': '0',
    '15': '0',
    '16': '0',
    '17': '0',
    '18': '0',
    '19': '0',
    '20': '0',
    '21': '0',
    '22': '0',
    '23': '0',
    '24': '0',
    '25': '0',
    '26': '1',
    '27': '1',
    '28': '1',
    '29': '1',
    '30': '1',
    '31': '1',
    '32': '1',
    '33': '1',
    '34': '1',
    '35': '1',
    '36': '1',
    '37': '1',
    '38': '1',
    '39': '1',
    '40': '1',
    '41': '1',
    '42': '1',
    '43': '1',
    '44': '1',
    '45': '1',
    '46': '1',
    '47': '1',
    '48': '1',
    '49': '1',
    '50': '1',
    '51': '2',
    '52': '2',
    '53': '2',
    '54': '2',
    '55': '2',
    '56': '2',
    '57': '2',
    '58': '2',
    '59': '2',
    '60': '2',
    '61': '2',
    '62': '2',
    '63': '2',
    '64': '2',
    '65': '2',
    '66': '2',
    '67': '2',
    '68': '2',
    '69': '2',
    '70': '2',
    '71': '2',
    '72': '2',
    '73': '2',
    '74': '2',
    '75': '2',
    '76': '3',
    '77': '3',
    '78': '3',
    '79': '3',
    '80': '3',
    '81': '3',
    '82': '3',
    '83': '3',
    '84': '3',
    '85': '3',
    '86': '3',
    '87': '3',
    '88': '3',
    '89': '3',
    '90': '3',
    '91': '3',
    '92': '3',
    '93': '3',
    '94': '3',
    '95': '3',
    '96': '3',
    '97': '3',
    '98': '3',
    '99': '3',
    '100': '3'  
}

const dateGenerator = new Date()

const weatherConfig = (city, country) => {
    return {
    method: 'get',
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${weatherKey}&units=metric`

}}

const UVIConfig = (trueLat, trueLon) => {
    return {
        method: 'get',
        url: `https://api.openuv.io/api/v1/uv?lat=${trueLat}&lng=${trueLon}&dt=${dateGenerator}`,
        headers: {
            "content-type": "application/json",
            "x-access-token": UVIKey
            // "x-access-token": "04b11b5ac02d7453dba4e7a5e68c2b71"
        }
}}

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
        let {city, country, skinTone, skinExposure} = req.body
        let elevationData
        let weather
        let UVIndex
        let ozone
        let trueLat
        let trueLon
        let visibility
        let cloud

        console.log(req.body)
        
        await axios(weatherConfig(city, country))
            .then((response) => {
                weather = response.data
                visibility = weather.visibility
                trueLat = weather.coord.lat
                trueLon = weather.coord.lon
                // trueLat = (parseInt(weather.coord.lat)).slice(0, -1)
                // trueLon = (parseInt(weather.coord.lon)).slice(0, -1)
                cloud = weather.clouds.all
                console.log(weather)
                console.log(trueLat)
                console.log(trueLon)
                console.log(weatherKey)
                console.log(cloud)
            })
            .catch(err => console.log('GETTING WEATHER', err))

        await axios(elevationConfig(trueLat, trueLon))
            .then((response) => {
                elevationData = response.data.results[0].elevation
                console.log(elevationData)
            })
            .catch(err => console.log('GETTING ELEVATION', err))
          
        // console.log(cloudConversion[cloud])
        const elevationConversion = parseInt(elevationData) * 1000
        // console.log(elevationConversion)
        const startTimeGenerator = dateGenerator.getUTCHours()
        // console.log(startTimeGenerator)
        const monthGrabber = dateGenerator.getMonth()
        // console.log(monthGrabber)
        const dayGrabber = dateGenerator.getUTCDate()
        // console.log(dayGrabber)

        // await axios(UVIConfig(trueLat, trueLon))
        //     .then((response) => {
        //             UVIndex = response.data.result.uv
        //             ozone = response.data.result.ozone
        //             console.log(UVIndex)
        //             console.log(ozone)
        //     })
        //     .catch(err => console.log('GETTING UV INDEX', err))

        const calculationBody = {
            month:monthConversion[monthGrabber],
            mday:dayGrabber,
            latitude:trueLat,
            longitude:trueLon,
            sza_angle:null,
            skin_index:skinTone,
            exposure_timing:null,
            start_time:startTimeGenerator,
            dietary_equivalent:1000,
            sky_condition:cloudConversion[cloud],
            // sky_condition:5,
            aerosol_specification:null,
            visibility:visibility,
            angstrom_beta:0.11,
            cloud_fraction:50,
            wc_column1:400,
            wc_column2:400,
            wc_column3:100,
            // angstrom_beta:null,
            // cloud_fraction:null,
            // wc_column1:null,
            // wc_column2:null,
            // wc_column3:null,
            // UVI:UVIndex,
            // ozone_column:ozone,
            UVI:null,
            ozone_column:350,
            altitude:elevationConversion,
            surface:1,
            albedo:null,
            type:4,
            body_exposure:skinExposure
        }

        console.log(calculationBody)

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
        .catch(err =>{ 
            res.status(404).send("You telling me you can't spell your city? Give it another go, I believe in you")
            console.log('GETTING FINAL CALC', err)})
    
    }
}
