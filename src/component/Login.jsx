// // src/pages/Login.jsx

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FiEye, FiEyeOff } from "react-icons/fi";
// import { Link } from "react-router-dom"; // ✅ Import Link for navigation

// export default function Login() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({ email: "", password: "" });

//   const togglePassword = () => setShowPassword(!showPassword);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log("Logging in with", formData);
//     // Add API call here
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-black px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl max-w-md w-full text-white"
//       >
//         <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back</h2>

//         <form onSubmit={handleLogin} className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium mb-1">Email</label>
//             <input
//               type="email"
//               name="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 bg-white/10 text-white rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//           </div>

//           <div className="relative">
//             <label className="block text-sm font-medium mb-1">Password</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               required
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-4 py-2 bg-white/10 text-white rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//             <div
//               className="absolute right-3 top-9 cursor-pointer text-gray-300"
//               onClick={togglePassword}
//             >
//               {showPassword ? <FiEyeOff /> : <FiEye />}
//             </div>
//           </div>

//           <div className="flex justify-between items-center text-sm">
//             <Link to="/ForgetPassword" className="text-blue-300 underline">
//               Forgot password?
//             </Link>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-purple-600 hover:bg-purple-700 transition-all py-2 rounded-xl font-semibold"
//           >
//             Login
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo3.png'

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://weepekfull.onrender.com/weepek/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Login failed');
        return;
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify({ email: formData.email }));
      
      navigate('/weepek/');
      window.location.reload();
    } catch (err) {
      setError('Server error. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 p-4">
      {/* Floating bubbles background */}
      <div className="fixed inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              opacity: Math.random() * 0.5 + 0.1
            }}
            animate={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              transition: {
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: 'reverse'
              }
            }}
          />
        ))}
      </div>

      {/* Main card */}
      <motion.div 
        className="relative w-full max-w-md"
        whileHover={{ y: -5 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Card glow effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-md opacity-20"
          animate={{ opacity: isHovered ? 0.3 : 0.1 }}
          transition={{ duration: 0.3 }}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden p-10"
        >
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-600/30 rounded-full filter blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-600/30 rounded-full filter blur-3xl" />
          
          {/* Header */}
          <div className="text-center mb-8">
           
               <h1 className="text-4xl font-bold mb-4 flex justify-center items-center">
                        
                        <img className="h-12 ml-2  " src={logo} alt="Weepek Logo" />
                        <span className="bg-gradient-to-r  from-[#a75feb] to-[#6781d6]  text-transparent bg-clip-text">
                          eepek
                        </span>
                      </h1>
           
            <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-white/70">Sign in to continue to Weepek</p>
          </div>

          {/* Error message */}
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-3 bg-red-500/20 text-red-200 rounded-lg text-sm border border-red-500/30"
            >
              {error}
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email</label>
              <div className="relative">
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                  placeholder="you@example.com"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-white/40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-1">Password</label>
              <div className="relative">
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                  placeholder="••••••••"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-white/40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 bg-white/5 border-white/10 rounded focus:ring-purple-500 text-purple-600"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-white/70">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="/weepek/ForgetPassword" className="font-medium text-purple-400 hover:text-purple-300">
                  Forgot password?
                </Link>
              </div>
            </div>

            <motion.button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Sign In</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
            </motion.button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-white/70 text-sm">
              Don't have an account?{' '}
              <Link to="/weepek/Signup" className="font-medium text-purple-400 hover:text-purple-300">
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Login;