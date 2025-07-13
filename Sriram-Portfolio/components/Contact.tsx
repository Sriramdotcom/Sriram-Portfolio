"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

type Props = {};

export default function Contact({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col mt-14">
        <h4 className="text-4xl font-semibold text-black dark:text-white text-center font-outfit">
          connect with me on{" "}
          <span className="underline decoration-blue-600">socials.</span>
        </h4>

        <div className="flex flex-wrap gap-6 justify-center font-outfit text-xl font-extralight text-gray-500 mt-14">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/ram_online__/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-all duration-200"
          >
            <FaInstagram size={18} /> Instagram <FiExternalLink size={14} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sriram-pidugu-d25b02y2004/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-all duration-200"
          >
            <FaLinkedinIn size={18} /> LinkedIn <FiExternalLink size={14} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Sriramdotcom"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-all duration-200"
          >
            <FaGithub size={18} /> GitHub <FiExternalLink size={14} />
          </a>
        </div>

        {/* Email */}
        <h5 className="mt-28">
          <p className="text-xl font-outfit text-gray-900 dark:text-gray-200 md:ml-5">
            or drop a mail at{" "}
            <a
              href="mailto:srirampidugu999@gmail.com"
              className="cursor-pointer underline text-blue-500"
            >
              srirampidugu999@gmail.com
            </a>
            <span className="inline-flex ml-1 text-blue-500">
              <FiExternalLink size={14} />
            </span>
          </p>
        </h5>
      </div>

      {/* Footer */}
      <div className="text-sm bottom-20 md:bottom-10 absolute flex font-outfit text-gray-500">
        <p>
          website designed and developed by{" "}
          <span className="text-blue-500">
            <a target="_blank" href="#" rel="noreferrer">
              Sriram
            </a>
          </span>
        </p>
        <span className="inline-flex text-blue-500 ml-1">
          <FiExternalLink size={14} />
        </span>
      </div>
    </motion.div>
  );
}
