"use client";

import { motion } from "framer-motion";

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
          <a
            href="https://www.instagram.com/ram_online__/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black dark:hover:text-white transition-all duration-200"
          >
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/in/sriram-pidugu-d25b02y2004/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black dark:hover:text-white transition-all duration-200"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Sriramdotcom"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black dark:hover:text-white transition-all duration-200"
          >
            GitHub
          </a>
        </div>

        <h5 className="mt-28">
          <p className="text-xl font-outfit text-gray-900 dark:text-gray-200 md:ml-5">
            or drop a mail at{" "}
            <a
              href="mailto:srirampidugu999@gmail.com"
              className="cursor-pointer underline text-blue-500"
            >
              srirampidugu999@gmail.com
            </a>
          </p>
        </h5>
      </div>

      <div className="text-sm bottom-20 md:bottom-10 absolute flex font-outfit text-gray-500">
        <p>
          website designed and developed by{" "}
          <span className="text-blue-500">
            <a target="_blank" href="#" rel="noreferrer">
              Sriram
            </a>
          </span>
        </p>
      </div>
    </motion.div>
  );
}
