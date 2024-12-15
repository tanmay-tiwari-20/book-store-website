const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Import the User model
const verifyAdmin = require("../middlewares/verifyAdmin");

const router = express.Router();

// Endpoint to create an admin (one-time use for the first admin)
router.post("/create-admin", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if an admin already exists
    const existingAdmin = await User.findOne({ isAdmin: true });
    if (existingAdmin) {
      return res.status(400).json({ message: "An admin already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the admin user
    const adminUser = new User({
      name,
      email,
      password: hashedPassword,
      isAdmin: true, // Set the admin flag
    });

    await adminUser.save();
    res.status(201).json({ message: "Admin created successfully", adminUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating admin", error: error.message });
  }
});

router.get("/dashboard", verifyAdmin, (req, res) => {
  res.status(200).json({ message: "Welcome to the admin dashboard!" });
});

// Admin login endpoint
router.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the admin user
    const adminUser = await User.findOne({ email, isAdmin: true });
    if (!adminUser) {
      return res
        .status(401)
        .json({ message: "Invalid credentials or not an admin." });
    }

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, adminUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: adminUser._id, isAdmin: adminUser.isAdmin },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
