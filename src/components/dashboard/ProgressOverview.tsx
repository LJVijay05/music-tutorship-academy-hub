import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Music, Clock, Award, Download, Headphones, Mic } from 'lucide-react';

export const ProgressOverview = () => {
  const stats = [
    { icon: Music, label: 'Courses Enrolled', value: '2', color: 'text-red-600', bgColor: 'bg-red-50' },
    { icon: Download, label: 'Practice Materials', value: '45', color: 'text-purple-600', bgColor: 'bg-purple-50' },
    { icon: Clock, label: 'Hours Completed', value: '87', color: 'text-red-600', bgColor: 'bg-red-50' },
    { icon: Award, label: 'Achievements', value: '12', color: 'text-purple-600', bgColor: 'bg-purple-50' },
  ];

  const achievements = [
    { title: 'First Beat Created', icon: Headphones, earned: true },
    { title: 'Logic Pro X Master', icon: Mic, earned: true },
    { title: '50 Hours Practiced', icon: Clock, earned: true },
    { title: 'Track Submitted', icon: Music, earned: false },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Welcome back, John!</h2>
        <div className="text-sm text-gray-600">
          Next session: Tomorrow 2:00 PM
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow border-l-4 border-l-red-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>DAW Skills Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Logic Pro X Mastery</span>
                <span>85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Ableton Live 12</span>
                <span>72%</span>
              </div>
              <Progress value={72} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Mixing Techniques</span>
                <span>65%</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Sound Design</span>
                <span>60%</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    achievement.earned ? 'bg-red-100' : 'bg-gray-100'
                  }`}>
                    <achievement.icon className={`w-4 h-4 ${
                      achievement.earned ? 'text-red-600' : 'text-gray-400'
                    }`} />
                  </div>
                  <span className={`text-sm ${
                    achievement.earned ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    {achievement.title}
                  </span>
                  {achievement.earned && (
                    <span className="ml-auto text-xs text-red-600 font-medium">Earned</span>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
