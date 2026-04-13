export const statusLabels = {
  overdue: 'Overdue',
  'almost due': 'Almost Due',
  'on-track': 'On Track',
};

export const statusStyles = {
  overdue: 'bg-red-100 text-red-600',
  'almost due': 'bg-amber-100 text-amber-700',
  'on-track': 'bg-emerald-100 text-emerald-700',
};

export function formatDisplayDate(value) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value));
}

export function calculateHomeStats(friends, timelineEntries) {
  const totalFriends = friends.length;
  const onTrack = friends.filter((friend) => friend.status === 'on-track').length;
  const needAttention = friends.filter(
    (friend) => friend.status === 'overdue' || friend.status === 'almost due'
  ).length;

  const now = new Date();
  const interactionsThisMonth = timelineEntries.filter((entry) => {
    const date = new Date(entry.dateISO);
    return (
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear()
    );
  }).length;

  return {
    totalFriends,
    onTrack,
    needAttention,
    interactionsThisMonth,
  };
}

export function getInteractionCounts(entries) {
  return entries.reduce(
    (acc, entry) => {
      if (entry.type === 'call') acc.call += 1;
      if (entry.type === 'text') acc.text += 1;
      if (entry.type === 'video') acc.video += 1;
      return acc;
    },
    { call: 0, text: 0, video: 0 }
  );
}