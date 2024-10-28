'use client';

import { motion } from 'framer-motion';
import { Code2, Palette, Server } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces with React, Next.js, and TypeScript.',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Creating scalable server-side applications using Node.js, Express, and databases.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Designing beautiful and intuitive user experiences with modern design tools.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I'm a passionate full-stack developer with expertise in modern web technologies.
          I love creating beautiful, functional, and user-friendly applications.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-muted">
              <CardHeader>
                <skill.icon className="w-12 h-12 mb-4 text-primary mx-auto" />
                <CardTitle className="text-center">{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}