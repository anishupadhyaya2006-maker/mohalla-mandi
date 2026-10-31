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
      <div className="p-6 rounded-3xl bg-[#f1e9dc] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0052cc] dark:text-[#2684ff] font-bold flex items-center gap-1.5">
              <Store className="w-3.5 h-3.5 text-[#0052cc] dark:text-[#2684ff]" />
              Hyperlocal Merchant Partner
            </span>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#deebff] dark:bg-[#0747a6]/30 text-[#0747a6] dark:text-[#deebff] border border-[#b3d4ff] dark:border-[#0052cc]/40 font-semibold">
              Demo Portal
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-[#23150d] dark:text-[#faf6ee]">
            Shop Owner Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-[#5c4738] dark:text-[#ddd0be] max-w-xl mt-1">
            Accepting Mohalla Mudra from residents in <strong className="text-[#0052cc] dark:text-[#2684ff] font-semibold">{currentSociety}</strong>. Reclaiming footfall from 10-minute delivery apps.
          </p>
        </div>

        {/* Shop Switcher */}
        <div className="flex items-center gap-3">
          <select
            value={selectedShopId}
            onChange={(e) => setSelectedShopId(e.target.value)}
            className="px-3 py-2 text-xs rounded-xl bg-[#faf6ee] dark:bg-[#160e09] border border-[#ddd0be] dark:border-[#38251a] text-[#23150d] dark:text-[#faf6ee] font-semibold focus-visible:ring-2 focus-visible:ring-[#0052cc] shadow-sm"
          >
            {shops.map(s => (
              <option key={s.id} value={s.id}>
                {s.name} ({s.category})
              </option>
            ))}
          </select>

          <button
            onClick={() => setIsAddingOffer(!isAddingOffer)}
            className="px-4 py-2.5 rounded-xl bg-[#0052cc] hover:bg-[#0747a6] text-white text-xs font-bold flex items-center gap-1.5 shadow-md transition-all shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>{isAddingOffer ? 'Cancel' : 'Add an offer'}</span>
          </button>
        </div>
      </div>

      {/* THREE METRICS STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        
        {/* Metric 1: Credits Redeemed Today */}
        <div className="p-5 rounded-2xl bg-[#faf6ee] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#23150d] dark:text-[#b4a494] font-mono uppercase font-bold">
              Credits Redeemed Today
            </span>
            <Coins className="w-4 h-4 text-[#0052cc] dark:text-[#2684ff]" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold font-heading text-[#0052cc] dark:text-[#2684ff]">
              {totalRedeemedCredits || 185}
            </span>
            <span className="text-xs font-mono text-[#0747a6] dark:text-[#99c8ff] font-extrabold">MM</span>
          </div>
          <div className="mt-1 text-[11px] text-[#5c4738] dark:text-[#ddd0be] font-mono font-semibold">
            ≈ ₹{(totalRedeemedCredits || 185) * 10} reimbursement from sponsor pool
          </div>
        </div>

        {/* Metric 2: Today's Society Customer Footfall */}
        <div className="p-5 rounded-2xl bg-[#faf6ee] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#23150d] dark:text-[#b4a494] font-mono uppercase font-bold">
              Society Footfall Today
            </span>
            <Users className="w-4 h-4 text-[#0052cc] dark:text-[#2684ff]" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold font-heading text-[#23150d] dark:text-[#faf6ee]">
              {shopSpecificRedemptions.length || 18}
            </span>
            <span className="text-xs font-mono text-[#5c4738] dark:text-[#ddd0be] font-bold">residents</span>
          </div>
          <div className="mt-1 text-[11px] text-[#0052cc] dark:text-[#2684ff] font-mono font-semibold">
            +42% increase compared to non-event days
          </div>
        </div>

        {/* Metric 3: New vs Repeat Customers Breakdown */}
        <div className="p-5 rounded-2xl bg-[#faf6ee] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#23150d] dark:text-[#b4a494] font-mono uppercase font-bold">
              New vs Repeat Customers
            </span>
            <Percent className="w-4 h-4 text-[#0052cc] dark:text-[#2684ff]" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold font-heading text-[#0052cc] dark:text-[#2684ff]">
              {repeatPercent}%
            </span>
            <span className="text-xs font-mono text-[#5c4738] dark:text-[#ddd0be] font-bold">repeat loyalty</span>
          </div>
          {/* Visual Bar */}
          <div className="mt-2 w-full h-2 rounded-full bg-[#f1e9dc] dark:bg-[#160e09] flex overflow-hidden">
            <div className="bg-[#0052cc] h-full" style={{ width: `${repeatPercent}%` }} title="Repeat customers"></div>
            <div className="bg-[#ddd0be] dark:bg-[#38251a] h-full" style={{ width: `${newPercent}%` }} title="New customers"></div>
          </div>
          <div className="mt-1 flex justify-between text-[10px] text-[#23150d] dark:text-[#ddd0be] font-mono font-bold">
            <span className="text-[#0052cc] dark:text-[#2684ff]">● {repeatPercent}% Repeat</span>
            <span className="text-[#6b584a] dark:text-[#ddd0be]">● {newPercent}% First-time</span>
          </div>
        </div>

      </div>

      {/* ADD OFFER FORM COLLAPSIBLE */}
      {isAddingOffer && (
        <div className="p-6 rounded-2xl bg-[#faf6ee] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] animate-in fade-in duration-200 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold font-heading text-[#23150d] dark:text-[#faf6ee]">
                Add an Offer for {activeShop.name}
              </h2>
              <p className="text-xs text-[#6b584a] dark:text-[#b4a494]">
                Create a special discount or combo redeemable with Mohalla Mudra.
              </p>
            </div>
            <span className="text-xs font-mono text-[#0747a6] dark:text-[#deebff] px-2.5 py-0.5 rounded-full bg-[#deebff] dark:bg-[#0747a6]/30 border border-[#b3d4ff] dark:border-[#0052cc]/30 font-semibold">
              Immediate Live Listing
            </span>
          </div>

          <form onSubmit={handleOfferSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#23150d] dark:text-[#faf6ee] mb-1">
                  Offer Title
                </label>
                <input
                  type="text"
                  value={offerTitle}
                  onChange={(e) => setOfferTitle(e.target.value)}
                  placeholder="e.g. 1 Free Mysore Filter Kaapi with Rava Idli"
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#f1e9dc] dark:bg-[#160e09] border border-[#ddd0be] dark:border-[#38251a] text-[#23150d] dark:text-[#faf6ee] placeholder:text-[#8a7667] focus-visible:ring-2 focus-visible:ring-[#0052cc] focus-visible:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#23150d] dark:text-[#faf6ee] mb-1">
                  Redemption Cost (in Mohalla Mudra MM)
                </label>
                <input
                  type="number"
                  min="5"
                  max="100"
                  value={redeemCost}
                  onChange={(e) => setRedeemCost(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#f1e9dc] dark:bg-[#160e09] border border-[#ddd0be] dark:border-[#38251a] text-[#23150d] dark:text-[#faf6ee] focus-visible:ring-2 focus-visible:ring-[#0052cc] focus-visible:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#23150d] dark:text-[#faf6ee] mb-1">
                  Equivalent Retail Value (₹)
                </label>
                <input
                  type="number"
                  min="10"
                  max="500"
                  value={retailPrice}
                  onChange={(e) => setRetailPrice(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#f1e9dc] dark:bg-[#160e09] border border-[#ddd0be] dark:border-[#38251a] text-[#23150d] dark:text-[#faf6ee] focus-visible:ring-2 focus-visible:ring-[#0052cc] focus-visible:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#23150d] dark:text-[#faf6ee] mb-1">
                  Terms & Conditions Note
                </label>
                <input
                  type="text"
                  value={offerDetail}
                  onChange={(e) => setOfferDetail(e.target.value)}
                  placeholder="e.g. Valid daily 7:00 AM – 11:30 AM at counter."
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#f1e9dc] dark:bg-[#160e09] border border-[#ddd0be] dark:border-[#38251a] text-[#23150d] dark:text-[#faf6ee] placeholder:text-[#8a7667] focus-visible:ring-2 focus-visible:ring-[#0052cc] focus-visible:outline-none"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsAddingOffer(false)}
                className="px-4 py-2 rounded-lg bg-[#f1e9dc] dark:bg-[#160e09] border border-[#ddd0be] dark:border-[#38251a] text-[#23150d] dark:text-[#ddd0be] text-xs font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-[#0052cc] hover:bg-[#0747a6] text-white font-bold text-xs shadow-md"
              >
                Publish offer to residents
              </button>
            </div>
          </form>
        </div>
      )}

      {/* LIVE REDEMPTIONS LOG */}
      <div className="rounded-2xl bg-[#faf6ee] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] overflow-hidden shadow-sm">
        <div className="p-4 border-b border-[#ddd0be] dark:border-[#38251a] flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold font-heading text-[#23150d] dark:text-[#faf6ee]">
              Live Mudra Redemptions at {activeShop.name}
            </h2>
            <p className="text-xs text-[#6b584a] dark:text-[#b4a494]">
              Vouchers scanned and approved today at your register.
            </p>
          </div>
          <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-[#f1e9dc] dark:bg-[#160e09] text-[#23150d] dark:text-[#ddd0be] font-medium border border-[#ddd0be] dark:border-[#38251a]">
            Real-time Feed (Demo data)
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#23150d] dark:text-[#ddd0be]">
            <thead className="bg-[#f1e9dc] dark:bg-[#160e09] text-[11px] uppercase font-mono text-[#23150d] dark:text-[#b4a494] border-b border-[#ddd0be] dark:border-[#38251a]">
              <tr>
                <th className="py-3 px-4 font-extrabold">Resident Customer</th>
                <th className="py-3 px-4 font-extrabold">Society Unit</th>
                <th className="py-3 px-4 font-extrabold">Item Redeemed</th>
                <th className="py-3 px-4 font-extrabold">Customer Type</th>
                <th className="py-3 px-4 font-extrabold">Credits</th>
                <th className="py-3 px-4 text-right font-extrabold">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ddd0be] dark:divide-[#38251a]">
              {shopSpecificRedemptions.map((red) => (
                <tr key={red.id} className="hover:bg-[#f1e9dc]/60 dark:hover:bg-[#2a1b13] transition-colors">
                  <td className="py-3.5 px-4 font-bold text-[#23150d] dark:text-[#faf6ee]">
                    {red.customerName}
                  </td>
                  <td className="py-3.5 px-4 text-[#6b584a] dark:text-[#b4a494] font-mono font-semibold">
                    {red.society || 'Sobha Carnation, Flat 402'}
                  </td>
                  <td className="py-3.5 px-4 text-[#23150d] dark:text-[#ddd0be]">
                    {red.itemName}
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold ${
                        red.type === 'repeat'
                          ? 'bg-[#deebff] dark:bg-[#0747a6]/30 text-[#0052cc] dark:text-[#2684ff] border border-[#b3d4ff] dark:border-[#0052cc]/40'
                          : 'bg-[#f1e9dc] dark:bg-[#160e09] text-[#6b584a] dark:text-[#b4a494] border border-[#ddd0be] dark:border-[#38251a]'
                      }`}
                    >
                      {red.type === 'repeat' ? 'Repeat Neighbor' : 'First-Time'}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-[#0052cc] dark:text-[#2684ff]">
                    +{red.credits} MM
                  </td>
                  <td className="py-3.5 px-4 text-right text-[#6b584a] dark:text-[#b4a494] font-mono text-[11px]">
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
