"use client";

import { type FC } from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, TrendingUp, Users, Zap } from "lucide-react";

import HighlightedText from "@/components/shared/highlighted-text";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface AboutProps {
  keywords?: string[];
}

const About: FC<AboutProps> = ({ keywords = [] }) => {
  const capabilityHighlights = [
    "Python & ML Development",
    "Deep Learning (LSTM, ESN, RNN)",
    "Azure Databricks & Scalable Computing",
    "NLP & Transformer Models",
    "SQL & Database Management",
    "Model Evaluation & Explainability (SHAP/LIME)",
    "Accelerated Computing (GPU/TPU)",
    "Data Engineering & Pipelines",
  ];

  const highlights = [
    {
      icon: Award,
      title: "UK Global Talent",
      description: "Endorsed by UK Research and Innovation (UKRI)",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Zap,
      title: "ML Specialist",
      description: "Generative AI, LSTM, RNN, and NLP expert",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Cross-functional team experience",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: ShieldCheck,
      title: "UK Work Rights",
      description: "Full UK work rights | Sponsorship not required",
      color: "from-slate-600 to-slate-800",
    },
    {
      icon: TrendingUp,
      title: "Impact Driven",
      description: "Real-world AI solutions for industry",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <div className="py-18 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">
            About Me
          </Badge>
          <h2 className="pb-2 text-4xl md:text-5xl font-bold leading-[1.15] mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Transforming Data into Reliable Intelligence
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Machine Learning Engineer with a passion for building ML systems
            <br />
            that solve real-world problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="p-8 shadow-lg dark:bg-slate-800">
              <h3 className="text-2xl font-bold mb-4 dark:text-white">
                <HighlightedText text="Current Work" keywords={keywords} />
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                <HighlightedText
                  text="Currently developing machine learning models to predict gas turbine trips using time-series modelling and survival analysis techniques."
                  keywords={keywords}
                />
              </p>
              <div className="space-y-4">
                {highlights.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div
                      className={`mt-1 w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        <HighlightedText
                          text={item.description}
                          keywords={keywords}
                        />
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="p-8 border-none shadow-xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
              <div className="mb-6">
                <p className="text-xl font-semibold uppercase tracking-[0.3em] text-blue-100/80">
                  What I Bring
                </p>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2 text-blue-50">
                {capabilityHighlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-sm"
                  >
                    <HighlightedText text={item} keywords={keywords} />
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
