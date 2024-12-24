const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// CORS configuration to allow requests from frontend (localhost:5173)
const corsOptions = {
  origin: "http://localhost:5173", // Frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  credentials: true, // Allow cookies, authorization headers, etc.
};

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html")); // Adjust the path if needed
});

// Middleware
app.use(cors(corsOptions)); // Enable CORS with the specified options
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
app.use("/api/admin", adminRoutes);

// Error Handling Middleware
app.use(notFound); // Handle 404 errors
app.use(errorHandler); // Handle other errors

// Serve the frontend if any non-API routes are hit
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
