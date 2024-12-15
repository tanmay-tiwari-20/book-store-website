const express = require("express");
const Customer = require("../models/Customer");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const router = express.Router();

// Create a new customer (sign-up)
router.post(
  "/signup",
  [
    body("email").isEmail().withMessage("Invalid email format"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email, password, name } = req.body;
      const existingCustomer = await Customer.findOne({ email });
      if (existingCustomer) {
        return res.status(400).json({ message: "Email already in use" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new customer
      const customer = new Customer({
        email,
        password: hashedPassword,
        name,
      });

      await customer.save();
      res
        .status(201)
        .json({ message: "Customer created successfully", customer });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// Login (basic)
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const customer = await Customer.findOne({ email });

    if (!customer) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare the password with the hashed password stored in the database
    const isMatch = await bcrypt.compare(password, customer.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful", customer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Social media login (placeholder for actual OAuth implementation)
router.post("/social-login", async (req, res) => {
  try {
    const { socialId, name, email } = req.body;
    let customer = await Customer.findOne({ email });

    if (!customer) {
      customer = new Customer({ email, name, socialId });
      await customer.save();
    }

    res.status(200).json({ message: "Login successful", customer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all customers
router.get("/", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json({ customers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single customer by ID
router.get("/:id", async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json({ customer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
