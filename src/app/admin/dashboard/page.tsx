import { db } from "@/lib/db";
import { tests, participantStats, resultTypes } from "@/lib/db/schema";
import { desc, sql, eq } from "drizzle-orm";
import { Users, FileText, TrendingUp, Activity, PieChart as PieIcon } from "lucide-react";
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
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <Activity className="w-8 h-8 text-purple-600" />
          Dashboard
        </h1>
        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          Admin Mode
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
            <Users size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Participants</p>
            <h3 className="text-2xl font-bold text-gray-900">
              {totalParticipants.toLocaleString()}
            </h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-3 bg-purple-100 rounded-xl text-purple-600">
            <FileText size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Active Tests</p>
            <h3 className="text-2xl font-bold text-gray-900">
              {totalTests}
            </h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-3 bg-amber-100 rounded-xl text-amber-600">
            <TrendingUp size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Top Performing</p>
            <h3 className="text-lg font-bold text-gray-900 truncate max-w-[200px]" title={topTest?.title}>
              {topTest?.title || "N/A"}
            </h3>
            <p className="text-xs text-amber-600">
              {topTest?.totalParticipants?.toLocaleString() || 0} participants
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Popularity Ranking</h3>
          <div className="h-[300px] w-full">
            <TestBarChart data={chartData} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.length === 0 ? (
              <p className="text-center text-gray-400 py-10">No activity yet</p>
            ) : (
              recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        {activity.testTitle || "Unknown Test"}
                      </p>
                      <p className="text-xs text-gray-400">
                        {new Date(activity.participatedAt || 0).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-gray-400">
                    {activity.id.split('-').pop()}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <PieIcon className="w-6 h-6 text-purple-600" />
          Result Distribution by Test
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resultsByTest.map((test, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-bold text-gray-800 line-clamp-1" title={test.testTitle}>
                  {test.testTitle}
                </h4>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500">
                  Total: {test.totalCount}
                </span>
              </div>
              
              <ResultPieChart data={test.data} />
              
              <div className="mt-4 space-y-2">
                {test.data.map((result, rIdx) => (
                  <div key={rIdx} className="flex justify-between items-center text-xs">
                    <span className="text-gray-600 truncate max-w-[120px]" title={result.name}>
                      {result.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-purple-500 rounded-full" 
                          style={{ width: `${result.percentage}%` }}
                        />
                      </div>
                      <span className="font-medium text-gray-700 w-8 text-right">
                        {result.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
