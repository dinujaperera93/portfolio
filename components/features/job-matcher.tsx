"use client";

import { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, Target, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

interface JobMatcherProps {
  isOpen: boolean;
  onClose: () => void;
  onKeywordsExtract: (keywords: string[]) => void;
  onNavigateToSection: (sectionId: string) => void;
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function createKeywordRegex(keyword: string) {
  return new RegExp(`\\b${escapeRegExp(keyword)}\\b`, "i");
}

const technicalKeywords = [
  "python",
  "r",
  "tensorflow",
  "keras",
  "pytorch",
  "scikit-learn",
  "pyspark",
  "pandas",
  "numpy",
  "azure",
  "databricks",
  "azure databricks",
  "aws",
  "aws s3",
  "aws hadoop",
  "aws spark",
  "google colab",
  "google cloud",
  "gcp",
  "colab",
  "cloud",
  "sql",
  "mysql",
  "duckdb",
  "mongodb",
  "cassandra",
  "redis",
  "neo4j",
  "power bi",
  "tableau",
  "matplotlib",
  "seaborn",
  "excel",
  "excel pivot tables",
  "pca",
  "machine learning",
  "ml",
  "deep learning",
  "ai",
  "artificial intelligence",
  "generative ai",
  "computer vision",
  "predictive modelling",
  "lstm",
  "esn",
  "rnn",
  "cnn",
  "autoencoders",
  "isolation forest",
  "transformer",
  "transformers",
  "bert",
  "bart",
  "roberta",
  "xlnet",
  "gpt",
  "llm",
  "langchain",
  "nlp",
  "natural language processing",
  "sentiment analysis",
  "topic modelling",
  "aspect-based sentiment analysis",
  "ner",
  "named entity recognition",
  "pos tagging",
  "lda",
  "nmf",
  "predictive maintenance",
  "time series",
  "time-series",
  "time-series analysis",
  "forecasting",
  "time series forecasting",
  "survival analysis",
  "clustering",
  "k-means",
  "classification",
  "regression",
  "random forest",
  "svm",
  "xgboost",
  "feature engineering",
  "feature selection",
  "feature importance",
  "model evaluation",
  "data validation",
  "gridsearchcv",
  "hyperopt",
  "lazypredict",
  "correlation analysis",
  "autocorrelation",
  "similarity learning",
  "neural network",
  "neural networks",
  "data science",
  "data analytics",
  "data analysis",
  "data visualisation",
  "data mining",
  "big data",
  "graph databases",
  "pattern recognition",
  "statistical inference",
  "bioinformatics",
  "customer segmentation",
  "research",
  "publication",
  "hate speech detection",
  "business intelligence",
  "object-oriented programming",
  "oop",
  "github",
  "clickup",
  "confluence",
  "devops",
  "azure devops",
  "ci/cd",
  "docker",
  "kubernetes",
  "api",
  "rest",
  "microservices",
  "phd",
  "msc",
  "masters",
  "iot",
  "digital signal processing",
  "computer security",
  "computer networks",
  "communication engineering",
  "embedded systems",
  "microcontrollers",
  "sensors",
  "gsm",
  "blockchain",
  "fintech",
  "pipelines",
  "deployment",
  "scalable",
  "monitoring",
  "sponsorship",
  "deap learning",
  "Engineer",
] as const;

const JobMatcher = ({
  isOpen,
  onClose,
  onKeywordsExtract,
  onNavigateToSection,
}: JobMatcherProps) => {
  const [jobDescription, setJobDescription] = useState("");
  const [extractedKeywords, setExtractedKeywords] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const hasInput = jobDescription.trim().length > 0;

  const normalizedKeywords = useMemo(() => new Set(technicalKeywords), []);

  const analyzeJobDescription = useCallback(() => {
    if (!hasInput) return;
    setIsAnalyzing(true);

    setTimeout(() => {
      const found = Array.from(normalizedKeywords).filter((keyword) =>
        createKeywordRegex(keyword).test(jobDescription),
      );

      setExtractedKeywords(found);
      onKeywordsExtract(found);
      setIsAnalyzing(false);
    }, 800);
  }, [hasInput, jobDescription, normalizedKeywords, onKeywordsExtract]);

  const clearAnalysis = useCallback(() => {
    setJobDescription("");
    setExtractedKeywords([]);
    onKeywordsExtract([]);
  }, [onKeywordsExtract]);

  const handleKeywordClick = useCallback(
    (keyword: string) => {
      const normalizedKeyword = keyword.toLowerCase();
      const target = document.querySelector<HTMLElement>(
        `[data-highlight-keyword="${CSS.escape(normalizedKeyword)}"]`,
      );

      onClose();
      window.setTimeout(() => {
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "center" });
          return;
        }

        onNavigateToSection("skills");
      }, 200);
    },
    [onClose, onNavigateToSection],
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full md:w-[500px] bg-white dark:bg-slate-900 shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <h2 className="text-2xl font-bold dark:text-white">
                      Job Matcher
                    </h2>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Paste a job description to highlight matching skills &amp;
                    experience
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="rounded-full"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 block">
                    Job Description
                  </label>
                  <Textarea
                    placeholder="Paste the job description here... Include requirements, qualifications, skills needed, etc."
                    value={jobDescription}
                    onChange={(event) => setJobDescription(event.target.value)}
                    className="min-h-[200px] dark:bg-slate-800 dark:border-gray-700 dark:text-gray-100"
                  />
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={analyzeJobDescription}
                    disabled={!hasInput || isAnalyzing}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Analyze &amp; Highlight
                      </>
                    )}
                  </Button>
                  {extractedKeywords.length > 0 && (
                    <Button
                      onClick={clearAnalysis}
                      variant="outline"
                      className="dark:border-gray-600"
                    >
                      Clear
                    </Button>
                  )}
                </div>
              </div>

              {extractedKeywords.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6"
                >
                  <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-none">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <h3 className="font-bold text-lg dark:text-white">
                        {extractedKeywords.length} Matching Keywords Found
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Click a keyword to jump to the most relevant section
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {extractedKeywords.map((keyword) => (
                        <Badge
                          key={keyword}
                          className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none hover:from-blue-700 hover:to-purple-700"
                          onClick={() => handleKeywordClick(keyword)}
                        >
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </Card>

                  <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <p className="text-sm text-yellow-800 dark:text-yellow-300">
                      <strong>💡 Tip:</strong> Highlighted text shows where
                      Dinuja&apos;s experience matches your requirements
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default JobMatcher;
