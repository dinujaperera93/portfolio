"use client";

import { type FC } from "react";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Github } from "lucide-react";

import HighlightedText from "@/components/shared/highlighted-text";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProjectsProps {
  keywords?: string[];
}

const projects = [
  {
    title: "Transformer-Based Sentiment Analysis of Company Reviews",
    subtitle: "MSc Dissertation - NLP & Interactive Web Application",
    description:
      "Built a transformer-based NLP system to analyse employee reviews from 500 UK companies. Compared models including BERT, RoBERTa, and XLNet, achieving 76% accuracy. Integrated topic modelling and aspect-based sentiment analysis to extract key insights from text data.",
    tags: [
      "NLP",
      "Transformers",
      "BERT",
      "XLNet",
      "PyTorch",
      "LDA",
      "NMF",
      "AWS",
      "Sentiment Analysis",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200",
    type: "MSc Dissertation",
    githubUrl:
      "https://github.com/dinujaperera93/Metal-Part-Lifespan-Prediction-and-Defect-Classification",
    websiteUrl: "http://project-uog.s3-website.eu-north-1.amazonaws.com/",
  },
  {
    title: "Employee Churn Risk Prediction and Behavioural Analytics",
    subtitle: "Causal Machine Learning for Workforce Analytics",
    description:
      "Developed causal machine learning models to understand employee turnover behaviours. Used Random Forest and statistical feature importance techniques to identify the most influential drivers of churn. Performed feature leakage detection, refined model input space, and enhanced model generalisation. Integrated email sentiment analysis as an additional behavioural signal. Work carried out in a Linux-based environment using object-oriented Python.",
    tags: [
      "Machine Learning",
      "Random Forest",
      "Sentiment Analysis",
      "Python",
      "Scikit-learn",
      "Feature Engineering",
      "Linux",
      "OOP",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    title: "Term Deposit Subscriber Profiling",
    subtitle: "Customer Segmentation and Subscription Prediction",
    description:
      "Developed a machine learning solution to identify customers likely to subscribe to term deposit products. Performed exploratory data analysis and feature engineering on customer and campaign data. Applied K-Means clustering to segment customers based on behaviour. Used DuckDB and SQL queries within Python to analyse structured datasets efficiently. Helped identify high-value customer groups and reduce unnecessary marketing effort.",
    tags: [
      "Python",
      "DuckDB",
      "K-Means",
      "Pandas",
      "OOP",
      "Data Analysis",
      "Customer Segmentation",
    ],
    image:
      "https://images.unsplash.com/photo-1518183214770-9cffbec72538?w=800&q=80",
    githubUrl:
      "https://github.com/dinujaperera93/term-deposit-subscriber-profiling",
  },
  {
    title: "Unhappy Customers in Logistics Delivery",
    subtitle: "Customer Dissatisfaction Prediction using Machine Learning",
    description:
      "Built a machine learning solution to detect dissatisfied customers in logistics delivery services using operational and feedback data. Identified patterns indicating poor delivery experiences and predicted likely dissatisfaction. Used LazyPredict to benchmark multiple classification algorithms and Hyperopt to optimize hyperparameters for improved performance.",
    tags: [
      "Python",
      "Machine Learning",
      "LazyPredict",
      "Hyperopt",
      "Scikit-learn",
      "OOP",
      "Pandas",
      "Data Analysis",
    ],
    image: "https://unsplash.com/photos/-wBjvb_tpZ4/download?force=true&w=1200",
    githubUrl:
      "https://github.com/dinujaperera93/unhappy-customers-logistics-delivery-ml",
  },
  {
    title: "Predicting Road Accident Severity in the UK",
    subtitle: "Supervised Machine Learning Classification",
    description:
      "Applied supervised machine learning to predict the severity of road accidents across the UK using 2019 public data. Evaluated Random Forest, SVM, Decision Tree, KNN, and Deep Neural Networks. The deep neural network achieved the highest accuracy of 80.65% in classifying accidents as 'Slight,' 'Serious,' or 'Fatal.'",
    tags: [
      "Machine Learning",
      "Deep Learning",
      "Random Forest",
      "SVM",
      "Neural Networks",
      "Python",
      "TensorFlow",
      "Keras",
      "PCA",
    ],
    image: "/driving.jpg",
    githubUrl:
      "https://github.com/dinujaperera93/Accident-Severity-Prediction-UK",
  },
  {
    title: "Metal Part Lifespan Prediction and Defect Classification",
    subtitle: "Regression & Defect Detection with ML",
    description:
      "Investigated metal part manufacturing datasets to predict part lifespan and classify defects. Regression models (Linear, Lasso, Ridge, Random Forest) were compared, with Random Forest achieving 97% accuracy. For defect detection, both binary classifiers and CNNs were tested. K-Means clustering revealed distinct process parameter groups influencing part quality.",
    tags: [
      "Regression",
      "Classification",
      "Random Forest",
      "CNN",
      "K-Means",
      "GridSearchCV",
      "TensorFlow",
      "Scikit-learn",
    ],
    image: "https://unsplash.com/photos/ORYbuiWtg24/download?force=true&w=1200",
    githubUrl:
      "https://github.com/dinujaperera93/Metal-Part-Lifespan-Prediction-and-Defect-Classification",
  },
  {
    title: "Comparative Analysis of BART and RoBERTa for Hate Speech Detection",
    subtitle: "Published Research - WiNLP 2022",
    description:
      "Explored transformer-based approaches for detecting hate speech on YouTube and Reddit using the ETHOS dataset. Compared BART and RoBERTa for binary and multi-class classification. BART achieved 70% F1-score and 58% top-1 accuracy, outperforming RoBERTa in distinguishing hate categories including gender, race, and religion.",
    tags: [
      "NLP",
      "BART",
      "RoBERTa",
      "Transformers",
      "Hate Speech Detection",
      "PyTorch",
      "Classification",
    ],
    image: "https://unsplash.com/photos/HBkpnDVc_Ic/download?force=true&w=1200",
    publication: "WiNLP Workshop co-located with EMNLP 2022",
    publicationUrl:
      "https://underline.io/lecture/67384-short-comparative-analysis-on-pretrained-bart-and-roberta-in-detecting-hate-speech-on-youtube-and-reddit-platforms",
  },
  {
    title: "Gas Turbine Sensor Fault Detection",
    subtitle: "Time-Series Analysis for Predictive Maintenance",
    description:
      "Developed machine learning approaches to analyse gas turbine sensor data and detect early signs of system faults. Used correlation and autocorrelation analysis to distinguish normal and faulty sensor behaviour. Applied time-series modelling techniques to support predictive maintenance strategies.",
    tags: [
      "Time-Series Analysis",
      "Predictive Maintenance",
      "LSTM",
      "ESN",
      "Correlation Analysis",
      "Azure Databricks",
      "Machine Learning",
    ],
    image: "https://unsplash.com/photos/39qkVbxzGJQ/download?force=true&w=1200",
  },
  {
    title: "Benchmark NLP Algorithm for Hate Speech Detection",
    subtitle: "Deep Learning on Social Media",
    description:
      "Tested 12 deep learning architectures, including RNNs, CNNs, transformer-based models (e.g., BERT, RoBERTa), and hybrid architectures (e.g., CNN + LSTM) to detect hate speech on social media platforms.",
    tags: [
      "Deep Learning",
      "BERT",
      "RoBERTa",
      "Social Media",
      "CNN",
      "LSTM",
      "RNN",
    ],
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
  },
] as const;

const orderedProjects = [
  ...projects.filter((project) => project.githubUrl),
  ...projects.filter((project) => !project.githubUrl),
] as const;

const Projects: FC<ProjectsProps> = ({ keywords = [] }) => (
  <div className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">
          Research & Projects
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Featured Research & Projects
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Showcasing research, production ML systems, and experimentation
        </p>
      </motion.div>

      <div className="grid auto-rows-[minmax(0,1fr)] gap-8 md:grid-cols-2 xl:grid-cols-3">
        {orderedProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="h-full"
          >
            <Card className="flex h-full flex-col overflow-hidden border-none bg-white shadow-xl transition-all hover:shadow-2xl dark:bg-slate-800">
              <div className="relative h-56 bg-gray-200 dark:bg-slate-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-white/90 text-blue-600">
                    <BookOpen className="w-3 h-3 mr-1" />
                    {project.type ?? "Research"}
                  </Badge>
                </div>
              </div>
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl dark:text-white">
                  <HighlightedText text={project.title} keywords={keywords} />
                </CardTitle>
                <p className="text-blue-600 dark:text-blue-400 font-semibold">
                  <HighlightedText
                    text={project.subtitle}
                    keywords={keywords}
                  />
                </p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                  <HighlightedText
                    text={project.description}
                    keywords={keywords}
                  />
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => {
                    const isMatched = keywords.some((keyword) =>
                      tag.toLowerCase().includes(keyword.toLowerCase()),
                    );
                    return (
                      <Badge
                        key={`${project.title}-${tag}`}
                        variant="secondary"
                        className={`${
                          isMatched
                            ? "bg-gradient-to-r from-yellow-200 to-yellow-300 dark:from-yellow-600 dark:to-yellow-700 text-gray-900 dark:text-white font-bold border-2 border-yellow-400 dark:border-yellow-500"
                            : "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800"
                        }`}
                      >
                        {tag}
                      </Badge>
                    );
                  })}
                </div>
              </CardContent>
              {(project.publication ||
                project.githubUrl ||
                project.websiteUrl) && (
                <CardFooter className="flex flex-col items-start gap-2">
                  {project.publication &&
                    (project.publicationUrl ? (
                      <a
                        href={project.publicationUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                      >
                        <HighlightedText
                          text={project.publication}
                          keywords={keywords}
                        />
                      </a>
                    ) : (
                      <p className="text-sm text-purple-600 dark:text-purple-400">
                        <HighlightedText
                          text={project.publication}
                          keywords={keywords}
                        />
                      </p>
                    ))}
                  {(project.githubUrl || project.websiteUrl) && (
                    <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 hover:text-blue-700 dark:hover:text-blue-300"
                        >
                          <Github className="h-4 w-4" aria-hidden="true" />
                          View GitHub
                        </a>
                      )}
                      {project.githubUrl && project.websiteUrl && (
                        <span className="px-1 text-gray-400 dark:text-gray-500">
                          |
                        </span>
                      )}
                      {project.websiteUrl && (
                        <a
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 hover:text-blue-700 dark:hover:text-blue-300"
                        >
                          <ExternalLink
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                          View Website
                        </a>
                      )}
                    </div>
                  )}
                </CardFooter>
              )}
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl text-white"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Published Research</h3>
          <p className="text-lg mb-2 text-blue-100">
            &quot;Short Comparative Analysis on Pretrained BART and RoBERTa in
            Detecting Hate Speech on YouTube and Reddit Platforms&quot;
          </p>
          <p className="text-blue-200">
            Presented at WiNLP Workshop co-located with EMNLP 2022
          </p>
        </div>
      </motion.div>

      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-12 p-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 rounded-3xl"
      >
        <h3 className="text-2xl font-bold mb-6 text-center dark:text-white">Project Highlights</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">6+</div>
            <p className="text-gray-600 dark:text-gray-400">Major Projects</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">97%</div>
            <p className="text-gray-600 dark:text-gray-400">Best Model Accuracy</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">12+</div>
            <p className="text-gray-600 dark:text-gray-400">ML Algorithms Tested</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">1</div>
            <p className="text-gray-600 dark:text-gray-400">Published Paper</p>
          </div>
        </div>
      </motion.div> */}
    </div>
  </div>
);

export default Projects;
