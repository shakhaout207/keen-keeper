import { useMemo } from 'react';
import MainLayout from '../components/layout/MainLayout';
import AnalyticsChart from '../components/stats/AnalyticsChart';
import { getInteractionCounts } from '../utils/helpers';
import { getTimelineEntries } from '../utils/storage';

export default function StatsPage() {
  const entries = useMemo(() => getTimelineEntries(), []);
  const counts = useMemo(() => getInteractionCounts(entries), [entries]);

  return (
    <MainLayout>
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-800">
          Friendship Analytics
        </h1>

        <div className="mt-8">
          <AnalyticsChart counts={counts} />
        </div>
      </section>
    </MainLayout>
  );
}