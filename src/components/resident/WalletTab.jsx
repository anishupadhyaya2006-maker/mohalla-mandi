import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Coins,
  Store,
  ArrowUpRight,
  ArrowDownLeft,
  ShoppingBag,
  Sparkles,
  MapPin,
  Clock,
  AlertCircle,
  QrCode
} from 'lucide-react';

export default function WalletTab() {
  const { currentUser, shops, transactions, redeemShopOffer } = useApp();

  const userCredits = currentUser?.credits ?? 0;

  return (
    <div className="space-y-8 text-left">
      
      {/* WALLET BALANCE HERO CARD (Roasted Kaapi & Polished Brass) */}
      <div className="rounded-3xl bg-[#241a13] border border-[#c58c2b]/40 p-6 sm:p-8 relative overflow-hidden shadow-2xl">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c58c2b]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#ecc26b] font-semibold">
                Mohalla Mudra Balance
              </span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#38281b] text-[#f5dc9e] border border-[#c58c2b]/40">
                Demo Currency
              </span>
            </div>

            {/* Polished Brass Balance Display */}
            <div className="flex items-baseline gap-3">
              <span className="font-heading font-extrabold text-5xl sm:text-6xl text-[#f5dc9e] tracking-tight">
                {userCredits}
              </span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-[#ecc26b]">
                MM
              </span>
              <span className="text-xs sm:text-sm text-[#cfbea5] font-sans ml-2">
                ≈ ₹{userCredits * 10} local purchasing power
              </span>
            </div>

            <p className="mt-2 text-xs sm:text-sm text-[#cfbea5] max-w-lg">
              Earned from attending society events and adopting green delivery habits. Accepted at partner stores within 500m of your gate.
            </p>
          </div>

          {/* Quick Metrics Pill */}
          <div className="grid grid-cols-2 gap-3 text-xs bg-[#1c140d] p-4 rounded-2xl border border-[#36291e] shrink-0">
            <div>
              <div className="text-[11px] text-[#8e7a68]">Total Transactions</div>
              <div className="text-base font-bold font-mono text-[#f2ebe1] mt-0.5">
                {transactions.length}
              </div>
            </div>
            <div>
              <div className="text-[11px] text-[#8e7a68]">Society Partner Shops</div>
              <div className="text-base font-bold font-mono text-[#dfaa43] mt-0.5">
                {shops.length}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: LOCAL SHOPS REDEMPTION */}
      <div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="text-xl font-bold font-heading text-[#f7f2ea]">
              Redeem at Local Society Shops
            </h3>
            <p className="text-xs text-[#a6917b]">
              Kirana, filter kaapi, cobbler, juices, book hub, and tailoring. 100% funded by corporate sponsors and RWA footfall.
            </p>
          </div>
          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#241a13] border border-[#3c2f24] text-[#a6917b]">
            Within 500m of Gate
          </span>
        </div>

        {/* 6 Shops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {shops.map((shop) => {
            const hasEnough = userCredits >= shop.redeemCost;
            const needed = shop.redeemCost - userCredits;

            return (
              <div
                key={shop.id}
                className="rounded-2xl bg-[#241a13] border border-[#3c2f24] p-5 flex flex-col justify-between hover:border-[#5c4a3a] transition-all text-left"
              >
                <div>
                  {/* Shop header */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#2e2319] text-[#c9b7a3]">
                        {shop.category}
                      </span>
                      <h4 className="text-base font-bold font-heading text-[#f7f2ea] mt-2">
                        {shop.name}
                      </h4>
                    </div>

                    {/* Cost in MM */}
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#38281b] border border-[#c58c2b]/40 text-[#ecc26b] font-mono text-xs font-bold shrink-0">
                      <Coins className="w-3.5 h-3.5 text-[#dfaa43]" />
                      <span>{shop.redeemCost} MM</span>
                    </div>
                  </div>

                  {/* Distance & reviews */}
                  <div className="mt-2 flex items-center gap-2 text-xs text-[#8e7a68]">
                    <MapPin className="w-3.5 h-3.5 text-[#dfaa43] shrink-0" />
                    <span>{shop.distance}</span>
                    <span>•</span>
                    <span className="text-[#a6917b]">{shop.rating}</span>
                  </div>

                  {/* Offer Details */}
                  <div className="mt-3.5 p-3 rounded-xl bg-[#1c140d] border border-[#36291e]">
                    <div className="text-xs font-bold text-[#ecc26b]">
                      {shop.offerTitle}
                    </div>
                    <p className="mt-1 text-[11px] text-[#a6917b] leading-snug">
                      {shop.offerDetail}
                    </p>
                  </div>

                  <div className="mt-3 text-[11px] text-[#8e7a68] flex items-center justify-between">
                    <span>Partner: {shop.owner}</span>
                    <span className="font-mono text-[#c9b7a3]">
                      {shop.todayRedemptionsCount} redeemed today
                    </span>
                  </div>
                </div>

                {/* Redeem Action with Dynamic Threshold Validation */}
                <div className="mt-5 pt-3 border-t border-[#36291e]">
                  {hasEnough ? (
                    <button
                      onClick={() => redeemShopOffer(shop.id)}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#c85d2e] hover:bg-[#dc7545] text-[#fbf8f3] font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md hover:scale-[1.01]"
                    >
                      <span>Redeem</span>
                      <span className="text-[11px] font-mono font-normal text-[#fdedd1]">
                        ({shop.redeemCost} MM)
                      </span>
                    </button>
                  ) : (
                    <div className="space-y-1.5">
                      <button
                        disabled
                        className="w-full py-2.5 px-4 rounded-xl bg-[#2e2319] text-[#8e7a68] font-medium text-xs cursor-not-allowed text-center"
                      >
                        Redeem disabled
                      </button>
                      <div className="text-center text-[11px] text-[#ecc26b] font-mono">
                        Need {needed} more MM to redeem
                      </div>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 3: TRANSACTION HISTORY */}
      <div className="rounded-2xl bg-[#241a13] border border-[#3c2f24] p-6 text-left">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold font-heading text-[#f7f2ea]">
            Wallet Activity & Ledger
          </h3>
          <span className="text-[10px] font-mono text-[#8e7a68] uppercase">
            Real-time ledger (Demo data)
          </span>
        </div>

        <div className="divide-y divide-[#36291e]">
          {transactions.map((tx) => {
            const isEarned = tx.type === 'earned' || tx.amount > 0;
            return (
              <div key={tx.id} className="py-3.5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      isEarned
                        ? 'bg-[#38281b] text-[#ecc26b] border border-[#c58c2b]/40'
                        : 'bg-[#3d2316] text-[#f3ba9e] border border-[#c85d2e]/40'
                    }`}
                  >
                    {isEarned ? (
                      <ArrowDownLeft className="w-4 h-4" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4" />
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#f2ebe1]">
                      {tx.title}
                    </div>
                    <div className="text-[11px] text-[#8e7a68] flex items-center gap-2 mt-0.5">
                      <span>{tx.partner}</span>
                      <span>•</span>
                      <span>{tx.date}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div
                    className={`text-sm font-mono font-bold ${
                      isEarned ? 'text-[#f5dc9e]' : 'text-[#dc7545]'
                    }`}
                  >
                    {isEarned ? `+${tx.amount}` : tx.amount} MM
                  </div>
                  <span className="text-[10px] font-mono text-[#a6917b] px-1.5 py-0.2 rounded bg-[#1c140d]">
                    {tx.badge || 'Wallet'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
