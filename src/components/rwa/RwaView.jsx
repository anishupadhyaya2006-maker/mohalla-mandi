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
      <div className="p-6 rounded-3xl bg-[#f1e9dc] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0052cc] dark:text-[#2684ff] font-bold flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#0052cc] dark:text-[#2684ff]" />
              RWA Management Committee
            </span>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#deebff] dark:bg-[#0747a6]/30 text-[#0747a6] dark:text-[#deebff] border border-[#b3d4ff] dark:border-[#0052cc]/40 font-bold">
              Demo Portal
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#23150d] dark:text-[#faf6ee]">
            {currentSociety} RWA Venue Operations
          </h1>
          <p className="text-xs sm:text-sm text-[#5c4738] dark:text-[#ddd0be] max-w-xl mt-1 font-medium">
            Logged in as <strong className="text-[#0052cc] dark:text-[#2684ff] font-bold">{currentUser?.name}</strong> (RWA Committee). Monitored spaces: Clubhouse, Sports Court, and Terrace Garden.
          </p>
        </div>

        <button
          onClick={() => setIsBlockingSlot(!isBlockingSlot)}
          className="px-4 py-2.5 rounded-xl bg-[#0052cc] hover:bg-[#0747a6] text-white text-xs font-bold flex items-center gap-1.5 shadow-md transition-all shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>{isBlockingSlot ? 'Cancel' : 'Block slot for maintenance'}</span>
        </button>
      </div>

      {/* METRICS STRIP: Space Utilization & Venue Fee Earned */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        
        {/* Metric 1: Venue Fee Earned this Month */}
        <div className="p-5 rounded-2xl bg-[#faf6ee] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#23150d] dark:text-[#b4a494] font-mono uppercase font-bold">
              Venue Fee Earned This Month
            </span>
            <Coins className="w-4 h-4 text-[#0052cc] dark:text-[#2684ff]" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-black font-heading text-[#0052cc] dark:text-[#2684ff]">
              ₹28,500
            </span>
            <span className="text-xs font-mono text-[#5c4738] dark:text-[#ddd0be] font-bold">corpus credit</span>
          </div>
          <div className="mt-1 text-[11px] text-[#5c4738] dark:text-[#ddd0be] font-medium">
            Deposited into RWA lift & solar maintenance reserve
          </div>
        </div>

        {/* Metric 2: Space Utilization Rate */}
        <div className="p-5 rounded-2xl bg-[#faf6ee] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#23150d] dark:text-[#b4a494] font-mono uppercase font-bold">
              Society Space Utilization
            </span>
            <TrendingUp className="w-4 h-4 text-[#0052cc] dark:text-[#2684ff]" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-black font-heading text-[#23150d] dark:text-[#faf6ee]">
              74%
            </span>
            <span className="text-xs font-mono text-[#5c4738] dark:text-[#ddd0be] font-bold">active hours</span>
          </div>
          <div className="mt-1 text-[11px] text-[#0052cc] dark:text-[#2684ff] font-medium font-semibold">
            Up from 18% idle baseline before Mohalla Mandi
          </div>
        </div>

        {/* Metric 3: Resident Engagement Score */}
        <div className="p-5 rounded-2xl bg-[#faf6ee] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#23150d] dark:text-[#b4a494] font-mono uppercase font-bold">
              Community Health & Safety
            </span>
            <Shield className="w-4 h-4 text-[#0052cc] dark:text-[#2684ff]" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-black font-heading text-[#0052cc] dark:text-[#2684ff]">
              4.9 / 5
            </span>
            <span className="text-xs font-mono text-[#5c4738] dark:text-[#ddd0be] font-bold">resident rating</span>
          </div>
          <div className="mt-1 text-[11px] text-[#5c4738] dark:text-[#ddd0be] font-medium">
            Zero security incidents or outside noise complaints
          </div>
        </div>

      </div>

      {/* BLOCK SLOT MODAL / FORM */}
      {isBlockingSlot && (
        <div className="p-6 rounded-2xl bg-[#faf6ee] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] animate-in fade-in duration-200 shadow-md">
          <h2 className="text-base font-bold font-heading text-[#23150d] dark:text-[#faf6ee] mb-1">
            Block Venue Slot for Society AGM, Deep Clean or Maintenance
          </h2>
          <p className="text-xs text-[#6b584a] dark:text-[#b4a494] mb-4 font-medium">
            Blocks corporate bookings during routine RWA facility maintenance.
          </p>

          <form onSubmit={handleBlockSlot} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#23150d] dark:text-[#faf6ee] mb-1">Venue</label>
              <select
                value={selectedVenue}
                onChange={(e) => setSelectedVenue(e.target.value)}
                className="w-full px-2.5 py-2 text-xs rounded-lg bg-[#f1e9dc] dark:bg-[#160e09] border border-[#ddd0be] dark:border-[#38251a] text-[#23150d] dark:text-[#faf6ee] font-medium focus-visible:ring-2 focus-visible:ring-[#0052cc]"
              >
                <option value="Clubhouse Multipurpose Hall">Clubhouse Multipurpose Hall</option>
                <option value="Society Sports Turf & Court">Society Sports Turf & Court</option>
                <option value="Terrace Garden (Tower B)">Terrace Garden (Tower B)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#23150d] dark:text-[#faf6ee] mb-1">Slot Date & Time</label>
              <input
                type="text"
                value={selectedTimeSlot}
                onChange={(e) => setSelectedTimeSlot(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg bg-[#f1e9dc] dark:bg-[#160e09] border border-[#ddd0be] dark:border-[#38251a] text-[#23150d] dark:text-[#faf6ee] font-mono focus-visible:ring-2 focus-visible:ring-[#0052cc]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#23150d] dark:text-[#faf6ee] mb-1">Reason</label>
              <input
                type="text"
                value={maintenanceReason}
                onChange={(e) => setMaintenanceReason(e.target.value)}
                placeholder="e.g. AC Filter servicing & floor polish"
                className="w-full px-3 py-2 text-xs rounded-lg bg-[#f1e9dc] dark:bg-[#160e09] border border-[#ddd0be] dark:border-[#38251a] text-[#23150d] dark:text-[#faf6ee] placeholder:text-[#8a7667] font-medium focus-visible:ring-2 focus-visible:ring-[#0052cc]"
              />
            </div>

            <div className="md:col-span-3 flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsBlockingSlot(false)}
                className="px-4 py-2 rounded-lg bg-[#f1e9dc] dark:bg-[#160e09] text-[#23150d] dark:text-[#ddd0be] border border-[#ddd0be] dark:border-[#38251a] text-xs font-bold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-[#0052cc] hover:bg-[#0747a6] text-white font-extrabold text-xs shadow-md"
              >
                Confirm Venue Block
              </button>
            </div>
          </form>
        </div>
      )}

      {/* VENUE BOOKINGS CALENDAR */}
      <div className="rounded-2xl bg-[#faf6ee] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] overflow-hidden shadow-sm">
        
        {/* Venue Filter Pills */}
        <div className="p-4 border-b border-[#ddd0be] dark:border-[#38251a] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-bold font-heading text-[#23150d] dark:text-[#faf6ee]">
              Venue Booking Schedule
            </h2>
            <p className="text-xs text-[#6b584a] dark:text-[#b4a494] font-medium">
              Upcoming bookings across Clubhouse, Court, and Terrace.
            </p>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            {['All', 'Clubhouse', 'Sports', 'Terrace'].map((v) => (
              <button
                key={v}
                onClick={() => setActiveVenueFilter(v)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors border ${
                  activeVenueFilter === v
                    ? 'bg-[#0052cc] text-white border-[#0052cc] shadow-sm'
                    : 'bg-[#f1e9dc] dark:bg-[#160e09] text-[#23150d] dark:text-[#ddd0be] border-[#ddd0be] dark:border-[#38251a] hover:border-[#0052cc]/50'
                }`}
              >
                {v} Spaces
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#23150d] dark:text-[#ddd0be]">
            <thead className="bg-[#f1e9dc] dark:bg-[#160e09] text-[11px] uppercase font-mono text-[#23150d] dark:text-[#b4a494] border-b border-[#ddd0be] dark:border-[#38251a]">
              <tr>
                <th className="py-3 px-4 font-extrabold">Venue</th>
                <th className="py-3 px-4 font-extrabold">Time Slot</th>
                <th className="py-3 px-4 font-extrabold">Event & Sponsor</th>
                <th className="py-3 px-4 font-extrabold">Organizer</th>
                <th className="py-3 px-4 font-extrabold">Venue Fee Earned</th>
                <th className="py-3 px-4 text-right font-extrabold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ddd0be] dark:divide-[#38251a]">
              {filteredBookings.map((b) => (
                <tr key={b.id} className="hover:bg-[#f1e9dc]/60 dark:hover:bg-[#2a1b13] transition-colors">
                  <td className="py-3.5 px-4 font-bold text-[#23150d] dark:text-[#faf6ee]">
                    {b.venue}
                  </td>
                  <td className="py-3.5 px-4 text-[#6b584a] dark:text-[#b4a494] font-mono font-medium">
                    {b.timeSlot}
                  </td>
                  <td className="py-3.5 px-4 text-[#23150d] dark:text-[#ddd0be] font-bold">
                    {b.event}
                  </td>
                  <td className="py-3.5 px-4 text-[#6b584a] dark:text-[#b4a494] font-medium">
                    {b.organizer}
                  </td>
                  <td className="py-3.5 px-4 font-mono font-black text-[#0052cc] dark:text-[#2684ff]">
                    {b.feeEarned}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#deebff] dark:bg-[#0747a6]/30 text-[#0052cc] dark:text-[#2684ff] border border-[#b3d4ff] dark:border-[#0052cc]/40 font-bold">
                      <CheckCircle2 className="w-3 h-3 text-[#0052cc] dark:text-[#2684ff]" />
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
