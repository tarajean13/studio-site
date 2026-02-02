import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    disciplines: z.array(z.string()),
    thumbnail: z.string(),
    heroImage: z.string().optional(),
    description: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    comingSoon: z.boolean().default(false),
  }),
});

export const collections = { projects };
