export default function RelationshipGoalCard({ goal }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-[#225c49]">Relationship Goal</h3>
          <p className="mt-3 text-slate-600">
            Connect every <span className="font-semibold text-slate-800">{goal} days</span>
          </p>
        </div>

        <button
          type="button"
          className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
        >
          Edit
        </button>
      </div>
    </div>
  );
}
