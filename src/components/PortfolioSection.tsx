
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Image, File } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Scientific Calculator",
    description: "A C++ application with advanced mathematical operations including trigonometric functions, logarithms, and equation solving capabilities.",
    type: "Programming",
    icon: Code,
    tags: ["C++", "Mathematics", "Algorithm"]
  },
  {
    id: 2,
    title: "Contact Book",
    description: "Console-based contact management system in C++ allowing users to add, edit, delete, and search contacts with efficient data structures.",
    type: "Programming",
    icon: Code,
    tags: ["C++", "Data Structures", "File Handling"]
  },
  {
    id: 3,
    title: "Automatic Street Light System",
    description: "Hardware project using Light Dependent Resistors (LDRs) and transistors to automatically control street lights based on ambient lighting conditions.",
    type: "Hardware",
    icon: Image,
    tags: ["Circuit Design", "LDR", "Automation"]
  },
  {
    id: 4,
    title: "Traffic Light Control System",
    description: "Multisim simulation of an automated traffic light control system with timing sequences and pedestrian crossing functionality.",
    type: "Simulation",
    icon: Image,
    tags: ["Multisim", "Electronics", "Timing Circuits"]
  },
  {
    id: 5,
    title: "Robot",
    description: "Basic task automation and movement control robot with programmable sequences for simple operations and obstacle avoidance.",
    type: "Hardware & Programming",
    icon: Image,
    tags: ["Robotics", "Motors", "Sensors"]
  },
  {
    id: 6,
    title: "Transformer Model",
    description: "Step-up/step-down transformer demonstration model showcasing voltage transformation principles and electromagnetic induction.",
    type: "Hardware",
    icon: File,
    tags: ["Electromagnetics", "Power Systems", "Education"]
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="section-container">
        <h2 className="section-title">My Portfolio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="bg-secondary hover:shadow-lg hover:shadow-electric/10 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-electric/10 rounded-lg flex items-center justify-center mb-4">
                  <project.icon className="h-6 w-6 text-electric" />
                </div>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{project.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-muted px-2 py-1 rounded-full text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="ghost" 
                  className="text-electric hover:bg-electric/10 hover:text-electric w-full"
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
