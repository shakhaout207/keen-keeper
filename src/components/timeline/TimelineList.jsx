import callIcon from '../../assets/call.png';
import textIcon from '../../assets/text.png';
import videoIcon from '../../assets/video.png';
import { formatDisplayDate } from '../../utils/helpers';

const icons = {
  call: callIcon,
  text: textIcon,
  video: videoIcon,
};

export default function TimelineList({ entries }) {
  if (!entries.length) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500 shadow-sm">
        No timeline entries found for this filter.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {entries.map((entry) => (
        <div
          key={entry.id}
          className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-50">
            <img
              src={icons[entry.type]}
              alt={entry.type}
              className="h-8 w-8 object-contain"
            />
          </div>

          <div>
            <h3 className="text-base font-semibold text-[#225c49]">
              {entry.title}
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              {formatDisplayDate(entry.dateISO)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}