const express = require('express')
const axios = require('axios')
const weatherAPI = process.env.WEATHER_KEY
// const longitude = response.data from weather api
// const latitude = response.data from weather api

const url = require('url')
const circularJSON = require('circular-json')

const monthConversion = {
    jan:0,
    feb:31,
    mar:59,
    apr:90,
    may:120,
    jun:151,
    jul:181,
    aug:212,
    sep:243,
    oct:273,
    nov:304,
    dec:334
}



const calculationBody = {
    month:90,
    mday:14,
    latitude:50.5,
    longitude:4.2,
    sza_angle:60,
    skin_index:0,
    exposure_timing:0,
    start_time:10.5,
    dietary_equivalent:1000,
    sky_condition:0,
    aerosol_specification:0,
    visibility:50,
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
    body_exposure:25
}

const calculationConfig = {
    method: 'post',
    url: `https://fastrt.nilu.no/cgi-bin/olaeng/VitD_quartMEDandMED.cgi`
}

const weatherConfig = {
    method: 'get',
    url: `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=${weatherAPI}&units=metric`
}

const elevationConfig = {
    method: 'get',
    url: `https://api.open-elevation.com/api/v1/lookup?locations=${longitude},${latitude}`
}
// const {CONNECTION_STRING} = process.env


module.exports = {
    getWeather: async (req, res) => {
        await axios(weatherConfig)
            .then((response) => {
                let weatherInfo = response.data
                // let weatherResults = weatherInfo
                console.log(weatherInfo)
                res.status(200).send(weatherInfo)
                }
            )
            .catch(err => console.log('GETTING',err))
    },
    getElevation: async (req, res) => {
        await axios(elevationConfig)
            .then((response) => {
                elevationInfo
                console.log(response.data)
                }
            )
    },
    getCalculationMinutes: async (req, res) => {
        //this allows me to append params to the url search query
        const params = new url.URLSearchParams(calculationBody)

        await axios(calculationConfig, params.toString(), {maxContentLength: 4000})
            .then((response) => {
                console.log(response.data)
                let json = circularJSON.stringify(response.data)
                res.status(200).send(json)
                }
            )
            .catch(err => console.log('POSTING', err))
    },


    
}


    // addinput: (req, res) => {
    //     let {text} = req.body

    //     sequelize.query(`insert into input (text) values ('${text}');`)
    //         .then(db(dbRes => res.status(200).send(dbRes[0])))
    //         .catch(err => console.log('POSTING',err))
    // }