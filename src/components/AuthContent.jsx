import { useState } from "react";

const AuthContent = () => {
  const [isLogin, setIsLogin] = useState(false); // State to toggle between Login and Signup

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

        <form>
          {/* Conditional Fields for Signup */}
          {!isLogin && (
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          )}
          <input
            type="email"
            placeholder="Email or Phone Number"
            className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

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
