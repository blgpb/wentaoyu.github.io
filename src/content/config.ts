import { defineCollection, reference, z } from 'astro:content';

const linkSchema = z.object({
  label: z.string(),
  url: z.string().url()
});

const researchCollection = defineCollection({
  type: 'content',
  schema: z.object({
      title: z.string(),
      summary: z.string(),
      description: z.string(),
      keywords: z.array(z.string()).min(1),
      figure: z
        .object({
          src: z.string(),
          alt: z.string()
        })
        .optional(),
      links: z.array(linkSchema).default([]),
      relatedPublications: z.array(reference('publications')).default([])
    })
});

const publicationCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    venue: z.string(),
    year: z.number().int(),
    authors: z.array(z.string()).min(1),
    summary: z.string(),
    abstract: z.string(),
    topics: z.array(z.string()).min(1),
    awards: z.array(z.string()).default([]),
    doi: z.string().optional(),
    featured: z.boolean().default(false),
    links: z
      .object({
        pdf: z.string().url().optional(),
        arxiv: z.string().url().optional(),
        project: z.string().url().optional(),
        slides: z.string().url().optional(),
        code: z.string().url().optional(),
        video: z.string().url().optional()
      })
      .default({}),
    badges: z.array(z.string()).default([])
  })
});

const updatesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().transform((value) => new Date(value)),
    category: z.enum(['publication', 'talk', 'award', 'media', 'grant', 'service', 'reflection']).default('publication'),
    summary: z.string(),
    links: z.array(linkSchema).default([])
  })
});

const bioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    start: z.string().transform((value) => new Date(value)),
    end: z
      .string()
      .optional()
      .transform((value) => {
        if (!value) return undefined;
        if (value.toLowerCase() === 'present') return null;
        return new Date(value);
      }),
    location: z.string(),
    description: z.string(),
    type: z.enum(['education', 'research', 'teaching', 'service', 'honor']),
    highlights: z.array(z.string()).default([])
  })
});

const settingsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    hero: z.object({
      name: z.string(),
      title: z.string(),
      pronouns: z.string().optional(),
      affiliation: z.string(),
      mission: z.string(),
      location: z.string(),
      availability: z.string().optional()
    }),
    contact: z.object({
      email: z.string(),
      office: z.string().optional(),
      address: z.string(),
      officeHours: z.string().optional()
    }),
    social: z.object({
      scholar: z.string().url(),
      github: z.string().url(),
      linkedin: z.string().url(),
      orcid: z.string().url(),
      twitter: z.string().url().optional(),
      cv: z.string().url()
    }),
    footer: z.object({
      copyrightName: z.string()
    })
  })
});

export const collections = {
  research: researchCollection,
  publications: publicationCollection,
  updates: updatesCollection,
  bio: bioCollection,
  settings: settingsCollection
};
