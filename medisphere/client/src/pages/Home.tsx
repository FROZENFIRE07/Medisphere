import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Search, Stethoscope, Award, TrendingUp, Shield, Globe, MapPin, Link as LinkIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { hospitalAPI } from '../lib/api'; // Make sure this path is correct
import toast from 'react-hot-toast'; // Optional: for success/error messages

export default function Home() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState<any>(null);
  const [featuredHospitals, setFeaturedHospitals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch hospitals on mount
  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const res = await hospitalAPI.getAll();
        const hospitals = res.data || [];
        // Shuffle and take 5
        const shuffled = hospitals.sort(() => 0.5 - Math.random());
        setFeaturedHospitals(shuffled.slice(0, 5));
      } catch (error: any) {
        console.error('Failed to load hospitals:', error);
        toast.error('Failed to load hospitals');
      } finally {
        setLoading(false);
      }
    };
    fetchHospitals();
  }, []);

  const openBookingModal = (hospital: any) => {
    setSelectedHospital(hospital);
    setShowBookingModal(true);
  };

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
                transition: { staggerChildren: 0.3 },
              },
            }}
            className="text-center"
          >
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-heading font-bold mb-6 text-gradient">
              Medisphere
            </motion.h1>
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-4xl font-bold mb-4 text-text">
              Connecting You to World-Class Care
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              A global network of elite healthcare institutions dedicated to your well-being.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/find-hospital" className="btn-gradient inline-flex items-center">
                <Search className="w-5 h-5 mr-2" />
                Find a Doctor Now
              </Link>
              <button
                onClick={() => setShowBookingModal(true)}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-primary border-2 border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book an Appointment
              </button>
            </motion.div>
          </motion.div>
        </div>
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

          {loading ? (
            <div className="text-center py-10">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="mt-2 text-gray-600">Loading hospitals...</p>
            </div>
          ) : featuredHospitals.length === 0 ? (
            <p className="text-center text-gray-500">No hospitals available.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredHospitals.map((hospital, index) => (
                <motion.div
                  key={hospital._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 card-hover group"
                >
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                    {hospital.logoUrl ? (
                      <img
                        src={hospital.logoUrl}
                        alt={hospital.name}
                        className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <Stethoscope className="w-16 h-16 text-primary" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{hospital.name}</h3>
                  <p className="text-gray-600 mb-3 flex items-center text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {hospital.location}
                  </p>
                  <p className="text-sm text-secondary mb-4 line-clamp-2">
                    {hospital.specialty?.join(', ')}
                  </p>
                  <div className="flex gap-2">
                    {hospital.website && (
                      <a
                        href={hospital.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm flex items-center justify-center"
                      >
                        <LinkIcon className="w-4 h-4 mr-1" />
                        Website
                      </a>
                    )}
                    <button
                      onClick={() => openBookingModal(hospital)}
                      className="flex-1 px-3 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all text-sm"
                    >
                      Book Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
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

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass rounded-2xl p-8 max-w-md w-full"
          >
            <h3 className="text-2xl font-bold mb-4">Book Appointment</h3>
            {selectedHospital ? (
              <>
                <p className="text-lg font-semibold mb-2">{selectedHospital.name}</p>
                <p className="text-gray-600 mb-4">{selectedHospital.location}</p>
                <p className="text-sm text-gray-500 mb-6">
                  You are about to book an appointment. Please login to continue.
                </p>
              </>
            ) : (
              <p className="text-gray-600 mb-6">
                Please <Link to="/login" className="text-primary hover:underline">login</Link> or{' '}
                <Link to="/register" className="text-primary hover:underline">register</Link> to book an appointment.
              </p>
            )}
            <div className="flex gap-3">
              <button
                onClick={() => setShowBookingModal(false)}
                className="flex-1 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <Link
                to="/login"
                className="flex-1 text-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Login to Book
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
