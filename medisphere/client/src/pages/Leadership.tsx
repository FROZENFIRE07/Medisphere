import { Linkedin, Quote } from 'lucide-react';

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  linkedin?: string;
  imageUrl?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Atharv Avdhal',
    title: 'Research and Project lead',
    bio: 'Guiding our team\'s research efforts and overseeing project development from concept to completion.',
    linkedin: '#',
    imageUrl: 'https://res.cloudinary.com/dvcuqjcr2/image/upload/v1761935459/atharv_z9ocsc.jpg' // Add image URL here
  },
  {
    name: 'Dipak Aghade',
    title: 'Developer and Project lead',
    bio: 'Spearheading our project\'s technical development and leading the team\'s coding initiatives.',
    linkedin: '#',
    imageUrl: 'https://res.cloudinary.com/dvcuqjcr2/image/upload/v1761935899/me_uu3neh.jpg' // Add image URL here
  },
  {
    name: 'Vijay Adave',
    title: 'Research and Information',
    bio: 'Responsible for gathering and analyzing critical information to support our research goals.',
    linkedin: '#',
    imageUrl: 'https://res.cloudinary.com/dvcuqjcr2/image/upload/v1761935532/vjay_h9cgn6.jpg' // Add image URL here
  },
  {
    name: 'Abhang Bahadure',
    title: 'Documentation',
    bio: 'Tasked with clearly documenting our project\'s processes, findings, and technical specifications.',
    linkedin: '#',
    imageUrl: 'https://res.cloudinary.com/dvcuqjcr2/image/upload/v1761934919/abhang_nksyml.jpg' // Add image URL here
  },
  {
    name: 'Aditya Bachate',
    title: 'Information and Survey',
    bio: 'Manages the collection and analysis of data through information gathering and targeted surveys.',
    linkedin: '#',
    imageUrl: 'https://res.cloudinary.com/dvcuqjcr2/image/upload/v1761935365/aditya_hzhdfj.jpg' // Add image URL here
  },
  {
    name: 'Prof. Pooja Alone',
    title: 'Mentor',
    bio: 'Providing expert guidance and support to our team, leveraging academic and industry experience to ensure project success.',
    linkedin: '#',
    imageUrl: 'https://mindmesh-cep.netlify.app/images/team5.png' // Add image URL here
  }
];

const quote = "Our greatest achievement is not in healing bodies, but in restoring hope and dignity to every patient we serve.";

export default function Leadership() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-gradient">
            Our Leadership Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the visionaries and experts driving Medisphere's mission
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 card-hover text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary relative p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    {member.imageUrl ? (
                      <img 
                        src={member.imageUrl} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                  </div>
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
            </div>
          ))}
        </div>

        {/* Guiding Principle */}
        <div className="glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <Quote className="w-12 h-12 text-primary mb-4" />
          <blockquote className="text-2xl md:text-3xl font-heading font-bold text-gray-800 mb-6 italic">
            "{quote}"
          </blockquote>
          <p className="text-gray-600 font-semibold">— Medisphere Leadership Team</p>
        </div>
      </div>
    </div>
  );
}