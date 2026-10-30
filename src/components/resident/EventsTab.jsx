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
      <div className="p-6 rounded-2xl bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono uppercase text-[#8a5e18] dark:text-[#ecc26b] font-bold tracking-wider">
              Society Activities & Workshops
            </span>
            <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#ede1cd] dark:bg-[#38281b] text-[#6e5844] dark:text-[#c9b7a3] border border-[#d8c39e] dark:border-[#483a2e]">
              Demo Data
            </span>
          </div>
          <h2 className="text-2xl font-bold font-heading text-[#211710] dark:text-[#f7f2ea]">
            Upcoming Society Events
          </h2>
          <p className="text-xs text-[#574332] dark:text-[#a6917b] mt-0.5 max-w-xl">
            Join weekend workshops and corporate leagues in your clubhouse and terrace. Earn Mohalla Mudra to spend at local shops.
          </p>
        </div>

        {/* User Enrollment Status Card */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f6efe3] dark:bg-[#1c140d] border border-[#ded1be] dark:border-[#36291e] shrink-0">
          <div className="w-9 h-9 rounded-lg bg-[#ede1cd] dark:bg-[#38281b] text-[#8a5e18] dark:text-[#ecc26b] border border-[#d8c39e] dark:border-[#c58c2b]/40 flex items-center justify-center font-bold text-sm">
            {joinedCount}
          </div>
          <div className="text-xs">
            <div className="text-[#211710] dark:text-[#f2ebe1] font-semibold">Events You’re In</div>
            <div className="text-[11px] text-[#725e4c] dark:text-[#8e7a68]">
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
                  ? 'bg-[#c85d2e] text-white font-bold shadow-sm'
                  : 'bg-white dark:bg-[#241a13] text-[#725e4c] dark:text-[#a6917b] hover:text-[#211710] border border-[#ded1be] dark:border-[#3c2f24] hover:bg-[#f6efe3]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-[#826e5a] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search yoga, cricket, art..."
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] text-[#211710] dark:text-[#f7f2ea] placeholder:text-[#826e5a] focus-visible:ring-2 focus-visible:ring-[#c85d2e] focus-visible:outline-none shadow-sm"
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
              className={`rounded-2xl bg-white dark:bg-[#241a13] border transition-all flex flex-col justify-between p-5 relative overflow-hidden shadow-sm ${
                evt.isJoined
                  ? 'border-[#c85d2e] dark:border-[#c58c2b]/60 shadow-[0_4px_20px_rgba(200,93,46,0.12)]'
                  : 'border-[#ded1be] dark:border-[#3c2f24] hover:border-[#b5a085]'
              }`}
            >
              {/* Top Meta Strip */}
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#f6efe3] dark:bg-[#2e2319] text-[#725e4c] dark:text-[#c9b7a3] border border-[#ded1be] dark:border-[#483a2e] font-medium">
                    {evt.category}
                  </span>

                  {/* Reward Pill (Warm Ochre / Brass) */}
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#ede1cd] dark:bg-[#38281b] border border-[#d8c39e] dark:border-[#c58c2b]/40 text-[#8a5e18] dark:text-[#ecc26b] text-xs font-mono font-bold">
                    <Coins className="w-3.5 h-3.5 text-[#b57a1b] dark:text-[#dfaa43]" />
                    <span>+{evt.creditsReward} MM</span>
                  </div>
                </div>

                {/* Event Title */}
                <h3 className="text-base font-bold font-heading text-[#211710] dark:text-[#f7f2ea] leading-snug">
                  {evt.title}
                </h3>

                {/* Venue, Date & Time */}
                <div className="mt-3 space-y-1.5 text-xs text-[#574332] dark:text-[#cfbea5]">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#b57a1b] dark:text-[#dfaa43] shrink-0" />
                    <span>{evt.date} · {evt.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#725e4c] dark:text-[#a6917b]">
                    <MapPin className="w-3.5 h-3.5 text-[#826e5a] shrink-0" />
                    <span>{evt.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#725e4c] dark:text-[#a6917b]">
                    <Briefcase className="w-3.5 h-3.5 text-[#826e5a] shrink-0" />
                    <span>Partner: <strong className="text-[#211710] dark:text-[#ded3c4] font-medium">{evt.sponsoredBy}</strong></span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-3 text-xs text-[#725e4c] dark:text-[#a6917b] leading-relaxed line-clamp-3">
                  {evt.description}
                </p>

                {/* Instructor & Requirements */}
                <div className="mt-3 pt-3 border-t border-[#ede4d6] dark:border-[#36291e] text-[11px] text-[#725e4c] dark:text-[#8e7a68] flex items-center justify-between">
                  <span>Host: {evt.instructor}</span>
                </div>

                {/* Capacity Bar */}
                <div className="mt-3">
                  <div className="flex justify-between text-[10px] text-[#725e4c] dark:text-[#8e7a68] font-mono mb-1">
                    <span>Capacity: {evt.enrolledCount} / {evt.maxSeats} neighbours</span>
                    <span>{capacityPercent}% full</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[#ede1cd] dark:bg-[#1c140d] overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        evt.isJoined ? 'bg-[#c85d2e]' : capacityPercent > 85 ? 'bg-[#dfaa43]' : 'bg-[#b5a085]'
                      }`}
                      style={{ width: `${capacityPercent}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Action Button: Joined State vs Join Event */}
              <div className="mt-5 pt-3 border-t border-[#ede4d6] dark:border-[#36291e]">
                {evt.isJoined ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-xl bg-[#faede6] dark:bg-[#38281b] border border-[#e8c6b5] dark:border-[#c58c2b]/40 text-[#8c3b17] dark:text-[#ecc26b] text-xs">
                      <div className="flex items-center gap-1.5 font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-[#c85d2e] dark:text-[#dfaa43] shrink-0" />
                        <span>You're in</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#8a5e18] dark:text-[#c9b7a3]">
                        Spot reserved
                      </span>
                    </div>
                    <button
                      onClick={() => joinEvent(evt.id)}
                      className="w-full py-1.5 text-[11px] text-[#826e5a] hover:text-[#c85d2e] hover:underline transition-colors font-medium"
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
                        ? 'bg-[#ede4d6] dark:bg-[#2b2118] text-[#826e5a] cursor-not-allowed'
                        : 'bg-[#c85d2e] hover:bg-[#b84f22] text-white shadow-md hover:scale-[1.01]'
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
        <div className="text-center py-12 bg-white dark:bg-[#241a13]/60 rounded-2xl border border-[#ded1be] dark:border-[#3c2f24] shadow-sm">
          <p className="text-sm text-[#725e4c] dark:text-[#a6917b]">No events found matching your filter.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="mt-2 text-xs text-[#c85d2e] font-semibold hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Footer Info */}
      <div className="p-4 rounded-xl bg-white dark:bg-[#241a13]/80 border border-[#ded1be] dark:border-[#3c2f24] text-xs text-[#725e4c] dark:text-[#a6917b] flex items-start gap-2.5 shadow-sm">
        <AlertCircle className="w-4 h-4 text-[#c85d2e] shrink-0 mt-0.5" />
        <p>
          <strong className="text-[#211710] dark:text-[#ded3c4]">How it works:</strong> All workshops are hosted inside your society premises. Joining an event automatically secures your spot and credits Mohalla Mudra to your wallet. All events and registrations are demo data.
        </p>
      </div>

    </div>
  );
}
