
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Music, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export const TrackSubmissionHistory = () => {
  const recentSubmissions = [
    {
      id: 1,
      title: 'My First Trap Beat',
      submittedAt: '2 days ago',
      status: 'reviewed',
      feedback: 'Great structure! Work on the kick pattern.',
      rating: 4,
    },
    {
      id: 2,
      title: 'Melodic Drill Type Beat',
      submittedAt: '5 days ago',
      status: 'pending',
      feedback: null,
      rating: null,
    },
    {
      id: 3,
      title: 'Vocal Mix Practice',
      submittedAt: '1 week ago',
      status: 'reviewed',
      feedback: 'Excellent vocal clarity! Try compression.',
      rating: 5,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'reviewed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in-review': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'reviewed': return CheckCircle;
      case 'pending': return Clock;
      case 'in-review': return AlertCircle;
      default: return Clock;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Music className="w-5 h-5" />
          Recent Submissions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {recentSubmissions.map((submission) => {
            const StatusIcon = getStatusIcon(submission.status);
            return (
              <div
                key={submission.id}
                className="border rounded-2xl p-4 hover:shadow-md transition-shadow bg-white"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-lg text-gray-900">{submission.title}</h3>
                  <Badge className={getStatusColor(submission.status) + " text-xs font-semibold px-3 py-1 rounded-xl flex items-center"}>
                    <StatusIcon className="w-3 h-3 mr-1" />
                    {submission.status}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-3">{submission.submittedAt}</p>
                {submission.feedback && (
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 mb-3">
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      Mentor Feedback:
                    </p>
                    <p className="text-sm text-gray-600">{submission.feedback}</p>
                    {submission.rating && (
                      <div className="flex items-center gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-lg ${
                              i < submission.rating ? 'text-yellow-500' : 'text-gray-300'
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 rounded-xl">
                    View Details
                  </Button>
                  {submission.status === 'reviewed' && (
                    <Button size="sm" variant="outline" className="rounded-xl">
                      Re-submit
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
