//imports
const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema.Types

const reminderModel = new mongoose.Schema({
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
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})

const Reminder = mongoose.model("Reminder", reminderModel)

module.exports = Reminder