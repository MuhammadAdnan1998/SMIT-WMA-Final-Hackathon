import React, { useState } from "react";
import { FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    alert(`Signed up with Email: ${email}`);
    // Add your sign-up logic here (e.g., API call)
  };

  const handleSocialSignup = (platform) => {
    alert(`Sign up with ${platform} clicked!`);
    // Add social sign-up logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Log In
          </a>
        </p>
        <div className="space-y-2">
          <button
            onClick={() => handleSocialSignup("Google")}
            className="flex items-center justify-center w-full px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <FaGoogle className="mr-2" />
            Sign up with Google
          </button>
          <button
            onClick={() => handleSocialSignup("Facebook")}
            className="flex items-center justify-center w-full px-4 py-2 text-white bg-blue-800 rounded hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <FaFacebook className="mr-2" />
            Sign up with Facebook
          </button>
          <button
            onClick={() => handleSocialSignup("Instagram")}
            className="flex items-center justify-center w-full px-4 py-2 text-white bg-pink-500 rounded hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            <FaInstagram className="mr-2" />
            Sign up with Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;