
import React from 'react';
import { TrackSubmissionForm } from './TrackSubmissionForm';
import { TrackSubmissionHistory } from './TrackSubmissionHistory';

export const TrackSubmission = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <TrackSubmissionForm />
      <TrackSubmissionHistory />
    </div>
  );
};
