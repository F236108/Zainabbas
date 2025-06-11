
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, Download, Trash2, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface Resume {
  id: string;
  filename: string;
  file_path: string;
  content_type: string;
  file_size: number;
  uploaded_at: string;
  is_current: boolean;
}

const CVManager = () => {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [isAdminSectionOpen, setIsAdminSectionOpen] = useState(false);
  const { toast } = useToast();

  // Simple admin authentication - in production, use proper auth
  const ADMIN_PASSWORD = 'admin123'; // Change this to a secure password

  useEffect(() => {
    fetchResumes();
    createBucketIfNotExists();
  }, []);

  const createBucketIfNotExists = async () => {
    try {
      // Check if bucket exists
      const { data: buckets } = await supabase.storage.listBuckets();
      const resumesBucket = buckets?.find(bucket => bucket.name === 'resumes');
      
      if (!resumesBucket) {
        // Create bucket if it doesn't exist
        const { error } = await supabase.storage.createBucket('resumes', {
          public: true,
          allowedMimeTypes: ['application/pdf'],
          fileSizeLimit: 10485760 // 10MB
        });
        
        if (error) {
          console.error('Error creating bucket:', error);
        } else {
          console.log('Resumes bucket created successfully');
        }
      }
    } catch (error) {
      console.error('Error checking/creating bucket:', error);
    }
  };

  const fetchResumes = async () => {
    try {
      const { data, error } = await supabase
        .from('resumes')
        .select('*')
        .order('uploaded_at', { ascending: false });

      if (error) throw error;
      setResumes(data || []);
    } catch (error) {
      console.error('Error fetching resumes:', error);
    }
  };

  const handleAdminLogin = () => {
    if (adminPassword === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setShowAdminPanel(true);
      toast({
        title: "Admin Access Granted",
        description: "You can now manage CVs.",
      });
    } else {
      toast({
        title: "Access Denied",
        description: "Incorrect admin password.",
        variant: "destructive",
      });
    }
    setAdminPassword('');
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (file.type !== 'application/pdf') {
      toast({
        title: "Invalid File Type",
        description: "Please upload a PDF file.",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (10MB limit)
    if (file.size > 10485760) {
      toast({
        title: "File Too Large",
        description: "Please upload a file smaller than 10MB.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);

    try {
      // Upload file to storage
      const fileExt = file.name.split('.').pop();
      const fileName = `cv_${Date.now()}.${fileExt}`;
      const filePath = fileName;

      console.log('Uploading file:', { fileName, filePath, fileSize: file.size });

      const { error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) {
        console.error('Upload error:', uploadError);
        throw uploadError;
      }

      console.log('File uploaded successfully');

      // Mark all previous resumes as not current
      await supabase
        .from('resumes')
        .update({ is_current: false })
        .neq('id', '00000000-0000-0000-0000-000000000000'); // Update all

      // Insert new resume record
      const { error: insertError } = await supabase
        .from('resumes')
        .insert({
          filename: file.name,
          file_path: filePath,
          content_type: file.type,
          file_size: file.size,
          is_current: true,
        });

      if (insertError) {
        console.error('Insert error:', insertError);
        throw insertError;
      }

      console.log('Resume record inserted successfully');

      toast({
        title: "CV Uploaded Successfully",
        description: "Your CV has been uploaded and set as current.",
      });

      fetchResumes();
    } catch (error) {
      console.error('Error uploading CV:', error);
      toast({
        title: "Upload Failed",
        description: `Failed to upload CV: ${error.message}`,
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
      // Reset file input
      event.target.value = '';
    }
  };

  const handleDownload = async (resume: Resume) => {
    try {
      const { data, error } = await supabase.storage
        .from('resumes')
        .download(resume.file_path);

      if (error) throw error;

      // Create download link
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = resume.filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast({
        title: "Download Started",
        description: "CV download has started.",
      });
    } catch (error) {
      console.error('Error downloading CV:', error);
      toast({
        title: "Download Failed",
        description: "Failed to download CV. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (resumeId: string, filePath: string) => {
    if (!window.confirm('Are you sure you want to delete this CV?')) return;

    try {
      // Delete from storage
      const { error: storageError } = await supabase.storage
        .from('resumes')
        .remove([filePath]);

      if (storageError) throw storageError;

      // Delete from database
      const { error: dbError } = await supabase
        .from('resumes')
        .delete()
        .eq('id', resumeId);

      if (dbError) throw dbError;

      toast({
        title: "CV Deleted",
        description: "CV has been successfully deleted.",
      });

      fetchResumes();
    } catch (error) {
      console.error('Error deleting CV:', error);
      toast({
        title: "Delete Failed",
        description: "Failed to delete CV. Please try again.",
        variant: "destructive",
      });
    }
  };

  const currentResume = resumes.find(resume => resume.is_current);

  return (
    <div className="bg-muted/50 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <FileText className="h-5 w-5 mr-2 text-electric" />
        CV Management
      </h3>

      {/* Public Download Section */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-400 mb-2">Download Latest CV</h4>
        {currentResume ? (
          <Button
            onClick={() => handleDownload(currentResume)}
            className="bg-electric hover:bg-electric-dark text-black font-medium"
          >
            <Download className="h-4 w-4 mr-2" />
            Download CV ({currentResume.filename})
          </Button>
        ) : (
          <p className="text-gray-400 text-sm">No CV available for download.</p>
        )}
      </div>

      {/* Collapsible Admin Section */}
      <Collapsible open={isAdminSectionOpen} onOpenChange={setIsAdminSectionOpen}>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className="w-full justify-between border-t border-muted pt-4 hover:bg-muted/50"
          >
            <span className="text-sm font-medium text-gray-400">Admin Access</span>
            {isAdminSectionOpen ? (
              <ChevronUp className="h-4 w-4 text-gray-400" />
            ) : (
              <ChevronDown className="h-4 w-4 text-gray-400" />
            )}
          </Button>
        </CollapsibleTrigger>
        
        <CollapsibleContent className="mt-4">
          {!isAdmin ? (
            <div className="space-y-2">
              <div className="flex gap-2">
                <Input
                  type="password"
                  placeholder="Admin password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  className="bg-background border-muted"
                  onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
                />
                <Button
                  onClick={handleAdminLogin}
                  variant="outline"
                  className="border-electric text-electric hover:bg-electric hover:text-black"
                >
                  Login
                </Button>
              </div>
            </div>
          ) : (
            showAdminPanel && (
              <div className="space-y-6">
                {/* Upload Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Upload New CV
                  </label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileUpload}
                      disabled={isUploading}
                      className="bg-background border-muted"
                    />
                    {isUploading && (
                      <span className="text-sm text-electric">Uploading...</span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Only PDF files are allowed. Maximum file size: 10MB
                  </p>
                </div>

                {/* CV List */}
                {resumes.length > 0 && (
                  <div>
                    <h5 className="text-sm font-medium text-gray-300 mb-2">Manage CVs</h5>
                    <div className="space-y-2">
                      {resumes.map((resume) => (
                        <div
                          key={resume.id}
                          className="flex items-center justify-between p-3 bg-background rounded border border-muted"
                        >
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-200">
                              {resume.filename}
                              {resume.is_current && (
                                <span className="ml-2 px-2 py-1 text-xs bg-electric text-black rounded">
                                  Current
                                </span>
                              )}
                            </p>
                            <p className="text-xs text-gray-400">
                              Uploaded: {new Date(resume.uploaded_at).toLocaleDateString()}
                              {resume.file_size && ` • ${Math.round(resume.file_size / 1024)} KB`}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDownload(resume)}
                              className="border-electric text-electric hover:bg-electric hover:text-black"
                            >
                              <Download className="h-3 w-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleDelete(resume.id, resume.file_path)}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Button
                  onClick={() => {
                    setIsAdmin(false);
                    setShowAdminPanel(false);
                  }}
                  variant="ghost"
                  className="text-gray-400 hover:text-white"
                  size="sm"
                >
                  Logout Admin
                </Button>
              </div>
            )
          )}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default CVManager;
