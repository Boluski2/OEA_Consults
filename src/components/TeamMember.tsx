
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise: string[];
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, image, expertise, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;

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

    observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "glass-card rounded-xl overflow-hidden animate-on-scroll",
        "transition-all duration-500 hover:shadow-xl"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden h-64">
        <div className={cn(
          "absolute inset-0 bg-gray-200", 
          imageLoaded ? "opacity-0" : "opacity-100"
        )}></div>
        <img
          src={image}
          alt={name}
          className={cn(
            "w-full h-full object-cover object-center",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-oea-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-oea-blue font-medium">{role}</p>
        </div>
      </div>
      
      <div className="p-6">
        <p className={cn(
          "text-gray-600 mb-4 transition-all duration-300 overflow-hidden",
          expanded ? "line-clamp-none" : "line-clamp-3"
        )}>
          {bio}
        </p>
        
        <button 
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-oea-blue font-medium mb-4 focus:outline-none"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
        
        <div className="border-t border-gray-100 pt-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Areas of Expertise:</p>
          <div className="flex flex-wrap gap-2">
            {expertise.map((skill, idx) => (
              <span key={idx} className="text-xs bg-oea-blue/10 text-oea-blue px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
