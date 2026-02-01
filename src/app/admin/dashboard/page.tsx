import { db } from "@/lib/db";
import { tests, participantStats, resultTypes } from "@/lib/db/schema";
import { desc, sql } from "drizzle-orm";
import {
  Users,
  FileText,
  TrendingUp,
  PieChart as PieIcon,
  Search,
  CheckCircle,
  Clock
} from "lucide-react";
import TestBarChart from "@/components/admin/TestBarChart";
import ResultPieChart from "@/components/admin/ResultPieChart";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const allTests = await db.select().from(tests).orderBy(desc(tests.totalParticipants));
  const totalTests = allTests.length;
  const totalParticipants = allTests.reduce((acc, t) => acc + (t.totalParticipants || 0), 0);
  const topTest = allTests[0];

  const chartData = allTests.map(t => ({
    name: t.title,
    participants: t.totalParticipants || 0,
    shortName: t.title.split(" ")[0]
  }));

  const recentActivity = await db
    .select({
      id: participantStats.id,
      testId: participantStats.testId,
      resultTypeId: participantStats.resultTypeId,
      participatedAt: participantStats.participatedAt,
      testTitle: tests.title,
    })
    .from(participantStats)
    .leftJoin(tests, sql`${participantStats.testId} = ${tests.id}`)
    .orderBy(desc(participantStats.participatedAt))
    .limit(10);

  const allResults = await db.select().from(resultTypes);

  const resultsByTest = allTests.map(test => {
    const results = allResults.filter(r => r.testId === test.id);
    const totalCount = results.reduce((sum, r) => sum + (r.count || 0), 0);

    return {
      testTitle: test.title,
      totalCount,
      data: results.map(r => ({
        name: r.title.split(" ")[0],
        type: r.type,
        value: r.count || 0,
        percentage: totalCount > 0 ? Math.round(((r.count || 0) / totalCount) * 100) : 0
      }))
    };
  });

  return (
    <div className="flex h-screen bg-[#F3F4F6] font-[family-name:var(--font-manrope)] overflow-hidden">
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-8 z-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">Q</div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mr-8">Quiz Lab</span>
            <h1 className="text-lg font-bold text-gray-800 border-l border-gray-300 pl-6">Dashboard Overview</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search analytics..."
                className="pl-10 pr-4 py-2 bg-gray-100 border-none rounded-full text-sm w-64 focus:ring-2 focus:ring-purple-200 focus:bg-white transition-all outline-none"
              />
            </div>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <div className="flex flex-col items-end">
                <p className="text-sm font-bold text-gray-900 leading-none">Admin User</p>
                <p className="text-xs text-gray-500 leading-none mt-1">Super Admin</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-[#F3F4F6]">
          <div className="max-w-[1600px] mx-auto p-8 pb-20 w-full space-y-8">
            {/* Key Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-panel p-6 rounded-2xl border border-white/50 shadow-sm bg-gradient-to-br from-blue-50/50 to-white/50 relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute right-0 top-0 p-4 opacity-10 transform scale-150 group-hover:scale-125 transition-transform">
                  <Users size={120} />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                    <Users size={24} />
                  </div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Total Participants</p>
                  <h3 className="text-3xl font-extrabold text-gray-800">{totalParticipants.toLocaleString()}</h3>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/50 shadow-sm bg-gradient-to-br from-purple-50/50 to-white/50 relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute right-0 top-0 p-4 opacity-10 transform scale-150 group-hover:scale-125 transition-transform">
                  <FileText size={120} />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                    <FileText size={24} />
                  </div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Active Tests</p>
                  <h3 className="text-3xl font-extrabold text-gray-800">{totalTests}</h3>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/50 shadow-sm bg-gradient-to-br from-amber-50/50 to-white/50 relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute right-0 top-0 p-4 opacity-10 transform scale-150 group-hover:scale-125 transition-transform">
                  <TrendingUp size={120} />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 mb-4">
                    <TrendingUp size={24} />
                  </div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Top Performing</p>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-gray-800 truncate" title={topTest?.title}>{topTest?.title || "N/A"}</h3>
                    <span className="text-xs text-amber-600 font-medium bg-amber-50 px-2 py-0.5 rounded-full w-fit mt-1">
                      {topTest?.totalParticipants?.toLocaleString() || 0} participants
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Charts & Activity Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Popularity Ranking Chart */}
              <div className="lg:col-span-2 glass-panel bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-800">Popularity Ranking</h3>
                  <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">View detailed report</button>
                </div>
                <div className="h-[500px] w-full">
                  <TestBarChart data={chartData} />
                </div>
              </div>

              {/* Recent Activity Log */}
              <div className="glass-panel bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
                <h3 className="text-lg font-bold text-gray-800 mb-6">Recent Activity</h3>
                <div className="flex-1 overflow-y-auto space-y-4 pr-2 max-h-[320px] custom-scrollbar">
                  {recentActivity.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-gray-400 py-8">
                      <Clock className="mb-2 opacity-20" size={32} />
                      <p className="text-sm">No recent activity</p>
                    </div>
                  ) : (
                    recentActivity.map((activity, i) => (
                      <div key={activity.id} className="flex items-start gap-3 pb-3 border-b border-gray-50 last:border-0 last:pb-0 animate-slide-up" style={{ animationDelay: `${i * 0.05}s` }}>
                        <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle size={14} className="text-green-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-800 truncate">
                            New participation
                          </p>
                          <p className="text-xs text-gray-500 line-clamp-1 mb-1">
                            Completed <span className="font-semibold text-gray-700">{activity.testTitle || "Unknown Test"}</span>
                          </p>
                          <span className="text-xs text-gray-400 block">
                            {new Date(activity.participatedAt || 0).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Result Distribution Grid */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <PieIcon className="w-5 h-5 text-purple-500" />
                Result Distribution Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {resultsByTest.map((test, idx) => (
                  <div key={idx} className="glass-card bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-bold text-sm text-gray-800 line-clamp-2 md:h-10 leading-snug" title={test.testTitle}>
                        {test.testTitle}
                      </h4>
                      <span className="flex-shrink-0 text-[10px] font-bold bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                        {test.totalCount} total
                      </span>
                    </div>

                    <div className="h-40 w-full relative">
                      <ResultPieChart data={test.data} />
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-50 space-y-1.5 h-32 overflow-y-auto custom-scrollbar">
                      {test.data.map((result, rIdx) => (
                        <div key={rIdx} className="flex justify-between items-center text-[11px] group-hover:bg-gray-50/50 p-1 rounded transition-colors">
                          <div className="flex items-center gap-2 min-w-0 flex-1">
                            <div className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></div>
                            <span className="text-gray-600 truncate" title={result.name}>
                              {result.name}
                            </span>
                          </div>
                          <span className="font-semibold text-gray-700">
                            {result.percentage}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
