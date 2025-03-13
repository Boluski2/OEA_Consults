import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamMember from '@/components/TeamMember';
import { teamMembers } from '@/lib/data';
import { Users } from 'lucide-react';

const Team = () => {
  const [visibleCount, setVisibleCount] = useState(6); // Show first 6 members by default

  useEffect(() => {
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

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.unobserve(el));
    };
  }, []);

  const showMore = () => {
    setVisibleCount((prev) => prev + 10); // Increase count by 6 on each click
  };

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-oea-black text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-30">
          <img
            // src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            src='./images/teams.png'
            alt="Team meeting"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Our Team</h1>
            <p className="text-xl text-gray-300 animate-fade-in-up">
              Meet the experts behind our geospatial solutions, bringing together diverse skills and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-oea-blue/10">
                <Users className="h-8 w-8 text-oea-blue" />
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-oea-black">Our Dedicated Professionals</h2>
            <p className="text-xl text-gray-600">
              Our team comprises industry leaders, technical experts, and innovative thinkers committed 
              to excellence in geospatial services. Each member brings unique skills and perspectives to 
              deliver exceptional results for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-16 bg-oea-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(0, visibleCount).map((member, index) => (
              <TeamMember
                key={member.id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                expertise={member.expertise}
                index={index}
              />
            ))}
          </div>

          {/* Show More Button */}
          {visibleCount < teamMembers.length && (
            <div className="text-center mt-8">
              <button
                onClick={showMore}
                className="px-6 py-3 bg-oea-blue text-white font-bold rounded-lg transition hover:bg-opacity-90"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-oea-blue rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 md:p-12  flex text-white">
              <h2 className="text-3xl font-bold mb-6 animate-on-scroll text-center">Join Our Team</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto animate-on-scroll">
              Our team are experienced operators who have built, led, contributed to and learnt from some of the most well known scaling success stories in global tech. Our management team has led multi-billion dollar projects in the environmental, planning, geospatial, construction and tech sectors with clients such as Google, Dar, the Lagos State Govenrment, among many others. We're aligned by purpose, equipped with transparency and enabled by agency. The result is one of the most attractive and rewarding benefits for high performers that we can offer; the chance to work with purpose alongside talented and committed peers. We are looking for people that want to solve problems that matter with people that care. If you are interested in joining our team and mission, check our careers page.
              </p>
              {/* <a 
                href="mailto:careers@oeaconsult.com" 
                className="inline-block px-8 py-4 bg-white text-oea-blue font-bold rounded-lg transition-all hover:bg-opacity-90 animate-on-scroll"
              >
                View Open Positions
              </a> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Team;
