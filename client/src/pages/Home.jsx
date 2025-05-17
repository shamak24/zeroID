// src/App.jsx
import HeroSection from "../components/landing/HeroSection";
import HowItWorks from "../components/landing/HowItWorks";
import Features from "../components/landing/Features";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";


function Home() {
  return (
    <div className="font-sans text-gray-800 bg-gradient-to-r from-purple-300 via-pink-200 to-red-150 animate-gradient min-h-screen">
      <HeroSection />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;