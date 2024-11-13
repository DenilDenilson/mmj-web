import { z, defineCollection } from "astro:content";

// Definiendo mis colecciones
const courseCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    backgroundHeroImage: z.string(),
    description: z.string(),
    goals: z.array(z.string()),
    studentProfile: z.string(),
    skillsTech: z.array(z.string()),
    canPerform: z.array(z.string()),
    projects: z.array(
      z.object({
        bgProjectCard: z.string(),
        title: z.string(),
        description: z.string(),
        url: z.string(),
      }),
    ),
  }),
});

export const collections = {
  carrers: courseCollection,
};
