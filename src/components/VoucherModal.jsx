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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#23150d]/60 dark:bg-[#160e09]/85 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-sm rounded-2xl bg-white dark:bg-[#221610] border-2 border-[#0052cc] dark:border-[#2684ff]/60 shadow-2xl p-6 text-left">
        
        {/* Close */}
        <button
          type="button"
          onClick={() => setActiveVoucher(null)}
          className="absolute top-4 right-4 p-1 rounded-lg text-[#755e4e] dark:text-[#9c8574] hover:text-[#23150d] dark:hover:text-[#faf6ee] hover:bg-[#f1e9dc] dark:hover:bg-[#2c1d15]"
          aria-label="Close voucher modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Header (Deep Atlassian & Ivory) */}
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-9 h-9 rounded-full bg-[#deebff] dark:bg-[#0c2340] text-[#0052cc] dark:text-[#2684ff] border border-[#0052cc]/40 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5 text-[#0052cc]" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#0052cc] dark:text-[#2684ff] font-black">
              Redemption Successful
            </span>
            <h3 className="text-base font-extrabold font-heading text-[#23150d] dark:text-[#faf6ee]">
              Mohalla Mitra Voucher
            </h3>
          </div>
        </div>

        {/* High-Fidelity Ticket / Voucher Card */}
        <div className="bg-[#f1e9dc] dark:bg-[#160e09] rounded-xl p-4 border border-[#ddd0be] dark:border-[#38251a] text-center relative overflow-hidden">
          
          <div className="text-xs font-black text-[#23150d] dark:text-[#faf6ee]">
            {activeVoucher.shopName}
          </div>
          
          <div className="mt-2 text-sm font-black font-heading text-[#0052cc] dark:text-[#2684ff]">
            {activeVoucher.offerTitle}
          </div>

          <p className="mt-1 text-[11px] text-[#4a3528] dark:text-[#ddd0be] leading-snug font-medium">
            {activeVoucher.offerDetail}
          </p>

          {/* Dotted Perforation Line */}
          <div className="my-3 border-t border-dashed border-[#ddd0be] dark:border-[#38251a] relative">
            <div className="absolute -left-6 -top-2 w-4 h-4 rounded-full bg-white dark:bg-[#221610]"></div>
            <div className="absolute -right-6 -top-2 w-4 h-4 rounded-full bg-white dark:bg-[#221610]"></div>
          </div>

          {/* Code Box */}
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-[#221610] border border-[#0052cc]/30 dark:border-[#2684ff]/40 shadow-sm">
            <div className="text-left">
              <div className="text-[9px] uppercase font-mono text-[#755e4e] dark:text-[#9c8574] font-bold">Coupon Code</div>
              <div className="text-sm font-mono font-black text-[#0052cc] dark:text-[#2684ff] tracking-wider">
                {activeVoucher.code}
              </div>
            </div>
            <button
              onClick={handleCopyCode}
              className="p-1.5 rounded-md bg-[#deebff] dark:bg-[#0c2340] hover:bg-[#b3d4ff] dark:hover:bg-[#0052cc]/40 text-[#0052cc] dark:text-[#2684ff] transition-colors border border-[#0052cc]/30 font-bold"
              title="Copy code"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>

          {/* QR representation */}
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-[#755e4e] dark:text-[#9c8574]">
            <QrCode className="w-4 h-4 text-[#23150d] dark:text-[#faf6ee]" />
            <span className="text-[11px] font-mono text-[#4a3528] dark:text-[#ddd0be] font-medium">Scan at counter or quote unit {activeVoucher.society}</span>
          </div>
        </div>

        {/* Voucher Meta details */}
        <div className="mt-3.5 space-y-1.5 text-[11px] text-[#4a3528] dark:text-[#ddd0be]">
          <div className="flex justify-between">
            <span className="font-medium">Redeemed by:</span>
            <span className="text-[#23150d] dark:text-[#faf6ee] font-bold">{activeVoucher.customerName}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Credits deducted:</span>
            <span className="text-[#0747a6] dark:text-[#2684ff] font-mono font-black">-{activeVoucher.cost} MM</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">New Wallet Balance:</span>
            <span className="text-[#23150d] dark:text-[#faf6ee] font-mono font-black">{activeVoucher.remainingBalance} MM</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Validity:</span>
            <span className="text-[#0052cc] dark:text-[#2684ff] font-bold">{activeVoucher.validUntil}</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => setActiveVoucher(null)}
          className="mt-5 w-full py-2.5 px-4 rounded-xl bg-[#0052cc] hover:bg-[#0747a6] text-white font-bold text-xs transition-colors shadow-sm"
        >
          Done
        </button>

      </div>
    </div>
  );
}
