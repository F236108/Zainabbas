
import { Book, Code, User, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="services" className="py-20 bg-secondary">
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
          Services I Offer
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="blur-card p-6 transition-all duration-500 hover:shadow-lg hover:shadow-electric/20 transform hover:translate-y-[-5px] border border-transparent hover:border-electric/20"
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  className="p-3 bg-electric/20 rounded-lg mr-4"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(51, 195, 240, 0.3)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <service.icon className="h-6 w-6 text-electric" />
                </motion.div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-4">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-center text-sm text-gray-300 group"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="mr-2 text-electric transition-all duration-300 group-hover:scale-125">•</span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
