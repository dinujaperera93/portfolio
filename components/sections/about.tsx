'use client';

import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Users, Zap } from 'lucide-react';

import HighlightedText from '@/components/shared/highlighted-text';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface AboutProps {
  keywords?: string[];
}

const About: FC<AboutProps> = ({ keywords = [] }) => {
  const highlights = [
    {
      icon: Award,
      title: 'UK Global Talent',
      description: 'Endorsed by UK Research and Innovation (UKRI)',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Zap,
      title: 'AI Specialist',
      description: 'Generative AI, LSTM, RNN, and NLP expert',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Cross-functional team experience',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: TrendingUp,
      title: 'Impact Driven',
      description: 'Real-world AI solutions for industry',
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

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
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Transforming Data into Intelligence
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Machine Learning Engineer with a passion for building AI systems that solve real-world problems
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
                <HighlightedText text="AI Researcher & Engineer" keywords={keywords} />
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                <HighlightedText
                  text="With a proven track record in developing machine learning solutions, I help organisations harness data-driven insights to drive strategic decisions and innovation."
                  keywords={keywords}
                />
              </p>
              <div className="space-y-4">
                {highlights.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className={`mt-1 w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        <HighlightedText text={item.description} keywords={keywords} />
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
              <h3 className="text-3xl font-bold mb-6">Core Competencies</h3>
              <ul className="space-y-4 text-blue-50">
                <li>• Generative AI solutions for enterprise</li>
                <li>• Predictive maintenance and time-series analytics</li>
                <li>• NLP pipelines and conversational AI</li>
                <li>• Cloud-native ML deployment strategies</li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
