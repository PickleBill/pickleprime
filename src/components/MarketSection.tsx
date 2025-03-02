
import React, { useState } from "react";
import StatCard from "./ui/StatCard";
import AnimatedButton from "./ui/AnimatedButton";
import FuturePlayModal from "./ui/FuturePlayModal";
import EcosystemScoreboardPreview from "./ui/EcosystemScoreboardPreview";

const MarketSection = () => {
  const [showFuturePlayModal, setShowFuturePlayModal] = useState(false);

  const handleFuturePlayClick = () => {
    setShowFuturePlayModal(true);
    setTimeout(() => {
      const playButton = document.querySelector('[aria-label="Launch Digital Scoreboard"]');
      if (playButton && playButton instanceof HTMLElement) {
        playButton.click();
      }
    }, 100);
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
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
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
                </div>
                <div>
                  <h4 className="text-navy font-bold text-lg">
                    Facilities gain operational excellence
                  </h4>
                  <p className="text-gray-600">
                    Court booking, membership management, and revenue optimization
                    tools create operational efficiency and increased profitability.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-500/10 p-3 rounded-lg text-teal-500">
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
                </div>
                <div>
                  <h4 className="text-navy font-bold text-lg">
                    Players enjoy immersive experiences
                  </h4>
                  <p className="text-gray-600">
                    Engaging digital features, skill improvement tools, and
                    social connections transform the player journey both on and
                    off the court.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-500/10 p-3 rounded-lg text-purple-500">
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
                </div>
                <div>
                  <h4 className="text-navy font-bold text-lg">
                    Digital innovation drives growth
                  </h4>
                  <p className="text-gray-600">
                    Real-time analytics, scoreboard displays, and on-court
                    digital experiences create new revenue opportunities and
                    differentiated value.
                  </p>
                </div>
              </div>
            </div>

            <AnimatedButton onClick={handleFuturePlayClick} size="lg">
              Conduit to Community Connection
            </AnimatedButton>
          </div>

          {/* Digital Ecosystem Preview */}
          <div className="relative">
            <EcosystemScoreboardPreview onLaunchFullView={handleFuturePlayClick} />
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/5 rounded-full blur-xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-[#0EA5E9]/5 rounded-full blur-xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Future Play Modal */}
      <FuturePlayModal isOpen={showFuturePlayModal} onClose={() => setShowFuturePlayModal(false)} />
    </section>
  );
};

export default MarketSection;
