
import React, { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Calendar, Video, CheckCircle, Clock, Headphones, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { format, isThisMonth } from "date-fns";

// Demo session data for the current month; in real usage, fetch from backend
const demoSessions = [
  {
    id: 1,
    course: "Complete Music Production Mastery Course",
    type: "Self-Paced",
    daw: "Logic Pro X",
    date: "2024-06-18T15:00:00Z",
    topic: "Advanced EQ Techniques in Logic Pro X",
    status: "Scheduled",
  },
  {
    id: 2,
    course: "Complete Music Production Mastery Course",
    type: "Self-Paced",
    daw: "Logic Pro X",
    date: "2024-06-25T13:00:00Z",
    topic: "Multiband Compression Workflow",
    status: "Scheduled",
  },
  {
    id: 3,
    course: "One-on-One Music Production Mentorship",
    type: "Mentorship",
    daw: "Ableton Live 12",
    date: "2024-06-22T10:00:00Z",
    topic: "Ableton Live 12 Advanced Routing",
    status: "Scheduled",
  },
  {
    id: 4,
    course: "One-on-One Music Production Mentorship",
    type: "Mentorship",
    daw: "Ableton Live 12",
    date: "2024-06-29T11:30:00Z",
    topic: "Personalized Feedback Session",
    status: "Scheduled",
  },
];

const attendanceOptions = [
  { label: "Mark Presence", value: "" },
  { label: "Present", value: "present" },
  { label: "Absent", value: "absent" },
];

const getCourseIcon = (courseType: string) =>
  courseType === "Self-Paced" ? (
    <PlayCircle className="w-6 h-6 text-white" />
  ) : (
    <Headphones className="w-6 h-6 text-white" />
  );

export const CourseStatus = () => {
  // Attendance & request status per session (by session id)
  const [attendance, setAttendance] = useState<Record<number, string>>({});
  const [requestedRecording, setRequestedRecording] = useState<Record<number, boolean>>({});
  const [showReschedule, setShowReschedule] = useState<number | null>(null);

  // Only show sessions scheduled for current month
  const sessions = useMemo(
    () => demoSessions.filter((s) => isThisMonth(new Date(s.date))),
    []
  );

  const handleAttendanceChange = (sessionId: number, value: string) => {
    setAttendance((a) => ({ ...a, [sessionId]: value }));
  };

  const handleRequestRecording = (sessionId: number) => {
    setRequestedRecording((r) => ({ ...r, [sessionId]: true }));
  };

  const handleOpenReschedule = (sessionId: number) => {
    setShowReschedule(sessionId);
  };
  const handleCloseReschedule = () => setShowReschedule(null);

  return (
    <Card className="rounded-2xl shadow-lg border-gray-200 bg-gradient-to-tr from-white via-purple-50 to-pink-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg md:text-2xl text-gray-900">
          <PlayCircle className="w-6 h-6 text-purple-600" />
          Your Music Production Journey - This Month
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-4">
            <thead>
              <tr className="text-sm text-gray-600">
                <th className="px-4 py-2 text-left">Session Date</th>
                <th className="px-4 py-2 text-left">Course</th>
                <th className="px-4 py-2 text-left">Topic</th>
                <th className="px-4 py-2 text-left">DAW</th>
                <th className="px-4 py-2 text-left">Attendance</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session) => (
                <tr
                  key={session.id}
                  className="bg-white/70 rounded-3xl shadow transition-all border border-gray-100"
                  style={{ borderRadius: "24px" }}
                >
                  <td className="px-4 py-5 font-semibold text-gray-900 min-w-[110px]">
                    <div className="flex items-center gap-2">
                      {getCourseIcon(session.type)}
                      <span>
                        {format(new Date(session.date), "dd MMM, yyyy, h:mm a")}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-5">
                    <span
                      className={cn(
                        "rounded-lg px-3 py-1 font-medium text-xs shadow-sm",
                        session.type === "Self-Paced"
                          ? "bg-gradient-to-r from-red-100 to-purple-100 text-red-700"
                          : "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700"
                      )}
                    >
                      {session.course}
                    </span>
                  </td>
                  <td className="px-4 py-5 text-gray-800 min-w-[150px]">{session.topic}</td>
                  <td className="px-4 py-5">
                    <Badge className="bg-gray-200 text-gray-700 rounded-md">{session.daw}</Badge>
                  </td>
                  <td className="px-4 py-5 min-w-[120px]">
                    <div className="flex items-center">
                      <select
                        className="rounded-lg px-3 py-2 border border-gray-200 text-sm bg-white focus:outline-none shadow hover:shadow-md transition min-w-[80px]"
                        value={attendance[session.id] || ""}
                        onChange={(e) =>
                          handleAttendanceChange(session.id, e.target.value)
                        }
                      >
                        {attendanceOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {attendance[session.id] === "present" && (
                        <CheckCircle className="text-green-500 ml-2 w-4 h-4" />
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-5 min-w-[180px]">
                    <div className="flex gap-2 flex-wrap">
                      {/* For mentorship - allow reschedule */}
                      {session.type === "Mentorship" && (
                        <>
                          <Button
                            size="sm"
                            variant="outline"
                            className="rounded-full border-purple-300 font-medium shadow-sm transition hover:bg-purple-50"
                            onClick={() => handleOpenReschedule(session.id)}
                          >
                            <Calendar className="w-4 h-4 mr-1" />
                            Reschedule
                          </Button>
                          <Button
                            size="sm"
                            variant="default"
                            className="rounded-full shadow font-medium px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                          >
                            <Video className="w-4 h-4 mr-1" />
                            Join Session
                          </Button>
                        </>
                      )}
                      {/* Self-paced: recorded request on leave (absent) */}
                      {session.type === "Self-Paced" && (
                        <>
                          <Button
                            size="sm"
                            variant="default"
                            className="rounded-full shadow bg-gradient-to-r from-red-500 to-purple-500 text-white px-4 disabled:opacity-70"
                            onClick={() => handleRequestRecording(session.id)}
                            disabled={attendance[session.id] !== "absent" || requestedRecording[session.id]}
                          >
                            {requestedRecording[session.id] ? (
                              <>
                                <CheckCircle className="w-4 h-4 mr-1" />
                                Requested
                              </>
                            ) : (
                              <>
                                <Video className="w-4 h-4 mr-1" />
                                Request Recording
                              </>
                            )}
                          </Button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              {sessions.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-gray-500">
                    No scheduled sessions found for this month.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Reschedule Session Dialog: UI only for now */}
        {showReschedule && (
          <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md animate-fade-in">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-purple-700">Request Reschedule</h3>
                <Button variant="ghost" size="icon" onClick={handleCloseReschedule}>
                  <ChevronDown className="rotate-180 w-5 h-5" />
                </Button>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="reschedule-date">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="reschedule-date"
                  className="border rounded-lg px-3 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="reschedule-time">
                  Preferred Time
                </label>
                <input
                  type="time"
                  id="reschedule-time"
                  className="border rounded-lg px-3 py-2 w-full"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="reschedule-reason">
                  Reason (optional)
                </label>
                <textarea
                  id="reschedule-reason"
                  className="border rounded-lg px-3 py-2 w-full"
                  rows={2}
                  placeholder="Let us know why you need to reschedule this session..."
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1 rounded-full"
                  onClick={handleCloseReschedule}
                >
                  Cancel
                </Button>
                <Button
                  className="flex-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  onClick={handleCloseReschedule}
                >
                  Send Request
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
