import React, { useState } from 'react';
import { AlertCircle, ChevronDown, ChevronUp, Sparkles, Building2 } from 'lucide-react';

export default function DemoBanner({ onOpenDemoGuide }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-amber-950/40 border-b border-amber-600/30 text-amber-200/90 text-xs py-2 px-4 relative z-40 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30">
            <Sparkles className="w-3 h-3 text-amber-400" />
            Alliance One 2026: Chaturanga
          </span>
          <span className="font-medium text-amber-100 hidden sm:inline">
            Startup Prototype · Bengaluru Apartment Societies
          </span>
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-300 font-mono text-[10px] uppercase tracking-wider">
            Demo Data
          </span>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-[11px] text-amber-200/70 hidden md:inline">
            All events, resident counts, scores, and shop offers are simulated for demonstration.
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-1 text-[11px] text-amber-300 hover:text-amber-100 underline decoration-dotted focus-visible:outline-none"
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? 'Hide pitch context' : 'Why this matters'}</span>
            {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="max-w-7xl mx-auto mt-2 pt-2 border-t border-amber-500/20 grid grid-cols-1 md:grid-cols-3 gap-3 text-[11px] text-amber-100/90">
          <div className="flex items-start gap-2">
            <Building2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-200">The Problem in Bengaluru</p>
              <p className="text-amber-200/80">
                12,000+ apartment societies have high-spec clubhouses and courts that sit empty 85% of weekday hours, while techies suffer loneliness and local shops lose footfall to 10-minute grocery apps.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-emerald-200">The Mohalla Mandi Loop</p>
              <p className="text-amber-200/80">
                Corporate leagues and skill workshops activate society venues. Residents earn Mohalla Mudra credits for attending and practicing eco habits, then spend credits at hyper-local shops.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-200">Competition Evaluation</p>
              <p className="text-amber-200/80">
                Explore as a Resident, then switch to Company Admin, Shop Owner, RWA, or Pilot Dashboard using the top bar. All changes persist in localStorage.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
