import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Import project images
import ecommerceImg from '@/assets/ecommerce-project.jpg';
import portfolioImg from '@/assets/portfolio-project.jpg';
import cryptoImg from '@/assets/crypto-project.jpg';
import qrAttendanceImg from '@/assets/qr-attendance-project.jpg';
import customerDataImg from '@/assets/customer-data-project.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration. Built with React frontend and Node.js backend.',
      image: ecommerceImg,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'CSS'],
      featured: true
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive and modern portfolio website showcasing my projects and skills. Features smooth animations, dark/light mode toggle, and optimized performance.',
      image: portfolioImg,
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      featured: false
    },
    {
      title: 'Gemini Clone',
      description: 'An AI-powered chat application inspired by Google Gemini. Features real-time messaging, smart responses, and a clean, intuitive interface.',
      image: cryptoImg,
      technologies: ['JavaScript', 'HTML', 'CSS', 'API Integration'],
      featured: true
    },
    {
      title: 'Crypto Marketplace',
      description: 'A comprehensive cryptocurrency marketplace with real-time price tracking, interactive charts, market news, and portfolio management features.',
      image: cryptoImg,
      technologies: ['React', 'Chart.js', 'APIs', 'CSS', 'JavaScript'],
      featured: true
    },
    {
      title: 'QR Code & Geo-location Attendance System',
      description: 'An innovative attendance tracking system using QR codes and geolocation verification. Features admin dashboard and real-time attendance monitoring.',
      image: qrAttendanceImg,
      technologies: ['React', 'Node.js', 'QR Code API', 'Geolocation API'],
      featured: false
    },
    {
      title: 'Customer Data Log System',
      description: 'A comprehensive customer relationship management system with data analytics, reporting features, and intuitive user interface for business operations.',
      image: customerDataImg,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Charts'],
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development, 
            from frontend interfaces to full-stack applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`group ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <Card className="glass-effect border-border/50 hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button
            size="lg"
            variant="outline"
            className="hover:scale-105 transition-transform duration-300"
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;