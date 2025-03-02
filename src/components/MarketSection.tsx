
import React, { useState } from "react";
import StatCard from "./ui/StatCard";
import AnimatedButton from "./ui/AnimatedButton";
import EcosystemScoreboardPreview from "./ui/EcosystemScoreboardPreview";
import ShareMatchModal from "./ui/share-modal";
import { useNavigate } from "react-router-dom";
import { Share2, TrendingUp, Users, Building2 } from "lucide-react";

// Feature component to reduce repetition
const FeatureItem = ({ 
  icon, 
  title, 
  description, 
  bgColorClass 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  bgColorClass: string;
}) => (
  <div className="flex items-start gap-4">
    <div className={`${bgColorClass} p-3 rounded-lg`}>
      {icon}
    </div>
    <div>
      <h4 className="text-navy font-bold text-lg">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const MarketSection = () => {
  const navigate = useNavigate();
  const [showShareModal, setShowShareModal] = useState(false);

  const handleCommunityConnectionClick = () => {
    navigate('/scoreboard');
  };

  return (
    <section
      id="market"
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Untapped Market Potential
          </h2>
          <p className="text-gray-600">
            As racquet sports continue to surge in popularity, we're uniquely
            positioned to capture the growing demand for digital solutions that
            enhance the playing experience and streamline facility operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <StatCard
            value="36.5 Million"
            label="PLAYERS"
            description="People play racquet sports in the US alone, with pickleball seeing 160% growth over 3 years"
            icon="TrendingUp"
            color="green"
          />
          <StatCard
            value="10,320+"
            label="FACILITIES"
            description="Dedicated pickleball facilities in the US, with thousands more being built each year"
            icon="Building2"
            color="blue"
          />
          <StatCard
            value="$4.8 Billion"
            label="MARKET SIZE"
            description="Annual equipment and facility revenue in the US racquet sports market"
            icon="DollarSign"
            color="amber"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">
              COMPREHENSIVE ECOSYSTEM
              <br />
              <span className="text-primary">A Full Engagement Flywheel</span>
            </h3>
            <p className="text-gray-700 mb-6">
              Our platform is designed as a comprehensive ecosystem that drives value for every stakeholder:
            </p>

            <div className="space-y-4 mb-8">
              <FeatureItem 
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" />
                    <path d="M15 3v6h6" />
                  </svg>
                } 
                title="Facilities gain operational excellence" 
                description="Court booking, membership management, and revenue optimization tools create operational efficiency and increased profitability."
                bgColorClass="bg-primary/10 text-primary"
              />
              
              <FeatureItem 
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                } 
                title="Players enjoy immersive experiences" 
                description="Engaging digital features, skill improvement tools, and social connections transform the player journey both on and off the court."
                bgColorClass="bg-teal-500/10 text-teal-500"
              />
              
              <FeatureItem 
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                } 
                title="Digital innovation drives growth" 
                description="Real-time analytics, scoreboard displays, and on-court digital experiences create new revenue opportunities and differentiated value."
                bgColorClass="bg-purple-500/10 text-purple-500"
              />
            </div>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <AnimatedButton onClick={handleCommunityConnectionClick} size="lg">
                Conduit to Community Connection
              </AnimatedButton>
              
              <AnimatedButton
                variant="outline"
                onClick={() => setShowShareModal(true)}
                size="lg"
                className="flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                Share Match Update
              </AnimatedButton>
            </div>
          </div>

          <div className="relative">
            <EcosystemScoreboardPreview onLaunchFullView={handleCommunityConnectionClick} />
            
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/5 rounded-full blur-xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-[#0EA5E9]/5 rounded-full blur-xl -z-10"></div>
          </div>
        </div>
      </div>

      <ShareMatchModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
      />
    </section>
  );
};

export default MarketSection;
