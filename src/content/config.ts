import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    day: z.number(),
    date: z.coerce.date(),
    difficulty: z.enum(['easy', 'medium', 'hard']),
    topics: z.array(z.string()),
    timeComplexity: z.string(),
    spaceComplexity: z.string(),
  }),
});

export const collections = { blog };
