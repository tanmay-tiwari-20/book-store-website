require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/User");

const createAdminUser = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Check if an admin already exists
    const existingAdmin = await User.findOne({ isAdmin: true });
    if (existingAdmin) {
      console.log("An admin already exists:", existingAdmin.email);
      return;
    }

    // Create a new admin user
    const adminUser = new User({
      name: "Admin User",
      email: "admin@example.com",
      password: "adminpassword", // Use a secure password
      isAdmin: true,
    });

    await adminUser.save();
    console.log("Admin user created successfully:", adminUser.email);
  } catch (error) {
    console.error("Error creating admin user:", error.message);
  } finally {
    mongoose.connection.close();
  }
};

createAdminUser();
