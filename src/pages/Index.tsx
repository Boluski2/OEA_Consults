
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { services, projects } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Initialize intersection observer for animation
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

    // Target all elements with the animate-on-scroll class
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
      <Hero />

      {/* Services Section */}
      <section id="services" className="section-padding bg-oea-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              We provide comprehensive geospatial solutions to meet the diverse needs of our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="animate-on-scroll">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-oea-blue bg-oea-blue/10 rounded-full">
                  ABOUT OEA CONSULT
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-oea-black">Transforming Landscapes Through Innovation</h2>
                <p className="text-gray-600 mb-6">
<<<<<<< HEAD
                  Founded in 2019, OEA Consult has grown to become a leading geospatial consultancy in Africa, 
                  providing cutting-edge solutions to complex spatial challenges. Our team of experts combines 
                  technical excellence with deep local knowledge to deliver projects that make a lasting impact.
=======
                Incorporated in Nigeria in 2018, OEA Consults Limited (Observatory Earth Analytics) 
                was founded to address the data gap in solving development and environmental issues. 
                The co-founders recognized the need for actionable and replicable data in planning, environment, 
                and development circles, driven by their interest in data-driven decision-making. 
>>>>>>> f6638b8 (Update content)
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-oea-blue flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Expert team with diverse geospatial skills</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-oea-blue flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Advanced drone technology and equipment</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-oea-blue flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Comprehensive GIS solutions and analysis</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-oea-blue flex-shrink-0 mt-1" />
<<<<<<< HEAD
                    <span className="text-gray-700">Strong local presence across Africa</span>
=======
                    <span className="text-gray-700">state-of-the-art geospatial analysis, satellite imagery, GIS mapping and 3D visualization</span>
>>>>>>> f6638b8 (Update content)
                  </li>
                </ul>
                <Link to="/about" className="btn-primary">
                  Learn More About Us
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative animate-on-scroll">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Drone mapping"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-oea-blue rounded-full mix-blend-multiply blur-xl opacity-20 animate-blob"></div>
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-oea-blue rounded-full mix-blend-multiply blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding bg-oea-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
            <div className="mb-6 md:mb-0">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-oea-blue bg-oea-blue/10 rounded-full animate-on-scroll">
                FEATURED PROJECTS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-oea-black animate-on-scroll">Our Recent Work</h2>
            </div>
            <Link to="/projects" className="inline-flex items-center text-oea-blue font-medium animate-on-scroll">
              View All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                client={project.client}
                location={project.location}
                year={project.year}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-oea-black text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Background pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Spatial Data?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's collaborate to bring precision, insight, and innovation to your next project.
            </p>
            <Link to="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
