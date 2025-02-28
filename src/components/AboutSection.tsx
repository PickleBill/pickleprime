
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
                src="/lovable-uploads/c35d445c-43d1-4719-a56f-dc693c4903f1.png" 
                alt="Futuristic Digital Pickleball Court"
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
              The Ultimate Tech Layer for Racket Sports
            </h2>
            <p className="text-gray-700 mb-6">
              PickleBills delivers a comprehensive AI and analytics platform for the rapidly growing pickleball and padel communities. We help facility operators create a hybrid digital to physical experience for their players, driving engagement and revenue.
            </p>

            <div className="space-y-4 mb-8">
              {/* Feature Item 1 */}
              <div className="flex items-start gap-3">
                <div className="shrink-0 bg-primary/10 rounded-full p-1">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-navy">Tech-Enhanced Experience</h3>
                  <p className="text-gray-600 text-sm">
                    Transform any venue into an interactive, high-tech entertainment center
                  </p>
                </div>
              </div>

              {/* Feature Item 2 */}
              <div className="flex items-start gap-3">
                <div className="shrink-0 bg-primary/10 rounded-full p-1">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-navy">Player Engagement</h3>
                  <p className="text-gray-600 text-sm">
                    Foster deeper loyalty through analytics, competition, and social sharing
                  </p>
                </div>
              </div>

              {/* Feature Item 3 */}
              <div className="flex items-start gap-3">
                <div className="shrink-0 bg-primary/10 rounded-full p-1">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-navy">Revenue Generation</h3>
                  <p className="text-gray-600 text-sm">
                    New streams through premium features, sponsorships, and increased player retention
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
