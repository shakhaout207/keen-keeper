import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const COLORS = ['#7C3AED', '#244B43', '#3BA76D'];

export default function AnalyticsChart({ counts }) {
  const data = [
    { name: 'Text', value: counts.text },
    { name: 'Call', value: counts.call },
    { name: 'Video', value: counts.video },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-[#225c49]">
        By Interaction Type
      </h3>

      {total === 0 ? (
        <div className="flex h-[320px] items-center justify-center text-slate-500">
          No interaction data available yet.
        </div>
      ) : (
        <div className="mt-4 h-[320px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={6}
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={entry.name}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
              <Legend verticalAlign="bottom" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}