"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "Hello",
  "హలో",
  "नमस्ते",
  "வணக்கம்",
  "ನಮಸ್ಕಾರ",
  "خوش آمدید",
  " Welcome To My Portfolio "
];

const typingSpeed = 60;
const pauseAfterTyping = 1000;

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [startExit, setStartExit] = useState(false);

  useEffect(() => {
    if (!showLoader) return;

    const currentText = greetings[index];

    if (charIndex < currentText.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(typingTimeout);
    }

    if (charIndex === currentText.length) {
      setShowCursor(false);
      const pauseTimeout = setTimeout(() => {
        if (index < greetings.length - 1) {
          setIndex(index + 1);
          setCharIndex(0);
          setDisplayText("");
          setShowCursor(true);
        } else {
          // Trigger exit animation
          setStartExit(true);
        }
      }, pauseAfterTyping);
      return () => clearTimeout(pauseTimeout);
    }
  }, [charIndex, index, showLoader]);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          initial={{ opacity: 1, y: 0 }}
          animate={startExit ? { opacity: 0, y: "-100%" } : { opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          onAnimationComplete={() => {
            if (startExit) {
              setShowLoader(false);
              onFinish(); // notify parent AFTER animation completes
            }
          }}
        >
          {/* Background */}
          <div className="absolute inset-0 animate-gradient bg-[length:400%_400%] bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] blur-sm" />

          {/* Top-left copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.5 }}
            className="absolute top-4 left-4 text-sm text-white/60 font-mono"
          >
            © Sriram
          </motion.p>

          {/* Typing message */}
          <h1 className="text-4xl md:text-6xl font-outfit font-semibold text-white z-10 text-center">
            {displayText}
            {showCursor && <span className="animate-pulse">|</span>}
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
