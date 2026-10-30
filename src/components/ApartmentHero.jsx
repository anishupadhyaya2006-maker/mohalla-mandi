import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Sparkles,
  ArrowRight,
  Sun,
  Lightbulb,
  Building2,
  Users,
  Compass,
  HeartHandshake
} from 'lucide-react';

export default function ApartmentHero({ onExploreEvents, onOpenAuth }) {
  const { windows, toggleWindow, toggleAllWindows, setActiveView, setResidentTab } = useApp();
  const [selectedUnit, setSelectedUnit] = useState(windows.find(w => w.id === 101) || windows[0]);

  const litCount = windows.filter(w => w.lit).length;
  const totalCount = windows.length;

  const handleWindowClick = (w) => {
    toggleWindow(w.id);
    setSelectedUnit(w);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80">
      {/* Background glow effects without generic purple gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[250px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Vision & Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Context Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-300 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span>Neighbourhood Community Economy · Bengaluru Societies</span>
            </div>

            {/* The Signature Pitch Heading */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.15]">
              Every lit window is a <span className="text-amber-400 underline decoration-amber-500/50 decoration-wavy underline-offset-8">neighbour</span> you haven’t met.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Bengaluru apartment clubhouses and courts sit empty all week while neighbours live as strangers. <strong className="text-white font-semibold">Mohalla Mandi</strong> turns idle society spaces into venues for yoga, art, repairs, and corporate leagues. 
            </p>

            <div className="mt-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-500/30 font-bold">
                MM
              </div>
              <p>
                <strong className="text-emerald-300">Mohalla Mudra:</strong> Earn credits by attending society workshops and choosing batched green deliveries. Spend credits at your local kirana, filter kaapi counter, and repair stall.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  setActiveView('resident');
                  setResidentTab('events');
                }}
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Join society events</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <button
                onClick={() => {
                  setActiveView('resident');
                  setResidentTab('wallet');
                }}
                className="px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium text-sm flex items-center gap-2 transition-colors"
              >
                <span>View local shops & wallet</span>
              </button>

              <button
                onClick={() => setActiveView('pilot')}
                className="text-xs text-slate-400 hover:text-amber-300 underline decoration-slate-600 underline-offset-4 py-2"
              >
                View live pilot metrics (Demo)
              </button>
            </div>

            {/* Three Micro Highlights */}
            <div className="mt-10 grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 w-full max-w-xl text-left">
              <div>
                <div className="text-2xl font-bold font-heading text-amber-300">Free</div>
                <div className="text-xs text-slate-400 mt-0.5">For all residents</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-heading text-emerald-400">100%</div>
                <div className="text-xs text-slate-400 mt-0.5">Society premises</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-heading text-sky-400">6 Local</div>
                <div className="text-xs text-slate-400 mt-0.5">Kirana & Kaapi partners</div>
              </div>
            </div>

          </div>

          {/* Right Column: The Interactive Apartment Block Illustration */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* The Building Outer Card */}
            <div className="w-full max-w-md bg-slate-900/90 border-2 border-slate-800 rounded-3xl p-5 shadow-2xl relative">
              
              {/* Roof top parapet & society badge */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                  <span className="text-xs font-bold text-slate-200 tracking-wide font-heading">
                    Sobha Carnation · Tower B
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-amber-300 font-mono">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                  <span>{litCount} / {totalCount} lit</span>
                </div>
              </div>

              {/* Rooftop silhouette elements: Solar panels & Water tanks */}
              <div className="flex justify-between items-end px-4 mb-2 opacity-70">
                <div className="flex items-center gap-1">
                  <div className="w-7 h-3 bg-slate-800 rounded-t border-t border-x border-slate-700"></div>
                  <div className="w-9 h-4 bg-slate-800 rounded-t border-t border-x border-slate-700 flex items-center justify-center text-[7px] text-slate-400">
                    SOLAR
                  </div>
                </div>
                <div className="text-[10px] text-emerald-400/90 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Rooftop Terrace Garden
                </div>
                <div className="w-6 h-5 bg-slate-800 rounded-t-sm border border-slate-700"></div>
              </div>

              {/* 4x4 Apartment Windows Grid */}
              <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800/90">
                <div className="grid grid-cols-4 gap-2.5">
                  {windows.map((w) => {
                    const isSelected = selectedUnit?.id === w.id;
                    return (
                      <button
                        key={w.id}
                        onClick={() => handleWindowClick(w)}
                        className={`group relative aspect-[1.1] rounded-lg transition-all p-1 flex flex-col justify-between text-left focus-visible:ring-2 focus-visible:ring-amber-400 ${
                          w.lit
                            ? 'window-lit shadow-[0_0_15px_rgba(245,158,11,0.45)] text-slate-950 font-semibold'
                            : 'window-unlit hover:bg-slate-800 text-slate-500'
                        } ${isSelected ? 'ring-2 ring-amber-300 ring-offset-2 ring-offset-slate-950' : ''}`}
                        title={`Flat ${w.unit} - ${w.resident} (${w.lit ? 'Lit' : 'Tap to light up'})`}
                        aria-label={`Flat ${w.unit}, ${w.resident}, ${w.lit ? 'window is lit' : 'window is dark'}`}
                      >
                        {/* Unit Number */}
                        <div className="flex items-center justify-between w-full">
                          <span className={`text-[10px] font-mono leading-none ${w.lit ? 'text-amber-950 font-bold' : 'text-slate-500'}`}>
                            {w.unit}
                          </span>
                          {/* Mini Window Frame Cross */}
                          <span className={`text-[8px] ${w.lit ? 'text-amber-800' : 'text-slate-600'}`}>
                            +
                          </span>
                        </div>

                        {/* Silhouette interior hint */}
                        <div className="flex items-end justify-between w-full">
                          <div className={`h-2 rounded-t-sm ${w.lit ? 'w-2 bg-amber-950/70' : 'w-1.5 bg-slate-700/50'}`}></div>
                          <div className={`text-[8px] font-mono ${w.lit ? 'text-amber-900' : 'text-slate-600'}`}>
                            {w.lit ? '●' : '○'}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Ground Lobby & Garden entry */}
              <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span>Tap windows to switch light</span>
                </div>
                <button
                  onClick={toggleAllWindows}
                  className="text-[11px] font-medium text-amber-300 hover:text-amber-200 underline decoration-dotted"
                >
                  {litCount === totalCount ? 'Dim all' : 'Light all windows'}
                </button>
              </div>

              {/* Selected Window Detail Drawer / Vignette Card */}
              {selectedUnit && (
                <div className="mt-3.5 p-3 rounded-xl bg-slate-950 border border-amber-500/40 text-left transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-amber-400 text-slate-950">
                        Flat {selectedUnit.unit}
                      </span>
                      <span className="text-xs font-semibold text-slate-200">
                        {selectedUnit.resident}
                      </span>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                      selectedUnit.lit ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {selectedUnit.lit ? 'Window Lit' : 'Window Dark'}
                    </span>
                  </div>

                  <p className="mt-1.5 text-xs text-slate-300 leading-snug italic">
                    "{selectedUnit.story}"
                  </p>

                  <div className="mt-2.5 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Connected via Mohalla Mandi</span>
                    <button
                      onClick={() => {
                        setActiveView('resident');
                        setResidentTab('events');
                      }}
                      className="text-amber-300 hover:text-amber-100 font-medium inline-flex items-center gap-1"
                    >
                      <span>Join nearby activity</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
