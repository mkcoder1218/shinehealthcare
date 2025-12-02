import React from 'react';
import { Linkedin, Twitter, Mail, Star } from 'lucide-react';
import { Doctor } from '../types';

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. James Wilson",
    specialty: "Cardiologist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Dr. Wilson has over 15 years of experience in interventional cardiology and heart failure management."
  },
  {
    id: 2,
    name: "Dr. Sarah Miller",
    specialty: "Neurologist",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Specializing in neurological disorders, Dr. Miller is a pioneer in treating complex migraines and epilepsy."
  },
  {
    id: 3,
    name: "Dr. Robert Chen",
    specialty: "Orthopedic Surgeon",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "An expert in sports medicine and joint replacement surgery with a focus on minimally invasive techniques."
  },
  {
    id: 4,
    name: "Dr. Emily Brooks",
    specialty: "Pediatrician",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Dr. Brooks is beloved by her patients for her gentle approach and expertise in child development."
  },
  {
    id: 5,
    name: "Dr. Michael Ross",
    specialty: "Ophthalmologist",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Specializes in cataract surgery and glaucoma treatment, ensuring the best vision for his patients."
  },
  {
    id: 6,
    name: "Dr. Linda Garcia",
    specialty: "General Practitioner",
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Focuses on preventative care and holistic health management for families in the community."
  }
];

const Doctors: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
       <div className="bg-teal-600 text-white py-24 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in-up">
          <div className="inline-block px-4 py-1 bg-teal-500/50 backdrop-blur rounded-full text-sm font-semibold mb-4 border border-teal-400">Our Experts</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Meet Our Specialists</h1>
          <p className="text-teal-100 text-xl max-w-2xl mx-auto font-light leading-relaxed">A team of highly skilled and experienced doctors dedicated to your care.</p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {doctors.map((doctor, index) => (
              <div 
                key={doctor.id} 
                className="group bg-white rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 animate-fade-in-up hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden h-96">
                  <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-lg z-20 shadow-md">
                     <div className="flex gap-0.5">
                        <Star size={14} className="fill-yellow-400 text-yellow-400"/>
                        <Star size={14} className="fill-yellow-400 text-yellow-400"/>
                        <Star size={14} className="fill-yellow-400 text-yellow-400"/>
                        <Star size={14} className="fill-yellow-400 text-yellow-400"/>
                        <Star size={14} className="fill-yellow-400 text-yellow-400"/>
                     </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500 z-10"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <div className="flex justify-center space-x-3 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <a href="#" className="bg-white p-2.5 rounded-full text-blue-700 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110 shadow-lg"><Linkedin size={18} /></a>
                      <a href="#" className="bg-white p-2.5 rounded-full text-sky-500 hover:bg-sky-500 hover:text-white transition-all transform hover:scale-110 shadow-lg"><Twitter size={18} /></a>
                      <a href="#" className="bg-white p-2.5 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all transform hover:scale-110 shadow-lg"><Mail size={18} /></a>
                    </div>
                  </div>
                </div>
                <div className="p-8 relative z-20 bg-white -mt-4 rounded-t-[2rem]">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{doctor.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4 uppercase tracking-wider text-xs">{doctor.specialty}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{doctor.bio}</p>
                  <button className="w-full py-3.5 border border-slate-200 text-slate-700 rounded-xl hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all font-bold shadow-sm uppercase text-xs tracking-wider">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;