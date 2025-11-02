import { motion } from 'framer-motion';
import { Shield, Mail, Phone, Calendar, Info } from 'lucide-react';              
import { fadeInUp } from '../utils/animations';          // optional – see below

const PrivacyPolicy = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* ────────────────────── HERO (same as Home) ────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"
               style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-heading font-bold mb-6 text-gradient"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 mb-4 max-w-3xl mx-auto"
            >
              Your trust is at the heart of everything we do.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-sm text-gray-500"
            >
              Last Updated: November 2, 2025
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ────────────────────── CONTENT ────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">

          {/* 1. Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8" />
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Medisphere Health Network, Medisphere is a prototype built for educational purposes.
              This privacy statement explains how we plan to handle personal data when the platform is fully operational.
            </p>
          </motion.div>

          {/* 2. Information We Plan to Collect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-6">
              Information We Plan to Collect
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span><strong>Contact data</strong> – name, email, phone (for appointment booking).</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span><strong>Health data</strong> – medical history, appointments (only with explicit consent).</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span><strong>Technical data</strong> – IP address, browser type (anonymised for analytics).</span>
              </li>
            </ul>
          </motion.div>

          {/* 3. How We Plan to Use It */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-6">
              How We Plan to Use Your Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Schedule appointments",
                "Connect you with network hospitals",
                "Send reminders & updates",
                "Improve platform features",
                "Ensure security",
                "Comply with future legal standards"
              ].map((txt, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700">{txt}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 4. Sharing & Security (aspirational) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-3xl p-8 md:p-10 bg-gradient-to-br from-primary/5 to-secondary/5"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-6">
              Sharing & Security (Future Plans)
            </h2>
            <p className="text-gray-700 mb-4">
              In a production system we would:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Share data only with affiliated hospitals (with consent).</li>
              <li>• Use industry-standard encryption (AES-256) for data at rest and in transit.</li>
              <li>• Perform regular security audits.</li>
              <li>• Host on HIPAA-eligible infrastructure (e.g., AWS with a BAA).</li>
            </ul>
          </motion.div>

          {/* 5. Your Rights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-6">
              Your Rights
            </h2>
            <p className="text-gray-700">
              When the platform is live you will be able to request access, correction, or deletion of your data.
            </p>
            <div className="mt-6 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl">
              <p className="font-semibold mb-2">Contact</p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> 
                  <a href="mailto:dipakaghade1185@gmail.com">
                  info@OurTeam.com
                </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> 
                  <a href="tel:+919766158419">
                  Emergency: +MEDISPH
                </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* 6. Disclaimer (IMPORTANT for ethics) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass rounded-3xl p-8 md:p-10 bg-amber-50 border border-amber-200"
          >
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-amber-900 mb-2">Prototype Disclaimer</h3>
                <p className="text-amber-800">
                  This website is a student project built for academic demonstration and real world use. It is not intended and will not use data irresponsibly. The security and compliance statements above describe intended production features, not current capabilities.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ONE FOOTER – shared across the whole app */}
    </div>
  );
};

export default PrivacyPolicy;