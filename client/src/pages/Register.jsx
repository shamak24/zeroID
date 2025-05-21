import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => navigate("/login"), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-300 to-red-200 px-4 py-12">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white/20 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden transition-all duration-300">
        {/* Left Side - Illustration */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 md:p-10 bg-white/10"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/account.png"
            alt="Secure login illustration"
            className="w-4/5 max-w-xs md:max-w-md"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-4 text-center drop-shadow-md">
            Welcome to ZeroID
          </h2>
          <p className="text-black text-center mt-2 px-2 md:px-4 text-sm md:text-base">
            Your Identity, Zero Compromise!
          </p>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          className="w-full md:w-1/2 p-6 sm:p-10"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 text-center mb-6">
            Create Account
          </h2>

          {success ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-600 text-center text-base md:text-lg font-medium"
            >
              ✅ Registered successfully! Redirecting to login...
            </motion.p>
          ) : (
            <form onSubmit={handleRegister} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/80 border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none shadow-inner text-sm md:text-base"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-3 pr-10 rounded-xl bg-white/80 border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none shadow-inner text-sm md:text-base"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-[42px] text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition duration-200 shadow-lg text-sm md:text-base"
              >
                Register
              </motion.button>
            </form>
          )}

          {!success && (
            <p className="text-center text-sm text-gray-700 mt-6">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-indigo-600 hover:underline font-medium"
              >
                Login here
              </a>
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
