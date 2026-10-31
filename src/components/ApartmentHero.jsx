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
    <section className="relative overflow-hidden pt-8 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#ddd0be] dark:border-[#38251a]">
      {/* Background Deep Atlassian & Ivory glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#0052cc]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[250px] bg-[#e8ded0]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Vision & Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Context Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f1e9dc] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] text-[#0052cc] dark:text-[#2684ff] text-xs font-medium mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0052cc] animate-pulse"></span>
              <span>Neighbourhood Community Economy · Bengaluru Societies</span>
            </div>

            {/* The Signature Pitch Heading */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#23150d] dark:text-[#faf6ee] tracking-tight leading-[1.15]">
              Every lit window is a <span className="text-[#0052cc] dark:text-[#2684ff] underline decoration-[#0747a6]/50 decoration-wavy underline-offset-8">neighbour</span> you haven’t met.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#4a3528] dark:text-[#ddd0be] max-w-2xl leading-relaxed">
              Bengaluru apartment clubhouses and courts sit empty all week while neighbours live as strangers. <strong className="text-[#23150d] dark:text-[#faf6ee] font-semibold">Mohalla Mitra</strong> turns idle society spaces into venues for yoga, art, repairs, and corporate leagues. 
            </p>

            <div className="mt-4 p-4 rounded-2xl bg-white dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] text-xs sm:text-sm text-[#4a3528] dark:text-[#ddd0be] flex items-center gap-3.5 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-[#deebff] dark:bg-[#0c2340] text-[#0052cc] dark:text-[#2684ff] flex items-center justify-center shrink-0 border border-[#0052cc]/40 font-bold font-mono">
                MM
              </div>
              <p>
                <strong className="text-[#23150d] dark:text-[#faf6ee]">Mohalla Mudra:</strong> Earn credits by attending society workshops and choosing batched green deliveries. Spend credits at your local kirana, filter kaapi counter, and repair stall.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => {
                  setActiveView('resident');
                  setResidentTab('events');
                }}
                className="px-6 py-3.5 rounded-xl bg-[#0052cc] hover:bg-[#0747a6] text-white font-bold text-sm flex items-center gap-2 shadow-[0_4px_16px_rgba(0,82,204,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Join society events</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button
                onClick={() => {
                  setActiveView('resident');
                  setResidentTab('wallet');
                }}
                className="px-5 py-3.5 rounded-xl bg-white dark:bg-[#221610] hover:bg-[#f1e9dc] dark:hover:bg-[#2c1d15] border border-[#ddd0be] dark:border-[#38251a] text-[#23150d] dark:text-[#faf6ee] font-bold text-sm flex items-center gap-2 transition-colors shadow-sm"
              >
                <span>View local shops & wallet</span>
              </button>

              <button
                onClick={() => setActiveView('pilot')}
                className="px-4 py-3.5 rounded-xl bg-[#f1e9dc] dark:bg-[#221610] hover:bg-[#e8ded0] dark:hover:bg-[#2c1d15] border border-[#ddd0be] dark:border-[#38251a] text-[#0052cc] dark:text-[#2684ff] font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <span>View live pilot metrics (Demo)</span>
              </button>
            </div>

            {/* Three Micro Highlights in high-contrast ivory, beige & Deep Atlassian */}
            <div className="mt-10 grid grid-cols-3 gap-4 pt-6 border-t border-[#ddd0be] dark:border-[#38251a] w-full max-w-xl text-left">
              <div>
                <div className="text-2xl font-extrabold font-heading text-[#0052cc] dark:text-[#2684ff]">Free</div>
                <div className="text-xs text-[#4a3528] dark:text-[#ddd0be] font-bold mt-0.5">For all residents</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold font-heading text-[#23150d] dark:text-[#faf6ee]">100%</div>
                <div className="text-xs text-[#4a3528] dark:text-[#ddd0be] font-bold mt-0.5">Society premises</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold font-heading text-[#0747a6] dark:text-[#4c9aff]">6 Local</div>
                <div className="text-xs text-[#4a3528] dark:text-[#ddd0be] font-bold mt-0.5">Kirana & Kaapi partners</div>
              </div>
            </div>

          </div>

          {/* Right Column: The Interactive Sandstone Apartment Block Illustration */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* The Building Outer Card */}
            <div className="w-full max-w-md bg-[#f1e9dc] dark:bg-[#1f140e] border-2 border-[#ddd0be] dark:border-[#38251a] rounded-3xl p-5 shadow-xl relative">
              
              {/* Roof top parapet & society badge */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#ddd0be] dark:border-[#38251a]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0052cc]"></div>
                  <span className="text-xs font-bold text-[#23150d] dark:text-[#faf6ee] tracking-wide font-heading">
                    Sobha Carnation · Tower B
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#0052cc] dark:text-[#2684ff] font-mono font-medium">
                  <Lightbulb className="w-3.5 h-3.5 text-[#0052cc] dark:text-[#2684ff]" />
                  <span>{litCount} / {totalCount} lit</span>
                </div>
              </div>

              {/* Rooftop silhouette elements: Solar panels & Water tanks */}
              <div className="flex justify-between items-end px-4 mb-2 opacity-90">
                <div className="flex items-center gap-1">
                  <div className="w-7 h-3 bg-[#e8ded0] dark:bg-[#2c1d15] rounded-t border-t border-x border-[#c4b49f] dark:border-[#4e3526]"></div>
                  <div className="w-9 h-4 bg-[#e8ded0] dark:bg-[#2c1d15] rounded-t border-t border-x border-[#c4b49f] dark:border-[#4e3526] flex items-center justify-center text-[7px] text-[#4a3528] dark:text-[#ddd0be]">
                    SOLAR
                  </div>
                </div>
                <div className="text-[10px] text-[#0052cc] dark:text-[#2684ff] font-mono flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0052cc] animate-ping"></span>
                  Rooftop Terrace Garden
                </div>
                <div className="w-6 h-5 bg-[#e8ded0] dark:bg-[#2c1d15] rounded-t-sm border border-[#c4b49f] dark:border-[#4e3526]"></div>
              </div>

              {/* 4x4 Apartment Windows Grid */}
              <div className="bg-[#e8ded0] dark:bg-[#160e09] p-3.5 rounded-2xl border border-[#ddd0be] dark:border-[#38251a] shadow-inner">
                <div className="grid grid-cols-4 gap-2.5">
                  {windows.map((w) => {
                    const isSelected = selectedUnit?.id === w.id;
                    return (
                      <button
                        key={w.id}
                        onClick={() => handleWindowClick(w)}
                        className={`group relative aspect-[1.1] rounded-lg transition-all p-1 flex flex-col justify-between text-left focus-visible:ring-2 focus-visible:ring-[#0052cc] ${
                          w.lit
                            ? 'window-lit shadow-[0_0_15px_rgba(0,82,204,0.45)] text-[#23150d] font-semibold'
                            : 'window-unlit hover:bg-[#ddd0be] dark:hover:bg-[#2c1d15] text-[#755e4e] dark:text-[#9c8574]'
                        } ${isSelected ? 'ring-2 ring-[#0052cc] ring-offset-2 ring-offset-[#e8ded0] dark:ring-offset-[#160e09]' : ''}`}
                        title={`Flat ${w.unit} - ${w.resident} (${w.lit ? 'Lit' : 'Tap to light up'})`}
                        aria-label={`Flat ${w.unit}, ${w.resident}, ${w.lit ? 'window is lit' : 'window is dark'}`}
                      >
                        {/* Unit Number */}
                        <div className="flex items-center justify-between w-full">
                          <span className={`text-[10px] font-mono leading-none ${w.lit ? 'text-[#0747a6] font-bold' : 'text-[#755e4e] dark:text-[#9c8574]'}`}>
                            {w.unit}
                          </span>
                          {/* Mini Window Frame Cross */}
                          <span className={`text-[8px] ${w.lit ? 'text-[#0052cc]' : 'text-[#9c8574]'}`}>
                            +
                          </span>
                        </div>

                        {/* Silhouette interior hint */}
                        <div className="flex items-end justify-between w-full">
                          <div className={`h-2 rounded-t-sm ${w.lit ? 'w-2 bg-[#0052cc]/60' : 'w-1.5 bg-[#9c8574]/40'}`}></div>
                          <div className={`text-[8px] font-mono ${w.lit ? 'text-[#0747a6]' : 'text-[#9c8574]'}`}>
                            {w.lit ? '●' : '○'}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Ground Lobby & Garden entry */}
              <div className="mt-3 pt-3 border-t border-[#ddd0be] dark:border-[#38251a] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#4a3528] dark:text-[#ddd0be] text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-[#0052cc]"></span>
                  <span>Tap windows to switch light</span>
                </div>
                <button
                  onClick={toggleAllWindows}
                  className="text-[11px] font-medium text-[#0052cc] dark:text-[#2684ff] hover:text-[#0747a6] underline decoration-dotted"
                >
                  {litCount === totalCount ? 'Dim all' : 'Light all windows'}
                </button>
              </div>

              {/* Selected Window Detail Drawer / Vignette Card */}
              {selectedUnit && (
                <div className="mt-3.5 p-3 rounded-xl bg-white dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] text-left transition-all shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-[#0052cc] text-white">
                        Flat {selectedUnit.unit}
                      </span>
                      <span className="text-xs font-semibold text-[#23150d] dark:text-[#faf6ee]">
                        {selectedUnit.resident}
                      </span>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-medium ${
                      selectedUnit.lit ? 'bg-[#deebff] dark:bg-[#0c2340] text-[#0052cc] dark:text-[#2684ff] border border-[#0052cc]/30' : 'bg-[#f1e9dc] dark:bg-[#2c1d15] text-[#755e4e] dark:text-[#9c8574]'
                    }`}>
                      {selectedUnit.lit ? 'Window Lit' : 'Window Dark'}
                    </span>
                  </div>

                  <p className="mt-1.5 text-xs text-[#4a3528] dark:text-[#ddd0be] leading-snug italic">
                    "{selectedUnit.story}"
                  </p>

                  <div className="mt-2.5 flex items-center justify-between text-[11px]">
                    <span className="text-[#755e4e] dark:text-[#9c8574]">Connected via Mohalla Mitra</span>
                    <button
                      onClick={() => {
                        setActiveView('resident');
                        setResidentTab('events');
                      }}
                      className="text-[#0052cc] dark:text-[#2684ff] hover:text-[#0747a6] font-semibold inline-flex items-center gap-1"
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
