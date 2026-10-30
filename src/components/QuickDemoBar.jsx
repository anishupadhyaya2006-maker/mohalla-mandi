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
      <div className="rounded-2xl bg-white/95 dark:bg-[#211a14]/95 border-2 border-[#cb922d] dark:border-[#c58c2b]/60 shadow-2xl backdrop-blur-md overflow-hidden text-left">
        
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
          className="w-full px-4 py-2.5 flex items-center justify-between text-left hover:bg-[#fbf4e8] dark:hover:bg-[#2e2319] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cb922d] cursor-pointer"
          aria-expanded={isOpen}
          aria-label="Toggle Live Demo Pitch Walkthrough"
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#cb922d] dark:bg-[#dfaa43] animate-pulse"></span>
            <span className="text-xs font-bold text-[#211710] dark:text-[#f7f2ea] font-heading">
              Live Demo Pitch Walkthrough
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#ede2d2] dark:bg-[#38281b] text-[#704910] dark:text-[#f5dc9e] font-semibold border border-[#d6be96] dark:border-[#c58c2b]/30">
              Alliance One 2026
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#8a5e18] dark:text-[#ecc26b] font-bold">
            <span>{isOpen ? 'Minimize' : 'Open 6-Step Guide'}</span>
            {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </div>
        </div>

        {/* Expanded Stepper Guide */}
        {isOpen && (
          <div className="p-4 pt-2 border-t border-[#ded1be] dark:border-[#36291e] space-y-2.5 max-h-[70vh] overflow-y-auto">
            <p className="text-[11px] text-[#725e4c] dark:text-[#a6917b]">
              Follow these 6 steps to demonstrate the complete closed loop for judges:
            </p>

            <div className="space-y-2">
              {steps.map((st) => (
                <div
                  key={st.num}
                  className="p-2.5 rounded-xl bg-[#f8f3eb] dark:bg-[#1a120c] border border-[#ded1be] dark:border-[#3c2f24] hover:border-[#b5a085] transition-colors flex items-start justify-between gap-3"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#ede2d2] dark:bg-[#38281b] text-[#704910] dark:text-[#ecc26b] border border-[#d6be96] dark:border-[#c58c2b]/40 text-[10px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {st.num}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-[#211710] dark:text-[#f2ebe1]">
                        {st.title}
                      </div>
                      <div className="text-[10px] text-[#725e4c] dark:text-[#a6917b] leading-snug mt-0.5">
                        {st.desc}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={st.action}
                    className="px-2.5 py-1 rounded-md bg-[#ede2d2] dark:bg-[#38281b] hover:bg-[#e4d4be] dark:hover:bg-[#483322] text-[#704910] dark:text-[#f5dc9e] text-[10px] font-mono font-bold shrink-0 flex items-center gap-1 border border-[#d6be96] dark:border-[#c58c2b]/40"
                  >
                    <span>Run</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-[#ded1be] dark:border-[#36291e] flex items-center justify-between text-[10px] text-[#725e4c] dark:text-[#8e7a68]">
              <span>All actions sync instantly to localStorage</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#8a5e18] dark:text-[#ecc26b] hover:underline font-bold"
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
