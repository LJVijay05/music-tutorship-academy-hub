
import React from 'react';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { CourseStatus } from '@/components/dashboard/CourseStatus';
import { ChatWithMentor } from '@/components/dashboard/ChatWithMentor';
// Removed: import { QuickActions } from '@/components/dashboard/QuickActions';
import { ProgressOverview } from '@/components/dashboard/ProgressOverview';
import { TrackSubmission } from '@/components/dashboard/TrackSubmission';

const Dashboard = () => {
  console.log('Dashboard component rendered');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-purple-50 to-pink-50">
      <DashboardHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <ProgressOverview />
            <CourseStatus />
            <TrackSubmission />
          </div>
          
          {/* Sidebar */}
          {/* QuickActions removed */}
          {/* <div className="space-y-8">
            <QuickActions />
          </div> */}
        </div>
      </div>
      
      <ChatWithMentor />
    </div>
  );
};

export default Dashboard;

