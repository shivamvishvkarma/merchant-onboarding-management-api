const express = require("express");
const dotenv = require("dotenv");

dotenv.config(); // Load env first

const connectDB = require("./config/db");

connectDB(); // Only this should connect DB

const app = express();
app.use(express.json());
app.use(express.static("public")); // serve frontend

app.use("/api/partners", require("./routes/partnerRoutes"));
app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});