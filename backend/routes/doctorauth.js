//imports
const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema.Types

const physicianSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    profilepic: {
        type: String,
        required: true
    },
    patients: [{type: ObjectId, ref: "Patient"}],
    appointments: [{type: ObjectId, ref: "Appointment"}]
})

const Physician = mongoose.model("Physician", physicianSchema)

module.exports = Physician