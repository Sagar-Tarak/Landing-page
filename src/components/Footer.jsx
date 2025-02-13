// Footer.jsx
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-300 py-8 m-0">
      {/* Decorative Background Element */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute bottom-0 left-0 w-32 h-32 bg-blue-700 opacity-10 blur-2xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
      <div className="relative z-10 container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} PingMe. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <motion.a
              href="https://github.com/Sagar-Tarak"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaGithub size={24} className="hover:text-white" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sagar-tarak-2634452b1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaLinkedinIn size={24} className="hover:text-white" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
