import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AdminResumeUpload from '@/components/AdminResumeUpload';

const Index = () => {
  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const hash = target.getAttribute('href');
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            window.scrollTo({
              behavior: 'smooth',
              top: element.getBoundingClientRect().top + window.scrollY - 80,
            });
            
            // Update URL without causing a page reload
            history.pushState(null, '', hash);
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <AdminResumeUpload />
    </div>
  );
};

export default Index;
