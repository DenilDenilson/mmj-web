import SistemasEmbebidos from '@public/images/Broken.png'
import banner from '@/assets/Banners/firmware.webp'

export const proyectos = [
  {
    title: 'Sistema de Adquisición de Datos',
    description: `Nuestro sistema de adquisición de datos es una solución para monitorear el entorno ambiental. Alimentado por energía solar registra con precisión la temperatura, humedad y nivel, almacenando los datos en una memoria SD con marca de tiempo. Nuestro software de adquisición facilita la lectura, descarga y configuración del equipo, que opera de manera autónoma y utiliza el protocolo Modbus RTU para comunicarse a través de RS485.`,
    image: SistemasEmbebidos,
    highs: [
      'Equipo autónomo',
      'Registrador de datos',
      'Descarga de información a larga distancia',
      'Reportes y analítica'
    ],
    nextPage: '/proyectos/sistema-adquisicion-datos'
  },
  {
    title: 'Maquinaria Industrial',
    description: `La máquina generadora de vapor para la industria del calzado es un equipo especializado diseñado para producir vapor de alta presión y temperatura. Este vapor se utiliza en varios procesos de fabricación de calzado, como el moldeado, el conformado y el tratamiento térmico de materiales. Esta máquina es fundamental para garantizar la calidad y durabilidad de los productos finales, permitiendo la manipulación precisa y eficiente de diferentes tipos de materiales utilizados en la industria del calzado.`,
    image: SistemasEmbebidos,
    highs: [
      'Óptimización del uso de agua',
      'Ahorro de energía',
      'Aumento en la productividad del calzado',
      'Control automatizado mediante HMI'
    ],
    nextPage: '/proyectos/maquinaria-industrial'
  },
  {
    title: 'Sistema de Medición de Energía',
    description: `Equipo alimentado por batería, puede medir corriente AC de hasta 100 amperios, voltaje AC, potencia activa, reactiva, aparente y frecuencia. Los datos se almacenan en una tarjeta SD con marca de tiempo para un seguimiento preciso. La comunicación USB y el protocolo Modbus a través de RS485 facilitan la transferencia de datos a un software de adquisición, donde se grafican para un análisis detallado. Además, la conectividad WiFi permite la transferencia de datos a un servidor web para un acceso remoto conveniente.`,
    image: SistemasEmbebidos,
    highs: [
      'Análisis de calidad de energía',
      'Conectividad WiFi, USB, RS485',
      'Software de adquisición de datos',
      'Equipo industrial'
    ],
    nextPage: '/proyectos/sistema-medicion-energia'
  },
  {
    title: 'Ecosistema para Gestión de Emergencias',
    description: `El ecosistema de alertas integra un concentrador remoto con conectividad 4G LTE y GPS, enlazado con cinco botoneras inteligentes. Cada botonera tiene tres botones: Alerta, Precaución y Condiciones Normales. La comunicación entre el concentrador y las botoneras abarca hasta 200 metros por radio. Cuando se presiona un botón, la botonera notifica al concentrador, que transmite automáticamente la ubicación y estado a una plataforma web de gestión, facilitando la respuesta a emergencias.`,
    image: SistemasEmbebidos,
    highs: [
      'Botoneras IoT de bajo consumo de energía',
      'Software de gestión de emergencias',
      'Concentrador fácil de instalar en activos',
      'Ecosistema escalable'
    ],
    nextPage: '/proyectos/ecosistema-gestion-emergencias'
  },
  {
    title: 'Tablero de Control IoT para sistema BMS',
    description: `Nuestro Tablero de control para Gestión de Edificios (BMS), con tres PLCs personalizados que ofrecen amplias capacidades de E/S y conectividad Ethernet, RS485, WIFI, RF y 4G LTE. Proporciona una interfaz centralizada para monitorear y controlar energía, climatización, iluminación y seguridad, con visualización en tiempo real, programación de horarios y ajustes remotos. Mejora la eficiencia operativa y la seguridad del edificio, permitiendo la integración con dispositivos inteligentes y plataformas de gestión..`,
    image: SistemasEmbebidos,
    highs: [
      'Control y monitoreo remoto',
      'Sensores descentrelizados',
      'Diversas conectividades',
      'Equipos estandarizados'
    ],
    nextPage: '/proyectos/tablero-control-iot-bms'
  }
]

