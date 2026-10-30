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
      
      {/* WALLET BALANCE HERO CARD */}
      <div className="rounded-3xl bg-slate-900/90 border border-emerald-500/30 p-6 sm:p-8 relative overflow-hidden shadow-2xl">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                Mohalla Mudra Balance
              </span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                Demo Currency
              </span>
            </div>

            {/* Big Jade Green Balance Display */}
            <div className="flex items-baseline gap-3">
              <span className="font-heading font-extrabold text-5xl sm:text-6xl text-emerald-400 tracking-tight">
                {userCredits}
              </span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-300/80">
                MM
              </span>
              <span className="text-xs sm:text-sm text-slate-400 font-sans ml-2">
                ≈ ₹{userCredits * 10} local purchasing power
              </span>
            </div>

            <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-lg">
              Earned from attending society events and adopting green delivery habits. Accepted at partner stores within 500m of your gate.
            </p>
          </div>

          {/* Quick Metrics Pill */}
          <div className="grid grid-cols-2 gap-3 text-xs bg-slate-950/80 p-4 rounded-2xl border border-slate-800 shrink-0">
            <div>
              <div className="text-[11px] text-slate-400">Total Transactions</div>
              <div className="text-base font-bold font-mono text-slate-200 mt-0.5">
                {transactions.length}
              </div>
            </div>
            <div>
              <div className="text-[11px] text-slate-400">Society Partner Shops</div>
              <div className="text-base font-bold font-mono text-amber-300 mt-0.5">
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
            <h3 className="text-xl font-bold font-heading text-slate-100">
              Redeem at Local Society Shops
            </h3>
            <p className="text-xs text-slate-400">
              Kirana, filter kaapi, cobbler, juices, book hub, and tailoring. 100% funded by corporate sponsors and RWA footfall.
            </p>
          </div>
          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
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
                className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 flex flex-col justify-between hover:border-slate-700 transition-all text-left"
              >
                <div>
                  {/* Shop header */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {shop.category}
                      </span>
                      <h4 className="text-base font-bold font-heading text-slate-100 mt-2">
                        {shop.name}
                      </h4>
                    </div>

                    {/* Cost in MM */}
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold shrink-0">
                      <Coins className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{shop.redeemCost} MM</span>
                    </div>
                  </div>

                  {/* Distance & reviews */}
                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{shop.distance}</span>
                    <span>•</span>
                    <span className="text-slate-400">{shop.rating}</span>
                  </div>

                  {/* Offer Details */}
                  <div className="mt-3.5 p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                    <div className="text-xs font-bold text-amber-300">
                      {shop.offerTitle}
                    </div>
                    <p className="mt-1 text-[11px] text-slate-400 leading-snug">
                      {shop.offerDetail}
                    </p>
                  </div>

                  <div className="mt-3 text-[11px] text-slate-400 flex items-center justify-between">
                    <span>Partner: {shop.owner}</span>
                    <span className="font-mono text-slate-400">
                      {shop.todayRedemptionsCount} redeemed today
                    </span>
                  </div>
                </div>

                {/* Redeem Action with Dynamic Threshold Validation */}
                <div className="mt-5 pt-3 border-t border-slate-800">
                  {hasEnough ? (
                    <button
                      onClick={() => redeemShopOffer(shop.id)}
                      className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md hover:scale-[1.01]"
                    >
                      <span>Redeem</span>
                      <span className="text-[11px] font-mono font-normal">
                        ({shop.redeemCost} MM)
                      </span>
                    </button>
                  ) : (
                    <div className="space-y-1.5">
                      <button
                        disabled
                        className="w-full py-2.5 px-4 rounded-xl bg-slate-800 text-slate-500 font-medium text-xs cursor-not-allowed text-center"
                      >
                        Redeem disabled
                      </button>
                      <div className="text-center text-[11px] text-amber-400/90 font-mono">
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
      <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 text-left">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold font-heading text-slate-100">
            Wallet Activity & Ledger
          </h3>
          <span className="text-[10px] font-mono text-slate-400 uppercase">
            Real-time ledger (Demo data)
          </span>
        </div>

        <div className="divide-y divide-slate-800/80">
          {transactions.map((tx) => {
            const isEarned = tx.type === 'earned' || tx.amount > 0;
            return (
              <div key={tx.id} className="py-3.5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      isEarned
                        ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                        : 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                    }`}
                  >
                    {isEarned ? (
                      <ArrowDownLeft className="w-4 h-4" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4" />
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-200">
                      {tx.title}
                    </div>
                    <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5">
                      <span>{tx.partner}</span>
                      <span>•</span>
                      <span>{tx.date}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div
                    className={`text-sm font-mono font-bold ${
                      isEarned ? 'text-emerald-400' : 'text-slate-300'
                    }`}
                  >
                    {isEarned ? `+${tx.amount}` : tx.amount} MM
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 px-1.5 py-0.2 rounded bg-slate-800">
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
