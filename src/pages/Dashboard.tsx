
import React from 'react';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { CourseStatus } from '@/components/dashboard/CourseStatus';
import { ChatWithMentor } from '@/components/dashboard/ChatWithMentor';
import { ProgressOverview } from '@/components/dashboard/ProgressOverview';
import { TrackSubmission } from '@/components/dashboard/TrackSubmission';
import AboutMeCard from '@/components/dashboard/AboutMeCard';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-purple-50 to-pink-50">
      <DashboardHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Main Content (3/4) */}
          <div className="lg:col-span-3 space-y-8">
            <ProgressOverview />
            <CourseStatus />
            <TrackSubmission />
          </div>
          {/* About Me Card (Sidebar Right) */}
          <div className="lg:col-span-1 w-full">
            <AboutMeCard />
          </div>
        </div>
      </div>
      <ChatWithMentor />
    </div>
  );
};

export default Dashboard;
