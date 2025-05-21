
import { Book, Code, User, FileText } from 'lucide-react';

const services = [
  {
    icon: Book,
    title: "Technical Tutoring",
    description: "Personalized tutoring sessions in electrical engineering topics and C++ programming, tailored to student needs and learning pace.",
    features: [
      "Fundamentals of electrical circuits",
      "C++ programming concepts",
      "Electronics and digital systems",
      "Problem-solving techniques"
    ]
  },
  {
    icon: Code,
    title: "Project Development Assistance",
    description: "Collaborative support for engineering projects involving circuit design and programming, from concept to implementation.",
    features: [
      "Circuit design and review",
      "Programming assistance",
      "Component selection",
      "Testing and debugging"
    ]
  },
  {
    icon: User,
    title: "Teacher Assistance",
    description: "Support for educational activities including preparation of materials, grading, and facilitating student engagement.",
    features: [
      "Lab demonstration preparation",
      "Assignment grading",
      "Student doubt resolution",
      "Educational content development"
    ]
  },
  {
    icon: FileText,
    title: "Basic Technical Consulting",
    description: "Guidance and troubleshooting for academic projects, optimizing designs for improved performance.",
    features: [
      "Technical problem analysis",
      "Solution recommendations",
      "Design optimization",
      "Project documentation"
    ]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="section-container">
        <h2 className="section-title">Services I Offer</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="blur-card p-6 transition-transform duration-300 hover:transform hover:translate-y-[-5px]"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-electric/20 rounded-lg mr-4">
                  <service.icon className="h-6 w-6 text-electric" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-4">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <span className="mr-2 text-electric">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
