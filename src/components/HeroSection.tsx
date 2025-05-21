
import { Button } from '@/components/ui/button';

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
        <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-electric/10 blur-3xl animate-float" />
        <div className="absolute bottom-20 left-[10%] w-80 h-80 rounded-full bg-tech-purple/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-40 left-1/4 w-40 h-40 rounded-full bg-tech-blue/10 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="lg:w-1/2 lg:pr-8 text-center lg:text-left">
          <h1 className="mb-4">
            <span className="block">Zain Abbas</span>
            <span className="block text-gradient text-3xl md:text-4xl lg:text-5xl">Electrical Engineering Student</span>
          </h1>
          
          <div className="w-20 h-1 bg-electric mx-auto lg:mx-0 my-6"></div>
          
          <p className="mb-8 text-lg md:text-xl text-gray-300">
            Turning ideas into <span className="text-highlight">innovative solutions</span> through circuit design and programming expertise.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button className="bg-electric hover:bg-electric-dark text-black font-medium">
              View Portfolio
            </Button>
            <Button variant="outline" className="border-electric text-electric hover:bg-electric/10">
              Contact Me
            </Button>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-electric/20 animate-glow">
              {/* Replace with Zain's actual image */}
              <div className="w-full h-full bg-gradient-to-br from-secondary to-background flex items-center justify-center">
                <span className="text-electric text-5xl font-bold">ZA</span>
              </div>
            </div>
            <div className="absolute -z-10 inset-0 blur-lg bg-electric/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
