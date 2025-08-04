import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function ChangePassword() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.newPassword !== formData.confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/weepek/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to change password');
      }

      setSuccess('Password changed successfully');
      setFormData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#6E3AD6] to-[#5A91E2]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-xl w-[90%] max-w-md"
      >
        <h2 className="text-2xl font-bold text-white text-center mb-6">Change Password</h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-500/20 text-red-200 rounded-lg text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 p-3 bg-green-500/20 text-green-200 rounded-lg text-sm">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="currentPassword"
            type="password"
            value={formData.currentPassword}
            onChange={handleChange}
            placeholder="Current Password"
            className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            name="newPassword"
            type="password"
            value={formData.newPassword}
            onChange={handleChange}
            placeholder="New Password"
            className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm New Password"
            className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:opacity-90 transition-all"
          >
            Change Password
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default ChangePassword;