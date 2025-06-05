
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const ResumeDownload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentResume, setCurrentResume] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchCurrentResume();
  }, []);

  const fetchCurrentResume = async () => {
    try {
      const { data, error } = await supabase
        .from('resumes')
        .select('*')
        .eq('is_current', true)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching resume:', error);
        return;
      }

      setCurrentResume(data);
    } catch (error) {
      console.error('Error fetching current resume:', error);
    }
  };

  const downloadResume = async () => {
    if (!currentResume) {
      toast({
        title: "No Resume Available",
        description: "Sorry, no resume is currently available for download.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.storage
        .from('resumes')
        .download(currentResume.file_path);

      if (error) {
        throw error;
      }

      // Create download link
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = currentResume.filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast({
        title: "Download Started",
        description: "Your resume download has started.",
      });
    } catch (error) {
      console.error('Error downloading resume:', error);
      toast({
        title: "Download Failed",
        description: "Failed to download resume. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={downloadResume}
      disabled={isLoading || !currentResume}
      className="bg-electric hover:bg-electric/80 text-primary-foreground"
    >
      {isLoading ? (
        <>
          <FileText className="mr-2 h-4 w-4 animate-spin" />
          Downloading...
        </>
      ) : (
        <>
          <Download className="mr-2 h-4 w-4" />
          Download Resume
        </>
      )}
    </Button>
  );
};

export default ResumeDownload;
