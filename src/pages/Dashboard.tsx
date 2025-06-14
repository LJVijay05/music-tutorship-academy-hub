
import React from 'react';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { CourseStatus } from '@/components/dashboard/CourseStatus';
import { ScheduleManager } from '@/components/dashboard/ScheduleManager';
import { InternalChat } from '@/components/dashboard/InternalChat';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { ProgressOverview } from '@/components/dashboard/ProgressOverview';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <ProgressOverview />
            <CourseStatus />
            <ScheduleManager />
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            <QuickActions />
            <InternalChat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
