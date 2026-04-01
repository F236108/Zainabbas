
CREATE TABLE public.resumes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  filename TEXT NOT NULL,
  file_path TEXT NOT NULL,
  content_type TEXT,
  file_size INTEGER,
  is_current BOOLEAN DEFAULT false,
  uploaded_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.resumes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view resumes" ON public.resumes FOR SELECT USING (true);
CREATE POLICY "Allow insert resumes" ON public.resumes FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow update resumes" ON public.resumes FOR UPDATE USING (true);
CREATE POLICY "Allow delete resumes" ON public.resumes FOR DELETE USING (true);

INSERT INTO storage.buckets (id, name, public) VALUES ('resumes', 'resumes', true);

CREATE POLICY "Anyone can view resume files" ON storage.objects FOR SELECT USING (bucket_id = 'resumes');
CREATE POLICY "Anyone can upload resume files" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'resumes');
CREATE POLICY "Anyone can delete resume files" ON storage.objects FOR DELETE USING (bucket_id = 'resumes');
