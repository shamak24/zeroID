import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Register(){
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-300 via-pink-200 to-red-150 animate-gradient p-20">
            <motion.div
                className="bg-white p-8 rounded-2xl shadow-lg w-96
                "
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                
            >
                <h2 className="text-center text-2xl font-bold mb-4">Register</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="border border-gray-300 p-2 w-full rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="border border-gray-300 p-2 w-full rounded"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white p-2 rounded w-full hover:bg-indigo-800 transition duration-200 cursor-pointer"
                    >
                        Register
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Already have an account? 
                    <Link to="/login" className="text-indigo-600 hover:underline ml-1">
                        Login here
                    </Link>
                </p>
            </motion.div>
        </div>
    );
}