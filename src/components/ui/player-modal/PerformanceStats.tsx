
import React from "react";
import { Trophy, Activity, Calendar, BarChart2 } from "lucide-react";

const PerformanceStats = () => {
  return (
    <div className="py-6 bg-white">
      <div className="container">
        <h3 className="text-lg font-semibold mb-4 text-[#0FA0CE]">Performance Stats</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard 
            icon={<Trophy className="w-5 h-5 text-[#0FA0CE]" />}
            label="Win Rate"
            value="68%"
            trend="↑ 4% this month"
            trendColor="text-green-600"
          />
          
          <StatCard 
            icon={<Activity className="w-5 h-5 text-[#0FA0CE]" />}
            label="Avg Points"
            value="11.2"
            trend="↑ 0.8 last week"
            trendColor="text-green-600"
          />
          
          <StatCard 
            icon={<Calendar className="w-5 h-5 text-[#0FA0CE]" />}
            label="Sessions"
            value="24"
            trend="This month"
            trendColor="text-gray-500"
          />
          
          <StatCard 
            icon={<BarChart2 className="w-5 h-5 text-[#0FA0CE]" />}
            label="Rating"
            value="4.5"
            trend="↑ 0.2 last month"
            trendColor="text-green-600"
          />
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
  trendColor: string;
}

const StatCard = ({ icon, label, value, trend, trendColor }: StatCardProps) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-4">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-[#0FA0CE]/10 rounded-full">
          {icon}
        </div>
        <span className="text-sm font-medium text-gray-600">{label}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-navy">{value}</span>
        <span className={`text-xs ${trendColor}`}>{trend}</span>
      </div>
    </div>
  );
};

export default PerformanceStats;
