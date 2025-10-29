import { motion } from 'framer-motion';
import { Target, Eye, Users, Award, Shield } from 'lucide-react';

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
          }}
          className="text-center mb-16"
        >
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient">
            About Medisphere
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming healthcare through innovation, compassion, and excellence
          </motion.p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be the world's most trusted healthcare network, where every patient receives 
              personalized, world-class medical care regardless of location. We envision a 
              future where healthcare barriers are eliminated and quality medical services 
              are accessible to all.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-emerald-500 rounded-2xl flex items-center justify-center mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To connect patients with the finest medical professionals and institutions 
              worldwide. Through our global network, we deliver comprehensive healthcare 
              solutions that prioritize patient safety, innovation, and outcomes while 
              maintaining the highest standards of medical excellence.
            </p>
          </motion.div>
        </div>

        {/* Network Scale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Our Network Scale</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Users, value: '50,000+', label: 'Specialists', color: 'from-blue-500 to-cyan-500' },
              { icon: Award, value: '25+', label: 'Hospitals', color: 'from-green-500 to-emerald-500' },
              { icon: Shield, value: '10+', label: 'Countries', color: 'from-purple-500 to-pink-500' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gradient mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Patient Safety */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Patient Safety Commitment</h2>
          <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-8">
            Your safety and well-being are our highest priorities. We maintain rigorous standards 
            across our network to ensure every interaction meets the most demanding healthcare quality metrics.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'JCI Accredited Facilities',
              'Hippocratic Oath Compliance',
              'Continuous Quality Improvement',
              'Evidence-Based Medicine Standards',
              'HIPAA & GDPR Compliance',
              '24/7 Patient Support',
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="#" className="text-primary hover:underline font-semibold">
              View Corporate Governance →
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

