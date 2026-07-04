const mongoose = require("mongoose");

const tenantProfileSchema = new mongoose.Schema(
{
    userId: String,
    preferredLocation: String,
    budgetMin: Number,
    budgetMax: Number,
    moveInDate: Date
},
{
    timestamps: true
}
);

module.exports = mongoose.model(
    "TenantProfile",
    tenantProfileSchema
);