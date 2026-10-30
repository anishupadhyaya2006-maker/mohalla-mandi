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
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-emerald-500/30 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5" />
                Alliance One 2026: Chaturanga Competition
              </span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold">
                Simulated Demo Data
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-heading text-slate-100">
              Pilot Impact & Traction Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1">
              Read-only aggregate metrics from the 4-society pilot cluster in Bellandur, Bengaluru. Evaluates community bonding, hyperlocal shop spend, and gate traffic reduction.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs shrink-0 text-right font-mono">
            <div className="text-slate-400 text-[10px] uppercase">Pilot Cluster</div>
            <div className="text-slate-200 font-semibold text-xs mt-0.5">4 Societies · 1,630 Flats</div>
            <div className="text-emerald-400 text-[10px]">Bellandur Ward 150</div>
          </div>
        </div>
      </div>

      {/* Mandatory Demo Data Disclosure Alert */}
      <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-3">
        <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <strong className="font-semibold text-amber-100">Demo Data Disclosure:</strong> All statistics, participation rates, Mudra volumes, and environmental impact numbers on this screen are simulated prototype metrics modeled for the Alliance One 2026 Chaturanga startup pitch. No real transactional banking is executed.
        </div>
      </div>

      {/* THE 5 REQUIRED PILOT METRICS IN VARIED CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Metric 1: Participation */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>01 · Resident Participation</span>
              <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-slate-800 text-amber-300">Demo</span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold font-heading text-slate-100">
                {pilotMetrics.activeResidents}
              </span>
              <span className="text-xs text-emerald-400 font-mono font-bold">
                {pilotMetrics.activeResidentsGrowth}
              </span>
            </div>

            <p className="mt-2 text-xs text-slate-300 leading-relaxed">
              Active residents attending at least 2 society events monthly across Sobha Carnation, Prestige Lavender, Green Glen, and SJR Watermark.
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Baseline before launch: 64 residents</span>
            <span className="text-emerald-400 font-mono font-semibold">+568% jump</span>
          </div>
        </div>

        {/* Metric 2: Repeat Attendance Rate */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>02 · Repeat Attendance</span>
              <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-slate-800 text-amber-300">Demo</span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold font-heading text-amber-400">
                {pilotMetrics.repeatAttendanceRate}%
              </span>
              <span className="text-xs text-slate-400 font-mono">
                30-day retention
              </span>
            </div>

            <p className="mt-2 text-xs text-slate-300 leading-relaxed">
              Residents who return for a second or third workshop within the month. Sustained by inter-company league points and neighbour relationships.
            </p>
          </div>

          {/* Visual Benchmark Bar */}
          <div className="mt-5 pt-3 border-t border-slate-800">
            <div className="flex justify-between text-[10px] text-slate-400 font-mono mb-1">
              <span>Typical Society AGM: 22%</span>
              <span className="text-amber-300 font-bold">Mohalla Mandi: 68.4%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden flex">
              <div className="bg-slate-600 h-full" style={{ width: '22%' }} title="Industry baseline"></div>
              <div className="bg-amber-400 h-full" style={{ width: '46.4%' }} title="Mohalla Mandi lift"></div>
            </div>
          </div>
        </div>

        {/* Metric 3: Credits Spent at Local Shops */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>03 · Local Shop Spend</span>
              <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-slate-800 text-amber-300">Demo</span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold font-heading text-emerald-400">
                {pilotMetrics.totalCreditsCirculated.toLocaleString()}
              </span>
              <span className="text-xs font-mono text-emerald-300">MM</span>
            </div>

            <div className="text-xs font-mono text-slate-300 mt-1 font-semibold">
              ≈ ₹{pilotMetrics.hyperlocalSpendINR.toLocaleString()} offline commerce
            </div>

            <p className="mt-2 text-xs text-slate-300 leading-relaxed">
              Circulated to 14 hyper-local kiranas, degree kaapi stalls, tailors, and cobblers within 500m of society gates.
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Average resident savings:</span>
            <span className="text-emerald-400 font-mono font-semibold">₹580 / month</span>
          </div>
        </div>

        {/* Metric 4: Batched Delivery Share */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>04 · Batched Delivery Share</span>
              <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-slate-800 text-amber-300">Demo</span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold font-heading text-sky-400">
                {pilotMetrics.batchedDeliveryShare}%
              </span>
              <span className="text-xs text-slate-400 font-mono">
                parcels consolidated
              </span>
            </div>

            <p className="mt-2 text-xs text-slate-300 leading-relaxed">
              4 out of 10 daily deliveries routed through the dedicated 6 PM society hub drop instead of random ad-hoc gate entries.
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <Truck className="w-3.5 h-3.5 text-sky-400" />
              <span>{pilotMetrics.vanTripsPreventedDaily} van trips eliminated daily</span>
            </span>
          </div>
        </div>

        {/* Metric 5: Packages Returned for Circular Reuse */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>05 · Packages Returned</span>
              <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-slate-800 text-amber-300">Demo</span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold font-heading text-emerald-400">
                {pilotMetrics.cardboardBoxesReused.toLocaleString()}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                boxes reused
              </span>
            </div>

            <div className="text-xs font-mono text-slate-300 mt-1 font-semibold">
              + {pilotMetrics.plasticBubbleWrapSavedKg} kg bubble wrap diverted
            </div>

            <p className="mt-2 text-xs text-slate-300 leading-relaxed">
              Collected at the Tower B kiosk and repurposed directly by Annapoorna Kirana and local marketplace vendors.
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <Recycle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Zero cardboard burned in society waste</span>
            </span>
          </div>
        </div>

        {/* Metric 6: RWA Corpus Revenue Earned */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>06 · RWA Venue Corpus</span>
              <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-slate-800 text-amber-300">Demo</span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold font-heading text-purple-400">
                ₹{pilotMetrics.rwaVenueCorpusEarnedINR.toLocaleString()}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                total earned
              </span>
            </div>

            <p className="mt-2 text-xs text-slate-300 leading-relaxed">
              Direct venue booking revenue credited to the 4 society RWA accounts from corporate leagues and sponsored workshops.
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <Building className="w-3.5 h-3.5 text-purple-400" />
              <span>Funds common solar and gardener salaries</span>
            </span>
          </div>
        </div>

      </div>

      {/* COMPARISON TABLE: STATUS QUO VS MOHALLA MANDI */}
      <div className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <h2 className="text-base font-bold font-heading text-slate-100">
            Systemic Shift in Bengaluru Societies
          </h2>
          <span className="text-[10px] font-mono text-slate-400 uppercase">
            Alliance One 2026 Evaluation Framework
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-[11px] uppercase font-mono text-slate-400 border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Dimension</th>
                <th className="py-3 px-4 text-slate-400">Traditional Gated Society</th>
                <th className="py-3 px-4 text-amber-300 font-bold">Mohalla Mandi Prototype</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-200">Society Clubhouse & Courts</td>
                <td className="py-3 px-4 text-slate-400">Empty 85% of weekday daylight hours</td>
                <td className="py-3 px-4 text-emerald-300 font-medium">74% booked with yoga, leagues & repairs</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-200">Neighbour Relationships</td>
                <td className="py-3 px-4 text-slate-400">WhatsApp group arguments & anonymity</td>
                <td className="py-3 px-4 text-emerald-300 font-medium">Weekly offline events; lit windows connected</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-200">Local Kiranas & Kaapi Stalls</td>
                <td className="py-3 px-4 text-slate-400">Losing footfall to 10-minute dark stores</td>
                <td className="py-3 px-4 text-emerald-300 font-medium">185+ daily Mudra redemptions; repeat loyalists</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-200">Gate Traffic & Parcel Boxes</td>
                <td className="py-3 px-4 text-slate-400">Chaos of constant delivery vans & dumped boxes</td>
                <td className="py-3 px-4 text-emerald-300 font-medium">41% batched delivery; 1,840 cartons reused</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-slate-200">RWA Maintenance Fund</td>
                <td className="py-3 px-4 text-slate-400">Constrained by rising diesel generator costs</td>
                <td className="py-3 px-4 text-emerald-300 font-medium">+₹28,500/month recurring venue revenue</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
