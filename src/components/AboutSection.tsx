
import { Card, CardContent } from '@/components/ui/card';
import { Book, Briefcase, Code } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-secondary py-20">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bio */}
          <Card className="bg-background/50 backdrop-blur-sm border border-muted">
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
          
          {/* Education */}
          <Card className="bg-background/50 backdrop-blur-sm border border-muted">
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
                <ul className="list-disc list-inside text-gray-300">
                  <li>Circuit Design & Analysis</li>
                  <li>Programming in C++</li>
                  <li>Electronics & Digital Systems</li>
                  <li>Electrical Power Systems</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          {/* Career Goals */}
          <Card className="bg-background/50 backdrop-blur-sm border border-muted">
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
