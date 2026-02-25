import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";

const projects = defineCollection({
  name: "projects",
  directory: "content/projects",
  include: "*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    image: z.string().optional(),
    href: z.string().optional(),
    tech: z.array(z.string()),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  content: [projects],
});
