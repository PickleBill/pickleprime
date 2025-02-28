
import React, { useState } from "react";
import PillarCard from "./ui/PillarCard";
import AnimatedButton from "./ui/AnimatedButton";
import FacilityModal from "./ui/FacilityModal";
import PlayerModal from "./ui/PlayerModal";
import DashboardModal from "./ui/DashboardModal";
import FuturePlayModal from "./ui/FuturePlayModal";
import FuturePlayContent from "./ui/FuturePlayContent";
import { Building, Users, BarChart2 } from "lucide-react";

const SolutionSection = () => {
  const [showFacilityModal, setShowFacilityModal] = useState(false);
  const [showPlayerModal, setShowPlayerModal] = useState(false);
  const [showDashboardModal, setShowDashboardModal] = useState(false);
  const [showFuturePlayModal, setShowFuturePlayModal] = useState(false);

  // Direct launch to scoreboard instead of showing the intermediate modal
  const handleFuturePlayClick = () => {
    // Skip modal step and directly show the scoreboard view
    const modal = document.createElement('div');
    modal.style.display = 'none';
    document.body.appendChild(modal);
    
    setShowFuturePlayModal(true);
    
    // This ensures we're opening directly to the scoreboard view inside the modal
    setTimeout(() => {
      const playButton = document.querySelector('[aria-label="Launch Digital Scoreboard"]');
      if (playButton && playButton instanceof HTMLElement) {
        playButton.click();
      }
    }, 100);
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

        {/* New Future of Play Section with Embedded Content */}
        <div className="mt-16 border-t pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                The Future of Play
              </h3>
              <p className="text-gray-600 mb-6">
                SwingNet is revolutionizing the on-court experience with futuristic digital displays, 
                AI-powered video capture, real-time analytics, and engaging gamification elements.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-gray-700">
                    Smart cameras track gameplay and create instant highlights
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-gray-700">
                    Digital scoreboards and court displays enhance gameplay
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-gray-700">
                    Performance analytics help players improve their skills
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-gray-700">
                    Gamification elements make playing more engaging and rewarding
                  </span>
                </li>
              </ul>
              <div className="text-center">
                <AnimatedButton onClick={handleFuturePlayClick} size="lg">
                  Explore The Future of Play
                </AnimatedButton>
                <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
                  Explore our comprehensive ecosystem that transforms racquet sports with digital innovation
                </p>
              </div>
            </div>
            
            {/* Embedded Future Play Content instead of Scoreboard Preview */}
            <div className="relative">
              <FuturePlayContent onLaunchScoreboard={handleFuturePlayClick} />
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/5 rounded-full blur-xl -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-[#0EA5E9]/5 rounded-full blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <FacilityModal isOpen={showFacilityModal} onClose={() => setShowFacilityModal(false)} />
      <PlayerModal isOpen={showPlayerModal} onClose={() => setShowPlayerModal(false)} />
      <DashboardModal isOpen={showDashboardModal} onClose={() => setShowDashboardModal(false)} />
      <FuturePlayModal isOpen={showFuturePlayModal} onClose={() => setShowFuturePlayModal(false)} />
    </section>
  );
};

export default SolutionSection;
