
import React from "react";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative animate-slide-in">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg" 
                alt="PickleBills Technology"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-navy/5 rounded-full -z-10"></div>
          </div>

          {/* Right Column - Content */}
          <div className="animate-slide-up">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Vision
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy">
              Revolutionizing Racket Sports Without Building Courts
            </h2>
            <p className="text-gray-700 mb-6">
              PickleBills is the Trackman of racket sports, delivering a comprehensive AI and analytics platform for the rapidly growing pickleball and padel communities. Our capital-light model provides facility owners with instant revenue streams while giving players the advanced analytics and social engagement they crave.
            </p>

            <div className="space-y-4 mb-8">
              {/* Feature Item 1 */}
              <div className="flex items-start gap-3">
                <div className="shrink-0 bg-primary/10 rounded-full p-1">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-navy">Capital-Light Model</h3>
                  <p className="text-gray-600 text-sm">
                    Pure hardware + SaaS approach with zero facility ownership costs
                  </p>
                </div>
              </div>

              {/* Feature Item 2 */}
              <div className="flex items-start gap-3">
                <div className="shrink-0 bg-primary/10 rounded-full p-1">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-navy">Massive Market Opportunity</h3>
                  <p className="text-gray-600 text-sm">
                    Serving 11M+ U.S. pickleball players with 21% CAGR
                  </p>
                </div>
              </div>

              {/* Feature Item 3 */}
              <div className="flex items-start gap-3">
                <div className="shrink-0 bg-primary/10 rounded-full p-1">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-navy">Recurring Revenue</h3>
                  <p className="text-gray-600 text-sm">
                    $1K-$2K MRR per club, plus premium user features & sponsor revenue
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#solution"
              className="inline-flex items-center text-primary font-medium hover:underline gap-1 group"
            >
              Discover our solution
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
