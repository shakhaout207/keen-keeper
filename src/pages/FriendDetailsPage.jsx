import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import MainLayout from '../components/layout/MainLayout';
import FriendInfoCard from '../components/details/FriendInfoCard';
import FriendActionButtons from '../components/details/FriendActionButtons';
import DetailStatsCards from '../components/details/DetailStatsCards';
import RelationshipGoalCard from '../components/details/RelationshipGoalCard';
import QuickCheckInCard from '../components/details/QuickCheckInCard';
import NotFoundPage from './NotFoundPage';
import friendsData from '../data/friends.json';
import { addTimelineEntry } from '../utils/storage';

export default function FriendDetailsPage() {
  const { friendId } = useParams();

  const friend = useMemo(
    () => friendsData.find((item) => String(item.id) === String(friendId)),
    [friendId]
  );

  if (!friend) {
    return <NotFoundPage />;
  }

  const handleQuickCheckIn = (type) => {
    addTimelineEntry({
      type,
      friendName: friend.name,
    });

    toast.success(
      `${type.charAt(0).toUpperCase() + type.slice(1)} added to timeline`
    );
  };

  return (
    <MainLayout>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div>
            <FriendInfoCard friend={friend} />
            <FriendActionButtons />
          </div>

          <div className="space-y-6">
            <DetailStatsCards friend={friend} />
            <RelationshipGoalCard goal={friend.goal} />
            <QuickCheckInCard onAction={handleQuickCheckIn} />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}