export const proyectComplete = {
  'sistema-adquisicion-datos': {
    title: 'Sistema de Adquisición de Datos',
    description: `Nuestro sistema de adquisición de datos es una solución para monitorear el entorno ambiental. Alimentado por energía solar registra con precisión la temperatura, humedad y nivel, almacenando los datos en una memoria SD con marca de tiempo. Nuestro software de adquisición facilita la lectura, descarga y configuración del equipo, que opera de manera autónoma y utiliza el protocolo Modbus RTU para comunicarse a través de RS485.`,
    bannerSrc: banner,
    mainImage: SistemasEmbebidos,
    highs: [
      'Equipo autónomo',
      'Registrador de datos',
      'Descarga de información a larga distancia',
      'Reportes y analítica'
    ],
    pictures: [
      SistemasEmbebidos,
      SistemasEmbebidos,
      SistemasEmbebidos,
      SistemasEmbebidos,
      SistemasEmbebidos,
      SistemasEmbebidos
    ],
    nextPage: '/proyectos/sistema-adquisicion-datos'
  },
  'maquinaria-industrial': {
    title: 'Sistema de Adquisición de Datos',
    description: `Nuestro sistema de adquisición de datos es una solución para monitorear el entorno ambiental. Alimentado por energía solar registra con precisión la temperatura, humedad y nivel, almacenando los datos en una memoria SD con marca de tiempo. Nuestro software de adquisición facilita la lectura, descarga y configuración del equipo, que opera de manera autónoma y utiliza el protocolo Modbus RTU para comunicarse a través de RS485.`,
    bannerSrc: banner,
    mainImage: SistemasEmbebidos,
    highs: [
      'Equipo autónomo',
      'Registrador de datos',
      'Descarga de información a larga distancia',
      'Reportes y analítica'
    ],
    pictures: [
      SistemasEmbebidos,
      SistemasEmbebidos,
      SistemasEmbebidos,
      SistemasEmbebidos,
      SistemasEmbebidos,
      SistemasEmbebidos
    ],
    nextPage: '/proyectos/sistema-adquisicion-datos'
  },
  'sistema-medicion-energia': {
    title: 'Sistema de Adquisición de Datos',
    description: `Nuestro sistema de adquisición de datos es una solución para monitorear el entorno ambiental. Alimentado por energía solar registra con precisión la temperatura, humedad y nivel, almacenando los datos en una memoria SD con marca de tiempo. Nuestro software de adquisición facilita la lectura, descarga y configuración del equipo, que opera de manera autónoma y utiliza el protocolo Modbus RTU para comunicarse a través de RS485.`,
    bannerSrc: banner,
    mainImage: SistemasEmbebidos,
    highs: [
      'Equipo autónomo',
      'Registrador de datos',
      'Descarga de información a larga distancia',
      'Reportes y analítica'
    ],
    pictures: [
      SistemasEmbebidos,
      SistemasEmbebidos,
      SistemasEmbebidos,
      SistemasEmbebidos,
      SistemasEmbebidos,
      SistemasEmbebidos
    ],
    nextPage: '/proyectos/sistema-adquisicion-datos'
  },
  'ecosistema-gestion-emergencias': {
    title: 'Sistema de Adquisición de Datos',
    description: `Nuestro sistema de adquisición de datos es una solución para monitorear el entorno ambiental. Alimentado por energía solar registra con precisión la temperatura, humedad y nivel, almacenando los datos en una memoria SD con marca de tiempo. Nuestro software de adquisición facilita la lectura, descarga y configuración del equipo, que opera de manera autónoma y utiliza el protocolo Modbus RTU para comunicarse a través de RS485.`,
    bannerSrc: banner,
    mainImage: SistemasEmbebidos,
    highs: [
      'Equipo autónomo',
      'Registrador de datos',
      'Descarga de información a larga distancia',
      'Reportes y analítica'
    ],
    pictures: [
      SistemasEmbebidos,
      SistemasEmbebidos,
      SistemasEmbebidos,
      SistemasEmbebidos,
      SistemasEmbebidos,
      SistemasEmbebidos
    ],
    nextPage: '/proyectos/sistema-adquisicion-datos'
  },
  'tablero-control-iot-bms': {
    title: 'Sistema de Adquisición de Datos',
    description: `Nuestro sistema de adquisición de datos es una solución para monitorear el entorno ambiental. Alimentado por energía solar registra con precisión la temperatura, humedad y nivel, almacenando los datos en una memoria SD con marca de tiempo. Nuestro software de adquisición facilita la lectura, descarga y configuración del equipo, que opera de manera autónoma y utiliza el protocolo Modbus RTU para comunicarse a través de RS485.`,
    bannerSrc: banner,
    mainImage: SistemasEmbebidos,
    highs: [
      'Equipo autónomo',
      'Registrador de datos',
      'Descarga de información a larga distancia',
      'Reportes y analítica'
    ],
    pictures: [
      SistemasEmbebidos,
      SistemasEmbebidos,
      SistemasEmbebidos,
      SistemasEmbebidos,
      SistemasEmbebidos,
      SistemasEmbebidos
    ],
    nextPage: '/proyectos/sistema-adquisicion-datos'
  }
}
