import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Store,
  Plus,
  Coins,
  Users,
  TrendingUp,
  Percent,
  CheckCircle2,
  Clock,
  Sparkles,
  Tag
} from 'lucide-react';

export default function ShopOwnerView() {
  const { shops, shopRedemptions, addShopOffer, currentSociety, currentUser } = useApp();

  const [selectedShopId, setSelectedShopId] = useState('shop-2'); // By2 Filter Kaapi Corner by default
  const [isAddingOffer, setIsAddingOffer] = useState(false);
  const [offerTitle, setOfferTitle] = useState('');
  const [offerDetail, setOfferDetail] = useState('');
  const [redeemCost, setRedeemCost] = useState(15);
  const [retailPrice, setRetailPrice] = useState(40);

  const activeShop = shops.find(s => s.id === selectedShopId) || shops[0];

  // Filter redemptions for this shop
  const shopSpecificRedemptions = shopRedemptions.filter(r => r.shopId === selectedShopId || !r.shopId);
  const totalRedeemedCredits = shopSpecificRedemptions.reduce((acc, curr) => acc + (curr.credits || 0), 0);
  
  // Calculate new vs repeat
  const repeatCount = shopSpecificRedemptions.filter(r => r.type === 'repeat').length;
  const newCount = shopSpecificRedemptions.length - repeatCount;
  const repeatPercent = shopSpecificRedemptions.length > 0 
    ? Math.round((repeatCount / shopSpecificRedemptions.length) * 100) 
    : 58;
  const newPercent = 100 - repeatPercent;

  const handleOfferSubmit = (e) => {
    e.preventDefault();
    if (!offerTitle.trim()) return;

    addShopOffer({
      shopName: activeShop.name,
      category: activeShop.category,
      offerTitle,
      offerDetail,
      redeemCost,
      retailPrice
    });

    setIsAddingOffer(false);
    setOfferTitle('');
    setOfferDetail('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-left animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-sky-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold flex items-center gap-1.5">
              <Store className="w-3.5 h-3.5" />
              Hyperlocal Merchant Partner
            </span>
            <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-300">
              Demo Portal
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-slate-100">
            Shop Owner Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-1">
            Accepting Mohalla Mudra from residents in <strong className="text-sky-300">{currentSociety}</strong>. Reclaiming footfall from 10-minute delivery apps.
          </p>
        </div>

        {/* Shop Switcher */}
        <div className="flex items-center gap-3">
          <select
            value={selectedShopId}
            onChange={(e) => setSelectedShopId(e.target.value)}
            className="px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-700 text-slate-200 font-medium focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            {shops.map(s => (
              <option key={s.id} value={s.id}>
                {s.name} ({s.category})
              </option>
            ))}
          </select>

          <button
            onClick={() => setIsAddingOffer(!isAddingOffer)}
            className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-md transition-all shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>{isAddingOffer ? 'Cancel' : 'Add an offer'}</span>
          </button>
        </div>
      </div>

      {/* THREE METRICS STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        
        {/* Metric 1: Credits Redeemed Today */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono uppercase">
              Credits Redeemed Today
            </span>
            <Coins className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold font-heading text-emerald-400">
              {totalRedeemedCredits || 185}
            </span>
            <span className="text-xs font-mono text-emerald-300">MM</span>
          </div>
          <div className="mt-1 text-[11px] text-slate-400 font-mono">
            ≈ ₹{(totalRedeemedCredits || 185) * 10} reimbursement from sponsor pool
          </div>
        </div>

        {/* Metric 2: Today's Society Customer Footfall */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono uppercase">
              Society Footfall Today
            </span>
            <Users className="w-4 h-4 text-sky-400" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold font-heading text-sky-400">
              {shopSpecificRedemptions.length || 18}
            </span>
            <span className="text-xs font-mono text-slate-400">residents</span>
          </div>
          <div className="mt-1 text-[11px] text-slate-400 font-mono">
            +42% increase compared to non-event days
          </div>
        </div>

        {/* Metric 3: New vs Repeat Customers Breakdown */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono uppercase">
              New vs Repeat Customers
            </span>
            <Percent className="w-4 h-4 text-amber-400" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold font-heading text-amber-300">
              {repeatPercent}%
            </span>
            <span className="text-xs font-mono text-slate-400">repeat loyalty</span>
          </div>
          {/* Visual Bar */}
          <div className="mt-2 w-full h-2 rounded-full bg-slate-800 flex overflow-hidden">
            <div className="bg-amber-400 h-full" style={{ width: `${repeatPercent}%` }} title="Repeat customers"></div>
            <div className="bg-sky-400 h-full" style={{ width: `${newPercent}%` }} title="New customers"></div>
          </div>
          <div className="mt-1 flex justify-between text-[10px] text-slate-400 font-mono">
            <span className="text-amber-300">● {repeatPercent}% Repeat</span>
            <span className="text-sky-300">● {newPercent}% First-time</span>
          </div>
        </div>

      </div>

      {/* ADD OFFER FORM COLLAPSIBLE */}
      {isAddingOffer && (
        <div className="p-6 rounded-2xl bg-slate-900 border border-sky-500/40 animate-in fade-in duration-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold font-heading text-slate-100">
                Add an Offer for {activeShop.name}
              </h2>
              <p className="text-xs text-slate-400">
                Create a special discount or combo redeemable with Mohalla Mudra.
              </p>
            </div>
            <span className="text-xs font-mono text-sky-300 px-2 py-0.5 rounded bg-sky-500/10">
              Immediate Live Listing
            </span>
          </div>

          <form onSubmit={handleOfferSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Offer Title
                </label>
                <input
                  type="text"
                  value={offerTitle}
                  onChange={(e) => setOfferTitle(e.target.value)}
                  placeholder="e.g. 1 Free Mysore Filter Kaapi with Rava Idli"
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-700 text-slate-100 placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Redemption Cost (in Mohalla Mudra MM)
                </label>
                <input
                  type="number"
                  min="5"
                  max="100"
                  value={redeemCost}
                  onChange={(e) => setRedeemCost(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-700 text-slate-100 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Equivalent Retail Value (₹)
                </label>
                <input
                  type="number"
                  min="10"
                  max="500"
                  value={retailPrice}
                  onChange={(e) => setRetailPrice(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-700 text-slate-100 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Terms & Conditions Note
                </label>
                <input
                  type="text"
                  value={offerDetail}
                  onChange={(e) => setOfferDetail(e.target.value)}
                  placeholder="e.g. Valid daily 7:00 AM – 11:30 AM at counter."
                  className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-700 text-slate-100 placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsAddingOffer(false)}
                className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs"
              >
                Publish offer to residents
              </button>
            </div>
          </form>
        </div>
      )}

      {/* LIVE REDEMPTIONS LOG */}
      <div className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold font-heading text-slate-100">
              Live Mudra Redemptions at {activeShop.name}
            </h2>
            <p className="text-xs text-slate-400">
              Vouchers scanned and approved today at your register.
            </p>
          </div>
          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300">
            Real-time Feed (Demo data)
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-[11px] uppercase font-mono text-slate-400 border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Resident Customer</th>
                <th className="py-3 px-4">Society Unit</th>
                <th className="py-3 px-4">Item Redeemed</th>
                <th className="py-3 px-4">Customer Type</th>
                <th className="py-3 px-4">Credits</th>
                <th className="py-3 px-4 text-right">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {shopSpecificRedemptions.map((red) => (
                <tr key={red.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-slate-100">
                    {red.customerName}
                  </td>
                  <td className="py-3.5 px-4 text-slate-400 font-mono">
                    {red.society || 'Sobha Carnation, Flat 402'}
                  </td>
                  <td className="py-3.5 px-4 text-slate-300">
                    {red.itemName}
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                        red.type === 'repeat'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          : 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                      }`}
                    >
                      {red.type === 'repeat' ? 'Repeat Neighbor' : 'First-Time'}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-emerald-400">
                    +{red.credits} MM
                  </td>
                  <td className="py-3.5 px-4 text-right text-slate-400 font-mono text-[11px]">
                    {red.timestamp}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
