//imports
const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema.Types

const appointmentSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    physician: {
        type: ObjectId,
        ref: "Physician"
    },
    patient: {
        type: Object,
        ref: "Patient"
    },
    notes: {
        type: String,
        default: ""
    }
})

const Appointment = mongoose.model("Appointment", appointmentSchema)

module.exports = Appointment