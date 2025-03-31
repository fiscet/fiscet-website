'use client';

import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Fisevents',
    link: 'https://fisevents.com',
    description: 'A multi-tenant SaaS for event management.',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    title: 'Marketplace App',
    link: '#',
    description: 'A custom marketplace platform for digital goods.',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    title: 'Corporate Website',
    link: '#',
    description: 'A sleek corporate website for a growing business.',
    image: 'https://via.placeholder.com/300x200'
  }
];

export function PortfolioSection() {
  return (
    <div className="mt-12 text-center">
      <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <PortfolioCard key={index} project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PortfolioCard({ project }: { project: typeof projects[number] }) {
  return (
    <Card className="w-80 bg-white shadow-lg rounded-2xl overflow-hidden">
      <CardContent className="p-6 text-center">
        <Image
          src={project.image}
          alt={project.title}
          width={300}
          height={200}
          className="mb-4 rounded-lg"
        />
        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <Link href={project.link} className="text-blue-500 hover:underline">
          View Project
        </Link>
      </CardContent>
    </Card>
  );
}
