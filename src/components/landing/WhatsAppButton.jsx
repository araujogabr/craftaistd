"use client"
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappLink = "https://wa.me/5592996074212?text=Olá! Vim pelo site e quero saber mais sobre as landing pages.";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 50 }}
          transition={{ type: "spring", damping: 15 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-xl p-4 pr-10 w-64"
              >
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
                <p className="text-gray-900 font-medium text-sm">
                  👋 Precisa de ajuda? <br/>
                  <span className="text-gray-600 font-normal">
                    Fale com a gente no WhatsApp!
                  </span>
                </p>
                {/* Arrow */}
                <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45 shadow-xl" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 group"
          >
            {/* Pulse Animation */}
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
            
            <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}