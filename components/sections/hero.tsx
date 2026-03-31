"use client";

import { type FC } from "react";
import { motion } from "framer-motion";
import {
  Award,
  ChevronDown,
  FilePenLine,
  Github,
  MapPin,
  Sparkles,
  Target,
} from "lucide-react";

import HighlightedText from "@/components/shared/highlighted-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
  keywords?: string[];
  onOpenJobMatcher: () => void;
  githubProfileUrl: string;
  mediumProfileUrl: string;
}

const supportingRoles = ["NLP & Predictive Modelling", "Data Science"] as const;
const heroPillClassName =
  "rounded-full border-2 px-4 py-2 text-sm font-semibold text-slate-800 shadow-[0_10px_30px_-16px_rgba(59,130,246,0.55)] backdrop-blur-md dark:border-slate-600 dark:text-slate-100 dark:shadow-[0_12px_28px_-18px_rgba(129,140,248,0.45)]";
const heroOutlineBorderClassName = "border-blue-200/80 dark:border-slate-600";

const Hero: FC<HeroProps> = ({
  scrollToSection,
  keywords = [],
  onOpenJobMatcher,
  githubProfileUrl,
  mediumProfileUrl,
}) => (
  <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    <div className="absolute inset-0 z-0">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/10 to-purple-400/10 dark:from-blue-600/5 dark:to-purple-600/5 rounded-full blur-3xl" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 py-2">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none">
              <Sparkles className="w-3 h-3 mr-1" />
              Available for Opportunities
            </Badge>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Dinuja Perera
            </span>
          </motion.h1>

          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100">
              <HighlightedText
                text="Machine Learning Engineer"
                keywords={keywords}
              />
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {supportingRoles.map((role) => (
                <Badge
                  key={role}
                  variant="outline"
                  className={`${heroPillClassName} border-blue-200/80 bg-gradient-to-r from-blue-50 via-white to-purple-50 dark:bg-gradient-to-r dark:from-slate-800 dark:via-slate-800/95 dark:to-slate-700`}
                >
                  <HighlightedText text={role} keywords={keywords} />
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-justify"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <HighlightedText
              // text="Machine Learning Engineer with 2+ years of experience developing supervised, unsupervised, and deep learning models across predictive maintenance, NLP, and customer analytics. Recognized for building LSTM and ESN time-series models achieving under 3% prediction error on 200 turbine sensor streams, and for delivering research presented at WiNLP 2022, collocated with EMNLP international conference. Combines strong Python development and end-to-end ML pipeline expertise with a proven ability to contextualize complex data from diverse sources to deliver actionable intelligence for technical and non-technical stakeholders alike."
              text="Machine Learning Engineer with experience building data-driven solutions for real-world industrial and business problems. I am particularly looking for opportunities where models are developed, deployed, and maintained in production environments."
              keywords={keywords}
            />
          </motion.p>

          <motion.div
            className="flex flex-col gap-4 p-4 mb-8 rounded-2xl border border-blue-100 bg-white/80 shadow-sm dark:border-blue-900/40 dark:bg-slate-800/80 backdrop-blur-sm sm:flex-row sm:items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            <div className="flex items-start gap-4 sm:flex-1">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 text-blue-600 dark:text-blue-300 shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-gray-800 dark:text-gray-100">
                  Match my experience to your role
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 sm:max-w-xl">
                  Paste your job description and I&apos;ll highlight the most
                  relevant skills, projects, and research instantly.
                </p>
              </div>
            </div>
            <Button
              size="sm"
              onClick={onOpenJobMatcher}
              className="w-full shrink-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 sm:w-auto"
            >
              Open Matcher
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Badge
              variant="outline"
              className={`${heroPillClassName} text-base border-blue-200/80 bg-gradient-to-r from-blue-50 via-white to-purple-50 dark:bg-gradient-to-r dark:from-slate-800 dark:via-slate-800/95 dark:to-slate-700`}
            >
              <MapPin className="w-4 h-4 mr-2" />
              United Kingdom
            </Badge>
            <Badge
              variant="outline"
              className={`${heroPillClassName} text-base border-blue-200/80 bg-gradient-to-r from-blue-50 via-white to-purple-50 dark:bg-gradient-to-r dark:from-slate-800 dark:via-slate-800/95 dark:to-slate-700`}
            >
              <Award className="w-4 h-4 mr-2" />
              Tier 1 Global Talent Visa
            </Badge>
            <Badge
              variant="outline"
              className={`${heroPillClassName} text-base border-blue-200/80 bg-gradient-to-r from-blue-50 via-white to-purple-50 dark:bg-gradient-to-r dark:from-slate-800 dark:via-slate-800/95 dark:to-slate-700`}
            >
              Full UK Work Rights | Not Required Sponsorship
            </Badge>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all"
            >
              Let&apos;s Connect
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("experience")}
              className={`${heroOutlineBorderClassName} hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 dark:text-gray-300`}
            >
              My Experience
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() =>
                window.open(
                  "/Dinuja_Perera_Machine_Learning_Engineer.pdf",
                  "_blank",
                )
              }
              className="font-semibold"
            >
              Download CV
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open(githubProfileUrl, "_blank")}
              className={`${heroOutlineBorderClassName} hover:border-slate-900 hover:text-slate-900 dark:hover:border-slate-200 dark:hover:text-slate-200 dark:text-gray-300`}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open(mediumProfileUrl, "_blank")}
              className={`${heroOutlineBorderClassName} hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 dark:text-gray-300`}
            >
              <FilePenLine className="mr-2 h-4 w-4" />
              Blogs
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800 rounded-3xl opacity-20 dark:opacity-10 blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-800 rounded-3xl opacity-20 dark:opacity-10 blur-2xl" />

            <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700">
              <img
                src="/machine-learning.jpg"
                alt="AI and Machine Learning"
                className="w-full h-80 object-cover rounded-2xl mb-6"
              />
              <div className="space-y-4">
                <div className="flex flex-col gap-2 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-xl sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-lg sm:text-base font-semibold text-gray-700 dark:text-gray-300">
                    Experience
                  </span>
                  <span className="text-lg sm:text-base text-blue-600 dark:text-blue-400 font-bold sm:text-right">
                    2+ Years
                  </span>
                </div>
                <div className="flex flex-col gap-2 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-xl sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-lg sm:text-base font-semibold text-gray-700 dark:text-gray-300">
                    Core Focus
                  </span>
                  <span className="text-lg sm:text-base text-purple-600 dark:text-purple-400 font-bold sm:text-right">
                    Machine Learning / AI
                  </span>
                </div>
                <div className="flex flex-col gap-2 p-4 bg-gradient-to-r from-pink-50 to-blue-50 dark:from-pink-950 dark:to-blue-950 rounded-xl sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-lg sm:text-base font-semibold text-gray-700 dark:text-gray-300">
                    Research
                  </span>
                  <span className="text-lg sm:text-base text-pink-600 dark:text-pink-400 font-bold leading-snug sm:max-w-[18rem] sm:text-right">
                    NLP, Deep Learning & Time Series Forecasting
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
      onClick={() => scrollToSection("about")}
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <ChevronDown className="w-8 h-8 text-gray-400 dark:text-gray-500" />
    </motion.div>
  </div>
);

export default Hero;
