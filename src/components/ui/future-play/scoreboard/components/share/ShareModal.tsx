
import React, { useState } from "react";
import { X, Twitter, Facebook, Instagram, Link, ChevronRight, CheckCircle2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PremiumTeaser from "./PremiumTeaser";
import EngagementMetrics from "./EngagementMetrics";
import PlayerSocialActivity from "./PlayerSocialActivity";
import MatchInsights from "./MatchInsights";
import ContentCalendar from "./ContentCalendar";
import PremiumAnalyticsTab from "./PremiumAnalyticsTab";
import QuickShareTab from "./QuickShareTab";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  isMatchShare?: boolean;
}

const ShareModal: React.FC<ShareModalProps> = ({ 
  isOpen, 
  onClose, 
  isMatchShare = false 
}) => {
  const [activeTab, setActiveTab] = useState("quick-share");
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-navy rounded-xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-xl animate-scale-in">
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <h2 className="text-xl font-semibold text-white">
            {isMatchShare ? "Share Match" : "Share"}
          </h2>
          <button 
            onClick={onClose}
            className="text-white/70 hover:text-white p-1 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="bg-navy-light px-4 py-2">
            <TabsList className="grid grid-cols-2 bg-navy-dark rounded-lg h-auto p-1">
              <TabsTrigger
                value="quick-share"
                className="rounded-md py-2 data-[state=active]:bg-primary data-[state=active]:text-white text-white/70"
              >
                Quick Share
              </TabsTrigger>
              <TabsTrigger
                value="premium"
                className="rounded-md py-2 data-[state=active]:bg-[#FFD700] data-[state=active]:text-navy-dark text-white/70"
              >
                Premium Analytics
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="overflow-y-auto" style={{ maxHeight: "calc(100vh - 200px)" }}>
            <TabsContent value="quick-share" className="mt-0 focus-visible:outline-none">
              <QuickShareTab isMatchShare={isMatchShare} />
            </TabsContent>

            <TabsContent value="premium" className="mt-0 focus-visible:outline-none">
              <PremiumAnalyticsTab isMatchShare={isMatchShare} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default ShareModal;
