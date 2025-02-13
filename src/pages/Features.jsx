import { motion } from "framer-motion";
import { FaLock, FaRocketchat, FaPhoneAlt, FaPalette, FaRobot } from "react-icons/fa";

const features = [
  {
    icon: <FaRocketchat />,
    title: "Instant Messaging",
    description: "Send messages instantly with lightning-fast delivery.",
  },
  {
    icon: <FaLock />,
    title: "End-to-End Encryption",
    description: "Secure your chats with industry-leading encryption.",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Voice & Video Calls",
    description: "Crystal-clear voice and video calls anytime.",
  },
  {
    icon: <FaPalette />,
    title: "Customizable Themes",
    description: "Personalize your chat experience with themes.",
  },
  {
    icon: <FaRobot />,
    title: "AI Smart Replies",
    description: "Save time with intelligent, auto-suggested replies.",
  },
];

const Features = () => {
  return (
    <section id="features" className="relative overflow-hidden py-20 bg-black text-white">
      {/* Infinite Marquee Animation at the Top */}
      <div className="overflow-hidden bg-black py-4">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          <div className="flex">
            <span className="mx-8 text-white text-xl">
              PingMe - Stay Connected, Anywhere, Anytime.
            </span>
            <span className="mx-8 text-white text-xl">
              Experience Seamless Messaging.
            </span>
            <span className="mx-8 text-white text-xl">
              Your Connection to the World.
            </span>
          </div>
          {/* Duplicate for a seamless loop */}
          <div className="flex">
            <span className="mx-8 text-white text-xl">
              PingMe - Stay Connected, Anywhere, Anytime.
            </span>
            <span className="mx-8 text-white text-xl">
              Experience Seamless Messaging.
            </span>
            <span className="mx-8 text-white text-xl">
              Your Connection to the World.
            </span>
          </div>
        </motion.div>
      </div>

      {/* Features Content */}
      <div className="relative z-10 text-center mt-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10">Why Choose PingMe?</h2>
        <div className="grid gap-8 md:grid-cols-3 px-4 md:px-10 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-black/70 backdrop-blur-md border border-gray-700 shadow-lg flex flex-col items-center space-y-4 transition-transform duration-300"
              style={{ perspective: 1000 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotateX: -3, rotateY: 3 }}
            >
              <div className="text-4xl text-blue-400">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-300 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Rotating Elements */}
      <motion.div
        className="absolute top-[-10%] right-[-10%] w-64 h-64 rounded-full bg-blue-700 opacity-5 blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[-10%] w-80 h-80 rounded-full bg-purple-700 opacity-5 blur-3xl"
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
};

export default Features;
