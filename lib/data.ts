import { Project } from '@/types';

// Mock data - this will be replaced by Strapi CMS integration
export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    slug: 'project-one',
    category: 'residential',
    featuredImage: '/images/projects/project-one/01.webp',
    images: [
      '/images/projects/project-one/01.webp',
      '/images/projects/project-one/02.webp',
      '/images/projects/project-one/03.webp',
      '/images/projects/project-one/04.webp',
      '/images/projects/project-one/05.webp',
      '/images/projects/project-one/06.webp',
      '/images/projects/project-one/07.webp',
    ],
    description: 'A modern residential project featuring clean lines, natural materials, and thoughtful integration of light and space.',
    year: '2024',
    location: 'Portugal',
    tags: ['Modern', 'Residential', 'Interior Design', 'Architecture']
  },
  {
    id: '2',
    title: 'Project Two',
    slug: 'project-two',
    category: 'interior',
    featuredImage: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800',
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
    ],
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    year: '2023',
    location: 'Paris, France',
    tags: ['Interior Design', 'Renovation', 'Contemporary']
  },
  {
    id: '3',
    title: 'Project Three',
    slug: 'project-three',
    category: 'urban',
    featuredImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
    ],
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    year: '2023',
    location: 'Tokyo, Japan',
    tags: ['Urban Planning', 'Public Space', 'Architecture']
  },
  {
    id: '4',
    title: 'Project Four',
    slug: 'project-four',
    category: 'residential',
    featuredImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800',
    ],
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    year: '2022',
    location: 'London, UK',
    tags: ['Residential', 'Minimalist', 'Sustainable']
  },
];

export async function getProjects(category?: string, tag?: string): Promise<Project[]> {
  // TODO: Replace with Strapi API call
  let filteredProjects = mockProjects;
  
  // Filter by category
  if (category && category !== 'all') {
    filteredProjects = filteredProjects.filter(project => project.category === category);
  }
  
  // Filter by tag
  if (tag) {
    filteredProjects = filteredProjects.filter(project => 
      project.tags && project.tags.some(t => t.toLowerCase() === tag.toLowerCase())
    );
  }
  
  return filteredProjects;
}

export async function getProject(slug: string): Promise<Project | null> {
  // TODO: Replace with Strapi API call
  return mockProjects.find(project => project.slug === slug) || null;
}

