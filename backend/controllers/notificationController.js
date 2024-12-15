// controllers/notificationController.js
const Notification = require("../models/Notification");

// Create a new notification
const createNotification = async (req, res) => {
  try {
    const notification = new Notification(req.body);
    await notification.save();
    res
      .status(201)
      .json({ message: "Notification sent successfully", notification });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all notifications
const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createNotification, getNotifications };
