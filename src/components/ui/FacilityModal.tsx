
import React from "react";
import { X, BarChart2, Users, DollarSign, TrendingUp, Calendar, Settings, Activity } from "lucide-react";

interface FacilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FacilityModal = ({ isOpen, onClose }: FacilityModalProps) => {
  if (!isOpen) return null;

  // Sample court utilization data
  const utilizationData = [
    { day: "Mon", percent: 65 },
    { day: "Tue", percent: 52 },
    { day: "Wed", percent: 78 },
    { day: "Thu", percent: 45 },
    { day: "Fri", percent: 85 },
    { day: "Sat", percent: 92 },
    { day: "Sun", percent: 88 },
  ];

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-xl w-full max-w-5xl max-h-[95vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-navy text-white p-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-2 rounded">
              <Settings className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold">PickleBills Facility Dashboard</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Sidebar and Main Content */}
        <div className="flex-1 overflow-auto flex">
          {/* Sidebar */}
          <div className="hidden md:block w-64 bg-gray-50 border-r border-gray-200 p-4">
            <div className="space-y-1">
              <div className="bg-primary/10 text-primary rounded-md p-2 flex items-center gap-2">
                <BarChart2 className="w-5 h-5" />
                <span className="font-medium">Dashboard</span>
              </div>
              <div className="hover:bg-gray-100 rounded-md p-2 flex items-center gap-2 text-gray-700">
                <Calendar className="w-5 h-5" />
                <span>Reservations</span>
              </div>
              <div className="hover:bg-gray-100 rounded-md p-2 flex items-center gap-2 text-gray-700">
                <Users className="w-5 h-5" />
                <span>Members</span>
              </div>
              <div className="hover:bg-gray-100 rounded-md p-2 flex items-center gap-2 text-gray-700">
                <DollarSign className="w-5 h-5" />
                <span>Revenue</span>
              </div>
              <div className="hover:bg-gray-100 rounded-md p-2 flex items-center gap-2 text-gray-700">
                <Activity className="w-5 h-5" />
                <span>Analytics</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Your Facility</h4>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
                <div className="w-full h-24 bg-gray-200 rounded-md overflow-hidden mb-3">
                  <img 
                    src="/lovable-uploads/c35d445c-43d1-4719-a56f-dc693c4903f1.png" 
                    alt="Facility" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h5 className="font-medium text-navy">Sunshine Pickleball Club</h5>
                <p className="text-xs text-gray-500">12 Courts • Premium Facility</p>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            {/* Top Stats */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-navy mb-6">Facility Dashboard</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-gray-600">Active Players</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-navy">458</span>
                    <span className="text-xs text-green-600">↑ 24 this month</span>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-gray-600">Court Bookings</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-navy">156</span>
                    <span className="text-xs text-green-600">↑ 12% last week</span>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-gray-600">Court Utilization</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-navy">72%</span>
                    <span className="text-xs text-green-600">↑ 8% this month</span>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <DollarSign className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-gray-600">Revenue</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-navy">$12,845</span>
                    <span className="text-xs text-green-600">↑ 15% vs last month</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Court Utilization Chart */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-navy">Court Utilization (This Week)</h3>
                <div className="flex items-center gap-2">
                  <button className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">Week</button>
                  <button className="text-xs font-medium text-gray-500 hover:bg-gray-100 px-3 py-1 rounded-full">Month</button>
                  <button className="text-xs font-medium text-gray-500 hover:bg-gray-100 px-3 py-1 rounded-full">Year</button>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-4 h-64">
                <div className="flex h-full items-end gap-4 pt-8">
                  {utilizationData.map((item) => (
                    <div key={item.day} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-gray-100 rounded-t-md relative" style={{ height: `${item.percent}%` }}>
                        <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 font-medium text-navy">
                          {item.percent}%
                        </div>
                        <div className={`absolute inset-0 rounded-t-md ${
                          item.percent > 80 ? 'bg-primary' : 
                          item.percent > 60 ? 'bg-green-500' : 
                          item.percent > 40 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}></div>
                      </div>
                      <div className="text-xs font-medium text-gray-500">{item.day}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Recent Activity and Upcoming Reservations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
              {/* Recent Activity */}
              <div>
                <h3 className="text-lg font-semibold text-navy mb-4">Recent Activity</h3>
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="divide-y divide-gray-100">
                    <div className="p-4 flex items-start gap-3">
                      <div className="p-2 rounded-full bg-green-100 text-green-600 shrink-0">
                        <DollarSign className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-medium text-navy">New Booking Revenue</div>
                        <div className="text-sm text-gray-500">$120.00 from court reservations</div>
                        <div className="text-xs text-gray-400 mt-1">10 minutes ago</div>
                      </div>
                    </div>
                    
                    <div className="p-4 flex items-start gap-3">
                      <div className="p-2 rounded-full bg-blue-100 text-blue-600 shrink-0">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-medium text-navy">New Member Signup</div>
                        <div className="text-sm text-gray-500">Jennifer L. registered as a premium member</div>
                        <div className="text-xs text-gray-400 mt-1">32 minutes ago</div>
                      </div>
                    </div>
                    
                    <div className="p-4 flex items-start gap-3">
                      <div className="p-2 rounded-full bg-purple-100 text-purple-600 shrink-0">
                        <Activity className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-medium text-navy">Tournament Registration</div>
                        <div className="text-sm text-gray-500">8 new players registered for Summer Slam</div>
                        <div className="text-xs text-gray-400 mt-1">1 hour ago</div>
                      </div>
                    </div>
                    
                    <div className="p-4 flex items-start gap-3">
                      <div className="p-2 rounded-full bg-yellow-100 text-yellow-600 shrink-0">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-medium text-navy">Court Maintenance</div>
                        <div className="text-sm text-gray-500">Courts 3 & 4 scheduled for resurfacing</div>
                        <div className="text-xs text-gray-400 mt-1">2 hours ago</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Today's Reservations */}
              <div>
                <h3 className="text-lg font-semibold text-navy mb-4">Today's Reservations</h3>
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="divide-y divide-gray-100">
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <div className="font-medium text-navy">Court 1</div>
                        <div className="text-sm text-gray-500">9:00 AM - 10:30 AM</div>
                        <div className="text-sm text-primary">David & Maria vs. John & Sarah</div>
                      </div>
                      <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                        Confirmed
                      </div>
                    </div>
                    
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <div className="font-medium text-navy">Court 5</div>
                        <div className="text-sm text-gray-500">10:00 AM - 11:30 AM</div>
                        <div className="text-sm text-primary">Beginner Clinic (8 players)</div>
                      </div>
                      <div className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full font-medium">
                        Check In
                      </div>
                    </div>
                    
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <div className="font-medium text-navy">Court 3</div>
                        <div className="text-sm text-gray-500">12:00 PM - 1:30 PM</div>
                        <div className="text-sm text-primary">Open Play (4 courts)</div>
                      </div>
                      <div className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">
                        17 Players
                      </div>
                    </div>
                    
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <div className="font-medium text-navy">Court 8</div>
                        <div className="text-sm text-gray-500">3:00 PM - 4:30 PM</div>
                        <div className="text-sm text-primary">Advanced League Play</div>
                      </div>
                      <div className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full font-medium">
                        League Event
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* AI Insights */}
            <div className="p-6 bg-gray-50">
              <div className="bg-white border border-primary/20 rounded-xl p-4 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z" stroke="#2BCB6E" strokeWidth="2"/>
                      <path d="M12 8V16" stroke="#2BCB6E" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M8 12H16" stroke="#2BCB6E" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-navy font-semibold mb-1">AI Insights</h4>
                    <p className="text-gray-600 text-sm mb-3">Based on your facility's data, we've identified these opportunities:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                        <span className="text-sm text-gray-700">Consider adding intermediate clinics on Tuesday evenings, when court utilization is at its lowest but demand is high.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                        <span className="text-sm text-gray-700">Your member retention could improve by 15% by introducing a loyalty program - we've prepared a template for you.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                        <span className="text-sm text-gray-700">Weekend tournaments have proven to increase monthly revenue by 22% for facilities like yours.</span>
                      </li>
                    </ul>
                    <button className="mt-4 bg-primary/10 text-primary px-4 py-2 text-sm font-medium rounded-md hover:bg-primary/20 transition-colors">
                      See All AI Recommendations
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="border-t p-4 bg-gray-50">
          <div className="flex justify-end">
            <button 
              onClick={onClose}
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-md transition-colors"
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityModal;
