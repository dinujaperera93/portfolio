"use client";

import { type FC, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Award,
  Briefcase,
  BookOpen,
  ChevronDown,
  Cpu,
  ExternalLink,
  Star,
  Trophy,
  Users,
} from "lucide-react";

import HighlightedText from "@/components/shared/highlighted-text";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface EducationProps {
  keywords?: string[];
}

interface CertificationPreviewAsset {
  src: string;
  alt: string;
}

interface Certification {
  title: string;
  issuer: string;
  category: "Leadership" | "Industry" | "Technical";
  credentialUrl?: string;
  previewAsset?: CertificationPreviewAsset;
  skills?: readonly string[];
}

const MAX_SKILL_ROWS = 3;

const SkillsOverflowChips: FC<{ skills: readonly string[] }> = ({ skills }) => {
  const measureRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [visibleCount, setVisibleCount] = useState(skills.length);

  useEffect(() => {
    const measure = () => {
      const items = itemRefs.current.filter(
        (item): item is HTMLSpanElement => item !== null,
      );

      if (!items.length) {
        setVisibleCount(skills.length);
        return;
      }

      const rowTops: number[] = [];
      let nextVisibleCount = items.length;

      items.forEach((item, index) => {
        const top = item.offsetTop;

        if (!rowTops.some((rowTop) => Math.abs(rowTop - top) <= 2)) {
          rowTops.push(top);
        }

        if (
          rowTops.length > MAX_SKILL_ROWS &&
          nextVisibleCount === items.length
        ) {
          nextVisibleCount = index;
        }
      });

      setVisibleCount(nextVisibleCount);
    };

    measure();

    const observer = new ResizeObserver(measure);

    if (measureRef.current) {
      observer.observe(measureRef.current);
    }

    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [skills]);

  const visibleSkills = skills.slice(0, visibleCount);
  const hiddenSkills = skills.slice(visibleCount);

  return (
    <div className="mb-3">
      <p className="mb-2 text-[11px] font-medium text-slate-500 dark:text-slate-400">
        Skills you will gain
      </p>

      <div
        ref={measureRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 -z-10 flex flex-wrap gap-1.5 opacity-0"
      >
        {skills.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            ref={(element) => {
              itemRefs.current[index] = element;
            }}
            className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="relative flex flex-wrap items-start gap-1.5 overflow-visible">
        {visibleSkills.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            {skill}
          </span>
        ))}

        {hiddenSkills.length > 0 && (
          <span className="inline-flex items-center rounded-full bg-slate-200 px-2.5 py-1 text-[11px] font-semibold text-slate-600 dark:bg-slate-700 dark:text-slate-200">
            +{hiddenSkills.length} more
          </span>
        )}
      </div>
    </div>
  );
};

const FilledGraduationCap = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M12 3 1.5 8.25 12 13.5l8.625-4.313V15h1.5V8.25L12 3Zm-6.75 9.188V16.5c0 2.285 3.023 4.125 6.75 4.125s6.75-1.84 6.75-4.125v-4.313L12 15.562l-6.75-3.374Z" />
  </svg>
);

