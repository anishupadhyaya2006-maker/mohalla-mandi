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
    <header className="sticky top-0 z-30 backdrop-blur-md bg-[#faf6ee]/95 dark:bg-[#160e09]/95 border-b border-[#ddd0be] dark:border-[#38251a] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo & Society Selector */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setActiveView('landing')}
              className="flex items-center gap-2.5 group text-left focus-visible:ring-2 focus-visible:ring-[#0052cc] rounded-lg p-1 shrink-0"
              aria-label="Mohalla Mitra Home"
            >
              {/* Brand Icon: 4 mini windows with Deep Atlassian & Ivory glow */}
              <div className="w-9 h-9 rounded-lg bg-[#e8ded0] dark:bg-[#221610] border border-[#0052cc] dark:border-[#2684ff]/50 p-1.5 grid grid-cols-2 gap-1 shadow-[0_0_12px_rgba(0,82,204,0.2)] group-hover:border-[#0747a6] transition-colors shrink-0">
                <div className="bg-[#0747a6] dark:bg-[#2684ff] rounded-sm"></div>
                <div className="bg-[#0052cc] dark:bg-[#4c9aff] rounded-sm"></div>
                <div className="bg-[#2684ff] dark:bg-[#0052cc] rounded-sm"></div>
                <div className="bg-[#23150d] dark:bg-[#faf6ee] rounded-sm"></div>
              </div>
              <div className="shrink-0">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="font-heading font-extrabold text-lg text-[#23150d] dark:text-[#faf6ee] tracking-tight whitespace-nowrap">
                    Mohalla Mitra
                  </span>
                  <span className="text-[10px] uppercase font-mono font-bold px-1.5 py-0.5 bg-[#deebff] dark:bg-[#0c2340] text-[#0052cc] dark:text-[#2684ff] rounded border border-[#0052cc]/40">
                    BLR
                  </span>
                </div>
                <p className="text-[11px] text-[#4a3528] dark:text-[#ddd0be] font-sans font-medium hidden sm:block whitespace-nowrap mt-0.5">
                  Neighbourhood Community Economy
                </p>
              </div>
            </button>

            {/* Society Selector Dropdown */}
            <div className="relative hidden md:block shrink-0">
              <button
                onClick={() => setIsSocietyMenuOpen(!isSocietyMenuOpen)}
                className="flex items-center gap-1.5 text-xs text-[#23150d] dark:text-[#faf6ee] hover:text-[#0052cc] dark:hover:text-[#4c9aff] px-3 py-1.5 rounded-lg bg-white dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] hover:border-[#0052cc] transition-colors shadow-sm font-bold"
                title="Change Society"
              >
                <MapPin className="w-3.5 h-3.5 text-[#0052cc] dark:text-[#2684ff]" />
                <span className="font-bold text-[#23150d] dark:text-[#faf6ee]">{currentSociety}</span>
                <ChevronDown className="w-3 h-3 text-[#4a3528] dark:text-[#ddd0be]" />
              </button>

              {isSocietyMenuOpen && (
                <div className="absolute left-0 mt-1 w-64 rounded-xl bg-white dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] shadow-2xl py-1 z-50 text-left">
                  <div className="px-3 py-1.5 border-b border-[#f1e9dc] dark:border-[#2c1d15] text-[10px] uppercase font-mono text-[#4a3528] dark:text-[#ddd0be] font-bold">
                    Select Pilot Society (Demo Data)
                  </div>
                  {DEMO_SOCIETIES.map((soc) => (
                    <button
                      key={soc.id}
                      onClick={() => {
                        setCurrentSociety(soc.name);
                        setIsSocietyMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex flex-col hover:bg-[#f1e9dc] dark:hover:bg-[#2c1d15] transition-colors ${
                        currentSociety === soc.name ? 'bg-[#deebff] dark:bg-[#0c2340] text-[#0747a6] dark:text-[#2684ff] font-bold' : 'text-[#23150d] dark:text-[#ddd0be]'
                      }`}
                    >
                      <span className="font-bold text-[#23150d] dark:text-[#faf6ee]">{soc.name}</span>
                      <span className="text-[10px] text-[#755e4e] dark:text-[#9c8574]">{soc.area} · {soc.units} flats</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Role Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1 p-1 bg-[#f1e9dc] dark:bg-[#1f140e] border border-[#ddd0be] dark:border-[#38251a] rounded-xl shrink-0">
            {views.map((v) => {
              const Icon = v.icon;
              const isActive = activeView === v.id;
              return (
                <button
                  key={v.id}
                  onClick={() => setActiveView(v.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg transition-all ${
                    isActive
                      ? 'bg-white dark:bg-[#2c1d15] text-[#0052cc] dark:text-[#2684ff] border-2 border-[#0052cc] dark:border-[#2684ff] font-bold shadow-sm'
                      : 'text-[#23150d] dark:text-[#ddd0be] hover:text-[#0052cc] dark:hover:text-[#faf6ee] hover:bg-[#e8ded0] dark:hover:bg-[#2c1d15] font-bold'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#0052cc] dark:text-[#2684ff]' : 'text-[#4a3528] dark:text-[#9c8574]'}`} />
                  <span>{v.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Mohalla Mudra Wallet Pill */}
            <button
              onClick={handleWalletClick}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#deebff] dark:bg-[#0c2340] border border-[#b3d4ff] dark:border-[#0052cc]/40 hover:border-[#0052cc] text-[#0747a6] dark:text-[#2684ff] transition-all shadow-sm group shrink-0"
              title="Click to view Wallet & Spend credits at local shops"
            >
              <div className="w-5 h-5 rounded-full bg-white dark:bg-[#160e09] flex items-center justify-center border border-[#0052cc]/40">
                <Coins className="w-3.5 h-3.5 text-[#0052cc] dark:text-[#2684ff] group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-[#0747a6] dark:text-[#4c9aff] font-mono font-bold leading-none">
                  Mohalla Mudra
                </span>
                <span className="text-sm font-extrabold font-mono text-[#0052cc] dark:text-[#2684ff] leading-tight">
                  {currentUser?.credits ?? 0} <span className="text-xs font-sans font-bold text-[#0747a6] dark:text-[#80bfff]">MM</span>
                </span>
              </div>
            </button>

            {/* Day / Night Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-white dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] text-[#23150d] dark:text-[#faf6ee] hover:text-[#0052cc] dark:hover:text-[#2684ff] hover:border-[#0052cc] transition-colors shadow-sm shrink-0"
              title={theme === 'day' ? 'Switch to Night Mode' : 'Switch to Day Mode'}
              aria-label="Toggle Night and Day theme"
            >
              {theme === 'day' ? (
                <Moon className="w-4 h-4 text-[#23150d]" />
              ) : (
                <Sun className="w-4 h-4 text-[#2684ff]" />
              )}
            </button>

            {/* User Profile / Quick Switcher */}
            <div className="relative shrink-0">
              <button
                onClick={() => setIsPersonaMenuOpen(!isPersonaMenuOpen)}
                className="flex items-center gap-2 p-1.5 rounded-xl bg-white dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] hover:border-[#0052cc] text-[#23150d] dark:text-[#faf6ee] text-xs transition-colors shadow-sm font-bold shrink-0"
                aria-label="User profile and persona switch"
              >
                <div className="w-7 h-7 rounded-md bg-[#deebff] dark:bg-[#0c2340] text-[#0052cc] dark:text-[#2684ff] border border-[#0052cc]/40 flex items-center justify-center font-bold text-xs">
                  {currentUser?.avatar || 'MM'}
                </div>
                <div className="hidden sm:flex flex-col text-left max-w-[120px]">
                  <span className="font-bold text-[#23150d] dark:text-[#faf6ee] truncate leading-tight">
                    {currentUser?.name || 'Guest'}
                  </span>
                  <span className="text-[10px] text-[#4a3528] dark:text-[#ddd0be] truncate leading-none capitalize font-bold">
                    {currentUser?.role?.replace('_', ' ') || 'Resident'}
                  </span>
                </div>
                <ChevronDown className="w-3 h-3 text-[#23150d] dark:text-[#ddd0be] hidden sm:block" />
              </button>

              {isPersonaMenuOpen && (
                <div className="absolute right-0 mt-1 w-72 rounded-2xl bg-white dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] shadow-2xl py-2 z-50 text-left">
                  <div className="px-3 py-2 border-b border-[#f1e9dc] dark:border-[#2c1d15]">
                    <p className="text-xs font-semibold text-[#23150d] dark:text-[#faf6ee]">{currentUser?.name}</p>
                    <p className="text-[11px] text-[#755e4e] dark:text-[#9c8574]">{currentUser?.email}</p>
                    <div className="mt-1 flex items-center gap-2 text-[10px] text-[#0052cc] dark:text-[#2684ff] font-mono">
                      <span>{currentUser?.society}</span>
                      <span>•</span>
                      <span>{currentUser?.company}</span>
                    </div>
                  </div>

                  <div className="px-3 py-1.5 text-[10px] uppercase font-mono text-[#755e4e] dark:text-[#9c8574]">
                    Instant Demo Role Switch (Chaturanga Pitch)
                  </div>

                  <button
                    onClick={() => {
                      switchPersona('resident');
                      setIsPersonaMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs flex items-center gap-2 hover:bg-[#f1e9dc] dark:hover:bg-[#2c1d15] text-[#23150d] dark:text-[#faf6ee] transition-colors"
                  >
                    <Users className="w-4 h-4 text-[#0052cc] dark:text-[#2684ff]" />
                    <div>
                      <div className="font-medium text-[#23150d] dark:text-[#faf6ee]">Ananya Iyer (Resident)</div>
                      <div className="text-[10px] text-[#755e4e] dark:text-[#9c8574]">Flipkart Tech · Sobha Carnation Flat 402</div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      switchPersona('company_admin');
                      setIsPersonaMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs flex items-center gap-2 hover:bg-[#f1e9dc] dark:hover:bg-[#2c1d15] text-[#23150d] dark:text-[#faf6ee] transition-colors"
                  >
                    <Briefcase className="w-4 h-4 text-[#0052cc] dark:text-[#2684ff]" />
                    <div>
                      <div className="font-medium text-[#23150d] dark:text-[#faf6ee]">Vikram S. (Company Admin)</div>
                      <div className="text-[10px] text-[#755e4e] dark:text-[#9c8574]">Infosys BPM & Tech Wellness Lead</div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      switchPersona('shop_owner');
                      setIsPersonaMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs flex items-center gap-2 hover:bg-[#f1e9dc] dark:hover:bg-[#2c1d15] text-[#23150d] dark:text-[#faf6ee] transition-colors"
                  >
                    <Store className="w-4 h-4 text-[#0052cc] dark:text-[#2684ff]" />
                    <div>
                      <div className="font-medium text-[#23150d] dark:text-[#faf6ee]">Murthy & Srinath (Shop Owner)</div>
                      <div className="text-[10px] text-[#755e4e] dark:text-[#9c8574]">Annapoorna Kirana & Kaapi Corner</div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      switchPersona('rwa');
                      setIsPersonaMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs flex items-center gap-2 hover:bg-[#f1e9dc] dark:hover:bg-[#2c1d15] text-[#23150d] dark:text-[#faf6ee] transition-colors"
                  >
                    <Shield className="w-4 h-4 text-[#0052cc] dark:text-[#2684ff]" />
                    <div>
                      <div className="font-medium text-[#23150d] dark:text-[#faf6ee]">Dr. Geetha R. (RWA Secretary)</div>
                      <div className="text-[10px] text-[#755e4e] dark:text-[#9c8574]">Sobha Carnation Management Committee</div>
                    </div>
                  </button>

                  <div className="border-t border-[#f1e9dc] dark:border-[#2c1d15] mt-2 pt-2 px-2 flex items-center justify-between">
                    <button
                      onClick={() => {
                        setAuthMode('signup');
                        setIsAuthModalOpen(true);
                        setIsPersonaMenuOpen(false);
                      }}
                      className="text-xs text-[#0052cc] dark:text-[#2684ff] hover:text-[#0747a6] px-2 py-1 font-medium"
                    >
                      Create Custom Account
                    </button>
                    <button
                      onClick={() => {
                        signOut();
                        setIsPersonaMenuOpen(false);
                      }}
                      className="flex items-center gap-1 text-xs text-[#755e4e] dark:text-[#9c8574] hover:text-[#0052cc] px-2 py-1"
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
        <div className="lg:hidden flex items-center gap-1.5 overflow-x-auto py-2 border-t border-[#ddd0be] dark:border-[#38251a] scrollbar-none">
          {views.map((v) => {
            const Icon = v.icon;
            const isActive = activeView === v.id;
            return (
              <button
                key={v.id}
                onClick={() => setActiveView(v.id)}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? 'bg-white dark:bg-[#2c1d15] text-[#0052cc] dark:text-[#2684ff] border border-[#0052cc] dark:border-[#2684ff] shadow-sm font-bold'
                    : 'text-[#4a3528] dark:text-[#ddd0be] hover:text-[#0052cc] bg-[#f1e9dc] dark:bg-[#221610]'
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
