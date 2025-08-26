import { motion } from 'framer-motion';
import { Trophy, Calendar, MapPin, Users, Clock, Award } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Hackathons = () => {
  const hackathons = [
    {
      title: '8-Hour Hackathon',
      organization: 'St. Joseph Engineering College',
      duration: '8 Hours',
      participants: '50+ Teams',
      achievement: 'Top 10 Finalist',
      description: 'Developed an innovative web application solving real-world problems within the 8-hour time constraint. Focused on creating a user-friendly interface with efficient backend integration.',
      skills: ['React', 'Node.js', 'API Integration', 'UI/UX Design'],
      icon: Clock,
      color: 'text-blue-500'
    },
    {
      title: '24-Hour Hackathon',
      organization: 'Vellore Institute of Technology',
      duration: '24 Hours',
      participants: '100+ Teams',
      achievement: 'Innovation Award',
      description: 'Built a comprehensive solution addressing social issues through technology. The project involved complex data processing, real-time features, and scalable architecture.',
      skills: ['Full-Stack Development', 'Database Design', 'Team Leadership', 'Problem Solving'],
      icon: Trophy,
      color: 'text-yellow-500'
    }
  ];

  const stats = [
    { icon: Trophy, label: 'Hackathons Participated', value: '2+' },
    { icon: Award, label: 'Awards Won', value: 'Coming Soon..' },
    { icon: Users, label: 'Team Collaborations', value: '6+' },
    { icon: Clock, label: 'Coding Hours', value: '32+' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <section id="hackathons" className="py-20 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hackathon <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I thrive in competitive environments where creativity meets technology. 
            Here are my hackathon achievements where I've pushed boundaries and delivered innovative solutions under pressure.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="glass-effect border-border/50 text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Hackathon Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="glass-effect border-border/50 hover:shadow-2xl transition-all duration-500 h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-full bg-primary/10 ${hackathon.color}`}>
                      <hackathon.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {hackathon.title}
                      </h3>
                      <p className="text-muted-foreground font-medium">{hackathon.organization}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{hackathon.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>{hackathon.participants}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="mb-4">
                    <Badge 
                      variant="secondary" 
                      className="bg-primary/10 text-primary hover:bg-primary/20 mb-4"
                    >
                      <Award className="h-3 w-3 mr-1" />
                      {hackathon.achievement}
                    </Badge>
                    <p className="text-muted-foreground leading-relaxed">
                      {hackathon.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Skills Demonstrated:</h4>
                    <div className="flex flex-wrap gap-2">
                      {hackathon.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="text-xs border-primary/30 text-primary"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="glass-effect border-border/50 p-8 max-w-7xl mx-auto">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">
                Ready for the Next <span className="gradient-text">Challenge</span>
              </h3>
              <p className="text-muted-foreground text-lg">
                I'm always excited to participate in new hackathons and collaborative coding challenges. 
                The fast-paced environment and innovative problem-solving make these events incredibly rewarding.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Hackathons;