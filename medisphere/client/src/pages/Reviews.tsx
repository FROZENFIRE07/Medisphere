import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Play, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "After being turned away from multiple hospitals, Medisphere connected me with a specialist who saved my life. The care was exceptional, and I'm forever grateful.",
    author: "Sarah M.",
    hospital: "Global Heart Institute",
    rating: 5,
  },
  {
    quote: "The nurses and doctors were incredibly professional and compassionate. The entire experience exceeded all my expectations.",
    author: "James P.",
    hospital: "Apex Cancer Center",
    rating: 5,
  },
  {
    quote: "Booking an appointment and transferring my old X-rays was seamless. I appreciated the transparency and efficiency throughout.",
    author: "Chandra K.",
    hospital: "Zenith Orthopedics",
    rating: 5,
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-6 h-6 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient">
            Patient Reviews
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-2">
            {renderStars(5)}
          </div>
          <p className="text-4xl font-bold text-gradient">4.8/5.0</p>
          <p className="text-gray-600 mt-2">Based on 10,000+ patient reviews</p>
        </motion.div>

        {/* Featured Testimonials */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="glass rounded-2xl p-8 md:p-12"
            >
              <div className="flex items-center justify-center mb-6">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-800 mb-6 font-medium italic leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-lg">{testimonials[currentIndex].author}</p>
                  <p className="text-gray-600">{testimonials[currentIndex].hospital}</p>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass rounded-2xl overflow-hidden card-hover group cursor-pointer">
            <div className="relative h-64 md:h-96 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <button
                onClick={() => setShowVideoModal(true)}
                className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-all group-hover:scale-110"
              >
                <Play className="w-8 h-8 text-primary ml-1" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white font-semibold text-lg">Watch Maria's Recovery Story</p>
                <p className="text-white/80 text-sm">Hear from our patients about their journey</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="btn-gradient inline-flex items-center">
            <MessageCircle className="w-5 h-5 mr-2" />
            Share Your Experience
          </button>
        </motion.div>

        {/* Video Modal */}
        {showVideoModal && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300"
              >
                Close
              </button>
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Patient Recovery Story"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

