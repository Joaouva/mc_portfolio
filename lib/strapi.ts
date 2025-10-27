// Strapi API configuration
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

interface StrapiResponse<T> {
  data: T;
  meta?: any;
}

export async function fetchAPI<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(STRAPI_TOKEN && { Authorization: `Bearer ${STRAPI_TOKEN}` }),
  };

  const mergedOptions: RequestInit = {
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
  };

  const url = `${STRAPI_URL}/api${path}`;
  
  try {
    const response = await fetch(url, mergedOptions);
    
    if (!response.ok) {
      throw new Error(`Strapi API error: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Strapi fetch error:', error);
    throw error;
  }
}

// Example function to fetch projects from Strapi
export async function getStrapiProjects(category?: string) {
  const query = category && category !== 'all' 
    ? `?filters[category][$eq]=${category}&populate=*`
    : '?populate=*';
  
  return fetchAPI<StrapiResponse<any[]>>(`/projects${query}`);
}

// Example function to fetch a single project
export async function getStrapiProject(slug: string) {
  return fetchAPI<StrapiResponse<any>>(
    `/projects?filters[slug][$eq]=${slug}&populate=*`
  );
}

