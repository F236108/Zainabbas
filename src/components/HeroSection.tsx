
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(to right bottom, rgba(13, 17, 23, 0.9), rgba(13, 17, 23, 0.9))"
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-electric/10 blur-3xl animate-float" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute bottom-20 left-[10%] w-80 h-80 rounded-full bg-tech-purple/10 blur-3xl animate-float" 
          style={{ animationDelay: '2s' }} 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="absolute top-40 left-1/4 w-40 h-40 rounded-full bg-tech-blue/10 blur-3xl animate-float" 
          style={{ animationDelay: '1s' }} 
        />
      </div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 lg:pr-8 text-center lg:text-left"
        >
          <motion.span 
            className="inline-block px-4 py-1 rounded-full bg-electric/10 text-electric mb-4 text-sm font-medium"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Electrical Engineering Student
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <span className="block text-5xl md:text-6xl lg:text-7xl font-bold">Zain Abbas</span>
            <span className="block text-gradient text-2xl md:text-3xl lg:text-4xl mt-2">Innovating Through Technology</span>
          </motion.h1>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-electric mx-auto lg:mx-0 my-6"
          ></motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-8 text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0"
          >
            Turning complex engineering challenges into <span className="text-highlight">innovative solutions</span> through circuit design and programming expertise at FAST National University.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <Button 
              className="bg-electric hover:bg-electric-dark text-black font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Portfolio
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              className="border-electric text-electric hover:bg-electric/10 transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/5 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Resume <Download className="h-4 w-4" />
            </Button>
          </motion.div>

          {/* Social Stats */}
          <motion.div 
            className="mt-10 flex justify-center lg:justify-start gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <div className="text-center">
              <h3 className="text-electric text-3xl font-bold">3+</h3>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-electric text-3xl font-bold">6+</h3>
              <p className="text-sm text-gray-400">Projects</p>
            </div>
            <div className="text-center">
              <h3 className="text-electric text-3xl font-bold">100%</h3>
              <p className="text-sm text-gray-400">Client Satisfaction</p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
        >
          <div className="relative">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-electric/20 animate-glow relative z-10"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="https://i.postimg.cc/j2dxy1vN/2.jpg"
                alt="Zain Abbas" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -z-10 inset-0 blur-2xl bg-electric/20 rounded-full"
              animate={{ 
                boxShadow: ['0 0 20px 5px rgba(51, 195, 240, 0.3)', '0 0 40px 10px rgba(51, 195, 240, 0.5)', '0 0 20px 5px rgba(51, 195, 240, 0.3)']
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* Floating tech icons */}
            <motion.div 
              className="absolute top-5 -left-10 w-16 h-16 bg-secondary rounded-lg flex items-center justify-center shadow-lg border border-electric/20"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <span className="text-2xl font-bold text-electric">C++</span>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-10 -right-5 w-16 h-16 bg-secondary rounded-lg flex items-center justify-center shadow-lg border border-electric/20"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <span className="text-electric text-2xl">⚡</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2" 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div 
          className="w-8 h-12 rounded-full border-2 border-electric flex justify-center pt-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div className="w-1 h-3 bg-electric rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
