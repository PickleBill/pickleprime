
import React from "react";
import { Activity } from "lucide-react";

const AnalyticsDashboardHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-full bg-[#1a9dc3]/20">
          <Activity className="w-5 h-5 text-[#1a9dc3]" />
        </div>
        <h3 className="text-lg font-semibold text-white">Analytics Dashboard</h3>
      </div>
    </div>
  );
};

export default AnalyticsDashboardHeader;
