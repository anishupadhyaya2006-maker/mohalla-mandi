import React from 'react';
import { useApp } from '../../context/AppContext';
import EventsTab from './EventsTab';
import WalletTab from './WalletTab';
import LeagueTab from './LeagueTab';
import RewardsTab from './RewardsTab';
import { Calendar, Wallet, Trophy, Leaf } from 'lucide-react';

export default function ResidentDashboard() {
  const { residentTab, setResidentTab, currentUser, currentSociety } = useApp();

  const tabs = [
    { id: 'events', label: 'Events & Workshops', icon: Calendar, badge: 'Earn' },
    { id: 'wallet', label: 'Wallet & Local Shops', icon: Wallet, badge: 'Spend' },
    { id: 'league', label: 'Company League', icon: Trophy, badge: 'Compete' },
    { id: 'rewards', label: 'Green Rewards', icon: Leaf, badge: 'Eco' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-200">
      
      {/* Resident Sub-navigation Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#36291e]">
        
        {/* User context header */}
        <div className="text-left">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#ecc26b] font-bold uppercase tracking-wider">
              Resident Commons
            </span>
            <span className="text-[#8e7a68] text-xs">•</span>
            <span className="text-xs text-[#cfbea5] font-medium">
              {currentUser?.name || 'Resident'} ({currentSociety})
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-[#f7f2ea] mt-1">
            Society Marketplace & Commons
          </h1>
        </div>

        {/* Tab Buttons Strip */}
        <div className="flex items-center gap-1.5 p-1 bg-[#241a13] border border-[#3c2f24] rounded-2xl overflow-x-auto scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = residentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setResidentTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-xl transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#38281b] text-[#ecc26b] border border-[#c58c2b]/50 shadow-sm'
                    : 'text-[#a6917b] hover:text-[#f2ebe1] hover:bg-[#2e2319]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#dfaa43]' : 'text-[#8e7a68]'}`} />
                <span>{tab.label}</span>
                <span
                  className={`text-[9px] font-mono px-1.5 py-0.2 rounded ${
                    isActive ? 'bg-[#dfaa43] text-[#1c140d] font-bold' : 'bg-[#1a120c] text-[#8e7a68]'
                  }`}
                >
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>

      </div>

      {/* Tab Content Display */}
      <div className="mt-8">
        {residentTab === 'events' && <EventsTab />}
        {residentTab === 'wallet' && <WalletTab />}
        {residentTab === 'league' && <LeagueTab />}
        {residentTab === 'rewards' && <RewardsTab />}
      </div>

    </div>
  );
}
