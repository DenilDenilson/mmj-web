import { defineCollection } from "astro:content";

// Definiendo mis colecciones
const courseCollection = defineCollection({
  type: "content",
});

export const collections = {
  carrers: courseCollection,
};
