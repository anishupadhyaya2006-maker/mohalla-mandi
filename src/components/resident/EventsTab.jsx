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
      <div className="p-6 rounded-2xl bg-white dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono uppercase text-[#0052cc] dark:text-[#2684ff] font-bold tracking-wider">
              Society Activities & Workshops
            </span>
            <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#deebff] dark:bg-[#0c2340] text-[#0052cc] dark:text-[#2684ff] border border-[#0052cc]/30">
              Demo Data
            </span>
          </div>
          <h2 className="text-2xl font-bold font-heading text-[#23150d] dark:text-[#faf6ee]">
            Upcoming Society Events
          </h2>
          <p className="text-xs text-[#4a3528] dark:text-[#ddd0be] mt-0.5 max-w-xl">
            Join weekend workshops and corporate leagues in your clubhouse and terrace. Earn Mohalla Mudra to spend at local shops.
          </p>
        </div>

        {/* User Enrollment Status Card */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f1e9dc] dark:bg-[#160e09] border border-[#ddd0be] dark:border-[#38251a] shrink-0">
          <div className="w-9 h-9 rounded-lg bg-[#deebff] dark:bg-[#0c2340] text-[#0052cc] dark:text-[#2684ff] border border-[#0052cc]/40 flex items-center justify-center font-bold text-sm">
            {joinedCount}
          </div>
          <div className="text-xs">
            <div className="text-[#23150d] dark:text-[#faf6ee] font-semibold">Events You’re In</div>
            <div className="text-[11px] text-[#755e4e] dark:text-[#9c8574]">
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
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#0052cc] text-white shadow-sm'
                  : 'bg-white dark:bg-[#221610] text-[#23150d] dark:text-[#ddd0be] hover:text-[#0052cc] border border-[#ddd0be] dark:border-[#38251a] hover:bg-[#f1e9dc]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-[#23150d] dark:text-[#ddd0be] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search yoga, cricket, art..."
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg bg-white dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] text-[#23150d] dark:text-[#faf6ee] placeholder:text-[#755e4e] focus-visible:ring-2 focus-visible:ring-[#0052cc] focus-visible:outline-none shadow-sm font-medium"
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
              className={`rounded-2xl bg-white dark:bg-[#221610] border transition-all flex flex-col justify-between p-5 relative overflow-hidden shadow-sm ${
                evt.isJoined
                  ? 'border-2 border-[#0052cc] dark:border-[#2684ff]/70 shadow-[0_4px_20px_rgba(0,82,204,0.15)]'
                  : 'border-[#ddd0be] dark:border-[#38251a] hover:border-[#0052cc]'
              }`}
            >
              {/* Top Meta Strip */}
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#f1e9dc] dark:bg-[#2c1d15] text-[#23150d] dark:text-[#ddd0be] border border-[#ddd0be] dark:border-[#38251a] font-bold">
                    {evt.category}
                  </span>

                  {/* Reward Pill (Deep Atlassian) */}
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#deebff] dark:bg-[#0c2340] border border-[#0052cc]/40 text-[#0052cc] dark:text-[#2684ff] text-xs font-mono font-extrabold shadow-xs">
                    <Coins className="w-3.5 h-3.5 text-[#0052cc] dark:text-[#2684ff]" />
                    <span>+{evt.creditsReward} MM</span>
                  </div>
                </div>

                {/* Event Title */}
                <h3 className="text-base font-extrabold font-heading text-[#23150d] dark:text-[#faf6ee] leading-snug">
                  {evt.title}
                </h3>

                {/* Venue, Date & Time */}
                <div className="mt-3 space-y-1.5 text-xs text-[#23150d] dark:text-[#ddd0be] font-semibold">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#0052cc] dark:text-[#2684ff] shrink-0" />
                    <span>{evt.date} · {evt.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#4a3528] dark:text-[#ddd0be]">
                    <MapPin className="w-3.5 h-3.5 text-[#0052cc] dark:text-[#2684ff] shrink-0" />
                    <span>{evt.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#4a3528] dark:text-[#ddd0be]">
                    <Briefcase className="w-3.5 h-3.5 text-[#0052cc] dark:text-[#2684ff] shrink-0" />
                    <span>Partner: <strong className="text-[#23150d] dark:text-[#faf6ee] font-bold">{evt.sponsoredBy}</strong></span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-3 text-xs text-[#4a3528] dark:text-[#ddd0be] leading-relaxed font-medium line-clamp-3">
                  {evt.description}
                </p>

                {/* Instructor & Requirements */}
                <div className="mt-3 pt-3 border-t border-[#f1e9dc] dark:border-[#38251a] text-[11px] text-[#23150d] dark:text-[#ddd0be] font-bold flex items-center justify-between">
                  <span>Host: {evt.instructor}</span>
                </div>

                {/* Capacity Bar */}
                <div className="mt-3">
                  <div className="flex justify-between text-[10px] text-[#4a3528] dark:text-[#ddd0be] font-mono mb-1 font-bold">
                    <span>Capacity: {evt.enrolledCount} / {evt.maxSeats} neighbours</span>
                    <span>{capacityPercent}% full</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#f1e9dc] dark:bg-[#160e09] overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        evt.isJoined ? 'bg-[#0052cc]' : capacityPercent > 85 ? 'bg-[#0747a6]' : 'bg-[#c4b49f]'
                      }`}
                      style={{ width: `${capacityPercent}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Action Button: Joined State vs Join Event */}
              <div className="mt-5 pt-3 border-t border-[#f1e9dc] dark:border-[#38251a]">
                {evt.isJoined ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-xl bg-[#deebff] dark:bg-[#0c2340] border border-[#0052cc]/40 text-[#0052cc] dark:text-[#2684ff] text-xs">
                      <div className="flex items-center gap-1.5 font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-[#0052cc] dark:text-[#2684ff] shrink-0" />
                        <span>You're in</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#0747a6] dark:text-[#4c9aff]">
                        Spot reserved
                      </span>
                    </div>
                    <button
                      onClick={() => joinEvent(evt.id)}
                      className="w-full py-1.5 text-[11px] text-[#755e4e] hover:text-[#0052cc] hover:underline transition-colors font-medium"
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
                        ? 'bg-[#f1e9dc] dark:bg-[#2c1d15] text-[#755e4e] cursor-not-allowed'
                        : 'bg-[#0052cc] hover:bg-[#0747a6] text-white shadow-md hover:scale-[1.01]'
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
        <div className="text-center py-12 bg-white dark:bg-[#221610]/60 rounded-2xl border border-[#ddd0be] dark:border-[#38251a] shadow-sm">
          <p className="text-sm text-[#755e4e] dark:text-[#ddd0be]">No events found matching your filter.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="mt-2 text-xs text-[#0052cc] font-semibold hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Footer Info */}
      <div className="p-4 rounded-xl bg-white dark:bg-[#221610]/80 border border-[#ddd0be] dark:border-[#38251a] text-xs text-[#4a3528] dark:text-[#ddd0be] flex items-start gap-2.5 shadow-sm">
        <AlertCircle className="w-4 h-4 text-[#0052cc] shrink-0 mt-0.5" />
        <p>
          <strong className="text-[#23150d] dark:text-[#faf6ee]">How it works:</strong> All workshops are hosted inside your society premises. Joining an event automatically secures your spot and credits Mohalla Mudra to your wallet. All events and registrations are demo data.
        </p>
      </div>

    </div>
  );
}
