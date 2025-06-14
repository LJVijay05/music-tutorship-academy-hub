
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Edit, Plus, Video, Headphones, Mic } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export const ScheduleManager = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState<any>(null);

  const upcomingSessions = [
    {
      id: 1,
      type: 'Beat Making Session',
      mentor: 'Sarah Johnson',
      date: '2024-01-20',
      time: '14:00',
      duration: '60 min',
      focus: 'Trap Beat Production',
      status: 'confirmed',
      sessionType: 'video-call',
      icon: Headphones,
    },
    {
      id: 2,
      type: 'Mixing Workshop',
      mentor: 'Alex Producer',
      date: '2024-01-22',
      time: '16:00',
      duration: '90 min',
      focus: 'Vocal Processing & Effects',
      status: 'pending',
      sessionType: 'screen-share',
      icon: Mic,
    },
    {
      id: 3,
      type: 'Track Feedback',
      mentor: 'Sarah Johnson',
      date: '2024-01-25',
      time: '15:00',
      duration: '45 min',
      focus: 'Review Your Latest Beat',
      status: 'scheduled',
      sessionType: 'video-call',
      icon: Video,
    },
  ];

  const handleRescheduleRequest = (session: any) => {
    setSelectedSession(session);
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
            Upcoming Production Sessions
          </CardTitle>
          <Button size="sm" variant="outline" className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <Plus className="w-4 h-4 mr-2" />
            Request Session
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingSessions.map((session) => (
            <div key={session.id} className="border rounded-lg p-5 hover:shadow-sm transition-shadow bg-gradient-to-r from-gray-50 to-blue-50">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <session.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{session.type}</h3>
                    <p className="text-sm text-gray-600">with {session.mentor}</p>
                  </div>
                </div>
                <Badge className={getStatusColor(session.status)}>
                  {session.status}
                </Badge>
              </div>

              <div className="bg-white rounded-lg p-3 mb-4">
                <p className="text-sm font-medium text-gray-700 mb-1">Session Focus:</p>
                <p className="text-sm text-gray-600">{session.focus}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  {new Date(session.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  {session.time} ({session.duration})
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Video className="w-4 h-4" />
                  {session.sessionType.replace('-', ' ')}
                </div>
              </div>

              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                >
                  <Video className="w-4 h-4 mr-2" />
                  Join Session
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => handleRescheduleRequest(session)}
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
              <DialogTitle>Request Session Reschedule</DialogTitle>
              <DialogDescription>
                Request to change the date/time for your {selectedSession?.type} with {selectedSession?.mentor}
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
                  placeholder="Let us know why you need to reschedule this production session..."
                  rows={3}
                />
              </div>
              <div className="flex gap-2 pt-4">
                <Button onClick={() => setIsDialogOpen(false)} variant="outline" className="flex-1">
                  Cancel
                </Button>
                <Button onClick={() => setIsDialogOpen(false)} className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600">
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
