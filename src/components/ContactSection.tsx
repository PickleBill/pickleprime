
import React from "react";
import AnimatedButton from "./ui/AnimatedButton";
import { AtSign, Calendar, DollarSign } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
                Get Involved
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy">
                Join the New Era of Racket Sports
              </h2>
              <p className="text-gray-700 mb-8">
                Whether you're a facility owner looking to enhance your offerings, an investor seeking the next big opportunity, or simply interested in learning more, we'd love to connect with you.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 bg-primary/10 p-3 rounded-lg">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-lg">Schedule a Demo</h3>
                    <p className="text-gray-600">
                      See our technology in action and discover how it can transform your facility.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 bg-primary/10 p-3 rounded-lg">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-lg">Invest Now</h3>
                    <p className="text-gray-600">
                      Join our $850k investment round and be part of the racket sports revolution.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 bg-primary/10 p-3 rounded-lg">
                    <AtSign className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-lg">General Inquiries</h3>
                    <p className="text-gray-600">
                      Have questions or want to learn more? We're here to help.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-navy text-xl mb-6">Get In Touch</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/30 focus:border-primary focus:outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/30 focus:border-primary focus:outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/30 focus:border-primary focus:outline-none transition-all bg-white"
                  >
                    <option value="">Please select</option>
                    <option value="facility">Implementing at my facility</option>
                    <option value="invest">Investment opportunities</option>
                    <option value="demo">Scheduling a demo</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/30 focus:border-primary focus:outline-none transition-all"
                    placeholder="Tell us a bit more..."
                  ></textarea>
                </div>

                <AnimatedButton variant="primary" className="w-full" type="submit">
                  Send Message
                </AnimatedButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
