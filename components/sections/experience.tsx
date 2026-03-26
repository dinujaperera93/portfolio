"use client";

import { type FC } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Briefcase,
  Calendar,
  GraduationCap,
  HardHat,
  LineChart,
  Settings2,
} from "lucide-react";

import HighlightedText from "@/components/shared/highlighted-text";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ExperienceProps {
  keywords?: string[];
}

const experiences = [
  {
    title: "Apziva AI Residency",
    company: "Apziva",
    period: "Feb 2026 - Present",
    location: "United Kingdom",
    achievements: [
      "Developed machine learning solutions across NLP, computer vision, and predictive modelling projects",
      "Built a candidate ranking system using NLP and similarity-based learning approaches",
      "Designed a term deposit subscription prediction model with customer segmentation using K-Means",
      "Applied feature selection and model evaluation techniques to improve model performance",
    ],
    color: "from-cyan-500 to-blue-600",
    icon: Settings2,
  },
  {
    title: "Machine Learning Engineer (Predictive Maintenance)",
    company: "Uniper UK | Loughborough University",
    period: "June 2024 - Present",
    location: "United Kingdom",
    achievements: [
      "Developed LSTM and Echo State Network models on turbine sensor data to predict system behaviour and identify early signs of faults",
      "Analysed correlations and autocorrelation patterns to detect faulty instruments and understand sensor behaviour",
      "Applied clustering techniques to group sensor patterns and improve feature engineering",
      "Processed large-scale time-series data using Azure Databricks with GPU acceleration",
      "Built visualisations and dashboards to communicate insights to engineers and managers",
      "Worked closely with engineers and stakeholders to translate model outputs into practical operational insights",
    ],
    color: "from-blue-500 to-blue-600",
    icon: LineChart,
  },
  {
    title: "Machine Learning Engineer",
    company: "CML Insight Inc., Texas, USA",
    period: "Nov 2021 – Jan 2023",
    location: "Remote",
    achievements: [
      "Built and maintained machine learning pipelines for customer behaviour analysis",
      "Developed NLP-based features including embeddings and sentiment analysis",
      "Improved model reliability through feature importance analysis and data validation",
      "Supported team members and interns in developing machine learning workflows",
    ],
    color: "from-purple-500 to-purple-600",
    icon: Briefcase,
  },
  {
    title: "Teaching Assistant",
    company:
      "Department of Information Systems Engineering, University of Colombo",
    period: "Jun 2019 - Nov 2021",
    location: "Sri Lanka",
    achievements: [
      "Conducted practical sessions and supervised projects for master's and undergraduate courses, including Machine Learning and Neural Computing, Data Analytics, and Embedded Systems",
      "Co-ordinated grading assignments, conducting code reviews, and invigilating exams for undergraduate and master's level programmes",
    ],
    color: "from-pink-500 to-pink-600",
    icon: GraduationCap,
  },
  {
    title: "Data Analyst",
    company: "Brandix Apparel Limited",
    period: "Jun 2019",
    location: "Sri Lanka",
    achievements: [
      "Analysed spare parts datasets using Microsoft Excel pivot tables to ensure data accuracy",
      "Collaborated with cross-functional teams to identify and rectify data quality issues",
      "Conducted assessments of discrepancies and inaccuracies to enhance overall data integrity",
    ],
    color: "from-indigo-500 to-indigo-600",
    icon: BarChart3,
  },
  {
    title: "Engineering Trainee",
    company: "Airport & Aviation Services Sri Lanka",
    period: "Aug 2018 - Jan 2019",
    location: "Sri Lanka",
    achievements: [
      "Familiarised with navigation security surveillance communication systems",
      "Participated in preventive maintenance activities to ensure optimal performance",
      "Assigned to the Department of Air Navigation and Engineering to enhance operational efficiency",
    ],
    color: "from-emerald-500 to-emerald-600",
    icon: HardHat,
  },
] as const;

const Experience: FC<ExperienceProps> = ({ keywords = [] }) => (
  <div className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800">
          Experience
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Professional Journey
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Building ML solutions across industries and academia
        </p>
      </motion.div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="border-none shadow-xl hover:shadow-2xl transition-all bg-white dark:bg-slate-800">
              <CardHeader>
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <exp.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 dark:text-white">
                      <HighlightedText text={exp.title} keywords={keywords} />
                    </CardTitle>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      <HighlightedText text={exp.company} keywords={keywords} />
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="border-gray-300 dark:border-gray-600 dark:text-gray-300"
                      >
                        <Calendar className="w-3 h-3 mr-1" />
                        {exp.period}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-gray-300 dark:border-gray-600 dark:text-gray-300"
                      >
                        {exp.location}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-2">
                      <span className="text-blue-500 dark:text-blue-400 mt-1.5 flex-shrink-0">
                        ●
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        <HighlightedText
                          text={achievement}
                          keywords={keywords}
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Experience;
