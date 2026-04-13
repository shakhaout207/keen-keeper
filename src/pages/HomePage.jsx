import { useEffect, useMemo, useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import HeroSection from '../components/home/HeroSection';
import SummaryCards from '../components/home/SummaryCards';
import FriendsSection from '../components/home/FriendsSection';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import friendsData from '../data/friends.json';
import { calculateHomeStats } from '../utils/helpers';
import { getTimelineEntries } from '../utils/storage';

export default function HomePage() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFriends(friendsData);
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  const stats = useMemo(() => {
    return calculateHomeStats(friends, getTimelineEntries());
  }, [friends]);

  return (
    <MainLayout>
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <HeroSection />

        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <SummaryCards stats={stats} />
            <div className="mt-10 border-t border-slate-200" />
            <FriendsSection friends={friends} />
          </>
        )}
      </section>
    </MainLayout>
  );
}