
import React from "react";
import StatCard from "./ui/StatCard";
import AnimatedButton from "./ui/AnimatedButton";

// Modified stat data for facility owners
const facilityStats = [
  {
    id: 1,
    value: "30%",
    label: "Increased Engagement",
    description: "Higher player return rates with interactive technology",
  },
  {
    id: 2,
    value: "3x",
    label: "Social Sharing",
    description: "More visibility through player-generated content",
  },
  {
    id: 3,
    value: "25%",
    label: "Revenue Growth",
    description: "Average increase in per-player spending",
  },
  {
    id: 4,
    value: "48hrs",
    label: "Quick Setup",
    description: "From installation to fully operational system",
  },
];

const MarketSection = () => {
  return (
    <section id="market" className="bg-navy text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <span className="inline-block bg-white/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            Benefits For All
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Powering the Next-Gen Racket Sports Experience
          </h2>
          <p className="text-white/80">
            PickleBills creates a social-entertainment hub that benefits facility owners, players, coaches, and fans alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {facilityStats.map((stat, index) => (
            <div 
              key={stat.id} 
              className="animate-slide-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <StatCard
                value={stat.value}
                label={stat.label}
                description={stat.description}
              />
            </div>
          ))}
        </div>

        {/* New Focus: Digital Transformation Section */}
        <div className="bg-navy-light rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-sm text-primary font-medium uppercase tracking-wider mb-2 block">
                COMPREHENSIVE ECOSYSTEM
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                A Full Engagement Flywheel
              </h3>
              <p className="text-white/80 mb-6">
                From highlight reels you can instantly share, to advanced analytics that keep players obsessed, to interactive scoreboards that draw sponsor money—these features create a holistic flywheel of user attraction, revenue generation, and brand loyalty.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="bg-navy-dark/50 rounded-lg p-5 border border-white/5">
                  <h4 className="font-bold mb-2">For Facility Owners</h4>
                  <p className="text-white/70 text-sm">Leverage our tech to differentiate your venue, create new revenue streams, and build stronger player loyalty.</p>
                </div>
                
                <div className="bg-navy-dark/50 rounded-lg p-5 border border-white/5">
                  <h4 className="font-bold mb-2">For Players</h4>
                  <p className="text-white/70 text-sm">Enjoy advanced analytics, shareable highlight reels, and competitive leaderboards that take your game to the next level.</p>
                </div>
                
                <div className="bg-navy-dark/50 rounded-lg p-5 border border-white/5">
                  <h4 className="font-bold mb-2">For Coaches & Pros</h4>
                  <p className="text-white/70 text-sm">Access detailed performance metrics and video analysis to enhance your coaching and player development.</p>
                </div>
              </div>
              
              <AnimatedButton variant="primary" size="lg" withArrow>
                See How It Works
              </AnimatedButton>
            </div>
            
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80"
                  alt="PickleBills Technology"
                  className="w-full h-auto"
                />
              </div>
              {/* Feature preview overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-navy">Player Engagement Metrics</span>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    <div className="bg-primary/10 rounded p-2 text-center">
                      <div className="text-xs text-gray-500">Games</div>
                      <div className="text-sm font-medium text-navy">18.2k</div>
                    </div>
                    <div className="bg-primary/10 rounded p-2 text-center">
                      <div className="text-xs text-gray-500">Highlights</div>
                      <div className="text-sm font-medium text-navy">5.4k</div>
                    </div>
                    <div className="bg-primary/10 rounded p-2 text-center">
                      <div className="text-xs text-gray-500">Shares</div>
                      <div className="text-sm font-medium text-navy">9.7k</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
