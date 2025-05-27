
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const HeroSection = () => {
  // Enhanced animation variants for smoother 60fps transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smoother motion
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop" as const
      }
    }
  };

  const glowVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop" as const
      }
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(to right bottom, rgba(13, 17, 23, 0.9), rgba(13, 17, 23, 0.9))"
      }}
    >
      {/* Background Elements with enhanced animations */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [-20, 20, -20],
            x: [-10, 10, -10]
          }}
          transition={{ 
            duration: 1.2,
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-electric/10 blur-3xl" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [20, -20, 20],
            x: [10, -10, 10]
          }}
          transition={{ 
            duration: 1.2, 
            delay: 0.3,
            y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 7, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-20 left-[10%] w-80 h-80 rounded-full bg-tech-purple/10 blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [-15, 15, -15],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 1.2, 
            delay: 0.6,
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          className="absolute top-40 left-1/4 w-40 h-40 rounded-full bg-tech-blue/10 blur-3xl"
        />
      </div>

      <motion.div 
        className="container mx-auto px-4 flex flex-col lg:flex-row items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content */}
        <motion.div 
          className="lg:w-1/2 lg:pr-8 text-center lg:text-left"
          variants={itemVariants}
        >
          <motion.span 
            className="inline-block px-4 py-1 rounded-full bg-electric/10 text-electric mb-4 text-sm font-medium"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(51, 195, 240, 0.2)",
              transition: { duration: 0.2, ease: "easeOut" }
            }}
          >
            Electrical Engineering Student
          </motion.span>

          <motion.h1 
            className="mb-4"
            variants={itemVariants}
          >
            <motion.span 
              className="block text-5xl md:text-6xl lg:text-7xl font-bold"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              Zain Abbas
            </motion.span>
            <motion.span 
              className="block text-gradient text-2xl md:text-3xl lg:text-4xl mt-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              Innovating Through Technology
            </motion.span>
          </motion.h1>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ 
              duration: 1.2, 
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="h-1 bg-electric mx-auto lg:mx-0 my-6"
          />
          
          <motion.p 
            className="mb-8 text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0"
            variants={itemVariants}
          >
            Turning complex engineering challenges into <span className="text-highlight">innovative solutions</span> through circuit design and programming expertise at FAST National University.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ 
                scale: 0.95,
                transition: { duration: 0.1 }
              }}
            >
              <Button 
                className="bg-electric hover:bg-electric-dark text-black font-medium transition-all duration-300 flex items-center gap-2"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Portfolio
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ 
                scale: 0.95,
                transition: { duration: 0.1 }
              }}
            >
              <Button 
                variant="outline" 
                className="border-electric text-electric hover:bg-electric/10 transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ 
                scale: 0.95,
                transition: { duration: 0.1 }
              }}
            >
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
              >
                Resume 
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Download className="h-4 w-4" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Stats */}
          <motion.div 
            className="mt-10 flex justify-center lg:justify-start gap-8"
            variants={itemVariants}
          >
            {[
              { number: "2+", label: "Years Experience" },
              { number: "6+", label: "Projects" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 1.2 + index * 0.1,
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <motion.h3 
                  className="text-electric text-3xl font-bold"
                  animate={{ 
                    textShadow: [
                      "0 0 5px rgba(51, 195, 240, 0.5)",
                      "0 0 10px rgba(51, 195, 240, 0.8)",
                      "0 0 5px rgba(51, 195, 240, 0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Profile Image */}
        <motion.div 
          className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
          variants={itemVariants}
        >
          <div className="relative">
            <motion.div 
              className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-electric/20 relative z-10"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(51, 195, 240, 0.5)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              variants={glowVariants}
              animate="animate"
            >
              <motion.img 
                src="https://i.postimg.cc/j2dxy1vN/2.jpg"
                alt="Zain Abbas" 
                className="w-full h-full object-cover"
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              />
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -z-10 inset-0 blur-2xl bg-electric/20 rounded-full"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
                boxShadow: [
                  '0 0 20px 5px rgba(51, 195, 240, 0.3)', 
                  '0 0 40px 15px rgba(51, 195, 240, 0.5)', 
                  '0 0 20px 5px rgba(51, 195, 240, 0.3)'
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Floating tech icons */}
            <motion.div 
              className="absolute top-5 -left-10 w-16 h-16 bg-secondary rounded-lg flex items-center justify-center shadow-lg border border-electric/20"
              variants={floatingVariants}
              animate="animate"
              whileHover={{ 
                scale: 1.15, 
                rotate: 10,
                backgroundColor: "rgba(51, 195, 240, 0.1)",
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              initial={{ opacity: 0, x: -50, rotate: -10 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-2xl font-bold text-electric">C++</span>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-10 -right-5 w-16 h-16 bg-secondary rounded-lg flex items-center justify-center shadow-lg border border-electric/20"
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: '2s' }}
              whileHover={{ 
                scale: 1.15, 
                rotate: -10,
                backgroundColor: "rgba(51, 195, 240, 0.1)",
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              initial={{ opacity: 0, x: 50, rotate: 10 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ delay: 1.7, duration: 0.8, ease: "easeOut" }}
            >
              <motion.span 
                className="text-electric text-2xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⚡
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator with enhanced animation */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2" 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1, ease: "easeOut" }}
      >
        <motion.div 
          className="w-8 h-12 rounded-full border-2 border-electric flex justify-center pt-2 cursor-pointer"
          animate={{ 
            y: [0, 10, 0],
            borderColor: [
              "rgba(51, 195, 240, 0.5)",
              "rgba(51, 195, 240, 1)",
              "rgba(51, 195, 240, 0.5)"
            ]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{ 
            scale: 1.1,
            transition: { duration: 0.2 }
          }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div 
            className="w-1 h-3 bg-electric rounded-full"
            animate={{
              opacity: [1, 0.3, 1],
              scaleY: [1, 0.5, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