const educationHistory = [
  {
    degree: "MSc Data Science",
    grade: "Distinction",
    institution: "University of Greenwich, London",
    period: "2023 – 2024",
    description:
      "Key Modules: Machine Learning, Applied Machine Learning, Data Visualisation, Statistical Methods for Time Series Analysis, Graph and Modern Databases, Big Data, Blockchain for FinTech Applications.",
    highlights: [
      "Completed projects involving comparative model evaluation (regression, classification, neural networks)",
      "Advanced clustering analysis and optimisation of models for diverse datasets",
      "Specialised in time series forecasting and big data processing",
    ],
    icon: "🎓",
    color: "from-blue-500 to-blue-600",
  },
  {
    degree: "MSc specialising in Data Science, Analytics and Engineering",
    institution: "University of Moratuwa, Sri Lanka",
    period: "2021",
    description:
      "Key Modules: Machine Learning, Pattern Recognition, Data Mining, Data Analytics, Advanced Databases, Business Intelligence, Neural Networks, Advanced Algorithms, Statistical Inference, Bioinformatics.",
    highlights: [
      "Focus on advanced machine learning algorithms and neural network architectures",
      "Research in pattern recognition and data mining techniques",
      "Comprehensive study of business intelligence and database systems",
    ],
    icon: FilledGraduationCap,
    color: "from-red-500 to-rose-600",
  },
  {
    degree:
      "Grad. Dip. in Electronics Telecommunication & Computer Engineering",
    grade: "Distinction (GPA 3.75/4.20)",
    institution: "Institution of Engineers, Sri Lanka",
    period: "2020",
    description:
      "Key modules including Digital Signal Processing, Computer Security, Computer Networks, and Communication Engineering.",
    highlights: [
      "Implemented an IoT-based Air Quality Monitoring System for remote Greenhouse",
      "Utilised GSM modules, microcontrollers, and sensors",
      "Strong foundation in telecommunications and embedded systems",
    ],
    icon: Cpu,
    color: "from-pink-500 to-pink-600",
  },
  {
    degree: "BSc (Electronics & IT)",
    grade: "Second Class Honours (GPA 3.24/4.00)",
    institution: "University of Colombo, Sri Lanka",
    period: "2015-2019",
    description:
      "Key modules including Applied Mathematics, Statistics, Computer Science, and Physics.",
    highlights: [
      "Comprehensive foundation in electronics and information technology",
      "Strong mathematical and statistical background",
      "Practical experience in computer science applications",
    ],
    icon: "🔬",
    color: "from-indigo-500 to-indigo-600",
  },
] as const;

