import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Component to animate a single message with a typewriter effect
const ChatMessage = ({ text, speed = 50, onFinish, isLatest }) => {
  const [displayedText, setDisplayedText] = useState(isLatest ? "" : text);

  useEffect(() => {
    if (!isLatest) return;
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setDisplayedText(text.slice(0, index));
      if (index >= text.length) {
        clearInterval(interval);
        // Call the onFinish callback after a short pause to simulate delay between messages
        if (onFinish) {
          setTimeout(onFinish, 500);
        }
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, isLatest, speed, onFinish]);

  return <span>{displayedText}</span>;
};

const HeroPage = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  // Track which messages have been displayed (index of the last message shown)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // All chat messages (order matters)
  const messages = [
    { id: 1, text: "Hey! Ready for fun? 👋", sender: "left" },
    { id: 2, text: "Sure! What's up? 😎", sender: "right" },
    { id: 3, text: "Secret: cool features ahead! 🚀", sender: "left" },
    { id: 4, text: "Let's check 'em out! 🎉", sender: "right" },
    { id: 5, text: "Adventure awaits! 🌟", sender: "left" },
  ];
  

  // Update cursor position for subtle parallax on the text content
  const handleMouseMove = (e) => {
    setCursorPos({
      x: (e.clientX - window.innerWidth / 2) / 50,
      y: (e.clientY - window.innerHeight / 2) / 50,
    });
  };

  return (
    <div
      className="bg-gradient-to-br from-gray-800 to-black text-white min-h-screen relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Modern Background Animated Shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute w-40 h-40 bg-gradient-to-br from-blue-500 to-blue-300 rounded-full opacity-20 filter blur-xl"
          initial={{ x: -50, y: 100, scale: 0.9 }}
          animate={{ x: 50, y: 150, scale: 1.1 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-48 h-48 bg-gradient-to-br from-purple-500 to-pink-300 rounded-full opacity-15 filter blur-xl"
          initial={{ x: 100, y: -50, scale: 1.1 }}
          animate={{ x: 0, y: 50, scale: 0.9 }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen pt-24 flex flex-col md:flex-row items-center px-8 space-y-8 md:space-y-0 md:space-x-12 relative z-10"
      >
        {/* Left Side - Main Text Content */}
        <div className="w-full md:w-1/2">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)` }}
          >
            Stay Connected, Anywhere, Anytime.
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 mb-6 max-w-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ transform: `translate(${cursorPos.x * 0.5}px, ${cursorPos.y * 0.5}px)` }}
          >
            PingMe delivers a seamless, real-time messaging experience, empowering you to connect and share with the world effortlessly.
          </motion.p>
          <motion.button
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold rounded-full shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>

        {/* Right Side - Chat Conversation */}
        <div className="w-full md:w-1/2">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 shadow-xl rounded-2xl p-6 max-h-[400px] overflow-y-auto flex flex-col gap-4">
            {messages.slice(0, currentMessageIndex + 1).map((message, index) => {
              // The latest (last) message is the one currently typing out
              const isLatest = index === currentMessageIndex;
              return (
                <motion.div
                  key={message.id}
                  className={`max-w-xs p-4 rounded-2xl ${
                    message.sender === "left"
                      ? "bg-gray-700 text-white self-start rounded-bl-none"
                      : "bg-blue-500 text-white self-end rounded-br-none"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <ChatMessage
                    text={message.text}
                    speed={50}
                    isLatest={isLatest}
                    onFinish={
                      // When the latest message finishes typing, trigger the next message (if any)
                      isLatest && currentMessageIndex < messages.length - 1
                        ? () => setCurrentMessageIndex((prev) => prev + 1)
                        : undefined
                    }
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
