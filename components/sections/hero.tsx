'use client';

import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Award, ChevronDown, MapPin, Sparkles } from 'lucide-react';

import HighlightedText from '@/components/shared/highlighted-text';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
  keywords?: string[];
}

const Hero: FC<HeroProps> = ({ scrollToSection, keywords = [] }) => (
  <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    <div className="absolute inset-0 z-0">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/10 to-purple-400/10 dark:from-blue-600/5 dark:to-purple-600/5 rounded-full blur-3xl" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
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
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Dinuja Perera
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <HighlightedText text="Machine Learning Engineer" keywords={keywords} />
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <HighlightedText
              text="I am interested in working with machine learning and data science teams on real-world projects. My focus areas include deep learning, NLP with transformer-based models, and time-series analysis. I am particularly looking for opportunities where models are developed, deployed, and maintained in production environments."
              keywords={keywords}
            />
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Badge variant="outline" className="px-4 py-2 text-base border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300">
              <MapPin className="w-4 h-4 mr-2" />
              Nottingham, UK
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-base border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-950 dark:text-purple-300">
              <Award className="w-4 h-4 mr-2" />
              Tier 1 Global Talent Visa
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
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all"
            >
              Let&apos;s Connect
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('experience')}
              className="border-gray-300 dark:border-gray-600 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 dark:text-gray-300"
            >
              View My Work
            </Button>
          </motion.div>
        </motion.div>

        <motion.div className="relative" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800 rounded-3xl opacity-20 dark:opacity-10 blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-800 rounded-3xl opacity-20 dark:opacity-10 blur-2xl" />

            <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80"
                alt="AI and Machine Learning"
                className="w-full h-80 object-cover rounded-2xl mb-6"
              />
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-xl">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">Experience</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">2+ Years</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-xl">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">Specialisation</span>
                  <span className="text-purple-600 dark:text-purple-400 font-bold">Generative AI</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-50 to-blue-50 dark:from-pink-950 dark:to-blue-950 rounded-xl">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">Research</span>
                  <span className="text-pink-600 dark:text-pink-400 font-bold">NLP & ML</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
      onClick={() => scrollToSection('about')}
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <ChevronDown className="w-8 h-8 text-gray-400 dark:text-gray-500" />
    </motion.div>
  </div>
);

export default Hero;
