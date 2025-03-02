
import React, { useState } from "react";
import PillarCard from "./ui/PillarCard";
import AnimatedButton from "./ui/AnimatedButton";
import FacilityModal from "./ui/FacilityModal";
import PlayerModal from "./ui/PlayerModal";
import DashboardModal from "./ui/DashboardModal";
import { Building, Users, BarChart2, ChevronDown, ChevronUp, Play, Zap, Activity } from "lucide-react";
import { pillarsData } from "./ui/future-play/data/pillarsData";
import { useNavigate } from "react-router-dom";

const SolutionSection = () => {
  const navigate = useNavigate();
  const [showFacilityModal, setShowFacilityModal] = useState(false);
  const [showPlayerModal, setShowPlayerModal] = useState(false);
  const [showDashboardModal, setShowDashboardModal] = useState(false);
  const [expandedPillar, setExpandedPillar] = useState<number | null>(null);

  const handleScoreboardClick = () => {
    navigate('/scoreboard');
  };

  const togglePillar = (id: number) => {
    if (expandedPillar === id) {
      setExpandedPillar(null);
    } else {
      setExpandedPillar(id);
    }
  };

  return (
    <section id="solution" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            A Complete Ecosystem
          </h2>
          <p className="text-gray-600">
            We've built a comprehensive platform that connects facilities,
            players, and data in one seamless ecosystem, revolutionizing the
            racquet sports experience for everyone involved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <PillarCard
            title="Facility Experience"
            description="Streamlined operations and improved customer experience for courts and clubs."
            features={[
              "Intuitive court booking & management",
              "Automated waitlists & notifications",
              "Integrated point-of-sale system",
              "Member management & analytics"
            ]}
            icon={<Building className="w-6 h-6" />}
            iconBgColor="#2BCB6E20"
            iconColor="#2BCB6E"
            primaryColor="primary"
            className="from-primary/5 to-primary/0 hover:from-primary/10 hover:to-primary/5"
            buttonText="View Facility Dashboard"
            onClick={() => setShowFacilityModal(true)}
          />

          <PillarCard
            title="Player Experience"
            description="Engaging digital experience that enhances the player journey on and off the court."
            features={[
              "Easy court booking & reservations",
              "Skill tracking & improvement insights",
              "Social connections & match finding",
              "League & tournament participation"
            ]}
            icon={<Users className="w-6 h-6" />}
            iconBgColor="#0EA5E920"
            iconColor="#0EA5E9"
            primaryColor="teal"
            className="from-teal-500/5 to-teal-500/0 hover:from-teal-500/10 hover:to-teal-500/5"
            buttonText="View Player App"
            onClick={() => setShowPlayerModal(true)}
          />

          <PillarCard
            title="Admin Dashboard"
            description="Powerful analytics and tools for managers to optimize operations and grow revenue."
            features={[
              "Comprehensive reporting & analytics",
              "Resource utilization insights",
              "Member engagement tracking",
              "Financial performance metrics"
            ]}
            icon={<BarChart2 className="w-6 h-6" />}
            iconBgColor="#8B5CF620"
            iconColor="#8B5CF6"
            primaryColor="purple"
            className="from-purple-500/5 to-purple-500/0 hover:from-purple-500/10 hover:to-purple-500/5"
            buttonText="Explore Dashboard"
            onClick={() => setShowDashboardModal(true)}
          />
        </div>

        {/* Enhanced Future of Play Section - integrating modal content */}
        <div className="mt-16 border-t pt-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
                SwingNet
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                The Future of Play
              </h2>
              <p className="text-gray-600 mx-auto max-w-3xl">
                Revolutionary digital experiences that transform racquet sports through technology.
              </p>
            </div>
            
            {/* Pillars Section - Using pillars from the modal */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
              {pillarsData.map((pillar) => (
                <div 
                  key={pillar.id} 
                  className="bg-navy-dark/5 backdrop-blur-sm rounded-lg overflow-hidden border border-navy/10 hover:border-navy/20 transition-all"
                >
                  {/* Top bar with color */}
                  <div 
                    className="h-1 w-full" 
                    style={{ backgroundColor: pillar.color }}
                  ></div>
                  
                  <div className="p-4">
                    {/* Icon and Title */}
                    <div className="flex flex-col items-center text-center mb-3">
                      <div className="p-2 rounded-full mb-2" style={{ backgroundColor: `${pillar.color}20` }}>
                        <div style={{ color: pillar.color }}>
                          {pillar.icon}
                        </div>
                      </div>
                      <h4 className="text-navy text-lg font-medium">
                        {pillar.title.split(' & ')[0]}
                      </h4>
                    </div>
                    
                    {/* Short Description */}
                    <p className="text-gray-600 text-sm text-center mb-3">
                      {pillar.description.split('.')[0]}.
                    </p>
                    
                    {/* Learn More Button */}
                    <button
                      onClick={() => togglePillar(pillar.id)}
                      className="w-full flex items-center justify-center gap-1 text-sm text-navy/70 hover:text-navy mt-2 transition-colors"
                    >
                      {expandedPillar === pillar.id ? (
                        <>
                          <span>Show Less</span>
                          <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          <span>Learn More</span>
                          <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    
                    {/* Expanded Content */}
                    {expandedPillar === pillar.id && (
                      <div className="mt-3 pt-3 border-t border-navy/10 animate-fade-in">
                        <ul className="space-y-2">
                          {pillar.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <span className="text-primary mt-1 text-xs">•</span>
                              <span className="text-gray-700">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Live Scoreboard Preview */}
            <div className="bg-navy-dark rounded-xl overflow-hidden p-8 border border-navy/20 mt-8 mb-12">
              <div className="flex flex-col items-center justify-center text-center mb-8">
                <div className="text-3xl font-bold text-white flex items-center justify-center mb-6">
                  <span className="text-[#1a9dc3]">17</span>
                  <span className="mx-3">-</span>
                  <span className="text-primary">24</span>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <div className="bg-navy-light/50 backdrop-blur-sm px-3 py-1.5 rounded text-sm flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#1a9dc3]" />
                    <span className="text-white">52 MPH</span>
                  </div>
                  <div className="bg-navy-light/50 backdrop-blur-sm px-3 py-1.5 rounded text-sm flex items-center gap-2">
                    <Activity className="w-4 h-4 text-primary" />
                    <span className="text-white">92% Accuracy</span>
                  </div>
                </div>
                
                <AnimatedButton 
                  onClick={handleScoreboardClick}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-[#1a9dc3] hover:shadow-lg hover:shadow-primary/20"
                >
                  <div className="flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    <span>Experience Live Scoreboard</span>
                  </div>
                </AnimatedButton>
                
                <p className="text-white/70 text-sm mt-4">
                  Digital court displays with real-time stats and AI highlights
                </p>
              </div>
              
              {/* Quote Section */}
              <div className="border-t border-white/10 pt-6 text-center max-w-3xl mx-auto">
                <p className="text-white/80 italic mb-6">
                  "We didn't just design a scheduling app; we built a full engagement ecosystem. 
                  From highlight reels to analytics that keep players obsessed, 
                  to interactive scoreboards for sponsor revenue— 
                  it's a holistic flywheel of user attraction, revenue generation, and brand loyalty."
                </p>
                
                <p className="text-white/50 text-sm">
                  Our holistic platform creates a powerful network effect: more players generate more content, 
                  which attracts more sponsors, driving more revenue for facilities and enabling greater innovation.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <AnimatedButton onClick={handleScoreboardClick} size="lg" withArrow>
                View Live Demo
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <FacilityModal isOpen={showFacilityModal} onClose={() => setShowFacilityModal(false)} />
      <PlayerModal isOpen={showPlayerModal} onClose={() => setShowPlayerModal(false)} />
      <DashboardModal isOpen={showDashboardModal} onClose={() => setShowDashboardModal(false)} />
    </section>
  );
};

export default SolutionSection;
