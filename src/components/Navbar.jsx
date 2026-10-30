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
    <header className="sticky top-0 z-30 backdrop-blur-md bg-slate-950/85 border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo & Society Selector */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveView('landing')}
              className="flex items-center gap-2.5 group text-left focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1"
              aria-label="Mohalla Mandi Home"
            >
              {/* Brand Icon: 4 mini windows with warm amber glow */}
              <div className="w-9 h-9 rounded-lg bg-slate-900 border border-amber-500/40 p-1.5 grid grid-cols-2 gap-1 shadow-[0_0_12px_rgba(245,158,11,0.25)] group-hover:border-amber-400 transition-colors">
                <div className="bg-amber-400 rounded-sm"></div>
                <div className="bg-emerald-400 rounded-sm"></div>
                <div className="bg-amber-400 rounded-sm"></div>
                <div className="bg-amber-500/40 rounded-sm"></div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-bold text-lg text-slate-100 tracking-tight">
                    Mohalla Mandi
                  </span>
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 bg-emerald-500/20 text-emerald-300 rounded border border-emerald-500/30">
                    BLR
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-sans hidden sm:block">
                  Neighbourhood Community Economy
                </p>
              </div>
            </button>

            {/* Society Selector Dropdown */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setIsSocietyMenuOpen(!isSocietyMenuOpen)}
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-2.5 py-1.5 rounded-md bg-slate-900/90 border border-slate-700/80 hover:border-slate-600 transition-colors"
                title="Change Society"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-medium text-slate-200">{currentSociety}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {isSocietyMenuOpen && (
                <div className="absolute left-0 mt-1 w-64 rounded-lg bg-slate-900 border border-slate-700 shadow-xl py-1 z-50">
                  <div className="px-3 py-1.5 border-b border-slate-800 text-[10px] uppercase font-mono text-slate-400">
                    Select Pilot Society (Demo Data)
                  </div>
                  {DEMO_SOCIETIES.map((soc) => (
                    <button
                      key={soc.id}
                      onClick={() => {
                        setCurrentSociety(soc.name);
                        setIsSocietyMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex flex-col hover:bg-slate-800 transition-colors ${
                        currentSociety === soc.name ? 'bg-amber-500/10 text-amber-300 font-medium' : 'text-slate-300'
                      }`}
                    >
                      <span>{soc.name}</span>
                      <span className="text-[10px] text-slate-400">{soc.area} · {soc.units} flats</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Role Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1 p-1 bg-slate-900/80 border border-slate-800 rounded-xl">
            {views.map((v) => {
              const Icon = v.icon;
              const isActive = activeView === v.id;
              return (
                <button
                  key={v.id}
                  onClick={() => setActiveView(v.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    isActive
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                  <span>{v.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2.5">
            {/* Mohalla Mudra Wallet Pill */}
            <button
              onClick={handleWalletClick}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 hover:border-emerald-400 text-emerald-300 hover:text-emerald-200 transition-all shadow-[0_0_12px_rgba(16,185,129,0.15)] group"
              title="Click to view Wallet & Spend credits at local shops"
            >
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/40">
                <Coins className="w-3 h-3 text-emerald-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-emerald-400/80 font-mono leading-none">
                  Mohalla Mudra
                </span>
                <span className="text-sm font-bold font-mono text-emerald-300 leading-tight">
                  {currentUser?.credits ?? 0} <span className="text-xs font-sans font-normal text-emerald-400/70">MM</span>
                </span>
              </div>
            </button>

            {/* Day / Night Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-amber-300 hover:border-amber-500/40 transition-colors"
              title={theme === 'night' ? 'Switch to Day Mode' : 'Switch to Night Mode'}
              aria-label="Toggle Night and Day theme"
            >
              {theme === 'night' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-400" />
              )}
            </button>

            {/* User Profile / Quick Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsPersonaMenuOpen(!isPersonaMenuOpen)}
                className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-200 text-xs transition-colors"
                aria-label="User profile and persona switch"
              >
                <div className="w-7 h-7 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center justify-center font-bold text-xs">
                  {currentUser?.avatar || 'MM'}
                </div>
                <div className="hidden sm:flex flex-col text-left max-w-[120px]">
                  <span className="font-medium text-slate-200 truncate leading-tight">
                    {currentUser?.name || 'Guest'}
                  </span>
                  <span className="text-[10px] text-slate-400 truncate leading-none capitalize">
                    {currentUser?.role?.replace('_', ' ') || 'Resident'}
                  </span>
                </div>
                <ChevronDown className="w-3 h-3 text-slate-400 hidden sm:block" />
              </button>

              {isPersonaMenuOpen && (
                <div className="absolute right-0 mt-1 w-72 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl py-2 z-50">
                  <div className="px-3 py-2 border-b border-slate-800">
                    <p className="text-xs font-semibold text-slate-200">{currentUser?.name}</p>
                    <p className="text-[11px] text-slate-400">{currentUser?.email}</p>
                    <div className="mt-1 flex items-center gap-2 text-[10px] text-amber-300 font-mono">
                      <span>{currentUser?.society}</span>
                      <span>•</span>
                      <span>{currentUser?.company}</span>
                    </div>
                  </div>

                  <div className="px-3 py-1.5 text-[10px] uppercase font-mono text-slate-400">
                    Instant Demo Role Switch (Chaturanga Pitch)
                  </div>

                  <button
                    onClick={() => {
                      switchPersona('resident');
                      setIsPersonaMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs flex items-center gap-2 hover:bg-slate-800 text-slate-300 transition-colors"
                  >
                    <Users className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="font-medium text-slate-200">Ananya Iyer (Resident)</div>
                      <div className="text-[10px] text-slate-400">Flipkart Tech · Sobha Carnation Flat 402</div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      switchPersona('company_admin');
                      setIsPersonaMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs flex items-center gap-2 hover:bg-slate-800 text-slate-300 transition-colors"
                  >
                    <Briefcase className="w-4 h-4 text-amber-400" />
                    <div>
                      <div className="font-medium text-slate-200">Vikram S. (Company Admin)</div>
                      <div className="text-[10px] text-slate-400">Infosys BPM & Tech Wellness Lead</div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      switchPersona('shop_owner');
                      setIsPersonaMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs flex items-center gap-2 hover:bg-slate-800 text-slate-300 transition-colors"
                  >
                    <Store className="w-4 h-4 text-blue-400" />
                    <div>
                      <div className="font-medium text-slate-200">Murthy & Srinath (Shop Owner)</div>
                      <div className="text-[10px] text-slate-400">Annapoorna Kirana & Kaapi Corner</div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      switchPersona('rwa');
                      setIsPersonaMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs flex items-center gap-2 hover:bg-slate-800 text-slate-300 transition-colors"
                  >
                    <Shield className="w-4 h-4 text-purple-400" />
                    <div>
                      <div className="font-medium text-slate-200">Dr. Geetha R. (RWA Secretary)</div>
                      <div className="text-[10px] text-slate-400">Sobha Carnation Management Committee</div>
                    </div>
                  </button>

                  <div className="border-t border-slate-800 mt-2 pt-2 px-2 flex items-center justify-between">
                    <button
                      onClick={() => {
                        setAuthMode('signup');
                        setIsAuthModalOpen(true);
                        setIsPersonaMenuOpen(false);
                      }}
                      className="text-xs text-amber-300 hover:text-amber-200 px-2 py-1 font-medium"
                    >
                      Create Custom Account
                    </button>
                    <button
                      onClick={() => {
                        signOut();
                        setIsPersonaMenuOpen(false);
                      }}
                      className="flex items-center gap-1 text-xs text-slate-400 hover:text-rose-400 px-2 py-1"
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
        <div className="lg:hidden flex items-center gap-1.5 overflow-x-auto py-2 border-t border-slate-800/80 scrollbar-none">
          {views.map((v) => {
            const Icon = v.icon;
            const isActive = activeView === v.id;
            return (
              <button
                key={v.id}
                onClick={() => setActiveView(v.id)}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    : 'text-slate-400 hover:text-slate-200 bg-slate-900/50'
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
