
import React from "react";
import { Calendar } from "lucide-react";

const UpcomingReservations = () => {
  return (
    <div className="py-6 bg-white">
      <div className="container">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-[#0FA0CE]">Upcoming Reservations</h3>
          <button className="text-[#0FA0CE] text-sm font-medium hover:underline">Book a Court</button>
        </div>
        
        <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 shadow-sm p-6 text-center">
          <div className="mb-3">
            <Calendar className="w-12 h-12 mx-auto text-gray-400" />
          </div>
          <h4 className="text-navy font-semibold mb-1">No Upcoming Reservations</h4>
          <p className="text-sm text-gray-500 mb-4">Book a court to play with friends or join a game</p>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary/90 h-10 px-4 py-2">
            Reserve Court
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingReservations;
