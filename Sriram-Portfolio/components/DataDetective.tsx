// components/DataDetective.tsx
import { motion } from "framer-motion";
import Image from "next/image";

const cases = [
  {
    title: "The Case of Missing Values",
    description:
      "Cleaned and imputed missing data using Pandas and Excel strategies. No null left unhandled!",
    image: "/detective/missing-values.png",
  },
  {
    title: "The Outlier Interrogation",
    description:
      "Used box plots and z-scores to catch outliers red-handed. Visualization helped crack the case.",
    image: "/detective/outliers.png",
  },
  {
    title: "Correlated but Not Causal",
    description:
      "Identified misleading correlations using heatmaps and scatter plots. Saved stakeholders from false insights.",
    image: "/detective/correlation.png",
  },
  {
    title: "SQL Crime Scene",
    description:
      "Solved complex queries with JOINs and subqueries. Found key patterns in employee and sales data.",
    image: "/detective/sql-scene.png",
  },
];

export default function DataDetective() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-20 bg-[#0f0f0f] text-white font-outfit"
    >
      <h3 className="text-3xl md:text-4xl font-bold tracking-wider mb-12">
        The Data Detective Files
      </h3>

      <div className="grid gap-10 md:grid-cols-2 w-full max-w-6xl">
        {cases.map((caseItem, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-slate-900 border border-gray-700 rounded-lg p-6 shadow-md"
          >
            <Image
              src={caseItem.image}
              alt={caseItem.title}
              width={500}
              height={300}
              className="rounded-md mb-4 object-cover"
            />
            <h4 className="text-xl font-semibold mb-2">{caseItem.title}</h4>
            <p className="text-gray-400 text-sm">{caseItem.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
