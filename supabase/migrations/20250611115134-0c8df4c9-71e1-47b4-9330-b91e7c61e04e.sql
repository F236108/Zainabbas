
-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Admin can upload resumes" ON public.resumes;
DROP POLICY IF EXISTS "Admin can update resumes" ON public.resumes;
DROP POLICY IF EXISTS "Admin can delete resumes" ON public.resumes;

-- Create more permissive policies for now (you can restrict later with proper auth)
CREATE POLICY "Allow all operations on resumes" 
  ON public.resumes 
  FOR ALL 
  USING (true) 
  WITH CHECK (true);

-- Update storage policies to be more permissive
DROP POLICY IF EXISTS "Admin can upload resumes" ON storage.objects;
DROP POLICY IF EXISTS "Admin can update resumes" ON storage.objects;
DROP POLICY IF EXISTS "Admin can delete resumes" ON storage.objects;

CREATE POLICY "Allow all operations on resume files" 
  ON storage.objects 
  FOR ALL 
  USING (bucket_id = 'resumes') 
  WITH CHECK (bucket_id = 'resumes');
