import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const validUsers = {
      "harshb@gmail.com": "123456",
      "rahuls@gmail.com": "24680",
      "snikitac@gmail.com": "13579",
    };

    if (validUsers[email] === password) {
      setError("");
      localStorage.setItem("userEmail", email);
      navigate("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-purple-400 via-pink-300 to-red-200">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Left: Welcome & Illustration */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex flex-col justify-center items-center bg-white/20 text-black p-10 space-y-4"
        >
          <h2 className="text-4xl font-bold">Welcome Back!</h2>
          <p className="text-lg text-center text-gray-700">
            Log in to access your digital dashboard.
          </p>
          <img src="/account.png" alt="login illustration" className="w-72" />
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center px-6 py-10 sm:px-10"
        >
          <h2 className="text-3xl font-bold text-indigo-600 text-center mb-6">Login</h2>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-white/90 text-black outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="relative">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                id="password"
                type={showPwd ? "text" : "password"}
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-lg bg-white/90 text-black outline-none focus:ring-2 focus:ring-purple-500"
              />
              <span
                className="absolute right-3 top-[42px] cursor-pointer text-gray-600"
                onClick={() => setShowPwd(!showPwd)}
              >
                {showPwd ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-700">
            Don’t have an account?{" "}
            <a href="/register" className="text-purple-700 underline font-medium">
              Register here
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
