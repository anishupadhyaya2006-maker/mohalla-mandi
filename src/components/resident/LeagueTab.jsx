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
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-amber-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5" />
              Inter-Company Society League
            </span>
            <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300">
              Demo Season 2026
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-100">
            Bengaluru Tech Derby
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-1">
            Tech employees residing in Bellandur societies represent their company in weekend box cricket, badminton doubles, and chess leagues.
          </p>
        </div>

        {/* User's Team Status */}
        <div className="p-4 rounded-2xl bg-slate-950 border border-amber-500/40 text-left shrink-0">
          <div className="text-[10px] uppercase font-mono text-slate-400">Your Company Team</div>
          <div className="text-base font-bold text-amber-300 font-heading mt-0.5">
            {userCompany}
          </div>
          <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Active in Sobha Carnation Cluster</span>
          </div>
        </div>
      </div>

      {/* Featured Upcoming Match Fixture */}
      <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-left">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono uppercase text-amber-400 font-semibold">
            Next Feature Fixture
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
            Round 3 of 6
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 py-2">
          {/* Team A */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-300 font-bold font-heading flex items-center justify-center">
              FL
            </div>
            <div>
              <div className="text-sm font-bold text-slate-100">Flipkart Tech</div>
              <div className="text-[11px] text-slate-400">48 resident players</div>
            </div>
          </div>

          {/* VS Center */}
          <div className="text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-slate-800 text-xs font-mono font-bold text-slate-300">
              VS
            </div>
            <div className="text-xs text-slate-400 mt-1.5 flex items-center justify-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Saturday · 4:00 PM @ Sports Turf</span>
            </div>
          </div>

          {/* Team B */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-orange-500/20 text-orange-300 font-bold font-heading flex items-center justify-center">
              SW
            </div>
            <div>
              <div className="text-sm font-bold text-slate-100">Swiggy Labs</div>
              <div className="text-[11px] text-slate-400">31 resident players</div>
            </div>
          </div>
        </div>
      </div>

      {/* LEADERBOARD TABLE */}
      <div className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-base font-bold font-heading text-slate-100">
            Company Standings
          </h3>
          <span className="text-[11px] font-mono text-slate-400">
            Points earned via match wins & workshop participation
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-[11px] uppercase font-mono text-slate-400 border-b border-slate-800">
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
            <tbody className="divide-y divide-slate-800">
              {league.map((row) => {
                const isUserCompany =
                  row.company.toLowerCase().includes(userCompany.toLowerCase()) ||
                  userCompany.toLowerCase().includes(row.company.toLowerCase());

                return (
                  <tr
                    key={row.rank}
                    className={`transition-colors ${
                      isUserCompany
                        ? 'bg-amber-500/10 font-medium text-amber-200 border-l-4 border-l-amber-400'
                        : 'hover:bg-slate-800/40'
                    }`}
                  >
                    <td className="py-3.5 px-4 font-mono font-bold">
                      {row.rank === 1 ? (
                        <span className="inline-flex items-center gap-1 text-amber-400">
                          <Trophy className="w-3.5 h-3.5" /> 1
                        </span>
                      ) : (
                        `#${row.rank}`
                      )}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-100">{row.company}</span>
                        {isUserCompany && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-bold">
                            Your Team
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-emerald-400">
                      {row.points} MM
                    </td>
                    <td className="py-3.5 px-4 text-slate-300">
                      {row.activeResidents} neighbours
                    </td>
                    <td className="py-3.5 px-4 text-slate-300">
                      {row.eventsOrganized}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-slate-300">
                      {row.winRate}
                    </td>
                    <td className="py-3.5 px-4 text-[11px] text-emerald-400/90 font-mono">
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
