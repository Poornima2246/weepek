// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// function Signup() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const handleChange = (e) => {
//     setFormData({...formData, [e.target.name]: e.target.value});
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     // Save user data to localStorage (for demo purpose)
//     localStorage.setItem('user', JSON.stringify({
//       name: formData.name,
//       email: formData.email,
//       password: formData.password
//     }));

//     alert("Signup successful!");
//     navigate('/Login');
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#6E3AD6] to-[#5A91E2]">
//       <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-xl w-[90%] max-w-md">
//         <h2 className="text-2xl font-bold text-white text-center mb-6">Create Account</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Name"
//             className="w-full px-4 py-2 bg-white/20 text-white border rounded-lg"
//             required
//           />
//           <input
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email"
//             className="w-full px-4 py-2 bg-white/20 text-white border rounded-lg"
//             required
//           />
//           <input
//             name="password"
//             type="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Password"
//             className="w-full px-4 py-2 bg-white/20 text-white border rounded-lg"
//             required
//           />
//           <input
//             name="confirmPassword"
//             type="password"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             placeholder="Confirm Password"
//             className="w-full px-4 py-2 bg-white/20 text-white border rounded-lg"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg"
//           >
//             Sign Up
//           </button>
//         </form>
//         <p className="text-white text-sm text-center mt-4">
//           Already have an account? <Link to="/Login" className="text-blue-300 underline">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo3.png";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Client-side validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("https://weepekfull.onrender.com/weepek/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to sign up");
      }

      // Save token to localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("isLoggedIn", "true");

      navigate("/weepek/login");
    } catch (err) {
      setError(err.message || "Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Side - Welcome Section */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#3b1e75] to-[#000000] items-center justify-center p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-white"
        >
          {/* <div className="flex justify-center mb-8">
            <img src={logo} alt="Company Logo" className="h-24" />
          </div> */}
          <h1 className="text-4xl font-bold mb-4 flex items-center">
            Welcome to {" "}
            <img className="h-12 ml-2  " src={logo} alt="Weepek Logo" />
            <span className="bg-gradient-to-r  from-[#a75feb] to-[#6781d6]  text-transparent bg-clip-text">
              eepek
            </span>
          </h1>
          <p className="text-xl mb-8 ">
            Join our community and start your journey with us
          </p>
          <div className="space-y-4 text-left max-w-md mx-auto">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg
                  className="h-5 w-5 text-green-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="ml-3 text-gray-100">
                Manage your projects efficiently
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg
                  className="h-5 w-5 text-green-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="ml-3 text-gray-100">
                Collaborate with your team seamlessly
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <svg
                  className="h-5 w-5 text-green-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="ml-3 text-gray-100">
                Get real-time updates and notifications
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-md"
        >
          <div className="lg:hidden mb-8  flex justify-center text-center">
            <h1 className="text-4xl font-bold mb-4 flex items-center">
            
            <img className="h-12 ml-2  " src={logo} alt="Weepek Logo" />
            <span className="bg-gradient-to-r  from-[#a75feb] to-[#6781d6]  text-transparent bg-clip-text">
              eepek
            </span>
          </h1>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Create your account
          </h2>
          <p className="text-gray-600 mb-8">
            Join us today! It takes only a few steps
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
                minLength="6"
              />
              <p className="mt-1 text-xs text-gray-500">
                Must be at least 6 characters
              </p>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-[#3b1e75] to-[#222222] hover:from-[#311666] hover:to-[#050505] text-white font-medium rounded-lg transition-all flex justify-center items-center shadow-md hover:shadow-lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Creating Account...
                </>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          <p className="text-gray-600 text-sm text-center mt-6">
            Already have an account?{" "}
            <Link
              to="/weepek/login"
              className="text-purple-600 font-medium hover:text-purple-800 hover:underline"
            >
              Log in
            </Link>
          </p>

          <div className="mt-8 border-t border-gray-200 pt-6">
            <p className="text-xs text-gray-500 text-center">
              By creating an account, you agree to our Terms of Service and
              Privacy Policy.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Signup;
