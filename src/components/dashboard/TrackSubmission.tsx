
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Upload, Music, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export const TrackSubmission = () => {
  const [dragActive, setDragActive] = useState(false);

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
      case 'in-review': return 'bg-blue-100 text-blue-800';
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

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="w-5 h-5" />
            Submit Your Track
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="track-title">Track Title</Label>
            <Input id="track-title" placeholder="Enter your track title..." />
          </div>
          
          <div>
            <Label htmlFor="track-description">Description (Optional)</Label>
            <Textarea 
              id="track-description" 
              placeholder="Tell us about your track, what you focused on, any specific areas you'd like feedback on..."
              rows={3}
            />
          </div>
          
          <div>
            <Label>Upload Audio File</Label>
            <div 
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 ${
                dragActive 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
            >
              <Music className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-sm text-gray-600 mb-2">
                Drag and drop your audio file here, or click to browse
              </p>
              <p className="text-xs text-gray-500">
                Supports MP3, WAV, FLAC (Max 50MB)
              </p>
              <Button variant="outline" className="mt-4">
                Choose File
              </Button>
            </div>
          </div>
          
          <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
            <Upload className="w-4 h-4 mr-2" />
            Submit for Feedback
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Music className="w-5 h-5" />
            Recent Submissions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentSubmissions.map((submission) => {
              const StatusIcon = getStatusIcon(submission.status);
              return (
                <div key={submission.id} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-gray-900">{submission.title}</h3>
                    <Badge className={getStatusColor(submission.status)}>
                      <StatusIcon className="w-3 h-3 mr-1" />
                      {submission.status}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{submission.submittedAt}</p>
                  
                  {submission.feedback && (
                    <div className="bg-gray-50 rounded-lg p-3 mb-3">
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Mentor Feedback:</strong>
                      </p>
                      <p className="text-sm text-gray-600">{submission.feedback}</p>
                      {submission.rating && (
                        <div className="flex items-center gap-1 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={`text-sm ${i < submission.rating ? 'text-yellow-500' : 'text-gray-300'}`}>
                              ⭐
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      View Details
                    </Button>
                    {submission.status === 'reviewed' && (
                      <Button size="sm" variant="outline">
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
    </div>
  );
};
