import React from "react";
import { motion } from "framer-motion";
import Header from "../components/userdashboard/Header";
import StatsCards from "../components/userdashboard/StatsCard";
import DigitalIDStatus from "../components/userdashboard/DigitalIDStatus";
import LoginHistory from "../components/userdashboard/LoginHistory";
import ActionButtons from "../components/userdashboard/ActionButtons";

export default function Dashboard() {
  const userEmail = localStorage.getItem("userEmail") || "guest@example.com";

  const userMap = {
    "harshb@gmail.com": {
      name: "Harsh",
      email: "harshb@gmail.com",
      stats: [
        { title: "Login Count", value: "42" },
        { title: "Devices", value: "3" },
        { title: "ID Verified", value: "Yes" },
      ],
      status: "Verified",
      logs: [
        { date: "2025-05-19", location: "Haridwar", device: "Chrome" },
        { date: "2025-05-17", location: "Kolkata", device: "Firefox" },
        { date: "2025-05-15", location: "Delhi", device: "Edge" },
      ],
    },
    "rahuls@gmail.com": {
      name: "Rahul",
      email: "rahuls@gmail.com",
      stats: [
        { title: "Login Count", value: "18" },
        { title: "Devices", value: "2" },
        { title: "ID Verified", value: "Yes" },
      ],
      status: "Verified",
      logs: [
        { date: "2025-05-16", location: "Pune", device: "Safari" },
        { date: "2025-05-14", location: "Mumbai", device: "Chrome" },
      ],
    },
    "snikitac@gmail.com": {
      name: "Snikita",
      email: "snikitac@gmail.com",
      stats: [
        { title: "Login Count", value: "25" },
        { title: "Devices", value: "1" },
        { title: "ID Verified", value: "No" },
      ],
      status: "Not Verified",
      logs: [
        { date: "2025-05-20", location: "Bangalore", device: "Brave" },
      ],
    },
  };

  const user = userMap[userEmail] || {
    name: "Guest",
    email: userEmail,
    stats: [
      { title: "Login Count", value: "0" },
      { title: "Devices", value: "0" },
      { title: "ID Verified", value: "Unknown" },
    ],
    status: "Unknown",
    logs: [],
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-4 sm:px-6 md:px-8 bg-gradient-to-r from-purple-300 via-pink-200 to-red-150 animate-gradient">
      <motion.div
        className="w-full max-w-6xl py-6 sm:py-8 space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Header user={user} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <StatsCards stats={user.stats} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <DigitalIDStatus status={user.status} issuedAt="2025-05-01" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <ActionButtons />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <LoginHistory logs={user.logs} />
        </motion.div>
      </motion.div>
    </div>
  );
}
