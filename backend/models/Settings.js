const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema(
  {
    siteTitle: { type: String, required: true },
    siteLogo: { type: String },
    bannerText: { type: String },
    paymentMethods: [
      {
        type: String,
        enum: ["credit_card", "debit_card", "paypal", "wallet", "in_app"],
      },
    ],
    isSSL: { type: Boolean, default: false }, // To track SSL status
    siteTheme: { type: String, enum: ["light", "dark"], default: "light" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Settings", settingsSchema);
