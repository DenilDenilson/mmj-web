import bgEmbebido from "@src/Images/Carreras/HeroBg.avif";

export interface ISpecialite {
  title: string;
  backgroundHeroImage: ImageMetadata;
  description: string;
  goals: string[];
}

export const specialites = {
  embebido: {
    title: "Desarrollo de Software Embebido",
    backgroundHeroImage: bgEmbebido,
    description:
      "El desarrollo de software embebido es esencial en la creación de dispositivos inteligentes y sistemas autónomos. Aprenderás a programar microcontroladores, manejar sistemas en tiempo real y crear soluciones robustas.",
    goals: [
      "Comprender los principios del desarrollo de software embebido.",
      "Aprender a integrar hardware y software en sistemas embebidos",
      "Dominar la programación en tiempo real y la optimización de recursos.",
      "Desarrollar aplicaciones robustas y escalables.",
      "Comprender los principios del desarrollo de software embebido.",
    ],
  },
};
