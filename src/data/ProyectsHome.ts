import proyectImage from "@src/Images/Home/Proyects/Mineria/MMJ-Proyectn.png";
import EnergiaProjectImage from "@src/Images/Home/Proyects/Energia/EnergiaProjectImage.jpg";
import EnergiaProjectImage2 from "@src/Images/Home/Proyects/Energia/EnergiaProjectImage2.jpg";
import EnergiaProjectImage3 from "@src/Images/Home/Proyects/Energia/EnergiaProjectImage3.jpg";
import EnergiaProjectImage4 from "@src/Images/Home/Proyects/Energia/EnergiaProjectImage4.jpg";
import EnergiaProjectImage5 from "@src/Images/Home/Proyects/Energia/EnergiaProjectImage5.jpg";
import AlertaProjectImage from "@src/Images/Home/Proyects/Emergencia/AlertaProjectImage.jpg";
import AlertaProjectImage2 from "@src/Images/Home/Proyects/Emergencia/AlertaProjectImage2.jpg";
import AlertaProjectImage3 from "@src/Images/Home/Proyects/Emergencia/AlertaProjectImage3.jpg";
import AlertaProjectImage4 from "@src/Images/Home/Proyects/Emergencia/AlertaProjectImage4.jpg";
import AlertaProjectImage5 from "@src/Images/Home/Proyects/Emergencia/AlertaProjectImage5.jpg";
import VaporProjectImage from "@src/Images/Home/Proyects/Industrial/VaporProjectImage.jpg";
import AgricolaProjectImage from "@src/Images/Home/Proyects/Agropecuario/AgricolaProjectImage.jpg";
import AgricolaProjectImage2 from "@src/Images/Home/Proyects/Agropecuario/AgricolaProjectImage2.jpg";
import AgricolaProjectImage3 from "@src/Images/Home/Proyects/Agropecuario/AgricolaProjectImage3.jpg";

export interface IProyectResume {
  title: string;
  description1: string;
  description2: string;
  achievements: string[];
  images: ImageMetadata[];
}

export const proyectsResume = [
  {
    title: "Sistema de Medición de energía",
    description1:
      "Nuestro sistema de medición de energía se basa en el uso de dos equipos avanzados: el RS485 Modbus RTU carril DIN, un vatímetro digital LCD de 4 cables que mide corriente AC de hasta 100 amperios, voltaje AC, potencia activa, reactiva, aparente, factor de potencia y frecuencia en sistemas de 380V CA y 60Hz.",
    description2:
      "Y el medidor de energía eléctrica de fase única DIN Rail Power Meter, que también monitorea parámetros eléctricos. Toda la data se envía a un software de adquisición de datos a través del protocolo Modbus RS485, donde se analizan todas las variables para un sistema de análisis de calidad de energía avanzado.",
    achievements: [
      "Análisis avanzado de calidad de energía.",
      "Medición precisa de corriente hasta 100A.",
      "Adaptación a sistemas industriales de 380V CA.",
      "Comunicación fiable vía Modbus RS485.",
      "Diseño compacto para fácil instalación en carril DIN.",
    ],
    images: [
      EnergiaProjectImage,
      EnergiaProjectImage2,
      EnergiaProjectImage3,
      EnergiaProjectImage4,
      EnergiaProjectImage5,
    ],
  },

  {
    title: "Ecosistema para Gestión de Alertas",
    description1:
      "El ecosistema de alertas integra un concentrador remoto con conectividad 4G LTE y GPS, enlazado con cinco botoneras inteligentes. Cada botonera tiene tres botones: Alerta, Precaución y Condiciones Normales.",
    description2:
      "La comunicación entre el concentrador y las botoneras abarca hasta 200 metros por radio. Cuando se presiona un botón, la botonera notifica al concentrador, que transmite automáticamente la ubicación y estado a una plataforma web de gestión, facilitando la respuesta a emergencias.",
    achievements: [
      "Envío automático de ubicación",
      "Alertas con 4G LTE y GPS",
      "Botoneras de tres niveles",
      "Comunicación a 200 m por radio",
      "Gestión rápida en plataforma web",
    ],
    images: [
      AlertaProjectImage,
      AlertaProjectImage2,
      AlertaProjectImage3,
      AlertaProjectImage4,
      AlertaProjectImage5,
    ],
  },
  {
    title: "Maquinaria Generadora de Vapor",
    description1:
      "Nuestra máquina generadora de vapor, diseñada para la industria del calzado, produce vapor de alta presión y temperatura para procesos clave como el moldeado y tratamiento térmico. Equipado con un potente microcontrolador de 32 bits.",
    description2:
      "Este sistema automatizado mejora la productividad, ahorra energía y agua, y requiere mínima intervención humana. Una pantalla HMI permite al operario configurar fácilmente los parámetros del proceso, garantizando la calidad y durabilidad de los productos finales.",
    achievements: [
      "Generación de vapor de alta presión",
      "Ahorro de energía y agua",
      "Mejora en productividad del calzado",
      "Configuración sencilla con HMI",
      "Reducción de intervención humana y mejora de calidad",
    ],
    images: [VaporProjectImage],
  },
  {
    title: "Sistema de Monitoreo y Control Agrícola Inteligente",
    description1:
      "Este software proporciona una plataforma integral para gestionar variables ambientales y de riego en múltiples zonas de cultivo. Diseñado para maximizar la eficiencia agrícola, permite monitorear en tiempo real datos meteorológicos como temperatura, humedad, irradiancia y velocidad del viento.",
    description2:
      "Además, facilita la configuración de riego automatizado, adaptándose a las necesidades específicas de cada zona, y ofrece reportes detallados sobre el uso de agua y nutrientes. Con un sistema de alertas visuales, los usuarios pueden identificar rápidamente el estado de cada área, optimizando el desarrollo de los cultivos.",
    achievements: [
      "Monitoreo climático en tiempo real",
      "Riego automatizado por zonas",
      "Uso eficiente de agua y nutrientes",
      "Reportes detallados de condiciones",
      "Alertas visuales para cada área",
    ],
    images: [
      AgricolaProjectImage,
      AgricolaProjectImage2,
      AgricolaProjectImage3,
    ],
  },
  {
    title: "  Sistema de Seguimiento de Activos GNSS + LTE",
    description1:
      "Este proyecto de rastreador GNSS + LTE está diseñado para monitorear activos valiosos, utilizando módulos compactos de GNSS y LTE para localizar y reportar la posición en tiempo real.",
    description2:
      "Ideal para prevención de robos, seguimiento de vehículos en tránsito, y mantenimiento predictivo, incorpora tecnologías avanzadas de bajo consumo y un sistema de respaldo con batería para asegurar operatividad continua. La arquitectura compacta y robusta facilita su uso en entornos difíciles y asegura la protección de los activos en ubicaciones remotas.",
    achievements: [
      "Monitoreo en tiempo real de activos valiosos",
      "Comunicación confiable en ubicaciones remotas",
      "Mantenimiento predictivo basado en ubicación",
      "Diseño compacto y robusto para entornos difíciles",
      "Tecnologías de bajo consumo con respaldo de batería",
    ],
    images: [proyectImage],
  },
];
