import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type ExpCardProps = {
  clogo: string;
  title: string;
  company: string;
  point1?: string;
  point2?: string;
  startDate: string;
  endDate: string;
};

export default function ExperienceCard({
  clogo,
  title,
  company,
  point1,
  point2,
  startDate,
  endDate,
}: ExpCardProps) {
  return (
    <article className="flex flex-col rounded-r-lg flex-shrink-0 snap-center backdrop-blur-sm font-outfit bg-slate-200/20 dark:bg-[#141414] transition-transform duration-200 overflow-hidden md:py-14 py-10 md:mt-10 border-l-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 md:max-w-3xl max-w-xs md:px-0 px-5 select-none">
      <div className="flex items-center md:pl-10">
        <motion.div
          initial={{ opacity: 0, x: -5 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Image
            src={clogo}
            alt={`${company} logo`}
            width={55}
            height={55}
            className="object-cover rounded-full"
            loading="lazy"
          />
        </motion.div>

        <div className="md:pl-4 pl-6 text-left">
          <h4 className="md:text-xl text-lg font-medium md:font-semibold text-black dark:text-white">
            {title}
          </h4>
          <p className="font-medium text-sm md:text-base md:pt-1 text-gray-800 dark:text-gray-300">
            {company}
          </p>
        </div>
      </div>

      <div className="px-0 md:px-10 text-left mt-6">
        <p className="lowercase py-2 text-sm text-gray-800 dark:text-gray-400">
          {startDate} - {endDate}
        </p>

        <ul className="list-disc space-y-4 ml-5 dark:font-light font-normal text-black dark:text-gray-200 text-base mt-4">
          {point1 && <li>{point1}</li>}
          {point2 && <li>{point2}</li>}
        </ul>
      </div>
    </article>
  );
}
