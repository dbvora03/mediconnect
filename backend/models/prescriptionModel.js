//imports
const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema.Types

const prescriptionSchema = new mongoose.Schema({
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
    photo: {
        type: String,
        required: true
    }
})

const Prescription = mongoose.model("Prescription", prescriptionSchema)

module.exports = Prescription