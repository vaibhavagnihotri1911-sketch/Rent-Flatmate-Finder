const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema(
{
    ownerId: String,
    location: String,
    rent: Number,
    availableDate: Date,
    roomType: String,
    furnished: Boolean,
    image: String,
    filled: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Listing", listingSchema);