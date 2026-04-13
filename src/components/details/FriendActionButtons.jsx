import {
  HiOutlineArchive,
  HiOutlineClock,
  HiOutlineTrash,
} from 'react-icons/hi';

const actionButtons = [
  {
    label: 'Snooze 2 Weeks',
    icon: HiOutlineClock,
    className: 'text-slate-700',
  },
  {
    label: 'Archive',
    icon: HiOutlineArchive,
    className: 'text-slate-700',
  },
  {
    label: 'Delete',
    icon: HiOutlineTrash,
    className: 'text-red-500',
  },
];

export default function FriendActionButtons() {
  return (
    <div className="mt-4 space-y-3">
      {actionButtons.map(({ label, icon: Icon, className }) => (
        <button
          key={label}
          type="button"
          className={`flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium shadow-sm transition hover:bg-slate-50 ${className}`}
        >
          <Icon className="text-lg" />
          {label}
        </button>
      ))}
    </div>
  );
}