import React from "react";
import { motion } from "framer-motion";


function Home({ onStart }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen w-full bg-gradient-to-br from-white via-blue-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-black text-center flex flex-col items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Nội dung trung tâm */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 drop-shadow-2xl mb-6 animate-gradient-x">
          YouTube Video Analyzer
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 font-medium leading-relaxed">
          Khám phá nội dung video một cách thông minh — tóm tắt, hỏi đáp, và phân tích trong nháy mắt!
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="px-10 py-4 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white text-xl font-semibold shadow-2xl hover:shadow-3xl transition duration-300"
        >
        Bắt đầu ngay
        </motion.button>
      </motion.div>

      {/* Hiệu ứng nền động */}
      <div className="absolute top-10 left-10 w-52 h-52 bg-gradient-to-tr from-pink-300 via-blue-300 to-purple-300 blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-green-400 via-blue-400 to-purple-400 blur-2xl opacity-40 animate-spin-slow" />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-yellow-300 via-pink-400 to-indigo-500 rounded-full blur-[200px] opacity-20 animate-pulse-slow" />
    </motion.div>
  );
}

export default Home;
