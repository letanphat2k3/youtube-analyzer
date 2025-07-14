import React from "react";
import { motion } from "framer-motion";
import Castle from "../Castle/Castle"; // đảm bảo đường dẫn đúng với file Castle.jsx

function Home({ onStart }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen w-full flex flex-col items-center justify-center text-center px-6 relative
            bg-gradient-to-br from-white via-blue-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-black"
    >
      {/* Castle Animation Layer */}
      <div className="absolute inset-0 z-0 overflow-visible pointer-events-none h-full w-full">
        <Castle />
      </div>
      

      {/* Nội dung chính */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="z-10 max-w-3xl"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text 
                       bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 mb-6 drop-shadow-lg">
          YouTube Video Analyzer
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 font-medium leading-relaxed">
          Khám phá nội dung video một cách thông minh — tóm tắt, hỏi đáp, và phân tích trong nháy mắt!
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="px-10 py-4 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600
                     text-white text-xl font-semibold shadow-2xl hover:shadow-3xl transition duration-300"
        >
          Bắt đầu ngay
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default Home;
