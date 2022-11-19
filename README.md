# Vitamin Sol


## What is Vitamin Sol?

### About

If you're finding yourself feeling down, chances are a dose of vitamin D from the sun would do you some good. Many people are defficient in Vitamin D, which can contribute greatly to mood and energy level. Vitamin Sol is website that helps you to calculate how much time outside you need in order to absorb a full daily dose of vitamin D, no matter where you are, what you're wearing or how sunny it is outside!

### How does it work?

Vitamin Sol use three API's, a JSON file and Postman requests to the website of physicist Dr. Ola Engleson to utilize look-up tables produced from advanced radiation modelling. To minimize to required user input, the API's take 4 pieces of information from the user and expands on them before making a final request to the site mentioned previously. 

`Weather API`

GET using City and Country 

`Elevation API`

GET using  Weather API GET request longitude and latitude

`UV Index API`

GET UV Index using longitude and latitude

`Calculation API`

POST using month, day, long, lat, ozone layer, sky condition from Weather API
POST using elevation from Elevation API
POST using skin tone from user input form
POST using UV Index






