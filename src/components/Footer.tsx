
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <a href="#home" className="text-electric text-2xl font-bold mb-6">
            Zain<span className="text-white">Abbas</span>
          </a>
          
          <div className="flex space-x-6 mb-8">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-electric transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/zain-abbas102" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-electric transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/zain_abbas02" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-electric transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="mailto:zain.abbas@example.com" className="text-gray-400 hover:text-electric transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <div className="w-full max-w-md h-px bg-muted mb-6" />
          
          <div className="flex flex-col md:flex-row justify-between items-center w-full">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zain Abbas. All rights reserved.
            </p>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-electric text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-electric text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
