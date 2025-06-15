
import { PlayCircle } from "lucide-react";
import React from "react";

const sessions: any[] = []; // Your session data here

export const CourseStatus = () => {
  return (
    <div className="rounded-3xl bg-white/70 p-8 shadow-sm mb-8">
      <div className="flex items-center mb-6 gap-2">
        <PlayCircle className="w-6 h-6 text-purple-500" />
        <h2 className="text-2xl font-bold text-gray-900">
          Your Music Production Journey - This Month
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr>
              <th className="px-6 py-4 font-semibold text-gray-700">Session Date</th>
              <th className="px-6 py-4 font-semibold text-gray-700">Course</th>
              <th className="px-6 py-4 font-semibold text-gray-700">Topic</th>
              {/* Removed DAW column */}
              <th className="px-6 py-4 font-semibold text-gray-700">Attendance</th>
              <th className="px-6 py-4 font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sessions.length === 0 ? (
              <tr>
                <td colSpan={5}>
                  <div className="py-12 text-center text-gray-400 text-xl font-medium">
                    No scheduled sessions found for this month.
                  </div>
                </td>
              </tr>
            ) : (
              sessions.map((session, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-3">{session.sessionDate}</td>
                  <td className="px-6 py-3">{session.course}</td>
                  <td className="px-6 py-3">{session.topic}</td>
                  {/* Removed DAW cell */}
                  <td className="px-6 py-3">{session.attendance}</td>
                  <td className="px-6 py-3">{session.actions}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
