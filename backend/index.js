//Imports
const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config()

//Static variables
const app = express()
const PORT = 4000

//Use json as a communicating language
app.use(express.json())

//mongoose connection
mongoose.connect(process.env.MONGOURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> {
    console.log("Database connected")
}).catch(err=> {
    console.log(err)
})

//Listening on the port
app.listen(PORT, ()=> {
    console.log(`Your server is running on port ${PORT}`)
})
