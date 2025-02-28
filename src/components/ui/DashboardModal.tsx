
import React from "react";
import { X, ChevronRight, Video, Activity, Trophy, Monitor, Users } from "lucide-react";
import { pillars } from "@/assets/data";
import AnimatedButton from "./AnimatedButton";

interface DashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DashboardMetric {
  id: number;
  label: string;
  value: string;
  trend: "up" | "down" | "neutral";
  percentage: string;
}

const DashboardModal = ({ isOpen, onClose }: DashboardModalProps) => {
  if (!isOpen) return null;

  // Sample metrics data for each pillar
  const pillarMetrics: Record<number, DashboardMetric[]> = {
    1: [
      { id: 1, label: "Videos Captured", value: "2,547", trend: "up", percentage: "12%" },
      { id: 2, label: "Shares", value: "987", trend: "up", percentage: "24%" },
      { id: 3, label: "Avg. Views", value: "135", trend: "up", percentage: "8%" },
    ],
    2: [
      { id: 1, label: "Data Points", value: "1.2M", trend: "up", percentage: "18%" },
      { id: 2, label: "Player Insights", value: "458", trend: "up", percentage: "15%" },
      { id: 3, label: "Performance Score", value: "87%", trend: "up", percentage: "4%" },
    ],
    3: [
      { id: 1, label: "Tournaments", value: "24", trend: "up", percentage: "33%" },
      { id: 2, label: "Challenge Completions", value: "1,209", trend: "up", percentage: "28%" },
      { id: 3, label: "Leaderboard Position", value: "Top 10%", trend: "up", percentage: "5%" },
    ],
    4: [
      { id: 1, label: "Engagement Rate", value: "67%", trend: "up", percentage: "14%" },
      { id: 2, label: "Avg. Dwell Time", value: "2:45", trend: "up", percentage: "22%" },
      { id: 3, label: "Sponsor Views", value: "3,458", trend: "up", percentage: "19%" },
    ],
    5: [
      { id: 1, label: "Active Users", value: "782", trend: "up", percentage: "17%" },
      { id: 2, label: "Matches Arranged", value: "346", trend: "up", percentage: "25%" },
      { id: 3, label: "Coach Sessions", value: "128", trend: "up", percentage: "11%" },
    ],
  };

  // Map pillar icons to Lucide components
  const getPillarIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      Video: <Video className="w-6 h-6" />,
      Activity: <Activity className="w-6 h-6" />,
      Trophy: <Trophy className="w-6 h-6" />,
      Monitor: <Monitor className="w-6 h-6" />,
      Users: <Users className="w-6 h-6" />,
    };
    return icons[iconName] || <ChevronRight className="w-6 h-6" />;
  };

  // Get background image URL based on pillar ID
  const getPillarBackgroundImage = (id: number) => {
    const images = [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
    ];
    return images[id - 1] || images[0];
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-6xl rounded-xl shadow-2xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between bg-navy p-4 text-white sticky top-0 z-10">
          <div>
            <h2 className="text-xl font-bold">PickleBills Platform Dashboard</h2>
            <p className="text-white/80 text-sm">Interactive preview of our 5-pillar solution</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-white/10 transition-colors"
            aria-label="Close dashboard"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <p className="text-sm text-gray-500 mb-1">Total Players</p>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-bold text-navy">2,547</p>
                <div className="flex items-center text-green-500 text-sm">
                  <span className="mr-1">↑</span>
                  <span>18%</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <p className="text-sm text-gray-500 mb-1">Active Venues</p>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-bold text-navy">24</p>
                <div className="flex items-center text-green-500 text-sm">
                  <span className="mr-1">↑</span>
                  <span>12%</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <p className="text-sm text-gray-500 mb-1">Matches Recorded</p>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-bold text-navy">12,890</p>
                <div className="flex items-center text-green-500 text-sm">
                  <span className="mr-1">↑</span>
                  <span>24%</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <p className="text-sm text-gray-500 mb-1">Engagement Score</p>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-bold text-navy">87%</p>
                <div className="flex items-center text-green-500 text-sm">
                  <span className="mr-1">↑</span>
                  <span>9%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars Display */}
          <h3 className="text-lg font-bold text-navy mb-4">Platform Capabilities</h3>
          <div className="space-y-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Pillar Info */}
                  <div className="p-6 lg:col-span-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-primary/10 rounded-full p-2 text-primary">
                        {getPillarIcon(pillar.icon)}
                      </div>
                      <h4 className="text-xl font-bold text-navy">{pillar.title}</h4>
                    </div>
                    <p className="text-gray-600 mb-4">{pillar.description}</p>
                    <AnimatedButton size="sm" variant="outline" withArrow>
                      Explore Capability
                    </AnimatedButton>
                  </div>

                  {/* Pillar Visual */}
                  <div
                    className="h-48 lg:h-auto bg-gray-200 relative lg:col-span-1"
                    style={{
                      backgroundImage: `url(${getPillarBackgroundImage(pillar.id)})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-navy/30"></div>
                  </div>

                  {/* Pillar Metrics */}
                  <div className="p-4 bg-gray-50 lg:col-span-1">
                    <h5 className="text-sm font-medium text-navy mb-3">Key Metrics</h5>
                    <div className="space-y-3">
                      {pillarMetrics[pillar.id]?.map((metric) => (
                        <div
                          key={metric.id}
                          className="bg-white p-3 rounded-lg border border-gray-100"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">{metric.label}</span>
                            <div className="flex items-center gap-1">
                              <span
                                className={`text-xs ${
                                  metric.trend === "up"
                                    ? "text-green-500"
                                    : metric.trend === "down"
                                    ? "text-red-500"
                                    : "text-gray-500"
                                }`}
                              >
                                {metric.trend === "up"
                                  ? "↑"
                                  : metric.trend === "down"
                                  ? "↓"
                                  : "−"}{" "}
                                {metric.percentage}
                              </span>
                            </div>
                          </div>
                          <div className="text-lg font-bold text-navy">{metric.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Footer */}
        <div className="bg-gray-50 p-4 border-t border-gray-200 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Data shown is representative of system capabilities
          </div>
          <AnimatedButton onClick={onClose} variant="primary">
            Close Dashboard
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default DashboardModal;
