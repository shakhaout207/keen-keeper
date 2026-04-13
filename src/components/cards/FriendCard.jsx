import { Link } from 'react-router-dom';
import StatusBadge from '../ui/StatusBadge';

export default function FriendCard({ friend }) {
  return (
    <Link
      to={`/friends/${friend.id}`}
      className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <img
        src={friend.picture}
        alt={friend.name}
        className="mx-auto h-20 w-20 rounded-full object-cover ring-4 ring-slate-100"
      />

      <h3 className="mt-4 text-lg font-bold text-slate-800">{friend.name}</h3>

      <p className="mt-1 text-sm text-slate-400">{friend.days_since_contact}d ago</p>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        {friend.tags.map((tag) => (
          <span
            key={`${friend.id}-${tag}`}
            className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4">
        <StatusBadge status={friend.status} />
      </div>
    </Link>
  );
}