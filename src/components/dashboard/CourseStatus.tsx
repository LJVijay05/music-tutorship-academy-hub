
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Play, Calendar, Clock, BookOpen } from 'lucide-react';

export const CourseStatus = () => {
  const courses = [
    {
      id: 1,
      title: 'Guitar Fundamentals',
      instructor: 'Sarah Johnson',
      progress: 75,
      status: 'active',
      nextLesson: '2024-01-20',
      totalLessons: 20,
      completedLessons: 15,
      duration: '45 min',
    },
    {
      id: 2,
      title: 'Piano Basics',
      instructor: 'Michael Chen',
      progress: 45,
      status: 'active',
      nextLesson: '2024-01-22',
      totalLessons: 16,
      completedLessons: 7,
      duration: '60 min',
    },
    {
      id: 3,
      title: 'Music Theory',
      instructor: 'Emma Davis',
      progress: 30,
      status: 'paused',
      nextLesson: null,
      totalLessons: 12,
      completedLessons: 4,
      duration: '30 min',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          My Courses
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {courses.map((course) => (
            <div key={course.id} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{course.title}</h3>
                  <p className="text-sm text-gray-600">with {course.instructor}</p>
                </div>
                <Badge className={getStatusColor(course.status)}>
                  {course.status}
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <BookOpen className="w-4 h-4" />
                  {course.completedLessons}/{course.totalLessons} lessons
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  {course.duration} per lesson
                </div>
                {course.nextLesson && (
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    Next: {new Date(course.nextLesson).toLocaleDateString()}
                  </div>
                )}
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>

              <div className="flex gap-2">
                <Button size="sm" className="flex-1">
                  <Play className="w-4 h-4 mr-2" />
                  Continue Learning
                </Button>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
