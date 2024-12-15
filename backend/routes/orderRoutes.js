const express = require("express");
const Order = require("../models/Order");
const { body, validationResult } = require("express-validator");
const router = express.Router();

// Create a new order
router.post(
  "/create",
  [
    body("customer").notEmpty().withMessage("Customer ID is required"),
    body("products").isArray().withMessage("Products should be an array"),
    body("totalAmount")
      .isNumeric()
      .withMessage("Total amount should be a number"),
    body("status").notEmpty().withMessage("Order status is required"),
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const order = new Order(req.body);
      await order.save();
      res.status(201).json({ message: "Order placed successfully", order });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// Get all orders with optional filters (status) and pagination
router.get("/", async (req, res) => {
  try {
    const { page = 1, limit = 10, status = "" } = req.query;

    // Construct the query object based on filters
    const query = {};
    if (status) query.status = status;

    // Fetch orders with pagination and filtering
    const orders = await Order.find(query)
      .skip((page - 1) * limit) // Skip for pagination
      .limit(parseInt(limit)) // Limit number of orders per page
      .populate("customer")
      .populate("products.product")
      .exec();

    // Count total number of orders for pagination
    const totalOrders = await Order.countDocuments(query);

    res.status(200).json({
      orders,
      totalPages: Math.ceil(totalOrders / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single order by ID
router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("customer")
      .populate("products.product");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update order status
router.put(
  "/:id/status",
  [body("status").notEmpty().withMessage("Order status is required")],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { status } = req.body;
      const order = await Order.findByIdAndUpdate(
        req.params.id,
        { status },
        { new: true }
      );

      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }

      res
        .status(200)
        .json({ message: "Order status updated successfully", order });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

module.exports = router;
