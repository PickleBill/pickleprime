
import React, { useState } from "react";
import PillarCard from "./ui/PillarCard";
import AnimatedButton from "./ui/AnimatedButton";
import FacilityModal from "./ui/FacilityModal";
import PlayerModal from "./ui/PlayerModal";
import DashboardModal from "./ui/DashboardModal";
import FuturePlayModal from "./ui/FuturePlayModal";
import LiveScoreboardPreview from "./ui/LiveScoreboardPreview";

const SolutionSection = () => {
  const [showFacilityModal, setShowFacilityModal] = useState(false);
  const [showPlayerModal, setShowPlayerModal] = useState(false);
  const [showDashboardModal, setShowDashboardModal] = useState(false);
  const [showFuturePlayModal, setShowFuturePlayModal] = useState(false);

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
            icon="/lovable-uploads/c8c26cf4-e8ff-48db-b3ff-a497749005b2.png"
            primaryColor="primary"
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
            icon="/lovable-uploads/c35d445c-43d1-4719-a56f-dc693c4903f1.png"
            primaryColor="teal"
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
            icon="/lovable-uploads/d1c55fc9-6562-4ad1-8eed-c7a547ac7b6b.png"
            primaryColor="purple"
            onClick={() => setShowDashboardModal(true)}
          />
        </div>

        {/* New Future of Play Section with Scoreboard Preview */}
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
              <AnimatedButton onClick={() => setShowFuturePlayModal(true)} size="lg">
                Explore The Future of Play
              </AnimatedButton>
            </div>
            
            {/* Scoreboard Preview */}
            <div className="relative">
              <LiveScoreboardPreview onLaunchFullView={() => setShowFuturePlayModal(true)} />
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
