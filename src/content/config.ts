import { z, defineCollection, reference } from "astro:content";

// Definiendo mis colecciones
const carrerCollection = defineCollection({
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
        goals: z.array(z.string()),
        skills: z.array(z.string()),
      }),
    ),
  }),
});

const courseCollection = defineCollection({
  type: "data",
  schema: z.object({
    bgCourseCard: z.string(),
    startDate: z.string(),
    title: z.string(),
    description: z.string(),
    goals: z.array(z.string()),
    techs: z.array(z.string()),
    modality: z.string(),
    duration: z.number(),
    hours: z.number(),
    priceBase: z.number(),
    priceReal: z.number(),
    carrer: reference("carrers"),
  }),
});

const serviceCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    highlights: z.array(
      z.object({ title: z.string(), description: z.string() }),
    ),
    services: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        ImageSrc: z.string(),
      }),
    ),
  }),
});

const infoMMJCollection = defineCollection({
  type: "data",
});

export const collections = {
  carrers: carrerCollection,
  courses: courseCollection,
  services: serviceCollection,
  infoMMJ: infoMMJCollection,
};
