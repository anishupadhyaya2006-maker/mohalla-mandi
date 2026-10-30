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
      <div className="p-6 rounded-3xl bg-[#fbf4e8] dark:bg-[#241a13] border border-[#d6be96] dark:border-[#c58c2b]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden shadow-sm">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8a5e18] dark:text-[#ecc26b] font-bold flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-[#b57a1b] dark:text-[#dfaa43]" />
              Inter-Company Society League
            </span>
            <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#ede1cd] dark:bg-[#38281b] text-[#8a5e18] dark:text-[#f5dc9e] border border-[#d8c39e] dark:border-[#c58c2b]/40 font-semibold">
              Demo Season 2026
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#211710] dark:text-[#f7f2ea]">
            Bengaluru Tech Derby
          </h2>
          <p className="text-xs sm:text-sm text-[#574332] dark:text-[#cfbea5] max-w-xl mt-1">
            Tech employees residing in Bellandur societies represent their company in weekend box cricket, badminton doubles, and chess leagues.
          </p>
        </div>

        {/* User's Team Status */}
        <div className="p-4 rounded-2xl bg-white dark:bg-[#1c140d] border border-[#d6be96] dark:border-[#c58c2b]/40 text-left shrink-0 shadow-sm">
          <div className="text-[10px] uppercase font-mono text-[#725e4c] dark:text-[#8e7a68]">Your Company Team</div>
          <div className="text-base font-bold text-[#c85d2e] dark:text-[#ecc26b] font-heading mt-0.5">
            {userCompany}
          </div>
          <div className="text-xs text-[#8a5e18] dark:text-[#dfaa43] mt-1 flex items-center gap-1 font-medium">
            <Flame className="w-3.5 h-3.5 text-[#c85d2e] dark:text-[#dc7545]" />
            <span>Active in Sobha Carnation Cluster</span>
          </div>
        </div>
      </div>

      {/* Featured Upcoming Match Fixture */}
      <div className="p-5 rounded-2xl bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] text-left shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono uppercase text-[#8a5e18] dark:text-[#ecc26b] font-bold">
            Next Feature Fixture
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f6efe3] dark:bg-[#2e2319] text-[#725e4c] dark:text-[#c9b7a3] border border-[#ded1be] dark:border-transparent font-medium">
            Round 3 of 6
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 py-2">
          {/* Team A */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f8f3eb] dark:bg-[#1c140d] border border-[#ded1be] dark:border-[#36291e]">
            <div className="w-10 h-10 rounded-lg bg-[#ede1cd] dark:bg-[#38281b] text-[#8a5e18] dark:text-[#ecc26b] font-bold font-heading flex items-center justify-center border border-[#d8c39e] dark:border-[#c58c2b]/40">
              FL
            </div>
            <div>
              <div className="text-sm font-bold text-[#211710] dark:text-[#f2ebe1]">Flipkart Tech</div>
              <div className="text-[11px] text-[#725e4c] dark:text-[#8e7a68]">48 resident players</div>
            </div>
          </div>

          {/* VS Center */}
          <div className="text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-[#f4ede0] dark:bg-[#2e2319] text-xs font-mono font-bold text-[#574332] dark:text-[#cfbea5] border border-[#ded1be] dark:border-[#483a2e]">
              VS
            </div>
            <div className="text-xs text-[#725e4c] dark:text-[#a6917b] mt-1.5 flex items-center justify-center gap-1 font-medium">
              <Calendar className="w-3.5 h-3.5 text-[#b57a1b] dark:text-[#dfaa43]" />
              <span>Saturday · 4:00 PM @ Sports Turf</span>
            </div>
          </div>

          {/* Team B */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f8f3eb] dark:bg-[#1c140d] border border-[#ded1be] dark:border-[#36291e]">
            <div className="w-10 h-10 rounded-lg bg-[#faede6] dark:bg-[#3d2316] text-[#c85d2e] dark:text-[#f3ba9e] font-bold font-heading flex items-center justify-center border border-[#e8c6b5] dark:border-[#c85d2e]/40">
              SW
            </div>
            <div>
              <div className="text-sm font-bold text-[#211710] dark:text-[#f2ebe1]">Swiggy Labs</div>
              <div className="text-[11px] text-[#725e4c] dark:text-[#8e7a68]">31 resident players</div>
            </div>
          </div>
        </div>
      </div>

      {/* LEADERBOARD TABLE */}
      <div className="rounded-2xl bg-white dark:bg-[#241a13] border border-[#ded1be] dark:border-[#3c2f24] overflow-hidden shadow-sm">
        <div className="p-4 border-b border-[#ede4d6] dark:border-[#36291e] flex items-center justify-between">
          <h3 className="text-base font-bold font-heading text-[#211710] dark:text-[#f7f2ea]">
            Company Standings
          </h3>
          <span className="text-[11px] font-mono text-[#725e4c] dark:text-[#8e7a68]">
            Points earned via match wins & workshop participation
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#574332] dark:text-[#cfbea5]">
            <thead className="bg-[#f6efe3] dark:bg-[#1c140d] text-[11px] uppercase font-mono text-[#725e4c] dark:text-[#8e7a68] border-b border-[#ded1be] dark:border-[#36291e]">
              <tr>
                <th className="py-3 px-4">Rank</th>
                <th className="py-3 px-4">Company</th>
                <th className="py-3 px-4">Points (MM)</th>
                <th className="py-3 px-4">Active Residents</th>
                <th className="py-3 px-4">Events Sponsored</th>
                <th className="py-3 px-4">Win Rate</th>
                <th className="py-3 px-4">Recent Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ede4d6] dark:divide-[#36291e]">
              {league.map((row) => {
                const isUserCompany =
                  row.company.toLowerCase().includes(userCompany.toLowerCase()) ||
                  userCompany.toLowerCase().includes(row.company.toLowerCase());

                return (
                  <tr
                    key={row.rank}
                    className={`transition-colors ${
                      isUserCompany
                        ? 'bg-[#fef7ee] dark:bg-[#38281b]/80 font-medium text-[#211710] dark:text-[#f5dc9e] border-l-4 border-l-[#c85d2e] dark:border-l-[#dfaa43]'
                        : 'hover:bg-[#fbf6ee] dark:hover:bg-[#2b2118]'
                    }`}
                  >
                    <td className="py-3.5 px-4 font-mono font-bold">
                      {row.rank === 1 ? (
                        <span className="inline-flex items-center gap-1 text-[#b57a1b] dark:text-[#ecc26b]">
                          <Trophy className="w-3.5 h-3.5 text-[#b57a1b] dark:text-[#dfaa43]" /> 1
                        </span>
                      ) : (
                        `#${row.rank}`
                      )}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[#211710] dark:text-[#f7f2ea]">{row.company}</span>
                        {isUserCompany && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#c85d2e] text-white font-bold">
                            Your Team
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#8a5e18] dark:text-[#f5dc9e]">
                      {row.points} MM
                    </td>
                    <td className="py-3.5 px-4 text-[#574332] dark:text-[#ded3c4]">
                      {row.activeResidents} neighbours
                    </td>
                    <td className="py-3.5 px-4 text-[#574332] dark:text-[#ded3c4]">
                      {row.eventsOrganized}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[#574332] dark:text-[#ded3c4]">
                      {row.winRate}
                    </td>
                    <td className="py-3.5 px-4 text-[11px] text-[#8a5e18] dark:text-[#ecc26b] font-mono font-semibold">
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