const certifications: readonly Certification[] = [
  {
    title: "Introduction to Large Language Models",
    issuer: "Google Cloud",
    category: "Technical",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/V7R0CGMIXDV0",
    previewAsset: {
      src: "/cert-introduction-to-large-language-models.png",
      alt: "Introduction to Large Language Models certificate preview",
    },
    skills: [
      "Large Language Modeling",
      "Google Gemini",
      "LLM Application",
      "Prompt Engineering",
      "Generative AI",
    ],
  },
  {
    title: "DeepLearning.AI TensorFlow Developer Specialization",
    issuer: "DeepLearning.AI",
    category: "Technical",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/CZPIMWXPCSW5",
    previewAsset: {
      src: "/deeplearningai-tensorflow-developer.png",
      alt: "DeepLearning.AI TensorFlow Developer Specialization certificate preview",
    },
    skills: [
      "Applied Machine Learning",
      "Artificial Neural Networks",
      "Classification Algorithms",
      "Computer Vision",
      "Convolutional Neural Networks",
      "Data Preprocessing",
      "Deep Learning",
      "Embeddings",
      "Forecasting",
      "Generative AI",
      "Image Analysis",
      "Keras (Neural Network Library)",
    ],
  },
  {
    title: "Natural Language Processing in TensorFlow",
    issuer: "DeepLearning.AI",
    category: "Technical",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/LY882WRHMCPU",
    previewAsset: {
      src: "/natural-language-processing-in-tensorflow.png",
      alt: "Natural Language Processing in TensorFlow certificate preview",
    },
    skills: [
      "Natural Language Processing",
      "Recurrent Neural Networks (RNNs)",
      "Artificial Neural Networks",
      "Text Mining",
      "Embeddings",
      "Tensorflow",
      "Machine Learning",
      "Generative AI",
      "Data Preprocessing",
      "Applied Machine Learning",
    ],
  },
  {
    title:
      "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
    issuer: "DeepLearning.AI",
    category: "Technical",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/51UFSYCXKR4J",
    previewAsset: {
      src: "/introduction-to-tensorflow-ai-ml-dl.png",
      alt: "Introduction to TensorFlow for AI, ML, and Deep Learning certificate preview",
    },
    skills: [
      "Data Preprocessing",
      "Tensorflow",
      "Computer Vision",
      "Artificial Intelligence",
      "Artificial Neural Networks",
      "Image Analysis",
      "Keras (Neural Network Library)",
      "Convolutional Neural Networks",
      "Machine Learning",
      "Deep Learning",
      "Model Evaluation",
    ],
  },
  {
    title: "Convolutional Neural Networks in TensorFlow",
    issuer: "DeepLearning.AI",
    category: "Technical",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/PQQ7NMAXPXAG",
    previewAsset: {
      src: "/convolutional-neural-networks-in-tensorflow.png",
      alt: "Convolutional Neural Networks in TensorFlow certificate preview",
    },
    skills: [
      "Computer Vision",
      "Image Analysis",
      "Tensorflow",
      "Deep Learning",
      "Model Evaluation",
      "Machine Learning",
      "Classification Algorithms",
      "Keras (Neural Network Library)",
      "Data Preprocessing",
      "Transfer Learning",
      "Applied Machine Learning",
      "Convolutional Neural Networks",
    ],
  },
  {
    title: "Sequences, Time Series and Prediction",
    issuer: "DeepLearning.AI",
    category: "Technical",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/7RQNK51PO41V",
    previewAsset: {
      src: "/sequences-time-series-and-prediction.png",
      alt: "Sequences, Time Series and Prediction certificate preview",
    },
    skills: [
      "Machine Learning",
      "Forecasting",
      "Artificial Neural Networks",
      "Deep Learning",
      "Recurrent Neural Networks (RNNs)",
      "Data Preprocessing",
      "Applied Machine Learning",
      "Convolutional Neural Networks",
      "Time Series Analysis and Forecasting",
      "Predictive Modeling",
      "Tensorflow",
    ],
  },
  {
    title: "Improving your Statistical Inferences",
    issuer: "Eindhoven University of Technology",
    category: "Technical",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/LMJI0W969KHG",
    previewAsset: {
      src: "/improving-your-statistical-inferences.png",
      alt: "Improving your Statistical Inferences certificate preview",
    },
    skills: [
      "Scientific Methods",
      "Statistical Hypothesis Testing",
      "Probability & Statistics",
      "R Programming",
      "Quantitative Research",
      "Statistical Inference",
      "Sample Size Determination",
      "Bayesian Statistics",
      "Data Sharing",
      "Research",
      "Statistical Analysis",
    ],
  },
  {
    title: "Improving Your Statistical Questions",
    issuer: "Eindhoven University of Technology",
    category: "Technical",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/6GGN9RDGO33L",
    previewAsset: {
      src: "/improving-your-statistical-questions.png",
      alt: "Improving Your Statistical Questions certificate preview",
    },
    skills: [
      "Experimentation",
      "Statistical Inference",
      "Statistical Analysis",
      "Research Design",
      "Data Synthesis",
      "Sample Size Determination",
      "Data Sharing",
      "Statistical Methods",
      "Science and Research",
      "Research",
      "R Programming",
      "Quantitative Research",
    ],
  },
  {
    title: "Leadership & Management Development Programme",
    issuer: "Ashorne Hill Management College",
    category: "Leadership",
    credentialUrl:
      "https://www.linkedin.com/in/dinuja-perera/overlay/Certifications/1700553887/treasury?profileId=ACoAABWgzJUBfucuc3Asv13KRe87vpbYo5OLWK0",
    previewAsset: {
      src: "/leadership-and-management-development-programme.png",
      alt: "Leadership and Management Development Programme certificate preview",
    },
    skills: [
      "Leadership & Management",
      "Stakeholder Communication",
      "Strategic Decision Making",
      "Teamwork & Collaboration",
      "Negotiation",
      "Project Leadership",
      "Applied Research Delivery",
      "Industry Collaboration",
    ],
  },
  {
    title: "Knowledge Transfer Partnership Associate",
    issuer: "Innovate UK",
    category: "Industry",
  },
  {
    title: "British Airways - Data Science Job Simulation",
    issuer: "Forage",
    category: "Industry",
    credentialUrl:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/British%20Airways/NjynCWzGSaWXQCxSX_British%20Airways_NcCmkqNi2obQmzsZa_1712446000711_completion_certificate.pdf",
    previewAsset: {
      src: "/british-airways-data-science-job-simulation.png",
      alt: "British Airways Data Science Job Simulation certificate preview",
    },
  },
  {
    title: "Amazon Web Services Machine Learning Essential Training",
    issuer: "LinkedIn",
    category: "Technical",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/8f2c5cdb5e35f3559e2971b8784d76dc002d8cd6863ed4e145b1bbaf1d7f2796?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B9KzYwmCkTIiRXOpMYtLhNQ%3D%3D",
    previewAsset: {
      src: "/amazon-web-services-machine-learning-essential-training.png",
      alt: "Amazon Web Services Machine Learning Essential Training certificate preview",
    },
    skills: [
      "Machine Learning",
      "Artificial Intelligence (AI)",
      "Amazon Web Services (AWS)",
    ],
  },
  {
    title: "Python Practice: Object-Oriented Programming",
    issuer: "LinkedIn",
    category: "Technical",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/cdc9e826f74c801ffeba421bc42740fcee93e45671d57de05bc0fc02a185c16b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B9KzYwmCkTIiRXOpMYtLhNQ%3D%3D",
    previewAsset: {
      src: "/python-practice-object-oriented-programming.png",
      alt: "Python Practice Object-Oriented Programming certificate preview",
    },
    skills: [
      "Python (Programming Language)",
      "Object-Oriented Programming (OOP)",
    ],
  },
  {
    title: "Advanced NLP",
    issuer: "LinkedIn Learning",
    category: "Technical",
  },
  {
    title: "PySpark for Big Data",
    issuer: "LinkedIn Learning",
    category: "Technical",
  },
  {
    title: "Azure DevOps Fundamentals",
    issuer: "LinkedIn Learning",
    category: "Technical",
  },
  {
    title: "Generative AI Foundations",
    issuer: "LinkedIn Learning",
    category: "Technical",
  },
] as const;

