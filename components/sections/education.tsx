'use client';

import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Cpu, ExternalLink, Star, Trophy } from 'lucide-react';

import HighlightedText from '@/components/shared/highlighted-text';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface EducationProps {
  keywords?: string[];
}

const educationHistory = [
  {
    degree: 'MSc Data Science',
    grade: 'Distinction',
    institution: 'University of Greenwich, London',
    period: '2023 – 2024',
    description:
      'Key Modules: Machine Learning, Applied Machine Learning, Data Visualisation, Statistical Methods for Time Series Analysis, Graph and Modern Databases, Big Data, Blockchain for FinTech Applications.',
    highlights: [
      'Completed projects involving comparative model evaluation (regression, classification, neural networks)',
      'Advanced clustering analysis and optimisation of models for diverse datasets',
      'Specialised in time series forecasting and big data processing',
    ],
    icon: '🎓',
    color: 'from-blue-500 to-blue-600',
  },
  {
    degree: 'MSc specialising in Data Science, Analytics and Engineering',
    institution: 'University of Moratuwa, Sri Lanka',
    period: '2021',
    description:
      'Key Modules: Machine Learning, Pattern Recognition, Data Mining, Data Analytics, Advanced Databases, Business Intelligence, Neural Networks, Advanced Algorithms, Statistical Inference, Bioinformatics.',
    highlights: [
      'Focus on advanced machine learning algorithms and neural network architectures',
      'Research in pattern recognition and data mining techniques',
      'Comprehensive study of business intelligence and database systems',
    ],
    icon: '🔬',
    color: 'from-purple-500 to-purple-600',
  },
  {
    degree: 'Grad. Dip. in Electronics Telecommunication & Computer Engineering',
    grade: 'Distinction (GPA 3.75/4.20)',
    institution: 'Institution of Engineers, Sri Lanka',
    period: '2020',
    description: 'Key modules including Digital Signal Processing, Computer Security, Computer Networks, and Communication Engineering.',
    highlights: [
      'Implemented an IoT-based Air Quality Monitoring System for remote Greenhouse',
      'Utilised GSM modules, microcontrollers, and sensors',
      'Strong foundation in telecommunications and embedded systems',
    ],
    icon: Cpu,
    color: 'from-pink-500 to-pink-600',
  },
  {
    degree: 'BSc (Electronics & IT)',
    grade: 'Second Class Honours (GPA 3.24/4.00)',
    institution: 'University of Colombo, Sri Lanka',
    period: '2015-2019',
    description: 'Key modules including Applied Mathematics, Statistics, Computer Science, and Physics.',
    highlights: [
      'Comprehensive foundation in electronics and information technology',
      'Strong mathematical and statistical background',
      'Practical experience in computer science applications',
    ],
    icon: '💻',
    color: 'from-indigo-500 to-indigo-600',
  },
] as const;

