import React from "react";
import { motion } from "framer-motion";

const analyticsHighlights = [
  {
    title: "Excel Data Cleaning & Reporting",
    description:
      "Practiced transforming messy datasets, using pivot tables, and generating automated reports with charts in Excel.",
    tools: ["Excel", "Pivot Tables", "Charts"],
    level: "Hands-on Practice"
  },
  {
    title: "Power BI Dashboard Design",
    description:
      "Learned to create visual dashboards including KPIs, filters, and slicers. Built mock dashboards using open datasets.",
    tools: ["Power BI", "DAX", "Filters"],
    level: "In Progress"
  },
  {
    title: "SQL Queries for HR Data",
    description:
      "Practiced writing queries using SELECT, JOIN, GROUP BY, and subqueries using mock employee datasets.",
    tools: ["SQL", "PostgreSQL"],
    level: "Completed Exercises"
  },
  {
    title: "Exploratory Data Analysis with Python",
    description:
      "Performed data profiling, missing value handling, and visualization using Pandas, Matplotlib, and Seaborn.",
    tools: ["Python", "Pandas", "Seaborn"],
    level: "Academic Practice"
  }
];

export default function Analytics() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex flex-col relative min-h-screen text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center pt-16 lg:pt-28"
    >
      <h3 className="ml-6 absolute top-32 uppercase tracking-[20px] text-gray-400 text-2xl">
        Analytics & Insights
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-20">
        {analyticsHighlights.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-slate-100 dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          >
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
              {item.title}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {item.tools.map((tool, i) => (
                <span
                  key={i}
                  className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-white px-2 py-1 rounded"
                >
                  {tool}
                </span>
              ))}
            </div>
            <p className="text-xs text-right mt-2 text-gray-400 italic">
              {item.level}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}