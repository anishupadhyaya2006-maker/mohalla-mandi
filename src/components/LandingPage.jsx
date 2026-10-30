import React from 'react';
import ApartmentHero from './ApartmentHero';
import { useApp } from '../context/AppContext';
import {
  Users,
  Coins,
  Store,
  Building2,
  Briefcase,
  Shield,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Calendar,
  Layers,
  HeartHandshake,
  MapPin,
  TrendingUp,
  Package,
  Truck
} from 'lucide-react';

export default function LandingPage() {
  const { setActiveView, setResidentTab, setIsAuthModalOpen, setAuthMode, switchPersona } = useApp();

  return (
    <div className="flex flex-col min-h-screen bg-[#fbf8f4] dark:bg-[#16110d] text-[#211710] dark:text-[#f7f2ea]">
      
      {/* Hero Section with Apartment Block */}
      <ApartmentHero />

      {/* SECTION 2: THE LOOP (Gather, Earn, Spend local) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#dfd3c0] dark:border-[#36291e] bg-[#f5ede0] dark:bg-[#1d1611]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8a5e18] dark:text-[#ecc26b] bg-[#ede1cd] dark:bg-[#38281b] border border-[#d8c39e] dark:border-[#c58c2b]/40 px-3.5 py-1 rounded-full font-semibold">
              The Hyperlocal Flywheel
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#211710] dark:text-[#fbf8f3] mt-4 tracking-tight">
              The Mohalla Mandi Loop
            </h2>
            <p className="mt-3 text-[#574332] dark:text-[#cfbea5] text-sm sm:text-base leading-relaxed">
              How idle concrete clubhouses become vibrant neighbourhood economies in three synchronized steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1: Gather */}
            <div className="relative rounded-2xl bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] p-6 flex flex-col justify-between hover:border-[#cb922d] dark:hover:border-[#c58c2b]/50 transition-colors shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#ede1cd] dark:bg-[#38281b] border border-[#d8c39e] dark:border-[#c58c2b]/40 flex items-center justify-center text-[#8a5e18] dark:text-[#dfaa43] mb-5">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#8a5e18] dark:text-[#ecc26b] font-bold">Step 01</span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#f5ede0] dark:bg-[#2e2319] text-[#725e4c] dark:text-[#a6917b]">Venue Activation</span>
                </div>
                <h3 className="text-xl font-bold font-heading text-[#211710] dark:text-[#f7f2ea] mt-2">
                  Gather in Idle Spaces
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#574332] dark:text-[#cfbea5] leading-relaxed">
                  Society clubhouses, badminton courts, and windy terraces host sunrise yoga, inter-company box cricket leagues, Warli pottery, and gadget repair cafés.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#ede4d6] dark:border-[#36291e] text-xs text-[#725e4c] dark:text-[#a6917b] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8a5e18] dark:text-[#dfaa43] shrink-0" />
                <span>Zero travel time. Right downstairs.</span>
              </div>
            </div>

            {/* Step 2: Earn */}
            <div className="relative rounded-2xl bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] p-6 flex flex-col justify-between hover:border-[#c85d2e] dark:hover:border-[#dc7545]/50 transition-colors shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#faede6] dark:bg-[#3d2316] border border-[#e8c6b5] dark:border-[#c85d2e]/40 flex items-center justify-center text-[#c85d2e] dark:text-[#dc7545] mb-5">
                  <Coins className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#c85d2e] dark:text-[#f3ba9e] font-bold">Step 02</span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#f5ede0] dark:bg-[#2e2319] text-[#725e4c] dark:text-[#a6917b]">Mudra Currency</span>
                </div>
                <h3 className="text-xl font-bold font-heading text-[#211710] dark:text-[#f7f2ea] mt-2">
                  Earn Mohalla Mudra
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#574332] dark:text-[#cfbea5] leading-relaxed">
                  Residents earn digital credits (+20 to +35 MM) every time they join an event, batch their daily parcel deliveries to the gate, or return packaging to the reuse bin.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#ede4d6] dark:border-[#36291e] text-xs text-[#725e4c] dark:text-[#a6917b] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c85d2e] dark:text-[#dc7545] shrink-0" />
                <span>Sponsored by IT employers & RWA fund.</span>
              </div>
            </div>

            {/* Step 3: Spend local */}
            <div className="relative rounded-2xl bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] p-6 flex flex-col justify-between hover:border-[#cb922d] dark:hover:border-[#dfaa43]/50 transition-colors shadow-sm">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#f2e9dc] dark:bg-[#38281b] border border-[#d8c7b0] dark:border-[#c58c2b]/40 flex items-center justify-center text-[#8a5e18] dark:text-[#dfaa43] mb-5">
                  <Store className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#8a5e18] dark:text-[#ecc26b] font-bold">Step 03</span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#f5ede0] dark:bg-[#2e2319] text-[#725e4c] dark:text-[#a6917b]">Hyperlocal Commerce</span>
                </div>
                <h3 className="text-xl font-bold font-heading text-[#211710] dark:text-[#f7f2ea] mt-2">
                  Spend at Local Shops
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#574332] dark:text-[#cfbea5] leading-relaxed">
                  Redeem credits for filter kaapi and bun maska, organic staples at Annapoorna Kirana, cobbler repairs, fresh juices, and tailor alterations within 500m of the gate.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#ede4d6] dark:border-[#36291e] text-xs text-[#725e4c] dark:text-[#a6917b] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8a5e18] dark:text-[#dfaa43] shrink-0" />
                <span>Brings footfall back from dark-store apps.</span>
              </div>
            </div>

          </div>

          {/* Quick Demo CTA inside Loop */}
          <div className="mt-10 p-5 rounded-2xl bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#b57a1b] dark:text-[#dfaa43] shrink-0" />
              <p className="text-xs sm:text-sm text-[#574332] dark:text-[#ded3c4]">
                <strong className="text-[#211710] dark:text-[#fbf8f3] font-semibold">Ready to test the loop?</strong> Join an event right now and watch your Mohalla Mudra balance update instantly in your wallet.
              </p>
            </div>
            <button
              onClick={() => {
                setActiveView('resident');
                setResidentTab('events');
              }}
              className="px-5 py-2.5 rounded-xl bg-[#c85d2e] hover:bg-[#b84f22] text-white font-bold text-xs shrink-0 flex items-center gap-1.5 transition-colors shadow-md"
            >
              <span>Test Resident Flow</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 3: WHO PAYS AND WHO PLAYS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-[#dfd3c0] dark:border-[#36291e]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8a5e18] dark:text-[#ecc26b] bg-[#ede1cd] dark:bg-[#38281b] border border-[#d8c39e] dark:border-[#c58c2b]/40 px-3.5 py-1 rounded-full font-semibold">
              Sustainable Unit Economics
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#211710] dark:text-[#fbf8f3] mt-4 tracking-tight">
              Who Pays and Who Plays
            </h2>
            <p className="mt-3 text-[#574332] dark:text-[#cfbea5] text-sm sm:text-base leading-relaxed">
              Why every stakeholder in the Bengaluru ecosystem wins without relying on venture capital subsidies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Residents */}
            <div className="rounded-2xl bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] p-6 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#8a5e18] dark:text-[#ecc26b] uppercase font-bold">Stakeholder 1</span>
                  <span className="text-xs font-bold text-[#8a5e18] dark:text-[#f5dc9e] px-2 py-0.5 rounded bg-[#ede1cd] dark:bg-[#38281b] border border-[#d8c39e] dark:border-[#c58c2b]/30">
                    Plays Free
                  </span>
                </div>
                <h3 className="text-lg font-bold font-heading text-[#211710] dark:text-[#f7f2ea] mt-3">
                  Society Residents
                </h3>
                <ul className="mt-4 space-y-2 text-xs text-[#574332] dark:text-[#cfbea5]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c85d2e] font-bold">✓</span>
                    <span>No subscription or hidden ticket charges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c85d2e] font-bold">✓</span>
                    <span>Discover nearby peers from IT companies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c85d2e] font-bold">✓</span>
                    <span>Earn credits that reduce daily household bills</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#ede4d6] dark:border-[#36291e] text-[11px] text-[#826e5a] dark:text-[#8e7a68]">
                Active in Sobha, Prestige, Brigade clusters.
              </div>
            </div>

            {/* 2. IT Companies & Startups */}
            <div className="rounded-2xl bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] p-6 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#c85d2e] dark:text-[#f3ba9e] uppercase font-bold">Stakeholder 2</span>
                  <span className="text-xs font-bold text-[#c85d2e] dark:text-[#f3ba9e] px-2 py-0.5 rounded bg-[#faede6] dark:bg-[#3d2316] border border-[#e8c6b5] dark:border-[#c85d2e]/30">
                    Pays League Fees
                  </span>
                </div>
                <h3 className="text-lg font-bold font-heading text-[#211710] dark:text-[#f7f2ea] mt-3">
                  IT Companies & Startups
                </h3>
                <ul className="mt-4 space-y-2 text-xs text-[#574332] dark:text-[#cfbea5]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c85d2e] font-bold">✓</span>
                    <span>Flipkart, Infosys, Razorpay, Swiggy sponsor leagues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c85d2e] font-bold">✓</span>
                    <span>Solves WFH isolation and tech employee burnout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c85d2e] font-bold">✓</span>
                    <span>Eligible under Corporate Social & Wellness budgets</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#ede4d6] dark:border-[#36291e] text-[11px] text-[#826e5a] dark:text-[#8e7a68]">
                11 tech companies active in Bengaluru pilot.
              </div>
            </div>

            {/* 3. Local Shops & Cafés */}
            <div className="rounded-2xl bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] p-6 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#8a5e18] dark:text-[#ded3c4] uppercase font-bold">Stakeholder 3</span>
                  <span className="text-xs font-bold text-[#8a5e18] dark:text-[#f2ebe1] px-2 py-0.5 rounded bg-[#f2e9dc] dark:bg-[#33251a] border border-[#d8c7b0] dark:border-[#503b2c]">
                    Sponsors Footfall
                  </span>
                </div>
                <h3 className="text-lg font-bold font-heading text-[#211710] dark:text-[#f7f2ea] mt-3">
                  Local Shops & Cafés
                </h3>
                <ul className="mt-4 space-y-2 text-xs text-[#574332] dark:text-[#cfbea5]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c85d2e] font-bold">✓</span>
                    <span>Kiranas, kaapi stalls, and tailors offer vouchers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c85d2e] font-bold">✓</span>
                    <span>Costs 80% less than listing on hyper-delivery apps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c85d2e] font-bold">✓</span>
                    <span>Transforms 1-time visitors into repeat society buyers</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#ede4d6] dark:border-[#36291e] text-[11px] text-[#826e5a] dark:text-[#8e7a68]">
                14 neighborhood partners within 500m.
              </div>
            </div>

            {/* 4. RWAs & Society Committees */}
            <div className="rounded-2xl bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] p-6 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#725e4c] dark:text-[#c9b7a3] uppercase font-bold">Stakeholder 4</span>
                  <span className="text-xs font-bold text-[#8a5e18] dark:text-[#ecc26b] px-2 py-0.5 rounded bg-[#ede1cd] dark:bg-[#38281b] border border-[#d8c39e] dark:border-[#c58c2b]/30">
                    Earns Venue Revenue
                  </span>
                </div>
                <h3 className="text-lg font-bold font-heading text-[#211710] dark:text-[#f7f2ea] mt-3">
                  RWA Committees
                </h3>
                <ul className="mt-4 space-y-2 text-xs text-[#574332] dark:text-[#cfbea5]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#c85d2e] font-bold">✓</span>
                    <span>Monetizes idle clubhouses and courts (₹25k–₹35k/mo)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c85d2e] font-bold">✓</span>
                    <span>Funds lift maintenance, solar panels, and gardeners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#c85d2e] font-bold">✓</span>
                    <span>Reduces delivery congestion at society security gate</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#ede4d6] dark:border-[#36291e] text-[11px] text-[#826e5a] dark:text-[#8e7a68]">
                Direct bank transfer to society corpus.
              </div>
            </div>

          </div>

          {/* Persona Quick Jump Strip */}
          <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] shadow-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-[#211710] dark:text-[#fbf8f3] font-heading">
                  Try the 4 Prototype Perspectives:
                </h4>
                <p className="text-xs text-[#725e4c] dark:text-[#a6917b] mt-0.5">
                  Click any role to load pre-seeded simulated workflows for demo evaluation.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => switchPersona('resident')}
                  className="px-3.5 py-1.5 rounded-xl bg-[#ede1cd] dark:bg-[#38281b] border border-[#d8c39e] dark:border-[#c58c2b]/40 text-[#8a5e18] dark:text-[#ecc26b] text-xs font-semibold hover:bg-[#e4d4be]"
                >
                  Demo Resident
                </button>
                <button
                  onClick={() => switchPersona('company_admin')}
                  className="px-3.5 py-1.5 rounded-xl bg-[#faede6] dark:bg-[#3d2316] border border-[#e8c6b5] dark:border-[#c85d2e]/40 text-[#c85d2e] dark:text-[#f3ba9e] text-xs font-semibold hover:bg-[#f3dbcf]"
                >
                  Demo Company Admin
                </button>
                <button
                  onClick={() => switchPersona('shop_owner')}
                  className="px-3.5 py-1.5 rounded-xl bg-[#f2e9dc] dark:bg-[#33251a] border border-[#d8c7b0] text-[#725e4c] dark:text-[#ded3c4] text-xs font-semibold hover:bg-[#e6d8c4]"
                >
                  Demo Shop Owner
                </button>
                <button
                  onClick={() => switchPersona('rwa')}
                  className="px-3.5 py-1.5 rounded-xl bg-[#ede4d6] dark:bg-[#2e2319] border border-[#ded1be] text-[#574332] dark:text-[#c9b7a3] text-xs font-semibold hover:bg-[#dfd3c0]"
                >
                  Demo RWA Secretary
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto py-10 px-4 sm:px-6 lg:px-8 bg-[#f5ede0] dark:bg-[#16110d] border-t border-[#dfd3c0] dark:border-[#2d2118] text-xs text-[#725e4c] dark:text-[#a6917b]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-[#211710] dark:text-[#f2ebe1] text-sm">
                Mohalla Mandi
              </span>
              <span className="text-[10px] font-mono text-[#8a5e18] dark:text-[#ecc26b] bg-[#ede1cd] dark:bg-[#38281b] border border-[#d8c39e] dark:border-[#c58c2b]/40 px-1.5 py-0.5 rounded font-semibold">
                Alliance One 2026: Chaturanga
              </span>
            </div>
            <p className="text-[#826e5a] dark:text-[#8e7a68] text-[11px] mt-1 max-w-md text-center md:text-left">
              Neighbourhood community economy prototype for apartment societies in Bengaluru. Turning idle clubhouse spaces into active hubs.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-[#574332] dark:text-[#cfbea5] font-medium">
            <button
              onClick={() => {
                setActiveView('resident');
                setResidentTab('events');
              }}
              className="hover:text-[#c85d2e]"
            >
              Events
            </button>
            <button
              onClick={() => {
                setActiveView('resident');
                setResidentTab('wallet');
              }}
              className="hover:text-[#c85d2e]"
            >
              Wallet & Shops
            </button>
            <button
              onClick={() => setActiveView('pilot')}
              className="hover:text-[#c85d2e]"
            >
              Pilot Metrics
            </button>
            <button
              onClick={() => {
                setAuthMode('signup');
                setIsAuthModalOpen(true);
              }}
              className="text-[#c85d2e] dark:text-[#ecc26b] hover:text-[#b84f22] font-semibold"
            >
              Sign Up (+30 MM)
            </button>
          </div>

          <div className="text-[11px] text-[#826e5a] dark:text-[#8e7a68] text-center md:text-right font-mono">
            <div>All data simulated for competition demo</div>
            <div>Persisted in browser localStorage</div>
          </div>
        </div>
      </footer>

    </div>
  );
}
