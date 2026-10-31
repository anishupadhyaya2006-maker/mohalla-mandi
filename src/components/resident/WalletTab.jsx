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
      
      {/* WALLET BALANCE HERO CARD (Ivory, Beige & Deep Atlassian) */}
      <div className="rounded-3xl bg-[#f1e9dc] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] p-6 sm:p-8 relative overflow-hidden shadow-sm">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0052cc]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#0052cc] dark:text-[#2684ff] font-extrabold">
                Mohalla Mudra Balance
              </span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#deebff] dark:bg-[#0c2340] text-[#0052cc] dark:text-[#2684ff] border border-[#0052cc]/30 font-bold">
                Demo Currency
              </span>
            </div>

            {/* Balance Display */}
            <div className="flex items-baseline gap-3">
              <span className="font-heading font-extrabold text-5xl sm:text-6xl text-[#23150d] dark:text-[#faf6ee] tracking-tight">
                {userCredits}
              </span>
              <span className="text-xl sm:text-2xl font-extrabold font-mono text-[#0052cc] dark:text-[#2684ff]">
                MM
              </span>
              <span className="text-xs sm:text-sm text-[#4a3528] dark:text-[#ddd0be] font-sans font-bold ml-2">
                ≈ ₹{userCredits * 10} local purchasing power
              </span>
            </div>

            <p className="mt-2 text-xs sm:text-sm text-[#4a3528] dark:text-[#ddd0be] max-w-lg font-medium">
              Earned from attending society events and adopting green delivery habits. Accepted at partner stores within 500m of your gate.
            </p>
          </div>

          {/* Quick Metrics Pill */}
          <div className="grid grid-cols-2 gap-3 text-xs bg-white dark:bg-[#160e09] p-4 rounded-2xl border border-[#ddd0be] dark:border-[#38251a] shrink-0 shadow-sm">
            <div>
              <div className="text-[11px] text-[#4a3528] dark:text-[#ddd0be] font-bold">Total Transactions</div>
              <div className="text-lg font-extrabold font-mono text-[#23150d] dark:text-[#faf6ee] mt-0.5">
                {transactions.length}
              </div>
            </div>
            <div>
              <div className="text-[11px] text-[#4a3528] dark:text-[#ddd0be] font-bold">Society Partner Shops</div>
              <div className="text-lg font-extrabold font-mono text-[#0052cc] dark:text-[#2684ff] mt-0.5">
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
            <h3 className="text-xl font-extrabold font-heading text-[#23150d] dark:text-[#faf6ee] tracking-tight">
              Redeem at Local Society Shops
            </h3>
            <p className="text-xs text-[#4a3528] dark:text-[#ddd0be] font-medium">
              Kirana, filter kaapi, cobbler, juices, book hub, and tailoring. 100% funded by corporate sponsors and RWA footfall.
            </p>
          </div>
          <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-[#deebff] dark:bg-[#0c2340] border border-[#0052cc]/30 text-[#0052cc] dark:text-[#2684ff] font-bold shadow-xs">
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
                className="rounded-2xl bg-white dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] p-5 flex flex-col justify-between hover:border-[#0052cc] transition-all text-left shadow-sm"
              >
                <div>
                  {/* Shop header */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f1e9dc] dark:bg-[#2c1d15] text-[#23150d] dark:text-[#ddd0be] font-bold border border-[#ddd0be] dark:border-[#38251a]">
                        {shop.category}
                      </span>
                      <h4 className="text-base font-extrabold font-heading text-[#23150d] dark:text-[#faf6ee] mt-2">
                        {shop.name}
                      </h4>
                    </div>

                    {/* Cost in MM */}
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#deebff] dark:bg-[#0c2340] border border-[#0052cc]/40 text-[#0052cc] dark:text-[#2684ff] font-mono text-xs font-extrabold shrink-0 shadow-xs">
                      <Coins className="w-3.5 h-3.5 text-[#0052cc] dark:text-[#2684ff]" />
                      <span>{shop.redeemCost} MM</span>
                    </div>
                  </div>

                  {/* Distance & reviews */}
                  <div className="mt-2 flex items-center gap-2 text-xs text-[#23150d] dark:text-[#ddd0be] font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-[#0052cc] dark:text-[#2684ff] shrink-0" />
                    <span>{shop.distance}</span>
                    <span>•</span>
                    <span className="text-[#23150d] dark:text-[#faf6ee] font-bold">{shop.rating}</span>
                  </div>

                  {/* Offer Details */}
                  <div className="mt-3.5 p-3.5 rounded-xl bg-[#f1e9dc] dark:bg-[#160e09] border border-[#ddd0be] dark:border-[#38251a]">
                    <div className="text-xs font-extrabold text-[#0052cc] dark:text-[#2684ff]">
                      {shop.offerTitle}
                    </div>
                    <p className="mt-1 text-[11px] text-[#4a3528] dark:text-[#ddd0be] leading-snug font-medium">
                      {shop.offerDetail}
                    </p>
                  </div>

                  <div className="mt-3 text-[11px] text-[#4a3528] dark:text-[#ddd0be] flex items-center justify-between font-semibold">
                    <span>Partner: {shop.owner}</span>
                    <span className="font-mono text-[#0052cc] dark:text-[#2684ff] font-bold">
                      {shop.todayRedemptionsCount} redeemed today
                    </span>
                  </div>
                </div>

                {/* Redeem Action with Dynamic Threshold Validation */}
                <div className="mt-5 pt-3 border-t border-[#f1e9dc] dark:border-[#38251a]">
                  {hasEnough ? (
                    <button
                      onClick={() => redeemShopOffer(shop.id)}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#0052cc] hover:bg-[#0747a6] text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-md hover:scale-[1.01]"
                    >
                      <span>Redeem Offer</span>
                      <span className="text-[11px] font-mono font-bold text-white/90">
                        ({shop.redeemCost} MM)
                      </span>
                    </button>
                  ) : (
                    <div className="space-y-1.5">
                      <button
                        disabled
                        className="w-full py-2.5 px-4 rounded-xl bg-[#f1e9dc] dark:bg-[#2c1d15] text-[#755e4e] font-bold text-xs cursor-not-allowed text-center border border-[#ddd0be] dark:border-[#38251a]"
                      >
                        Redeem (Requires {shop.redeemCost} MM)
                      </button>
                      <div className="text-[10px] text-center text-[#0747a6] dark:text-[#2684ff] font-mono font-extrabold">
                        Need {needed} more MM to unlock this voucher
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 3: TRANSACTION ACTIVITY LEDGER */}
      <div className="rounded-2xl bg-white dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] p-6 text-left shadow-sm">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#f1e9dc] dark:border-[#38251a]">
          <div>
            <h3 className="text-lg font-extrabold font-heading text-[#23150d] dark:text-[#faf6ee]">
              Wallet Activity & Ledger
            </h3>
            <p className="text-xs text-[#4a3528] dark:text-[#ddd0be] font-medium">
              Real-time audit log of your earned and redeemed Mohalla Mudra credits.
            </p>
          </div>
          <span className="text-[10px] font-mono uppercase text-[#755e4e] dark:text-[#ddd0be] font-bold">
            Real-time ledger (Demo Data)
          </span>
        </div>

        <div className="divide-y divide-[#f1e9dc] dark:divide-[#38251a]">
          {transactions.map((tx) => {
            const isEarned = tx.type === 'earned' || tx.amount > 0;
            return (
              <div key={tx.id} className="py-3.5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      isEarned
                        ? 'bg-[#deebff] dark:bg-[#0c2340] text-[#0052cc] dark:text-[#2684ff] border border-[#0052cc]/40 font-bold'
                        : 'bg-[#faede6] dark:bg-[#2c150e] text-[#b84f22] dark:text-[#ea8558] border border-[#e8c6b5] font-bold'
                    }`}
                  >
                    {isEarned ? (
                      <ArrowDownLeft className="w-4 h-4 text-[#0052cc] dark:text-[#2684ff]" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-[#b84f22] dark:text-[#ea8558]" />
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#23150d] dark:text-[#faf6ee]">
                      {tx.title}
                    </div>
                    <div className="text-[11px] text-[#4a3528] dark:text-[#ddd0be] flex items-center gap-2 mt-0.5 font-medium">
                      <span>{tx.partner}</span>
                      <span>•</span>
                      <span>{tx.date}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div
                    className={`text-sm font-mono font-extrabold ${
                      isEarned ? 'text-[#0052cc] dark:text-[#2684ff]' : 'text-[#4a3528] dark:text-[#ddd0be]'
                    }`}
                  >
                    {isEarned ? `+${tx.amount}` : tx.amount} MM
                  </div>
                  <span className="text-[10px] font-mono text-[#23150d] dark:text-[#ddd0be] px-2 py-0.5 rounded bg-[#f1e9dc] dark:bg-[#160e09] border border-[#ddd0be] dark:border-[#38251a] font-bold">
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
