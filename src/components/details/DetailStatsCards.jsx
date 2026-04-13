import { formatDisplayDate } from '../../utils/helpers';

export default function DetailStatsCards({ friend }) {
  const stats = [
    {
      label: 'Days Since Contact',
      value: friend.days_since_contact,
    },
    {
      label: 'Goal (Days)',
      value: friend.goal,
    },
    {
      label: 'Next Due',
      value: formatDisplayDate(friend.next_due_date),
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
        >
          <h3 className="text-3xl font-bold text-[#225c49]">{item.value}</h3>
          <p className="mt-2 text-sm text-slate-500">{item.label}</p>
        </div>
      ))}
    </div>
  );
}