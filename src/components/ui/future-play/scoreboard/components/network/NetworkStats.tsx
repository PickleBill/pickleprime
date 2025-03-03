
import React from "react";
import { Users, Activity, Calendar } from "lucide-react";

const NetworkStats: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <StatCard 
        icon={<Users className="w-5 h-5 text-[#0EA5E9]" />}
        title="Network"
        value={12}
        subtitle="Total Connections"
        color="#0EA5E9"
      />
      <StatCard 
        icon={<Activity className="w-5 h-5 text-[#8B5CF6]" />}
        title="Active Now"
        value={5}
        subtitle="Players Online"
        color="#8B5CF6"
      />
      <StatCard 
        icon={<Calendar className="w-5 h-5 text-[#F97316]" />}
        title="Matches"
        value={8}
        subtitle="This Week"
        color="#F97316"
      />
    </div>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
  subtitle: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, subtitle, color }) => (
  <div className="bg-navy/70 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center transition-all hover:bg-navy/80 hover:border-white/20 hover:shadow-lg hover:shadow-[rgba(0,0,0,0.2)] transform hover:-translate-y-1 duration-300">
    <div className="flex items-center justify-center mb-1">
      {icon}
      <h4 className="ml-1.5 font-medium" style={{ color }}>{title}</h4>
    </div>
    <p className="text-3xl font-bold text-white">{value}</p>
    <p className="text-xs text-white/60">{subtitle}</p>
  </div>
);

export default NetworkStats;
