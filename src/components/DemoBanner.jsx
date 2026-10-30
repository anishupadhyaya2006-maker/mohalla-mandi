import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, Building2, AlertCircle } from 'lucide-react';

export default function DemoBanner({ onOpenDemoGuide }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-[#f4ede0] dark:bg-[#211a14] border-b border-[#dfd3c0] dark:border-[#3c2f24] text-[#574332] dark:text-[#cfbea5] text-xs py-2 px-4 relative z-40 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ede1cd] dark:bg-[#38281b] text-[#8a5e18] dark:text-[#ecc26b] font-semibold border border-[#d8c39e] dark:border-[#c58c2b]/30">
            <Sparkles className="w-3 h-3 text-[#b57a1b] dark:text-[#dfaa43]" />
            Alliance One 2026: Chaturanga
          </span>
          <span className="font-medium text-[#211710] dark:text-[#f2ebe1] hidden sm:inline">
            Bengaluru Apartment Societies · Community Economy Prototype
          </span>
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#e8decb] dark:bg-[#2e2319] text-[#6e5844] dark:text-[#c9b7a3] font-mono text-[10px] uppercase tracking-wider border border-[#d6c7b0] dark:border-[#483a2e]">
            Demo Data
          </span>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-[11px] text-[#7c6854] dark:text-[#a6917b] hidden md:inline">
            All events, resident counts, scores, and shop offers are simulated for demonstration.
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-1 text-[11px] text-[#8a5e18] dark:text-[#ecc26b] hover:text-[#574332] dark:hover:text-[#fbedd1] underline decoration-dotted focus-visible:outline-none font-medium"
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? 'Hide pitch context' : 'Why this matters'}</span>
            {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="max-w-7xl mx-auto mt-2 pt-2 border-t border-[#dfd3c0] dark:border-[#3c2f24] grid grid-cols-1 md:grid-cols-3 gap-3 text-[11px] text-[#4d3826] dark:text-[#ded3c4]">
          <div className="flex items-start gap-2">
            <Building2 className="w-4 h-4 text-[#b57a1b] dark:text-[#dfaa43] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#211710] dark:text-[#f5dc9e]">The Problem in Bengaluru</p>
              <p className="text-[#574332] dark:text-[#c9b7a3]">
                12,000+ apartment societies have high-spec clubhouses and courts that sit empty 85% of weekday hours, while techies suffer isolation and local shops lose footfall to dark-store delivery apps.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-[#c85d2e] dark:text-[#dc7545] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#8c3b17] dark:text-[#f3ba9e]">The Mohalla Mandi Loop</p>
              <p className="text-[#574332] dark:text-[#c9b7a3]">
                Corporate leagues and skill workshops activate society venues. Residents earn Mohalla Mudra credits for attending and practicing eco habits, then spend credits at hyper-local shops.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-[#b57a1b] dark:text-[#dfaa43] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#211710] dark:text-[#f5dc9e]">Competition Evaluation</p>
              <p className="text-[#574332] dark:text-[#c9b7a3]">
                Explore as a Resident, then switch to Company Admin, Shop Owner, RWA, or Pilot Dashboard using the top bar. All changes persist in localStorage.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
