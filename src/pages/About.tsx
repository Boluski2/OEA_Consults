
// Find and fix the errors in the About page
// From the error message, we need to fix:
// 1. Property 'title' does not exist on type 'string'
// 2. Property 'description' does not exist on type 'string'
// 3. Property 'history' does not exist on type '{ ... }'

import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { companyInfo } from '@/lib/data';

// Define the correct type for our timeline items
interface TimelineItem {
  year: number;
  title: string;
  description: string;
}

const About = () => {
  // Define the timeline items with the correct type
  const timelineItems: TimelineItem[] = [
    {
<<<<<<< HEAD
      year: 2019,
      title: "Company Founded",
      description: "OEA Consult was established in Lagos, Nigeria with a focus on providing high-quality geospatial services."
    },
    // {
    //   year: 2015,
    //   title: "Expansion to West Africa",
    //   description: "We expanded our operations to cover the entire West African region, establishing partnerships with key organizations."
    // },
=======
      year: 2018,
      title: "Company Founded",
      description: "OEA Consults Limited (Observatory Earth Analytics) was founded to address the data gap in solving development and environmental issues."
    },
>>>>>>> f6638b8 (Update content)
    {
      year: 2018,
      title: "Launch of Drone Mapping Services",
      description: "OEA Consult pioneered drone mapping services in the region, revolutionizing data collection for our clients."
    },
    {
      year: 2020,
      title: "Digital Transformation",
      description: "We embraced digital transformation, launching our proprietary GIS software solution for urban planning."
    },
    {
      year: 2023,
      title: "Environmental Focus",
      description: "OEA Consult committed to sustainable practices, implementing environmental impact assessments in all projects."
    }
  ];

  // Company stats
  const stats = [
    { value: "6+", label: "Years of Experience" },
    { value: "100+", label: "Completed Projects" },
    { value: "100%", label: "Client satisfaction" },
    { value: "20+", label: "Expert Professionals" }
  ];

  useEffect(() => {
    // Animate elements on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-oea-black text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1624476637404-34e4e4fc3ba5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="About us hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About OEA Consult</h1>
            <p className="text-xl text-gray-300">
<<<<<<< HEAD
              Leading the way in geospatial solutions across West Africa since 2019.
=======
              Leading the way in geospatial solutions since 2018.
>>>>>>> f6638b8 (Update content)
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-oea-blue bg-oea-blue/10 rounded-full">
                OUR STORY
              </span>
              <h2 className="text-3xl font-bold mb-6 text-oea-black">Our Mission &amp; Vision</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-4">
                  {companyInfo.mission}
                </p>
                <p className="text-gray-600 mb-4">
                  {companyInfo.vision}
                </p>
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden h-96 shadow-xl animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Our team at work" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-oea-black/70 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-oea-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-oea-blue bg-oea-blue/10 rounded-full">
              OUR JOURNEY
            </span>
            <h2 className="text-3xl font-bold mb-4 text-oea-black">Company Timeline</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From our founding to today, we've been committed to excellence and innovation in geospatial solutions.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Track */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-oea-blue/20"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {timelineItems.map((item, index) => (
                <div key={index} className={`relative flex flex-col sm:flex-row items-center animate-on-scroll ${index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'}`}>
                  <div className={`absolute left-1/2  transform -translate-x-1/2 w-5 h-5 rounded-full bg-oea-blue border-4 border-white`}></div>
                  <div className={`w-full sm:w-5/12 glass-card rounded-xl p-6 shadow-lg ${index % 2 === 0 ? 'sm:pr-12' : 'sm:pl-12'}`}>
                    <div className="font-bold text-oea-blue text-lg">{item.year}</div>
                    <h3 className="text-xl font-semibold mb-2 text-oea-black">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-oea-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4">Our Impact by the Numbers</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-on-scroll">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg font-medium text-oea-lightGray">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-oea-blue bg-oea-blue/10 rounded-full">
              OUR VALUES
            </span>
            <h2 className="text-3xl font-bold mb-4 text-oea-black">What We Stand For</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our values guide everything we do, from client interactions to project execution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll">
            {companyInfo.values.map((value, index) => (
              <div key={index} className="glass-card p-6 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-oea-blue/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-oea-blue text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-oea-black">{value}</h3>
                <p className="text-gray-600">
                  We are committed to upholding the highest standards of {value.toLowerCase()} in all our work and relationships.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
