'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Simple Modern Looking Coming Soon Page',
    description:
      'A full-featured e-commerce platform built with Next.js and Stripe integration.',
    image:
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates.',
    image:
      'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Social Media Dashboard',
    description:
      'A comprehensive dashboard for managing social media accounts and analytics.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and
          experience.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-muted h-full flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
