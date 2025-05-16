import { motion } from "framer-motion";

function HowItWorks() {
  return (
    <section className="py-16 px-4 sm:px-6 text-center">
      <h3 className="text-2xl sm:text-3xl font-bold mb-10 text-indigo-700">How It Works</h3>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
        {["Register", "Verify", "Access"].map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-100 p-6 rounded-xl shadow-sm"
          >
            <h4 className="text-xl font-bold text-indigo-600 mb-2">{step}</h4>
            <p className="text-gray-600">
              {step === "Register"
                ? "Sign up with minimal info."
                : step === "Verify"
                ? "Instant and secure ID check."
                : "Access services seamlessly."}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;