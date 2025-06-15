
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload, LinkIcon, MessageCircle } from 'lucide-react';

export const TrackSubmissionForm = () => {
  const [trackLink, setTrackLink] = useState('');
  const [trackTitle, setTrackTitle] = useState('');
  const [description, setDescription] = useState('');

  const mentorComment = "Your work on the mixdown is impressive! Try to emphasize the bassline more in the next version for punchier rhythm.";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackLink) {
      window.open(trackLink, "_blank");
    }
  };

  return (
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
            <Label htmlFor="track-link" className="mb-2 block">Share Track Link</Label>
            <div className="relative">
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

          <Button
            type="submit"
            className="w-full mt-4 py-2 rounded-2xl text-lg font-semibold bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600"
            disabled={!trackLink}
          >
            <Upload className="w-4 h-4 mr-2" />
            Submit for Feedback
          </Button>
        </form>

        <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6">
          <div className="flex items-start gap-3">
            <MessageCircle className="w-6 h-6 text-purple-600 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-2 text-lg">Mentor's Comment</h3>
              <p className="text-gray-700 leading-relaxed">{mentorComment}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
