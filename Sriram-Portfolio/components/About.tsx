"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import profilePic from "public/extraImages/profilePic.jpg";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-20 py-24 bg-black text-white"
    >
      {/* Image */}
      <Image
        src={profilePic}
        alt="Sriram Profile"
        width={280}
        height={350}
        className="rounded-xl shadow-lg border border-gray-700 object-cover"
      />

      {/* Content */}
      <div className="max-w-2xl space-y-5">
        <div className="space-y-2">
          <h3 className="text-sm uppercase tracking-[12px] text-gray-400">About</h3>
          <h2 className="text-3xl md:text-4xl font-bold">Who Am I?</h2>
          <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold animate-pulse inline-block">
            Open to opportunities
          </span>
        </div>

        <p className="text-gray-300 leading-relaxed">
          Hello! I&apos;m <span className="text-blue-400 font-semibold">Sriram Pidugu</span>, an aspiring
          <span className="text-blue-400 font-semibold"> Data Analyst</span> passionate about turning
          raw data into actionable insights. I specialize in tools like{" "}
          <span className="text-blue-400 font-semibold">SQL, Power BI, Excel, and Python</span>, and
          enjoy exploring machine learning, data visualization, and reporting.
        </p>

        <p className="text-gray-300 leading-relaxed">
          I recently completed my B.Tech in CSE (AIML) and have built hands-on projects like a
          resume analyzer using AI, a self-driving car steering model with self-supervised learning,
          and a personalized travel planning system.
        </p>

        <p className="text-gray-300 leading-relaxed">
          I&apos;m also comfortable working with front-end frameworks like{" "}
          <span className="text-blue-400 font-semibold">Next.js</span>, and love creating clean,
          usable dashboards.
        </p>

        <p className="text-gray-300 leading-relaxed">
          I&apos;m currently looking for opportunities where I can support data-driven decision-making
          and bring creative solutions to real-world problems.
        </p>
      </div>
    </motion.div>
  );
}
