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
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section with Apartment Block */}
      <ApartmentHero />

      {/* SECTION 2: THE LOOP (Gather, Earn, Spend local) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-slate-950/40">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              The Hyperlocal Flywheel
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-100 mt-4 tracking-tight">
              The Mohalla Mandi Loop
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              How idle concrete clubhouses become vibrant neighbourhood economies in three synchronized steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1: Gather */}
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-6 flex flex-col justify-between hover:border-amber-500/40 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-400 font-semibold">Step 01</span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">Venue Activation</span>
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-100 mt-2">
                  Gather in Idle Spaces
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Society clubhouses, badminton courts, and windy terraces host sunrise yoga, inter-company box cricket leagues, Warli pottery, and gadget repair cafés.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero travel time. Right downstairs.</span>
              </div>
            </div>

            {/* Step 2: Earn */}
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-6 flex flex-col justify-between hover:border-emerald-500/40 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5">
                  <Coins className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 font-semibold">Step 02</span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">Mudra Currency</span>
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-100 mt-2">
                  Earn Mohalla Mudra
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Residents earn digital credits (+20 to +35 MM) every time they join an event, batch their daily parcel deliveries to the gate, or return packaging to the reuse bin.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sponsored by IT employers & RWA fund.</span>
              </div>
            </div>

            {/* Step 3: Spend local */}
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-6 flex flex-col justify-between hover:border-sky-500/40 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-5">
                  <Store className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-sky-400 font-semibold">Step 03</span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">Hyperlocal Commerce</span>
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-100 mt-2">
                  Spend at Local Shops
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Redeem credits for filter kaapi and bun maska, organic staples at Annapoorna Kirana, cobbler repairs, fresh juices, and tailor alterations within 500m of the gate.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Brings footfall back from dark-store apps.</span>
              </div>
            </div>

          </div>

          {/* Quick Demo CTA inside Loop */}
          <div className="mt-10 p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
              <p className="text-xs sm:text-sm text-slate-200">
                <strong className="text-white font-semibold">Ready to test the loop?</strong> Join an event right now and watch your Mohalla Mudra balance update instantly in your wallet.
              </p>
            </div>
            <button
              onClick={() => {
                setActiveView('resident');
                setResidentTab('events');
              }}
              className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shrink-0 flex items-center gap-1.5 transition-colors"
            >
              <span>Test Resident Flow</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 3: WHO PAYS AND WHO PLAYS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
              Sustainable Unit Economics
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-100 mt-4 tracking-tight">
              Who Pays and Who Plays
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Why every stakeholder in the Bengaluru ecosystem wins without relying on venture capital subsidies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Residents */}
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 uppercase font-semibold">Stakeholder 1</span>
                  <span className="text-xs font-bold text-emerald-300 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    Plays Free
                  </span>
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-100 mt-3">
                  Society Residents
                </h3>
                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>No subscription or hidden ticket charges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>Discover nearby peers from IT companies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>Earn credits that reduce daily household bills</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400">
                Active in Sobha, Prestige, Brigade clusters.
              </div>
            </div>

            {/* 2. IT Companies & Startups */}
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-400 uppercase font-semibold">Stakeholder 2</span>
                  <span className="text-xs font-bold text-amber-300 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                    Pays League Fees
                  </span>
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-100 mt-3">
                  IT Companies & Startups
                </h3>
                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">✓</span>
                    <span>Flipkart, Infosys, Razorpay, Swiggy sponsor leagues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">✓</span>
                    <span>Solves WFH isolation and tech employee burnout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400">✓</span>
                    <span>Eligible under Corporate Social & Wellness budgets</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400">
                11 tech companies active in Bengaluru pilot.
              </div>
            </div>

            {/* 3. Local Shops & Cafés */}
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-sky-400 uppercase font-semibold">Stakeholder 3</span>
                  <span className="text-xs font-bold text-sky-300 px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                    Sponsors Footfall
                  </span>
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-100 mt-3">
                  Local Shops & Cafés
                </h3>
                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400">✓</span>
                    <span>Kiranas, kaapi stalls, and tailors offer vouchers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400">✓</span>
                    <span>Costs 80% less than listing on hyper-delivery apps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-400">✓</span>
                    <span>Transforms 1-time visitors into repeat society buyers</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400">
                14 neighborhood partners within 500m.
              </div>
            </div>

            {/* 4. RWAs & Society Committees */}
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-purple-400 uppercase font-semibold">Stakeholder 4</span>
                  <span className="text-xs font-bold text-purple-300 px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
                    Earns Venue Revenue
                  </span>
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-100 mt-3">
                  RWA Committees
                </h3>
                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">✓</span>
                    <span>Monetizes idle clubhouses and courts (₹25k–₹35k/mo)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">✓</span>
                    <span>Funds lift maintenance, solar panels, and gardeners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">✓</span>
                    <span>Reduces delivery congestion at society security gate</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400">
                Direct bank transfer to society corpus.
              </div>
            </div>

          </div>

          {/* Persona Quick Jump Strip */}
          <div className="mt-12 p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-slate-100 font-heading">
                  Try the 4 Prototype Perspectives:
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Click any role to load pre-seeded simulated workflows for demo evaluation.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => switchPersona('resident')}
                  className="px-3 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-medium hover:bg-emerald-500/30"
                >
                  Demo Resident
                </button>
                <button
                  onClick={() => switchPersona('company_admin')}
                  className="px-3 py-1.5 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-medium hover:bg-amber-500/30"
                >
                  Demo Company Admin
                </button>
                <button
                  onClick={() => switchPersona('shop_owner')}
                  className="px-3 py-1.5 rounded-lg bg-sky-500/20 border border-sky-500/30 text-sky-300 text-xs font-medium hover:bg-sky-500/30"
                >
                  Demo Shop Owner
                </button>
                <button
                  onClick={() => switchPersona('rwa')}
                  className="px-3 py-1.5 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-medium hover:bg-purple-500/30"
                >
                  Demo RWA Secretary
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto py-10 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-900 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-slate-200 text-sm">
                Mohalla Mandi
              </span>
              <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 rounded">
                Alliance One 2026: Chaturanga
              </span>
            </div>
            <p className="text-slate-400 text-[11px] mt-1 max-w-md text-center md:text-left">
              Neighbourhood community economy prototype for apartment societies in Bengaluru. Turning idle clubhouse spaces into active hubs.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-300">
            <button
              onClick={() => {
                setActiveView('resident');
                setResidentTab('events');
              }}
              className="hover:text-amber-300"
            >
              Events
            </button>
            <button
              onClick={() => {
                setActiveView('resident');
                setResidentTab('wallet');
              }}
              className="hover:text-amber-300"
            >
              Wallet & Shops
            </button>
            <button
              onClick={() => setActiveView('pilot')}
              className="hover:text-amber-300"
            >
              Pilot Metrics
            </button>
            <button
              onClick={() => {
                setAuthMode('signup');
                setIsAuthModalOpen(true);
              }}
              className="text-amber-300 hover:text-amber-200 font-medium"
            >
              Sign Up (+30 MM)
            </button>
          </div>

          <div className="text-[11px] text-slate-400 text-center md:text-right font-mono">
            <div>All data simulated for competition demo</div>
            <div>Persisted in browser localStorage</div>
          </div>
        </div>
      </footer>

    </div>
  );
}
