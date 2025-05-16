import { motion } from "framer-motion";

function HowItWorks() {
  const steps = [
    {
      title: "Register",
      description: "Create your secure digital wallet by registering with trusted organizations that verify your identity and issue your digital credential."
    },
    {
      title: "Verify",
      description: "Share only the specific proofs requested—such as age or degree—without revealing your full ID or personal information."
    },
    {
      title: "Access",
      description: "Enjoy fast, private, and secure access to services as the system verifies your credentials without exposing your data."
    }
  ];

  return (
    <section className="py-20 px-6 sm:px-10 text-center max-w-6xl mx-auto">
      <h3 className="text-4xl sm:text-5xl font-extrabold mb-14 text-indigo-700 tracking-tight">
        How It Works
      </h3>
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {steps.map(({ title, description }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.3, duration: 0.6, type: "spring" }}
            animate={{
              y: [0, -10, 0],
              transition: {
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
                delay: index * 0.5,
              },
            }}
            className="bg-white/70 backdrop-blur-md p-8 rounded-3xl border border-gray-300 shadow-lg"
          >
            <h4 className="text-2xl font-semibold text-indigo-600 mb-4">{title}</h4>
            <p className="text-gray-800 text-lg leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
