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
      <div className="p-6 rounded-3xl bg-[#fbf4e8] dark:bg-[#241a13] border border-[#d6be96] dark:border-[#c58c2b]/40 relative overflow-hidden shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8a5e18] dark:text-[#ecc26b] font-semibold flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5 text-[#b57a1b] dark:text-[#dfaa43]" />
                Alliance One 2026: Chaturanga Competition
              </span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#ede2d2] dark:bg-[#38281b] text-[#704910] dark:text-[#f5dc9e] border border-[#d6be96] dark:border-[#c58c2b]/40 font-bold">
                Simulated Demo Data
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-heading text-[#211710] dark:text-[#f7f2ea]">
              Pilot Impact & Traction Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-[#574332] dark:text-[#cfbea5] max-w-2xl mt-1">
              Read-only aggregate metrics from the 4-society pilot cluster in Bellandur, Bengaluru. Evaluates community bonding, hyperlocal shop spend, and gate traffic reduction.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white dark:bg-[#1c140d] border border-[#ded1be] dark:border-[#36291e] text-xs shrink-0 text-right font-mono shadow-sm">
            <div className="text-[#725e4c] dark:text-[#8e7a68] text-[10px] uppercase font-semibold">Pilot Cluster</div>
            <div className="text-[#211710] dark:text-[#f2ebe1] font-bold text-xs mt-0.5">4 Societies · 1,630 Flats</div>
            <div className="text-[#8a5e18] dark:text-[#ecc26b] text-[10px] font-medium">Bellandur Ward 150</div>
          </div>
        </div>
      </div>

      {/* Mandatory Demo Data Disclosure Alert */}
      <div className="p-4 rounded-2xl bg-[#f6efe3] dark:bg-[#2b1f16] border border-[#d6be96] dark:border-[#c58c2b]/40 text-[#704910] dark:text-[#ecc26b] text-xs flex items-start gap-3 shadow-sm">
        <Info className="w-4 h-4 text-[#b57a1b] dark:text-[#dfaa43] shrink-0 mt-0.5" />
        <div>
          <strong className="font-semibold text-[#503b2c] dark:text-[#f5dc9e]">Demo Data Disclosure:</strong> All statistics, participation rates, Mudra volumes, and environmental impact numbers on this screen are simulated prototype metrics modeled for the Alliance One 2026 Chaturanga startup pitch. No real transactional banking is executed.
        </div>
      </div>

      {/* THE 5 REQUIRED PILOT METRICS IN VARIED CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Metric 1: Participation */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between text-xs text-[#725e4c] dark:text-[#8e7a68] font-mono">
              <span className="font-bold">01 · Resident Participation</span>
              <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-[#f6efe3] dark:bg-[#2e2319] text-[#8a5e18] dark:text-[#ecc26b] font-semibold border border-[#ded1be] dark:border-transparent">Demo</span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold font-heading text-[#211710] dark:text-[#f7f2ea]">
                {pilotMetrics.activeResidents}
              </span>
              <span className="text-xs text-[#8a5e18] dark:text-[#ecc26b] font-mono font-bold">
                {pilotMetrics.activeResidentsGrowth}
              </span>
            </div>

            <p className="mt-2 text-xs text-[#574332] dark:text-[#cfbea5] leading-relaxed">
              Active residents attending at least 2 society events monthly across Sobha Carnation, Prestige Lavender, Green Glen, and SJR Watermark.
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-[#ded1be] dark:border-[#36291e] text-[11px] text-[#725e4c] dark:text-[#a6917b] flex items-center justify-between">
            <span>Baseline before launch: 64 residents</span>
            <span className="text-[#8a5e18] dark:text-[#ecc26b] font-mono font-bold">+568% jump</span>
          </div>
        </div>

        {/* Metric 2: Repeat Attendance Rate */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between text-xs text-[#725e4c] dark:text-[#8e7a68] font-mono">
              <span className="font-bold">02 · Repeat Attendance</span>
              <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-[#f6efe3] dark:bg-[#2e2319] text-[#8a5e18] dark:text-[#ecc26b] font-semibold border border-[#ded1be] dark:border-transparent">Demo</span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold font-heading text-[#8a5e18] dark:text-[#f5dc9e]">
                {pilotMetrics.repeatAttendanceRate}%
              </span>
              <span className="text-xs text-[#725e4c] dark:text-[#a6917b] font-mono">
                30-day retention
              </span>
            </div>

            <p className="mt-2 text-xs text-[#574332] dark:text-[#cfbea5] leading-relaxed">
              Residents who return for a second or third workshop within the month. Sustained by inter-company league points and neighbour relationships.
            </p>
          </div>

          {/* Visual Benchmark Bar */}
          <div className="mt-5 pt-3 border-t border-[#ded1be] dark:border-[#36291e]">
            <div className="flex justify-between text-[10px] text-[#725e4c] dark:text-[#8e7a68] font-mono mb-1">
              <span>Typical Society AGM: 22%</span>
              <span className="text-[#8a5e18] dark:text-[#f5dc9e] font-bold">Mohalla Mandi: 68.4%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#ede1cd] dark:bg-[#1c140d] overflow-hidden flex">
              <div className="bg-[#b5a085] h-full" style={{ width: '22%' }} title="Industry baseline"></div>
              <div className="bg-[#cb922d] h-full" style={{ width: '46.4%' }} title="Mohalla Mandi lift"></div>
            </div>
          </div>
        </div>

        {/* Metric 3: Credits Spent at Local Shops */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between text-xs text-[#725e4c] dark:text-[#8e7a68] font-mono">
              <span className="font-bold">03 · Local Shop Spend</span>
              <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-[#f6efe3] dark:bg-[#2e2319] text-[#8a5e18] dark:text-[#ecc26b] font-semibold border border-[#ded1be] dark:border-transparent">Demo</span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold font-heading text-[#8a5e18] dark:text-[#f5dc9e]">
                {pilotMetrics.totalCreditsCirculated.toLocaleString()}
              </span>
              <span className="text-xs font-mono text-[#725e4c] dark:text-[#ecc26b] font-bold">MM</span>
            </div>

            <div className="text-xs font-mono text-[#574332] dark:text-[#cfbea5] mt-1 font-semibold">
              ≈ ₹{pilotMetrics.hyperlocalSpendINR.toLocaleString()} offline commerce
            </div>

            <p className="mt-2 text-xs text-[#725e4c] dark:text-[#a6917b] leading-relaxed">
              Circulated to 14 hyper-local kiranas, degree kaapi stalls, tailors, and cobblers within 500m of society gates.
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-[#ded1be] dark:border-[#36291e] text-[11px] text-[#725e4c] dark:text-[#8e7a68] flex items-center justify-between">
            <span>Average resident savings:</span>
            <span className="text-[#8a5e18] dark:text-[#ecc26b] font-mono font-bold">₹580 / month</span>
          </div>
        </div>

        {/* Metric 4: Batched Delivery Share */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between text-xs text-[#725e4c] dark:text-[#8e7a68] font-mono">
              <span className="font-bold">04 · Batched Delivery Share</span>
              <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-[#f6efe3] dark:bg-[#2e2319] text-[#8a5e18] dark:text-[#ecc26b] font-semibold border border-[#ded1be] dark:border-transparent">Demo</span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold font-heading text-[#c85d2e] dark:text-[#dc7545]">
                {pilotMetrics.batchedDeliveryShare}%
              </span>
              <span className="text-xs text-[#725e4c] dark:text-[#a6917b] font-mono">
                parcels consolidated
              </span>
            </div>

            <p className="mt-2 text-xs text-[#574332] dark:text-[#cfbea5] leading-relaxed">
              4 out of 10 daily deliveries routed through the dedicated 6 PM society hub drop instead of random ad-hoc gate entries.
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-[#ded1be] dark:border-[#36291e] text-[11px] text-[#725e4c] dark:text-[#a6917b] flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-medium">
              <Truck className="w-3.5 h-3.5 text-[#c85d2e] dark:text-[#dc7545]" />
              <span>{pilotMetrics.vanTripsPreventedDaily} van trips eliminated daily</span>
            </span>
          </div>
        </div>

        {/* Metric 5: Packages Returned for Circular Reuse */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between text-xs text-[#725e4c] dark:text-[#8e7a68] font-mono">
              <span className="font-bold">05 · Packages Returned</span>
              <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-[#f6efe3] dark:bg-[#2e2319] text-[#8a5e18] dark:text-[#ecc26b] font-semibold border border-[#ded1be] dark:border-transparent">Demo</span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold font-heading text-[#8a5e18] dark:text-[#f5dc9e]">
                {pilotMetrics.cardboardBoxesReused.toLocaleString()}
              </span>
              <span className="text-xs text-[#725e4c] dark:text-[#a6917b] font-mono">
                boxes reused
              </span>
            </div>

            <div className="text-xs font-mono text-[#574332] dark:text-[#cfbea5] mt-1 font-semibold">
              + {pilotMetrics.plasticBubbleWrapSavedKg} kg bubble wrap diverted
            </div>

            <p className="mt-2 text-xs text-[#725e4c] dark:text-[#a6917b] leading-relaxed">
              Collected at the Tower B kiosk and repurposed directly by Annapoorna Kirana and local marketplace vendors.
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-[#ded1be] dark:border-[#36291e] text-[11px] text-[#725e4c] dark:text-[#a6917b] flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-medium">
              <Recycle className="w-3.5 h-3.5 text-[#b57a1b] dark:text-[#dfaa43]" />
              <span>Zero cardboard burned in society waste</span>
            </span>
          </div>
        </div>

        {/* Metric 6: RWA Corpus Revenue Earned */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between text-xs text-[#725e4c] dark:text-[#8e7a68] font-mono">
              <span className="font-bold">06 · RWA Venue Corpus</span>
              <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-[#f6efe3] dark:bg-[#2e2319] text-[#8a5e18] dark:text-[#ecc26b] font-semibold border border-[#ded1be] dark:border-transparent">Demo</span>
            </div>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-4xl font-extrabold font-heading text-[#211710] dark:text-[#f2ebe1]">
                ₹{pilotMetrics.rwaVenueCorpusEarnedINR.toLocaleString()}
              </span>
              <span className="text-xs text-[#725e4c] dark:text-[#a6917b] font-mono">
                total earned
              </span>
            </div>

            <p className="mt-2 text-xs text-[#574332] dark:text-[#cfbea5] leading-relaxed">
              Direct venue booking revenue credited to the 4 society RWA accounts from corporate leagues and sponsored workshops.
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-[#ded1be] dark:border-[#36291e] text-[11px] text-[#725e4c] dark:text-[#8e7a68] flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-medium">
              <Building className="w-3.5 h-3.5 text-[#b57a1b] dark:text-[#dfaa43]" />
              <span>Funds common solar and gardener salaries</span>
            </span>
          </div>
        </div>

      </div>

      {/* COMPARISON TABLE: STATUS QUO VS MOHALLA MANDI */}
      <div className="rounded-2xl bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] overflow-hidden shadow-sm">
        <div className="p-4 border-b border-[#ded1be] dark:border-[#36291e] flex items-center justify-between">
          <h2 className="text-base font-bold font-heading text-[#211710] dark:text-[#f7f2ea]">
            Systemic Shift in Bengaluru Societies
          </h2>
          <span className="text-[10px] font-mono text-[#725e4c] dark:text-[#8e7a68] uppercase font-semibold">
            Alliance One 2026 Evaluation Framework
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#574332] dark:text-[#cfbea5]">
            <thead className="bg-[#f6efe3] dark:bg-[#1c140d] text-[11px] uppercase font-mono text-[#725e4c] dark:text-[#8e7a68] border-b border-[#ded1be] dark:border-[#36291e]">
              <tr>
                <th className="py-3 px-4 font-bold">Dimension</th>
                <th className="py-3 px-4 text-[#725e4c] dark:text-[#8e7a68] font-bold">Traditional Gated Society</th>
                <th className="py-3 px-4 text-[#8a5e18] dark:text-[#ecc26b] font-bold">Mohalla Mandi Prototype</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ded1be] dark:divide-[#36291e]">
              <tr className="hover:bg-[#fcfaf6] dark:hover:bg-[#2b2118] transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#211710] dark:text-[#ded3c4]">Society Clubhouse & Courts</td>
                <td className="py-3.5 px-4 text-[#725e4c] dark:text-[#8e7a68]">Empty 85% of weekday daylight hours</td>
                <td className="py-3.5 px-4 text-[#8a5e18] dark:text-[#f5dc9e] font-semibold">74% booked with yoga, leagues & repairs</td>
              </tr>
              <tr className="hover:bg-[#fcfaf6] dark:hover:bg-[#2b2118] transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#211710] dark:text-[#ded3c4]">Neighbour Relationships</td>
                <td className="py-3.5 px-4 text-[#725e4c] dark:text-[#8e7a68]">WhatsApp group arguments & anonymity</td>
                <td className="py-3.5 px-4 text-[#8a5e18] dark:text-[#f5dc9e] font-semibold">Weekly offline events; lit windows connected</td>
              </tr>
              <tr className="hover:bg-[#fcfaf6] dark:hover:bg-[#2b2118] transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#211710] dark:text-[#ded3c4]">Local Kiranas & Kaapi Stalls</td>
                <td className="py-3.5 px-4 text-[#725e4c] dark:text-[#8e7a68]">Losing footfall to 10-minute dark stores</td>
                <td className="py-3.5 px-4 text-[#8a5e18] dark:text-[#f5dc9e] font-semibold">185+ daily Mudra redemptions; repeat loyalists</td>
              </tr>
              <tr className="hover:bg-[#fcfaf6] dark:hover:bg-[#2b2118] transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#211710] dark:text-[#ded3c4]">Gate Traffic & Parcel Boxes</td>
                <td className="py-3.5 px-4 text-[#725e4c] dark:text-[#8e7a68]">Chaos of constant delivery vans & dumped boxes</td>
                <td className="py-3.5 px-4 text-[#8a5e18] dark:text-[#f5dc9e] font-semibold">41% batched delivery; 1,840 cartons reused</td>
              </tr>
              <tr className="hover:bg-[#fcfaf6] dark:hover:bg-[#2b2118] transition-colors">
                <td className="py-3.5 px-4 font-semibold text-[#211710] dark:text-[#ded3c4]">RWA Maintenance Fund</td>
                <td className="py-3.5 px-4 text-[#725e4c] dark:text-[#8e7a68]">Constrained by rising diesel generator costs</td>
                <td className="py-3.5 px-4 text-[#8a5e18] dark:text-[#f5dc9e] font-semibold">+₹28,500/month recurring venue revenue</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
