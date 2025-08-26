import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const techStack = [
    { name: 'HTML/CSS', icon: Globe, color: 'text-orange-500' },
    { name: 'JavaScript', icon: Code, color: 'text-yellow-500' },
    { name: 'React', icon: Smartphone, color: 'text-blue-500' },
    { name: 'Node.js', icon: Server, color: 'text-green-500' },
    { name: 'Database', icon: Database, color: 'text-purple-500' },
    { name: 'UI/UX', icon: Palette, color: 'text-pink-500' },
  ];

  const timeline = [
    {
      year: '2023',
      title: 'Started Web Development Journey',
      description: 'Began learning HTML, CSS, and JavaScript fundamentals',
    },
    {
      year: '2023',
      title: 'First React Project',
      description: 'Built my first React application and fell in love with component-based architecture',
    },
    {
      year: '2024',
      title: 'Full-Stack Development',
      description: 'Expanded to backend development with Node.js and database management',
    },
    {
      year: '2025',
      title: 'Hackathon Participation',
      description: 'Participated in multiple hackathons, winning recognition for innovative solutions',
    },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate web developer with a love for creating beautiful, functional, and user-friendly applications. 
            My journey in web development has been driven by curiosity and a desire to solve real-world problems through code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Tech Stack */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">
              Tech <span className="gradient-text">Stack</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <Card className="glass-effect hover:shadow-xl transition-all duration-300 border-border/50 mt-7 p-6">
                    <CardContent className="p-6 text-center">
                      <tech.icon className={`h-12 w-12 mx-auto mb-4 ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                      <h4 className="font-semibold text-foreground">{tech.name}</h4>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Journey Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">
              My <span className="gradient-text">Journey</span>
            </h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 border-l-2 border-primary/30 last:border-l-0"
                >
                  <div className="absolute left-0 top-0 transform -translate-x-1/2">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  </div>
                  <div className="glass-effect p-6 rounded-lg hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-primary font-bold text-lg">{item.year}</span>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="glass-effect border-border/50 p-8 max-w-7xl mx-auto">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-6">
                What I <span className="gradient-text">Bring</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-primary">Frontend Excellence</h4>
                  <p className="text-muted-foreground">Creating responsive, interactive, and visually appealing user interfaces with modern frameworks.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-primary">Backend Development</h4>
                  <p className="text-muted-foreground">Building robust server-side applications and APIs with efficient database management.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-primary">Problem Solving</h4>
                  <p className="text-muted-foreground">Analytical thinking and creative solutions to complex technical challenges.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;