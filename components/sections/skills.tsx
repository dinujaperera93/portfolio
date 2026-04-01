"use client";

import { type FC } from "react";
import { motion } from "framer-motion";
import {
  Archive,
  BarChart3,
  Binary,
  Brain,
  CircuitBoard,
  Cloud,
  Code,
  Database,
  GitBranch,
  Layers,
  PieChart,
  Network,
  Radar,
  ScanSearch,
  Sheet,
  Sparkles,
  Split,
  Waypoints,
} from "lucide-react";

import HighlightedText from "@/components/shared/highlighted-text";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    icon: Code,
    title: "Languages & Frameworks",
    color: "from-blue-500 to-blue-600",
    titleColor: "text-blue-700 dark:text-blue-300",
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
    titleColor: "text-blue-700 dark:text-blue-300",
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
    titleColor: "text-blue-700 dark:text-blue-300",
    skills: ["MySQL", "DuckDB", "MongoDB", "Cassandra", "Redis", "Neo4j"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Visualisation",
    color: "from-indigo-500 to-indigo-600",
    titleColor: "text-blue-700 dark:text-blue-300",
    skills: [
      "Power BI",
      "Tableau",
      "Matplotlib",
      "Seaborn",
      "Excel Pivot Tables",
      "R",
      "PCA",
    ],
  },
  {
    icon: Brain,
    title: "ML Models & Techniques",
    color: "from-emerald-500 to-emerald-600",
    titleColor: "text-blue-700 dark:text-blue-300",
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
      "XGBoost",
    ],
  },
  {
    icon: Layers,
    title: "Generative AI",
    color: "from-orange-500 to-orange-600",
    titleColor: "text-blue-700 dark:text-blue-300",
    skills: ["LangChain", "LLM"],
  },
  {
    icon: Layers,
    title: "Collaboration",
    color: "from-amber-500 to-amber-600",
    titleColor: "text-blue-700 dark:text-blue-300",
    skills: ["GitHub", "ClickUp", "Confluence"],
  },
] as const;

const marqueeSkills = skillCategories.flatMap((category) =>
  category.skills.map((skill) => ({
    key: `${category.title}-${skill}`,
    label: skill,
    category,
  })),
);

