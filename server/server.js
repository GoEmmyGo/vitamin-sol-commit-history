//Bring in the express server and create app

//The object that will be saved to this APP variable represents the entire server and that's what we're going to be using in order to make this server run. So once we've done that once we've created our application variable we can then do a couple other things so first we're going to say out.us so we're going to access a use method or a use function that exists on our APP object.

//Takes care of any issue caused by running the server locally
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5432

require('dotenv').config()

const {getWeather, getMinutes, getStuff} = require('./APIcontroller.js')


// So if we want to be able to accept json in any 
//other requests that come to the server we need to put in this line, so that any json that comes in will be parsed and then translated into javascript which we can use. We have to have this line if we want to accept post request input request specifically.
app.use(express.json())
app.use(cors())

// Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, '../client/build')))
// app.use(express.urlencoded({extended:false}))

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the server!'})
})
app.post('/api/getStuff', getStuff)
// app.get('/api/getMinutes', getMinutes)

// All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
//   });


// And then, finally, the bottom, we say app.listen and we have to tell a port on our computer that we want it to run on. And then we pass in a callback function, which in this case is just an arrow function, and most of the time, all that will do here is we'll just console log that the server is running and that just gives us a visual feedback that tells us whether or not our server is actually running.
app.listen(port, () => console.log(`SERVER RUNNING ON ${port}`))