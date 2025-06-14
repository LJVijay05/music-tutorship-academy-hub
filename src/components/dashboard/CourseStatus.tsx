
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Play, Calendar, Clock, Users, Download, Music } from 'lucide-react';

export const CourseStatus = () => {
  const courses = [
    {
      id: 1,
      title: 'Complete Music Production Mastery Course',
      type: 'Self-Paced',
      instructor: 'Alex Producer',
      progress: 68,
      status: 'active',
      totalModules: 15,
      completedModules: 10,
      duration: 'Lifetime Access',
      nextModule: 'Advanced EQ Techniques',
      materials: ['Sample Pack Vol. 3', 'FL Studio Template', 'Mixing Presets'],
    },
    {
      id: 2,
      title: 'One-on-One Music Production Mentorship',
      type: 'Live Sessions',
      instructor: 'Sarah Johnson',
      progress: 45,
      status: 'active',
      totalSessions: 12,
      completedSessions: 5,
      duration: '60 min/session',
      nextSession: '2024-01-20 14:00',
      lastTopic: 'Track Arrangement & Structure',
      materials: ['Project Files', 'Feedback Notes', 'Recommended Plugins'],
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
          <Music className="w-5 h-5" />
          My Production Courses
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {courses.map((course) => (
            <div key={course.id} className="border rounded-lg p-6 hover:shadow-sm transition-shadow bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
                  <p className="text-sm text-gray-600">with {course.instructor}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline" className={getStatusColor(course.status)}>
                      {course.status}
                    </Badge>
                    <Badge variant="outline" className="bg-blue-100 text-blue-800">
                      {course.type}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {course.type === 'Self-Paced' ? (
                  <>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Play className="w-4 h-4" />
                      {course.completedModules}/{course.totalModules} modules
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="text-sm text-gray-600">
                      Next: {course.nextModule}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      {course.completedSessions}/{course.totalSessions} sessions
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      Next: {new Date(course.nextSession).toLocaleDateString()}
                    </div>
                  </>
                )}
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-3" />
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Available Materials:</p>
                <div className="flex flex-wrap gap-2">
                  {course.materials.map((material, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      <Download className="w-3 h-3 mr-1" />
                      {material}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Play className="w-4 h-4 mr-2" />
                  {course.type === 'Self-Paced' ? 'Continue Module' : 'Join Next Session'}
                </Button>
                <Button variant="outline">
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
