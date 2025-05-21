import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, Instagram, Send } from 'lucide-react';
const ContactSection = () => {
  return <section id="contact" className="py-20 bg-background">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="blur-card p-6">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                  <Input id="name" placeholder="Your Name" className="bg-muted border-muted" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                  <Input id="email" type="email" placeholder="Your Email" className="bg-muted border-muted" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                <Input id="subject" placeholder="Subject" className="bg-muted border-muted" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <Textarea id="message" placeholder="Your Message" className="bg-muted border-muted h-32" />
              </div>
              
              <Button type="submit" className="bg-electric hover:bg-electric-dark text-black font-medium w-full">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <p className="text-gray-300">
                Feel free to reach out to me for collaborations, project inquiries, or just to say hello. I'm always open to discussing new opportunities and interesting challenges.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-electric/20 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-electric" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-gray-300">zainabbasm416@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-electric/20 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-electric" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-gray-300">+92346-4040192</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-electric/20 flex items-center justify-center mr-4">
                    <Linkedin className="h-5 w-5 text-electric" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/zain-abbas102" className="text-electric hover:underline" target="_blank" rel="noreferrer">
                      www.linkedin.com/in/zain-abbas102
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-electric/20 flex items-center justify-center mr-4">
                    <Instagram className="h-5 w-5 text-electric" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Instagram</p>
                    <a href="https://www.instagram.com/zain_abbas02" className="text-electric hover:underline" target="_blank" rel="noreferrer">
                      @zain_abbas02
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;