const STORAGE_KEY = 'keenkeeper_timeline';

function createSeedTimeline() {
  const today = new Date();

  const buildDate = (daysAgo) => {
    const date = new Date(today);
    date.setDate(today.getDate() - daysAgo);
    return date.toISOString();
  };

  return [
    {
      id: 'seed-1',
      type: 'call',
      title: 'Call with Emma Wilson',
      dateISO: buildDate(1),
    },
    {
      id: 'seed-2',
      type: 'text',
      title: 'Text with Lisa Nakamura',
      dateISO: buildDate(2),
    },
    {
      id: 'seed-3',
      type: 'video',
      title: 'Video with James Wright',
      dateISO: buildDate(4),
    },
    {
      id: 'seed-4',
      type: 'call',
      title: 'Call with David Kim',
      dateISO: buildDate(6),
    },
    {
      id: 'seed-5',
      type: 'text',
      title: 'Text with Sophia Turner',
      dateISO: buildDate(8),
    },
    {
      id: 'seed-6',
      type: 'video',
      title: 'Video with Noah Carter',
      dateISO: buildDate(10),
    },
    {
      id: 'seed-7',
      type: 'call',
      title: 'Call with Ava Patel',
      dateISO: buildDate(12),
    },
    {
      id: 'seed-8',
      type: 'text',
      title: 'Text with Mia Johnson',
      dateISO: buildDate(15),
    },
    {
      id: 'seed-9',
      type: 'video',
      title: "Video with Ryan O'Brien",
      dateISO: buildDate(17),
    },
    {
      id: 'seed-10',
      type: 'call',
      title: 'Call with Olivia Martinez',
      dateISO: buildDate(20),
    }
  ];
}

function sortNewest(entries) {
  return [...entries].sort(
    (a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime()
  );
}

export function getTimelineEntries() {
  if (typeof window === 'undefined') return [];

  try {
    const existing = localStorage.getItem(STORAGE_KEY);

    if (!existing) {
      const seed = createSeedTimeline();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
      return sortNewest(seed);
    }

    return sortNewest(JSON.parse(existing));
  } catch (error) {
    const seed = createSeedTimeline();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
    return sortNewest(seed);
  }
}

export function addTimelineEntry({ type, friendName }) {
  if (typeof window === 'undefined') return;

  const entries = getTimelineEntries();
  const label = type.charAt(0).toUpperCase() + type.slice(1);

  const newEntry = {
    id: `${Date.now()}`,
    type,
    title: `${label} with ${friendName}`,
    dateISO: new Date().toISOString(),
  };

  const updatedEntries = sortNewest([newEntry, ...entries]);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedEntries));
}