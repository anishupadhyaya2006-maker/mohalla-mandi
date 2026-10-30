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
      <div className="p-6 rounded-3xl bg-[#241a13] border border-[#c58c2b]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ecc26b] font-semibold flex items-center gap-1.5">
              <Store className="w-3.5 h-3.5 text-[#dfaa43]" />
              Hyperlocal Merchant Partner
            </span>
            <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#38281b] text-[#f5dc9e] border border-[#c58c2b]/40">
              Demo Portal
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-[#f7f2ea]">
            Shop Owner Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-[#cfbea5] max-w-xl mt-1">
            Accepting Mohalla Mudra from residents in <strong className="text-[#ecc26b]">{currentSociety}</strong>. Reclaiming footfall from 10-minute delivery apps.
          </p>
        </div>

        {/* Shop Switcher */}
        <div className="flex items-center gap-3">
          <select
            value={selectedShopId}
            onChange={(e) => setSelectedShopId(e.target.value)}
            className="px-3 py-2 text-xs rounded-xl bg-[#1a120c] border border-[#3c2f24] text-[#f2ebe1] font-medium focus-visible:ring-2 focus-visible:ring-[#dfaa43]"
          >
            {shops.map(s => (
              <option key={s.id} value={s.id}>
                {s.name} ({s.category})
              </option>
            ))}
          </select>

          <button
            onClick={() => setIsAddingOffer(!isAddingOffer)}
            className="px-4 py-2.5 rounded-xl bg-[#c85d2e] hover:bg-[#dc7545] text-[#fbf8f3] text-xs font-bold flex items-center gap-1.5 shadow-md transition-all shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>{isAddingOffer ? 'Cancel' : 'Add an offer'}</span>
          </button>
        </div>
      </div>

      {/* THREE METRICS STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        
        {/* Metric 1: Credits Redeemed Today */}
        <div className="p-5 rounded-2xl bg-[#241a13] border border-[#3c2f24]">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#8e7a68] font-mono uppercase">
              Credits Redeemed Today
            </span>
            <Coins className="w-4 h-4 text-[#dfaa43]" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold font-heading text-[#f5dc9e]">
              {totalRedeemedCredits || 185}
            </span>
            <span className="text-xs font-mono text-[#ecc26b]">MM</span>
          </div>
          <div className="mt-1 text-[11px] text-[#a6917b] font-mono">
            ≈ ₹{(totalRedeemedCredits || 185) * 10} reimbursement from sponsor pool
          </div>
        </div>

        {/* Metric 2: Today's Society Customer Footfall */}
        <div className="p-5 rounded-2xl bg-[#241a13] border border-[#3c2f24]">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#8e7a68] font-mono uppercase">
              Society Footfall Today
            </span>
            <Users className="w-4 h-4 text-[#dc7545]" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold font-heading text-[#f2ebe1]">
              {shopSpecificRedemptions.length || 18}
            </span>
            <span className="text-xs font-mono text-[#a6917b]">residents</span>
          </div>
          <div className="mt-1 text-[11px] text-[#a6917b] font-mono">
            +42% increase compared to non-event days
          </div>
        </div>

        {/* Metric 3: New vs Repeat Customers Breakdown */}
        <div className="p-5 rounded-2xl bg-[#241a13] border border-[#3c2f24]">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#8e7a68] font-mono uppercase">
              New vs Repeat Customers
            </span>
            <Percent className="w-4 h-4 text-[#dfaa43]" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold font-heading text-[#ecc26b]">
              {repeatPercent}%
            </span>
            <span className="text-xs font-mono text-[#a6917b]">repeat loyalty</span>
          </div>
          {/* Visual Bar (Ochre vs Kaapi Wood) */}
          <div className="mt-2 w-full h-2 rounded-full bg-[#1c140d] flex overflow-hidden">
            <div className="bg-[#dfaa43] h-full" style={{ width: `${repeatPercent}%` }} title="Repeat customers"></div>
            <div className="bg-[#503b2c] h-full" style={{ width: `${newPercent}%` }} title="New customers"></div>
          </div>
          <div className="mt-1 flex justify-between text-[10px] text-[#8e7a68] font-mono">
            <span className="text-[#ecc26b]">● {repeatPercent}% Repeat</span>
            <span className="text-[#c9b7a3]">● {newPercent}% First-time</span>
          </div>
        </div>

      </div>

      {/* ADD OFFER FORM COLLAPSIBLE */}
      {isAddingOffer && (
        <div className="p-6 rounded-2xl bg-[#241a13] border border-[#c58c2b]/40 animate-in fade-in duration-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold font-heading text-[#f7f2ea]">
                Add an Offer for {activeShop.name}
              </h2>
              <p className="text-xs text-[#a6917b]">
                Create a special discount or combo redeemable with Mohalla Mudra.
              </p>
            </div>
            <span className="text-xs font-mono text-[#ecc26b] px-2 py-0.5 rounded bg-[#38281b] border border-[#c58c2b]/30">
              Immediate Live Listing
            </span>
          </div>

          <form onSubmit={handleOfferSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#ded3c4] mb-1">
                  Offer Title
                </label>
                <input
                  type="text"
                  value={offerTitle}
                  onChange={(e) => setOfferTitle(e.target.value)}
                  placeholder="e.g. 1 Free Mysore Filter Kaapi with Rava Idli"
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#1a120c] border border-[#3c2f24] text-[#f7f2ea] placeholder:text-[#8e7a68] focus-visible:ring-2 focus-visible:ring-[#dfaa43] focus-visible:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#ded3c4] mb-1">
                  Redemption Cost (in Mohalla Mudra MM)
                </label>
                <input
                  type="number"
                  min="5"
                  max="100"
                  value={redeemCost}
                  onChange={(e) => setRedeemCost(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#1a120c] border border-[#3c2f24] text-[#f7f2ea] focus-visible:ring-2 focus-visible:ring-[#dfaa43] focus-visible:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#ded3c4] mb-1">
                  Equivalent Retail Value (₹)
                </label>
                <input
                  type="number"
                  min="10"
                  max="500"
                  value={retailPrice}
                  onChange={(e) => setRetailPrice(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#1a120c] border border-[#3c2f24] text-[#f7f2ea] focus-visible:ring-2 focus-visible:ring-[#dfaa43] focus-visible:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#ded3c4] mb-1">
                  Terms & Conditions Note
                </label>
                <input
                  type="text"
                  value={offerDetail}
                  onChange={(e) => setOfferDetail(e.target.value)}
                  placeholder="e.g. Valid daily 7:00 AM – 11:30 AM at counter."
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#1a120c] border border-[#3c2f24] text-[#f7f2ea] placeholder:text-[#8e7a68] focus-visible:ring-2 focus-visible:ring-[#dfaa43] focus-visible:outline-none"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsAddingOffer(false)}
                className="px-4 py-2 rounded-lg bg-[#2e2319] text-[#cfbea5] text-xs font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-[#c85d2e] hover:bg-[#dc7545] text-[#fbf8f3] font-bold text-xs"
              >
                Publish offer to residents
              </button>
            </div>
          </form>
        </div>
      )}

      {/* LIVE REDEMPTIONS LOG */}
      <div className="rounded-2xl bg-[#241a13] border border-[#3c2f24] overflow-hidden">
        <div className="p-4 border-b border-[#36291e] flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold font-heading text-[#f7f2ea]">
              Live Mudra Redemptions at {activeShop.name}
            </h2>
            <p className="text-xs text-[#a6917b]">
              Vouchers scanned and approved today at your register.
            </p>
          </div>
          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#2e2319] text-[#c9b7a3]">
            Real-time Feed (Demo data)
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#cfbea5]">
            <thead className="bg-[#1c140d] text-[11px] uppercase font-mono text-[#8e7a68] border-b border-[#36291e]">
              <tr>
                <th className="py-3 px-4">Resident Customer</th>
                <th className="py-3 px-4">Society Unit</th>
                <th className="py-3 px-4">Item Redeemed</th>
                <th className="py-3 px-4">Customer Type</th>
                <th className="py-3 px-4">Credits</th>
                <th className="py-3 px-4 text-right">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#36291e]">
              {shopSpecificRedemptions.map((red) => (
                <tr key={red.id} className="hover:bg-[#2b2118] transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-[#f7f2ea]">
                    {red.customerName}
                  </td>
                  <td className="py-3.5 px-4 text-[#a6917b] font-mono">
                    {red.society || 'Sobha Carnation, Flat 402'}
                  </td>
                  <td className="py-3.5 px-4 text-[#ded3c4]">
                    {red.itemName}
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                        red.type === 'repeat'
                          ? 'bg-[#38281b] text-[#ecc26b] border border-[#c58c2b]/40'
                          : 'bg-[#2e2319] text-[#c9b7a3] border border-[#483a2e]'
                      }`}
                    >
                      {red.type === 'repeat' ? 'Repeat Neighbor' : 'First-Time'}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-[#f5dc9e]">
                    +{red.credits} MM
                  </td>
                  <td className="py-3.5 px-4 text-right text-[#8e7a68] font-mono text-[11px]">
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
