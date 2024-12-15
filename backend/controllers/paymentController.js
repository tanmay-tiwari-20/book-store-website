// controllers/paymentController.js
const Payment = require("../models/Payment");

// Process payment (example for Stripe)
const processPayment = async (req, res) => {
  try {
    const { amount, token } = req.body;

    // Here you would integrate Stripe or other payment gateways
    // Example with Stripe:
    const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
    const charge = await stripe.charges.create({
      amount: amount * 100, // Amount in cents
      currency: "usd",
      source: token.id,
    });

    const payment = new Payment({
      amount,
      status: charge.status,
      customerId: req.user.id, // Assuming logged-in user
    });

    await payment.save();

    res.status(200).json({ message: "Payment processed successfully", charge });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { processPayment };
