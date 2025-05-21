
import { Card, CardContent } from '@/components/ui/card';
import { Book, Briefcase, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.6 }
    }
  };

  return (
    <section id="about" className="bg-secondary py-20">
      <motion.div 
        className="section-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.h2 
          className="section-title"
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bio */}
          <motion.div variants={cardVariants}>
            <Card className="bg-background/50 backdrop-blur-sm border border-muted h-full transform transition-all duration-300 hover:shadow-xl hover:shadow-electric/10 hover:border-electric/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-electric/20 p-3 rounded-md mr-3">
                    <Code className="h-6 w-6 text-electric" />
                  </div>
                  <h3 className="text-xl font-semibold">Who I Am</h3>
                </div>
                <p className="text-gray-300">
                  I am a passionate Electrical Engineering student at FAST National University with a focus on circuit design and programming. My expertise in C++ and hardware systems allows me to bring creative solutions to complex engineering challenges.
                </p>
                <p className="mt-4 text-gray-300">
                  I believe in the power of combining theoretical knowledge with hands-on experience to create practical applications that solve real-world problems.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Education */}
          <motion.div variants={cardVariants}>
            <Card className="bg-background/50 backdrop-blur-sm border border-muted h-full transform transition-all duration-300 hover:shadow-xl hover:shadow-electric/10 hover:border-electric/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-electric/20 p-3 rounded-md mr-3">
                    <Book className="h-6 w-6 text-electric" />
                  </div>
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div className="mb-4">
                  <h4 className="font-medium text-electric">B.Sc. Electrical Engineering</h4>
                  <p className="text-sm text-gray-400">2023 - 2027 (Expected)</p>
                  <p className="text-gray-300">FAST National University of Computer and Emerging Sciences, Faisalabad</p>
                </div>
                <div>
                  <h4 className="font-medium text-electric">Areas of Study</h4>
                  <ul className="mt-2 space-y-2">
                    {["Circuit Design & Analysis", "Programming in C++", "Electronics & Digital Systems", "Electrical Power Systems"].map((item, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-center text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                      >
                        <span className="mr-2 text-electric">•</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Career Goals */}
          <motion.div variants={cardVariants}>
            <Card className="bg-background/50 backdrop-blur-sm border border-muted h-full transform transition-all duration-300 hover:shadow-xl hover:shadow-electric/10 hover:border-electric/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-electric/20 p-3 rounded-md mr-3">
                    <Briefcase className="h-6 w-6 text-electric" />
                  </div>
                  <h3 className="text-xl font-semibold">Career Goals</h3>
                </div>
                <p className="text-gray-300">
                  I am dedicated to developing innovative solutions that bridge the gap between electrical engineering theory and practical application. My goal is to become a specialized electrical engineer focused on creating efficient and sustainable electrical systems.
                </p>
                <p className="mt-4 text-gray-300">
                  I'm particularly interested in exploring renewable energy systems, smart grid technologies, and the integration of IoT in electrical engineering applications.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
