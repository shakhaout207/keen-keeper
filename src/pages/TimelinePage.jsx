import { useMemo, useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import TimelineFilter from '../components/timeline/TimelineFilter';
import TimelineList from '../components/timeline/TimelineList';
import { getTimelineEntries } from '../utils/storage';

export default function TimelinePage() {
  const [filter, setFilter] = useState('all');

  const entries = useMemo(() => getTimelineEntries(), []);
  const filteredEntries = useMemo(() => {
    if (filter === 'all') return entries;
    return entries.filter((entry) => entry.type === filter);
  }, [entries, filter]);

  return (
    <MainLayout>
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-800">
          Timeline
        </h1>

        <div className="mt-8">
          <TimelineFilter value={filter} onChange={setFilter} />
          <TimelineList entries={filteredEntries} />
        </div>
      </section>
    </MainLayout>
  );
}