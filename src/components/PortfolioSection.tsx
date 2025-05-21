
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Image, FileText, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Scientific Calculator",
    description: "A C++ application with advanced mathematical operations including trigonometric functions, logarithms, and equation solving capabilities.",
    type: "Programming",
    icon: Code,
    tags: ["C++", "Mathematics", "Algorithm"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 2,
    title: "Contact Book",
    description: "Console-based contact management system in C++ allowing users to add, edit, delete, and search contacts with efficient data structures.",
    type: "Programming",
    icon: Code,
    tags: ["C++", "Data Structures", "File Handling"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 3,
    title: "Automatic Street Light System",
    description: "Hardware project using Light Dependent Resistors (LDRs) and transistors to automatically control street lights based on ambient lighting conditions.",
    type: "Hardware",
    icon: Image,
    tags: ["Circuit Design", "LDR", "Automation"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 4,
    title: "Traffic Light Control System",
    description: "Multisim simulation of an automated traffic light control system with timing sequences and pedestrian crossing functionality.",
    type: "Simulation",
    icon: Image,
    tags: ["Multisim", "Electronics", "Timing Circuits"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 5,
    title: "Robot",
    description: "Basic task automation and movement control robot with programmable sequences for simple operations and obstacle avoidance.",
    type: "Hardware & Programming",
    icon: Image,
    tags: ["Robotics", "Motors", "Sensors"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 6,
    title: "Transformer Model",
    description: "Step-up/step-down transformer demonstration model showcasing voltage transformation principles and electromagnetic induction.",
    type: "Hardware",
    icon: FileText,
    tags: ["Electromagnetics", "Power Systems", "Education"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=500"
  }
];

const PortfolioSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-background">
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
          My Portfolio
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <Card className="bg-secondary overflow-hidden border-electric/10 transform transition-all duration-500 hover:shadow-xl hover:shadow-electric/20 hover:translate-y-[-5px] h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-110" 
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-electric/10 rounded-lg flex items-center justify-center">
                      <project.icon className="h-6 w-6 text-electric" />
                    </div>
                    <span className="text-xs bg-electric/20 px-3 py-1 rounded-full text-electric">
                      {project.type}
                    </span>
                  </div>
                  <CardTitle className="text-2xl mt-3">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{project.type}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-muted px-2 py-1 rounded-full text-gray-300 transition-all duration-300 hover:bg-electric/20 hover:text-electric"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button 
                    variant="ghost" 
                    className="text-electric hover:bg-electric/10 hover:text-electric group transition-all duration-300"
                  >
                    <span>View Details</span>
                    <ExternalLink className="ml-2 h-4 w-4 transform transition-all duration-300 group-hover:translate-x-1" />
                  </Button>
                  <Button 
                    variant="outline"
                    className="text-electric border-electric hover:bg-electric/10 group transition-all duration-300"
                    onClick={() => window.open('https://github.com/F236108', '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    <span>GitHub</span>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PortfolioSection;
