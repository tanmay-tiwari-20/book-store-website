const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    transactionId: { type: String, required: true },
    paymentMethod: {
      type: String,
      enum: ["credit_card", "debit_card", "paypal", "wallet", "in_app"],
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["success", "failed", "pending"],
      default: "pending",
    },
    paymentDate: { type: Date, default: Date.now },
    amount: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
