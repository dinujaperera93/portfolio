'use client';

import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'dinujakdr@gmail.com',
    link: 'mailto:dinujakdr@gmail.com',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/dinuja-perera',
    link: 'https://www.linkedin.com/in/dinuja-perera/',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Nottingham, UK',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+44 7307138797',
    link: 'tel:+447307138797',
    color: 'from-indigo-500 to-indigo-600',
  },
] as const;

const Contact: FC = () => (
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
          Get In Touch
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Let&apos;s Work Together
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          I&apos;m always open to discussing new opportunities, collaborations, or innovative projects
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          {contactDetails.map((contact, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {contact.link ? (
                <a href={contact.link} target="_blank" rel="noopener noreferrer">
                  <Card className="p-6 border-none shadow-lg hover:shadow-2xl transition-all cursor-pointer group dark:bg-slate-800">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <contact.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{contact.label}</p>
                        <p className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  </Card>
                </a>
              ) : (
                <Card className="p-6 border-none shadow-lg dark:bg-slate-800">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center`}>
                      <contact.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{contact.label}</p>
                      <p className="font-semibold text-gray-900 dark:text-gray-100">{contact.value}</p>
                    </div>
                  </div>
                </Card>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <Card className="p-8 border-none shadow-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white h-full flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Connect?</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              I&apos;m currently available for freelance projects, consulting opportunities, or full-time positions in Machine Learning and AI.
            </p>
            <div className="space-y-3">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">✓ Full UK Work Rights</Badge>
              <Badge className="bg-white/20 text-white border-white/30 mb-4">✓ Open to Relocation</Badge>
              <Badge className="bg-white/20 text-white border-white/30 mb-4">✓ No Sponsorship Required</Badge>
            </div>
            <div className="mt-8 space-y-3">
              <Button className="w-full bg-white text-blue-600 hover:bg-blue-50" size="lg" onClick={() => (window.location.href = 'mailto:dinujakdr@gmail.com')}>
                <Send className="w-4 h-4 mr-2" />
                Send an Email
              </Button>
              <Button variant="outline" className="w-full border-white text-white hover:bg-white/10" size="lg" onClick={() => window.open('https://www.linkedin.com/in/dinuja-perera/', '_blank')}>
                <Linkedin className="w-4 h-4 mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center p-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950 rounded-3xl"
      >
        <h3 className="text-2xl font-bold mb-4 dark:text-white">Looking for Collaboration?</h3>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          I&apos;m particularly interested in projects involving Generative AI, Predictive Maintenance, NLP, and Time-Series Analysis. Let&apos;s discuss how we can work together to build innovative AI solutions.
        </p>
      </motion.div>
    </div>
  </div>
);

export default Contact;
