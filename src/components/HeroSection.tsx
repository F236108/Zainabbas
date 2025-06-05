
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ResumeDownload from './ResumeDownload';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <div className="mb-8">
              <motion.img
                src="/placeholder.svg"
                alt="Zain Abbas"
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-electric shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            Hi, I'm{' '}
            <span className="text-electric bg-gradient-to-r from-electric to-blue-400 bg-clip-text text-transparent">
              Zain Abbas
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Full Stack Developer & UI/UX Enthusiast
          </motion.p>

          <motion.p 
            className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            I craft digital experiences that blend beautiful design with powerful functionality. 
            Passionate about creating solutions that make a difference.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            variants={itemVariants}
          >
            <ResumeDownload />
            <Button
              variant="outline"
              size="lg"
              className="border-electric text-electric hover:bg-electric hover:text-primary-foreground transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Talk
            </Button>
          </motion.div>

          <motion.div 
            className="flex justify-center space-x-6"
            variants={itemVariants}
          >
            <motion.a
              href="https://github.com/F236108"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-electric transition-colors p-2"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/zain-abbas102"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-electric transition-colors p-2"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="mailto:zainabbasm416@gmail.com"
              className="text-muted-foreground hover:text-electric transition-colors p-2"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-electric/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 1.3,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
