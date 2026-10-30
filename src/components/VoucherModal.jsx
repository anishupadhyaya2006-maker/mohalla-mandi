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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#140e0a]/85 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-sm rounded-2xl bg-[#211a14] border-2 border-[#c58c2b]/60 shadow-2xl p-6 text-left">
        
        {/* Close */}
        <button
          type="button"
          onClick={() => setActiveVoucher(null)}
          className="absolute top-4 right-4 p-1 rounded-lg text-[#a6917b] hover:text-[#f7f2ea] hover:bg-[#2e2319]"
          aria-label="Close voucher modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Header (Warm Brass / Toasted Ochre) */}
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-9 h-9 rounded-full bg-[#38281b] text-[#dfaa43] border border-[#c58c2b]/50 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#ecc26b] font-semibold">
              Redemption Successful
            </span>
            <h3 className="text-base font-bold font-heading text-[#f7f2ea]">
              Mohalla Mandi Voucher
            </h3>
          </div>
        </div>

        {/* High-Fidelity Ticket / Voucher Card */}
        <div className="bg-[#1a120c] rounded-xl p-4 border border-[#3c2f24] text-center relative overflow-hidden">
          
          <div className="text-xs font-semibold text-[#ded3c4]">
            {activeVoucher.shopName}
          </div>
          
          <div className="mt-2 text-sm font-bold text-[#ecc26b]">
            {activeVoucher.offerTitle}
          </div>

          <p className="mt-1 text-[11px] text-[#a6917b] leading-snug">
            {activeVoucher.offerDetail}
          </p>

          {/* Dotted Perforation Line */}
          <div className="my-3 border-t border-dashed border-[#3c2f24] relative">
            <div className="absolute -left-6 -top-2 w-4 h-4 rounded-full bg-[#211a14]"></div>
            <div className="absolute -right-6 -top-2 w-4 h-4 rounded-full bg-[#211a14]"></div>
          </div>

          {/* Code Box */}
          <div className="flex items-center justify-between p-2 rounded-lg bg-[#241a13] border border-[#c58c2b]/40">
            <div className="text-left">
              <div className="text-[9px] uppercase font-mono text-[#8e7a68]">Coupon Code</div>
              <div className="text-sm font-mono font-bold text-[#f5dc9e] tracking-wider">
                {activeVoucher.code}
              </div>
            </div>
            <button
              onClick={handleCopyCode}
              className="p-1.5 rounded-md bg-[#38281b] hover:bg-[#483322] text-[#ecc26b] transition-colors"
              title="Copy code"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>

          {/* QR representation */}
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-[#8e7a68]">
            <QrCode className="w-4 h-4 text-[#cfbea5]" />
            <span className="text-[11px] font-mono text-[#8e7a68]">Scan at counter or quote unit {activeVoucher.society}</span>
          </div>
        </div>

        {/* Voucher Meta details */}
        <div className="mt-3.5 space-y-1 text-[11px] text-[#a6917b]">
          <div className="flex justify-between">
            <span>Redeemed by:</span>
            <span className="text-[#f7f2ea] font-medium">{activeVoucher.customerName}</span>
          </div>
          <div className="flex justify-between">
            <span>Credits deducted:</span>
            <span className="text-[#dc7545] font-mono font-semibold">-{activeVoucher.cost} MM</span>
          </div>
          <div className="flex justify-between">
            <span>New Wallet Balance:</span>
            <span className="text-[#f5dc9e] font-mono font-semibold">{activeVoucher.remainingBalance} MM</span>
          </div>
          <div className="flex justify-between">
            <span>Validity:</span>
            <span className="text-[#ecc26b]">{activeVoucher.validUntil}</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => setActiveVoucher(null)}
          className="mt-5 w-full py-2.5 px-4 rounded-xl bg-[#c85d2e] hover:bg-[#dc7545] text-[#fbf8f3] font-bold text-xs transition-colors"
        >
          Done
        </button>

      </div>
    </div>
  );
}
