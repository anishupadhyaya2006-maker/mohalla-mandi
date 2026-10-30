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
    <section className="relative overflow-hidden pt-8 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#dfd3c0] dark:border-[#36291e]">
      {/* Background warm earthen glow (no blue/purple) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#cb922d]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[250px] bg-[#c85d2e]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Vision & Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Context Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f4ede0] dark:bg-[#241a13] border border-[#d6be96] dark:border-[#c58c2b]/40 text-[#8a5e18] dark:text-[#ecc26b] text-xs font-medium mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#c85d2e] animate-pulse"></span>
              <span>Neighbourhood Community Economy · Bengaluru Societies</span>
            </div>

            {/* The Signature Pitch Heading */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#211710] dark:text-[#fbf8f3] tracking-tight leading-[1.15]">
              Every lit window is a <span className="text-[#c85d2e] underline decoration-[#cb922d]/70 decoration-wavy underline-offset-8">neighbour</span> you haven’t met.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#574332] dark:text-[#ded3c4] max-w-2xl leading-relaxed">
              Bengaluru apartment clubhouses and courts sit empty all week while neighbours live as strangers. <strong className="text-[#211710] dark:text-[#fbf8f3] font-semibold">Mohalla Mandi</strong> turns idle society spaces into venues for yoga, art, repairs, and corporate leagues. 
            </p>

            <div className="mt-4 p-4 rounded-2xl bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] text-xs sm:text-sm text-[#574332] dark:text-[#ded3c4] flex items-center gap-3.5 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-[#ede1cd] dark:bg-[#38281b] text-[#8a5e18] dark:text-[#ecc26b] flex items-center justify-center shrink-0 border border-[#d8c39e] dark:border-[#c58c2b]/40 font-bold font-mono">
                MM
              </div>
              <p>
                <strong className="text-[#211710] dark:text-[#f5dc9e]">Mohalla Mudra:</strong> Earn credits by attending society workshops and choosing batched green deliveries. Spend credits at your local kirana, filter kaapi counter, and repair stall.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  setActiveView('resident');
                  setResidentTab('events');
                }}
                className="px-6 py-3.5 rounded-xl bg-[#c85d2e] hover:bg-[#b84f22] text-white font-bold text-sm flex items-center gap-2 shadow-[0_4px_16px_rgba(200,93,46,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Join society events</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button
                onClick={() => {
                  setActiveView('resident');
                  setResidentTab('wallet');
                }}
                className="px-5 py-3.5 rounded-xl bg-white dark:bg-[#261b12] hover:bg-[#f6efe3] dark:hover:bg-[#322418] border border-[#ded1be] dark:border-[#483a2e] text-[#211710] dark:text-[#f2ebe1] font-medium text-sm flex items-center gap-2 transition-colors shadow-sm"
              >
                <span>View local shops & wallet</span>
              </button>

              <button
                onClick={() => setActiveView('pilot')}
                className="text-xs text-[#725e4c] dark:text-[#a6917b] hover:text-[#c85d2e] dark:hover:text-[#ecc26b] underline decoration-[#cfbea5] dark:decoration-[#5c4a3a] underline-offset-4 py-2 font-medium"
              >
                View live pilot metrics (Demo)
              </button>
            </div>

            {/* Three Micro Highlights in warm beige/earth */}
            <div className="mt-10 grid grid-cols-3 gap-4 pt-6 border-t border-[#dfd3c0] dark:border-[#36291e] w-full max-w-xl text-left">
              <div>
                <div className="text-2xl font-bold font-heading text-[#b57a1b] dark:text-[#ecc26b]">Free</div>
                <div className="text-xs text-[#725e4c] dark:text-[#a6917b] mt-0.5">For all residents</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-heading text-[#c85d2e] dark:text-[#dc7545]">100%</div>
                <div className="text-xs text-[#725e4c] dark:text-[#a6917b] mt-0.5">Society premises</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-heading text-[#8a5e18] dark:text-[#dfaa43]">6 Local</div>
                <div className="text-xs text-[#725e4c] dark:text-[#a6917b] mt-0.5">Kirana & Kaapi partners</div>
              </div>
            </div>

          </div>

          {/* Right Column: The Interactive Sandstone Apartment Block Illustration */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* The Building Outer Card */}
            <div className="w-full max-w-md bg-[#f6efe3] dark:bg-[#241a13] border-2 border-[#d8c7b0] dark:border-[#483a2e] rounded-3xl p-5 shadow-xl relative">
              
              {/* Roof top parapet & society badge */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#dfd3c0] dark:border-[#36291e]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#cb922d]"></div>
                  <span className="text-xs font-bold text-[#211710] dark:text-[#f7f2ea] tracking-wide font-heading">
                    Sobha Carnation · Tower B
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#8a5e18] dark:text-[#ecc26b] font-mono font-medium">
                  <Lightbulb className="w-3.5 h-3.5 text-[#b57a1b] dark:text-[#dfaa43]" />
                  <span>{litCount} / {totalCount} lit</span>
                </div>
              </div>

              {/* Rooftop silhouette elements: Solar panels & Water tanks */}
              <div className="flex justify-between items-end px-4 mb-2 opacity-90">
                <div className="flex items-center gap-1">
                  <div className="w-7 h-3 bg-[#e5d9c8] dark:bg-[#33251a] rounded-t border-t border-x border-[#d0beaa] dark:border-[#483a2e]"></div>
                  <div className="w-9 h-4 bg-[#e5d9c8] dark:bg-[#33251a] rounded-t border-t border-x border-[#d0beaa] dark:border-[#483a2e] flex items-center justify-center text-[7px] text-[#725e4c] dark:text-[#c9b7a3]">
                    SOLAR
                  </div>
                </div>
                <div className="text-[10px] text-[#8a5e18] dark:text-[#ecc26b] font-mono flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c85d2e] animate-ping"></span>
                  Rooftop Terrace Garden
                </div>
                <div className="w-6 h-5 bg-[#e5d9c8] dark:bg-[#33251a] rounded-t-sm border border-[#d0beaa] dark:border-[#483a2e]"></div>
              </div>

              {/* 4x4 Apartment Windows Grid */}
              <div className="bg-[#ede1cd] dark:bg-[#1a120c] p-3.5 rounded-2xl border border-[#dfd3c0] dark:border-[#36291e] shadow-inner">
                <div className="grid grid-cols-4 gap-2.5">
                  {windows.map((w) => {
                    const isSelected = selectedUnit?.id === w.id;
                    return (
                      <button
                        key={w.id}
                        onClick={() => handleWindowClick(w)}
                        className={`group relative aspect-[1.1] rounded-lg transition-all p-1 flex flex-col justify-between text-left focus-visible:ring-2 focus-visible:ring-[#c85d2e] ${
                          w.lit
                            ? 'window-lit shadow-[0_0_15px_rgba(203,146,45,0.4)] text-[#1a120c] font-semibold'
                            : 'window-unlit hover:bg-[#cfbea7] dark:hover:bg-[#33251a] text-[#725e4c] dark:text-[#8e7a68]'
                        } ${isSelected ? 'ring-2 ring-[#c85d2e] ring-offset-2 ring-offset-[#ede1cd] dark:ring-offset-[#1a120c]' : ''}`}
                        title={`Flat ${w.unit} - ${w.resident} (${w.lit ? 'Lit' : 'Tap to light up'})`}
                        aria-label={`Flat ${w.unit}, ${w.resident}, ${w.lit ? 'window is lit' : 'window is dark'}`}
                      >
                        {/* Unit Number */}
                        <div className="flex items-center justify-between w-full">
                          <span className={`text-[10px] font-mono leading-none ${w.lit ? 'text-[#38281b] font-bold' : 'text-[#725e4c] dark:text-[#8e7a68]'}`}>
                            {w.unit}
                          </span>
                          {/* Mini Window Frame Cross */}
                          <span className={`text-[8px] ${w.lit ? 'text-[#8a5e18]' : 'text-[#8c7865]'}`}>
                            +
                          </span>
                        </div>

                        {/* Silhouette interior hint */}
                        <div className="flex items-end justify-between w-full">
                          <div className={`h-2 rounded-t-sm ${w.lit ? 'w-2 bg-[#6b4711]/70' : 'w-1.5 bg-[#8c7865]/40'}`}></div>
                          <div className={`text-[8px] font-mono ${w.lit ? 'text-[#503b2c]' : 'text-[#8c7865]'}`}>
                            {w.lit ? '●' : '○'}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Ground Lobby & Garden entry */}
              <div className="mt-3 pt-3 border-t border-[#dfd3c0] dark:border-[#36291e] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#725e4c] dark:text-[#a6917b] text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-[#cb922d]"></span>
                  <span>Tap windows to switch light</span>
                </div>
                <button
                  onClick={toggleAllWindows}
                  className="text-[11px] font-medium text-[#8a5e18] dark:text-[#ecc26b] hover:text-[#c85d2e] underline decoration-dotted"
                >
                  {litCount === totalCount ? 'Dim all' : 'Light all windows'}
                </button>
              </div>

              {/* Selected Window Detail Drawer / Vignette Card */}
              {selectedUnit && (
                <div className="mt-3.5 p-3 rounded-xl bg-white dark:bg-[#1c140d] border border-[#d6be96] dark:border-[#a37220]/40 text-left transition-all shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-[#c85d2e] text-white">
                        Flat {selectedUnit.unit}
                      </span>
                      <span className="text-xs font-semibold text-[#211710] dark:text-[#f7f2ea]">
                        {selectedUnit.resident}
                      </span>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-medium ${
                      selectedUnit.lit ? 'bg-[#ede1cd] dark:bg-[#38281b] text-[#8a5e18] dark:text-[#ecc26b] border border-[#d8c39e] dark:border-[#c58c2b]/40' : 'bg-[#f4ede0] dark:bg-[#291f16] text-[#725e4c] dark:text-[#8e7a68]'
                    }`}>
                      {selectedUnit.lit ? 'Window Lit' : 'Window Dark'}
                    </span>
                  </div>

                  <p className="mt-1.5 text-xs text-[#574332] dark:text-[#ded3c4] leading-snug italic">
                    "{selectedUnit.story}"
                  </p>

                  <div className="mt-2.5 flex items-center justify-between text-[11px]">
                    <span className="text-[#826e5a] dark:text-[#a6917b]">Connected via Mohalla Mandi</span>
                    <button
                      onClick={() => {
                        setActiveView('resident');
                        setResidentTab('events');
                      }}
                      className="text-[#c85d2e] dark:text-[#ecc26b] hover:text-[#b84f22] font-semibold inline-flex items-center gap-1"
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