const certificationStyles: Record<
  Certification["category"],
  {
    badge: string;
    panel: string;
    text: string;
    accent: string;
    button: string;
    icon: FC<{ className?: string }>;
  }
> = {
  Leadership: {
    badge:
      "bg-gradient-to-r from-amber-400 to-amber-500 text-amber-900 shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.15)]",
    panel:
      "bg-white/70 dark:bg-white/5 border border-white/40 dark:border-white/10",
    text: "text-slate-700 dark:text-slate-200",
    accent: "from-amber-400 to-orange-500",
    button:
      "border border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700",
    icon: Users,
  },
  Industry: {
    badge:
      "bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.25)]",
    panel:
      "bg-white/70 dark:bg-white/5 border border-white/40 dark:border-white/10",
    text: "text-slate-700 dark:text-slate-200",
    accent: "from-purple-500 to-fuchsia-600",
    button:
      "border border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700",
    icon: Briefcase,
  },
  Technical: {
    badge:
      "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.2)]",
    panel:
      "bg-white/70 dark:bg-white/5 border border-white/40 dark:border-white/10",
    text: "text-slate-700 dark:text-slate-200",
    accent: "from-blue-500 to-cyan-500",
    button:
      "border border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700",
    icon: Cpu,
  },
};

const certificationCategoryOrder = [
  "Industry",
  "Technical",
  "Leadership",
] as const;

type CertificationStyle = (typeof certificationStyles)[Certification["category"]];

