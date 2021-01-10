//imports
const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema.Types

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    healthcareid: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    profilepic: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    physicians: [{type: ObjectId, ref: "Physician"}],
    appointments: [{type: ObjectId, ref: "Appointment"}],
    reminders: [{type: ObjectId, ref: "Reminder"}]
})

const Patient = mongoose.model("Patient", patientSchema)

module.exports = Patient