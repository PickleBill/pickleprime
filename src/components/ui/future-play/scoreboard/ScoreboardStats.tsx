
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PlayerStats } from "./types"; // Make sure this path is correct
import StatCard from "./components/StatsPanel"; // Updated import path

interface ScoreboardStatsProps {
  player1Stats: PlayerStats;
  player2Stats: PlayerStats;
  player1Name?: string;
  player2Name?: string;
  isExpanded?: boolean;
}

const ScoreboardStats: React.FC<ScoreboardStatsProps> = ({
  player1Stats,
  player2Stats,
  player1Name = "Player 1",
  player2Name = "Player 2",
  isExpanded = false,
}) => {
  const accuracyData = [
    {
      name: "Dinks",
      Player1: player1Stats.dinkAccuracy,
      Player2: player2Stats.dinkAccuracy,
    },
    {
      name: "Drives",
      Player1: player1Stats.driveAccuracy,
      Player2: player2Stats.driveAccuracy,
    },
    {
      name: "Volleys",
      Player1: player1Stats.volleyAccuracy,
      Player2: player2Stats.volleyAccuracy,
    },
    {
      name: "Serves",
      Player1: player1Stats.serveAccuracy,
      Player2: player2Stats.serveAccuracy,
    },
  ];

  const BarTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-navy-dark/90 p-2 rounded-lg border border-white/20 text-xs">
          <p className="font-semibold text-white">{label}</p>
          <p className="text-green-400">{player1Name}: {payload[0].value}%</p>
          <p className="text-blue-400">{player2Name}: {payload[1].value}%</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className={cn(
      "bg-navy-light/10 rounded-lg overflow-hidden transition-all",
      isExpanded ? "h-auto" : "max-h-40"
    )}>
      <Tabs defaultValue="accuracy" className="w-full">
        <div className="bg-navy-dark/40 px-3 py-1 flex items-center justify-between">
          <TabsList className="bg-transparent h-8">
            <TabsTrigger
              value="accuracy"
              className="text-xs h-7 data-[state=active]:bg-navy-light/30 rounded-sm px-2"
            >
              Shot Accuracy
            </TabsTrigger>
            <TabsTrigger
              value="efficiency"
              className="text-xs h-7 data-[state=active]:bg-navy-light/30 rounded-sm px-2"
            >
              Efficiency
            </TabsTrigger>
            <TabsTrigger
              value="energy"
              className="text-xs h-7 data-[state=active]:bg-navy-light/30 rounded-sm px-2"
            >
              Energy
            </TabsTrigger>
          </TabsList>
          
          <div className="flex items-center gap-1 text-xs text-white/70">
            <span>View Detailed Stats</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
        
        <TabsContent value="accuracy" className="p-3 m-0">
          <ResponsiveContainer width="100%" height={120}>
            <BarChart
              data={accuracyData}
              margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
              barSize={12}
              barGap={8}
            >
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 10, fill: "#FFFFFF99" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                hide={true} 
                domain={[0, 100]}
              />
              <Tooltip content={<BarTooltip />} />
              <Bar dataKey="Player1" fill="#4CAF50" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Player2" fill="#2196F3" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </TabsContent>
        
        <TabsContent value="efficiency" className="p-3 m-0">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-white/70">Shot Efficiency</span>
                <div>
                  <span className="text-green-400 font-medium">{player1Stats.shotEfficiency}%</span>
                  <span className="text-white/50 mx-1">vs</span>
                  <span className="text-blue-400 font-medium">{player2Stats.shotEfficiency}%</span>
                </div>
              </div>
              <div className="flex h-2 w-full bg-navy/50 rounded-full overflow-hidden">
                <div 
                  className="bg-green-400"
                  style={{ width: `${player1Stats.shotEfficiency}%` }}
                ></div>
                <div 
                  className="bg-blue-400 ml-auto"
                  style={{ width: `${player2Stats.shotEfficiency}%` }}
                ></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-white/70">Ball Speed</span>
                <div>
                  <span className="text-green-400 font-medium">{player1Stats.ballSpeed} mph</span>
                  <span className="text-white/50 mx-1">vs</span>
                  <span className="text-blue-400 font-medium">{player2Stats.ballSpeed} mph</span>
                </div>
              </div>
              <div className="flex h-2 w-full bg-navy/50 rounded-full overflow-hidden">
                <div 
                  className="bg-green-400"
                  style={{ width: `${player1Stats.ballSpeed / 1.2}%` }}
                ></div>
                <div 
                  className="bg-blue-400 ml-auto"
                  style={{ width: `${player2Stats.ballSpeed / 1.2}%` }}
                ></div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="energy" className="p-3 m-0">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-white/70">Distance Covered</span>
                <div>
                  <span className="text-green-400 font-medium">{player1Stats.distance}m</span>
                  <span className="text-white/50 mx-1">vs</span>
                  <span className="text-blue-400 font-medium">{player2Stats.distance}m</span>
                </div>
              </div>
              <div className="flex h-2 w-full bg-navy/50 rounded-full overflow-hidden">
                <div 
                  className="bg-green-400"
                  style={{ width: `${(player1Stats.distance / 100) * 100}%` }}
                ></div>
                <div 
                  className="bg-blue-400 ml-auto"
                  style={{ width: `${(player2Stats.distance / 100) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-white/70">Energy Expended</span>
                <div>
                  <span className="text-green-400 font-medium">{player1Stats.energy}</span>
                  <span className="text-white/50 mx-1">vs</span>
                  <span className="text-blue-400 font-medium">{player2Stats.energy}</span>
                </div>
              </div>
              <div className="flex h-2 w-full bg-navy/50 rounded-full overflow-hidden">
                <div 
                  className="bg-green-400"
                  style={{ width: `${(player1Stats.energy / 10) * 100}%` }}
                ></div>
                <div 
                  className="bg-blue-400 ml-auto"
                  style={{ width: `${(player2Stats.energy / 10) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ScoreboardStats;
