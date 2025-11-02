import { motion } from 'framer-motion';
import { FileText, Mail, Phone, Globe, Users, Shield, Calendar } from 'lucide-react';
import Footer from '../components/Footer';
import { fadeInUp } from '../utils/animations';

const TermsOfUse = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent" />

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
              Terms of Use
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 mb-4 max-w-3xl mx-auto"
            >
              Bridging Care with Technology – Together.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-sm text-gray-500">
              Last Updated: November 2, 2025
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8" />
              Agreement to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using <strong>Medisphere: Your Health Connect</strong> ("the Platform"), you agree to be bound by these Terms of Use. This Platform is a Community Engagement Project (CEP) created for academic purposes and demonstrates how technology can assist in healthcare discovery.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              If you do not agree, please do not use the Platform.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-6">
              Our Mission
            </h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>Vision:</strong> To demonstrate how digital platforms can simplify access to healthcare information.</p>
              <p><strong>Mission:</strong> To provide a prototype system showcasing how hospitals can be listed and discovered through a single interface.</p>
              <p><strong>Guiding Principle:</strong> This CEP project is intended for academic demonstration and real world use.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-6">
              Services Demonstrated
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[{ icon: Globe, text: "Browse sample hospital listings" },
                { icon: Calendar, text: "Prototype appointment UI" },
                { icon: Users, text: "Demonstration of patient portal concept" },
                { icon: Shield, text: "Mock review display feature" }] // placeholder data
                .map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-3xl p-8 md:p-10 bg-gradient-to-br from-primary/5 to-secondary/5"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-6">
              Sample Hospital Listings (For Demonstration)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-700">
                <thead className="text-xs uppercase bg-primary/10">
                  <tr>
                    <th className="px-4 py-3">Hospital</th>
                    <th className="px-4 py-3">Location</th>
                    <th className="px-4 py-3">Specialty</th>
                    <th className="px-4 py-3">Website</th>
                  </tr>
                </thead>
                <tbody>
                  {[{ name: "City Care Hospital", loc: "Maharashtra", spec: "General Medicine", link: "#" },
                    { name: "GreenLife Clinic", loc: "Maharashtra", spec: "Orthopedics", link: "#" },
                    { name: "WellNest Hospital", loc: "Maharashtra", spec: "Pediatrics", link: "#" }]
                    .map((h, i) => (
                      <tr key={i} className="border-b">
                        <td className="px-4 py-3 font-medium">{h.name}</td>
                        <td className="px-4 py-3">{h.loc}</td>
                        <td className="px-4 py-3">{h.spec}</td>
                        <td className="px-4 py-3">
                          <span className="text-primary text-xs">Demo</span>
                        </td>
                      </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-6">
              Your Responsibilities
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">Provide accurate information when interacting with prototype features.</li>
              <li className="flex items-start gap-3">Use this platform ethically within the campus environment.</li>
              <li className="flex items-start gap-3">Although this is a student-developed platform, it is engineered to function as a professional, real-world web application. It must not be considered a substitute for licensed medical systems.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass rounded-3xl p-8 md:p-10 bg-amber-50 border border-amber-200"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-6">
              Important Notice
            </h2>
            <p className="text-amber-800">
              Medisphere is an academic demonstration platform developed as part of a Community Engagement Project (CEP). It does not provide professional medical services, diagnosis, or treatment.
            </p>
            <p className="text-amber-800 mt-4">
              Always consult licensed healthcare providers for real medical concerns.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-6">
              Contact (Academic Only)
            </h2>
            <div className="space-y-4">
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
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;
