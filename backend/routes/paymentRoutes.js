const express = require("express");
const Payment = require("../models/Payment");
const router = express.Router();

// Create a new payment
router.post("/create", async (req, res) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.status(201).json({ message: "Payment successful", payment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all payments
router.get("/", async (req, res) => {
  try {
    const payments = await Payment.find().populate("order");
    res.status(200).json({ payments });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get payment by order ID
router.get("/order/:orderId", async (req, res) => {
  try {
    const payment = await Payment.findOne({ order: req.params.orderId });
    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }
    res.status(200).json({ payment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
