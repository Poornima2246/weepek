// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function ForgotPassword() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');

//   const handleReset = (e) => {
//     e.preventDefault();
//     const storedUser = JSON.parse(localStorage.getItem('user'));

//     if (storedUser?.email === email) {
//       alert("Password reset link sent to your email (simulated)");
//       navigate('/Login');
//     } else {
//       alert("Email not found!");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#6E3AD6] to-[#5A91E2]">
//       <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-xl w-[90%] max-w-md">
//         <h2 className="text-2xl font-bold text-white text-center mb-6">Reset Password</h2>
//         <form onSubmit={handleReset} className="space-y-4">
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             className="w-full px-4 py-2 bg-white/20 text-white border rounded-lg"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg"
//           >
//             Send Reset Link
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ForgotPassword;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser) {
      setError("No account found with that email");
      return;
    }

    if (storedUser.email !== email) {
      setError("No account found with that email");
      return;
    }

    // In a real app, you would send a reset link to the email
    setMessage("Password reset link sent to your email");
    setTimeout(() => navigate('/weepek/Login'), 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#6E3AD6] to-[#5A91E2]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-xl w-[90%] max-w-md"
      >
        <h2 className="text-2xl font-bold text-white text-center mb-6">Reset Password</h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-500/20 text-red-200 rounded-lg text-sm">
            {error}
          </div>
        )}
        
        {message && (
          <div className="mb-4 p-3 bg-green-500/20 text-green-200 rounded-lg text-sm">
            {message}
          </div>
        )}

        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-all"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={() => navigate('/weepek/Login')}
            className="text-blue-300 text-sm underline hover:text-blue-200"
          >
            Back to Login
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default ForgotPassword;

 