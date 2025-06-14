
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { PlayCircle, Clock, Users, Calendar, Music, Headphones } from 'lucide-react';

export const CourseStatus = () => {
  const courses = [
    {
      id: 1,
      title: 'Complete Music Production Mastery Course',
      type: 'Self-Paced Course',
      progress: 67,
      totalLessons: 45,
      completedLessons: 30,
      nextLesson: 'Advanced EQ Techniques in Logic Pro X',
      timeRemaining: '8 hours',
      status: 'active',
      daw: 'Logic Pro X',
      icon: Music,
      color: 'from-red-500 to-orange-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
    },
    {
      id: 2,
      title: 'One-on-One Music Production Mentorship',
      type: 'Live Mentorship',
      progress: 45,
      totalSessions: 12,
      completedSessions: 5,
      nextSession: 'Ableton Live 12 Advanced Routing',
      timeRemaining: 'Tomorrow 2:00 PM',
      status: 'scheduled',
      daw: 'Ableton Live 12',
      icon: Headphones,
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-red-100 text-red-800">In Progress</Badge>;
      case 'scheduled':
        return <Badge className="bg-orange-100 text-orange-800">Next Session</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PlayCircle className="w-5 h-5" />
          Your Music Production Journey
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {courses.map((course) => (
            <div key={course.id} className={`border rounded-lg p-6 ${course.borderColor} ${course.bgColor}`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 bg-gradient-to-r ${course.color} rounded-lg flex items-center justify-center shadow-md`}>
                    <course.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
                    <p className="text-sm text-gray-600">{course.type} • {course.daw}</p>
                  </div>
                </div>
                {getStatusBadge(course.status)}
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">
                    {course.type === 'Live Mentorship' ? 'Sessions' : 'Lessons'} Progress
                  </span>
                  <span className="font-medium">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2 mb-2" />
                <p className="text-xs text-gray-500">
                  {course.type === 'Live Mentorship' 
                    ? `${course.completedSessions}/${course.totalSessions} sessions completed`
                    : `${course.completedLessons}/${course.totalLessons} lessons completed`
                  }
                </p>
              </div>

              <div className="bg-white/50 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  {course.type === 'Live Mentorship' ? (
                    <Calendar className="w-4 h-4 text-gray-600" />
                  ) : (
                    <PlayCircle className="w-4 h-4 text-gray-600" />
                  )}
                  <span className="text-sm font-medium text-gray-900">
                    {course.type === 'Live Mentorship' ? 'Next Session' : 'Next Lesson'}
                  </span>
                </div>
                <p className="text-sm text-gray-700 mb-2">
                  {course.type === 'Live Mentorship' ? course.nextSession : course.nextLesson}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span>{course.timeRemaining}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  className={`bg-gradient-to-r ${course.color} hover:opacity-90 text-white flex-1`}
                >
                  {course.type === 'Live Mentorship' ? 'Join Session' : 'Continue Learning'}
                </Button>
                <Button size="sm" variant="outline" className="border-gray-300">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200">
          <h4 className="font-medium text-gray-900 mb-2">🎯 This Week's Focus</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Master Logic Pro X's channel EQ and multipressor</li>
            <li>• Complete Ableton Live 12 session organization tutorial</li>
            <li>• Submit your first complete track for mentor review</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
