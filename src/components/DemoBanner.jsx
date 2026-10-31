import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, Building2, AlertCircle } from 'lucide-react';

export default function DemoBanner({ onOpenDemoGuide }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-[#f1e9dc] dark:bg-[#1f140e] border-b border-[#ddd0be] dark:border-[#38251a] text-[#23150d] dark:text-[#faf6ee] text-xs py-2 px-4 relative z-40 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#deebff] dark:bg-[#0c2340] text-[#0747a6] dark:text-[#2684ff] font-bold border border-[#b3d4ff] dark:border-[#0052cc]/40 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0052cc] dark:text-[#2684ff]" />
            Alliance One 2026: Chaturanga
          </span>
          <span className="font-semibold text-[#23150d] dark:text-[#faf6ee] hidden sm:inline">
            Bengaluru Apartment Societies · Community Economy Prototype
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#e8ded0] dark:bg-[#2c1d15] text-[#23150d] dark:text-[#faf6ee] font-mono text-[10px] uppercase font-bold tracking-wider border border-[#c4b49f] dark:border-[#4e3526]">
            Demo Data
          </span>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-[11px] text-[#4a3528] dark:text-[#ddd0be] font-medium hidden md:inline">
            All events, resident counts, scores, and shop offers are simulated for demonstration.
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-1 text-[11px] text-[#0052cc] dark:text-[#2684ff] hover:text-[#0747a6] dark:hover:text-[#4c9aff] underline decoration-solid focus-visible:outline-none font-bold"
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? 'Hide pitch context' : 'Why this matters'}</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="max-w-7xl mx-auto mt-2.5 pt-2.5 border-t border-[#ddd0be] dark:border-[#38251a] grid grid-cols-1 md:grid-cols-3 gap-3 text-[11px] text-[#23150d] dark:text-[#ddd0be]">
          <div className="flex items-start gap-2 bg-white/80 dark:bg-[#221610]/80 p-2.5 rounded-xl border border-[#ddd0be] dark:border-[#38251a]">
            <Building2 className="w-4 h-4 text-[#0052cc] dark:text-[#2684ff] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-[#23150d] dark:text-[#faf6ee]">The Problem in Bengaluru</p>
              <p className="text-[#4a3528] dark:text-[#ddd0be] mt-0.5 leading-snug">
                12,000+ apartment societies have high-spec clubhouses and courts that sit empty 85% of weekday hours, while techies suffer isolation and local shops lose footfall to dark-store delivery apps.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2 bg-white/80 dark:bg-[#221610]/80 p-2.5 rounded-xl border border-[#ddd0be] dark:border-[#38251a]">
            <Sparkles className="w-4 h-4 text-[#0747a6] dark:text-[#2684ff] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-[#0747a6] dark:text-[#2684ff]">The Mohalla Mitra Loop</p>
              <p className="text-[#4a3528] dark:text-[#ddd0be] mt-0.5 leading-snug">
                Corporate leagues and skill workshops activate society venues. Residents earn Mohalla Mudra credits for attending and practicing eco habits, then spend credits at hyper-local shops.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2 bg-white/80 dark:bg-[#221610]/80 p-2.5 rounded-xl border border-[#ddd0be] dark:border-[#38251a]">
            <AlertCircle className="w-4 h-4 text-[#0052cc] dark:text-[#2684ff] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-[#23150d] dark:text-[#faf6ee]">Competition Evaluation</p>
              <p className="text-[#4a3528] dark:text-[#ddd0be] mt-0.5 leading-snug">
                Explore as a Resident, then switch to Company Admin, Shop Owner, RWA, or Pilot Dashboard using the top bar. All changes persist in localStorage.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

