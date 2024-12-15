const express = require("express");
const Settings = require("../models/Settings");
const router = express.Router();

// Get settings
router.get("/", async (req, res) => {
  try {
    const settings = await Settings.findOne();
    res.status(200).json({ settings });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update settings
router.put("/", async (req, res) => {
  try {
    const settings = await Settings.findOneAndUpdate({}, req.body, {
      new: true,
    });
    if (!settings) {
      return res.status(404).json({ message: "Settings not found" });
    }
    res
      .status(200)
      .json({ message: "Settings updated successfully", settings });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
