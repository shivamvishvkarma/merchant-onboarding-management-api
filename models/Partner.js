const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema({
    partnerName: {
        type: String,
        required: true
    },
    bankPG: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Live", "Hold", "Not Started", "In Progress", "Suspended", "Rejected"],
        default: "Not Started"
    },
    arrivalDate: Date,
    liveDate: Date
}, {timestamps: true});

module.exports = mongoose.model("Partner", partnerSchema);