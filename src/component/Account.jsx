// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// function Account() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//     city: '',
//     country: '',
//     postalCode: ''
//   });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   // Fetch user details on mount
//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       const token = localStorage.getItem('token');
//       if (!token) {
//         navigate('/weepek/Login');
//         return;
//       }

//       try {
//         const response = await fetch('http://localhost:5000/weepek/user-details', {
//           method: 'GET',
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json'
//           }
//         });

//         const data = await response.json();
//         if (!response.ok) {
//           setError(data.error || 'Failed to fetch user details');
//           return;
//         }

//         setFormData({
//           name: data.name || '',
//           email: data.email || '',
//           phone: data.phone || '',
//           address: data.address || '',
//           city: data.city || '',
//           country: data.country || '',
//           postalCode: data.postalCode || ''
//         });
//       } catch (err) {
//         setError('Server error. Please try again later.');
//       }
//     };

//     fetchUserDetails();
//   }, [navigate]);

//   // Handle form input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/weepek/Login');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:5000/weepek/user-details', {
//         method: 'PUT',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();
//       if (!response.ok) {
//         setError(data.error || 'Failed to update user details');
//         return;
//       }

//       setSuccess('User details updated successfully!');
//       // Update localStorage user data
//       const user = JSON.parse(localStorage.getItem('user')) || {};
//       user.name = formData.name;
//       localStorage.setItem('user', JSON.stringify(user));
//     } catch (err) {
//       setError('Server error. Please try again later.');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#6E3AD6] to-[#5A91E2]">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.3 }}
//         className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-xl w-[90%] max-w-md"
//       >
//         <h2 className="text-2xl font-bold text-white text-center mb-6">My Account</h2>

//         {/* Error message display */}
//         {error && (
//           <div className="mb-4 p-3 bg-red-500/20 text-red-200 rounded-lg text-sm">
//             {error}
//           </div>
//         )}

//         {/* Success message display */}
//         {success && (
//           <div className="mb-4 p-3 bg-green-500/20 text-green-200 rounded-lg text-sm">
//             {success}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             name="name"
//             type="text"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Name"
//             className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//             required
//             aria-label="Your name"
//           />
//           <input
//             name="email"
//             type="email"
//             value={formData.email}
//             disabled
//             className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg opacity-50 cursor-not-allowed"
//             aria-label="Your email"
//           />
//           <input
//             name="phone"
//             type="tel"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="Phone Number"
//             className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//             aria-label="Your phone number"
//           />
//           <input
//             name="address"
//             type="text"
//             value={formData.address}
//             onChange={handleChange}
//             placeholder="Address"
//             className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//             aria-label="Your address"
//           />
//           <input
//             name="city"
//             type="text"
//             value={formData.city}
//             onChange={handleChange}
//             placeholder="City"
//             className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//             aria-label="Your city"
//           />
//           <input
//             name="country"
//             type="text"
//             value={formData.country}
//             onChange={handleChange}
//             placeholder="Country"
//             className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//             aria-label="Your country"
//           />
//           <input
//             name="postalCode"
//             type="text"
//             value={formData.postalCode}
//             onChange={handleChange}
//             placeholder="Postal Code"
//             className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//             aria-label="Your postal code"
//           />
//           <button
//             type="submit"
//             className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:opacity-90 transition-all"
//             aria-label="Update details"
//           >
//             Update Details
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   );
// }

