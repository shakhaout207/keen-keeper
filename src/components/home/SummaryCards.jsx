const cards = [
  { key: 'totalFriends', label: 'Total Friends' },
  { key: 'onTrack', label: 'On Track' },
  { key: 'needAttention', label: 'Need Attention' },
  { key: 'interactionsThisMonth', label: 'Interactions This Month' },
];

export default function SummaryCards({ stats }) {
  return (
    <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.key}
          className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
        >
          <h3 className="text-3xl font-bold text-[#225c49]">
            {stats[card.key]}
          </h3>
          <p className="mt-2 text-sm text-slate-500">{card.label}</p>
        </div>
      ))}
    </section>
  );
}