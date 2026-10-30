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
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-purple-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              RWA Management Committee
            </span>
            <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-300">
              Demo Portal
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-heading text-slate-100">
            {currentSociety} RWA Venue Operations
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-1">
            Logged in as <strong className="text-purple-300 font-semibold">{currentUser?.name}</strong> (RWA Committee). Monitored spaces: Clubhouse, Sports Court, and Terrace Garden.
          </p>
        </div>

        <button
          onClick={() => setIsBlockingSlot(!isBlockingSlot)}
          className="px-4 py-2.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-md transition-all shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>{isBlockingSlot ? 'Cancel' : 'Block slot for maintenance'}</span>
        </button>
      </div>

      {/* METRICS STRIP: Space Utilization & Venue Fee Earned */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        
        {/* Metric 1: Venue Fee Earned this Month */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono uppercase">
              Venue Fee Earned This Month
            </span>
            <Coins className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold font-heading text-emerald-400">
              ₹28,500
            </span>
            <span className="text-xs font-mono text-emerald-300">corpus credit</span>
          </div>
          <div className="mt-1 text-[11px] text-slate-400">
            Deposited into RWA lift & solar maintenance reserve
          </div>
        </div>

        {/* Metric 2: Space Utilization Rate */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono uppercase">
              Society Space Utilization
            </span>
            <TrendingUp className="w-4 h-4 text-amber-400" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold font-heading text-amber-300">
              74%
            </span>
            <span className="text-xs font-mono text-slate-400">active hours</span>
          </div>
          <div className="mt-1 text-[11px] text-slate-400">
            Up from 18% idle baseline before Mohalla Mandi
          </div>
        </div>

        {/* Metric 3: Resident Engagement Score */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono uppercase">
              Community Health & Safety
            </span>
            <Shield className="w-4 h-4 text-purple-400" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold font-heading text-purple-300">
              4.9 / 5
            </span>
            <span className="text-xs font-mono text-slate-400">resident rating</span>
          </div>
          <div className="mt-1 text-[11px] text-slate-400">
            Zero security incidents or outside noise complaints
          </div>
        </div>

      </div>

      {/* BLOCK SLOT MODAL / FORM */}
      {isBlockingSlot && (
        <div className="p-6 rounded-2xl bg-slate-900 border border-purple-500/40 animate-in fade-in duration-200">
          <h2 className="text-base font-bold font-heading text-slate-100 mb-1">
            Block Venue Slot for Society AGM, Deep Clean or Maintenance
          </h2>
          <p className="text-xs text-slate-400 mb-4">
            Blocks corporate bookings during routine RWA facility maintenance.
          </p>

          <form onSubmit={handleBlockSlot} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Venue</label>
              <select
                value={selectedVenue}
                onChange={(e) => setSelectedVenue(e.target.value)}
                className="w-full px-2.5 py-2 text-xs rounded-lg bg-slate-950 border border-slate-700 text-slate-100"
              >
                <option value="Clubhouse Multipurpose Hall">Clubhouse Multipurpose Hall</option>
                <option value="Society Sports Turf & Court">Society Sports Turf & Court</option>
                <option value="Terrace Garden (Tower B)">Terrace Garden (Tower B)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Slot Date & Time</label>
              <input
                type="text"
                value={selectedTimeSlot}
                onChange={(e) => setSelectedTimeSlot(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-700 text-slate-100"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Reason</label>
              <input
                type="text"
                value={maintenanceReason}
                onChange={(e) => setMaintenanceReason(e.target.value)}
                placeholder="e.g. AC Filter servicing & floor polish"
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-700 text-slate-100"
              />
            </div>

            <div className="md:col-span-3 flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsBlockingSlot(false)}
                className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold text-xs"
              >
                Confirm Venue Block
              </button>
            </div>
          </form>
        </div>
      )}

      {/* VENUE BOOKINGS CALENDAR */}
      <div className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden">
        
        {/* Venue Filter Pills */}
        <div className="p-4 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-bold font-heading text-slate-100">
              Venue Booking Schedule
            </h2>
            <p className="text-xs text-slate-400">
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
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30 font-semibold'
                    : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'
                }`}
              >
                {v} Spaces
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-[11px] uppercase font-mono text-slate-400 border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Venue</th>
                <th className="py-3 px-4">Time Slot</th>
                <th className="py-3 px-4">Event & Sponsor</th>
                <th className="py-3 px-4">Organizer</th>
                <th className="py-3 px-4">Venue Fee Earned</th>
                <th className="py-3 px-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {filteredBookings.map((b) => (
                <tr key={b.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-slate-100">
                    {b.venue}
                  </td>
                  <td className="py-3.5 px-4 text-slate-300 font-mono">
                    {b.timeSlot}
                  </td>
                  <td className="py-3.5 px-4 text-slate-200 font-medium">
                    {b.event}
                  </td>
                  <td className="py-3.5 px-4 text-slate-400">
                    {b.organizer}
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-emerald-400">
                    {b.feeEarned}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
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
