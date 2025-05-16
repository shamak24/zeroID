// src/App.jsx
import Navbar from "./components/landing/Navbar";
import HeroSection from "./components/landing/HeroSection";
import HowItWorks from "./components/landing/HowItWorks";
import Features from "./components/landing/Features";
import CTA from "./components/landing/CTA";
import Footer from "./components/landing/Footer";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;