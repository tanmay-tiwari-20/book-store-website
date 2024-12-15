const express = require("express");
const Product = require("../models/Product");
const router = express.Router();
const { body, validationResult } = require("express-validator");

// Create a new product
router.post(
  "/add",
  [
    // Input validation for product fields
    body("title").notEmpty().withMessage("Title is required"),
    body("author").notEmpty().withMessage("Author is required"),
    body("price").isNumeric().withMessage("Price must be a number"),
    body("description").notEmpty().withMessage("Description is required"),
    body("category").notEmpty().withMessage("Category is required"),
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const product = new Product(req.body);
      await product.save();
      res.status(201).json({ message: "Product added successfully", product });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// Get all products with optional filters (search, category) and pagination
router.get("/", async (req, res) => {
  try {
    const { page = 1, limit = 10, search = "", category = "" } = req.query;

    // Construct the query object based on filters
    const query = {};
    if (search) query.title = { $regex: search, $options: "i" }; // Case-insensitive search by title
    if (category) query.category = category;

    // Fetch products with pagination and filtering
    const products = await Product.find(query)
      .skip((page - 1) * limit) // Skip for pagination
      .limit(parseInt(limit)) // Limit number of products per page
      .exec();

    // Count total number of products for pagination
    const totalProducts = await Product.countDocuments(query);

    res.status(200).json({
      products,
      totalPages: Math.ceil(totalProducts / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a product
router.put(
  "/:id",
  [
    body("title").optional().notEmpty().withMessage("Title is required"),
    body("author").optional().notEmpty().withMessage("Author is required"),
    body("price").optional().isNumeric().withMessage("Price must be a number"),
    body("description")
      .optional()
      .notEmpty()
      .withMessage("Description is required"),
    body("category").optional().notEmpty().withMessage("Category is required"),
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      res
        .status(200)
        .json({ message: "Product updated successfully", product });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// Delete a product
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
