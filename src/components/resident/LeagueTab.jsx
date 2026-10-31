import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Trophy,
  Users,
  Award,
  TrendingUp,
  Calendar,
  MapPin,
  Sparkles,
  Flame,
  CheckCircle2
} from 'lucide-react';

export default function LeagueTab() {
  const { league, currentUser } = useApp();

  const userCompany = currentUser?.company || 'Flipkart Tech';

  return (
    <div className="space-y-6 text-left">
      
      {/* Top Banner */}
      <div className="p-6 rounded-3xl bg-[#f1e9dc] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden shadow-sm">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0052cc] dark:text-[#2684ff] font-bold flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-[#0052cc] dark:text-[#2684ff]" />
              Inter-Company Society League
            </span>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#deebff] dark:bg-[#0747a6]/30 text-[#0747a6] dark:text-[#deebff] border border-[#b3d4ff] dark:border-[#0052cc]/40 font-semibold">
              Demo Season 2026
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#23150d] dark:text-[#faf6ee]">
            Bengaluru Tech Derby
          </h2>
          <p className="text-xs sm:text-sm text-[#5c4738] dark:text-[#ddd0be] max-w-xl mt-1">
            Tech employees residing in Bellandur societies represent their company in weekend box cricket, badminton doubles, and chess leagues.
          </p>
        </div>

        {/* User's Team Status */}
        <div className="p-4 rounded-2xl bg-[#faf6ee] dark:bg-[#160e09] border border-[#ddd0be] dark:border-[#38251a] text-left shrink-0 shadow-sm">
          <div className="text-[10px] uppercase font-mono text-[#6b584a] dark:text-[#b4a494]">Your Company Team</div>
          <div className="text-base font-bold text-[#0052cc] dark:text-[#2684ff] font-heading mt-0.5">
            {userCompany}
          </div>
          <div className="text-xs text-[#0747a6] dark:text-[#99c8ff] mt-1 flex items-center gap-1 font-medium">
            <Flame className="w-3.5 h-3.5 text-[#0052cc] dark:text-[#2684ff]" />
            <span>Active in Sobha Carnation Cluster</span>
          </div>
        </div>
      </div>

      {/* Featured Upcoming Match Fixture */}
      <div className="p-5 rounded-2xl bg-[#faf6ee] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] text-left shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono uppercase text-[#0052cc] dark:text-[#2684ff] font-bold">
            Next Feature Fixture
          </span>
          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#f1e9dc] dark:bg-[#160e09] text-[#23150d] dark:text-[#ddd0be] border border-[#ddd0be] dark:border-[#38251a] font-medium">
            Round 3 of 6
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 py-2">
          {/* Team A */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f1e9dc] dark:bg-[#160e09] border border-[#ddd0be] dark:border-[#38251a]">
            <div className="w-10 h-10 rounded-lg bg-[#deebff] dark:bg-[#0747a6]/40 text-[#0052cc] dark:text-[#2684ff] font-bold font-heading flex items-center justify-center border border-[#b3d4ff] dark:border-[#0052cc]/40">
              FL
            </div>
            <div>
              <div className="text-sm font-bold text-[#23150d] dark:text-[#faf6ee]">Flipkart Tech</div>
              <div className="text-[11px] text-[#6b584a] dark:text-[#b4a494]">48 resident players</div>
            </div>
          </div>

          {/* VS Center */}
          <div className="text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-[#f1e9dc] dark:bg-[#160e09] text-xs font-mono font-bold text-[#23150d] dark:text-[#ddd0be] border border-[#ddd0be] dark:border-[#38251a]">
              VS
            </div>
            <div className="text-xs text-[#6b584a] dark:text-[#b4a494] mt-1.5 flex items-center justify-center gap-1 font-medium">
              <Calendar className="w-3.5 h-3.5 text-[#0052cc] dark:text-[#2684ff]" />
              <span>Saturday · 4:00 PM @ Sports Turf</span>
            </div>
          </div>

          {/* Team B */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f1e9dc] dark:bg-[#160e09] border border-[#ddd0be] dark:border-[#38251a]">
            <div className="w-10 h-10 rounded-lg bg-[#deebff] dark:bg-[#0747a6]/40 text-[#0052cc] dark:text-[#2684ff] font-bold font-heading flex items-center justify-center border border-[#b3d4ff] dark:border-[#0052cc]/40">
              SW
            </div>
            <div>
              <div className="text-sm font-bold text-[#23150d] dark:text-[#faf6ee]">Swiggy Labs</div>
              <div className="text-[11px] text-[#6b584a] dark:text-[#b4a494]">31 resident players</div>
            </div>
          </div>
        </div>
      </div>

      {/* LEADERBOARD TABLE */}
      <div className="rounded-2xl bg-[#faf6ee] dark:bg-[#221610] border border-[#ddd0be] dark:border-[#38251a] overflow-hidden shadow-sm">
        <div className="p-4 border-b border-[#ddd0be] dark:border-[#38251a] flex items-center justify-between">
          <h3 className="text-base font-bold font-heading text-[#23150d] dark:text-[#faf6ee]">
            Company Standings
          </h3>
          <span className="text-[11px] font-mono text-[#6b584a] dark:text-[#b4a494]">
            Points earned via match wins & workshop participation
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#23150d] dark:text-[#ddd0be]">
            <thead className="bg-[#f1e9dc] dark:bg-[#160e09] text-[11px] uppercase font-mono text-[#23150d] dark:text-[#b4a494] border-b border-[#ddd0be] dark:border-[#38251a]">
              <tr>
                <th className="py-3 px-4 font-extrabold">Rank</th>
                <th className="py-3 px-4 font-extrabold">Company</th>
                <th className="py-3 px-4 font-extrabold">Points (MM)</th>
                <th className="py-3 px-4 font-extrabold">Active Residents</th>
                <th className="py-3 px-4 font-extrabold">Events Sponsored</th>
                <th className="py-3 px-4 font-extrabold">Win Rate</th>
                <th className="py-3 px-4 font-extrabold">Recent Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ddd0be] dark:divide-[#38251a]">
              {league.map((row) => {
                const isUserCompany =
                  row.company.toLowerCase().includes(userCompany.toLowerCase()) ||
                  userCompany.toLowerCase().includes(row.company.toLowerCase());

                return (
                  <tr
                    key={row.rank}
                    className={`transition-colors ${
                      isUserCompany
                        ? 'bg-[#deebff]/40 dark:bg-[#0747a6]/20 font-bold text-[#23150d] dark:text-[#faf6ee] border-l-4 border-l-[#0052cc] dark:border-l-[#2684ff]'
                        : 'hover:bg-[#f1e9dc]/60 dark:hover:bg-[#2a1b13]'
                    }`}
                  >
                    <td className="py-3.5 px-4 font-mono font-extrabold text-[#23150d] dark:text-[#faf6ee]">
                      #{row.rank}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-[#23150d] dark:text-[#faf6ee]">
                      <div className="flex items-center gap-2">
                        <span>{row.company}</span>
                        {isUserCompany && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#0052cc] text-white font-extrabold shadow-sm">
                            Your Team
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-mono font-extrabold text-[#0052cc] dark:text-[#2684ff]">
                      {row.points.toLocaleString()}
                    </td>
                    <td className="py-3.5 px-4 text-[#23150d] dark:text-[#ddd0be] font-semibold">
                      {row.activeResidents} neighbours
                    </td>
                    <td className="py-3.5 px-4 text-[#23150d] dark:text-[#ddd0be] font-semibold">
                      {row.eventsOrganized || row.eventsSponsored || 0} leagues
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[#0747a6] dark:text-[#2684ff] font-bold">
                      {row.winRate}
                    </td>
                    <td className="py-3.5 px-4 text-[#0052cc] dark:text-[#2684ff] font-mono text-[11px] font-bold">
                      {row.trend}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
