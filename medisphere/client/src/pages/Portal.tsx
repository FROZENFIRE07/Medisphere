import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileText, Plus, MessageCircle, Clock, X, Stethoscope, MapPin, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { appointmentAPI, hospitalAPI } from '../lib/api';
import toast from 'react-hot-toast';

interface Appointment {
  _id: string;
  hospitalId: {
    _id: string;
    name: string;
    location: string;
  };
  date: string;
  status: string;
  reason?: string;
}

interface Hospital {
  _id: string;
  name: string;
  location: string;
  specialty?: string[];
  logoUrl?: string;
}

export default function Portal() {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [showNewAppointment, setShowNewAppointment] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    hospitalId: '',
    patientName: '',
    email: '',
    phone: '',
    preferredDate: '',
    notes: '',
  });

  useEffect(() => {
    fetchAppointments();
    fetchHospitals();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await appointmentAPI.getUserAppointments();
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchHospitals = async () => {
    try {
      const response = await hospitalAPI.getAll();
      setHospitals(response.data || []);
    } catch (error) {
      console.error('Error fetching hospitals:', error);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.hospitalId || !formData.patientName || !formData.email || !formData.phone || !formData.preferredDate) {
      toast.error('Please fill in all required fields');
      return;
    }

    setSubmitting(true);
    
    try {
      // Send the hospitalId (MongoDB ObjectId) to backend
      await appointmentAPI.create({
        hospitalId: formData.hospitalId,
        date: formData.preferredDate, // Map preferredDate to date
        notes: formData.notes,         // Pass notes
        // Combine patient info into the 'reason' field
        reason: `Patient: ${formData.patientName}, Email: ${formData.email}, Phone: ${formData.phone}`
      });

      toast.success('Appointment booked successfully!');
      setShowNewAppointment(false);
      fetchAppointments();
      setFormData({ 
        hospitalId: '', 
        patientName: '', 
        email: '', 
        phone: '', 
        preferredDate: '', 
        notes: '' 
      });
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to book appointment');
    } finally {
      setSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowNewAppointment(false);
    setFormData({ 
      hospitalId: '', 
      patientName: '', 
      email: '', 
      phone: '', 
      preferredDate: '', 
      notes: '' 
    });
  };

  const selectedHospital = hospitals.find(h => h._id === formData.hospitalId);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2 text-gradient">
            Welcome, {user?.name}
          </h1>
          <p className="text-gray-600 text-lg">Your personal health dashboard</p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <button
            onClick={() => setShowNewAppointment(true)}
            className="glass rounded-2xl p-6 card-hover text-left group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
              <Plus className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Book Appointment</h3>
            <p className="text-gray-600 text-sm">Schedule a new visit</p>
          </button>

          <div className="glass rounded-2xl p-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Medical Records</h3>
            <p className="text-gray-600 text-sm">View your health history</p>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Messages</h3>
            <p className="text-gray-600 text-sm">Contact your doctor</p>
          </div>
        </motion.div>

        {/* Upcoming Appointments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-2xl p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-primary" />
              Upcoming Appointments
            </h2>
          </div>

          {appointments.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                <Clock className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">No upcoming appointments</h3>
              <p className="text-gray-600 mb-4">Book your first appointment to get started</p>
              <button onClick={() => setShowNewAppointment(true)} className="btn-gradient">
                Book Now
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {appointments.slice(0, 5).map((appointment) => (
                <div
                  key={appointment._id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                >
                  <div>
                    <h3 className="font-bold">{appointment.hospitalId.name}</h3>
                    <p className="text-gray-600 text-sm">{appointment.hospitalId.location}</p>
                    <p className="text-gray-600 text-sm mt-1">
                      {new Date(appointment.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    appointment.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                    appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {appointment.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Enhanced New Appointment Modal */}
        {showNewAppointment && (
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
                  onClick={closeModal}
                  className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    <Stethoscope className="w-4 h-4 inline mr-1" />
                    Select Hospital *
                  </label>
                  <select
                    name="hospitalId"
                    value={formData.hospitalId}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                    required
                  >
                    <option value="">Choose a hospital...</option>
                    {hospitals.map(hospital => (
                      <option key={hospital._id} value={hospital._id}>
                        {hospital.name} - {hospital.location}
                      </option>
                    ))}
                  </select>
                </div>

                {selectedHospital && (
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10">
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
                )}

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    <User className="w-4 h-4 inline mr-1" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="patientName"
                    value={formData.patientName}
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
                    value={formData.email}
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
                    value={formData.phone}
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
                    value={formData.preferredDate}
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
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Any specific concerns or requirements..."
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
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
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

