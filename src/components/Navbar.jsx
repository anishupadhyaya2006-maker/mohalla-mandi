import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { DEMO_SOCIETIES } from '../data/seedData';
import {
  Building,
  Coins,
  Sun,
  Moon,
  ChevronDown,
  User,
  Users,
  Briefcase,
  Store,
  Shield,
  BarChart3,
  LogIn,
  LogOut,
  Sparkles,
  MapPin
} from 'lucide-react';

export default function Navbar() {
  const {
    theme,
    toggleTheme,
    currentUser,
    currentSociety,
    setCurrentSociety,
    activeView,
    setActiveView,
    setResidentTab,
    setIsAuthModalOpen,
    setAuthMode,
    switchPersona,
    signOut,
  } = useApp();

  const [isSocietyMenuOpen, setIsSocietyMenuOpen] = useState(false);
  const [isPersonaMenuOpen, setIsPersonaMenuOpen] = useState(false);

  const views = [
    { id: 'landing', label: 'Overview', icon: Building },
    { id: 'resident', label: 'Resident View', icon: Users },
    { id: 'company_admin', label: 'Company Admin', icon: Briefcase },
    { id: 'shop_owner', label: 'Shop Owner', icon: Store },
    { id: 'rwa', label: 'RWA View', icon: Shield },
    { id: 'pilot', label: 'Pilot Dashboard', icon: BarChart3 },
  ];

  const handleWalletClick = () => {
    setActiveView('resident');
    setResidentTab('wallet');
  };

  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-[#1a130e]/95 border-b border-[#36291e] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo & Society Selector */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveView('landing')}
              className="flex items-center gap-2.5 group text-left focus-visible:ring-2 focus-visible:ring-[#dfaa43] rounded-lg p-1"
              aria-label="Mohalla Mandi Home"
            >
              {/* Brand Icon: 4 mini clay/brass windows with warm glow */}
              <div className="w-9 h-9 rounded-lg bg-[#251a12] border border-[#a37220]/50 p-1.5 grid grid-cols-2 gap-1 shadow-[0_0_12px_rgba(203,146,45,0.2)] group-hover:border-[#dfaa43] transition-colors">
                <div className="bg-[#dfaa43] rounded-sm"></div>
                <div className="bg-[#dc7545] rounded-sm"></div>
                <div className="bg-[#dfaa43] rounded-sm"></div>
                <div className="bg-[#a37220] rounded-sm"></div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-bold text-lg text-[#f7f2ea] tracking-tight">
                    Mohalla Mandi
                  </span>
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 bg-[#38281b] text-[#ecc26b] rounded border border-[#c58c2b]/40">
                    BLR
                  </span>
                </div>
                <p className="text-[11px] text-[#a6917b] font-sans hidden sm:block">
                  Neighbourhood Community Economy
                </p>
              </div>
            </button>

            {/* Society Selector Dropdown */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setIsSocietyMenuOpen(!isSocietyMenuOpen)}
                className="flex items-center gap-1.5 text-xs text-[#d4c5b3] hover:text-[#fbf8f3] px-2.5 py-1.5 rounded-md bg-[#241a13] border border-[#3c2f24] hover:border-[#5c4a3a] transition-colors"
                title="Change Society"
              >
                <MapPin className="w-3.5 h-3.5 text-[#dfaa43]" />
                <span className="font-medium text-[#f2ebe1]">{currentSociety}</span>
                <ChevronDown className="w-3 h-3 text-[#a6917b]" />
              </button>

              {isSocietyMenuOpen && (
                <div className="absolute left-0 mt-1 w-64 rounded-xl bg-[#211a14] border border-[#483a2e] shadow-2xl py-1 z-50 text-left">
                  <div className="px-3 py-1.5 border-b border-[#36291e] text-[10px] uppercase font-mono text-[#a6917b]">
                    Select Pilot Society (Demo Data)
                  </div>
                  {DEMO_SOCIETIES.map((soc) => (
                    <button
                      key={soc.id}
                      onClick={() => {
                        setCurrentSociety(soc.name);
                        setIsSocietyMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex flex-col hover:bg-[#2e2319] transition-colors ${
                        currentSociety === soc.name ? 'bg-[#38281b] text-[#ecc26b] font-medium' : 'text-[#cfbea5]'
                      }`}
                    >
                      <span className="font-medium">{soc.name}</span>
                      <span className="text-[10px] text-[#8e7a68]">{soc.area} · {soc.units} flats</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Role Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1 p-1 bg-[#211a14] border border-[#36291e] rounded-xl">
            {views.map((v) => {
              const Icon = v.icon;
              const isActive = activeView === v.id;
              return (
                <button
                  key={v.id}
                  onClick={() => setActiveView(v.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    isActive
                      ? 'bg-[#38281b] text-[#ecc26b] border border-[#c58c2b]/50 shadow-sm'
                      : 'text-[#a6917b] hover:text-[#f2ebe1] hover:bg-[#2b2118]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#dfaa43]' : 'text-[#8e7a68]'}`} />
                  <span>{v.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2.5">
            {/* Mohalla Mudra Wallet Pill (Polished Brass / Roasted Kaapi) */}
            <button
              onClick={handleWalletClick}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#261b12] border border-[#c58c2b]/50 hover:border-[#dfaa43] text-[#ecc26b] transition-all shadow-[0_0_12px_rgba(203,146,45,0.15)] group"
              title="Click to view Wallet & Spend credits at local shops"
            >
              <div className="w-5 h-5 rounded-full bg-[#3c2b1e] flex items-center justify-center border border-[#dfaa43]/40">
                <Coins className="w-3 h-3 text-[#dfaa43] group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-[#b5a085] font-mono leading-none">
                  Mohalla Mudra
                </span>
                <span className="text-sm font-bold font-mono text-[#f5dc9e] leading-tight">
                  {currentUser?.credits ?? 0} <span className="text-xs font-sans font-normal text-[#c9b7a3]">MM</span>
                </span>
              </div>
            </button>

            {/* Day / Night Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-[#241a13] border border-[#3c2f24] text-[#cfbea5] hover:text-[#dfaa43] hover:border-[#c58c2b]/40 transition-colors"
              title={theme === 'night' ? 'Switch to Day Khadi Mode' : 'Switch to Night Kaapi Mode'}
              aria-label="Toggle Night and Day theme"
            >
              {theme === 'night' ? (
                <Sun className="w-4 h-4 text-[#dfaa43]" />
              ) : (
                <Moon className="w-4 h-4 text-[#a6917b]" />
              )}
            </button>

            {/* User Profile / Quick Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsPersonaMenuOpen(!isPersonaMenuOpen)}
                className="flex items-center gap-2 p-1.5 rounded-xl bg-[#241a13] border border-[#3c2f24] hover:border-[#5c4a3a] text-[#f2ebe1] text-xs transition-colors"
                aria-label="User profile and persona switch"
              >
                <div className="w-7 h-7 rounded-md bg-[#38281b] text-[#ecc26b] border border-[#c58c2b]/40 flex items-center justify-center font-bold text-xs">
                  {currentUser?.avatar || 'MM'}
                </div>
                <div className="hidden sm:flex flex-col text-left max-w-[120px]">
                  <span className="font-medium text-[#f2ebe1] truncate leading-tight">
                    {currentUser?.name || 'Guest'}
                  </span>
                  <span className="text-[10px] text-[#a6917b] truncate leading-none capitalize">
                    {currentUser?.role?.replace('_', ' ') || 'Resident'}
                  </span>
                </div>
                <ChevronDown className="w-3 h-3 text-[#a6917b] hidden sm:block" />
              </button>

              {isPersonaMenuOpen && (
                <div className="absolute right-0 mt-1 w-72 rounded-2xl bg-[#211a14] border border-[#483a2e] shadow-2xl py-2 z-50 text-left">
                  <div className="px-3 py-2 border-b border-[#36291e]">
                    <p className="text-xs font-semibold text-[#f7f2ea]">{currentUser?.name}</p>
                    <p className="text-[11px] text-[#a6917b]">{currentUser?.email}</p>
                    <div className="mt-1 flex items-center gap-2 text-[10px] text-[#ecc26b] font-mono">
                      <span>{currentUser?.society}</span>
                      <span>•</span>
                      <span>{currentUser?.company}</span>
                    </div>
                  </div>

                  <div className="px-3 py-1.5 text-[10px] uppercase font-mono text-[#8e7a68]">
                    Instant Demo Role Switch (Chaturanga Pitch)
                  </div>

                  <button
                    onClick={() => {
                      switchPersona('resident');
                      setIsPersonaMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs flex items-center gap-2 hover:bg-[#2b2118] text-[#ded3c4] transition-colors"
                  >
                    <Users className="w-4 h-4 text-[#dfaa43]" />
                    <div>
                      <div className="font-medium text-[#f2ebe1]">Ananya Iyer (Resident)</div>
                      <div className="text-[10px] text-[#a6917b]">Flipkart Tech · Sobha Carnation Flat 402</div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      switchPersona('company_admin');
                      setIsPersonaMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs flex items-center gap-2 hover:bg-[#2b2118] text-[#ded3c4] transition-colors"
                  >
                    <Briefcase className="w-4 h-4 text-[#dc7545]" />
                    <div>
                      <div className="font-medium text-[#f2ebe1]">Vikram S. (Company Admin)</div>
                      <div className="text-[10px] text-[#a6917b]">Infosys BPM & Tech Wellness Lead</div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      switchPersona('shop_owner');
                      setIsPersonaMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs flex items-center gap-2 hover:bg-[#2b2118] text-[#ded3c4] transition-colors"
                  >
                    <Store className="w-4 h-4 text-[#ecc26b]" />
                    <div>
                      <div className="font-medium text-[#f2ebe1]">Murthy & Srinath (Shop Owner)</div>
                      <div className="text-[10px] text-[#a6917b]">Annapoorna Kirana & Kaapi Corner</div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      switchPersona('rwa');
                      setIsPersonaMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs flex items-center gap-2 hover:bg-[#2b2118] text-[#ded3c4] transition-colors"
                  >
                    <Shield className="w-4 h-4 text-[#c4b4a0]" />
                    <div>
                      <div className="font-medium text-[#f2ebe1]">Dr. Geetha R. (RWA Secretary)</div>
                      <div className="text-[10px] text-[#a6917b]">Sobha Carnation Management Committee</div>
                    </div>
                  </button>

                  <div className="border-t border-[#36291e] mt-2 pt-2 px-2 flex items-center justify-between">
                    <button
                      onClick={() => {
                        setAuthMode('signup');
                        setIsAuthModalOpen(true);
                        setIsPersonaMenuOpen(false);
                      }}
                      className="text-xs text-[#ecc26b] hover:text-[#fbedd1] px-2 py-1 font-medium"
                    >
                      Create Custom Account
                    </button>
                    <button
                      onClick={() => {
                        signOut();
                        setIsPersonaMenuOpen(false);
                      }}
                      className="flex items-center gap-1 text-xs text-[#a6917b] hover:text-[#dc7545] px-2 py-1"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Mobile View Navigation Scroller */}
        <div className="lg:hidden flex items-center gap-1.5 overflow-x-auto py-2 border-t border-[#36291e] scrollbar-none">
          {views.map((v) => {
            const Icon = v.icon;
            const isActive = activeView === v.id;
            return (
              <button
                key={v.id}
                onClick={() => setActiveView(v.id)}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? 'bg-[#38281b] text-[#ecc26b] border border-[#c58c2b]/50'
                    : 'text-[#a6917b] hover:text-[#f2ebe1] bg-[#241a13]'
                }`}
              >
                <Icon className="w-3 h-3" />
                <span>{v.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
