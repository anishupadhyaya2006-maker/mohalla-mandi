import React from 'react';
import { useApp } from '../../context/AppContext';
import EventsTab from './EventsTab';
import WalletTab from './WalletTab';
import LeagueTab from './LeagueTab';
import RewardsTab from './RewardsTab';
import { Calendar, Wallet, Trophy, Leaf, Sparkles, Building } from 'lucide-react';

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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        
        {/* User context header */}
        <div className="text-left">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
              Resident Hub
            </span>
            <span className="text-slate-400 text-xs">•</span>
            <span className="text-xs text-slate-300 font-medium">
              {currentUser?.name || 'Resident'} ({currentSociety})
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-slate-100 mt-1">
            Society Marketplace & Commons
          </h1>
        </div>

        {/* Tab Buttons Strip */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-2xl overflow-x-auto scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = residentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setResidentTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-xl transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
                <span
                  className={`text-[9px] font-mono px-1.5 py-0.2 rounded ${
                    isActive ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
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
