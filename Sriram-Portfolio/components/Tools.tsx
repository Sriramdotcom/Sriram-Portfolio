import { motion } from "framer-motion";
import Image from "next/image";

const tools = [
  {
    name: "Python",
    description: "My go-to for wrangling data & automation.",
    icon: "/tools/python.png", // Add corresponding image
  },
  {
    name: "Power BI",
    description: "For building sleek, insightful dashboards.",
    icon: "/tools/powerbi.png",
  },
  {
    name: "Excel",
    description: "Where every data analyst starts!",
    icon: "/tools/excel.png",
  },
  {
    name: "VS Code",
    description: "Code, debug, repeat.",
    icon: "/tools/vscode.png",
  },
];

export default function Tools() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="min-h-screen px-10 py-20 bg-[#111] text-white text-center font-outfit"
    >
      <h3 className="text-3xl md:text-4xl font-bold mb-14"> Tools I Love</h3>

      <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
        {tools.map((tool, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800 p-6 rounded-lg border border-slate-700"
          >
            <Image
              src={tool.icon}
              alt={tool.name}
              width={60}
              height={60}
              className="mb-4 mx-auto"
            />
            <h4 className="text-xl font-semibold mb-2">{tool.name}</h4>
            <p className="text-sm text-slate-300">{tool.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
