
import React from 'react';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { CourseStatus } from '@/components/dashboard/CourseStatus';
import { ScheduleManager } from '@/components/dashboard/ScheduleManager';
import { ChatWithMentor } from '@/components/dashboard/ChatWithMentor';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { ProgressOverview } from '@/components/dashboard/ProgressOverview';
import { PracticeMaterials } from '@/components/dashboard/PracticeMaterials';
import { TrackSubmission } from '@/components/dashboard/TrackSubmission';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <DashboardHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <ProgressOverview />
            <CourseStatus />
            <TrackSubmission />
            <PracticeMaterials />
            <ScheduleManager />
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            <QuickActions />
          </div>
        </div>
      </div>
      
      <ChatWithMentor />
    </div>
  );
};

export default Dashboard;
