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
      
      {/* WALLET BALANCE HERO CARD (Warm Biscuit Parchment & Polished Brass) */}
      <div className="rounded-3xl bg-[#fbf4e8] dark:bg-[#241a13] border border-[#d6be96] dark:border-[#c58c2b]/40 p-6 sm:p-8 relative overflow-hidden shadow-sm">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#cb922d]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8a5e18] dark:text-[#ecc26b] font-bold">
                Mohalla Mudra Balance
              </span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#ede1cd] dark:bg-[#38281b] text-[#8a5e18] dark:text-[#f5dc9e] border border-[#d8c39e] dark:border-[#c58c2b]/40 font-semibold">
                Demo Currency
              </span>
            </div>

            {/* Brass / Kaapi Balance Display */}
            <div className="flex items-baseline gap-3">
              <span className="font-heading font-extrabold text-5xl sm:text-6xl text-[#211710] dark:text-[#f5dc9e] tracking-tight">
                {userCredits}
              </span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-[#8a5e18] dark:text-[#ecc26b]">
                MM
              </span>
              <span className="text-xs sm:text-sm text-[#574332] dark:text-[#cfbea5] font-sans ml-2">
                ≈ ₹{userCredits * 10} local purchasing power
              </span>
            </div>

            <p className="mt-2 text-xs sm:text-sm text-[#574332] dark:text-[#cfbea5] max-w-lg">
              Earned from attending society events and adopting green delivery habits. Accepted at partner stores within 500m of your gate.
            </p>
          </div>

          {/* Quick Metrics Pill */}
          <div className="grid grid-cols-2 gap-3 text-xs bg-white dark:bg-[#1c140d] p-4 rounded-2xl border border-[#ded1be] dark:border-[#36291e] shrink-0 shadow-sm">
            <div>
              <div className="text-[11px] text-[#725e4c] dark:text-[#8e7a68]">Total Transactions</div>
              <div className="text-base font-bold font-mono text-[#211710] dark:text-[#f2ebe1] mt-0.5">
                {transactions.length}
              </div>
            </div>
            <div>
              <div className="text-[11px] text-[#725e4c] dark:text-[#8e7a68]">Society Partner Shops</div>
              <div className="text-base font-bold font-mono text-[#c85d2e] dark:text-[#dfaa43] mt-0.5">
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
            <h3 className="text-xl font-bold font-heading text-[#211710] dark:text-[#f7f2ea]">
              Redeem at Local Society Shops
            </h3>
            <p className="text-xs text-[#574332] dark:text-[#a6917b]">
              Kirana, filter kaapi, cobbler, juices, book hub, and tailoring. 100% funded by corporate sponsors and RWA footfall.
            </p>
          </div>
          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] text-[#725e4c] dark:text-[#a6917b] shadow-sm">
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
                className="rounded-2xl bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] p-5 flex flex-col justify-between hover:border-[#b5a085] transition-all text-left shadow-sm"
              >
                <div>
                  {/* Shop header */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f6efe3] dark:bg-[#2e2319] text-[#725e4c] dark:text-[#c9b7a3] font-medium border border-[#ded1be] dark:border-transparent">
                        {shop.category}
                      </span>
                      <h4 className="text-base font-bold font-heading text-[#211710] dark:text-[#f7f2ea] mt-2">
                        {shop.name}
                      </h4>
                    </div>

                    {/* Cost in MM */}
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#ede1cd] dark:bg-[#38281b] border border-[#d8c39e] dark:border-[#c58c2b]/40 text-[#8a5e18] dark:text-[#ecc26b] font-mono text-xs font-bold shrink-0">
                      <Coins className="w-3.5 h-3.5 text-[#b57a1b] dark:text-[#dfaa43]" />
                      <span>{shop.redeemCost} MM</span>
                    </div>
                  </div>

                  {/* Distance & reviews */}
                  <div className="mt-2 flex items-center gap-2 text-xs text-[#725e4c] dark:text-[#8e7a68]">
                    <MapPin className="w-3.5 h-3.5 text-[#b57a1b] dark:text-[#dfaa43] shrink-0" />
                    <span>{shop.distance}</span>
                    <span>•</span>
                    <span className="text-[#574332] dark:text-[#a6917b] font-medium">{shop.rating}</span>
                  </div>

                  {/* Offer Details */}
                  <div className="mt-3.5 p-3 rounded-xl bg-[#f8f3eb] dark:bg-[#1c140d] border border-[#ded1be] dark:border-[#36291e]">
                    <div className="text-xs font-bold text-[#8c3b17] dark:text-[#ecc26b]">
                      {shop.offerTitle}
                    </div>
                    <p className="mt-1 text-[11px] text-[#574332] dark:text-[#a6917b] leading-snug">
                      {shop.offerDetail}
                    </p>
                  </div>

                  <div className="mt-3 text-[11px] text-[#725e4c] dark:text-[#8e7a68] flex items-center justify-between">
                    <span>Partner: {shop.owner}</span>
                    <span className="font-mono text-[#574332] dark:text-[#c9b7a3] font-medium">
                      {shop.todayRedemptionsCount} redeemed today
                    </span>
                  </div>
                </div>

                {/* Redeem Action with Dynamic Threshold Validation */}
                <div className="mt-5 pt-3 border-t border-[#ede4d6] dark:border-[#36291e]">
                  {hasEnough ? (
                    <button
                      onClick={() => redeemShopOffer(shop.id)}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#c85d2e] hover:bg-[#b84f22] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md hover:scale-[1.01]"
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
                        className="w-full py-2.5 px-4 rounded-xl bg-[#ede4d6] dark:bg-[#2e2319] text-[#826e5a] dark:text-[#8e7a68] font-medium text-xs cursor-not-allowed text-center"
                      >
                        Redeem disabled
                      </button>
                      <div className="text-center text-[11px] text-[#8c3b17] dark:text-[#ecc26b] font-mono font-semibold">
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
      <div className="rounded-2xl bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] p-6 text-left shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold font-heading text-[#211710] dark:text-[#f7f2ea]">
            Wallet Activity & Ledger
          </h3>
          <span className="text-[10px] font-mono text-[#725e4c] dark:text-[#8e7a68] uppercase font-semibold">
            Real-time ledger (Demo data)
          </span>
        </div>

        <div className="divide-y divide-[#ede4d6] dark:divide-[#36291e]">
          {transactions.map((tx) => {
            const isEarned = tx.type === 'earned' || tx.amount > 0;
            return (
              <div key={tx.id} className="py-3.5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      isEarned
                        ? 'bg-[#ede1cd] dark:bg-[#38281b] text-[#8a5e18] dark:text-[#ecc26b] border border-[#d8c39e] dark:border-[#c58c2b]/40'
                        : 'bg-[#faede6] dark:bg-[#3d2316] text-[#c85d2e] dark:text-[#f3ba9e] border border-[#e8c6b5] dark:border-[#c85d2e]/40'
                    }`}
                  >
                    {isEarned ? (
                      <ArrowDownLeft className="w-4 h-4" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4" />
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#211710] dark:text-[#f2ebe1]">
                      {tx.title}
                    </div>
                    <div className="text-[11px] text-[#725e4c] dark:text-[#8e7a68] flex items-center gap-2 mt-0.5">
                      <span>{tx.partner}</span>
                      <span>•</span>
                      <span>{tx.date}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div
                    className={`text-sm font-mono font-bold ${
                      isEarned ? 'text-[#8a5e18] dark:text-[#f5dc9e]' : 'text-[#c85d2e] dark:text-[#dc7545]'
                    }`}
                  >
                    {isEarned ? `+${tx.amount}` : tx.amount} MM
                  </div>
                  <span className="text-[10px] font-mono text-[#725e4c] dark:text-[#a6917b] px-1.5 py-0.2 rounded bg-[#f6efe3] dark:bg-[#1c140d] border border-[#ded1be] dark:border-transparent">
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
