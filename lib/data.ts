import { Project } from '@/types';

// Mock data - this will be replaced by Strapi CMS integration
export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    slug: 'project-one',
    category: 'residential',
    featuredImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800',
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    year: '2024',
    location: 'New York, USA'
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
    location: 'Paris, France'
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
    location: 'Tokyo, Japan'
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
    location: 'London, UK'
  },
];

export async function getProjects(category?: string): Promise<Project[]> {
  // TODO: Replace with Strapi API call
  if (category && category !== 'all') {
    return mockProjects.filter(project => project.category === category);
  }
  return mockProjects;
}

export async function getProject(slug: string): Promise<Project | null> {
  // TODO: Replace with Strapi API call
  return mockProjects.find(project => project.slug === slug) || null;
}

