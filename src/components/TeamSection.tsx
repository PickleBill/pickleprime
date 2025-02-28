
import React from "react";
import TeamCard from "./ui/TeamCard";
import { teamMembers } from "@/assets/data";

const TeamSection = () => {
  return (
    <section id="team" className="bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy">
            Visionaries Behind PickleBills
          </h2>
          <p className="text-gray-700">
            A team of experienced technologists, players, and sports industry veterans building the future of racket sports.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className="animate-scale-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TeamCard
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
              />
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20L0 10V0H20V20H10ZM30 20L20 10V0H40V20H30Z" fill="#2BCB6E" fillOpacity="0.2"/>
                <path d="M10 40L0 30V20H20V40H10ZM30 40L20 30V20H40V40H30Z" fill="#2BCB6E" fillOpacity="0.2"/>
              </svg>
            </div>
            <blockquote className="text-xl md:text-2xl font-medium text-navy mb-6">
              "PickleBills has transformed our facility. The technology is seamless, our players love the highlight reels, and we've seen a 30% increase in repeat visits. It's created a vibrant community around our courts."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                <img src="/placeholder.svg" alt="Jane Cooper" className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <div className="font-bold text-navy">Jane Cooper</div>
                <div className="text-sm text-gray-600">Owner, Urban Pickleball Austin</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