const CertificatePreviewPanel: FC<{
  certificate: Certification;
  style: CertificationStyle;
}> = ({ certificate, style }) => {
  if (!certificate.previewAsset) {
    return null;
  }

  return (
    <div className="relative z-0 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white/95 p-3 shadow-2xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/95">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
          Certificate Preview
        </p>
        <div
          className={`h-2.5 w-16 rounded-full bg-gradient-to-r ${style.accent}`}
        />
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
        <Image
          src={certificate.previewAsset.src}
          alt={certificate.previewAsset.alt}
          width={704}
          height={512}
          className="h-auto w-full object-contain"
        />
      </div>
      {certificate.skills?.length ? (
        <div className="mt-3">
          <p className="mb-2 text-[11px] font-medium text-slate-500 dark:text-slate-400">
            Skills covered
          </p>
          <div className="flex flex-wrap gap-1.5">
            {certificate.skills.map((skill) => (
              <span
                key={`${certificate.title}-${skill}`}
                className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

const achievements = [
  {
    icon: Trophy,
    title: "Tier 1 Global Talent Visa",
    description: "Endorsed by UK Research and Innovation (UKRI)",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Star,
    title: "Published Research",
    description: "Presented at WiNLP Workshop co-located with EMNLP 2022",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: Award,
    title: "Multiple Distinctions",
    description:
      "Achieved distinction grades in MSc Data Science and Graduate Diploma",
    color: "from-green-500 to-emerald-500",
  },
] as const;

const educationAccentBorders = [
  "border-blue-300 dark:border-blue-700",
  "border-red-300 dark:border-rose-700",
  "border-pink-300 dark:border-pink-700",
  "border-indigo-300 dark:border-indigo-700",
] as const;

const educationActiveCircleBorders = [
  "border-blue-500 dark:border-blue-400",
  "border-red-500 dark:border-rose-400",
  "border-pink-500 dark:border-pink-400",
  "border-indigo-500 dark:border-indigo-400",
] as const;

const Education: FC<EducationProps> = ({ keywords = [] }) => {
  const [activeEducationIndex, setActiveEducationIndex] = useState(0);
  const [timelinePaused, setTimelinePaused] = useState(false);
  const [expandedCertificateTitle, setExpandedCertificateTitle] = useState<
    string | null
  >(null);
  const activeEducation = educationHistory[activeEducationIndex];

  useEffect(() => {
    if (timelinePaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveEducationIndex(
        (currentIndex) => (currentIndex + 1) % educationHistory.length,
      );
    }, 4200);

    return () => window.clearInterval(intervalId);
  }, [timelinePaused]);

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800">
            Education &amp; Certifications
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Academic Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Building a strong foundation in data science and machine learning
            through rigorous academic training
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 border-none shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shrink-0`}
                  >
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold dark:text-white">
                    {achievement.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {achievement.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card
            className="overflow-hidden border-none bg-white/85 shadow-2xl backdrop-blur dark:bg-slate-900/85"
            onMouseEnter={() => setTimelinePaused(true)}
            onMouseLeave={() => setTimelinePaused(false)}
            onFocusCapture={() => setTimelinePaused(true)}
            onBlurCapture={() => setTimelinePaused(false)}
          >
            <div className="border-b border-slate-200/80 bg-gradient-to-r from-blue-50 via-white to-purple-50 px-5 py-6 dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 sm:px-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                    Academic Timeline
                  </h3>
                </div>
                <p className="max-w-xl text-sm text-slate-600 dark:text-slate-400">
                  Hover or tap a milestone to inspect the degree, institution,
                  and key learning focus.
                </p>
              </div>
            </div>

            <div className="px-5 py-6 sm:px-8">
              <div className="hidden lg:block">
                <div className="relative mb-10">
                  <div className="absolute left-[8%] right-[8%] top-7 h-1 rounded-full bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900" />
                  <div className="grid grid-cols-4 gap-4">
                    {educationHistory.map((edu, index) => {
                      const isActive = index === activeEducationIndex;
                      return (
                        <button
                          key={edu.degree}
                          type="button"
                          onMouseEnter={() => setActiveEducationIndex(index)}
                          onFocus={() => setActiveEducationIndex(index)}
                          onClick={() => setActiveEducationIndex(index)}
                          className="group relative flex flex-col items-center text-center transition-transform duration-500 ease-out"
                        >
                          <div
                            className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 bg-white shadow-lg transition-all duration-500 ease-out dark:bg-slate-900 ${
                              isActive
                                ? `scale-110 ${educationActiveCircleBorders[index]} shadow-blue-200/70 dark:shadow-blue-950/60`
                                : "border-slate-200 dark:border-slate-700"
                            }`}
                          >
                            <div
                              className={`absolute inset-1 rounded-full bg-gradient-to-br ${edu.color} opacity-15`}
                            />
                            {typeof edu.icon === "string" ? (
                              <span className="relative text-2xl">
                                {edu.icon}
                              </span>
                            ) : (
                              <edu.icon className="relative h-6 w-6 text-slate-700 dark:text-slate-100" />
                            )}
                          </div>
                          <div className="mt-4 space-y-1 transition-all duration-500 ease-out">
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                              {edu.period}
                            </p>
                            <p
                              className={`text-sm font-semibold transition-colors duration-500 ease-out ${isActive ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-400"}`}
                            >
                              {edu.institution}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="grid gap-3 lg:hidden">
                {educationHistory.map((edu, index) => {
                  const isActive = index === activeEducationIndex;
                  return (
                    <button
                      key={edu.degree}
                      type="button"
                      onClick={() => setActiveEducationIndex(index)}
                      className={`flex items-center gap-4 rounded-3xl border px-4 py-4 text-left transition-all duration-500 ease-out ${
                        isActive
                          ? `${educationAccentBorders[index]} bg-blue-50 shadow-lg dark:bg-blue-950/30`
                          : "border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800/70"
                      }`}
                    >
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${edu.color} text-white shadow-md`}
                      >
                        {typeof edu.icon === "string" ? (
                          <span className="text-xl">{edu.icon}</span>
                        ) : (
                          <edu.icon className="h-5 w-5" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                          {edu.period}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                          {edu.degree}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <motion.div
                layout
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="mt-8"
              >
                <Card
                  className={`overflow-hidden border bg-gradient-to-br from-white to-slate-50 shadow-xl dark:from-slate-900 dark:to-slate-800 ${educationAccentBorders[activeEducationIndex]}`}
                >
                  <motion.div
                    key={`${activeEducation.degree}-bar`}
                    className={`h-1.5 bg-gradient-to-r ${activeEducation.color}`}
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  />
                  <CardHeader className="pb-4">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                      <motion.div
                        key={`${activeEducation.degree}-icon`}
                        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br ${activeEducation.color} text-white shadow-lg`}
                        initial={{ opacity: 0.8, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                      >
                        {typeof activeEducation.icon === "string" ? (
                          <span className="text-3xl">
                            {activeEducation.icon}
                          </span>
                        ) : (
                          <activeEducation.icon className="h-7 w-7" />
                        )}
                      </motion.div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <motion.div
                            key={`${activeEducation.degree}-title`}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          >
                            <CardTitle className="text-2xl leading-tight dark:text-white">
                              <HighlightedText
                                text={activeEducation.degree}
                                keywords={keywords}
                              />
                            </CardTitle>
                            <p className="mt-2 text-lg font-semibold text-blue-600 dark:text-blue-400">
                              {activeEducation.institution}
                            </p>
                          </motion.div>
                          <Badge className="w-fit bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600">
                            {activeEducation.period}
                          </Badge>
                        </div>
                        {activeEducation.grade && (
                          <motion.div
                            key={`${activeEducation.degree}-grade`}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.05,
                              ease: "easeOut",
                            }}
                          >
                            <Badge className="mt-3 bg-green-100 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800">
                              <Award className="mr-1 h-3 w-3" />
                              {activeEducation.grade}
                            </Badge>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5 pb-6">
                    <motion.p
                      key={`${activeEducation.degree}-description`}
                      className="text-gray-700 dark:text-gray-300"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.08,
                        ease: "easeOut",
                      }}
                    >
                      <HighlightedText
                        text={activeEducation.description}
                        keywords={keywords}
                      />
                    </motion.p>
                    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                      {activeEducation.highlights.map((highlight, index) => (
                        <motion.div
                          key={`${activeEducation.degree}-${highlight}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.12 + index * 0.04,
                            ease: "easeOut",
                          }}
                          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-6 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                        >
                          <HighlightedText
                            text={highlight}
                            keywords={keywords}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <Card className="border border-slate-200/80 bg-white/90 shadow-xl dark:border-slate-700 dark:bg-slate-900">
            <CardHeader className="pb-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 text-white shadow-lg">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                      Continuous Learning
                    </p>
                    <CardTitle className="mt-2 text-3xl font-bold dark:text-white">
                      Professional Certifications
                    </CardTitle>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                      Recent certifications across machine learning, generative
                      AI, statistics, industry simulations, and leadership
                      development.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 self-start lg:self-auto">
                  {certificationCategoryOrder.map((category) => {
                    const total = certifications.filter(
                      (certificate) => certificate.category === category,
                    ).length;

                    return (
                      <div
                        key={category}
                        className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-center dark:border-slate-700 dark:bg-slate-800"
                      >
                        <p className="text-2xl font-bold text-slate-900 dark:text-white">
                          {total}
                        </p>
                        <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                          {category}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardHeader>
            <CardContent className="py-6">
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {certifications.map((certificate, index) => {
                  const style = certificationStyles[certificate.category];
                  const CertificateIcon = style.icon;
                  const showPreviewOnLeft = index % 4 === 3;
                  const isPreviewExpanded =
                    expandedCertificateTitle === certificate.title;

                  return (
                    <div
                      key={certificate.title}
                      className="group/certificate relative h-full"
                    >
                      <div
                        className={`h-full overflow-hidden rounded-[2rem] ring-1 ring-slate-200/80 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.28)] transition-all dark:ring-slate-700/80 dark:shadow-[0_14px_36px_-22px_rgba(2,6,23,0.65)] ${style.panel} hover:-translate-y-0.5 hover:shadow-lg`}
                      >
                        <div
                          className={`h-3 bg-gradient-to-r ${style.accent}`}
                        />
                        <div className="flex h-full min-h-[14.5rem] flex-col px-4 py-3">
                          <div className="mb-3 flex items-start justify-between gap-3">
                            <div>
                              <Badge
                                className={`${style.badge} px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em]`}
                              >
                                {certificate.category}
                              </Badge>
                              <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
                                <HighlightedText
                                  text={certificate.issuer}
                                  keywords={keywords}
                                />
                              </p>
                            </div>
                            <div
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${style.accent} text-white shadow-md`}
                            >
                              <CertificateIcon
                                className="h-4 w-4"
                                aria-hidden="true"
                              />
                            </div>
                          </div>

                          <div className="mb-3 flex-1">
                            <h4
                              className={`text-lg font-semibold leading-snug ${style.text}`}
                            >
                              <HighlightedText
                                text={certificate.title}
                                keywords={keywords}
                              />
                            </h4>
                          </div>

                          {certificate.skills?.length ? (
                            <SkillsOverflowChips skills={certificate.skills} />
                          ) : null}

                          {certificate.previewAsset ? (
                            <button
                              type="button"
                              onClick={() =>
                                setExpandedCertificateTitle((currentTitle) =>
                                  currentTitle === certificate.title
                                    ? null
                                    : certificate.title,
                                )
                              }
                              className={`mb-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-3.5 py-2 text-xs font-semibold transition-colors xl:hidden ${style.button}`}
                              aria-expanded={isPreviewExpanded}
                              aria-controls={`certificate-preview-mobile-${index}`}
                            >
                              <ChevronDown
                                className={`h-3.5 w-3.5 transition-transform ${
                                  isPreviewExpanded ? "rotate-180" : ""
                                }`}
                                aria-hidden="true"
                              />
                              {isPreviewExpanded
                                ? "Hide Preview"
                                : "Preview Certificate"}
                            </button>
                          ) : null}

                          {certificate.previewAsset && isPreviewExpanded ? (
                            <motion.div
                              id={`certificate-preview-mobile-${index}`}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.25 }}
                              className="mb-3 xl:hidden"
                            >
                              <CertificatePreviewPanel
                                certificate={certificate}
                                style={style}
                              />
                            </motion.div>
                          ) : null}

                          {certificate.credentialUrl ? (
                            <a
                              href={certificate.credentialUrl}
                              target="_blank"
                              rel="noreferrer"
                              className={`mt-auto mb-1 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-3.5 py-2 text-xs font-semibold transition-colors ${style.button}`}
                            >
                              <ExternalLink
                                className="h-3.5 w-3.5"
                                aria-hidden="true"
                              />
                              Show in Full
                            </a>
                          ) : (
                            <div className="mt-auto mb-1 inline-flex w-full items-center justify-center rounded-2xl bg-slate-200 px-3.5 py-2 text-xs font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                              Internal Listing
                            </div>
                          )}
                        </div>
                      </div>

                      {certificate.previewAsset && (
                        <div
                          className={`pointer-events-none absolute top-1/2 z-30 hidden w-[37rem] -translate-y-1/2 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] xl:block ${
                            showPreviewOnLeft
                              ? "right-full -translate-x-12 group-hover/certificate:-translate-x-2 group-focus-within/certificate:-translate-x-2"
                              : "left-full translate-x-12 group-hover/certificate:translate-x-2 group-focus-within/certificate:translate-x-2"
                          } group-hover/certificate:opacity-100 group-focus-within/certificate:opacity-100`}
                          aria-hidden="true"
                        >
                          <div
                            className={`absolute top-1/2 z-20 h-10 w-[6.5rem] -translate-y-1/2 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                              showPreviewOnLeft
                                ? "left-full -translate-x-[1px] group-hover/certificate:translate-x-0 group-focus-within/certificate:translate-x-0"
                                : "right-full translate-x-[1px] group-hover/certificate:translate-x-0 group-focus-within/certificate:translate-x-0"
                            }`}
                          >
                            <svg
                              viewBox="0 0 72 40"
                              className={`h-full w-full overflow-visible drop-shadow-[0_0_14px_rgba(56,189,248,0.42)] ${
                                showPreviewOnLeft ? "scale-x-[-1]" : ""
                              }`}
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <defs>
                                <linearGradient
                                  id={`certificate-preview-arrow-${index}`}
                                  x1="8"
                                  y1="20"
                                  x2="68"
                                  y2="20"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#38bdf8" />
                                  <stop offset="0.5" stopColor="#3b82f6" />
                                  <stop offset="1" stopColor="#6366f1" />
                                </linearGradient>
                              </defs>
                              <circle cx="8" cy="20" r="4.2" fill="#22d3ee" />
                              <path
                                d="M10 20H56"
                                stroke={`url(#certificate-preview-arrow-${index})`}
                                strokeWidth="4"
                                strokeLinecap="round"
                              />
                              <path
                                d="M50 10L68 20L50 30"
                                fill="none"
                                stroke={`url(#certificate-preview-arrow-${index})`}
                                strokeWidth="4.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/certificate:shadow-[0_26px_60px_-22px_rgba(15,23,42,0.38)] group-focus-within/certificate:shadow-[0_26px_60px_-22px_rgba(15,23,42,0.38)]">
                            <CertificatePreviewPanel
                              certificate={certificate}
                              style={style}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
