const express = require("express");
const Listing = require("../models/Listing");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const listing = await Listing.create(req.body);
    res.json(listing);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
});

module.exports = router;