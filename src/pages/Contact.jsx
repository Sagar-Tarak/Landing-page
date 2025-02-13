import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="relative overflow-hidden bg-black text-white">
      {/* Decorative Rotating Elements */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-64 h-64 rounded-full bg-blue-700 opacity-5 blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-80 h-80 rounded-full bg-purple-700 opacity-5 blur-3xl"
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />

      <section className="relative z-10 py-12 px-8 max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300 leading-relaxed text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          We'd love to hear from you. Reach out via the details below or connect with us on social media.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Details Card */}
          <motion.div
            className="bg-black/70 backdrop-blur-md border border-gray-700 p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
            <div className="flex items-center mb-3">
              <FaEnvelope className="text-blue-400 mr-3" size={24} />
              <p className="text-gray-300">tarakshubham4@gmail.com</p>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-blue-400 mr-3" size={24} />
              <p className="text-gray-300">Raipur, Chattishgarh, India</p>
            </div>
          </motion.div>

          {/* Social Media Links Card */}
          <motion.div
            className="bg-black/70 backdrop-blur-md border border-gray-700 p-6 rounded-xl shadow-lg flex flex-col items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-6">
              <motion.a
                href="https://github.com/Sagar-Tarak"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaGithub className="text-gray-300" size={28} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sagar-tarak-2634452b1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaLinkedinIn className="text-blue-500" size={28} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
