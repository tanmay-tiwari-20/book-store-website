import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      // Log the formData to ensure correct values
      console.log("Form Data:", formData);

      // Send login request to the backend
      const response = await axios.post(
        "http://localhost:5000/api/admin/auth/login", // Full URL to the backend
        formData,
        {
          headers: {
            "Content-Type": "application/json", // Ensure correct content type
          },
        }
      );

      // Log the response to check if it is returning the token
      console.log("Response:", response);

      // Get token from the response
      const { token } = response.data;

      // Store the token in localStorage
      localStorage.setItem("adminToken", token);

      // Redirect to admin dashboard
      navigate("/admin/dashboard");
    } catch (err) {
      // Log the error response for better debugging
      console.error("Login Error:", err);

      // Handle errors
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="px-8 py-4 md:px-28 w-full md:w-1/2 mt-8 md:mt-0">
        <h2 className="text-3xl font-bold mb-4 font-inter tracking-wider">
          Admin Login
        </h2>
        <p className="text-gray-500 mb-6">
          Enter your email and password below.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />

          {/* Error message */}
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
