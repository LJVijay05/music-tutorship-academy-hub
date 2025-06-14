
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MessageSquare, BookOpen, Settings, Download, Star } from 'lucide-react';

export const QuickActions = () => {
  const actions = [
    { icon: Calendar, label: 'Schedule Lesson', color: 'text-blue-600 bg-blue-50 hover:bg-blue-100' },
    { icon: BookOpen, label: 'Browse Courses', color: 'text-green-600 bg-green-50 hover:bg-green-100' },
    { icon: Download, label: 'Download Materials', color: 'text-purple-600 bg-purple-50 hover:bg-purple-100' },
    { icon: Star, label: 'Rate Instructor', color: 'text-yellow-600 bg-yellow-50 hover:bg-yellow-100' },
    { icon: MessageSquare, label: 'Support Center', color: 'text-red-600 bg-red-50 hover:bg-red-100' },
    { icon: Settings, label: 'Account Settings', color: 'text-gray-600 bg-gray-50 hover:bg-gray-100' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`h-auto p-4 flex flex-col items-center gap-2 ${action.color}`}
            >
              <action.icon className="w-6 h-6" />
              <span className="text-xs font-medium text-center">{action.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
