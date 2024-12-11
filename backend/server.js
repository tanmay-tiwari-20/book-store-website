const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require('./routes/authRoutes');
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => {
    console.error(`MongoDB connection error: ${err.message}`);
    process.exit(1);
  });

// Basic Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// API Routes
app.use("/api/users", userRoutes); // User-related routes
app.use("/api/products", productRoutes); // Product-related routes
app.use("/api/auth", authRoutes);

// Error Handling Middleware
app.use(notFound); // Handle 404 errors
app.use(errorHandler); // Handle other errors

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
