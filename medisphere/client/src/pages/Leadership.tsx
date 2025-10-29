import { motion } from 'framer-motion';
import { Linkedin, Quote } from 'lucide-react';

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Sarah Mitchell',
    title: 'Chief Medical Officer',
    bio: 'Leading our medical excellence initiative with 25+ years of experience in patient care and medical innovation.',
    linkedin: '#',
  },
  {
    name: 'James Chen',
    title: 'Chief Technology Officer',
    bio: 'Transforming healthcare through digital innovation and data-driven decision making.',
    linkedin: '#',
  },
  {
    name: 'Dr. Emma Rodriguez',
    title: 'Director of Global Partnerships',
    bio: 'Building strategic alliances with world-class medical institutions across the globe.',
    linkedin: '#',
  },
  {
    name: 'Michael Thompson',
    title: 'Chief Operating Officer',
    bio: 'Ensuring operational excellence and seamless patient experiences across our network.',
    linkedin: '#',
  },
  {
    name: 'Dr. Priya Sharma',
    title: 'Chief Quality Officer',
    bio: 'Dedicated to maintaining the highest standards of patient safety and care quality.',
    linkedin: '#',
  },
  {
    name: 'Alexandra Williams',
    title: 'Chief Patient Experience Officer',
    bio: 'Advocating for patient-centric care and exceptional service delivery.',
    linkedin: '#',
  },
];

const quote = "Our greatest achievement is not in healing bodies, but in restoring hope and dignity to every patient we serve.";

export default function Leadership() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient">
            Our Leadership Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the visionaries and experts driving Medisphere's mission
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 card-hover text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary relative">
                <div className="absolute inset-0 bg-white rounded-full m-1" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-secondary rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-secondary font-semibold mb-3">{member.title}</p>
              <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
              <a
                href={member.linkedin}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Guiding Principle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          <Quote className="w-12 h-12 text-primary mb-4" />
          <blockquote className="text-2xl md:text-3xl font-heading font-bold text-gray-800 mb-6 italic">
            "{quote}"
          </blockquote>
          <p className="text-gray-600 font-semibold">— Medisphere Leadership Team</p>
        </motion.div>
      </div>
    </div>
  );
}

