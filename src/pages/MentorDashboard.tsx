
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useMentorAuth } from '@/contexts/MentorAuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Users, DollarSign, Calendar, LogOut, Music, TrendingUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Student {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  created_at: string;
}

interface Fee {
  id: string;
  student_id: string;
  amount: number;
  paid_on: string;
  notes: string;
  student?: Student;
}

interface ClassSchedule {
  id: string;
  student_id: string;
  class_date: string;
  topic: string;
  status: string;
  student?: Student;
}

const MentorDashboard = () => {
  const { isMentor, logout } = useMentorAuth();
  const { toast } = useToast();
  
  const [students, setStudents] = useState<Student[]>([]);
  const [fees, setFees] = useState<Fee[]>([]);
  const [schedules, setSchedules] = useState<ClassSchedule[]>([]);
  const [loading, setLoading] = useState(true);

  // Redirect if not mentor
  if (!isMentor) {
    return <Navigate to="/mentor-login" replace />;
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Fetch students
      const { data: studentsData, error: studentsError } = await supabase
        .from('students')
        .select('*')
        .order('created_at', { ascending: false });

      if (studentsError) throw studentsError;

      // Fetch fees with student data
      const { data: feesData, error: feesError } = await supabase
        .from('fees')
        .select(`
          *,
          students (
            first_name,
            last_name,
            email
          )
        `)
        .order('paid_on', { ascending: false });

      if (feesError) throw feesError;

      // Fetch schedules with student data
      const { data: schedulesData, error: schedulesError } = await supabase
        .from('class_schedules')
        .select(`
          *,
          students (
            first_name,
            last_name,
            email
          )
        `)
        .order('class_date', { ascending: true });

      if (schedulesError) throw schedulesError;

      setStudents(studentsData || []);
      setFees(feesData || []);
      setSchedules(schedulesData || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast({
        title: "Error",
        description: "Failed to fetch dashboard data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    toast({
      title: "Logged Out",
      description: "Successfully logged out from mentor dashboard",
    });
  };

  const totalRevenue = fees.reduce((sum, fee) => sum + Number(fee.amount), 0);
  const upcomingClasses = schedules.filter(s => new Date(s.class_date) > new Date() && s.status === 'Scheduled').length;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black flex items-center justify-center">
        <div className="text-white text-xl">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black">
      {/* Header */}
      <div className="bg-black/30 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Mentor Dashboard</h1>
                <p className="text-gray-400 text-sm">Music Tutorship Management</p>
              </div>
            </div>
            <Button
              onClick={handleLogout}
              variant="ghost"
              className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Total Students</p>
                  <p className="text-3xl font-bold text-white">{students.length}</p>
                </div>
                <Users className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Total Revenue</p>
                  <p className="text-3xl font-bold text-white">₹{totalRevenue.toLocaleString()}</p>
                </div>
                <DollarSign className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Upcoming Classes</p>
                  <p className="text-3xl font-bold text-white">{upcomingClasses}</p>
                </div>
                <Calendar className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Total Payments</p>
                  <p className="text-3xl font-bold text-white">{fees.length}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-orange-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Students Table */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Users className="w-5 h-5" />
              Students Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-white/20">
                  <TableHead className="text-gray-300">Name</TableHead>
                  <TableHead className="text-gray-300">Email</TableHead>
                  <TableHead className="text-gray-300">Phone</TableHead>
                  <TableHead className="text-gray-300">Joined</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id} className="border-white/10">
                    <TableCell className="text-white font-medium">
                      {student.first_name} {student.last_name}
                    </TableCell>
                    <TableCell className="text-gray-300">{student.email}</TableCell>
                    <TableCell className="text-gray-300">{student.phone || 'N/A'}</TableCell>
                    <TableCell className="text-gray-300">
                      {new Date(student.created_at).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Recent Payments */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Recent Payments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-white/20">
                  <TableHead className="text-gray-300">Student</TableHead>
                  <TableHead className="text-gray-300">Amount</TableHead>
                  <TableHead className="text-gray-300">Date</TableHead>
                  <TableHead className="text-gray-300">Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fees.slice(0, 10).map((fee) => (
                  <TableRow key={fee.id} className="border-white/10">
                    <TableCell className="text-white font-medium">
                      {fee.student?.first_name} {fee.student?.last_name}
                    </TableCell>
                    <TableCell className="text-green-400 font-medium">₹{fee.amount}</TableCell>
                    <TableCell className="text-gray-300">
                      {new Date(fee.paid_on).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-gray-300">{fee.notes || 'N/A'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Class Schedules */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Class Schedules
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-white/20">
                  <TableHead className="text-gray-300">Student</TableHead>
                  <TableHead className="text-gray-300">Date & Time</TableHead>
                  <TableHead className="text-gray-300">Topic</TableHead>
                  <TableHead className="text-gray-300">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {schedules.slice(0, 10).map((schedule) => (
                  <TableRow key={schedule.id} className="border-white/10">
                    <TableCell className="text-white font-medium">
                      {schedule.student?.first_name} {schedule.student?.last_name}
                    </TableCell>
                    <TableCell className="text-gray-300">
                      {new Date(schedule.class_date).toLocaleString()}
                    </TableCell>
                    <TableCell className="text-gray-300">{schedule.topic || 'N/A'}</TableCell>
                    <TableCell>
                      <Badge variant={schedule.status === 'Completed' ? 'default' : 'secondary'}>
                        {schedule.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MentorDashboard;
