const express = require("express");
const Notification = require("../models/Notification");
const { body, validationResult } = require("express-validator");
const router = express.Router();

// Create a new notification
router.post(
  "/create",
  [
    body("message")
      .notEmpty()
      .withMessage("Notification message cannot be empty"),
    body("customer").isMongoId().withMessage("Invalid customer ID"),
    body("type")
      .isIn(["order", "payment", "shipment", "general"])
      .withMessage("Invalid notification type"),
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { message, customer, type } = req.body;

    try {
      const notification = new Notification({
        message,
        customer,
        type,
        status: "unread", // Default status for new notifications
      });

      await notification.save();
      res
        .status(201)
        .json({ message: "Notification created successfully", notification });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// Get all notifications
router.get("/", async (req, res) => {
  try {
    const notifications = await Notification.find()
      .populate("customer")
      .sort({ createdAt: -1 }); // Sort notifications by most recent first
    res.status(200).json({ notifications });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get notifications by customer ID
router.get("/customer/:customerId", async (req, res) => {
  try {
    const notifications = await Notification.find({
      customer: req.params.customerId,
    })
      .populate("customer")
      .sort({ createdAt: -1 }); // Sort notifications by most recent first

    if (!notifications || notifications.length === 0) {
      return res.status(404).json({ message: "No notifications found" });
    }

    res.status(200).json({ notifications });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Mark notifications as read for a customer
router.put("/customer/:customerId/markAsRead", async (req, res) => {
  try {
    const notifications = await Notification.updateMany(
      { customer: req.params.customerId, status: "unread" },
      { $set: { status: "read" } }
    );

    if (!notifications.nModified) {
      return res.status(404).json({ message: "No unread notifications found" });
    }

    res.status(200).json({ message: "Notifications marked as read" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
