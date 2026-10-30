import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Users,
  Coins,
  Sparkles,
  Search,
  Filter,
  Briefcase,
  AlertCircle
} from 'lucide-react';

export default function EventsTab() {
  const { events, joinEvent, currentUser } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Wellness',
    'Sports League',
    'Arts & Culture',
    'Skill Workshop',
    'Community Storytelling'
  ];

  const filteredEvents = events.filter((evt) => {
    const matchesCategory = selectedCategory === 'All' || evt.category === selectedCategory;
    const matchesSearch =
      evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.sponsoredBy.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const joinedCount = events.filter(e => e.isJoined).length;

  return (
    <div className="space-y-6 text-left">
      
      {/* Top Banner / Summary */}
      <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono uppercase text-amber-400 font-semibold tracking-wider">
              Society Activities & Workshops
            </span>
            <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300">
              Demo Data
            </span>
          </div>
          <h2 className="text-2xl font-bold font-heading text-slate-100">
            Upcoming Society Events
          </h2>
          <p className="text-xs text-slate-400 mt-0.5 max-w-xl">
            Join weekend workshops and corporate leagues in your clubhouse and terrace. Earn Mohalla Mudra to spend at local shops.
          </p>
        </div>

        {/* User Enrollment Status Card */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-sm">
            {joinedCount}
          </div>
          <div className="text-xs">
            <div className="text-slate-200 font-semibold">Events You’re In</div>
            <div className="text-[11px] text-slate-400">
              Earning credits upon attendance
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search yoga, cricket, art..."
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-100 placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none"
          />
        </div>

      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredEvents.map((evt) => {
          const isFull = evt.enrolledCount >= evt.maxSeats;
          const capacityPercent = Math.min(100, Math.round((evt.enrolledCount / evt.maxSeats) * 100));

          return (
            <div
              key={evt.id}
              className={`rounded-2xl bg-slate-900/90 border transition-all flex flex-col justify-between p-5 relative overflow-hidden ${
                evt.isJoined
                  ? 'border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.12)]'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Top Meta Strip */}
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                    {evt.category}
                  </span>

                  {/* Reward Pill */}
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
                    <Coins className="w-3.5 h-3.5 text-emerald-400" />
                    <span>+{evt.creditsReward} MM</span>
                  </div>
                </div>

                {/* Event Title */}
                <h3 className="text-base font-bold font-heading text-slate-100 leading-snug">
                  {evt.title}
                </h3>

                {/* Venue, Date & Time */}
                <div className="mt-3 space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{evt.date} · {evt.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{evt.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Partner: <strong className="text-slate-300 font-medium">{evt.sponsoredBy}</strong></span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-3 text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {evt.description}
                </p>

                {/* Instructor & Requirements */}
                <div className="mt-3 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Host: {evt.instructor}</span>
                </div>

                {/* Capacity Bar */}
                <div className="mt-3">
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono mb-1">
                    <span>Capacity: {evt.enrolledCount} / {evt.maxSeats} neighbours</span>
                    <span>{capacityPercent}% full</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        evt.isJoined ? 'bg-emerald-400' : capacityPercent > 85 ? 'bg-amber-400' : 'bg-slate-500'
                      }`}
                      style={{ width: `${capacityPercent}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Action Button: Joined State vs Join Event */}
              <div className="mt-5 pt-3 border-t border-slate-800/80">
                {evt.isJoined ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs">
                      <div className="flex items-center gap-1.5 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>You're in</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400/80">
                        Spot reserved
                      </span>
                    </div>
                    <button
                      onClick={() => joinEvent(evt.id)}
                      className="w-full py-1.5 text-[11px] text-slate-400 hover:text-rose-400 hover:underline transition-colors"
                    >
                      Leave event
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => joinEvent(evt.id)}
                    disabled={isFull}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      isFull
                        ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                        : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md hover:scale-[1.01]'
                    }`}
                  >
                    <span>{isFull ? 'Event is full' : 'Join event'}</span>
                  </button>
                )}
              </div>

            </div>
          );
        })}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12 bg-slate-900/50 rounded-2xl border border-slate-800">
          <p className="text-sm text-slate-400">No events found matching your filter.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="mt-2 text-xs text-amber-300 hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Footer Info */}
      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
        <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <p>
          <strong className="text-slate-300">How it works:</strong> All workshops are hosted inside your society premises. Joining an event automatically secures your spot and credits Mohalla Mudra to your wallet. All events and registrations are demo data.
        </p>
      </div>

    </div>
  );
}
