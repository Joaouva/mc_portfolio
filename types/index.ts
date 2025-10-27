export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'residential' | 'interior' | 'urban' | 'all';
  featuredImage: string;
  images: string[];
  description: string;
  year?: string;
  location?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

