import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AuthContent = () => {
  const [isLogin, setIsLogin] = useState(false); // State to toggle between Login and Signup
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  // Get the base API URL from environment variables
  const API_BASE_URL = import.meta.env.VITE_API_URL;

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin
      ? `${API_BASE_URL}/api/auth/login`
      : `${API_BASE_URL}/api/auth/signup`;

    try {
      const response = await axios.post(url, formData);

      if (isLogin) {
        alert("Login Successful!");
        // Store JWT token or session (e.g., localStorage)
        localStorage.setItem("authToken", response.data.token);
      } else {
        alert("Signup Successful!");
      }

      // Clear form data
      setFormData({
        name: "",
        email: "",
        password: "",
      });

      // Redirect to homepage
      navigate("/");
    } catch (err) {
      setError(
        err.response ? err.response.data.message : "Something went wrong"
      );
    }
  };

  return (
    <div className="py-14 flex flex-col md:flex-row items-center justify-between">
      {/* Image Section */}
      <img
        src="/img/login.png"
        alt=""
        className="h-[95%] md:w-1/2 w-full object-cover"
      />

      {/* Form Section */}
      <div className="px-8 py-4 md:px-28 w-full md:w-1/2 mt-8 md:mt-0">
        {/* Dynamic Heading */}
        <h2 className="text-3xl font-bold mb-4 font-inter tracking-wider">
          {isLogin ? "Log in to Exclusive" : "Create an account"}
        </h2>
        <p className="text-gray-500 mb-6">
          {isLogin ? "Enter your details below" : "Enter your details below"}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Conditional Fields for Signup */}
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email or Phone Number"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {/* Error message */}
          {error && <p className="text-red-500">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
          >
            {isLogin ? "Log In" : "Create Account"}
          </button>
        </form>

        {/* Forgot Password Option for Login */}
        {isLogin && (
          <div className="flex justify-between mt-4">
            <a href="#" className="text-red-500 font-semibold">
              Forgot Password?
            </a>
          </div>
        )}

        {/* Divider and Google Button */}
        <div className="text-center my-4 text-gray-500">OR</div>
        <button className="flex items-center justify-center w-full border py-3 rounded-lg hover:bg-gray-100 transition">
          <img
            src="/img/google.png"
            alt="Google Icon"
            className="w-5 h-5 mr-3 bg-transparent"
          />
          {isLogin ? "Log in with Google" : "Sign up with Google"}
        </button>

        {/* Toggle Between Login and Signup */}
        <p className="text-center text-gray-500 mt-6">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLogin((prev) => !prev)}
            className="text-red-500 font-semibold"
          >
            {isLogin ? "Sign Up" : "Log In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthContent;
