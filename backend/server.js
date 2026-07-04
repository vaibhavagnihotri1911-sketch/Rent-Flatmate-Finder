const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const listingRoutes = require("./routes/listingRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Debug logs
console.log("✅ Auth routes loaded");
console.log("✅ Listing routes loaded");

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/listings", listingRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Rent & Flatmate Finder API Working"
  });
});

// Test route
app.get("/test", (req, res) => {
  res.json({
    message: "Test route working"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});