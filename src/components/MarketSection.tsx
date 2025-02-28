
import React from "react";
import StatCard from "./ui/StatCard";
import AnimatedButton from "./ui/AnimatedButton";
import { marketStats } from "@/assets/data";

const MarketSection = () => {
  return (
    <section id="market" className="bg-navy text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <span className="inline-block bg-white/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
            Market Opportunity
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Capturing an Explosive Market
          </h2>
          <p className="text-white/80">
            PickleBills is positioned to capitalize on the fastest-growing sports phenomenon in America, with a capital-light approach that scales rapidly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {marketStats.map((stat, index) => (
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

        {/* Capital-Light Model Section */}
        <div className="bg-navy-light rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-sm text-primary font-medium uppercase tracking-wider mb-2 block">
                BUSINESS MODEL
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Capital-Light Revenue Machine
              </h3>
              <p className="text-white/80 mb-6">
                Unlike competitors who build and operate facilities, PickleBills focuses exclusively on technology. Our hardware + SaaS approach creates multiple revenue streams with minimal overhead.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="bg-navy-dark/50 rounded-lg p-5 border border-white/5">
                  <h4 className="font-bold mb-2">Facility Revenue</h4>
                  <p className="text-white/70 text-sm">$1,000-$2,000 monthly recurring revenue per club through technology licensing and subscription fees.</p>
                </div>
                
                <div className="bg-navy-dark/50 rounded-lg p-5 border border-white/5">
                  <h4 className="font-bold mb-2">Player Premium Features</h4>
                  <p className="text-white/70 text-sm">Additional revenue from players upgrading to premium tiers for advanced analytics and enhanced features.</p>
                </div>
                
                <div className="bg-navy-dark/50 rounded-lg p-5 border border-white/5">
                  <h4 className="font-bold mb-2">Sponsorship & Advertising</h4>
                  <p className="text-white/70 text-sm">Revenue from brands looking to reach our engaged community through digital displays and sponsored content.</p>
                </div>
              </div>
              
              <AnimatedButton variant="primary" size="lg" withArrow>
                View Investment Deck
              </AnimatedButton>
            </div>
            
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80"
                  alt="PickleBills Business Model"
                  className="w-full h-auto"
                />
              </div>
              {/* Revenue projection overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">Projected Revenue Growth</span>
                  <div className="mt-2 h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-500">2023</span>
                    <span className="text-xs font-medium text-navy">2028</span>
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