// export default Account;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Account() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    address: '',
    state: '',
    country: '',
    postalCode: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  useEffect(() => {
    let isMounted = true;
    
    const fetchUserDetails = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/weepek/Login');
        return;
      }

      try {
        const response = await fetch('https://weepekfull.onrender.com/api/user/details', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        const data = await response.json();
        if (!isMounted) return;

        if (!response.ok) {
          if (response.status === 401) {
            localStorage.removeItem('token');
            navigate('/weepek/Login');
            return;
          }
          setError(data.error || 'Failed to fetch user details');
          setIsLoading(false);
          return;
        }

        setFormData({
          name: data.name || '',
          email: data.email || '',
          number: data.number || '',
          address: data.address || '',
          state: data.state || '',
          country: data.country || '',
          postalCode: data.postalCode || ''
        });
        setIsLoading(false);
      } catch (err) {
        if (isMounted) {
          setError('Server error. Please try again later.');
          setIsLoading(false);
        }
      }
    };

    fetchUserDetails();

    return () => {
      isMounted = false;
    };
  }, [navigate]);

  useEffect(() => {
    let timer;
    if (success) {
      timer = setTimeout(() => {
        setSuccess('');
      }, 5000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [success]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsSubmitting(true);

    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/weepek/Login');
      return;
    }

    try {
      const response = await fetch('https://weepekfull.onrender.com/api/user/details', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem('token');
          navigate('/weepek/Login');
          return;
        }
        setError(data.error || 'Failed to update user details');
        return;
      }

      setSuccess('Your details have been updated successfully!');
      const user = JSON.parse(localStorage.getItem('user')) || {};
      user.name = formData.name;
      localStorage.setItem('user', JSON.stringify(user));
    } catch (err) {
      setError('Server error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold text-white mb-2">Loading Your Profile</h2>
          <p className="text-purple-200">Just a moment while we fetch your details</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col lg:flex-row gap-8"
        >
          {/* Profile Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-6 text-center">
                <div className="relative mx-auto w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1 mb-6">
                  <div className="w-full h-full rounded-full bg-[#1a1a2e] flex items-center justify-center overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <button className="absolute bottom-2 right-2 bg-purple-600 rounded-full p-2 hover:bg-purple-700 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                </div>

                <h2 className="text-2xl font-bold text-white mb-1">{formData.name || 'User'}</h2>
                <p className="text-purple-300 mb-6">{formData.email}</p>

                <div className="flex items-center justify-center space-x-2 mb-8">
                  <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-sm text-green-400">Active Account</span>
                </div>

                <div className="space-y-1">
                  <button 
                    onClick={() => setActiveTab('profile')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${activeTab === 'profile' ? 'bg-purple-600/30 text-white' : 'text-purple-200 hover:bg-white/5'}`}
                  >
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Profile Information
                    </div>
                  </button>
                  <button 
                    onClick={() => setActiveTab('security')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${activeTab === 'security' ? 'bg-purple-600/30 text-white' : 'text-purple-200 hover:bg-white/5'}`}
                  >
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Security Settings
                    </div>
                  </button>
                  <button 
                    onClick={() => setActiveTab('notifications')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${activeTab === 'notifications' ? 'bg-purple-600/30 text-white' : 'text-purple-200 hover:bg-white/5'}`}
                  >
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                      Notifications
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="w-full lg:w-2/3">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 sm:p-8">
                {/* Tab Headers */}
                <div className="flex border-b border-white/10 mb-6">
                  <button
                    className={`pb-4 px-4 font-medium text-sm border-b-2 transition-all ${activeTab === 'profile' ? 'border-purple-500 text-white' : 'border-transparent text-purple-300 hover:text-white'}`}
                    onClick={() => setActiveTab('profile')}
                  >
                    Profile
                  </button>
                  <button
                    className={`pb-4 px-4 font-medium text-sm border-b-2 transition-all ${activeTab === 'security' ? 'border-purple-500 text-white' : 'border-transparent text-purple-300 hover:text-white'}`}
                    onClick={() => setActiveTab('security')}
                  >
                    Security
                  </button>
                  <button
                    className={`pb-4 px-4 font-medium text-sm border-b-2 transition-all ${activeTab === 'notifications' ? 'border-purple-500 text-white' : 'border-transparent text-purple-300 hover:text-white'}`}
                    onClick={() => setActiveTab('notifications')}
                  >
                    Notifications
                  </button>
                </div>

                {/* Messages */}
                {error && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-500/20 text-red-100 rounded-lg flex items-start border border-red-500/30"
                  >
                    <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <div>{error}</div>
                  </motion.div>
                )}

                {success && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-500/20 text-green-100 rounded-lg flex items-start justify-between border border-green-500/30"
                  >
                    <div className="flex items-start">
                      <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>{success}</div>
                    </div>
                    <button 
                      onClick={() => setSuccess('')}
                      className="text-green-300 hover:text-green-100 text-lg ml-4"
                    >
                      &times;
                    </button>
                  </motion.div>
                )}

                {/* Profile Tab Content */}
                {activeTab === 'profile' && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          Full Name
                        </label>
                        <div className="relative">
                          <input
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/10 text-white placeholder-white/40 border border-white/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                            required
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <input
                            name="email"
                            type="email"
                            value={formData.email}
                            disabled
                            className="w-full px-4 py-3 bg-white/10 text-white/60 border border-white/15 rounded-xl cursor-not-allowed"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                        </div>
                        <p className="mt-2 text-xs text-white/50">Contact support to change your email</p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <input
                            name="number"
                            type="tel"
                            value={formData.number}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/10 text-white placeholder-white/40 border border-white/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          Country
                        </label>
                        <div className="relative">
                          <input
                            name="country"
                            type="text"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/10 text-white placeholder-white/40 border border-white/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          Street Address
                        </label>
                        <div className="relative">
                          <input
                            name="address"
                            type="text"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/10 text-white placeholder-white/40 border border-white/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          City
                        </label>
                        <div className="relative">
                          <input
                            name="state"
                            type="text"
                            value={formData.state}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/10 text-white placeholder-white/40 border border-white/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">
                          Postal Code
                        </label>
                        <div className="relative">
                          <input
                            name="postalCode"
                            type="text"
                            value={formData.postalCode}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/10 text-white placeholder-white/40 border border-white/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end pt-4">
                      <motion.button
                        type="submit"
                        className={`px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-xl shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
                          isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:opacity-90 hover:shadow-xl'
                        }`}
                        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Saving Changes...
                          </>
                        ) : (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Save Changes
                          </>
                        )}
                      </motion.button>
                    </div>
                  </form>
                )}

                {/* Security Tab Content */}
                {activeTab === 'security' && (
                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <h3 className="text-lg font-medium text-white mb-4">Change Password</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-white/80 mb-2">Current Password</label>
                          <div className="relative">
                            <input
                              type="password"
                              className="w-full px-4 py-3 bg-white/10 text-white placeholder-white/40 border border-white/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                              placeholder="Enter current password"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-white/80 mb-2">New Password</label>
                          <div className="relative">
                            <input
                              type="password"
                              className="w-full px-4 py-3 bg-white/10 text-white placeholder-white/40 border border-white/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                              placeholder="Enter new password"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-white/80 mb-2">Confirm New Password</label>
                          <div className="relative">
                            <input
                              type="password"
                              className="w-full px-4 py-3 bg-white/10 text-white placeholder-white/40 border border-white/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                              placeholder="Confirm new password"
                            />
                          </div>
                        </div>
                      </div>
                      <button className="mt-6 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-all">
                        Update Password
                      </button>
                    </div>

                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <h3 className="text-lg font-medium text-white mb-4">Two-Factor Authentication</h3>
                      <p className="text-white/70 mb-4 text-sm">Add an extra layer of security to your account by enabling two-factor authentication.</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white">Status: <span className="text-purple-300">Disabled</span></p>
                        </div>
                        <button className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-all">
                          Enable 2FA
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Notifications Tab Content */}
                {activeTab === 'notifications' && (
                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <h3 className="text-lg font-medium text-white mb-4">Email Notifications</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white font-medium">Product updates</p>
                            <p className="text-white/60 text-sm">News about product and feature updates</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white font-medium">Security alerts</p>
                            <p className="text-white/60 text-sm">Important security notifications</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white font-medium">Promotions</p>
                            <p className="text-white/60 text-sm">Special offers and discounts</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <h3 className="text-lg font-medium text-white mb-4">Push Notifications</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white font-medium">New messages</p>
                            <p className="text-white/60 text-sm">When someone sends you a message</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white font-medium">Reminders</p>
                            <p className="text-white/60 text-sm">Daily reminders and tasks</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Account;