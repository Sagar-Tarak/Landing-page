import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="relative overflow-hidden min-h-screen bg-black text-white">
      {/* Decorative Rotating Elements (matching Features Page) */}
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

      {/* Main Content */}
      <section className="relative z-10 py-20 px-8 max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          About PingMe
        </motion.h1>

        <motion.div
          className="space-y-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
            PingMe is a revolutionary messaging app built to bring people closer, no matter where they are.
            With speed, security, and style at its core, we’ve reimagined communication for the digital age.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
            Our platform integrates instant messaging, end-to-end encryption, voice and video calls, and smart AI replies,
            all wrapped in one sleek experience.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
            We believe communication should be intuitive, enjoyable, and accessible to everyone.
          </p>
        </motion.div>

        {/* Vision & Mission Cards */}
        <motion.div
          className="mt-12 grid gap-8 md:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        >
          <div className="p-6 rounded-xl bg-black/70 backdrop-blur-md border border-gray-700 shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
            <p className="text-gray-300">
              To transform digital communication into a vibrant, secure, and enjoyable experience that empowers every connection.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-black/70 backdrop-blur-md border border-gray-700 shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-300">
              To build an all-encompassing messaging platform that redefines how people connect, ensuring privacy and driving innovation.
            </p>
          </div>
        </motion.div>

        {/* Animated Elements to Fill Empty Space */}
        <div className="relative mt-16 h-64">
          {/* Refined Chat Bubbles */}
          <motion.div
            className="absolute left-10 bottom-0"
            animate={{ y: [0, -150, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-4xl">💬</span>
          </motion.div>
          <motion.div
            className="absolute right-10 bottom-0"
            animate={{ y: [0, -150, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <span className="text-4xl">💭</span>
          </motion.div>
          <motion.div
            className="absolute left-1/2 bottom-0 transform -translate-x-1/2"
            animate={{ y: [0, -150, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
          >
            <span className="text-4xl">🗨️</span>
          </motion.div>

          {/* Modern Typing Indicator */}
          <motion.div
            className="absolute right-1/2 bottom-10 transform translate-x-1/2 flex space-x-1"
            animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          >
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="w-2 h-2 bg-white rounded-full"></span>
          </motion.div>

          {/* Floating App Logo with Rotation */}
          <motion.div
            className="absolute left-1/4 bottom-10"
            animate={{ y: [0, -50, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          >
            <span className="text-3xl">📱</span>
          </motion.div>

          {/* Unique Animated Envelope Icon */}
          <motion.div
            className="absolute right-1/4 top-10"
            animate={{ x: [0, 50, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <span className="text-3xl">✉️</span>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
