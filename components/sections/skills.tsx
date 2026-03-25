"use client";

import { type FC } from "react";
import { motion } from "framer-motion";
import { BarChart3, Brain, Cloud, Code, Database, Layers } from "lucide-react";

import HighlightedText from "@/components/shared/highlighted-text";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    icon: Code,
    title: "Languages & Frameworks",
    color: "from-blue-500 to-blue-600",
    skills: [
      "Python",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Scikit-learn",
      "PySpark",
      "Pandas",
      "NumPy",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    color: "from-purple-500 to-purple-600",
    skills: [
      "Azure Databricks",
      "Google Colab",
      "AWS S3",
      "AWS Hadoop",
      "AWS Spark",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    color: "from-pink-500 to-pink-600",
    skills: ["MySQL", "DuckDB", "MongoDB", "Cassandra", "Redis", "Neo4j"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Visualisation",
    color: "from-indigo-500 to-indigo-600",
    skills: [
      "Power BI",
      "Tableau",
      "Matplotlib",
      "Seaborn",
      "Excel Pivot Tables, R",
    ],
  },
  {
    icon: Brain,
    title: "ML Models & Techniques",
    color: "from-emerald-500 to-emerald-600",
    skills: [
      "LSTM",
      "ESN",
      "NLP",
      "RNN",
      "Isolation Forest",
      "Autoencoders",
      "Random Forest",
      "SVM",
      "K-Means",
      "PCA",
      "XGBoost",
    ],
  },
  {
    icon: Layers,
    title: "Generative AI",
    color: "from-orange-500 to-orange-600",
    skills: ["LangChain", "LLM"],
  },
  {
    icon: Layers,
    title: "Collaboration",
    color: "from-amber-500 to-amber-600",
    skills: ["GitHub", "ClickUp", "Confluence", "Azure Project Management"],
  },
] as const;

interface SkillsProps {
  keywords?: string[];
}

const Skills: FC<SkillsProps> = ({ keywords = [] }) => (
  <div className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <Badge className="mb-4 bg-green-100 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800">
          Technical Skills
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Tech Stack & Expertise
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          A comprehensive toolkit for building intelligent systems
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="p-6 h-full hover:shadow-2xl transition-all border-none bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 group">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  <HighlightedText text={category.title} keywords={keywords} />
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const isMatched = keywords.some((keyword) =>
                    skill.toLowerCase().includes(keyword.toLowerCase()),
                  );
                  return (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`${isMatched ? "bg-gradient-to-r from-yellow-200 to-yellow-300 dark:from-yellow-600 dark:to-yellow-700 text-gray-900 dark:text-white font-bold border-2 border-yellow-400 dark:border-yellow-500 animate-pulse" : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"} transition-colors`}
                    >
                      {skill}
                    </Badge>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
