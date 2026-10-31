import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  BarChart3,
  Users,
  Repeat,
  Store,
  Truck,
  Recycle,
  Building,
  Coins,
  ShieldCheck,
  Sparkles,
  Info
} from 'lucide-react';

export default function PilotDashboard() {
  const { pilotMetrics } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-left animate-in fade-in duration-200">
      
      {/* Top Banner with Clear Demo Data Watermark */}
      <div className="p-6 rounded-3xl bg-[#f1e9dc] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] relative overflow-hidden shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#0052cc] dark:text-[#2684ff] font-black flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5 text-[#0052cc] dark:text-[#2684ff]" />
                Alliance One 2026: Chaturanga Competition
              </span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#deebff] dark:bg-[#0747a6]/30 text-[#0747a6] dark:text-[#deebff] border border-[#b3d4ff] dark:border-[#0052cc]/40 font-bold">
                Simulated Demo Data
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#23150d] dark:text-[#faf6ee]">
              Pilot Impact & Traction Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-[#5c4738] dark:text-[#ddd0be] max-w-2xl mt-1 font-medium">
              Read-only aggregate metrics from the 4-society pilot cluster in Bellandur, Bengaluru. Evaluates community bonding, hyperlocal shop spend, and gate traffic reduction.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#faf6ee] dark:bg-[#160e09] border border-[#ddd0be] dark:border-[#38251a] text-xs shrink-0 text-right font-mono shadow-sm">
            <div className="text-[#6b584a] dark:text-[#b4a494] text-[10px] uppercase font-bold">Pilot Cluster</div>
            <div className="text-[#23150d] dark:text-[#faf6ee] font-black text-xs mt-0.5">4 Societies · 1,630 Flats</div>
            <div className="text-[#0052cc] dark:text-[#2684ff] text-[10px] font-bold">Bellandur Ward 150</div>
          </div>
        </div>
      </div>

      {/* Mandatory Demo Data Disclosure Alert */}
      <div className="p-4 rounded-2xl bg-[#deebff]/40 dark:bg-[#0747a6]/20 border border-[#b3d4ff] dark:border-[#0052cc]/40 text-[#23150d] dark:text-[#deebff] text-xs flex items-start gap-3 shadow-sm font-medium">
        <Info className="w-4 h-4 text-[#0052cc] dark:text-[#2684ff] shrink-0 mt-0.5" />
        <div>
          <strong className="font-extrabold text-[#0052cc] dark:text-[#2684ff]">Demo Data Disclosure:</strong> All statistics, participation rates, Mudra volumes, and environmental impact numbers on this screen are simulated prototype metrics modeled for the Alliance One 2026 Chaturanga startup pitch. No real transactional banking is executed.
        </div>
      </div>

      {/* THE 5 REQUIRED PILOT METRICS IN VARIED CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Metric 1: Participation */}
        <div className="p-6 rounded-2xl bg-[#faf6ee] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between text-xs text-[#6b584a] dark:text-[#b4a494] font-mono">
              <span className="font-bold">01 · Resident Participation</span>
              <span className="text-[9px] uppercase px-2 py-0.5 rounded-full bg-[#f1e9dc] dark:bg-[#160e09] text-[#23150d] dark:text-[#ddd0be] font-bold border border-[#ddd0be] dark:border-[#38251a]">Demo</span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-black font-heading text-[#23150d] dark:text-[#faf6ee]">
                {pilotMetrics.activeResidents}
              </span>
              <span className="text-xs text-[#0052cc] dark:text-[#2684ff] font-mono font-black">
                {pilotMetrics.activeResidentsGrowth}
              </span>
            </div>

            <p className="mt-2 text-xs text-[#5c4738] dark:text-[#ddd0be] leading-relaxed font-medium">
              Active residents attending at least 2 society events monthly across Sobha Carnation, Prestige Lavender, Green Glen, and SJR Watermark.
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-[#ddd0be] dark:border-[#38251a] text-[11px] text-[#6b584a] dark:text-[#b4a494] flex items-center justify-between font-medium">
            <span>Baseline before launch: 64 residents</span>
            <span className="text-[#0052cc] dark:text-[#2684ff] font-mono font-black">+568% jump</span>
          </div>
        </div>

        {/* Metric 2: Repeat Attendance Rate */}
        <div className="p-6 rounded-2xl bg-[#faf6ee] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between text-xs text-[#6b584a] dark:text-[#b4a494] font-mono">
              <span className="font-bold">02 · Repeat Attendance</span>
              <span className="text-[9px] uppercase px-2 py-0.5 rounded-full bg-[#f1e9dc] dark:bg-[#160e09] text-[#23150d] dark:text-[#ddd0be] font-bold border border-[#ddd0be] dark:border-[#38251a]">Demo</span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-black font-heading text-[#0052cc] dark:text-[#2684ff]">
                {pilotMetrics.repeatAttendanceRate}%
              </span>
              <span className="text-xs text-[#6b584a] dark:text-[#b4a494] font-mono font-bold">
                30-day retention
              </span>
            </div>

            <p className="mt-2 text-xs text-[#5c4738] dark:text-[#ddd0be] leading-relaxed font-medium">
              Residents who return for a second or third workshop within the month. Sustained by inter-company league points and neighbour relationships.
            </p>
          </div>

          {/* Visual Benchmark Bar */}
          <div className="mt-5 pt-3 border-t border-[#ddd0be] dark:border-[#38251a]">
            <div className="flex justify-between text-[10px] text-[#6b584a] dark:text-[#b4a494] font-mono mb-1 font-bold">
              <span>Typical Society AGM: 22%</span>
              <span className="text-[#0052cc] dark:text-[#2684ff] font-black">Mohalla Mandi: 68.4%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#f1e9dc] dark:bg-[#160e09] overflow-hidden flex">
              <div className="bg-[#ddd0be] dark:bg-[#38251a] h-full" style={{ width: '22%' }} title="Industry baseline"></div>
              <div className="bg-[#0052cc] h-full" style={{ width: '46.4%' }} title="Mohalla Mandi lift"></div>
            </div>
          </div>
        </div>

        {/* Metric 3: Credits Spent at Local Shops */}
        <div className="p-6 rounded-2xl bg-[#faf6ee] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between text-xs text-[#6b584a] dark:text-[#b4a494] font-mono">
              <span className="font-bold">03 · Local Shop Spend</span>
              <span className="text-[9px] uppercase px-2 py-0.5 rounded-full bg-[#f1e9dc] dark:bg-[#160e09] text-[#23150d] dark:text-[#ddd0be] font-bold border border-[#ddd0be] dark:border-[#38251a]">Demo</span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-black font-heading text-[#0052cc] dark:text-[#2684ff]">
                {pilotMetrics.totalCreditsCirculated.toLocaleString()}
              </span>
              <span className="text-xs font-mono text-[#0747a6] dark:text-[#99c8ff] font-black">MM</span>
            </div>

            <div className="text-xs font-mono text-[#23150d] dark:text-[#faf6ee] mt-1 font-bold">
              ≈ ₹{pilotMetrics.hyperlocalSpendINR.toLocaleString()} offline commerce
            </div>

            <p className="mt-2 text-xs text-[#5c4738] dark:text-[#ddd0be] leading-relaxed font-medium">
              Circulated to 14 hyper-local kiranas, degree kaapi stalls, tailors, and cobblers within 500m of society gates.
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-[#ddd0be] dark:border-[#38251a] text-[11px] text-[#6b584a] dark:text-[#b4a494] flex items-center justify-between font-medium">
            <span>Average resident savings:</span>
            <span className="text-[#0052cc] dark:text-[#2684ff] font-mono font-black">₹580 / month</span>
          </div>
        </div>

        {/* Metric 4: Batched Delivery Share */}
        <div className="p-6 rounded-2xl bg-[#faf6ee] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between text-xs text-[#6b584a] dark:text-[#b4a494] font-mono">
              <span className="font-bold">04 · Batched Delivery Share</span>
              <span className="text-[9px] uppercase px-2 py-0.5 rounded-full bg-[#f1e9dc] dark:bg-[#160e09] text-[#23150d] dark:text-[#ddd0be] font-bold border border-[#ddd0be] dark:border-[#38251a]">Demo</span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-black font-heading text-[#0052cc] dark:text-[#2684ff]">
                {pilotMetrics.batchedDeliveryShare}%
              </span>
              <span className="text-xs text-[#6b584a] dark:text-[#b4a494] font-mono font-bold">
                parcels consolidated
              </span>
            </div>

            <p className="mt-2 text-xs text-[#5c4738] dark:text-[#ddd0be] leading-relaxed font-medium">
              4 out of 10 daily deliveries routed through the dedicated 6 PM society hub drop instead of random ad-hoc gate entries.
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-[#ddd0be] dark:border-[#38251a] text-[11px] text-[#6b584a] dark:text-[#b4a494] flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-bold text-[#23150d] dark:text-[#faf6ee]">
              <Truck className="w-3.5 h-3.5 text-[#0052cc] dark:text-[#2684ff]" />
              <span>{pilotMetrics.vanTripsPreventedDaily} van trips eliminated daily</span>
            </span>
          </div>
        </div>

        {/* Metric 5: Packages Returned for Circular Reuse */}
        <div className="p-6 rounded-2xl bg-[#faf6ee] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between text-xs text-[#6b584a] dark:text-[#b4a494] font-mono">
              <span className="font-bold">05 · Packages Returned</span>
              <span className="text-[9px] uppercase px-2 py-0.5 rounded-full bg-[#f1e9dc] dark:bg-[#160e09] text-[#23150d] dark:text-[#ddd0be] font-bold border border-[#ddd0be] dark:border-[#38251a]">Demo</span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-black font-heading text-[#0052cc] dark:text-[#2684ff]">
                {pilotMetrics.cardboardBoxesReused.toLocaleString()}
              </span>
              <span className="text-xs text-[#6b584a] dark:text-[#b4a494] font-mono font-bold">
                boxes reused
              </span>
            </div>

            <div className="text-xs font-mono text-[#23150d] dark:text-[#faf6ee] mt-1 font-bold">
              + {pilotMetrics.plasticBubbleWrapSavedKg} kg bubble wrap diverted
            </div>

            <p className="mt-2 text-xs text-[#5c4738] dark:text-[#ddd0be] leading-relaxed font-medium">
              Collected at the Tower B kiosk and repurposed directly by Annapoorna Kirana and local marketplace vendors.
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-[#ddd0be] dark:border-[#38251a] text-[11px] text-[#6b584a] dark:text-[#b4a494] flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-bold text-[#23150d] dark:text-[#faf6ee]">
              <Recycle className="w-3.5 h-3.5 text-[#0052cc] dark:text-[#2684ff]" />
              <span>Zero cardboard burned in society waste</span>
            </span>
          </div>
        </div>

        {/* Metric 6: RWA Corpus Revenue Earned */}
        <div className="p-6 rounded-2xl bg-[#faf6ee] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between text-xs text-[#6b584a] dark:text-[#b4a494] font-mono">
              <span className="font-bold">06 · RWA Venue Corpus</span>
              <span className="text-[9px] uppercase px-2 py-0.5 rounded-full bg-[#f1e9dc] dark:bg-[#160e09] text-[#23150d] dark:text-[#ddd0be] font-bold border border-[#ddd0be] dark:border-[#38251a]">Demo</span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-black font-heading text-[#23150d] dark:text-[#faf6ee]">
                ₹{pilotMetrics.rwaVenueCorpusEarnedINR.toLocaleString()}
              </span>
              <span className="text-xs text-[#6b584a] dark:text-[#b4a494] font-mono font-bold">
                total earned
              </span>
            </div>

            <p className="mt-2 text-xs text-[#5c4738] dark:text-[#ddd0be] leading-relaxed font-medium">
              Direct venue booking revenue credited to the 4 society RWA accounts from corporate leagues and sponsored workshops.
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-[#ddd0be] dark:border-[#38251a] text-[11px] text-[#6b584a] dark:text-[#b4a494] flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-bold text-[#23150d] dark:text-[#faf6ee]">
              <Building className="w-3.5 h-3.5 text-[#0052cc] dark:text-[#2684ff]" />
              <span>Funds common solar and gardener salaries</span>
            </span>
          </div>
        </div>

      </div>

      {/* COMPARISON TABLE: STATUS QUO VS MOHALLA MANDI */}
      <div className="rounded-2xl bg-[#faf6ee] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] overflow-hidden shadow-sm">
        <div className="p-4 border-b border-[#ddd0be] dark:border-[#38251a] flex items-center justify-between">
          <h2 className="text-base font-bold font-heading text-[#23150d] dark:text-[#faf6ee]">
            Systemic Shift in Bengaluru Societies
          </h2>
          <span className="text-[10px] font-mono text-[#6b584a] dark:text-[#b4a494] uppercase font-bold">
            Alliance One 2026 Evaluation Framework
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#23150d] dark:text-[#ddd0be]">
            <thead className="bg-[#f1e9dc] dark:bg-[#160e09] text-[11px] uppercase font-mono text-[#23150d] dark:text-[#b4a494] border-b border-[#ddd0be] dark:border-[#38251a]">
              <tr>
                <th className="py-3 px-4 font-black">Dimension</th>
                <th className="py-3 px-4 text-[#6b584a] dark:text-[#b4a494] font-black">Traditional Gated Society</th>
                <th className="py-3 px-4 text-[#0052cc] dark:text-[#2684ff] font-black">Mohalla Mandi Prototype</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ddd0be] dark:divide-[#38251a]">
              <tr className="hover:bg-[#f1e9dc]/60 dark:hover:bg-[#2a1b13] transition-colors">
                <td className="py-3.5 px-4 font-bold text-[#23150d] dark:text-[#faf6ee]">Society Clubhouse & Courts</td>
                <td className="py-3.5 px-4 text-[#6b584a] dark:text-[#b4a494] font-medium">Empty 85% of weekday daylight hours</td>
                <td className="py-3.5 px-4 text-[#0052cc] dark:text-[#2684ff] font-bold">74% booked with yoga, leagues & repairs</td>
              </tr>
              <tr className="hover:bg-[#f1e9dc]/60 dark:hover:bg-[#2a1b13] transition-colors">
                <td className="py-3.5 px-4 font-bold text-[#23150d] dark:text-[#faf6ee]">Neighbour Relationships</td>
                <td className="py-3.5 px-4 text-[#6b584a] dark:text-[#b4a494] font-medium">WhatsApp group arguments & anonymity</td>
                <td className="py-3.5 px-4 text-[#0052cc] dark:text-[#2684ff] font-bold">Weekly offline events; lit windows connected</td>
              </tr>
              <tr className="hover:bg-[#f1e9dc]/60 dark:hover:bg-[#2a1b13] transition-colors">
                <td className="py-3.5 px-4 font-bold text-[#23150d] dark:text-[#faf6ee]">Local Kiranas & Kaapi Stalls</td>
                <td className="py-3.5 px-4 text-[#6b584a] dark:text-[#b4a494] font-medium">Losing footfall to 10-minute dark stores</td>
                <td className="py-3.5 px-4 text-[#0052cc] dark:text-[#2684ff] font-bold">185+ daily Mudra redemptions; repeat loyalists</td>
              </tr>
              <tr className="hover:bg-[#f1e9dc]/60 dark:hover:bg-[#2a1b13] transition-colors">
                <td className="py-3.5 px-4 font-bold text-[#23150d] dark:text-[#faf6ee]">Gate Traffic & Parcel Boxes</td>
                <td className="py-3.5 px-4 text-[#6b584a] dark:text-[#b4a494] font-medium">Chaos of constant delivery vans & dumped boxes</td>
                <td className="py-3.5 px-4 text-[#0052cc] dark:text-[#2684ff] font-bold">41% batched delivery; 1,840 cartons reused</td>
              </tr>
              <tr className="hover:bg-[#f1e9dc]/60 dark:hover:bg-[#2a1b13] transition-colors">
                <td className="py-3.5 px-4 font-bold text-[#23150d] dark:text-[#faf6ee]">RWA Maintenance Fund</td>
                <td className="py-3.5 px-4 text-[#6b584a] dark:text-[#b4a494] font-medium">Constrained by rising diesel generator costs</td>
                <td className="py-3.5 px-4 text-[#0052cc] dark:text-[#2684ff] font-bold">+₹28,500/month recurring venue revenue</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
