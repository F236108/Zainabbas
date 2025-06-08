
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine active section based on scroll position
      const sections = ['home', 'about', 'portfolio', 'services', 'contact'];
      const scrollPosition = window.scrollY + 300; // Offset for better UX
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.05
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <motion.a 
            href="#home" 
            className="text-electric text-2xl font-bold"
            variants={itemVariants}
          >
            Zain<span className="text-white">Abbas</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <motion.a 
                key={link.name} 
                href={link.href} 
                className={`nav-link relative ${activeSection === link.href.substring(1) ? 'text-electric' : ''}`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-electric"
                    layoutId="activeSection"
                  />
                )}
              </motion.a>
            ))}
            <motion.div variants={itemVariants}>
              <Button
                variant="outline"
                size="sm"
                className="ml-4 border-electric text-electric hover:bg-electric hover:text-primary-foreground transition-all duration-300"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </motion.div>
          </nav>

          {/* Mobile menu button */}
          <motion.button
            onClick={toggleMenu}
            className="md:hidden text-foreground hover:text-electric transition-colors"
            aria-label="Toggle menu"
            variants={itemVariants}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        variants={mobileMenuVariants}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className={`nav-link text-xl relative ${activeSection === link.href.substring(1) ? 'text-electric' : ''}`}
              onClick={toggleMenu}
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: index * 0.1 }
                }
              }}
              whileHover={{ scale: 1.1 }}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-electric"
                  layoutId="activeSectionMobile"
                />
              )}
            </motion.a>
          ))}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { delay: navLinks.length * 0.1 }
              }
            }}
          >
            <Button
              variant="outline"
              className="border-electric text-electric hover:bg-electric hover:text-primary-foreground transition-all duration-300"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