const certifications = [
  {
    title: 'Introduction to Large Language Models',
    issuer: 'Google Cloud',
    category: 'Technical',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/V7R0CGMIXDV0',
  },
  {
    title: 'DeepLearning.AI TensorFlow Developer Specialization',
    issuer: 'DeepLearning.AI',
    category: 'Technical',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/specialization/CZPIMWXPCSW5',
  },
  {
    title: 'Natural Language Processing in TensorFlow',
    issuer: 'DeepLearning.AI',
    category: 'Technical',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/verify/LY882WRHMCPU',
  },
  {
    title: 'Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning',
    issuer: 'DeepLearning.AI',
    category: 'Technical',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/51UFSYCXKR4J',
  },
  {
    title: 'Convolutional Neural Networks in TensorFlow',
    issuer: 'DeepLearning.AI',
    category: 'Technical',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/PQQ7NMAXPXAG',
  },
  {
    title: 'Sequences, Time Series and Prediction',
    issuer: 'DeepLearning.AI',
    category: 'Technical',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/7RQNK51PO41V',
  },
  {
    title: 'Improving your Statistical Inferences',
    issuer: 'Eindhoven University of Technology',
    category: 'Technical',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/LMJI0W969KHG',
  },
  {
    title: 'Improving Your Statistical Questions',
    issuer: 'Eindhoven University of Technology',
    category: 'Technical',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/6GGN9RDGO33L',
  },
  {
    title: 'Leadership & Management Development Programme',
    issuer: 'Ashorne Hill Management College',
    category: 'Leadership',
    credentialUrl:
      'https://www.linkedin.com/in/dinuja-perera/overlay/Certifications/1700553887/treasury?profileId=ACoAABWgzJUBfucuc3Asv13KRe87vpbYo5OLWK0',
  },
  {
    title: 'Knowledge Transfer Partnership Associate',
    issuer: 'Innovate UK',
    category: 'Industry',
  },
  {
    title: 'British Airways - Data Science Job Simulation',
    issuer: 'Forage',
    category: 'Industry',
    credentialUrl:
      'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/British%20Airways/NjynCWzGSaWXQCxSX_British%20Airways_NcCmkqNi2obQmzsZa_1712446000711_completion_certificate.pdf',
  },
  {
    title: 'Amazon Web Services Machine Learning Essential Training',
    issuer: 'LinkedIn',
    category: 'Technical',
    credentialUrl:
      'https://www.linkedin.com/learning/certificates/8f2c5cdb5e35f3559e2971b8784d76dc002d8cd6863ed4e145b1bbaf1d7f2796?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B9KzYwmCkTIiRXOpMYtLhNQ%3D%3D',
  },
  {
    title: 'Python Practice: Object-Oriented Programming',
    issuer: 'LinkedIn',
    category: 'Technical',
    credentialUrl:
      'https://www.linkedin.com/learning/certificates/cdc9e826f74c801ffeba421bc42740fcee93e45671d57de05bc0fc02a185c16b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B9KzYwmCkTIiRXOpMYtLhNQ%3D%3D',
  },
  {
    title: 'Advanced NLP',
    issuer: 'LinkedIn Learning',
    category: 'Technical',
  },
  {
    title: 'PySpark for Big Data',
    issuer: 'LinkedIn Learning',
    category: 'Technical',
  },
  {
    title: 'Azure DevOps Fundamentals',
    issuer: 'LinkedIn Learning',
    category: 'Technical',
  },
  {
    title: 'Generative AI Foundations',
    issuer: 'LinkedIn Learning',
    category: 'Technical',
  },
] as const;

const certificationStyles: Record<
  (typeof certifications)[number]['category'],
  { badge: string; panel: string; text: string }
> = {
  Leadership: {
    badge: 'bg-gradient-to-r from-amber-400 to-amber-500 text-amber-900 shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.15)]',
    panel: 'bg-white/70 dark:bg-white/5 border border-white/40 dark:border-white/10',
    text: 'text-slate-700 dark:text-slate-200',
  },
  Industry: {
    badge: 'bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.25)]',
    panel: 'bg-white/70 dark:bg-white/5 border border-white/40 dark:border-white/10',
    text: 'text-slate-700 dark:text-slate-200',
  },
  Technical: {
    badge: 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.2)]',
    panel: 'bg-white/70 dark:bg-white/5 border border-white/40 dark:border-white/10',
    text: 'text-slate-700 dark:text-slate-200',
  },
};

const certificationCategoryOrder = ['Industry', 'Technical', 'Leadership'] as const;

const achievements = [
  {
    icon: Trophy,
    title: 'Tier 1 Global Talent Visa',
    description: 'Endorsed by UK Research and Innovation (UKRI)',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Star,
    title: 'Published Research',
    description: 'Presented at WiNLP Workshop co-located with EMNLP 2022',
    color: 'from-blue-500 to-purple-500',
  },
  {
    icon: Award,
    title: 'Multiple Distinctions',
    description: 'Achieved distinction grades in MSc Data Science and Graduate Diploma',
    color: 'from-green-500 to-emerald-500',
  },
] as const;

