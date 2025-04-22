import React from 'react';
import { 
  AreaChart, Area, BarChart, Bar, PieChart, Pie, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts';
import { Brain, Briefcase, GraduationCap, TrendingUp } from 'lucide-react';

const skillProgressData = [
  { name: 'JavaScript', value: 85 },
  { name: 'React', value: 75 },
  { name: 'Node.js', value: 70 },
  { name: 'Python', value: 65 },
  { name: 'SQL', value: 80 },
];

const opportunityTrendData = [
  { month: 'Jan', opportunities: 12 },
  { month: 'Feb', opportunities: 19 },
  { month: 'Mar', opportunities: 15 },
  { month: 'Apr', opportunities: 25 },
  { month: 'May', opportunities: 32 },
  { month: 'Jun', opportunities: 28 },
];

const skillCategoryData = [
  { name: 'Frontend', value: 35 },
  { name: 'Backend', value: 25 },
  { name: 'DevOps', value: 20 },
  { name: 'Data Science', value: 20 },
];

const COLORS = ['#3B82F6', '#22C55E', '#A855F7', '#F59E0B'];

const StatCard = ({ icon: Icon, title, value, trend }: { icon: any, title: string, value: string, trend?: string }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{title}</p>
        <h3 className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">{value}</h3>
        {trend && (
          <p className="text-green-500 text-sm font-medium mt-1">
            <TrendingUp className="inline-block h-4 w-4 mr-1" />
            {trend}
          </p>
        )}
      </div>
      <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
        <Icon className="h-6 w-6 text-primary-500" />
      </div>
    </div>
  </div>
);

export function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Brain}
          title="Skills Mastered"
          value="24"
          trend="+3 this month"
        />
        <StatCard
          icon={Briefcase}
          title="Job Matches"
          value="156"
          trend="+12% vs last month"
        />
        <StatCard
          icon={GraduationCap}
          title="Learning Hours"
          value="48h"
          trend="+5h this week"
        />
        <StatCard
          icon={TrendingUp}
          title="Career Score"
          value="85/100"
          trend="+5 points"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skill Progress */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Skill Progress</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={skillProgressData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="name" type="category" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(17, 24, 39, 0.8)',
                    border: 'none',
                    borderRadius: '0.5rem',
                    color: '#fff',
                  }}
                />
                <Bar dataKey="value" fill="#4F46E5" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Opportunity Trends */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Opportunity Trends</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={opportunityTrendData}>
                <defs>
                  <linearGradient id="opportunityGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(17, 24, 39, 0.8)',
                    border: 'none',
                    borderRadius: '0.5rem',
                    color: '#fff',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="opportunities"
                  stroke="#4F46E5"
                  fillOpacity={1}
                  fill="url(#opportunityGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Skill Distribution */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Skill Distribution</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={skillCategoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {skillCategoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(17, 24, 39, 0.8)',
                    border: 'none',
                    borderRadius: '0.5rem',
                    color: '#fff',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {skillCategoryData.map((item, index) => (
              <div key={item.name} className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span className="text-sm text-gray-600 dark:text-gray-300">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Progress */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Learning Progress</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={opportunityTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(17, 24, 39, 0.8)',
                    border: 'none',
                    borderRadius: '0.5rem',
                    color: '#fff',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="opportunities"
                  stroke="#22C55E"
                  strokeWidth={2}
                  dot={{ fill: '#22C55E' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}