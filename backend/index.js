//Imports
const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config()

//Static variables
const app = express()
const PORT = process.env.PORT || 4000

//mongoose connection
mongoose.connect(process.env.MONGOURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> {
    console.log("Database connected")
}).catch(err=> {
    console.log(err)
})

//Import all models
require("./models/appointmentModel")
require("./models/doctorModel")
require("./models/patientModel")
require("./models/prescriptionModel")
require("./models/reminderModel")

//Use json as a communicating language
app.use(express.json())

//Listening on the port
app.listen(PORT, ()=> {
    console.log(`Your server is running on port ${PORT}`)
})