const Education: FC<EducationProps> = ({ keywords = [] }) => (
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
          Academic Excellence
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Building a strong foundation in data science and machine learning through rigorous academic training
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
                <h3 className="text-lg font-bold dark:text-white">{achievement.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{achievement.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mb-16 space-y-6">
        {educationHistory.map((edu, index) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="border-none shadow-xl hover:shadow-2xl transition-all overflow-hidden dark:bg-slate-800 pb-4">
              <div className={`h-2 bg-gradient-to-r ${edu.color}`} />
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-slate-100 text-slate-700 shadow-md dark:from-slate-700 dark:to-slate-800 dark:text-slate-100">
                    {typeof edu.icon === 'string' ? (
                      <span className="text-4xl">{edu.icon}</span>
                    ) : (
                      <edu.icon className="h-7 w-7" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <CardTitle className="text-2xl dark:text-white">
                        <HighlightedText text={edu.degree} keywords={keywords} />
                      </CardTitle>
                      <Badge className="bg-gray-100 text-gray-700 border-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">
                        {edu.period}
                      </Badge>
                    </div>
                    {edu.grade && (
                      <Badge className="mb-2 bg-green-100 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800">
                        <Award className="w-3 h-3 mr-1" />
                        {edu.grade}
                      </Badge>
                    )}
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-3">{edu.institution}</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      <HighlightedText text={edu.description} keywords={keywords} />
                    </p>
                    <div className="space-y-2">
                      {edu.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-2">
                          <span className="text-blue-500 dark:text-blue-400 mt-1.5 flex-shrink-0">●</span>
                          <span className="text-gray-700 dark:text-gray-300">
                            <HighlightedText text={highlight} keywords={keywords} />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>

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
                    Recent certifications across machine learning, generative AI, statistics, industry simulations, and leadership development.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 self-start lg:self-auto">
                {certificationCategoryOrder.map((category) => {
                  const total = certifications.filter((certificate) => certificate.category === category).length;

                  return (
                    <div
                      key={category}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-center dark:border-slate-700 dark:bg-slate-800"
                    >
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">{total}</p>
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
            <div className="space-y-6">
              {certificationCategoryOrder.map((category) => {
                const groupedCertifications = certifications.filter(
                  (certificate) => certificate.category === category,
                );

                if (groupedCertifications.length === 0) {
                  return null;
                }

                return (
                  <div key={category}>
                    <div className="mb-4 flex items-center gap-3">
                      <Badge
                        className={`${certificationStyles[category].badge} px-3 py-1 text-xs font-semibold uppercase tracking-wider`}
                      >
                        {category}
                      </Badge>
                      <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {groupedCertifications.length} certifications
                      </p>
                    </div>
                    <div className="grid gap-3 md:grid-cols-2">
                      {groupedCertifications.map((certificate) => {
                        const style = certificationStyles[certificate.category];
                        return (
                          <div
                            key={certificate.title}
                            className={`rounded-3xl px-5 py-4 transition-all ${style.panel} hover:-translate-y-0.5 hover:shadow-lg`}
                          >
                            <div className="mb-2 flex items-center justify-between gap-3">
                              <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
                                Certification
                              </span>
                              {certificate.credentialUrl && (
                                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-300">
                                  Verifiable
                                </span>
                              )}
                            </div>
                            <h4 className={`text-lg font-semibold leading-tight ${style.text}`}>
                              <HighlightedText text={certificate.title} keywords={keywords} />
                            </h4>
                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                              <HighlightedText text={certificate.issuer} keywords={keywords} />
                            </p>
                            {certificate.credentialUrl && (
                              <a
                                href={certificate.credentialUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:bg-slate-700 dark:hover:text-blue-300"
                              >
                                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                                Show credential
                              </a>
                            )}
                          </div>
                        );
                      })}
                    </div>
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

export default Education;
