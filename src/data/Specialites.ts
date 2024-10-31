import bgEmbebido from "@src/Images/Carreras/HeroBg.avif";
import bgCourseCard from "@src/Images/Carreras/BgCourseCard.png";

export interface IProject {
  bgProjectCard: ImageMetadata;
  title: string;
  description: string;
  url: string;
}

export interface ICourse {
  bgCourseCard: ImageMetadata;
  startDate: string;
  title: string;
  description: string;
  goals?: string[];
  modality: string;
  duration: number;
  hours: number;
  priceBase: number;
  priceReal: number;
}

export interface ISpecialite {
  title: string;
  backgroundHeroImage: ImageMetadata;
  description: string;
  goals: string[];
  studentProfile: string;
  skillsTech: string[];
  canPerform: string[];
  courses: ICourse[];
  nextLaunch: ICourse;
  projects: IProject[];
}

export const specialites: { [key: string]: ISpecialite } = {
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
    studentProfile:
      "Al concluir la especialidad de Desarrollo de Software Embebido, el estudiante será un profesional altamente capacitado con habilidades tanto teóricas como prácticas en el diseño, implementación y optimización de sistemas embebidos.",
    skillsTech: [
      "Dominio de Microcontroladores",
      "Desarrollo de firmware con FreeRTOS",
      "Programación de sistemas en tiempo real",
      "Desarrollo de aplicaciones en C y C++",
      "Conocimiento de sistemas embebidos",
    ],
    canPerform: [
      "Ingeniero de software embebido",
      "Desarrollador de sistemas embebidos",
      "Ingeniero de sistemas en tiempo real",
      "Desarrollador de automatización",
      "Ingeniero de sistemas embebidos",
    ],
    courses: [
      {
        bgCourseCard: bgCourseCard,
        startDate: "12 de febrero del 2025",
        title: "Desarrollo de Software Embebido con Microcontroladores",
        description:
          "Aprende a desarrollar software para sistemas embebidos utilizando microcontroladores y herramientas de programación en tiempo real. Este curso incluye teoría y práctica con ejemplos aplicados a la industria. Este curso incluye teoría y práctica con ejemplos aplicados a la industria.",
        modality: "virtual",
        duration: 4,
        hours: 40,
        priceBase: 95.9,
        priceReal: 70,
      },
      {
        bgCourseCard: bgCourseCard,
        startDate: "12 de febrero del 2025",
        title: "Desarrollo de Software Embebido con Microcontroladores 2",
        description:
          "Aprende a desarrollar software para sistemas embebidos utilizando microcontroladores y herramientas de programación en tiempo real. Este curso incluye teoría y práctica con ejemplos aplicados a la industria. Este curso incluye teoría y práctica con ejemplos aplicados a la industria.",
        modality: "virtual",
        duration: 4,
        hours: 40,
        priceBase: 95.9,
        priceReal: 70,
      },
      {
        bgCourseCard: bgCourseCard,
        startDate: "12 de febrero del 2025",
        title: "Desarrollo de Software Embebido con Microcontroladores 3",
        description:
          "Aprende a desarrollar software para sistemas embebidos utilizando microcontroladores y herramientas de programación en tiempo real. Este curso incluye teoría y práctica con ejemplos aplicados a la industria. Este curso incluye teoría y práctica con ejemplos aplicados a la industria.",
        modality: "virtual",
        duration: 4,
        hours: 40,
        priceBase: 95.9,
        priceReal: 70,
      },
    ],
    nextLaunch: {
      bgCourseCard: bgCourseCard,
      startDate: "12 de febrero del 2025",
      title: "Desarrollo de Software Embebido con Microcontroladores",
      description:
        "Aprende a desarrollar software para sistemas embebidos utilizando microcontroladores y herramientas de programación en tiempo real. Este curso incluye teoría y práctica con ejemplos aplicados a la industria. Este curso incluye teoría y práctica con ejemplos aplicados a la industria.",
      goals: [
        "Comprender los principios del desarrollo de software embebido.",
        "Aprender a integrar hardware y software en sistemas embebidos",
        "Dominar la programación en tiempo real y la optimización de recursos.",
        "Desarrollar aplicaciones robustas y escalables.",
        "Comprender los principios del desarrollo de software embebido.",
      ],
      modality: "virtual",
      duration: 4,
      hours: 40,
      priceBase: 95.9,
      priceReal: 70,
    },
    projects: [
      {
        bgProjectCard: bgCourseCard,
        title: "Diseña de un Sistema de Control para un Robot Móvil",
        description:
          "Desarrollarás un sistema de control embebido para electrodomésticos, integrando sensores y actuadores para mejorar su eficiencia y automatización.",
        url: "#",
      },
      {
        bgProjectCard: bgCourseCard,
        title: "Diseña de un Sistema de Control para un Robot Móvil",
        description:
          "Desarrollarás un sistema de control embebido para electrodomésticos, integrando sensores y actuadores para mejorar su eficiencia y automatización.",
        url: "#",
      },
      {
        bgProjectCard: bgCourseCard,
        title: "Diseña de un Sistema de Control para un Robot Móvil",
        description:
          "Desarrollarás un sistema de control embebido para electrodomésticos, integrando sensores y actuadores para mejorar su eficiencia y automatización.",
        url: "#",
      },
    ],
  },
};
