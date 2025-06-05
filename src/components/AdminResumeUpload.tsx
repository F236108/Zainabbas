
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const AdminResumeUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      // Validate file type
      const allowedTypes = ['.pdf', '.doc', '.docx'];
      const fileExtension = '.' + selectedFile.name.split('.').pop()?.toLowerCase();
      
      if (!allowedTypes.includes(fileExtension)) {
        toast({
          title: "Invalid File Type",
          description: "Please select a PDF, DOC, or DOCX file.",
          variant: "destructive",
        });
        return;
      }

      setFile(selectedFile);
    }
  };

  const uploadResume = async () => {
    if (!file) return;

    setIsUploading(true);
    try {
      // Generate unique filename
      const fileExt = file.name.split('.').pop();
      const fileName = `resume_${Date.now()}.${fileExt}`;
      const filePath = fileName;

      // Upload file to storage
      const { error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      // Mark all existing resumes as not current
      await supabase
        .from('resumes')
        .update({ is_current: false })
        .neq('id', '00000000-0000-0000-0000-000000000000'); // Update all records

      // Insert new resume record
      const { error: dbError } = await supabase
        .from('resumes')
        .insert({
          filename: file.name,
          file_path: filePath,
          is_current: true,
          file_size: file.size,
          content_type: file.type,
        });

      if (dbError) {
        throw dbError;
      }

      toast({
        title: "Resume Uploaded",
        description: "Your resume has been uploaded successfully.",
      });

      setFile(null);
      setShowUpload(false);
    } catch (error) {
      console.error('Error uploading resume:', error);
      toast({
        title: "Upload Failed",
        description: "Failed to upload resume. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  // Simple admin check - you can enhance this with proper authentication
  const isAdmin = window.location.search.includes('admin=true');

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!showUpload ? (
        <Button
          onClick={() => setShowUpload(true)}
          className="bg-red-600 hover:bg-red-700 text-white rounded-full p-3"
          title="Admin: Upload Resume"
        >
          <Upload className="h-5 w-5" />
        </Button>
      ) : (
        <div className="bg-white p-4 rounded-lg shadow-lg border max-w-sm">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-900">Upload Resume</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowUpload(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-3">
            <Input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileSelect}
              className="text-sm"
            />
            
            {file && (
              <div className="text-sm text-gray-600">
                Selected: {file.name}
              </div>
            )}
            
            <Button
              onClick={uploadResume}
              disabled={!file || isUploading}
              className="w-full"
            >
              {isUploading ? 'Uploading...' : 'Upload Resume'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminResumeUpload;
