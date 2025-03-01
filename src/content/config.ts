import { glob } from "astro/loaders";
import { z, defineCollection, reference } from "astro:content";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      author: z.string(),
      date: z.date(),
      tag: z.string().optional(),
      image: image(),
      imageAlt: z.string(),
      defaultLocaleVersion: reference("blog").optional(),
    }),
});

export const collections = {
  blog: blogCollection,
};
