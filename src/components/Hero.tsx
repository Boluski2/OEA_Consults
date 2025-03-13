
import React, { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-oea-black/70 z-10"></div>
        <img
          src="./background.png"
          alt="Aerial view"
          className="w-full h-full object-cover hero-mask"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div>
          <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold tracking-wider text-white bg-oea-blue/80 backdrop-blur-sm rounded-full">
            GEOSPATIAL EXCELLENCE
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Mapping the Future with <span className="text-oea-blue">Precision</span>
        </h1>
        <p className="text-xl text-white max-w-3xl mx-auto mb-10 drop-shadow-md">
          OEA Consult delivers cutting-edge drone mapping, surveying, and GIS analysis 
          solutions to transform how organizations visualize and interact with spatial data.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link to="/contact" className="btn-primary min-w-[180px]">
            Get Started
          </Link>
          <Link to="/projects" className="btn-outline bg-transparent text-white border-white hover:bg-white hover:text-oea-black min-w-[180px]">
            View Projects
          </Link>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      {/* <button 
        onClick={scrollToServices}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center animate-bounce"
      >
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <ArrowDown className="text-white" size={20} />
      </button> */}
    </div>
  );
};

export default Hero;
