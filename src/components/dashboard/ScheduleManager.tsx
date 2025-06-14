
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Edit, Plus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export const ScheduleManager = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<any>(null);

  const upcomingLessons = [
    {
      id: 1,
      course: 'Guitar Fundamentals',
      instructor: 'Sarah Johnson',
      date: '2024-01-20',
      time: '14:00',
      duration: '45 min',
      type: 'video-call',
      status: 'scheduled',
    },
    {
      id: 2,
      course: 'Piano Basics',
      instructor: 'Michael Chen',
      date: '2024-01-22',
      time: '16:00',
      duration: '60 min',
      type: 'in-person',
      status: 'confirmed',
    },
    {
      id: 3,
      course: 'Guitar Fundamentals',
      instructor: 'Sarah Johnson',
      date: '2024-01-25',
      time: '14:00',
      duration: '45 min',
      type: 'video-call',
      status: 'pending',
    },
  ];

  const handleRescheduleRequest = (lesson: any) => {
    setSelectedLesson(lesson);
    setIsDialogOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Upcoming Lessons
          </CardTitle>
          <Button size="sm" variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            Schedule Lesson
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingLessons.map((lesson) => (
            <div key={lesson.id} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900">{lesson.course}</h3>
                  <p className="text-sm text-gray-600">with {lesson.instructor}</p>
                </div>
                <Badge className={getStatusColor(lesson.status)}>
                  {lesson.status}
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  {new Date(lesson.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  {lesson.time} ({lesson.duration})
                </div>
                <div className="text-sm text-gray-600 capitalize">
                  {lesson.type.replace('-', ' ')}
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  Join Lesson
                </Button>
                <Button 
                  size="sm" 
                  variant="ghost"
                  onClick={() => handleRescheduleRequest(lesson)}
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Reschedule
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Request Reschedule</DialogTitle>
              <DialogDescription>
                Request to change the date/time for your lesson with {selectedLesson?.instructor}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="new-date">Preferred Date</Label>
                  <Input id="new-date" type="date" />
                </div>
                <div>
                  <Label htmlFor="new-time">Preferred Time</Label>
                  <Input id="new-time" type="time" />
                </div>
              </div>
              <div>
                <Label htmlFor="reason">Reason (Optional)</Label>
                <Textarea 
                  id="reason" 
                  placeholder="Please let us know why you need to reschedule..."
                  rows={3}
                />
              </div>
              <div className="flex gap-2 pt-4">
                <Button onClick={() => setIsDialogOpen(false)} variant="outline" className="flex-1">
                  Cancel
                </Button>
                <Button onClick={() => setIsDialogOpen(false)} className="flex-1">
                  Send Request
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};