interface SkillsProps {
  keywords?: string[];
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const skillLogoMap: Record<string, string> = {
  Python: "https://cdn.simpleicons.org/python/3776AB",
  TensorFlow: "https://cdn.simpleicons.org/tensorflow/FF6F00",
  Keras: "https://cdn.simpleicons.org/keras/D00000",
  PyTorch: "https://cdn.simpleicons.org/pytorch/EE4C2C",
  "Scikit-learn": "https://cdn.simpleicons.org/scikitlearn/F7931E",
  PySpark: "https://cdn.simpleicons.org/apachespark/E25A1C",
  Pandas: "https://cdn.simpleicons.org/pandas/150458",
  NumPy: "https://cdn.simpleicons.org/numpy/013243",
  "Azure Databricks": "https://cdn.simpleicons.org/databricks/FF3621",
  "Google Colab": "https://cdn.simpleicons.org/googlecolab/F9AB00",
  "AWS Hadoop": "https://cdn.simpleicons.org/apachehadoop/66CCFF",
  "AWS Spark": "https://cdn.simpleicons.org/apachespark/E25A1C",
  MySQL: "https://cdn.simpleicons.org/mysql/4479A1",
  DuckDB: "https://cdn.simpleicons.org/duckdb/FFF000",
  MongoDB: "https://cdn.simpleicons.org/mongodb/47A248",
  Cassandra: "https://cdn.simpleicons.org/apachecassandra/1287B1",
  Redis: "https://cdn.simpleicons.org/redis/DC382D",
  Neo4j: "https://cdn.simpleicons.org/neo4j/4581C3",
  Matplotlib: "https://cdn.simpleicons.org/python/3776AB",
  Seaborn: "https://cdn.simpleicons.org/python/3776AB",
  R: "https://cdn.simpleicons.org/r/276DC3",
  XGBoost: "https://cdn.simpleicons.org/python/3776AB",
  LangChain: "https://cdn.simpleicons.org/langchain/1C3C3C",
  GitHub: "https://cdn.simpleicons.org/github/181717",
  ClickUp: "https://cdn.simpleicons.org/clickup/7B68EE",
  Confluence: "https://cdn.simpleicons.org/confluence/172B4D",
};

const skillIconMap: Record<string, FC<{ className?: string }>> = {
  "AWS S3": Archive,
  "Excel Pivot Tables": Sheet,
  "Power BI": BarChart3,
  Tableau: PieChart,
  LLM: Sparkles,
  LSTM: CircuitBoard,
  ESN: Waypoints,
  NLP: Sparkles,
  RNN: GitBranch,
  "Isolation Forest": ScanSearch,
  Autoencoders: Binary,
  "Random Forest": Network,
  SVM: Split,
  "K-Means": Radar,
  PCA: BarChart3,
};

const skillIconColorMap: Record<string, string> = {
  "AWS S3": "text-orange-500 dark:text-orange-400",
  "Excel Pivot Tables": "text-green-600 dark:text-green-400",
  "Power BI": "text-yellow-500 dark:text-yellow-400",
  Tableau: "text-sky-600 dark:text-sky-400",
  LLM: "text-orange-600 dark:text-orange-400",
  LSTM: "text-blue-600 dark:text-blue-400",
  ESN: "text-violet-600 dark:text-violet-400",
  NLP: "text-pink-600 dark:text-pink-400",
  RNN: "text-cyan-600 dark:text-cyan-400",
  "Isolation Forest": "text-lime-600 dark:text-lime-400",
  Autoencoders: "text-orange-600 dark:text-orange-400",
  "Random Forest": "text-emerald-600 dark:text-emerald-400",
  SVM: "text-amber-600 dark:text-amber-400",
  "K-Means": "text-rose-600 dark:text-rose-400",
  PCA: "text-indigo-600 dark:text-indigo-400",
};

function getSkillVisuals(
  skill: string,
  category: (typeof skillCategories)[number],
) {
  const SkillIcon = skillIconMap[skill] ?? category.icon;
  const usesNeutralIconTile =
    skill === "PCA" ||
    skill === "AWS S3" ||
    skill === "Excel Pivot Tables" ||
    skill === "Power BI" ||
    skill === "Tableau" ||
    skill === "LLM" ||
    category.title === "ML Models & Techniques" ||
    Boolean(skillLogoMap[skill]);
  const usesLineOnlyIconTile =
    skill === "PCA" ||
    skill === "AWS S3" ||
    skill === "Excel Pivot Tables" ||
    skill === "Power BI" ||
    skill === "Tableau" ||
    skill === "LLM" ||
    category.title === "ML Models & Techniques";

  return {
    SkillIcon,
    usesNeutralIconTile,
    usesLineOnlyIconTile,
  };
}

const Skills: FC<SkillsProps> = ({ keywords = [] }) => (
  <div className="py-8 px-6">
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

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative mb-16 overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/75 py-6 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.3)] backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/60"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white via-white/90 to-transparent dark:from-slate-950 dark:via-slate-950/90" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white via-white/90 to-transparent dark:from-slate-950 dark:via-slate-950/90" />

        <div className="flex w-max animate-skills-marquee gap-4 pr-4 md:gap-5 md:pr-5">
          {[...marqueeSkills, ...marqueeSkills].map((skill, index) => {
            const { SkillIcon, usesNeutralIconTile, usesLineOnlyIconTile } =
              getSkillVisuals(skill.label, skill.category);

            return (
              <div
                key={`${skill.key}-${index}`}
                className="flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-[2rem] px-3 text-center dark:border-slate-700/80 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800"
              >
                <div
                  className={`mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border-slate-200/70 dark:border-slate-700 ${
                    usesLineOnlyIconTile
                      ? "bg-white text-orange-500 dark:bg-slate-900"
                      : usesNeutralIconTile
                        ? "bg-white dark:bg-slate-900"
                        : `bg-gradient-to-br ${skill.category.color} text-white`
                  }`}
                >
                  {skillLogoMap[skill.label] ? (
                    <img
                      src={skillLogoMap[skill.label]}
                      alt={`${skill.label} logo`}
                      className="h-5 w-5 object-contain"
                    />
                  ) : (
                    <SkillIcon
                      className={`h-5 w-5 ${
                        usesLineOnlyIconTile
                          ? (skillIconColorMap[skill.label] ??
                            "text-orange-500 dark:text-orange-400")
                          : ""
                      }`}
                    />
                  )}
                </div>
                <p className="line-clamp-2 text-sm font-semibold leading-tight text-slate-700 dark:text-slate-200">
                  {skill.label}
                </p>
              </div>
            );
          })}
        </div>
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
              <div className="mb-4">
                <h3 className={`text-xl font-bold ${category.titleColor}`}>
                  <HighlightedText text={category.title} keywords={keywords} />
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {category.skills.map((skill) => {
                  const isMatched = keywords.some((keyword) =>
                    new RegExp(`\\b${escapeRegExp(keyword)}\\b`, "i").test(
                      skill,
                    ),
                  );
                  const {
                    SkillIcon,
                    usesNeutralIconTile,
                    usesLineOnlyIconTile,
                  } = getSkillVisuals(skill, category);
                  return (
                    <div
                      key={skill}
                      className={`rounded-3xl px-2.5 py-3 text-center transition-all ${
                        isMatched
                          ? "bg-gradient-to-br from-yellow-100 to-yellow-200 text-gray-900 shadow-lg shadow-yellow-200/60 dark:from-yellow-700 dark:to-yellow-800 dark:text-white dark:shadow-yellow-900/30"
                          : "bg-white text-gray-700 hover:shadow-md dark:bg-slate-800 dark:text-gray-300"
                      }`}
                    >
                      <div
                        className={`mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-2xl shadow-sm ${
                          usesLineOnlyIconTile
                            ? "bg-transparent shadow-none"
                            : usesNeutralIconTile
                              ? "bg-white dark:bg-slate-900"
                              : `bg-gradient-to-br ${category.color} text-white`
                        }`}
                      >
                        {skillLogoMap[skill] ? (
                          <img
                            src={skillLogoMap[skill]}
                            alt={`${skill} logo`}
                            className="h-5 w-5 object-contain"
                          />
                        ) : (
                          <SkillIcon
                            className={`h-5 w-5 ${
                              usesLineOnlyIconTile
                                ? (skillIconColorMap[skill] ??
                                  "text-emerald-600 dark:text-emerald-400")
                                : ""
                            }`}
                          />
                        )}
                      </div>
                      <p className="text-sm font-semibold leading-snug">
                        {skill}
                      </p>
                    </div>
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
