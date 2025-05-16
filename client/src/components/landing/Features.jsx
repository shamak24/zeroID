import { motion } from "framer-motion";

function Features() {
  const features = [
    ["Private by Design", "Only the required proof is shared—never your full ID or personal documents."],
    ["Verified Credentials", "Credentials are issued by trusted authorities like schools or governments."],
    ["User Controlled", "You decide what information to share, when, and with whom."],
    ["Fast & Frictionless", "Prove eligibility (like age or qualifications) instantly—no paperwork needed."],
    ["Secure Digital Wallet", "Credentials are stored safely in a wallet on your device, not on any server."],
    ["Tamper-Proof Verification", "Sites and apps can verify the authenticity of your proof without seeing your data."]
  ];

  return (
    <section className="py-20 px-6 sm:px-10 text-center bg-white/10 backdrop-blur-sm rounded-3xl max-w-7xl mx-auto">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-14 text-indigo-700 tracking-tight">
        Key Features
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map(([title, desc], index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5, type: "spring" }}
            className="bg-white/70 backdrop-blur-md p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 hover:scale-105"
          >
            <h4 className="text-2xl font-semibold text-indigo-600 mb-4">{title}</h4>
            <p className="text-gray-800 text-lg leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Features;
