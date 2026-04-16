import StatusBadge from '../ui/StatusBadge';

export default function FriendInfoCard({ friend }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
      <img
        src={friend.picture}
        alt={friend.name}
        className="mx-auto h-25 w-24 rounded-full object-cover ring-4 ring-slate-100"
      />

      <h1 className="mt-4 text-2xl font-bold text-slate-800">{friend.name}</h1>

      <div className="mt-3">
        <StatusBadge status={friend.status} />
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
        {friend.tags.map((tag) => (
          <span
            key={`${friend.id}-${tag}`}
            className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-5 text-sm italic leading-6 text-slate-500">
        “{friend.bio}”
      </p>

      <p className="mt-2 text-sm text-slate-500">
        <span className="font-medium text-slate-700">Email:</span>{' '}
        <a href={`mailto:${friend.email}`} className="hover:text-[#225c49]">
          {friend.email}
        </a>
      </p>
    </div>
  );
}