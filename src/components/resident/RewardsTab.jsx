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
      <div className="p-6 rounded-3xl bg-[#fbf4e8] dark:bg-[#241a13] border border-[#d6be96] dark:border-[#c58c2b]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8a5e18] dark:text-[#ecc26b] font-bold flex items-center gap-1.5">
              <Leaf className="w-3.5 h-3.5 text-[#b57a1b] dark:text-[#dfaa43]" />
              Eco Habits & Circular Economy
            </span>
            <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#ede1cd] dark:bg-[#38281b] text-[#8a5e18] dark:text-[#f5dc9e] border border-[#d8c39e] dark:border-[#c58c2b]/40 font-semibold">
              Demo Data
            </span>
          </div>
          <h2 className="text-2xl font-bold font-heading text-[#211710] dark:text-[#f7f2ea]">
            Earn Mudra by Decongesting Your Society
          </h2>
          <p className="text-xs sm:text-sm text-[#574332] dark:text-[#cfbea5] max-w-xl mt-1">
            Cut down on delivery van congestion inside your society gates and divert cardboard waste from landfills.
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-white dark:bg-[#1c140d] border border-[#ded1be] dark:border-[#36291e] text-xs shrink-0 flex items-center gap-3 shadow-sm">
          <div className="w-9 h-9 rounded-xl bg-[#ede1cd] dark:bg-[#38281b] text-[#8a5e18] dark:text-[#dfaa43] border border-[#d8c39e] dark:border-[#c58c2b]/40 flex items-center justify-center font-bold">
            🌱
          </div>
          <div>
            <div className="text-[#211710] dark:text-[#f2ebe1] font-semibold">Society Green Fund</div>
            <div className="text-[11px] text-[#725e4c] dark:text-[#8e7a68]">Sponsored by RWA Eco Sub-committee</div>
          </div>
        </div>
      </div>

      {/* Two Main Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* ACTION 1: Batched Daily Delivery Slot */}
        <div className="rounded-2xl bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] p-6 flex flex-col justify-between text-left hover:border-[#b5a085] transition-colors shadow-sm">
          <div>
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#ede1cd] dark:bg-[#38281b] text-[#8a5e18] dark:text-[#dfaa43] border border-[#d8c39e] dark:border-[#c58c2b]/40 flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#ede1cd] dark:bg-[#38281b] border border-[#d8c39e] dark:border-[#c58c2b]/40 text-[#8a5e18] dark:text-[#ecc26b] text-xs font-mono font-bold">
                <Coins className="w-3.5 h-3.5 text-[#b57a1b] dark:text-[#dfaa43]" />
                <span>+15 MM</span>
              </div>
            </div>

            <h3 className="text-lg font-bold font-heading text-[#211710] dark:text-[#f7f2ea] mt-4">
              Choose Batched Daily Delivery Slot
            </h3>
            <p className="text-xs text-[#574332] dark:text-[#a6917b] mt-2 leading-relaxed">
              Instead of 4 separate delivery bikes buzzing through the basement every day, consolidate your Amazon, Blinkit, and courier parcels into one coordinated gate hub drop.
            </p>

            {/* Slot selector */}
            <div className="mt-5 space-y-2">
              <label className="text-xs font-medium text-[#211710] dark:text-[#ded3c4] block">
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
                        ? 'bg-[#ede1cd] dark:bg-[#38281b] text-[#8a5e18] dark:text-[#f5dc9e] border-[#c85d2e] dark:border-[#dfaa43] font-semibold'
                        : 'bg-[#f8f3eb] dark:bg-[#1c140d] text-[#725e4c] dark:text-[#a6917b] border-[#ded1be] dark:border-[#36291e] hover:border-[#b5a085]'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-[#f8f3eb] dark:bg-[#1c140d] border border-[#ded1be] dark:border-[#36291e] text-[11px] text-[#725e4c] dark:text-[#a6917b] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#8a5e18] dark:text-[#dfaa43] shrink-0" />
              <span>Verified by Gate Security Guard app automatically upon drop.</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#ede4d6] dark:border-[#36291e]">
            <button
              onClick={handleDeliverySubmit}
              className="w-full py-2.5 px-4 rounded-xl bg-[#c85d2e] hover:bg-[#b84f22] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Confirm {selectedSlot.split('–')[0]} Slot (+15 MM)</span>
            </button>
          </div>
        </div>

        {/* ACTION 2: Return Packaging at Collection Point */}
        <div className="rounded-2xl bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] p-6 flex flex-col justify-between text-left hover:border-[#b5a085] transition-colors shadow-sm">
          <div>
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#faede6] dark:bg-[#3d2316] text-[#c85d2e] dark:text-[#dc7545] border border-[#e8c6b5] dark:border-[#c85d2e]/40 flex items-center justify-center">
                <Package className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#ede1cd] dark:bg-[#38281b] border border-[#d8c39e] dark:border-[#c58c2b]/40 text-[#8a5e18] dark:text-[#ecc26b] text-xs font-mono font-bold">
                <Coins className="w-3.5 h-3.5 text-[#b57a1b] dark:text-[#dfaa43]" />
                <span>+10 MM</span>
              </div>
            </div>

            <h3 className="text-lg font-bold font-heading text-[#211710] dark:text-[#f7f2ea] mt-4">
              Return Packaging at Collection Kiosk
            </h3>
            <p className="text-xs text-[#574332] dark:text-[#a6917b] mt-2 leading-relaxed">
              Drop clean delivery carton boxes, paper mailers, or bubble wrap at the Tower B recycling kiosk. Repurposed by Annapoorna Kirana and local sellers.
            </p>

            {/* Package count */}
            <div className="mt-5 space-y-2">
              <label className="text-xs font-medium text-[#211710] dark:text-[#ded3c4] block">
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
                        ? 'bg-[#ede1cd] dark:bg-[#38281b] text-[#8a5e18] dark:text-[#f5dc9e] border-[#c85d2e] dark:border-[#dfaa43] font-bold'
                        : 'bg-[#f8f3eb] dark:bg-[#1c140d] text-[#725e4c] dark:text-[#a6917b] border-[#ded1be] dark:border-[#36291e] hover:border-[#b5a085]'
                    }`}
                  >
                    {cnt} boxes
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-[#f8f3eb] dark:bg-[#1c140d] border border-[#ded1be] dark:border-[#36291e] text-[11px] text-[#725e4c] dark:text-[#a6917b] flex items-center gap-2">
              <Recycle className="w-4 h-4 text-[#8a5e18] dark:text-[#dfaa43] shrink-0" />
              <span>Location: Ground Floor Kiosk next to Service Gate 2.</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#ede4d6] dark:border-[#36291e]">
            <button
              onClick={handlePackageSubmit}
              className="w-full py-2.5 px-4 rounded-xl bg-[#c85d2e] hover:bg-[#b84f22] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <Recycle className="w-4 h-4" />
              <span>Log {boxCount} Cartons Returned (+10 MM)</span>
            </button>
          </div>
        </div>

      </div>

      {/* Society Impact Snapshot */}
      <div className="p-5 rounded-2xl bg-white dark:bg-[#241a13]/80 border border-[#ded1be] dark:border-[#3c2f24] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#574332] dark:text-[#cfbea5] shadow-sm">
        <div className="flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-[#b57a1b] dark:text-[#dfaa43] shrink-0" />
          <p>
            <strong className="text-[#211710] dark:text-[#f7f2ea] font-semibold">Society Collective Impact:</strong> Over 1,840 carton boxes diverted from Bengaluru landfills and 84 van trips eliminated daily in your society cluster.
          </p>
        </div>
        <span className="font-mono text-[#8a5e18] dark:text-[#ecc26b] text-xs shrink-0 font-bold">
          41% Batched Rate
        </span>
      </div>

    </div>
  );
}
