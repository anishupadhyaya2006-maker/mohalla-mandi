import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, X, Store, QrCode, Copy, Sparkles, MapPin } from 'lucide-react';

export default function VoucherModal() {
  const { activeVoucher, setActiveVoucher, showToast } = useApp();

  if (!activeVoucher) return null;

  const handleCopyCode = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(activeVoucher.code);
      showToast('Voucher code copied to clipboard!', 'success');
    }
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) setActiveVoucher(null);
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-sm rounded-2xl bg-slate-900 border-2 border-emerald-500/50 shadow-2xl p-6 text-left">
        
        {/* Close */}
        <button
          type="button"
          onClick={() => setActiveVoucher(null)}
          className="absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          aria-label="Close voucher modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Header */}
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
              Redemption Successful
            </span>
            <h3 className="text-base font-bold font-heading text-slate-100">
              Mohalla Mandi Voucher
            </h3>
          </div>
        </div>

        {/* High-Fidelity Ticket / Voucher Card */}
        <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 text-center relative overflow-hidden">
          
          {/* Subtle watermarked background */}
          <div className="text-xs font-semibold text-slate-300">
            {activeVoucher.shopName}
          </div>
          
          <div className="mt-2 text-sm font-bold text-amber-300">
            {activeVoucher.offerTitle}
          </div>

          <p className="mt-1 text-[11px] text-slate-400 leading-snug">
            {activeVoucher.offerDetail}
          </p>

          {/* Dotted Perforation Line */}
          <div className="my-3 border-t border-dashed border-slate-800 relative">
            <div className="absolute -left-6 -top-2 w-4 h-4 rounded-full bg-slate-900"></div>
            <div className="absolute -right-6 -top-2 w-4 h-4 rounded-full bg-slate-900"></div>
          </div>

          {/* Code Box */}
          <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-emerald-500/30">
            <div className="text-left">
              <div className="text-[9px] uppercase font-mono text-slate-400">Coupon Code</div>
              <div className="text-sm font-mono font-bold text-emerald-300 tracking-wider">
                {activeVoucher.code}
              </div>
            </div>
            <button
              onClick={handleCopyCode}
              className="p-1.5 rounded-md bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 transition-colors"
              title="Copy code"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>

          {/* QR representation */}
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-400">
            <QrCode className="w-4 h-4 text-slate-300" />
            <span className="text-[11px] font-mono text-slate-400">Scan at counter or quote unit {activeVoucher.society}</span>
          </div>
        </div>

        {/* Voucher Meta details */}
        <div className="mt-3.5 space-y-1 text-[11px] text-slate-400">
          <div className="flex justify-between">
            <span>Redeemed by:</span>
            <span className="text-slate-200 font-medium">{activeVoucher.customerName}</span>
          </div>
          <div className="flex justify-between">
            <span>Credits deducted:</span>
            <span className="text-rose-400 font-mono font-semibold">-{activeVoucher.cost} MM</span>
          </div>
          <div className="flex justify-between">
            <span>New Wallet Balance:</span>
            <span className="text-emerald-300 font-mono font-semibold">{activeVoucher.remainingBalance} MM</span>
          </div>
          <div className="flex justify-between">
            <span>Validity:</span>
            <span className="text-amber-300">{activeVoucher.validUntil}</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => setActiveVoucher(null)}
          className="mt-5 w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
        >
          Done
        </button>

      </div>
    </div>
  );
}
