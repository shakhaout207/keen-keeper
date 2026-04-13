export default function TimelineFilter({ value, onChange }) {
  return (
    <div className="mb-6 max-w-xs">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 outline-none transition focus:border-[#225c49]"
      >
        <option value="all">Filter timeline</option>
        <option value="call">Call</option>
        <option value="text">Text</option>
        <option value="video">Video</option>
      </select>
    </div>
  );
}