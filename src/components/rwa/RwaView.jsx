import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Shield,
  Calendar,
  Building,
  Coins,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  Plus
} from 'lucide-react';

export default function RwaView() {
  const { rwaCalendar, currentSociety, currentUser, showToast } = useApp();

  const [activeVenueFilter, setActiveVenueFilter] = useState('All');
  const [isBlockingSlot, setIsBlockingSlot] = useState(false);
  const [maintenanceReason, setMaintenanceReason] = useState('');
  const [selectedVenue, setSelectedVenue] = useState('Clubhouse Multipurpose Hall');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('Thursday 2:00 PM – 5:00 PM');

  // Filter calendar items
  const filteredBookings = rwaCalendar.filter(b => {
    if (activeVenueFilter === 'All') return true;
    return b.venue.toLowerCase().includes(activeVenueFilter.toLowerCase());
  });

  const handleBlockSlot = (e) => {
    e.preventDefault();
    showToast(`Venue block confirmed for ${selectedVenue} (${maintenanceReason || 'Society Maintenance'}).`, 'info');
    setIsBlockingSlot(false);
    setMaintenanceReason('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-left animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="p-6 rounded-3xl bg-[#fbf4e8] dark:bg-[#241a13] border border-[#d6be96] dark:border-[#c58c2b]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8a5e18] dark:text-[#ecc26b] font-semibold flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#b57a1b] dark:text-[#dfaa43]" />
              RWA Management Committee
            </span>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#ede2d2] dark:bg-[#38281b] text-[#704910] dark:text-[#f5dc9e] border border-[#d6be96] dark:border-[#c58c2b]/40 font-semibold">
              Demo Portal
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-[#211710] dark:text-[#f7f2ea]">
            {currentSociety} RWA Venue Operations
          </h1>
          <p className="text-xs sm:text-sm text-[#574332] dark:text-[#cfbea5] max-w-xl mt-1">
            Logged in as <strong className="text-[#8a5e18] dark:text-[#ecc26b] font-semibold">{currentUser?.name}</strong> (RWA Committee). Monitored spaces: Clubhouse, Sports Court, and Terrace Garden.
          </p>
        </div>

        <button
          onClick={() => setIsBlockingSlot(!isBlockingSlot)}
          className="px-4 py-2.5 rounded-xl bg-[#c85d2e] hover:bg-[#b84f22] text-[#fbf8f3] text-xs font-bold flex items-center gap-1.5 shadow-md transition-all shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>{isBlockingSlot ? 'Cancel' : 'Block slot for maintenance'}</span>
        </button>
      </div>

      {/* METRICS STRIP: Space Utilization & Venue Fee Earned */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        
        {/* Metric 1: Venue Fee Earned this Month */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#725e4c] dark:text-[#8e7a68] font-mono uppercase font-semibold">
              Venue Fee Earned This Month
            </span>
            <Coins className="w-4 h-4 text-[#b57a1b] dark:text-[#dfaa43]" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold font-heading text-[#8a5e18] dark:text-[#f5dc9e]">
              ₹28,500
            </span>
            <span className="text-xs font-mono text-[#725e4c] dark:text-[#ecc26b] font-medium">corpus credit</span>
          </div>
          <div className="mt-1 text-[11px] text-[#725e4c] dark:text-[#a6917b]">
            Deposited into RWA lift & solar maintenance reserve
          </div>
        </div>

        {/* Metric 2: Space Utilization Rate */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#725e4c] dark:text-[#8e7a68] font-mono uppercase font-semibold">
              Society Space Utilization
            </span>
            <TrendingUp className="w-4 h-4 text-[#c85d2e] dark:text-[#dc7545]" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold font-heading text-[#c85d2e] dark:text-[#ecc26b]">
              74%
            </span>
            <span className="text-xs font-mono text-[#725e4c] dark:text-[#a6917b]">active hours</span>
          </div>
          <div className="mt-1 text-[11px] text-[#725e4c] dark:text-[#a6917b]">
            Up from 18% idle baseline before Mohalla Mandi
          </div>
        </div>

        {/* Metric 3: Resident Engagement Score */}
        <div className="p-5 rounded-2xl bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#725e4c] dark:text-[#8e7a68] font-mono uppercase font-semibold">
              Community Health & Safety
            </span>
            <Shield className="w-4 h-4 text-[#8a5e18] dark:text-[#cfbea5]" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold font-heading text-[#211710] dark:text-[#f2ebe1]">
              4.9 / 5
            </span>
            <span className="text-xs font-mono text-[#725e4c] dark:text-[#a6917b]">resident rating</span>
          </div>
          <div className="mt-1 text-[11px] text-[#725e4c] dark:text-[#a6917b]">
            Zero security incidents or outside noise complaints
          </div>
        </div>

      </div>

      {/* BLOCK SLOT MODAL / FORM */}
      {isBlockingSlot && (
        <div className="p-6 rounded-2xl bg-white dark:bg-[#241a13] border border-[#d6be96] dark:border-[#c58c2b]/40 animate-in fade-in duration-200 shadow-md">
          <h2 className="text-base font-bold font-heading text-[#211710] dark:text-[#f7f2ea] mb-1">
            Block Venue Slot for Society AGM, Deep Clean or Maintenance
          </h2>
          <p className="text-xs text-[#725e4c] dark:text-[#a6917b] mb-4">
            Blocks corporate bookings during routine RWA facility maintenance.
          </p>

          <form onSubmit={handleBlockSlot} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#574332] dark:text-[#ded3c4] mb-1">Venue</label>
              <select
                value={selectedVenue}
                onChange={(e) => setSelectedVenue(e.target.value)}
                className="w-full px-2.5 py-2 text-xs rounded-lg bg-[#f8f3eb] dark:bg-[#1a120c] border border-[#ded1be] dark:border-[#3c2f24] text-[#211710] dark:text-[#f7f2ea]"
              >
                <option value="Clubhouse Multipurpose Hall">Clubhouse Multipurpose Hall</option>
                <option value="Society Sports Turf & Court">Society Sports Turf & Court</option>
                <option value="Terrace Garden (Tower B)">Terrace Garden (Tower B)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#574332] dark:text-[#ded3c4] mb-1">Slot Date & Time</label>
              <input
                type="text"
                value={selectedTimeSlot}
                onChange={(e) => setSelectedTimeSlot(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg bg-[#f8f3eb] dark:bg-[#1a120c] border border-[#ded1be] dark:border-[#3c2f24] text-[#211710] dark:text-[#f7f2ea]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#574332] dark:text-[#ded3c4] mb-1">Reason</label>
              <input
                type="text"
                value={maintenanceReason}
                onChange={(e) => setMaintenanceReason(e.target.value)}
                placeholder="e.g. AC Filter servicing & floor polish"
                className="w-full px-3 py-2 text-xs rounded-lg bg-[#f8f3eb] dark:bg-[#1a120c] border border-[#ded1be] dark:border-[#3c2f24] text-[#211710] dark:text-[#f7f2ea] placeholder:text-[#826e5a]"
              />
            </div>

            <div className="md:col-span-3 flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsBlockingSlot(false)}
                className="px-4 py-2 rounded-lg bg-[#f6efe3] dark:bg-[#2e2319] text-[#574332] dark:text-[#cfbea5] border border-[#ded1be] dark:border-transparent text-xs font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-[#c85d2e] hover:bg-[#b84f22] text-[#fbf8f3] font-bold text-xs"
              >
                Confirm Venue Block
              </button>
            </div>
          </form>
        </div>
      )}

      {/* VENUE BOOKINGS CALENDAR */}
      <div className="rounded-2xl bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] overflow-hidden shadow-sm">
        
        {/* Venue Filter Pills */}
        <div className="p-4 border-b border-[#ded1be] dark:border-[#36291e] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-bold font-heading text-[#211710] dark:text-[#f7f2ea]">
              Venue Booking Schedule
            </h2>
            <p className="text-xs text-[#725e4c] dark:text-[#a6917b]">
              Upcoming bookings across Clubhouse, Court, and Terrace.
            </p>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            {['All', 'Clubhouse', 'Sports', 'Terrace'].map((v) => (
              <button
                key={v}
                onClick={() => setActiveVenueFilter(v)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  activeVenueFilter === v
                    ? 'bg-[#ede2d2] dark:bg-[#38281b] text-[#704910] dark:text-[#ecc26b] border border-[#cb922d] dark:border-[#c58c2b]/50 font-bold'
                    : 'bg-white dark:bg-[#1c140d] text-[#725e4c] dark:text-[#a6917b] border border-[#ded1be] dark:border-[#36291e] hover:text-[#211710]'
                }`}
              >
                {v} Spaces
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#574332] dark:text-[#cfbea5]">
            <thead className="bg-[#f6efe3] dark:bg-[#1c140d] text-[11px] uppercase font-mono text-[#725e4c] dark:text-[#8e7a68] border-b border-[#ded1be] dark:border-[#36291e]">
              <tr>
                <th className="py-3 px-4 font-bold">Venue</th>
                <th className="py-3 px-4 font-bold">Time Slot</th>
                <th className="py-3 px-4 font-bold">Event & Sponsor</th>
                <th className="py-3 px-4 font-bold">Organizer</th>
                <th className="py-3 px-4 font-bold">Venue Fee Earned</th>
                <th className="py-3 px-4 text-right font-bold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ded1be] dark:divide-[#36291e]">
              {filteredBookings.map((b) => (
                <tr key={b.id} className="hover:bg-[#fcfaf6] dark:hover:bg-[#2b2118] transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-[#211710] dark:text-[#f7f2ea]">
                    {b.venue}
                  </td>
                  <td className="py-3.5 px-4 text-[#574332] dark:text-[#ded3c4] font-mono">
                    {b.timeSlot}
                  </td>
                  <td className="py-3.5 px-4 text-[#211710] dark:text-[#ded3c4] font-medium">
                    {b.event}
                  </td>
                  <td className="py-3.5 px-4 text-[#725e4c] dark:text-[#a6917b]">
                    {b.organizer}
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-[#8a5e18] dark:text-[#f5dc9e]">
                    {b.feeEarned}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#fbf4e8] dark:bg-[#38281b] text-[#8a5e18] dark:text-[#ecc26b] border border-[#d6be96] dark:border-[#c58c2b]/40 font-semibold">
                      <CheckCircle2 className="w-3 h-3 text-[#b57a1b] dark:text-[#dfaa43]" />
                      {b.status}
                    </span>
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
