import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Search, Stethoscope, Award, TrendingUp, Shield, Globe } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  const featuredHospitals = [
    {
      name: "Dr. Hedgewar Hospital",
      location: "Chh.Sambhajinagar, Maharashtra",
      specialty: "super-specialty services",
      link: "https://www.hedgewar.org/",
    },
    {
      name: "Medicover Hospital",
      location: "Chh.Sambhajinagar, Maharashtra",
      specialty: "super-specialty services",
      link: "https://www.medicoverhospitals.in/hospitals/maharashtra/aurangabad/",
    },
    {
      name: "Seth Nandlal Dhoot Hospital",
      location: "Chh.Sambhajinagar, Maharashtra",
      specialty: "super-specialty services",
      link: "https://dhoothospitals.com/",
    },
    {
      name: "Kamalnayan Bajaj Hospital",
      location: "Chh.Sambhajinagar, Maharashtra",
      specialty: "super-specialty services",
      link: "https://bajajhospital.com/",
    },
    {
      name: "United Ciigma Hospital",
      location: "Chh.Sambhajinagar, Maharashtra",
      specialty: "super-specialty services",
      link: "https://www.ciigmagroup.org/",
    },
  ];

  const statistics = [
    {
      icon: Globe,
      title: "Internationally accredited hospitals",
      value: "25+",
      description: "Trusted globally",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Cutting-edge treatments & trials",
      value: "50,000+",
      description: "Specialists worldwide",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Shield,
      title: "One portal, seamless care",
      value: "1M+",
      description: "Patients served",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
            className="text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-heading font-bold mb-6 text-gradient"
            >
              Medisphere
            </motion.h1>
            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-4xl font-bold mb-4 text-text"
            >
              Connecting You to World-Class Care
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              A global network of elite healthcare institutions dedicated to your well-being.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/find-hospital" className="btn-gradient">
                <Search className="w-5 h-5 mr-2" />
                Find a Doctor Now
              </Link>
              <button
                onClick={() => setShowAppointmentModal(true)}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-primary border-2 border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book an Appointment
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Hospitals */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">
              Featured Hospitals
            </h2>
            <p className="text-gray-600 text-lg">
              World-class medical facilities at your service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredHospitals.map((hospital, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 card-hover group"
              >
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Stethoscope className="w-16 h-16 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{hospital.name}</h3>
                <p className="text-gray-600 mb-3 flex items-center">
                  <span className="mr-2">📍</span>
                  {hospital.location}
                </p>
                <p className="text-sm text-secondary mb-4">{hospital.specialty}</p>
                <a
                  href={hospital.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Visit Website
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Medisphere */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">
              Why Choose Medisphere?
            </h2>
            <p className="text-gray-600 text-lg">
              Excellence in every aspect of healthcare
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-8 card-hover text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gradient mb-2">{stat.value}</h3>
                <p className="text-lg font-semibold mb-2">{stat.title}</p>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Modal */}
      {showAppointmentModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass rounded-2xl p-8 max-w-md w-full"
          >
            <h3 className="text-2xl font-bold mb-4">Book an Appointment</h3>
            <p className="text-gray-600 mb-6">
              Please <Link to="/login" className="text-primary hover:underline">login</Link> or <Link to="/register" className="text-primary hover:underline">register</Link> to book an appointment.
            </p>
            <button
              onClick={() => setShowAppointmentModal(false)}
              className="w-full px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}

