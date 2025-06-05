
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, Instagram, Send, Github } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Zain Abbas',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thanks for your message! I'll get back to you soon.",
        variant: "default",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <motion.div 
        className="section-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.h2 
          className="section-title"
          variants={itemVariants}
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div 
            className="blur-card p-6 transform transition-all duration-300 hover:shadow-xl hover:shadow-electric/20"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your Name" 
                    className="bg-muted border-muted focus:border-electric transition-all duration-300" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-muted border-muted focus:border-electric transition-all duration-300" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="Subject" 
                  className="bg-muted border-muted focus:border-electric transition-all duration-300" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your Message" 
                  className="bg-muted border-muted h-32 focus:border-electric transition-all duration-300" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-electric hover:bg-electric-dark text-black font-medium w-full transition-all duration-300 transform hover:scale-105"
                disabled={isSubmitting}
              >
                <Send className="h-4 w-4 mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <p className="text-gray-300">
                Feel free to reach out to me for collaborations, project inquiries, or just to say hello. I'm always open to discussing new opportunities and interesting challenges.
              </p>
              
              <div className="space-y-4">
                {/* University Email */}
                <motion.div 
                  className="flex items-center transform transition-all duration-300 hover:translate-x-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-10 h-10 rounded-full bg-electric/20 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-electric" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">University Email</p>
                    <a 
                      href="mailto:F236108@cfd.nu.edu.pk" 
                      className="text-gray-300 hover:text-electric transition-colors"
                    >
                      F236108@cfd.nu.edu.pk
                    </a>
                  </div>
                </motion.div>

                {/* Personal Email */}
                <motion.div 
                  className="flex items-center transform transition-all duration-300 hover:translate-x-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-10 h-10 rounded-full bg-electric/20 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-electric" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Personal Email</p>
                    <a 
                      href="mailto:zainabbasm416@gmail.com" 
                      className="text-gray-300 hover:text-electric transition-colors"
                    >
                      zainabbasm416@gmail.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center transform transition-all duration-300 hover:translate-x-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-10 h-10 rounded-full bg-electric/20 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-electric" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a 
                      href="tel:+923464040192" 
                      className="text-gray-300 hover:text-electric transition-colors"
                    >
                      +92-346-4040192
                    </a>
                  </div>
                </motion.div>

                {/* GitHub */}
                <motion.div 
                  className="flex items-center transform transition-all duration-300 hover:translate-x-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-10 h-10 rounded-full bg-electric/20 flex items-center justify-center mr-4">
                    <Github className="h-5 w-5 text-electric" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <a 
                      href="https://github.com/F236108" 
                      className="text-electric hover:underline transition-colors" 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      github.com/F236108
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center transform transition-all duration-300 hover:translate-x-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-10 h-10 rounded-full bg-electric/20 flex items-center justify-center mr-4">
                    <Linkedin className="h-5 w-5 text-electric" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/zain-abbas102" 
                      className="text-electric hover:underline transition-colors" 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      zain-abbas102
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center transform transition-all duration-300 hover:translate-x-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-10 h-10 rounded-full bg-electric/20 flex items-center justify-center mr-4">
                    <Instagram className="h-5 w-5 text-electric" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Instagram</p>
                    <a 
                      href="https://www.instagram.com/zain_abbas02" 
                      className="text-electric hover:underline transition-colors" 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      @zain_abbas02
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
