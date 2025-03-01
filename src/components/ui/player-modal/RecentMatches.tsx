
import React from "react";

const RecentMatches = () => {
  return (
    <div className="py-6 bg-[#0FA0CE]/5">
      <div className="container">
        <h3 className="text-lg font-semibold mb-4 text-[#0FA0CE]">Recent Matches</h3>
        <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
          <MatchItem 
            result="WIN"
            matchType="Doubles Match"
            time="Yesterday at 6:30 PM"
            score="11-9, 11-7"
            players="with Alex T. vs. Ryan M. & Sarah L."
          />
          
          <MatchItem 
            result="LOSS"
            matchType="Singles Match"
            time="Tue, Jun 4 at 5:15 PM"
            score="8-11, 11-13"
            players="vs. Chris P."
          />
          
          <MatchItem 
            result="WIN"
            matchType="Doubles Match"
            time="Sun, Jun 2 at 10:00 AM"
            score="11-4, 11-8"
            players="with Taylor K. vs. Jamie B. & Pat S."
            isLast={true}
          />
        </div>
        
        <div className="mt-4 text-center">
          <button className="text-[#0FA0CE] font-medium hover:underline text-sm">
            View All Match History
          </button>
        </div>
      </div>
    </div>
  );
};

interface MatchItemProps {
  result: "WIN" | "LOSS";
  matchType: string;
  time: string;
  score: string;
  players: string;
  isLast?: boolean;
}

const MatchItem = ({ result, matchType, time, score, players, isLast = false }: MatchItemProps) => {
  const resultColor = result === "WIN" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600";
  
  return (
    <div className={`${isLast ? "" : "border-b border-gray-100"} p-4`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 ${resultColor} rounded-full flex items-center justify-center text-xs font-bold`}>
            {result}
          </div>
          <div>
            <div className="font-medium text-navy">{matchType}</div>
            <div className="text-sm text-gray-500">{time}</div>
          </div>
        </div>
        <div className="text-lg font-semibold text-navy">{score}</div>
      </div>
      <div className="mt-2 flex justify-between">
        <div className="text-sm text-gray-500">{players}</div>
        <button className="text-primary text-sm hover:underline">View Stats</button>
      </div>
    </div>
  );
};

export default RecentMatches;
