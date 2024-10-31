import { defineCollection } from "astro:content";

// Definiendo mis colecciones
const courseCollection = defineCollection({
  type: "data",
});

export const collections = {
  carrers: courseCollection,
};
