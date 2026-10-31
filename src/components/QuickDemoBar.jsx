import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Sparkles,
  ChevronUp,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  Play,
  RotateCcw,
  Users,
  Store,
  Briefcase,
  Shield,
  BarChart3
} from 'lucide-react';

export default function QuickDemoBar() {
  const {
    activeView,
    setActiveView,
    residentTab,
    setResidentTab,
    switchPersona,
    currentUser,
    joinEvent,
    events,
    redeemShopOffer,
    shops,
    showToast,
  } = useApp();

  const [isOpen, setIsOpen] = useState(false);

  const steps = [
    {
      num: 1,
      title: 'Join Society Event',
      role: 'resident',
      tab: 'events',
      desc: 'Join "Sunrise Hatha Yoga" or "Tech Derby Cricket". Watch +20 to +35 MM added immediately.',
      action: () => {
        setActiveView('resident');
        setResidentTab('events');
        const unjoined = events.find(e => !e.isJoined);
        if (unjoined) {
          joinEvent(unjoined.id);
        } else {
          showToast('Already joined events. Check Wallet to redeem!', 'info');
        }
      }
    },
    {
      num: 2,
      title: 'Redeem at Kaapi Corner',
      role: 'resident',
      tab: 'wallet',
      desc: 'Spend 15 MM on degree filter kaapi + bun maska. Generates coupon voucher code.',
      action: () => {
        setActiveView('resident');
        setResidentTab('wallet');
        const kaapiShop = shops.find(s => s.id === 'shop-2') || shops[0];
        redeemShopOffer(kaapiShop.id);
      }
    },
    {
      num: 3,
      title: 'Check Shop Owner View',
      role: 'shop_owner',
      tab: null,
      desc: 'See today\'s redeemed credits, new vs repeat customers, and active offer manager.',
      action: () => {
        switchPersona('shop_owner');
      }
    },
    {
      num: 4,
      title: 'Check Company Admin',
      role: 'company_admin',
      tab: null,
      desc: 'Create corporate league, view resident check-ins, and download attendance CSV.',
      action: () => {
        switchPersona('company_admin');
      }
    },
    {
      num: 5,
      title: 'Check RWA Calendar',
      role: 'rwa',
      tab: null,
      desc: 'Inspect clubhouse, court, and terrace bookings plus ₹28,500 venue fee earned.',
      action: () => {
        switchPersona('rwa');
      }
    },
    {
      num: 6,
      title: 'Inspect Pilot Metrics',
      role: 'pilot',
      tab: null,
      desc: 'Read-only summary of the 4-society Bellandur pilot (All demo data).',
      action: () => {
        setActiveView('pilot');
      }
    }
  ];

  return (
    <aside aria-label="Demo live presentation walkthrough" className="fixed bottom-3 right-3 z-40 max-w-sm sm:max-w-md w-full">
      <div className="rounded-2xl bg-white/95 dark:bg-[#221610]/95 border-2 border-[#0052cc] dark:border-[#2684ff]/60 shadow-2xl backdrop-blur-md overflow-hidden text-left">
        
        {/* Toggle Bar */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsOpen(!isOpen);
            }
          }}
          className="w-full px-4 py-2.5 flex items-center justify-between text-left hover:bg-[#f1e9dc] dark:hover:bg-[#2c1d15] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0052cc] cursor-pointer"
          aria-expanded={isOpen}
          aria-label="Toggle Live Demo Pitch Walkthrough"
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0052cc] dark:bg-[#2684ff] animate-pulse"></span>
            <span className="text-xs font-extrabold text-[#23150d] dark:text-[#faf6ee] font-heading">
              Live Demo Pitch Walkthrough
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#deebff] dark:bg-[#0c2340] text-[#0052cc] dark:text-[#2684ff] font-black border border-[#0052cc]/30">
              Alliance One 2026
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#0052cc] dark:text-[#2684ff] font-black">
            <span>{isOpen ? 'Minimize' : 'Open 6-Step Guide'}</span>
            {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </div>
        </div>

        {/* Expanded Stepper Guide */}
        {isOpen && (
          <div className="p-4 pt-2 border-t border-[#ddd0be] dark:border-[#38251a] space-y-2.5 max-h-[70vh] overflow-y-auto">
            <p className="text-[11px] text-[#4a3528] dark:text-[#ddd0be] font-medium">
              Follow these 6 steps to demonstrate the complete closed loop for judges:
            </p>

            <div className="space-y-2">
              {steps.map((st) => (
                <div
                  key={st.num}
                  className="p-2.5 rounded-xl bg-[#f1e9dc] dark:bg-[#160e09] border border-[#ddd0be] dark:border-[#38251a] hover:border-[#0052cc] transition-colors flex items-start justify-between gap-3 shadow-xs"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#deebff] dark:bg-[#0c2340] text-[#0052cc] dark:text-[#2684ff] border border-[#0052cc]/40 text-[10px] font-mono font-black flex items-center justify-center shrink-0 mt-0.5">
                      {st.num}
                    </span>
                    <div>
                      <div className="text-xs font-extrabold text-[#23150d] dark:text-[#faf6ee]">
                        {st.title}
                      </div>
                      <div className="text-[10px] text-[#4a3528] dark:text-[#ddd0be] leading-snug mt-0.5 font-medium">
                        {st.desc}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={st.action}
                    className="px-2.5 py-1 rounded-md bg-[#0052cc] hover:bg-[#0747a6] text-white text-[10px] font-mono font-black shrink-0 flex items-center gap-1 shadow-xs transition-colors"
                  >
                    <span>Run</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-[#ddd0be] dark:border-[#38251a] flex items-center justify-between text-[10px] text-[#4a3528] dark:text-[#ddd0be] font-bold">
              <span>All actions sync instantly to localStorage</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#0052cc] dark:text-[#2684ff] hover:underline font-black"
              >
                Close guide
              </button>
            </div>
          </div>
        )}

      </div>
    </aside>
  );
}
