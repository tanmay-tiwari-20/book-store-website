const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    message: { type: String, required: true },
    type: {
      type: String,
      enum: ["order_update", "promotion", "new_product"],
      required: true,
    },
    status: {
      type: String,
      enum: ["sent", "pending", "failed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", notificationSchema);
