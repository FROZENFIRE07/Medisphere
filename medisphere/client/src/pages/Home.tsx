import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Search, Stethoscope, Award, TrendingUp, Shield, Globe, MapPin, Link as LinkIcon, X, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';
import { hospitalAPI } from '../lib/api';
import toast from 'react-hot-toast';

export default function Home() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState<any>(null);
  const [featuredHospitals, setFeaturedHospitals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [bookingData, setBookingData] = useState({
    patientName: '',
    email: '',
    phone: '',
    preferredDate: '',
    notes: ''
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const res = await hospitalAPI.getAll();
        const hospitals = res.data || [];
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
    setBookingData({
      patientName: '',
      email: '',
      phone: '',
      preferredDate: '',
      notes: ''
    });
  };

  const closeBookingModal = () => {
    setShowBookingModal(false);
    setSelectedHospital(null);
    setBookingData({
      patientName: '',
      email: '',
      phone: '',
      preferredDate: '',
      notes: ''
    });
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitBooking = async (e: any) => {
    e.preventDefault();
    
    if (!selectedHospital) {
      toast.error('Please select a hospital');
      return;
    }

    if (!bookingData.patientName || !bookingData.email || !bookingData.phone || !bookingData.preferredDate) {
      toast.error('Please fill in all required fields');
      return;
    }

    setSubmitting(true);
    
    try {
      // CRITICAL FIX: Send hospital._id instead of hospital name
      const appointmentData = {
        hospitalId: selectedHospital._id, // Using the MongoDB ObjectId
        patientName: bookingData.patientName,
        email: bookingData.email,
        phone: bookingData.phone,
        preferredDate: bookingData.preferredDate,
        notes: bookingData.notes
      };

      // Replace with your actual appointment API call
      // await appointmentAPI.create(appointmentData);
      
      console.log('Appointment data:', appointmentData);
      toast.success('Appointment request submitted successfully!');
      closeBookingModal();
    } catch (error: any) {
      console.error('Failed to submit appointment:', error);
      toast.error(error.response?.data?.message || 'Failed to submit appointment');
    } finally {
      setSubmitting(false);
    }
  };

  const statistics = [
    {
      icon: Globe,
      title: "Connecting community with trusted hospital information",
      value: "25+",
      description: "bestt hospitals at your fingertips",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Cutting-edge treatments & trials",
      value: "50,000+",
      description: "verified data reflecting real progress",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Shield,
      title: "committed to safe, reliable medical care",
      value: "1M+",
      description: "authentic details you can trust",
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
                Find a Hospital Now
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

      {/* Enhanced Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="glass rounded-3xl p-8 max-w-lg w-full shadow-2xl border border-white/20 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gradient">Book Appointment</h3>
                  <p className="text-sm text-gray-500">Schedule your visit</p>
                </div>
              </div>
              <button
                onClick={closeBookingModal}
                className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {selectedHospital ? (
              <>
                <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                      <Stethoscope className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-1">{selectedHospital.name}</h4>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {selectedHospital.location}
                      </p>
                      {selectedHospital.specialty && (
                        <p className="text-xs text-secondary mt-1">
                          {selectedHospital.specialty.slice(0, 2).join(' • ')}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      <User className="w-4 h-4 inline mr-1" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="patientName"
                      value={bookingData.patientName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      <Mail className="w-4 h-4 inline mr-1" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={bookingData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      <Phone className="w-4 h-4 inline mr-1" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={bookingData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                      placeholder="+1 (555) 000-0000"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={bookingData.preferredDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      <MessageSquare className="w-4 h-4 inline mr-1" />
                      Additional Notes
                    </label>
                    <textarea
                      name="notes"
                      value={bookingData.notes}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Any specific concerns or requirements..."
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={closeBookingModal}
                      className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleSubmitBooking}
                      disabled={submitting}
                      className="flex-1 px-4 py-3 btn-gradient text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4" />
                          Confirm Booking
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="text-center py-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Calendar className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-gray-600 mb-6">
                    Please login to your account to book an appointment and access our healthcare services.
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={closeBookingModal}
                    className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-semibold"
                  >
                    Cancel
                  </button>
                  <Link
                    to="/login"
                    className="flex-1 text-center px-4 py-3 btn-gradient text-white rounded-xl font-semibold"
                  >
                    Login to Continue
                  </Link>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}

