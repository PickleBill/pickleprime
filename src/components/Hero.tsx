
import React from "react";
import { motion } from "framer-motion";
import HeroButtons from "./hero/HeroButtons";
import HeroHeading from "./hero/HeroHeading";
import HeroProPanel from "./hero/HeroProPanel";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative pt-16 md:pt-20 pb-20 md:pb-24 bg-gradient-to-b from-navy via-navy-dark to-black overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/bcbc30d7-1049-404d-95cd-1a066f700b6e.png')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center mb-10"
        >
          <HeroHeading />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center lg:items-stretch max-w-7xl mx-auto">
          {/* Interactive Buttons */}
          <div className="w-full lg:w-2/3">
            <HeroButtons />
          </div>

          {/* Pro Panel */}
          <div className="w-full lg:w-1/3">
            <HeroProPanel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
