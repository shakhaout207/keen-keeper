import callIcon from '../../assets/call.png';
import textIcon from '../../assets/text.png';
import videoIcon from '../../assets/video.png';

const actions = [
  { type: 'call', label: 'Call', icon: callIcon },
  { type: 'text', label: 'Text', icon: textIcon },
  { type: 'video', label: 'Video', icon: videoIcon },
];

export default function QuickCheckInCard({ onAction }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-[#225c49]">Quick Check-In</h3>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {actions.map((action) => (
          <button
            key={action.type}
            type="button"
            onClick={() => onAction(action.type)}
            className="flex flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-6 transition hover:border-[#225c49] hover:bg-white"
          >
            <img
              src={action.icon}
              alt={action.label}
              className="h-9 w-9 object-contain"
            />
            <span className="text-base font-medium text-slate-700">
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}