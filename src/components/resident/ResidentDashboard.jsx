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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#ddd0be] dark:border-[#38251a]">
        
        {/* User context header */}
        <div className="text-left">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#0052cc] dark:text-[#2684ff] font-extrabold uppercase tracking-wider">
              Resident Commons
            </span>
            <span className="text-[#ddd0be] text-xs font-bold">•</span>
            <span className="text-xs text-[#4a3528] dark:text-[#ddd0be] font-bold">
              {currentUser?.name || 'Resident'} ({currentSociety})
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#23150d] dark:text-[#faf6ee] mt-1 tracking-tight">
            Society Marketplace & Commons
          </h1>
        </div>

        {/* Tab Buttons Strip */}
        <div className="flex items-center gap-1.5 p-1 bg-[#f1e9dc] dark:bg-[#1f140e] border border-[#ddd0be] dark:border-[#38251a] rounded-2xl overflow-x-auto scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = residentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setResidentTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs rounded-xl transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-white dark:bg-[#2c1d15] text-[#0052cc] dark:text-[#2684ff] border-2 border-[#0052cc] dark:border-[#2684ff] shadow-sm font-bold'
                    : 'text-[#23150d] dark:text-[#ddd0be] hover:text-[#0052cc] dark:hover:text-[#faf6ee] hover:bg-[#e8ded0] dark:hover:bg-[#2c1d15] font-bold'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#0052cc] dark:text-[#2684ff]' : 'text-[#4a3528] dark:text-[#9c8574]'}`} />
                <span>{tab.label}</span>
                <span
                  className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-extrabold ${
                    isActive ? 'bg-[#0052cc] text-white' : 'bg-[#e8ded0] dark:bg-[#160e09] text-[#755e4e] dark:text-[#ddd0be] border border-[#c4b49f] dark:border-[#38251a]'
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
