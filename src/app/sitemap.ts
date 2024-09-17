import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.thenurseryatols.org',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.thenurseryatols.org/news',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.thenurseryatols.org/enrollment',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://www.thenurseryatols.org/calendar/events',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },

    {
      url: 'https://www.thenurseryatols.org/calendar/menu',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },

    {
      url: 'https://www.thenurseryatols.org/programs/infants',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },

    {
      url: 'https://www.thenurseryatols.org/programs/toddlers',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },

    {
      url: 'https://www.thenurseryatols.org/programs/daily-schedule',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },

    ///
  ];
}
