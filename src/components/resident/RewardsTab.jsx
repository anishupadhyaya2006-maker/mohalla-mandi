import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Truck,
  Package,
  Recycle,
  Sparkles,
  Coins,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Leaf
} from 'lucide-react';

export default function RewardsTab() {
  const { logBatchedDelivery, logPackageReturn } = useApp();
  const [selectedSlot, setSelectedSlot] = useState('6:00 PM – 7:30 PM');
  const [boxCount, setBoxCount] = useState(5);
  const [hasLoggedDeliveryToday, setHasLoggedDeliveryToday] = useState(false);

  const handleDeliverySubmit = () => {
    logBatchedDelivery();
    setHasLoggedDeliveryToday(true);
  };

  const handlePackageSubmit = () => {
    logPackageReturn(boxCount);
  };

  return (
    <div className="space-y-6 text-left">
      
      {/* Top Banner */}
      <div className="p-6 rounded-3xl bg-[#f1e9dc] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0052cc] dark:text-[#2684ff] font-extrabold flex items-center gap-1.5">
              <Leaf className="w-3.5 h-3.5 text-[#0052cc] dark:text-[#2684ff]" />
              Eco Habits & Circular Economy
            </span>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#deebff] dark:bg-[#0747a6]/30 text-[#0747a6] dark:text-[#deebff] border border-[#b3d4ff] dark:border-[#0052cc]/40 font-bold">
              Demo Data
            </span>
          </div>
          <h2 className="text-2xl font-extrabold font-heading text-[#23150d] dark:text-[#faf6ee]">
            Earn Mudra by Decongesting Your Society
          </h2>
          <p className="text-xs sm:text-sm text-[#5c4738] dark:text-[#ddd0be] max-w-xl mt-1 font-medium">
            Cut down on delivery van congestion inside your society gates and divert cardboard waste from landfills.
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#faf6ee] dark:bg-[#160e09] border border-[#ddd0be] dark:border-[#38251a] text-xs shrink-0 flex items-center gap-3 shadow-sm">
          <div className="w-9 h-9 rounded-xl bg-[#deebff] dark:bg-[#0747a6]/30 text-[#0052cc] dark:text-[#2684ff] border border-[#b3d4ff] dark:border-[#0052cc]/40 flex items-center justify-center font-bold">
            🌱
          </div>
          <div>
            <div className="text-[#23150d] dark:text-[#faf6ee] font-bold">Society Green Fund</div>
            <div className="text-[11px] text-[#6b584a] dark:text-[#b4a494] font-medium">Sponsored by RWA Eco Sub-committee</div>
          </div>
        </div>
      </div>

      {/* Two Main Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* ACTION 1: Batched Daily Delivery Slot */}
        <div className="rounded-2xl bg-[#faf6ee] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] p-6 flex flex-col justify-between text-left hover:border-[#0052cc]/40 transition-colors shadow-sm">
          <div>
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#deebff] dark:bg-[#0747a6]/40 text-[#0052cc] dark:text-[#2684ff] border border-[#b3d4ff] dark:border-[#0052cc]/40 flex items-center justify-center font-bold">
                <Truck className="w-5 h-5 text-[#0052cc] dark:text-[#2684ff]" />
              </div>
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#deebff] dark:bg-[#0747a6]/30 border border-[#b3d4ff] dark:border-[#0052cc]/40 text-[#0052cc] dark:text-[#2684ff] text-xs font-mono font-black">
                <Coins className="w-3.5 h-3.5 text-[#0052cc] dark:text-[#2684ff]" />
                <span>+15 MM</span>
              </div>
            </div>

            <h3 className="text-lg font-bold font-heading text-[#23150d] dark:text-[#faf6ee] mt-4">
              Choose Batched Daily Delivery Slot
            </h3>
            <p className="text-xs text-[#5c4738] dark:text-[#ddd0be] mt-2 leading-relaxed font-medium">
              Instead of 4 separate delivery bikes buzzing through the basement every day, consolidate your Amazon, Blinkit, and courier parcels into one coordinated gate hub drop.
            </p>

            {/* Slot selector */}
            <div className="mt-5 space-y-2">
              <label className="text-xs font-bold text-[#23150d] dark:text-[#faf6ee] block">
                Select Society Hub Delivery Window:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  '12:30 PM – 2:00 PM',
                  '6:00 PM – 7:30 PM'
                ].map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`py-2 px-3 rounded-lg text-xs font-mono text-left transition-colors border ${
                      selectedSlot === slot
                        ? 'bg-[#0052cc] text-white border-[#0052cc] font-black shadow-sm'
                        : 'bg-[#f1e9dc] dark:bg-[#160e09] text-[#23150d] dark:text-[#ddd0be] border-[#ddd0be] dark:border-[#38251a] hover:border-[#0052cc]/50 font-semibold'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-[#f1e9dc] dark:bg-[#160e09] border border-[#ddd0be] dark:border-[#38251a] text-[11px] text-[#5c4738] dark:text-[#ddd0be] flex items-center gap-2 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#0052cc] dark:text-[#2684ff] shrink-0" />
              <span>Verified by Gate Security Guard app automatically upon drop.</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#ddd0be] dark:border-[#38251a]">
            <button
              onClick={handleDeliverySubmit}
              className="w-full py-2.5 px-4 rounded-xl bg-[#0052cc] hover:bg-[#0747a6] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Confirm {selectedSlot.split('–')[0]} Slot (+15 MM)</span>
            </button>
          </div>
        </div>

        {/* ACTION 2: Return Packaging at Collection Point */}
        <div className="rounded-2xl bg-[#faf6ee] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] p-6 flex flex-col justify-between text-left hover:border-[#0052cc]/40 transition-colors shadow-sm">
          <div>
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#deebff] dark:bg-[#0747a6]/40 text-[#0052cc] dark:text-[#2684ff] border border-[#b3d4ff] dark:border-[#0052cc]/40 flex items-center justify-center">
                <Package className="w-5 h-5 text-[#0052cc] dark:text-[#2684ff]" />
              </div>
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#deebff] dark:bg-[#0747a6]/30 border border-[#b3d4ff] dark:border-[#0052cc]/40 text-[#0052cc] dark:text-[#2684ff] text-xs font-mono font-black">
                <Coins className="w-3.5 h-3.5 text-[#0052cc] dark:text-[#2684ff]" />
                <span>+10 MM</span>
              </div>
            </div>

            <h3 className="text-lg font-bold font-heading text-[#23150d] dark:text-[#faf6ee] mt-4">
              Return Packaging at Collection Kiosk
            </h3>
            <p className="text-xs text-[#5c4738] dark:text-[#ddd0be] mt-2 leading-relaxed font-medium">
              Drop clean delivery carton boxes, paper mailers, or bubble wrap at the Tower B recycling kiosk. Repurposed by Annapoorna Kirana and local sellers.
            </p>

            {/* Package count */}
            <div className="mt-5 space-y-2">
              <label className="text-xs font-bold text-[#23150d] dark:text-[#faf6ee] block">
                Number of Cartons / Mailers to Drop:
              </label>
              <div className="flex items-center gap-3">
                {[3, 5, 8, 12].map((cnt) => (
                  <button
                    key={cnt}
                    type="button"
                    onClick={() => setBoxCount(cnt)}
                    className={`py-2 px-3 rounded-lg text-xs font-mono transition-colors border ${
                      boxCount === cnt
                        ? 'bg-[#0052cc] text-white border-[#0052cc] font-black shadow-sm'
                        : 'bg-[#f1e9dc] dark:bg-[#160e09] text-[#23150d] dark:text-[#ddd0be] border-[#ddd0be] dark:border-[#38251a] hover:border-[#0052cc]/50 font-semibold'
                    }`}
                  >
                    {cnt} boxes
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-[#f1e9dc] dark:bg-[#160e09] border border-[#ddd0be] dark:border-[#38251a] text-[11px] text-[#5c4738] dark:text-[#ddd0be] flex items-center gap-2 font-medium">
              <Recycle className="w-4 h-4 text-[#0052cc] dark:text-[#2684ff] shrink-0" />
              <span>Location: Ground Floor Kiosk next to Service Gate 2.</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#ddd0be] dark:border-[#38251a]">
            <button
              onClick={handlePackageSubmit}
              className="w-full py-2.5 px-4 rounded-xl bg-[#0052cc] hover:bg-[#0747a6] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <Recycle className="w-4 h-4" />
              <span>Log {boxCount} Cartons Returned (+10 MM)</span>
            </button>
          </div>
        </div>

      </div>

      {/* Society Impact Snapshot */}
      <div className="p-5 rounded-2xl bg-[#faf6ee] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5c4738] dark:text-[#ddd0be] shadow-sm">
        <div className="flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-[#0052cc] dark:text-[#2684ff] shrink-0" />
          <p>
            <strong className="text-[#23150d] dark:text-[#faf6ee] font-extrabold">Society Collective Impact:</strong> Over 1,840 carton boxes diverted from Bengaluru landfills and 84 van trips eliminated daily in your society cluster.
          </p>
        </div>
        <span className="font-mono text-[#0052cc] dark:text-[#2684ff] text-xs shrink-0 font-black">
          41% Batched Rate
        </span>
      </div>

    </div>
  );
}
