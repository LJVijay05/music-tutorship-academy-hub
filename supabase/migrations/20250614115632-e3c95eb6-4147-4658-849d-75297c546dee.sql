
-- 1. Create `students` table to store student details
CREATE TABLE public.students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Create `fees` table to store fee records for students
CREATE TABLE public.fees (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES public.students(id) ON DELETE CASCADE,
  amount NUMERIC(10,2) NOT NULL,
  paid_on TIMESTAMPTZ DEFAULT now(),
  notes TEXT
);

-- 3. Create `class_schedules` table to store class sessions
CREATE TABLE public.class_schedules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES public.students(id) ON DELETE CASCADE,
  class_date TIMESTAMPTZ NOT NULL,
  topic TEXT,
  status TEXT DEFAULT 'Scheduled'
);

-- Enable Row Level Security
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.fees ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.class_schedules ENABLE ROW LEVEL SECURITY;

-- Allow only the founder (mentor) to access all rows
CREATE POLICY "Mentor only access" 
  ON public.students
  FOR ALL
  USING (EXISTS (
    SELECT 1 
    FROM auth.users 
    WHERE auth.email() = 'producingwithvijay@gmail.com'
  ));

CREATE POLICY "Mentor only access" 
  ON public.fees
  FOR ALL
  USING (EXISTS (
    SELECT 1 
    FROM auth.users 
    WHERE auth.email() = 'producingwithvijay@gmail.com'
  ));

CREATE POLICY "Mentor only access" 
  ON public.class_schedules
  FOR ALL
  USING (EXISTS (
    SELECT 1 
    FROM auth.users 
    WHERE auth.email() = 'producingwithvijay@gmail.com'
  ));
