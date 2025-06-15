
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Upload, Music, Clock, CheckCircle, AlertCircle, Link as LinkIcon, MessageCircle } from 'lucide-react';

export const TrackSubmission = () => {
  const [trackLink, setTrackLink] = useState('');
  const [trackTitle, setTrackTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showMentorComment, setShowMentorComment] = useState(true);

  // Simulated mentor comment - replace with dynamic data as needed
  const mentorComment = "Your work on the mixdown is impressive! Try to emphasize the bassline more in the next version for punchier rhythm.";
  
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackLink) {
      window.open(trackLink, "_blank");
    }
    // You may add API integration for form save/feedback here.
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Submission Form / Left Side */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="w-5 h-5" />
            Submit Your Track
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
            <div>
              <Label htmlFor="track-title" className="mb-1 block">Track Title</Label>
              <Input
                id="track-title"
                placeholder="Enter your track title..."
                value={trackTitle}
                onChange={e => setTrackTitle(e.target.value)}
                autoComplete="off"
                className="rounded-xl bg-white border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              />
            </div>
            <div>
              <Label htmlFor="track-description" className="mb-1 block">Description <span className="text-xs text-gray-400">(Optional)</span></Label>
              <Textarea
                id="track-description"
                placeholder="Tell us about your track, what you focused on, any specific areas you'd like feedback on..."
                rows={3}
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="rounded-xl bg-white border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              />
            </div>
            <div>
              <Label htmlFor="track-link">Share Track Link</Label>
              <div className="relative mt-2">
                <Input
                  id="track-link"
                  placeholder="Paste your Google Drive, Dropbox, or SoundCloud link here..."
                  value={trackLink}
                  onChange={e => setTrackLink(e.target.value)}
                  required
                  className="rounded-xl pr-10 bg-white border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                />
                <LinkIcon className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Please ensure sharing is set to "Anyone with the link can view/listen".
              </p>
            </div>
            {/* Mentor's Comment Section */}
            {showMentorComment && (
              <div className="mt-6 bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 flex items-start gap-3">
                <MessageCircle className="w-6 h-6 text-purple-500 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-800">Mentor's Comment:</span>
                  <p className="mt-1 text-sm text-gray-700">{mentorComment}</p>
                </div>
              </div>
            )}
            <Button
              type="submit"
              className="w-full mt-4 py-2 rounded-2xl text-lg font-semibold bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600"
              disabled={!trackLink}
            >
              <Upload className="w-4 h-4 mr-2" />
              Submit for Feedback
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Recent Submissions / Right Side */}
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
    </div>
  );
};
