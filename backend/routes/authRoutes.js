const express = require("express");
const {
  signup,
  login,
  resetPassword,
  forgotPassword,
} = require("../controllers/authController");

const router = express.Router();

// POST: /signup
router.post("/signup", signup);

// POST: /login
router.post("/login", login);

// POST: /forgot-password
router.post("/forgot-password", forgotPassword);

// POST: /reset-password/:token
router.post("/reset-password/:token", resetPassword);

// POST: /logout
router.post("/logout", (req, res) => {
  // Clear the JWT token from cookies (if stored in cookies)
  res.clearCookie("auth_token", { httpOnly: true, secure: false }); // Set secure: true in production
  res.send({ message: "Logged out successfully" });
});

module.exports = router;
