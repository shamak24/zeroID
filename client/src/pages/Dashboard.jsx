import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/userdashboard/Header";
import StatsCards from "../components/userdashboard/StatsCard";
import DigitalIDStatus from "../components/userdashboard/DigitalIDStatus";
import LoginHistory from "../components/userdashboard/LoginHistory";
import ActionButtons from "../components/userdashboard/ActionButtons";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 via-pink-200 to-red-150 animate-gradient">
      <div className="flex-1 p-6 space-y-6">
        <Header user={{ name: "Harsh", email: "harshb@gmail.com" }} />
        <StatsCards
          stats={[
            { title: "Login Count", value: "42" },
            { title: "Devices", value: "3" },
            { title: "ID Verified", value: "Yes" },
          ]}
        />
        <DigitalIDStatus status="Verified" issuedAt="2025-05-01" />
        <ActionButtons />
        <LoginHistory
          logs={[
            { date: "2025-05-19", location: "Hardiwar", device: "Chrome" },
            { date: "2025-05-17", location: "kolkata", device: "Firefox" },
            { date: "2025-05-15", location: "Delhi, IN", device: "Edge" },
          ]}
        />
      </div>
    </div>
  );
}
