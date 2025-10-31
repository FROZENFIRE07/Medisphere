import { useState, useEffect } from 'react';
import { Search, MapPin, Filter, Stethoscope } from 'lucide-react';

interface Hospital {
  _id: string;
  name: string;
  location: string;
  specialty: string[];
  website: string;
  logoUrl?: string;
}

export default function FindHospital() {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [filteredHospitals, setFilteredHospitals] = useState<Hospital[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [loading, setLoading] = useState(true);
  const [debounceTimer, setDebounceTimer] = useState<number | null>(null);

  useEffect(() => {
    fetchHospitals();
  }, []);

  useEffect(() => {
    if (debounceTimer !== null) {
      clearTimeout(debounceTimer);
    }
    const timer = setTimeout(() => {
      filterHospitals();
    }, 300);
    setDebounceTimer(timer);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm, location, specialty, hospitals]);

  const fetchHospitals = async () => {
    try {
      setLoading(true);
      // Simulating API call with sample data
      const sampleHospitals: Hospital[] = [
        {
          _id: '1',
          name: 'Kamalnayan Bajaj Hospital',
          location: 'Mumbai, Maharashtra',
          specialty: ['cardiology', 'orthopedics', 'neurology'],
          website: 'https://example.com'
        },
        {
          _id: '2',
          name: 'Apollo Hospitals',
          location: 'Chennai, Tamil Nadu',
          specialty: ['oncology', 'cardiology', 'pediatrics'],
          website: 'https://example.com'
        },
        {
          _id: '3',
          name: 'Fortis Memorial Research Institute',
          location: 'Gurugram, Haryana',
          specialty: ['neurology', 'orthopedics', 'dermatology'],
          website: 'https://example.com'
        },
        {
          _id: '4',
          name: 'Max Super Specialty Hospital',
          location: 'Delhi, NCR',
          specialty: ['cardiology', 'oncology', 'pediatrics'],
          website: 'https://example.com'
        },
        {
          _id: '5',
          name: 'Kokilaben Dhirubhai Ambani Hospital',
          location: 'Mumbai, Maharashtra',
          specialty: ['neurology', 'cardiology', 'orthopedics'],
          website: 'https://example.com'
        },
        {
          _id: '6',
          name: 'Manipal Hospitals',
          location: 'Bangalore, Karnataka',
          specialty: ['pediatrics', 'oncology', 'dermatology'],
          website: 'https://example.com'
        }
      ];
      
      setHospitals(sampleHospitals);
      setFilteredHospitals(sampleHospitals);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching hospitals:', error);
      setLoading(false);
    }
  };

  const filterHospitals = () => {
    let filtered = [...hospitals];
    
    // Enhanced search logic: word-wise and alphabet-wise filtering
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase().trim();
      
      filtered = filtered.filter((h) => {
        const nameLower = h.name.toLowerCase();
        const locationLower = h.location.toLowerCase();
        
        // Check if the search term matches:
        // 1. Start of the full name (alphabet-wise)
        // 2. Start of any word in the name (word-wise)
        // 3. Anywhere in the name (partial match)
        // 4. Location match
        
        const startsWithSearch = nameLower.startsWith(searchLower);
        const wordsInName = nameLower.split(' ');
        const anyWordStartsWith = wordsInName.some(word => word.startsWith(searchLower));
        const containsSearch = nameLower.includes(searchLower);
        const locationMatch = locationLower.includes(searchLower);
        
        return startsWithSearch || anyWordStartsWith || containsSearch || locationMatch;
      });
    }
    
    if (location) {
      filtered = filtered.filter((h) =>
        h.location.toLowerCase().includes(location.toLowerCase())
      );
    }
    
    if (specialty) {
      filtered = filtered.filter((h) =>
        h.specialty.some((s) => s.toLowerCase().includes(specialty.toLowerCase()))
      );
    }
    
    setFilteredHospitals(filtered);
  };

  const specialties = ['cardiology', 'orthopedics', 'oncology', 'neurology', 'pediatrics', 'dermatology'];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Find a Hospital
          </h1>
          <p className="text-gray-600 text-lg">
            Search through our network of elite healthcare institutions
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by hospital name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Filter by location..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>
            <div className="flex-1 relative">
              <Stethoscope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors appearance-none bg-white"
              >
                <option value="">All Specialties</option>
                {specialties.map((spec) => (
                  <option key={spec} value={spec}>
                    {spec.charAt(0).toUpperCase() + spec.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-200 animate-pulse h-64 rounded-2xl" />
            ))}
          </div>
        ) : filteredHospitals.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
              <Filter className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2">No hospitals found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setLocation('');
                setSpecialty('');
              }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHospitals.map((hospital, index) => (
              <div
                key={hospital._id}
                className="bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Stethoscope className="w-16 h-16 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{hospital.name}</h3>
                <p className="text-gray-600 mb-3 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {hospital.location}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {hospital.specialty.slice(0, 2).map((spec, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                  {hospital.specialty.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{hospital.specialty.length - 2} more
                    </span>
                  )}
                </div>
                <a
                  href={hospital.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Visit Website
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
