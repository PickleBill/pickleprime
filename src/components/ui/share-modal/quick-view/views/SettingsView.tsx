
import React from "react";
import { Settings, BellRing, Shield, Eye, Smartphone, Clock, Languages, HelpCircle } from "lucide-react";

const SettingsView: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-navy-dark/90 to-navy/90 backdrop-blur-lg rounded-lg p-6 mb-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Settings</h3>
        <Settings className="text-teal-400 w-5 h-5" />
      </div>

      {/* Settings Categories */}
      <div className="space-y-5">
        <SettingsCategory 
          icon={<BellRing className="w-5 h-5 text-cyan-400" />}
          title="Notifications"
          description="Manage alerts and notification preferences"
        >
          <div className="space-y-3 mt-3">
            <ToggleSetting label="Match Updates" enabled={true} />
            <ToggleSetting label="Friend Activity" enabled={true} />
            <ToggleSetting label="Community Messages" enabled={false} />
          </div>
        </SettingsCategory>

        <SettingsCategory 
          icon={<Shield className="w-5 h-5 text-green-500" />}
          title="Privacy"
          description="Control who can see your activity"
        >
          <div className="space-y-3 mt-3">
            <ToggleSetting label="Public Profile" enabled={true} />
            <ToggleSetting label="Share Match History" enabled={true} />
          </div>
        </SettingsCategory>

        <SettingsCategory 
          icon={<Eye className="w-5 h-5 text-purple-500" />}
          title="Display"
          description="Customize your visual experience"
        >
          <div className="mt-3 space-y-2">
            <DisplayOption label="Dark Theme" value="On" />
            <DisplayOption label="Court Colors" value="Default" />
          </div>
        </SettingsCategory>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <QuickSetting icon={<Smartphone />} label="Device Settings" />
          <QuickSetting icon={<Clock />} label="Time Zone" />
          <QuickSetting icon={<Languages />} label="Language" />
          <QuickSetting icon={<HelpCircle />} label="Help & Support" />
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/10">
        <button className="w-full py-2.5 bg-teal-500/20 hover:bg-teal-500/30 text-teal-400 rounded-md transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
};

interface SettingsCategoryProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  children?: React.ReactNode;
}

const SettingsCategory: React.FC<SettingsCategoryProps> = ({ 
  icon, title, description, children 
}) => {
  return (
    <div className="pb-4 border-b border-white/10">
      <div className="flex items-start">
        <div className="p-2 bg-navy-light/50 rounded-lg mr-3">
          {icon}
        </div>
        <div>
          <h4 className="text-white font-medium">{title}</h4>
          <p className="text-white/60 text-sm">{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
};

interface ToggleSettingProps {
  label: string;
  enabled: boolean;
}

const ToggleSetting: React.FC<ToggleSettingProps> = ({ label, enabled }) => {
  return (
    <div className="flex justify-between items-center">
      <span className="text-white/80 text-sm">{label}</span>
      <div className={`w-10 h-5 rounded-full p-0.5 ${enabled ? 'bg-teal-400' : 'bg-gray-600'}`}>
        <div 
          className={`w-4 h-4 rounded-full bg-white transform transition-transform ${
            enabled ? 'translate-x-5' : 'translate-x-0'
          }`} 
        />
      </div>
    </div>
  );
};

interface DisplayOptionProps {
  label: string;
  value: string;
}

const DisplayOption: React.FC<DisplayOptionProps> = ({ label, value }) => {
  return (
    <div className="flex justify-between items-center">
      <span className="text-white/80 text-sm">{label}</span>
      <span className="text-white text-sm bg-navy-light/40 px-3 py-1 rounded-md">{value}</span>
    </div>
  );
};

interface QuickSettingProps {
  icon: React.ReactNode;
  label: string;
}

const QuickSetting: React.FC<QuickSettingProps> = ({ icon, label }) => {
  return (
    <div className="flex items-center gap-2 bg-navy-light/30 p-3 rounded-lg hover:bg-navy-light/40 transition-colors cursor-pointer">
      <div className="text-teal-400/80">{icon}</div>
      <span className="text-white/80 text-sm">{label}</span>
    </div>
  );
};

export default SettingsView;
