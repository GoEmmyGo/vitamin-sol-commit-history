const express = require('express')
const axios = require('axios')
const weatherAPI = process.env.WEATHER_KEY



const weatherConfig = {
    method: 'get',
    url: `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=3e48a16bb7b16131bd36fe56852b49a8&units=metric`
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
    }

    // addinput: (req, res) => {
    //     let {text} = req.body

    //     sequelize.query(`insert into input (text) values ('${text}');`)
    //         .then(db(dbRes => res.status(200).send(dbRes[0])))
    //         .catch(err => console.log('POSTING',err))
    // }
    
}