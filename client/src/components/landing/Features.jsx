import { motion } from "framer-motion";

function Features() {
  const features = [
    ["Zero Data Leak", "End-to-end encrypted system."],
    ["Instant Verification", "ID check in seconds, not hours."],
    ["Seamless Integration", "Plug-and-play API for any app."]
  ];

  return (
    <section className="py-16 bg-gray-50 px-4 sm:px-6 text-center">
      <h3 className="text-2xl sm:text-3xl font-semibold mb-10 text-indigo-700">Key Features</h3>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
        {features.map(([title, desc], index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow"
          >
            <h4 className="text-lg font-bold text-indigo-600 mb-2">{title}</h4>
            <p className="text-gray-600">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Features;