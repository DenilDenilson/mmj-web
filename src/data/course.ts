// Banners
import nextionBanner from '@/assets/Banners/nextion-banner.webp'
import picIotBanner from '@/assets/Banners/pic-iot-banner.webp'
import picAsmBanner from '@/assets/Banners/pic-asm-banner.webp'

// Laptops
import picIoTLaptop from '@/assets/Course/laptop-pic-iot.webp'
import nextionLaptop from '@/assets/Course/Laptop-nextion.png'

// Tablets
import picIotTablet from '@/assets/Course/tablet-pic-iot.webp'
import nextionTablet from '@/assets/Course/Tablet-nextion.png'

// Kit
import kitPicIot from '@/assets/Course/kit-pic-iot.webp'

// Fotos
import foto1 from '@/assets/Course/foto1.webp';
import foto2 from '@/assets/Course/foto2.webp';
import foto3 from '@/assets/Course/foto3.webp';
import foto4 from '@/assets/Course/foto4.webp';
import foto1Nextion from '@/assets/Course/foto1-nextion.jpg';
import foto2Nextion from '@/assets/Course/foto2-nextion.jpg';
import foto3Nextion from '@/assets/Course/foto3-nextion.jpg';
import foto4Nextion from '@/assets/Course/foto4-nextion.jpg';

import laptop from '@/assets/Course/Laptop.webp'
import broken from '@public/images/Broken.png'
import tablet from '@/assets/Course/Tablet.webp'

import AnsiCThumb from '@/assets/ThumbnailCourses/AnsiC.webp'
import AltiumThumb from '@/assets/ThumbnailCourses/Altium.webp'
import mplabxide from '@/assets/Course/mplabxide.webp'
import AnalogicaDiseñoThumb from '@/assets/ThumbnailCourses/AnalogicaDiseño.webp'
import picAsm from '@/assets/ThumbnailCourses/picAsm.webp'

import xc8 from '@/assets/Course/xc8.webp'
import labview from '@/assets/Course/labview.webp'
import proteus from '@/assets/Course/proteus.webp'
import wifi from '@/assets/Course/wifi.webp'
import http from '@/assets/Course/http.webp'
import mqtt from '@/assets/Course/mqtt.webp'
import espressif from '@/assets/Course/espressif.webp'
import nextion from '@/assets/Course/nextion.webp'
import arduino from '@/assets/Course/arduino.webp'

// DONES
// F I R M W A R E
// nextion-arduino ✅
// pic-iot ✅

// P R E S E C I A L E S
// Pic y lora 

export const courses = {
  //
  'pic-asm': {
    title: 'Diseño digital de las compuertas al procesador',
    bannerSrc: broken,
    laptopImage: broken,
    tabletImage: broken,
    description: 'Nuestra especialización cubre una amplia gama de temas, desde el manejo de periféricos hasta protocolos de comunicación, sistemas HMI, comunicaciones inalámbricas y desarrollo de proyectos reales. Aprenderás a optimizar el código, manejar la arquitectura de los microcontroladores y aplicar técnicas avanzadas para mejorar la eficiencia y el rendimiento. Te preparamos para enfrentar desafíos avanzados en el desarrollo de productos electrónicos innovadores basados en sistemas embebidos.',
    time: '48',
    clients: 'Ingenieros, técnicos y estudiantes de ingeniería que deseen aprender a programar Microcontroladores PIC en el nuevo ASM PIC AS XC8 y manejar las ultimas herramientas de hardware y software de microchip',
    NeedKnow: 'La especialización está diseñada de manera que se adapta a personas con cero conocimientos en programación y microcontroladores, pero también para aquellos que tienen un conocimiento intermedio y quieren incrementar/profundizar los conceptos/destrezas en el Diseño de sistemas embebidos basados en MCUs, pero con proyectos reales en base a la alta experiencia del docente que desarrolla diversas soluciones para distintos campos de la industria',
    syllabus: [
      {
        theme: 'Diseño de sistemas embebidos',
        topics: [
          'Aplicaciones de Sistemas Embebidos',
          'Comparación entre Microprocesadores, Microcontroladores y SOC',
          'Arquitectura de Microchip en 8, 16 y 32 Bits',
          'Diferencias entre Assembler y ANSI C',
          'Clasificación y arquitectura de Microcontroladores de 8 bits',
          'Análisis de memoria de programa, memoria de datos RAM y arquitectura ortogonal de Microchip, así como aprendizaje de instrucciones de carga a W aritméticos y booleanos'
        ]
      },
      {
        theme: 'Set de instrucciones',
        topics: [
          'Manejo de la memoria RAM y direccionamiento de bancos',
          'Instrucciones de aprendizaje con memoria RAM',
          'Instrucciones booleanas orientadas al byte',
          'Instrucciones de comparación para bits y bytes',
          'Instrucciones aritméticas para bytes',
          'Instrucciones de salto, rotación, incremento y decremento para bytes'
        ]
      },
      {
        theme: 'Arquitectura PIC18',
        topics: [
          'Series de los Microcontroladores PIC18FXXXXX',
          'Características del nuevo ensamblador de Microchip',
          'Organización del código fuente en ensamblador',
          'Análisis del microcontrolador PIC18F45K50',
          'Manejo del Program Counter (PC).',
          'Configuración del periférico GPIO y uso de MPLAB X con el depurador integrado, incluyendo ejercicios prácticos con Proteus y el PIC18F45K50'
        ]
      },
      {
        theme: 'Subrutinas y diseño de librerías',
        topics: [
          'Directivas del nuevo Ensamblador XC8',
          'Manejo de subrutinas y subrutinas anidadas',
          'Aprendizaje de instrucciones con la PILA LIFO',
          'Análisis de la frecuencia y tiempo de ciclo de instrucción, MIPS, frecuencia de reloj y ciclo-máquina',
          'Diseño de retardos por software',
          'Implementación de un programa "Hola Mundo" para el PIC18F45K50 con un LED parpadeante, manejo de un Display de 7 Segmentos y diseño de librerías para el control de distintos periféricos y recursos del microcontrolador'
        ]
      },
      {
        theme: 'Manejo de tablas',
        topics: [
          'Implementación de rutinas para lectura y escritura en la memoria flash',
          'Aprendizaje de las nuevas directivas del PIC AS',
          'Técnica de la Multiplexación de datos',
          'Manejo del Display de 7 segmentos multiplexado',
          'Desarrollo de rutinas en lenguaje ensamblador para la conversión de binario a BCD',
          'Ejercicios prácticos con tablas y contadores'
        ]
      },
      {
        theme: 'Pantalla LCD y teclado matricial 4x4',
        topics: [
          'Diseño de la librería para la pantalla LCD',
          'Implementación de la librería para la pantalla LCD',
          'Diseño de la librería para el manejo del teclado matricial 4x4',
          'Implementación de la librería para el manejo del teclado matricial 4x4',
          'Pruebas y depuración',
          'Documentación y ejemplos de uso'
        ]
      }
    ],
    syllabusSrc: '#',
    proyects: [
      "Sistema de control de acceso por teclado matricial",
      "Sistema de control y monitoreo para un semáforo inteligente",
      "Diseño de un sistema de parqueo para automóviles",
      "Controlador de velocidad para motores DC",
      "Sistema de monitoreo meteorológico",
      "Sistema de adquisición de datos HMI",
      "Sistema de monitoreo/control por bluetooth y red celular"
    ],
    youLearns: [
      {
      imageSrc: mplabxide,
      title: "MPlab X IDE"
      },
      {
      imageSrc: xc8,
      title: "MPlab XC8 Compiler"
      },
      {
      imageSrc: proteus,
      title: "Proteus"
      },
      {
      imageSrc: labview,
      title: "Labview"
      }
    ],
    KitImageSrc: tablet,
    kits: [
      {
        title: 'Entrenador PIC Universal MMJ',
        description: 'La tarjeta de desarrollo es compatible con cualquier Microcontrolador de la serie 16/18 de 40 pines de microchip. Cuenta con alimentación externa de hasta 36V o USB, 8leds, pantalla LCD, 4 pulsadores, display multiplexado, puerto RS232/USB y 3 expansores mikrobuses con la capacidad de conectarle más de 1500 dispositivos externos entre sensores, actuadores, gateways, pantallas, interfaces, etc.'
      },
      {
        title: 'Curiosity Nano',
        description: 'La tarjeta de desarrollo utiliza un microcontrolador PIC18F57Q43 cuenta con un interruptor de usuario mecánico, un LED de usuario amarillo, depurador integrado, LED verde de alimentación y estado, programación y depuración, puerto COM virtual (CDC), canal de analizador lógico (GPIO), alimentación por USB y una corriente de salida máxima de 500 mA.'
      }
    ],
    OtherCourses: [
      {
        name: "Especialización en diseño electrónico profesional con Altium Designer y Normas IPC",
        imgSrc: AltiumThumb,
        nextPage: "/hardware/altium",
        imgAlt: "Especialización en diseño electrónico profesional con Altium Designer y Normas IPC"
      },
      {
        name: "Diseño de sistemas electrónicos analógicos y digitales",
        imgSrc: AnalogicaDiseñoThumb,
        nextPage: "/hardware/analogica-diseño",
        imgAlt: "Diseño de sistemas electrónicos analógicos y digitales"
      },
      {
        name: "DProgramación de microcontroladores PIC con el nuevo ensamblador PIC-AS XV8",
        imgSrc: picAsm,
        nextPage: "/firmware/pic-asm",
        imgAlt: "DProgramación de microcontroladores PIC con el nuevo ensamblador PIC-AS XV8"
      },
    ]
  },
  // DONE ✅
  'nextion': {
    title: 'Diseño de sistemas HMI con pantallas Nextion, esp32 y Arduino',
    bannerSrc: nextionBanner,
    laptopImage: nextionLaptop,
    tabletImage: nextionTablet,
    description: 'En este curso aprenderás a diseñar y desarrollar interfaces atractivas para sistemas HMI apoyándonos de Figma y Nextion Editor para las pantallas Nextion de cualquier tipo. También aprenderás a programar el ESP32 y Arduino para la comunicación con las pantallas Nextion y el manejo de sensores y actuadores para el desarrollo de proyectos IoT.',
    time: '39',
    clients: 'Ingenieros, técnicos y estudiantes de ingeniería que deseen aprender a programar pantallas Nextion y manejar las ultimas herramientas de hardware y software para el desarrollo de interfaces HMI y proyectos IoT.',
    NeedKnow: 'La especialización está diseñada de manera que se adapta a personas con cero conocimientos en programación y microcontroladores, pero también para aquellos que tienen un conocimiento intermedio y quieren incrementar/profundizar los conceptos/destrezas en el diseño y desarrollo de sistemas HMI para prioyectos IoT de la mano del docente que desarrolla diversas soluciones para distintos campos de la industria',
    fotos: [
      {
        src: foto1Nextion,
        alt: 'foto1'
      },
      {
        src: foto2Nextion,
        alt: 'foto2'
      },
      {
        src: foto3Nextion,
        alt: 'foto3'
      },
      {
        src: foto4Nextion,
        alt: 'foto4'
      }
    ],
    syllabus: [
      {
        theme: 'Introducción esp32 y Arduino',
        topics: [
          'Descripción de la familia de modulo ESP32',
          'Instalación y configuración de Arduino IDE',
          'Primer programa en Arduino para el módulo ESP32',
          'Manejo del puerto serial en ESP32 para debuguear',
          'Descripción de las funciones GPIO de ESP32',
          'Conociendo la configuración de pines del ESP32',
          'Control de luces LED y módulo Relay con ESP32'
        ]
      },
      {
        theme: 'Periféricos GPIO, ADC Y PWM',
        topics: [
          'Introducción al convertidor analógico digital',
          'Descripción pines analógicos del módulo ESP32',
          'Lectura de potenciómetro y sensor LDR',
          'Introducción a las señales PWM y aplicaciones',
          'Control de velocidad de motores DC con PWM',
          'Control de motores 12 VDC usando driver L298N',
        ]
      },
      {
        theme: 'Protocolos de comunicación y manejo de sensores',
        topics: [
          'Introducción a los protocolos de comunicación',
          'Estándares industriales RS232, RS422 y RS485',
          'Configuración del módulo UART en ESP32',
          'Transmisión y recepción de datos con ESP32',
          'Introducción al protocolo I2C y configuración en ESP32',
          'Medición de temperatura y humedad relativa con sensor',
          'DHT22',
          'Monitoreo de temperatura, presión, humedad y gas con',
          'sensor BME680'
        ]
      },
      {
        theme: 'Introducción a redes y WiFi',
        topics: [
          'Introducción a redes de internet, modelo OSI y TCP/IP',
          'Introducción y tecnologías del IoT',
          'Iniciando la conexión WiFi en ESP32',
          'ESP32 WiFi modo cliente',
          'ESP32 WiFi modo servidor',
          'ESP32 conexión a una red de internet'
        ]
      },
      {
        theme: 'Protocolo MQTT para IoT',
        topics: [
          'Introducción al protocolo MQTT',
          'Topología de MQTT PUBLISH/SUBSCRIBE',
          'Creación de cuenta en Ubidots',
          'Envío de datos de sensor BME680 a Ubidots',
          'Recepción de datos para control de modulo relay'
        ]
      },
      {
        theme: 'Introducción a los sistemas HMI y la tecnología Nextion',
        topics: [
          '¿Qué es un HMI y para qué sirve?',
          'Aplicaciones de los sistemas HMI',
          'Análisis de pantallas HMI Touch de Nextion',
          'Manejo del entorno Nextion Editor y sus herramientas',
          'Compilación y simulación en el entorno Nextion Editor',
          'Programación de la pantalla NX8048P050-011R',
          'Manejo del entorno Inkscape para diseño y edición de',
          'gráficos'
        ]
      }
    ],
    syllabusSrc: '#',
    proyects: [
      'Diseño HMI para el control de velocidad de un motor DC',
      'Diseño HMI para el control y monitoreo de temperatura de un horno',
      'Diseño de HMI para automatización del hogar - Central Domótica',
      'Diseño de HMI para automovil con indicadores de velocidad RPM, Temperatura',
      'de refrigerante, presión de aceite y pilotos de advertencia',
      'Diseño de HMI para el monitoreo y control centralizado de la calidad del aire',
      'ambiental de los alumnos'
    ],
    youLearns: [
      {
      imageSrc: arduino,
      title: "Arduino IDE"
      },
      {
      imageSrc: espressif,
      title: "Esp32"
      },
      {
      imageSrc: nextion,
      title: "Nextion"
      },
      {
      imageSrc: mqtt,
      title: "MQTT"
      }
    ],
    KitImageSrc: tablet,
    kits: [
      {
        title: 'SoC Esp32 Dev Kit v1',
        description: 'El chip esp32 en su presentación DevKit v1 se usará a lo largo de la especialización para la comunicación la pantalla y para los proyectos, así mismo se necesitan diferentes sensores y actuadores tales como potenciometros, ldrs, motores DC, un driver L298N, un sensor DHT22 y un sensor BME680.'
      },
      {
        title: 'Nextion Intelligent Series NX8048P050-011R',
        description: 'Esta pantalla Nextion pertenecente a la familia Intelligent Series NX8048P050-011R es una pantalla de 5 pulgadas con una resolución de 800x480 pixeles, con 65,536 colores y una interfaz de comunicación UART. Se usará para el diseño de las interfaces HMI de los proyectos.'
      }
    ],
    OtherCourses: [
      {
        name: "Especialización en diseño electrónico profesional con Altium Designer y Normas IPC",
        imgSrc: AltiumThumb,
        nextPage: "/hardware/altium",
        imgAlt: "Especialización en diseño electrónico profesional con Altium Designer y Normas IPC"
      },
      {
        name: "Diseño de sistemas electrónicos analógicos y digitales",
        imgSrc: AnalogicaDiseñoThumb,
        nextPage: "/hardware/analogica-diseño",
        imgAlt: "Diseño de sistemas electrónicos analógicos y digitales"
      },
      {
        name: "DProgramación de microcontroladores PIC con el nuevo ensamblador PIC-AS XV8",
        imgSrc: picAsm,
        nextPage: "/firmware/pic-asm",
        imgAlt: "DProgramación de microcontroladores PIC con el nuevo ensamblador PIC-AS XV8"
      },
    ]
  },
  // DONE ✅
  'pic-iot': {
    title: 'Programación de microcontroladores PIC y comunicación WiFi para IoT',
    bannerSrc: picIotBanner,
    laptopImage: picIoTLaptop,
    tabletImage: picIotTablet,
    description: 'En este curso aprenderemos a desarrollar sistemas inteligentes basados en microcontroladores PIC y la integración de la tecnología wifi con el módulo ESP8266 para conectarse a una red de internet y enviar datos de sensores a diferentes plataformas IoT. También veremos como desarrollar sistemas que permitan enviar notificaciones de alerta a la plataforma de WhatsApp.',
    time: '30',
    clients: 'Ingenieros, técnicos, estudiantes de ingeniería que deseen aprender a programar los microcontroladores PIC y manejar las ultimas herramientas de hardware y software para el desarrollo de proyectos IoT.',
    NeedKnow: 'Conocimientos básicos de fundamentos de programación.',
    fotos: [
      {
        src: foto1,
        alt: 'foto1'
      },
      {
        src: foto2,
        alt: 'foto2'
      },
      {
        src: foto3,
        alt: 'foto3'
      },
      {
        src: foto4,
        alt: 'foto4'
      }
    ],
    syllabus: [
      {
        theme: 'Arquitectura de microcontroladores PIC y la programación en C',
        topics: [
          'Introducción a la arquitectura de los Microcontroladores PIC',
          'Clasificación de familias, PIC12, PIC16, PIC18, dsPIC, PIC24 y PIC32',
          'Descripción del entono de desarrollo MPLAB X y compilador XC8.',
          'Análisis y configuración del módulo oscilador para el PIC18F45K50',
          'Configuración de registros GPIO: TRISx, PORTx y LATx para entradas y salidas',
          'Diseño de software para microcontroladores usando el lenguaje ANSI C '
        ]
      },
      {
        theme: 'Display de 7 segmentos y multiplexación',
        topics: [
          'Descripción del display 7 segmentos ánodo y cátodo común',
          'Descripción del display 7 segmentos multiplexado',
          'Técnicas de multiplexación en la programación',
          'Diseño de librería para manejo de display 7 segmentos',
        ]
      },
      {
        theme: 'Pantalla Lcd y teclado matricial 4x4',
        topics: [
          'Introducción a los módulos LCD 2x16 ',
          'Descripción de memorias CGROM, DDRAM y CGRAM',
          'Visualización en LCD de constantes y variables',
          'Descripción y funcionamiento del teclado matricial 4x4',
          'Implementación de librería para el módulo LCD y teclado.',
        ]
      },
      {
        theme: 'Interrupciones Internas y Externas – Módulo PPS',
        topics: [
          'Descripción del periférico de Interrupciones',
          'Flujo del sistema de Interrupciones',
          'Interrupciones externas INT0, INT1, INT2',
          'Configuración de nivel de prioridades para interrupciones',
          'Registros: INTCON, INTCON2, INTCON3 y RCON',
          '	Consideraciones para el uso de variables dentro de las ISR',
          'Proyecto de Conteo de cajas utilizando el sensor infrarrojo D80 NK',
          'Configuración del módulo PPS'
        ]
      },
      {
        theme: 'Temporizadores - TIMERS',
        topics: [
          'Descripción del periférico de TIMERS',
          'Diferencias y aplicaciones del Timer0, Timer1, Timer2 y Timer3',
          'Timers: modo contador y temporizador de 8 bits y 16 bits',
          'Análisis y configuración del módulo Timer0 ',
          'sarrollo de rutinas en lenguaje ensamblador para la conversión de binario a BCD',
          'Interrupción por desbordamiento del Timer0',
          'Manejo de sensor de ultrasonido HC-SR04'
        ]
      },
      {
        theme: 'Convertidor Analógico Digital - ADC',
        topics: [
          'Introducción al convertidor analógico digital.',
          'Características del módulo ADC del microcontrolador PIC18',
          'Configuración de registros: ADCON0, ADCON1, ADCON2 Y ADRESX',
          'Cálculos para el tiempo de adquisición y tiempo de conversión',
          'Diseño de una librería para el módulo ADC',
          'Lectura de variables analógicos con el MCU PIC18'
        ]
      }
    ],
    syllabusSrc: '#',
    proyects: [
      "Manejo de leds, pulsadores y display 7 segmentos",
      "Diseño de un contador de pulsos por el método del sondeo o polling",
      "Diseño de un contador de 0 a 9999 con display 7 segmentos Multiplexado",
      "Diseño de un sistema de seguridad con ingreso de contraseña con Lcd y teclado",
      "Sistema de conteo de cajas utilizando interrupciones.",
      "Medición de distancia usando el sensor de ultrasonido HC-SR04",
      "Lectura de sensores LM35, MCP9700A y FC-28 y transmisión de datos a la PC",
      "Control de cargas y monitoreo de sensores mediante el módulo USART",
      "Aplicación IoT en Ubidots para monitoreo de temperatura y humedad ",
      "Sistema de control de cargas AC desde internet usando Ubidots ",
      "Sistema de monitoreo con envío de notificaciones a WhastsApp"
    ],
    youLearns: [
      {
      imageSrc: mplabxide,
      title: "MPlab X IDE"
      },
      {
      imageSrc: xc8,
      title: "MPlab XC8 Compiler"
      },
      {
      imageSrc: http,
      title: "Http"
      },
      {
      imageSrc: wifi,
      title: "WiFi"
      }
    ],
    KitImageSrc: kitPicIot,
    kits: [
      {
        title: 'Entrenador PIC Universal MMJ',
        description: 'La tarjeta de desarrollo es compatible con cualquier Microcontrolador de la serie 16/18 de 40 pines de microchip. Cuenta con alimentación externa de hasta 36V o USB, 8leds, pantalla LCD, 4 pulsadores, display multiplexado, puerto RS232/USB y 3 expansores mikrobuses con la capacidad de conectarle más de 1500 dispositivos externos entre sensores, actuadores, gateways, pantallas, interfaces, etc.'
      },
      {
        title: 'Sensores y actuadores',
        description: 'Los sensores y actuadores serán un sensor infrarrojo E18-D80NK, HC-SR04, Relay MMJ con sensor MCP9700A, teclado matricial 4x4, display LCD 2x16, WiFi ESP8266, cable RS232 y FTID232L.'
      }
      // {
      //   title: 'Sensores y actuadores',
      //   description: 'La tarjeta de desarrollo utiliza un microcontrolador PIC18F57Q43 cuenta con un interruptor de usuario mecánico, un LED de usuario amarillo, depurador integrado, LED verde de alimentación y estado, programación y depuración, puerto COM virtual (CDC), canal de analizador lógico (GPIO), alimentación por USB y una corriente de salida máxima de 500 mA.'
      // }
    ],
    OtherCourses: [
      {
        name: "Especialización en diseño electrónico profesional con Altium Designer y Normas IPC",
        imgSrc: AltiumThumb,
        nextPage: "/hardware/altium",
        imgAlt: "Especialización en diseño electrónico profesional con Altium Designer y Normas IPC"
      },
      {
        name: "Diseño de sistemas electrónicos analógicos y digitales",
        imgSrc: AnalogicaDiseñoThumb,
        nextPage: "/hardware/analogica-diseño",
        imgAlt: "Diseño de sistemas electrónicos analógicos y digitales"
      },
      {
        name: "DProgramación de microcontroladores PIC con el nuevo ensamblador PIC-AS XV8",
        imgSrc: picAsm,
        nextPage: "/firmware/pic-asm",
        imgAlt: "DProgramación de microcontroladores PIC con el nuevo ensamblador PIC-AS XV8"
      },
    ]
  },
  'ansi-c': {
    title: 'Diseño digital de las compuertas al procesador',
    bannerSrc: AnsiCThumb,
    laptopImage: laptop,
    tabletImage: tablet,
    description: 'Nuestra especialización cubre una amplia gama de temas, desde el manejo de periféricos hasta protocolos de comunicación, sistemas HMI, comunicaciones inalámbricas y desarrollo de proyectos reales. Aprenderás a optimizar el código, manejar la arquitectura de los microcontroladores y aplicar técnicas avanzadas para mejorar la eficiencia y el rendimiento. Te preparamos para enfrentar desafíos avanzados en el desarrollo de productos electrónicos innovadores basados en sistemas embebidos.',
    time: '48',
    clients: 'Ingenieros, técnicos y estudiantes de ingeniería que deseen aprender a programar Microcontroladores PIC en el nuevo ASM PIC AS XC8 y manejar las ultimas herramientas de hardware y software de microchip',
    NeedKnow: 'La especialización está diseñada de manera que se adapta a personas con cero conocimientos en programación y microcontroladores, pero también para aquellos que tienen un conocimiento intermedio y quieren incrementar/profundizar los conceptos/destrezas en el Diseño de sistemas embebidos basados en MCUs, pero con proyectos reales en base a la alta experiencia del docente que desarrolla diversas soluciones para distintos campos de la industria',
    syllabus: [
      {
        theme: 'Diseño de sistemas embebidos',
        topics: [
          'Aplicaciones de Sistemas Embebidos',
          'Comparación entre Microprocesadores, Microcontroladores y SOC',
          'Arquitectura de Microchip en 8, 16 y 32 Bits',
          'Diferencias entre Assembler y ANSI C',
          'Clasificación y arquitectura de Microcontroladores de 8 bits',
          'Análisis de memoria de programa, memoria de datos RAM y arquitectura ortogonal de Microchip, así como aprendizaje de instrucciones de carga a W aritméticos y booleanos'
        ]
      },
      {
        theme: 'Set de instrucciones',
        topics: [
          'Manejo de la memoria RAM y direccionamiento de bancos',
          'Instrucciones de aprendizaje con memoria RAM',
          'Instrucciones booleanas orientadas al byte',
          'Instrucciones de comparación para bits y bytes',
          'Instrucciones aritméticas para bytes',
          'Instrucciones de salto, rotación, incremento y decremento para bytes'
        ]
      },
      {
        theme: 'Arquitectura PIC18',
        topics: [
          'Series de los Microcontroladores PIC18FXXXXX',
          'Características del nuevo ensamblador de Microchip',
          'Organización del código fuente en ensamblador',
          'Análisis del microcontrolador PIC18F45K50',
          'Manejo del Program Counter (PC).',
          'Configuración del periférico GPIO y uso de MPLAB X con el depurador integrado, incluyendo ejercicios prácticos con Proteus y el PIC18F45K50'
        ]
      },
      {
        theme: 'Subrutinas y diseño de librerías',
        topics: [
          'Directivas del nuevo Ensamblador XC8',
          'Manejo de subrutinas y subrutinas anidadas',
          'Aprendizaje de instrucciones con la PILA LIFO',
          'Análisis de la frecuencia y tiempo de ciclo de instrucción, MIPS, frecuencia de reloj y ciclo-máquina',
          'Diseño de retardos por software',
          'Implementación de un programa "Hola Mundo" para el PIC18F45K50 con un LED parpadeante, manejo de un Display de 7 Segmentos y diseño de librerías para el control de distintos periféricos y recursos del microcontrolador'
        ]
      },
      {
        theme: 'Manejo de tablas',
        topics: [
          'Implementación de rutinas para lectura y escritura en la memoria flash',
          'Aprendizaje de las nuevas directivas del PIC AS',
          'Técnica de la Multiplexación de datos',
          'Manejo del Display de 7 segmentos multiplexado',
          'Desarrollo de rutinas en lenguaje ensamblador para la conversión de binario a BCD',
          'Ejercicios prácticos con tablas y contadores'
        ]
      },
      {
        theme: 'Pantalla LCD y teclado matricial 4x4',
        topics: [
          'Diseño de la librería para la pantalla LCD',
          'Implementación de la librería para la pantalla LCD',
          'Diseño de la librería para el manejo del teclado matricial 4x4',
          'Implementación de la librería para el manejo del teclado matricial 4x4',
          'Pruebas y depuración',
          'Documentación y ejemplos de uso'
        ]
      }
    ],
    syllabusSrc: '#',
    proyects: [
      "Sistema de control de acceso por teclado matricial",
      "Sistema de control y monitoreo para un semáforo inteligente",
      "Diseño de un sistema de parqueo para automóviles",
      "Controlador de velocidad para motores DC",
      "Sistema de monitoreo meteorológico",
      "Sistema de adquisición de datos HMI",
      "Sistema de monitoreo/control por bluetooth y red celular"
    ],
    youLearns: [
      {
      imageSrc: mplabxide,
      title: "MPlab X IDE"
      },
      {
      imageSrc: xc8,
      title: "MPlab XC8 Compiler"
      },
      {
      imageSrc: proteus,
      title: "Proteus"
      },
      {
      imageSrc: labview,
      title: "Labview"
      }
    ],
    KitImageSrc: tablet,
    kits: [
      {
        title: 'Entrenador PIC Universal MMJ',
        description: 'La tarjeta de desarrollo es compatible con cualquier Microcontrolador de la serie 16/18 de 40 pines de microchip. Cuenta con alimentación externa de hasta 36V o USB, 8leds, pantalla LCD, 4 pulsadores, display multiplexado, puerto RS232/USB y 3 expansores mikrobuses con la capacidad de conectarle más de 1500 dispositivos externos entre sensores, actuadores, gateways, pantallas, interfaces, etc.'
      },
      {
        title: 'Curiosity Nano',
        description: 'La tarjeta de desarrollo utiliza un microcontrolador PIC18F57Q43 cuenta con un interruptor de usuario mecánico, un LED de usuario amarillo, depurador integrado, LED verde de alimentación y estado, programación y depuración, puerto COM virtual (CDC), canal de analizador lógico (GPIO), alimentación por USB y una corriente de salida máxima de 500 mA.'
      }
    ],
    OtherCourses: [
      {
        name: "Especialización en diseño electrónico profesional con Altium Designer y Normas IPC",
        imgSrc: AltiumThumb,
        nextPage: "/hardware/altium",
        imgAlt: "Especialización en diseño electrónico profesional con Altium Designer y Normas IPC"
      },
      {
        name: "Diseño de sistemas electrónicos analógicos y digitales",
        imgSrc: AnalogicaDiseñoThumb,
        nextPage: "/hardware/analogica-diseño",
        imgAlt: "Diseño de sistemas electrónicos analógicos y digitales"
      },
      {
        name: "DProgramación de microcontroladores PIC con el nuevo ensamblador PIC-AS XV8",
        imgSrc: picAsm,
        nextPage: "/firmware/pic-asm",
        imgAlt: "DProgramación de microcontroladores PIC con el nuevo ensamblador PIC-AS XV8"
      },
    ]
  },
  'labview-iot': {
    title: 'Diseño digital de las compuertas al procesador',
    bannerSrc: broken,
    laptopImage: broken,
    tabletImage: broken,
    description: 'Nuestra especialización cubre una amplia gama de temas, desde el manejo de periféricos hasta protocolos de comunicación, sistemas HMI, comunicaciones inalámbricas y desarrollo de proyectos reales. Aprenderás a optimizar el código, manejar la arquitectura de los microcontroladores y aplicar técnicas avanzadas para mejorar la eficiencia y el rendimiento. Te preparamos para enfrentar desafíos avanzados en el desarrollo de productos electrónicos innovadores basados en sistemas embebidos.',
    time: '48',
    clients: 'Ingenieros, técnicos y estudiantes de ingeniería que deseen aprender a programar Microcontroladores PIC en el nuevo ASM PIC AS XC8 y manejar las ultimas herramientas de hardware y software de microchip',
    NeedKnow: 'La especialización está diseñada de manera que se adapta a personas con cero conocimientos en programación y microcontroladores, pero también para aquellos que tienen un conocimiento intermedio y quieren incrementar/profundizar los conceptos/destrezas en el Diseño de sistemas embebidos basados en MCUs, pero con proyectos reales en base a la alta experiencia del docente que desarrolla diversas soluciones para distintos campos de la industria',
    syllabus: [
      {
        theme: 'Diseño de sistemas embebidos',
        topics: [
          'Aplicaciones de Sistemas Embebidos',
          'Comparación entre Microprocesadores, Microcontroladores y SOC',
          'Arquitectura de Microchip en 8, 16 y 32 Bits',
          'Diferencias entre Assembler y ANSI C',
          'Clasificación y arquitectura de Microcontroladores de 8 bits',
          'Análisis de memoria de programa, memoria de datos RAM y arquitectura ortogonal de Microchip, así como aprendizaje de instrucciones de carga a W aritméticos y booleanos'
        ]
      },
      {
        theme: 'Set de instrucciones',
        topics: [
          'Manejo de la memoria RAM y direccionamiento de bancos',
          'Instrucciones de aprendizaje con memoria RAM',
          'Instrucciones booleanas orientadas al byte',
          'Instrucciones de comparación para bits y bytes',
          'Instrucciones aritméticas para bytes',
          'Instrucciones de salto, rotación, incremento y decremento para bytes'
        ]
      },
      {
        theme: 'Arquitectura PIC18',
        topics: [
          'Series de los Microcontroladores PIC18FXXXXX',
          'Características del nuevo ensamblador de Microchip',
          'Organización del código fuente en ensamblador',
          'Análisis del microcontrolador PIC18F45K50',
          'Manejo del Program Counter (PC).',
          'Configuración del periférico GPIO y uso de MPLAB X con el depurador integrado, incluyendo ejercicios prácticos con Proteus y el PIC18F45K50'
        ]
      },
      {
        theme: 'Subrutinas y diseño de librerías',
        topics: [
          'Directivas del nuevo Ensamblador XC8',
          'Manejo de subrutinas y subrutinas anidadas',
          'Aprendizaje de instrucciones con la PILA LIFO',
          'Análisis de la frecuencia y tiempo de ciclo de instrucción, MIPS, frecuencia de reloj y ciclo-máquina',
          'Diseño de retardos por software',
          'Implementación de un programa "Hola Mundo" para el PIC18F45K50 con un LED parpadeante, manejo de un Display de 7 Segmentos y diseño de librerías para el control de distintos periféricos y recursos del microcontrolador'
        ]
      },
      {
        theme: 'Manejo de tablas',
        topics: [
          'Implementación de rutinas para lectura y escritura en la memoria flash',
          'Aprendizaje de las nuevas directivas del PIC AS',
          'Técnica de la Multiplexación de datos',
          'Manejo del Display de 7 segmentos multiplexado',
          'Desarrollo de rutinas en lenguaje ensamblador para la conversión de binario a BCD',
          'Ejercicios prácticos con tablas y contadores'
        ]
      },
      {
        theme: 'Pantalla LCD y teclado matricial 4x4',
        topics: [
          'Diseño de la librería para la pantalla LCD',
          'Implementación de la librería para la pantalla LCD',
          'Diseño de la librería para el manejo del teclado matricial 4x4',
          'Implementación de la librería para el manejo del teclado matricial 4x4',
          'Pruebas y depuración',
          'Documentación y ejemplos de uso'
        ]
      }
    ],
    syllabusSrc: '#',
    proyects: [
      "Sistema de control de acceso por teclado matricial",
      "Sistema de control y monitoreo para un semáforo inteligente",
      "Diseño de un sistema de parqueo para automóviles",
      "Controlador de velocidad para motores DC",
      "Sistema de monitoreo meteorológico",
      "Sistema de adquisición de datos HMI",
      "Sistema de monitoreo/control por bluetooth y red celular"
    ],
    youLearns: [
      {
      imageSrc: mplabxide,
      title: "MPlab X IDE"
      },
      {
      imageSrc: xc8,
      title: "MPlab XC8 Compiler"
      },
      {
      imageSrc: proteus,
      title: "Proteus"
      },
      {
      imageSrc: labview,
      title: "Labview"
      }
    ],
    KitImageSrc: tablet,
    kits: [
      {
        title: 'Entrenador PIC Universal MMJ',
        description: 'La tarjeta de desarrollo es compatible con cualquier Microcontrolador de la serie 16/18 de 40 pines de microchip. Cuenta con alimentación externa de hasta 36V o USB, 8leds, pantalla LCD, 4 pulsadores, display multiplexado, puerto RS232/USB y 3 expansores mikrobuses con la capacidad de conectarle más de 1500 dispositivos externos entre sensores, actuadores, gateways, pantallas, interfaces, etc.'
      },
      {
        title: 'Curiosity Nano',
        description: 'La tarjeta de desarrollo utiliza un microcontrolador PIC18F57Q43 cuenta con un interruptor de usuario mecánico, un LED de usuario amarillo, depurador integrado, LED verde de alimentación y estado, programación y depuración, puerto COM virtual (CDC), canal de analizador lógico (GPIO), alimentación por USB y una corriente de salida máxima de 500 mA.'
      }
    ],
    OtherCourses: [
      {
        name: "Especialización en diseño electrónico profesional con Altium Designer y Normas IPC",
        imgSrc: AltiumThumb,
        nextPage: "/hardware/altium",
        imgAlt: "Especialización en diseño electrónico profesional con Altium Designer y Normas IPC"
      },
      {
        name: "Diseño de sistemas electrónicos analógicos y digitales",
        imgSrc: AnalogicaDiseñoThumb,
        nextPage: "/hardware/analogica-diseño",
        imgAlt: "Diseño de sistemas electrónicos analógicos y digitales"
      },
      {
        name: "DProgramación de microcontroladores PIC con el nuevo ensamblador PIC-AS XV8",
        imgSrc: picAsm,
        nextPage: "/firmware/pic-asm",
        imgAlt: "DProgramación de microcontroladores PIC con el nuevo ensamblador PIC-AS XV8"
      },
    ]
  },
  'labview-avanzado': {
    title: 'Diseño digital de las compuertas al procesador',
    bannerSrc: broken,
    laptopImage: broken,
    tabletImage: broken,
    description: 'Nuestra especialización cubre una amplia gama de temas, desde el manejo de periféricos hasta protocolos de comunicación, sistemas HMI, comunicaciones inalámbricas y desarrollo de proyectos reales. Aprenderás a optimizar el código, manejar la arquitectura de los microcontroladores y aplicar técnicas avanzadas para mejorar la eficiencia y el rendimiento. Te preparamos para enfrentar desafíos avanzados en el desarrollo de productos electrónicos innovadores basados en sistemas embebidos.',
    time: '48',
    clients: 'Ingenieros, técnicos y estudiantes de ingeniería que deseen aprender a programar Microcontroladores PIC en el nuevo ASM PIC AS XC8 y manejar las ultimas herramientas de hardware y software de microchip',
    NeedKnow: 'La especialización está diseñada de manera que se adapta a personas con cero conocimientos en programación y microcontroladores, pero también para aquellos que tienen un conocimiento intermedio y quieren incrementar/profundizar los conceptos/destrezas en el Diseño de sistemas embebidos basados en MCUs, pero con proyectos reales en base a la alta experiencia del docente que desarrolla diversas soluciones para distintos campos de la industria',
    syllabus: [
      {
        theme: 'Diseño de sistemas embebidos',
        topics: [
          'Aplicaciones de Sistemas Embebidos',
          'Comparación entre Microprocesadores, Microcontroladores y SOC',
          'Arquitectura de Microchip en 8, 16 y 32 Bits',
          'Diferencias entre Assembler y ANSI C',
          'Clasificación y arquitectura de Microcontroladores de 8 bits',
          'Análisis de memoria de programa, memoria de datos RAM y arquitectura ortogonal de Microchip, así como aprendizaje de instrucciones de carga a W aritméticos y booleanos'
        ]
      },
      {
        theme: 'Set de instrucciones',
        topics: [
          'Manejo de la memoria RAM y direccionamiento de bancos',
          'Instrucciones de aprendizaje con memoria RAM',
          'Instrucciones booleanas orientadas al byte',
          'Instrucciones de comparación para bits y bytes',
          'Instrucciones aritméticas para bytes',
          'Instrucciones de salto, rotación, incremento y decremento para bytes'
        ]
      },
      {
        theme: 'Arquitectura PIC18',
        topics: [
          'Series de los Microcontroladores PIC18FXXXXX',
          'Características del nuevo ensamblador de Microchip',
          'Organización del código fuente en ensamblador',
          'Análisis del microcontrolador PIC18F45K50',
          'Manejo del Program Counter (PC).',
          'Configuración del periférico GPIO y uso de MPLAB X con el depurador integrado, incluyendo ejercicios prácticos con Proteus y el PIC18F45K50'
        ]
      },
      {
        theme: 'Subrutinas y diseño de librerías',
        topics: [
          'Directivas del nuevo Ensamblador XC8',
          'Manejo de subrutinas y subrutinas anidadas',
          'Aprendizaje de instrucciones con la PILA LIFO',
          'Análisis de la frecuencia y tiempo de ciclo de instrucción, MIPS, frecuencia de reloj y ciclo-máquina',
          'Diseño de retardos por software',
          'Implementación de un programa "Hola Mundo" para el PIC18F45K50 con un LED parpadeante, manejo de un Display de 7 Segmentos y diseño de librerías para el control de distintos periféricos y recursos del microcontrolador'
        ]
      },
      {
        theme: 'Manejo de tablas',
        topics: [
          'Implementación de rutinas para lectura y escritura en la memoria flash',
          'Aprendizaje de las nuevas directivas del PIC AS',
          'Técnica de la Multiplexación de datos',
          'Manejo del Display de 7 segmentos multiplexado',
          'Desarrollo de rutinas en lenguaje ensamblador para la conversión de binario a BCD',
          'Ejercicios prácticos con tablas y contadores'
        ]
      },
      {
        theme: 'Pantalla LCD y teclado matricial 4x4',
        topics: [
          'Diseño de la librería para la pantalla LCD',
          'Implementación de la librería para la pantalla LCD',
          'Diseño de la librería para el manejo del teclado matricial 4x4',
          'Implementación de la librería para el manejo del teclado matricial 4x4',
          'Pruebas y depuración',
          'Documentación y ejemplos de uso'
        ]
      }
    ],
    syllabusSrc: '#',
    proyects: [
      "Sistema de control de acceso por teclado matricial",
      "Sistema de control y monitoreo para un semáforo inteligente",
      "Diseño de un sistema de parqueo para automóviles",
      "Controlador de velocidad para motores DC",
      "Sistema de monitoreo meteorológico",
      "Sistema de adquisición de datos HMI",
      "Sistema de monitoreo/control por bluetooth y red celular"
    ],
    youLearns: [
      {
      imageSrc: mplabxide,
      title: "MPlab X IDE"
      },
      {
      imageSrc: xc8,
      title: "MPlab XC8 Compiler"
      },
      {
      imageSrc: proteus,
      title: "Proteus"
      },
      {
      imageSrc: labview,
      title: "Labview"
      }
    ],
    KitImageSrc: tablet,
    kits: [
      {
        title: 'Entrenador PIC Universal MMJ',
        description: 'La tarjeta de desarrollo es compatible con cualquier Microcontrolador de la serie 16/18 de 40 pines de microchip. Cuenta con alimentación externa de hasta 36V o USB, 8leds, pantalla LCD, 4 pulsadores, display multiplexado, puerto RS232/USB y 3 expansores mikrobuses con la capacidad de conectarle más de 1500 dispositivos externos entre sensores, actuadores, gateways, pantallas, interfaces, etc.'
      },
      {
        title: 'Curiosity Nano',
        description: 'La tarjeta de desarrollo utiliza un microcontrolador PIC18F57Q43 cuenta con un interruptor de usuario mecánico, un LED de usuario amarillo, depurador integrado, LED verde de alimentación y estado, programación y depuración, puerto COM virtual (CDC), canal de analizador lógico (GPIO), alimentación por USB y una corriente de salida máxima de 500 mA.'
      }
    ],
    OtherCourses: [
      {
        name: "Especialización en diseño electrónico profesional con Altium Designer y Normas IPC",
        imgSrc: AltiumThumb,
        nextPage: "/hardware/altium",
        imgAlt: "Especialización en diseño electrónico profesional con Altium Designer y Normas IPC"
      },
      {
        name: "Diseño de sistemas electrónicos analógicos y digitales",
        imgSrc: AnalogicaDiseñoThumb,
        nextPage: "/hardware/analogica-diseño",
        imgAlt: "Diseño de sistemas electrónicos analógicos y digitales"
      },
      {
        name: "DProgramación de microcontroladores PIC con el nuevo ensamblador PIC-AS XV8",
        imgSrc: picAsm,
        nextPage: "/firmware/pic-asm",
        imgAlt: "DProgramación de microcontroladores PIC con el nuevo ensamblador PIC-AS XV8"
      },
    ]
  },
  'esp32-arduino': {
    title: 'Diseño digital de las compuertas al procesador',
    bannerSrc: broken,
    laptopImage: broken,
    tabletImage: broken,
    description: 'Nuestra especialización cubre una amplia gama de temas, desde el manejo de periféricos hasta protocolos de comunicación, sistemas HMI, comunicaciones inalámbricas y desarrollo de proyectos reales. Aprenderás a optimizar el código, manejar la arquitectura de los microcontroladores y aplicar técnicas avanzadas para mejorar la eficiencia y el rendimiento. Te preparamos para enfrentar desafíos avanzados en el desarrollo de productos electrónicos innovadores basados en sistemas embebidos.',
    time: '48',
    clients: 'Ingenieros, técnicos y estudiantes de ingeniería que deseen aprender a programar Microcontroladores PIC en el nuevo ASM PIC AS XC8 y manejar las ultimas herramientas de hardware y software de microchip',
    NeedKnow: 'La especialización está diseñada de manera que se adapta a personas con cero conocimientos en programación y microcontroladores, pero también para aquellos que tienen un conocimiento intermedio y quieren incrementar/profundizar los conceptos/destrezas en el Diseño de sistemas embebidos basados en MCUs, pero con proyectos reales en base a la alta experiencia del docente que desarrolla diversas soluciones para distintos campos de la industria',
    syllabus: [
      {
        theme: 'Diseño de sistemas embebidos',
        topics: [
          'Aplicaciones de Sistemas Embebidos',
          'Comparación entre Microprocesadores, Microcontroladores y SOC',
          'Arquitectura de Microchip en 8, 16 y 32 Bits',
          'Diferencias entre Assembler y ANSI C',
          'Clasificación y arquitectura de Microcontroladores de 8 bits',
          'Análisis de memoria de programa, memoria de datos RAM y arquitectura ortogonal de Microchip, así como aprendizaje de instrucciones de carga a W aritméticos y booleanos'
        ]
      },
      {
        theme: 'Set de instrucciones',
        topics: [
          'Manejo de la memoria RAM y direccionamiento de bancos',
          'Instrucciones de aprendizaje con memoria RAM',
          'Instrucciones booleanas orientadas al byte',
          'Instrucciones de comparación para bits y bytes',
          'Instrucciones aritméticas para bytes',
          'Instrucciones de salto, rotación, incremento y decremento para bytes'
        ]
      },
      {
        theme: 'Arquitectura PIC18',
        topics: [
          'Series de los Microcontroladores PIC18FXXXXX',
          'Características del nuevo ensamblador de Microchip',
          'Organización del código fuente en ensamblador',
          'Análisis del microcontrolador PIC18F45K50',
          'Manejo del Program Counter (PC).',
          'Configuración del periférico GPIO y uso de MPLAB X con el depurador integrado, incluyendo ejercicios prácticos con Proteus y el PIC18F45K50'
        ]
      },
      {
        theme: 'Subrutinas y diseño de librerías',
        topics: [
          'Directivas del nuevo Ensamblador XC8',
          'Manejo de subrutinas y subrutinas anidadas',
          'Aprendizaje de instrucciones con la PILA LIFO',
          'Análisis de la frecuencia y tiempo de ciclo de instrucción, MIPS, frecuencia de reloj y ciclo-máquina',
          'Diseño de retardos por software',
          'Implementación de un programa "Hola Mundo" para el PIC18F45K50 con un LED parpadeante, manejo de un Display de 7 Segmentos y diseño de librerías para el control de distintos periféricos y recursos del microcontrolador'
        ]
      },
      {
        theme: 'Manejo de tablas',
        topics: [
          'Implementación de rutinas para lectura y escritura en la memoria flash',
          'Aprendizaje de las nuevas directivas del PIC AS',
          'Técnica de la Multiplexación de datos',
          'Manejo del Display de 7 segmentos multiplexado',
          'Desarrollo de rutinas en lenguaje ensamblador para la conversión de binario a BCD',
          'Ejercicios prácticos con tablas y contadores'
        ]
      },
      {
        theme: 'Pantalla LCD y teclado matricial 4x4',
        topics: [
          'Diseño de la librería para la pantalla LCD',
          'Implementación de la librería para la pantalla LCD',
          'Diseño de la librería para el manejo del teclado matricial 4x4',
          'Implementación de la librería para el manejo del teclado matricial 4x4',
          'Pruebas y depuración',
          'Documentación y ejemplos de uso'
        ]
      }
    ],
    syllabusSrc: '#',
    proyects: [
      "Sistema de control de acceso por teclado matricial",
      "Sistema de control y monitoreo para un semáforo inteligente",
      "Diseño de un sistema de parqueo para automóviles",
      "Controlador de velocidad para motores DC",
      "Sistema de monitoreo meteorológico",
      "Sistema de adquisición de datos HMI",
      "Sistema de monitoreo/control por bluetooth y red celular"
    ],
    youLearns: [
      {
      imageSrc: mplabxide,
      title: "MPlab X IDE"
      },
      {
      imageSrc: xc8,
      title: "MPlab XC8 Compiler"
      },
      {
      imageSrc: proteus,
      title: "Proteus"
      },
      {
      imageSrc: labview,
      title: "Labview"
      }
    ],
    KitImageSrc: tablet,
    kits: [
      {
        title: 'Entrenador PIC Universal MMJ',
        description: 'La tarjeta de desarrollo es compatible con cualquier Microcontrolador de la serie 16/18 de 40 pines de microchip. Cuenta con alimentación externa de hasta 36V o USB, 8leds, pantalla LCD, 4 pulsadores, display multiplexado, puerto RS232/USB y 3 expansores mikrobuses con la capacidad de conectarle más de 1500 dispositivos externos entre sensores, actuadores, gateways, pantallas, interfaces, etc.'
      },
      {
        title: 'Curiosity Nano',
        description: 'La tarjeta de desarrollo utiliza un microcontrolador PIC18F57Q43 cuenta con un interruptor de usuario mecánico, un LED de usuario amarillo, depurador integrado, LED verde de alimentación y estado, programación y depuración, puerto COM virtual (CDC), canal de analizador lógico (GPIO), alimentación por USB y una corriente de salida máxima de 500 mA.'
      }
    ],
    OtherCourses: [
      {
        name: "Especialización en diseño electrónico profesional con Altium Designer y Normas IPC",
        imgSrc: AltiumThumb,
        nextPage: "/hardware/altium",
        imgAlt: "Especialización en diseño electrónico profesional con Altium Designer y Normas IPC"
      },
      {
        name: "Diseño de sistemas electrónicos analógicos y digitales",
        imgSrc: AnalogicaDiseñoThumb,
        nextPage: "/hardware/analogica-diseño",
        imgAlt: "Diseño de sistemas electrónicos analógicos y digitales"
      },
      {
        name: "DProgramación de microcontroladores PIC con el nuevo ensamblador PIC-AS XV8",
        imgSrc: picAsm,
        nextPage: "/firmware/pic-asm",
        imgAlt: "DProgramación de microcontroladores PIC con el nuevo ensamblador PIC-AS XV8"
      },
    ]
  },
  'esp32-c': {
    title: 'Diseño digital de las compuertas al procesador',
    bannerSrc: broken,
    laptopImage: broken,
    tabletImage: broken,
    description: 'Nuestra especialización cubre una amplia gama de temas, desde el manejo de periféricos hasta protocolos de comunicación, sistemas HMI, comunicaciones inalámbricas y desarrollo de proyectos reales. Aprenderás a optimizar el código, manejar la arquitectura de los microcontroladores y aplicar técnicas avanzadas para mejorar la eficiencia y el rendimiento. Te preparamos para enfrentar desafíos avanzados en el desarrollo de productos electrónicos innovadores basados en sistemas embebidos.',
    time: '48',
    clients: 'Ingenieros, técnicos y estudiantes de ingeniería que deseen aprender a programar Microcontroladores PIC en el nuevo ASM PIC AS XC8 y manejar las ultimas herramientas de hardware y software de microchip',
    NeedKnow: 'La especialización está diseñada de manera que se adapta a personas con cero conocimientos en programación y microcontroladores, pero también para aquellos que tienen un conocimiento intermedio y quieren incrementar/profundizar los conceptos/destrezas en el Diseño de sistemas embebidos basados en MCUs, pero con proyectos reales en base a la alta experiencia del docente que desarrolla diversas soluciones para distintos campos de la industria',
    syllabus: [
      {
        theme: 'Diseño de sistemas embebidos',
        topics: [
          'Aplicaciones de Sistemas Embebidos',
          'Comparación entre Microprocesadores, Microcontroladores y SOC',
          'Arquitectura de Microchip en 8, 16 y 32 Bits',
          'Diferencias entre Assembler y ANSI C',
          'Clasificación y arquitectura de Microcontroladores de 8 bits',
          'Análisis de memoria de programa, memoria de datos RAM y arquitectura ortogonal de Microchip, así como aprendizaje de instrucciones de carga a W aritméticos y booleanos'
        ]
      },
      {
        theme: 'Set de instrucciones',
        topics: [
          'Manejo de la memoria RAM y direccionamiento de bancos',
          'Instrucciones de aprendizaje con memoria RAM',
          'Instrucciones booleanas orientadas al byte',
          'Instrucciones de comparación para bits y bytes',
          'Instrucciones aritméticas para bytes',
          'Instrucciones de salto, rotación, incremento y decremento para bytes'
        ]
      },
      {
        theme: 'Arquitectura PIC18',
        topics: [
          'Series de los Microcontroladores PIC18FXXXXX',
          'Características del nuevo ensamblador de Microchip',
          'Organización del código fuente en ensamblador',
          'Análisis del microcontrolador PIC18F45K50',
          'Manejo del Program Counter (PC).',
          'Configuración del periférico GPIO y uso de MPLAB X con el depurador integrado, incluyendo ejercicios prácticos con Proteus y el PIC18F45K50'
        ]
      },
      {
        theme: 'Subrutinas y diseño de librerías',
        topics: [
          'Directivas del nuevo Ensamblador XC8',
          'Manejo de subrutinas y subrutinas anidadas',
          'Aprendizaje de instrucciones con la PILA LIFO',
          'Análisis de la frecuencia y tiempo de ciclo de instrucción, MIPS, frecuencia de reloj y ciclo-máquina',
          'Diseño de retardos por software',
          'Implementación de un programa "Hola Mundo" para el PIC18F45K50 con un LED parpadeante, manejo de un Display de 7 Segmentos y diseño de librerías para el control de distintos periféricos y recursos del microcontrolador'
        ]
      },
      {
        theme: 'Manejo de tablas',
        topics: [
          'Implementación de rutinas para lectura y escritura en la memoria flash',
          'Aprendizaje de las nuevas directivas del PIC AS',
          'Técnica de la Multiplexación de datos',
          'Manejo del Display de 7 segmentos multiplexado',
          'Desarrollo de rutinas en lenguaje ensamblador para la conversión de binario a BCD',
          'Ejercicios prácticos con tablas y contadores'
        ]
      },
      {
        theme: 'Pantalla LCD y teclado matricial 4x4',
        topics: [
          'Diseño de la librería para la pantalla LCD',
          'Implementación de la librería para la pantalla LCD',
          'Diseño de la librería para el manejo del teclado matricial 4x4',
          'Implementación de la librería para el manejo del teclado matricial 4x4',
          'Pruebas y depuración',
          'Documentación y ejemplos de uso'
        ]
      }
    ],
    syllabusSrc: '#',
    proyects: [
      "Sistema de control de acceso por teclado matricial",
      "Sistema de control y monitoreo para un semáforo inteligente",
      "Diseño de un sistema de parqueo para automóviles",
      "Controlador de velocidad para motores DC",
      "Sistema de monitoreo meteorológico",
      "Sistema de adquisición de datos HMI",
      "Sistema de monitoreo/control por bluetooth y red celular"
    ],
    youLearns: [
      {
      imageSrc: mplabxide,
      title: "MPlab X IDE"
      },
      {
      imageSrc: xc8,
      title: "MPlab XC8 Compiler"
      },
      {
      imageSrc: proteus,
      title: "Proteus"
      },
      {
      imageSrc: labview,
      title: "Labview"
      }
    ],
    KitImageSrc: tablet,
    kits: [
      {
        title: 'Entrenador PIC Universal MMJ',
        description: 'La tarjeta de desarrollo es compatible con cualquier Microcontrolador de la serie 16/18 de 40 pines de microchip. Cuenta con alimentación externa de hasta 36V o USB, 8leds, pantalla LCD, 4 pulsadores, display multiplexado, puerto RS232/USB y 3 expansores mikrobuses con la capacidad de conectarle más de 1500 dispositivos externos entre sensores, actuadores, gateways, pantallas, interfaces, etc.'
      },
      {
        title: 'Curiosity Nano',
        description: 'La tarjeta de desarrollo utiliza un microcontrolador PIC18F57Q43 cuenta con un interruptor de usuario mecánico, un LED de usuario amarillo, depurador integrado, LED verde de alimentación y estado, programación y depuración, puerto COM virtual (CDC), canal de analizador lógico (GPIO), alimentación por USB y una corriente de salida máxima de 500 mA.'
      }
    ],
    OtherCourses: [
      {
        name: "Especialización en diseño electrónico profesional con Altium Designer y Normas IPC",
        imgSrc: AltiumThumb,
        nextPage: "/hardware/altium",
        imgAlt: "Especialización en diseño electrónico profesional con Altium Designer y Normas IPC"
      },
      {
        name: "Diseño de sistemas electrónicos analógicos y digitales",
        imgSrc: AnalogicaDiseñoThumb,
        nextPage: "/hardware/analogica-diseño",
        imgAlt: "Diseño de sistemas electrónicos analógicos y digitales"
      },
      {
        name: "DProgramación de microcontroladores PIC con el nuevo ensamblador PIC-AS XV8",
        imgSrc: picAsm,
        nextPage: "/firmware/pic-asm",
        imgAlt: "DProgramación de microcontroladores PIC con el nuevo ensamblador PIC-AS XV8"
      },
    ]
  },
  'altium': {
    title: 'Diseño digital de las compuertas al procesador',
    bannerSrc: broken,
    laptopImage: broken,
    tabletImage: broken,
    description: 'Nuestra especialización cubre una amplia gama de temas, desde el manejo de periféricos hasta protocolos de comunicación, sistemas HMI, comunicaciones inalámbricas y desarrollo de proyectos reales. Aprenderás a optimizar el código, manejar la arquitectura de los microcontroladores y aplicar técnicas avanzadas para mejorar la eficiencia y el rendimiento. Te preparamos para enfrentar desafíos avanzados en el desarrollo de productos electrónicos innovadores basados en sistemas embebidos.',
    time: '48',
    clients: 'Ingenieros, técnicos y estudiantes de ingeniería que deseen aprender a programar Microcontroladores PIC en el nuevo ASM PIC AS XC8 y manejar las ultimas herramientas de hardware y software de microchip',
    NeedKnow: 'La especialización está diseñada de manera que se adapta a personas con cero conocimientos en programación y microcontroladores, pero también para aquellos que tienen un conocimiento intermedio y quieren incrementar/profundizar los conceptos/destrezas en el Diseño de sistemas embebidos basados en MCUs, pero con proyectos reales en base a la alta experiencia del docente que desarrolla diversas soluciones para distintos campos de la industria',
    syllabus: [
      {
        theme: 'Diseño de sistemas embebidos',
        topics: [
          'Aplicaciones de Sistemas Embebidos',
          'Comparación entre Microprocesadores, Microcontroladores y SOC',
          'Arquitectura de Microchip en 8, 16 y 32 Bits',
          'Diferencias entre Assembler y ANSI C',
          'Clasificación y arquitectura de Microcontroladores de 8 bits',
          'Análisis de memoria de programa, memoria de datos RAM y arquitectura ortogonal de Microchip, así como aprendizaje de instrucciones de carga a W aritméticos y booleanos'
        ]
      },
      {
        theme: 'Set de instrucciones',
        topics: [
          'Manejo de la memoria RAM y direccionamiento de bancos',
          'Instrucciones de aprendizaje con memoria RAM',
          'Instrucciones booleanas orientadas al byte',
          'Instrucciones de comparación para bits y bytes',
          'Instrucciones aritméticas para bytes',
          'Instrucciones de salto, rotación, incremento y decremento para bytes'
        ]
      },
      {
        theme: 'Arquitectura PIC18',
        topics: [
          'Series de los Microcontroladores PIC18FXXXXX',
          'Características del nuevo ensamblador de Microchip',
          'Organización del código fuente en ensamblador',
          'Análisis del microcontrolador PIC18F45K50',
          'Manejo del Program Counter (PC).',
          'Configuración del periférico GPIO y uso de MPLAB X con el depurador integrado, incluyendo ejercicios prácticos con Proteus y el PIC18F45K50'
        ]
      },
      {
        theme: 'Subrutinas y diseño de librerías',
        topics: [
          'Directivas del nuevo Ensamblador XC8',
          'Manejo de subrutinas y subrutinas anidadas',
          'Aprendizaje de instrucciones con la PILA LIFO',
          'Análisis de la frecuencia y tiempo de ciclo de instrucción, MIPS, frecuencia de reloj y ciclo-máquina',
          'Diseño de retardos por software',
          'Implementación de un programa "Hola Mundo" para el PIC18F45K50 con un LED parpadeante, manejo de un Display de 7 Segmentos y diseño de librerías para el control de distintos periféricos y recursos del microcontrolador'
        ]
      },
      {
        theme: 'Manejo de tablas',
        topics: [
          'Implementación de rutinas para lectura y escritura en la memoria flash',
          'Aprendizaje de las nuevas directivas del PIC AS',
          'Técnica de la Multiplexación de datos',
          'Manejo del Display de 7 segmentos multiplexado',
          'Desarrollo de rutinas en lenguaje ensamblador para la conversión de binario a BCD',
          'Ejercicios prácticos con tablas y contadores'
        ]
      },
      {
        theme: 'Pantalla LCD y teclado matricial 4x4',
        topics: [
          'Diseño de la librería para la pantalla LCD',
          'Implementación de la librería para la pantalla LCD',
          'Diseño de la librería para el manejo del teclado matricial 4x4',
          'Implementación de la librería para el manejo del teclado matricial 4x4',
          'Pruebas y depuración',
          'Documentación y ejemplos de uso'
        ]
      }
    ],
    syllabusSrc: '#',
    proyects: [
      "Sistema de control de acceso por teclado matricial",
      "Sistema de control y monitoreo para un semáforo inteligente",
      "Diseño de un sistema de parqueo para automóviles",
      "Controlador de velocidad para motores DC",
      "Sistema de monitoreo meteorológico",
      "Sistema de adquisición de datos HMI",
      "Sistema de monitoreo/control por bluetooth y red celular"
    ],
    youLearns: [
      {
      imageSrc: mplabxide,
      title: "MPlab X IDE"
      },
      {
      imageSrc: xc8,
      title: "MPlab XC8 Compiler"
      },
      {
      imageSrc: proteus,
      title: "Proteus"
      },
      {
      imageSrc: labview,
      title: "Labview"
      }
    ],
    KitImageSrc: tablet,
    kits: [
      {
        title: 'Entrenador PIC Universal MMJ',
        description: 'La tarjeta de desarrollo es compatible con cualquier Microcontrolador de la serie 16/18 de 40 pines de microchip. Cuenta con alimentación externa de hasta 36V o USB, 8leds, pantalla LCD, 4 pulsadores, display multiplexado, puerto RS232/USB y 3 expansores mikrobuses con la capacidad de conectarle más de 1500 dispositivos externos entre sensores, actuadores, gateways, pantallas, interfaces, etc.'
      },
      {
        title: 'Curiosity Nano',
        description: 'La tarjeta de desarrollo utiliza un microcontrolador PIC18F57Q43 cuenta con un interruptor de usuario mecánico, un LED de usuario amarillo, depurador integrado, LED verde de alimentación y estado, programación y depuración, puerto COM virtual (CDC), canal de analizador lógico (GPIO), alimentación por USB y una corriente de salida máxima de 500 mA.'
      }
    ],
    OtherCourses: [
      {
        name: "Especialización en diseño electrónico profesional con Altium Designer y Normas IPC",
        imgSrc: AltiumThumb,
        nextPage: "/hardware/altium",
        imgAlt: "Especialización en diseño electrónico profesional con Altium Designer y Normas IPC"
      },
      {
        name: "Diseño de sistemas electrónicos analógicos y digitales",
        imgSrc: AnalogicaDiseñoThumb,
        nextPage: "/hardware/analogica-diseño",
        imgAlt: "Diseño de sistemas electrónicos analógicos y digitales"
      },
      {
        name: "DProgramación de microcontroladores PIC con el nuevo ensamblador PIC-AS XV8",
        imgSrc: picAsm,
        nextPage: "/firmware/pic-asm",
        imgAlt: "DProgramación de microcontroladores PIC con el nuevo ensamblador PIC-AS XV8"
      },
    ]
  },
  'analogica-diseño': {
    title: 'Diseño digital de las compuertas al procesador',
    bannerSrc: broken,
    laptopImage: broken,
    tabletImage: broken,
    description: 'Nuestra especialización cubre una amplia gama de temas, desde el manejo de periféricos hasta protocolos de comunicación, sistemas HMI, comunicaciones inalámbricas y desarrollo de proyectos reales. Aprenderás a optimizar el código, manejar la arquitectura de los microcontroladores y aplicar técnicas avanzadas para mejorar la eficiencia y el rendimiento. Te preparamos para enfrentar desafíos avanzados en el desarrollo de productos electrónicos innovadores basados en sistemas embebidos.',
    time: '48',
    clients: 'Ingenieros, técnicos y estudiantes de ingeniería que deseen aprender a programar Microcontroladores PIC en el nuevo ASM PIC AS XC8 y manejar las ultimas herramientas de hardware y software de microchip',
    NeedKnow: 'La especialización está diseñada de manera que se adapta a personas con cero conocimientos en programación y microcontroladores, pero también para aquellos que tienen un conocimiento intermedio y quieren incrementar/profundizar los conceptos/destrezas en el Diseño de sistemas embebidos basados en MCUs, pero con proyectos reales en base a la alta experiencia del docente que desarrolla diversas soluciones para distintos campos de la industria',
    syllabus: [
      {
        theme: 'Diseño de sistemas embebidos',
        topics: [
          'Aplicaciones de Sistemas Embebidos',
          'Comparación entre Microprocesadores, Microcontroladores y SOC',
          'Arquitectura de Microchip en 8, 16 y 32 Bits',
          'Diferencias entre Assembler y ANSI C',
          'Clasificación y arquitectura de Microcontroladores de 8 bits',
          'Análisis de memoria de programa, memoria de datos RAM y arquitectura ortogonal de Microchip, así como aprendizaje de instrucciones de carga a W aritméticos y booleanos'
        ]
      },
      {
        theme: 'Set de instrucciones',
        topics: [
          'Manejo de la memoria RAM y direccionamiento de bancos',
          'Instrucciones de aprendizaje con memoria RAM',
          'Instrucciones booleanas orientadas al byte',
          'Instrucciones de comparación para bits y bytes',
          'Instrucciones aritméticas para bytes',
          'Instrucciones de salto, rotación, incremento y decremento para bytes'
        ]
      },
      {
        theme: 'Arquitectura PIC18',
        topics: [
          'Series de los Microcontroladores PIC18FXXXXX',
          'Características del nuevo ensamblador de Microchip',
          'Organización del código fuente en ensamblador',
          'Análisis del microcontrolador PIC18F45K50',
          'Manejo del Program Counter (PC).',
          'Configuración del periférico GPIO y uso de MPLAB X con el depurador integrado, incluyendo ejercicios prácticos con Proteus y el PIC18F45K50'
        ]
      },
      {
        theme: 'Subrutinas y diseño de librerías',
        topics: [
          'Directivas del nuevo Ensamblador XC8',
          'Manejo de subrutinas y subrutinas anidadas',
          'Aprendizaje de instrucciones con la PILA LIFO',
          'Análisis de la frecuencia y tiempo de ciclo de instrucción, MIPS, frecuencia de reloj y ciclo-máquina',
          'Diseño de retardos por software',
          'Implementación de un programa "Hola Mundo" para el PIC18F45K50 con un LED parpadeante, manejo de un Display de 7 Segmentos y diseño de librerías para el control de distintos periféricos y recursos del microcontrolador'
        ]
      },
      {
        theme: 'Manejo de tablas',
        topics: [
          'Implementación de rutinas para lectura y escritura en la memoria flash',
          'Aprendizaje de las nuevas directivas del PIC AS',
          'Técnica de la Multiplexación de datos',
          'Manejo del Display de 7 segmentos multiplexado',
          'Desarrollo de rutinas en lenguaje ensamblador para la conversión de binario a BCD',
          'Ejercicios prácticos con tablas y contadores'
        ]
      },
      {
        theme: 'Pantalla LCD y teclado matricial 4x4',
        topics: [
          'Diseño de la librería para la pantalla LCD',
          'Implementación de la librería para la pantalla LCD',
          'Diseño de la librería para el manejo del teclado matricial 4x4',
          'Implementación de la librería para el manejo del teclado matricial 4x4',
          'Pruebas y depuración',
          'Documentación y ejemplos de uso'
        ]
      }
    ],
    syllabusSrc: '#',
    proyects: [
      "Sistema de control de acceso por teclado matricial",
      "Sistema de control y monitoreo para un semáforo inteligente",
      "Diseño de un sistema de parqueo para automóviles",
      "Controlador de velocidad para motores DC",
      "Sistema de monitoreo meteorológico",
      "Sistema de adquisición de datos HMI",
      "Sistema de monitoreo/control por bluetooth y red celular"
    ],
    youLearns: [
      {
      imageSrc: mplabxide,
      title: "MPlab X IDE"
      },
      {
      imageSrc: xc8,
      title: "MPlab XC8 Compiler"
      },
      {
      imageSrc: proteus,
      title: "Proteus"
      },
      {
      imageSrc: labview,
      title: "Labview"
      }
    ],
    KitImageSrc: tablet,
    kits: [
      {
        title: 'Entrenador PIC Universal MMJ',
        description: 'La tarjeta de desarrollo es compatible con cualquier Microcontrolador de la serie 16/18 de 40 pines de microchip. Cuenta con alimentación externa de hasta 36V o USB, 8leds, pantalla LCD, 4 pulsadores, display multiplexado, puerto RS232/USB y 3 expansores mikrobuses con la capacidad de conectarle más de 1500 dispositivos externos entre sensores, actuadores, gateways, pantallas, interfaces, etc.'
      },
      {
        title: 'Curiosity Nano',
        description: 'La tarjeta de desarrollo utiliza un microcontrolador PIC18F57Q43 cuenta con un interruptor de usuario mecánico, un LED de usuario amarillo, depurador integrado, LED verde de alimentación y estado, programación y depuración, puerto COM virtual (CDC), canal de analizador lógico (GPIO), alimentación por USB y una corriente de salida máxima de 500 mA.'
      }
    ],
    OtherCourses: [
      {
        name: "Especialización en diseño electrónico profesional con Altium Designer y Normas IPC",
        imgSrc: AltiumThumb,
        nextPage: "/hardware/altium",
        imgAlt: "Especialización en diseño electrónico profesional con Altium Designer y Normas IPC"
      },
      {
        name: "Diseño de sistemas electrónicos analógicos y digitales",
        imgSrc: AnalogicaDiseñoThumb,
        nextPage: "/hardware/analogica-diseño",
        imgAlt: "Diseño de sistemas electrónicos analógicos y digitales"
      },
      {
        name: "DProgramación de microcontroladores PIC con el nuevo ensamblador PIC-AS XV8",
        imgSrc: picAsm,
        nextPage: "/firmware/pic-asm",
        imgAlt: "DProgramación de microcontroladores PIC con el nuevo ensamblador PIC-AS XV8"
      },
    ]
  },
  'plc': {
    title: 'Diseño digital de las compuertas al procesador',
    bannerSrc: broken,
    laptopImage: broken,
    tabletImage: broken,
    description: 'Nuestra especialización cubre una amplia gama de temas, desde el manejo de periféricos hasta protocolos de comunicación, sistemas HMI, comunicaciones inalámbricas y desarrollo de proyectos reales. Aprenderás a optimizar el código, manejar la arquitectura de los microcontroladores y aplicar técnicas avanzadas para mejorar la eficiencia y el rendimiento. Te preparamos para enfrentar desafíos avanzados en el desarrollo de productos electrónicos innovadores basados en sistemas embebidos.',
    time: '48',
    clients: 'Ingenieros, técnicos y estudiantes de ingeniería que deseen aprender a programar Microcontroladores PIC en el nuevo ASM PIC AS XC8 y manejar las ultimas herramientas de hardware y software de microchip',
    NeedKnow: 'La especialización está diseñada de manera que se adapta a personas con cero conocimientos en programación y microcontroladores, pero también para aquellos que tienen un conocimiento intermedio y quieren incrementar/profundizar los conceptos/destrezas en el Diseño de sistemas embebidos basados en MCUs, pero con proyectos reales en base a la alta experiencia del docente que desarrolla diversas soluciones para distintos campos de la industria',
    syllabus: [
      {
        theme: 'Diseño de sistemas embebidos',
        topics: [
          'Aplicaciones de Sistemas Embebidos',
          'Comparación entre Microprocesadores, Microcontroladores y SOC',
          'Arquitectura de Microchip en 8, 16 y 32 Bits',
          'Diferencias entre Assembler y ANSI C',
          'Clasificación y arquitectura de Microcontroladores de 8 bits',
          'Análisis de memoria de programa, memoria de datos RAM y arquitectura ortogonal de Microchip, así como aprendizaje de instrucciones de carga a W aritméticos y booleanos'
        ]
      },
      {
        theme: 'Set de instrucciones',
        topics: [
          'Manejo de la memoria RAM y direccionamiento de bancos',
          'Instrucciones de aprendizaje con memoria RAM',
          'Instrucciones booleanas orientadas al byte',
          'Instrucciones de comparación para bits y bytes',
          'Instrucciones aritméticas para bytes',
          'Instrucciones de salto, rotación, incremento y decremento para bytes'
        ]
      },
      {
        theme: 'Arquitectura PIC18',
        topics: [
          'Series de los Microcontroladores PIC18FXXXXX',
          'Características del nuevo ensamblador de Microchip',
          'Organización del código fuente en ensamblador',
          'Análisis del microcontrolador PIC18F45K50',
          'Manejo del Program Counter (PC).',
          'Configuración del periférico GPIO y uso de MPLAB X con el depurador integrado, incluyendo ejercicios prácticos con Proteus y el PIC18F45K50'
        ]
      },
      {
        theme: 'Subrutinas y diseño de librerías',
        topics: [
          'Directivas del nuevo Ensamblador XC8',
          'Manejo de subrutinas y subrutinas anidadas',
          'Aprendizaje de instrucciones con la PILA LIFO',
          'Análisis de la frecuencia y tiempo de ciclo de instrucción, MIPS, frecuencia de reloj y ciclo-máquina',
          'Diseño de retardos por software',
          'Implementación de un programa "Hola Mundo" para el PIC18F45K50 con un LED parpadeante, manejo de un Display de 7 Segmentos y diseño de librerías para el control de distintos periféricos y recursos del microcontrolador'
        ]
      },
      {
        theme: 'Manejo de tablas',
        topics: [
          'Implementación de rutinas para lectura y escritura en la memoria flash',
          'Aprendizaje de las nuevas directivas del PIC AS',
          'Técnica de la Multiplexación de datos',
          'Manejo del Display de 7 segmentos multiplexado',
          'Desarrollo de rutinas en lenguaje ensamblador para la conversión de binario a BCD',
          'Ejercicios prácticos con tablas y contadores'
        ]
      },
      {
        theme: 'Pantalla LCD y teclado matricial 4x4',
        topics: [
          'Diseño de la librería para la pantalla LCD',
          'Implementación de la librería para la pantalla LCD',
          'Diseño de la librería para el manejo del teclado matricial 4x4',
          'Implementación de la librería para el manejo del teclado matricial 4x4',
          'Pruebas y depuración',
          'Documentación y ejemplos de uso'
        ]
      }
    ],
    syllabusSrc: '#',
    proyects: [
      "Sistema de control de acceso por teclado matricial",
      "Sistema de control y monitoreo para un semáforo inteligente",
      "Diseño de un sistema de parqueo para automóviles",
      "Controlador de velocidad para motores DC",
      "Sistema de monitoreo meteorológico",
      "Sistema de adquisición de datos HMI",
      "Sistema de monitoreo/control por bluetooth y red celular"
    ],
    youLearns: [
      {
      imageSrc: mplabxide,
      title: "MPlab X IDE"
      },
      {
      imageSrc: xc8,
      title: "MPlab XC8 Compiler"
      },
      {
      imageSrc: proteus,
      title: "Proteus"
      },
      {
      imageSrc: labview,
      title: "Labview"
      }
    ],
    KitImageSrc: tablet,
    kits: [
      {
        title: 'Entrenador PIC Universal MMJ',
        description: 'La tarjeta de desarrollo es compatible con cualquier Microcontrolador de la serie 16/18 de 40 pines de microchip. Cuenta con alimentación externa de hasta 36V o USB, 8leds, pantalla LCD, 4 pulsadores, display multiplexado, puerto RS232/USB y 3 expansores mikrobuses con la capacidad de conectarle más de 1500 dispositivos externos entre sensores, actuadores, gateways, pantallas, interfaces, etc.'
      },
      {
        title: 'Curiosity Nano',
        description: 'La tarjeta de desarrollo utiliza un microcontrolador PIC18F57Q43 cuenta con un interruptor de usuario mecánico, un LED de usuario amarillo, depurador integrado, LED verde de alimentación y estado, programación y depuración, puerto COM virtual (CDC), canal de analizador lógico (GPIO), alimentación por USB y una corriente de salida máxima de 500 mA.'
      }
    ],
    OtherCourses: [
      {
        name: "Especialización en diseño electrónico profesional con Altium Designer y Normas IPC",
        imgSrc: AltiumThumb,
        nextPage: "/hardware/altium",
        imgAlt: "Especialización en diseño electrónico profesional con Altium Designer y Normas IPC"
      },
      {
        name: "Diseño de sistemas electrónicos analógicos y digitales",
        imgSrc: AnalogicaDiseñoThumb,
        nextPage: "/hardware/analogica-diseño",
        imgAlt: "Diseño de sistemas electrónicos analógicos y digitales"
      },
      {
        name: "DProgramación de microcontroladores PIC con el nuevo ensamblador PIC-AS XV8",
        imgSrc: picAsm,
        nextPage: "/firmware/pic-asm",
        imgAlt: "DProgramación de microcontroladores PIC con el nuevo ensamblador PIC-AS XV8"
      },
    ]
  },
  'presion': {
    title: 'Diseño digital de las compuertas al procesador',
    bannerSrc: broken,
    laptopImage: broken,
    tabletImage: broken,
    description: 'Nuestra especialización cubre una amplia gama de temas, desde el manejo de periféricos hasta protocolos de comunicación, sistemas HMI, comunicaciones inalámbricas y desarrollo de proyectos reales. Aprenderás a optimizar el código, manejar la arquitectura de los microcontroladores y aplicar técnicas avanzadas para mejorar la eficiencia y el rendimiento. Te preparamos para enfrentar desafíos avanzados en el desarrollo de productos electrónicos innovadores basados en sistemas embebidos.',
    time: '48',
    clients: 'Ingenieros, técnicos y estudiantes de ingeniería que deseen aprender a programar Microcontroladores PIC en el nuevo ASM PIC AS XC8 y manejar las ultimas herramientas de hardware y software de microchip',
    NeedKnow: 'La especialización está diseñada de manera que se adapta a personas con cero conocimientos en programación y microcontroladores, pero también para aquellos que tienen un conocimiento intermedio y quieren incrementar/profundizar los conceptos/destrezas en el Diseño de sistemas embebidos basados en MCUs, pero con proyectos reales en base a la alta experiencia del docente que desarrolla diversas soluciones para distintos campos de la industria',
    syllabus: [
      {
        theme: 'Diseño de sistemas embebidos',
        topics: [
          'Aplicaciones de Sistemas Embebidos',
          'Comparación entre Microprocesadores, Microcontroladores y SOC',
          'Arquitectura de Microchip en 8, 16 y 32 Bits',
          'Diferencias entre Assembler y ANSI C',
          'Clasificación y arquitectura de Microcontroladores de 8 bits',
          'Análisis de memoria de programa, memoria de datos RAM y arquitectura ortogonal de Microchip, así como aprendizaje de instrucciones de carga a W aritméticos y booleanos'
        ]
      },
      {
        theme: 'Set de instrucciones',
        topics: [
          'Manejo de la memoria RAM y direccionamiento de bancos',
          'Instrucciones de aprendizaje con memoria RAM',
          'Instrucciones booleanas orientadas al byte',
          'Instrucciones de comparación para bits y bytes',
          'Instrucciones aritméticas para bytes',
          'Instrucciones de salto, rotación, incremento y decremento para bytes'
        ]
      },
      {
        theme: 'Arquitectura PIC18',
        topics: [
          'Series de los Microcontroladores PIC18FXXXXX',
          'Características del nuevo ensamblador de Microchip',
          'Organización del código fuente en ensamblador',
          'Análisis del microcontrolador PIC18F45K50',
          'Manejo del Program Counter (PC).',
          'Configuración del periférico GPIO y uso de MPLAB X con el depurador integrado, incluyendo ejercicios prácticos con Proteus y el PIC18F45K50'
        ]
      },
      {
        theme: 'Subrutinas y diseño de librerías',
        topics: [
          'Directivas del nuevo Ensamblador XC8',
          'Manejo de subrutinas y subrutinas anidadas',
          'Aprendizaje de instrucciones con la PILA LIFO',
          'Análisis de la frecuencia y tiempo de ciclo de instrucción, MIPS, frecuencia de reloj y ciclo-máquina',
          'Diseño de retardos por software',
          'Implementación de un programa "Hola Mundo" para el PIC18F45K50 con un LED parpadeante, manejo de un Display de 7 Segmentos y diseño de librerías para el control de distintos periféricos y recursos del microcontrolador'
        ]
      },
      {
        theme: 'Manejo de tablas',
        topics: [
          'Implementación de rutinas para lectura y escritura en la memoria flash',
          'Aprendizaje de las nuevas directivas del PIC AS',
          'Técnica de la Multiplexación de datos',
          'Manejo del Display de 7 segmentos multiplexado',
          'Desarrollo de rutinas en lenguaje ensamblador para la conversión de binario a BCD',
          'Ejercicios prácticos con tablas y contadores'
        ]
      },
      {
        theme: 'Pantalla LCD y teclado matricial 4x4',
        topics: [
          'Diseño de la librería para la pantalla LCD',
          'Implementación de la librería para la pantalla LCD',
          'Diseño de la librería para el manejo del teclado matricial 4x4',
          'Implementación de la librería para el manejo del teclado matricial 4x4',
          'Pruebas y depuración',
          'Documentación y ejemplos de uso'
        ]
      }
    ],
    syllabusSrc: '#',
    proyects: [
      "Sistema de control de acceso por teclado matricial",
      "Sistema de control y monitoreo para un semáforo inteligente",
      "Diseño de un sistema de parqueo para automóviles",
      "Controlador de velocidad para motores DC",
      "Sistema de monitoreo meteorológico",
      "Sistema de adquisición de datos HMI",
      "Sistema de monitoreo/control por bluetooth y red celular"
    ],
    youLearns: [
      {
      imageSrc: mplabxide,
      title: "MPlab X IDE"
      },
      {
      imageSrc: xc8,
      title: "MPlab XC8 Compiler"
      },
      {
      imageSrc: proteus,
      title: "Proteus"
      },
      {
      imageSrc: labview,
      title: "Labview"
      }
    ],
    KitImageSrc: tablet,
    kits: [
      {
        title: 'Entrenador PIC Universal MMJ',
        description: 'La tarjeta de desarrollo es compatible con cualquier Microcontrolador de la serie 16/18 de 40 pines de microchip. Cuenta con alimentación externa de hasta 36V o USB, 8leds, pantalla LCD, 4 pulsadores, display multiplexado, puerto RS232/USB y 3 expansores mikrobuses con la capacidad de conectarle más de 1500 dispositivos externos entre sensores, actuadores, gateways, pantallas, interfaces, etc.'
      },
      {
        title: 'Curiosity Nano',
        description: 'La tarjeta de desarrollo utiliza un microcontrolador PIC18F57Q43 cuenta con un interruptor de usuario mecánico, un LED de usuario amarillo, depurador integrado, LED verde de alimentación y estado, programación y depuración, puerto COM virtual (CDC), canal de analizador lógico (GPIO), alimentación por USB y una corriente de salida máxima de 500 mA.'
      }
    ],
    OtherCourses: [
      {
        name: "Especialización en diseño electrónico profesional con Altium Designer y Normas IPC",
        imgSrc: AltiumThumb,
        nextPage: "/hardware/altium",
        imgAlt: "Especialización en diseño electrónico profesional con Altium Designer y Normas IPC"
      },
      {
        name: "Diseño de sistemas electrónicos analógicos y digitales",
        imgSrc: AnalogicaDiseñoThumb,
        nextPage: "/hardware/analogica-diseño",
        imgAlt: "Diseño de sistemas electrónicos analógicos y digitales"
      },
      {
        name: "DProgramación de microcontroladores PIC con el nuevo ensamblador PIC-AS XV8",
        imgSrc: picAsm,
        nextPage: "/firmware/pic-asm",
        imgAlt: "DProgramación de microcontroladores PIC con el nuevo ensamblador PIC-AS XV8"
      },
    ]
  },
  'altium-presencial': {
    title: 'Diseño digital de las compuertas al procesador',
    bannerSrc: broken,
    laptopImage: broken,
    tabletImage: broken,
    description: 'Nuestra especialización cubre una amplia gama de temas, desde el manejo de periféricos hasta protocolos de comunicación, sistemas HMI, comunicaciones inalámbricas y desarrollo de proyectos reales. Aprenderás a optimizar el código, manejar la arquitectura de los microcontroladores y aplicar técnicas avanzadas para mejorar la eficiencia y el rendimiento. Te preparamos para enfrentar desafíos avanzados en el desarrollo de productos electrónicos innovadores basados en sistemas embebidos.',
    time: '48',
    clients: 'Ingenieros, técnicos y estudiantes de ingeniería que deseen aprender a programar Microcontroladores PIC en el nuevo ASM PIC AS XC8 y manejar las ultimas herramientas de hardware y software de microchip',
    NeedKnow: 'La especialización está diseñada de manera que se adapta a personas con cero conocimientos en programación y microcontroladores, pero también para aquellos que tienen un conocimiento intermedio y quieren incrementar/profundizar los conceptos/destrezas en el Diseño de sistemas embebidos basados en MCUs, pero con proyectos reales en base a la alta experiencia del docente que desarrolla diversas soluciones para distintos campos de la industria',
    syllabus: [
      {
        theme: 'Diseño de sistemas embebidos',
        topics: [
          'Aplicaciones de Sistemas Embebidos',
          'Comparación entre Microprocesadores, Microcontroladores y SOC',
          'Arquitectura de Microchip en 8, 16 y 32 Bits',
          'Diferencias entre Assembler y ANSI C',
          'Clasificación y arquitectura de Microcontroladores de 8 bits',
          'Análisis de memoria de programa, memoria de datos RAM y arquitectura ortogonal de Microchip, así como aprendizaje de instrucciones de carga a W aritméticos y booleanos'
        ]
      },
      {
        theme: 'Set de instrucciones',
        topics: [
          'Manejo de la memoria RAM y direccionamiento de bancos',
          'Instrucciones de aprendizaje con memoria RAM',
          'Instrucciones booleanas orientadas al byte',
          'Instrucciones de comparación para bits y bytes',
          'Instrucciones aritméticas para bytes',
          'Instrucciones de salto, rotación, incremento y decremento para bytes'
        ]
      },
      {
        theme: 'Arquitectura PIC18',
        topics: [
          'Series de los Microcontroladores PIC18FXXXXX',
          'Características del nuevo ensamblador de Microchip',
          'Organización del código fuente en ensamblador',
          'Análisis del microcontrolador PIC18F45K50',
          'Manejo del Program Counter (PC).',
          'Configuración del periférico GPIO y uso de MPLAB X con el depurador integrado, incluyendo ejercicios prácticos con Proteus y el PIC18F45K50'
        ]
      },
      {
        theme: 'Subrutinas y diseño de librerías',
        topics: [
          'Directivas del nuevo Ensamblador XC8',
          'Manejo de subrutinas y subrutinas anidadas',
          'Aprendizaje de instrucciones con la PILA LIFO',
          'Análisis de la frecuencia y tiempo de ciclo de instrucción, MIPS, frecuencia de reloj y ciclo-máquina',
          'Diseño de retardos por software',
          'Implementación de un programa "Hola Mundo" para el PIC18F45K50 con un LED parpadeante, manejo de un Display de 7 Segmentos y diseño de librerías para el control de distintos periféricos y recursos del microcontrolador'
        ]
      },
      {
        theme: 'Manejo de tablas',
        topics: [
          'Implementación de rutinas para lectura y escritura en la memoria flash',
          'Aprendizaje de las nuevas directivas del PIC AS',
          'Técnica de la Multiplexación de datos',
          'Manejo del Display de 7 segmentos multiplexado',
          'Desarrollo de rutinas en lenguaje ensamblador para la conversión de binario a BCD',
          'Ejercicios prácticos con tablas y contadores'
        ]
      },
      {
        theme: 'Pantalla LCD y teclado matricial 4x4',
        topics: [
          'Diseño de la librería para la pantalla LCD',
          'Implementación de la librería para la pantalla LCD',
          'Diseño de la librería para el manejo del teclado matricial 4x4',
          'Implementación de la librería para el manejo del teclado matricial 4x4',
          'Pruebas y depuración',
          'Documentación y ejemplos de uso'
        ]
      }
    ],
    syllabusSrc: '#',
    proyects: [
      "Sistema de control de acceso por teclado matricial",
      "Sistema de control y monitoreo para un semáforo inteligente",
      "Diseño de un sistema de parqueo para automóviles",
      "Controlador de velocidad para motores DC",
      "Sistema de monitoreo meteorológico",
      "Sistema de adquisición de datos HMI",
      "Sistema de monitoreo/control por bluetooth y red celular"
    ],
    youLearns: [
      {
      imageSrc: mplabxide,
      title: "MPlab X IDE"
      },
      {
      imageSrc: xc8,
      title: "MPlab XC8 Compiler"
      },
      {
      imageSrc: proteus,
      title: "Proteus"
      },
      {
      imageSrc: labview,
      title: "Labview"
      }
    ],
    KitImageSrc: tablet,
    kits: [
      {
        title: 'Entrenador PIC Universal MMJ',
        description: 'La tarjeta de desarrollo es compatible con cualquier Microcontrolador de la serie 16/18 de 40 pines de microchip. Cuenta con alimentación externa de hasta 36V o USB, 8leds, pantalla LCD, 4 pulsadores, display multiplexado, puerto RS232/USB y 3 expansores mikrobuses con la capacidad de conectarle más de 1500 dispositivos externos entre sensores, actuadores, gateways, pantallas, interfaces, etc.'
      },
      {
        title: 'Curiosity Nano',
        description: 'La tarjeta de desarrollo utiliza un microcontrolador PIC18F57Q43 cuenta con un interruptor de usuario mecánico, un LED de usuario amarillo, depurador integrado, LED verde de alimentación y estado, programación y depuración, puerto COM virtual (CDC), canal de analizador lógico (GPIO), alimentación por USB y una corriente de salida máxima de 500 mA.'
      }
    ],
    OtherCourses: [
      {
        name: "Especialización en diseño electrónico profesional con Altium Designer y Normas IPC",
        imgSrc: AltiumThumb,
        nextPage: "/hardware/altium",
        imgAlt: "Especialización en diseño electrónico profesional con Altium Designer y Normas IPC"
      },
      {
        name: "Diseño de sistemas electrónicos analógicos y digitales",
        imgSrc: AnalogicaDiseñoThumb,
        nextPage: "/hardware/analogica-diseño",
        imgAlt: "Diseño de sistemas electrónicos analógicos y digitales"
      },
      {
        name: "DProgramación de microcontroladores PIC con el nuevo ensamblador PIC-AS XV8",
        imgSrc: picAsm,
        nextPage: "/firmware/pic-asm",
        imgAlt: "DProgramación de microcontroladores PIC con el nuevo ensamblador PIC-AS XV8"
      },
    ]
  },
  'analogica-diseño-presencial': {
    title: 'Diseño digital de las compuertas al procesador',
    bannerSrc: broken,
    laptopImage: broken,
    tabletImage: broken,
    description: 'Nuestra especialización cubre una amplia gama de temas, desde el manejo de periféricos hasta protocolos de comunicación, sistemas HMI, comunicaciones inalámbricas y desarrollo de proyectos reales. Aprenderás a optimizar el código, manejar la arquitectura de los microcontroladores y aplicar técnicas avanzadas para mejorar la eficiencia y el rendimiento. Te preparamos para enfrentar desafíos avanzados en el desarrollo de productos electrónicos innovadores basados en sistemas embebidos.',
    time: '48',
    clients: 'Ingenieros, técnicos y estudiantes de ingeniería que deseen aprender a programar Microcontroladores PIC en el nuevo ASM PIC AS XC8 y manejar las ultimas herramientas de hardware y software de microchip',
    NeedKnow: 'La especialización está diseñada de manera que se adapta a personas con cero conocimientos en programación y microcontroladores, pero también para aquellos que tienen un conocimiento intermedio y quieren incrementar/profundizar los conceptos/destrezas en el Diseño de sistemas embebidos basados en MCUs, pero con proyectos reales en base a la alta experiencia del docente que desarrolla diversas soluciones para distintos campos de la industria',
    syllabus: [
      {
        theme: 'Diseño de sistemas embebidos',
        topics: [
          'Aplicaciones de Sistemas Embebidos',
          'Comparación entre Microprocesadores, Microcontroladores y SOC',
          'Arquitectura de Microchip en 8, 16 y 32 Bits',
          'Diferencias entre Assembler y ANSI C',
          'Clasificación y arquitectura de Microcontroladores de 8 bits',
          'Análisis de memoria de programa, memoria de datos RAM y arquitectura ortogonal de Microchip, así como aprendizaje de instrucciones de carga a W aritméticos y booleanos'
        ]
      },
      {
        theme: 'Set de instrucciones',
        topics: [
          'Manejo de la memoria RAM y direccionamiento de bancos',
          'Instrucciones de aprendizaje con memoria RAM',
          'Instrucciones booleanas orientadas al byte',
          'Instrucciones de comparación para bits y bytes',
          'Instrucciones aritméticas para bytes',
          'Instrucciones de salto, rotación, incremento y decremento para bytes'
        ]
      },
      {
        theme: 'Arquitectura PIC18',
        topics: [
          'Series de los Microcontroladores PIC18FXXXXX',
          'Características del nuevo ensamblador de Microchip',
          'Organización del código fuente en ensamblador',
          'Análisis del microcontrolador PIC18F45K50',
          'Manejo del Program Counter (PC).',
          'Configuración del periférico GPIO y uso de MPLAB X con el depurador integrado, incluyendo ejercicios prácticos con Proteus y el PIC18F45K50'
        ]
      },
      {
        theme: 'Subrutinas y diseño de librerías',
        topics: [
          'Directivas del nuevo Ensamblador XC8',
          'Manejo de subrutinas y subrutinas anidadas',
          'Aprendizaje de instrucciones con la PILA LIFO',
          'Análisis de la frecuencia y tiempo de ciclo de instrucción, MIPS, frecuencia de reloj y ciclo-máquina',
          'Diseño de retardos por software',
          'Implementación de un programa "Hola Mundo" para el PIC18F45K50 con un LED parpadeante, manejo de un Display de 7 Segmentos y diseño de librerías para el control de distintos periféricos y recursos del microcontrolador'
        ]
      },
      {
        theme: 'Manejo de tablas',
        topics: [
          'Implementación de rutinas para lectura y escritura en la memoria flash',
          'Aprendizaje de las nuevas directivas del PIC AS',
          'Técnica de la Multiplexación de datos',
          'Manejo del Display de 7 segmentos multiplexado',
          'Desarrollo de rutinas en lenguaje ensamblador para la conversión de binario a BCD',
          'Ejercicios prácticos con tablas y contadores'
        ]
      },
      {
        theme: 'Pantalla LCD y teclado matricial 4x4',
        topics: [
          'Diseño de la librería para la pantalla LCD',
          'Implementación de la librería para la pantalla LCD',
          'Diseño de la librería para el manejo del teclado matricial 4x4',
          'Implementación de la librería para el manejo del teclado matricial 4x4',
          'Pruebas y depuración',
          'Documentación y ejemplos de uso'
        ]
      }
    ],
    syllabusSrc: '#',
    proyects: [
      "Sistema de control de acceso por teclado matricial",
      "Sistema de control y monitoreo para un semáforo inteligente",
      "Diseño de un sistema de parqueo para automóviles",
      "Controlador de velocidad para motores DC",
      "Sistema de monitoreo meteorológico",
      "Sistema de adquisición de datos HMI",
      "Sistema de monitoreo/control por bluetooth y red celular"
    ],
    youLearns: [
      {
      imageSrc: mplabxide,
      title: "MPlab X IDE"
      },
      {
      imageSrc: xc8,
      title: "MPlab XC8 Compiler"
      },
      {
      imageSrc: proteus,
      title: "Proteus"
      },
      {
      imageSrc: labview,
      title: "Labview"
      }
    ],
    KitImageSrc: tablet,
    kits: [
      {
        title: 'Entrenador PIC Universal MMJ',
        description: 'La tarjeta de desarrollo es compatible con cualquier Microcontrolador de la serie 16/18 de 40 pines de microchip. Cuenta con alimentación externa de hasta 36V o USB, 8leds, pantalla LCD, 4 pulsadores, display multiplexado, puerto RS232/USB y 3 expansores mikrobuses con la capacidad de conectarle más de 1500 dispositivos externos entre sensores, actuadores, gateways, pantallas, interfaces, etc.'
      },
      {
        title: 'Curiosity Nano',
        description: 'La tarjeta de desarrollo utiliza un microcontrolador PIC18F57Q43 cuenta con un interruptor de usuario mecánico, un LED de usuario amarillo, depurador integrado, LED verde de alimentación y estado, programación y depuración, puerto COM virtual (CDC), canal de analizador lógico (GPIO), alimentación por USB y una corriente de salida máxima de 500 mA.'
      }
    ],
    OtherCourses: [
      {
        name: "Especialización en diseño electrónico profesional con Altium Designer y Normas IPC",
        imgSrc: AltiumThumb,
        nextPage: "/hardware/altium",
        imgAlt: "Especialización en diseño electrónico profesional con Altium Designer y Normas IPC"
      },
      {
        name: "Diseño de sistemas electrónicos analógicos y digitales",
        imgSrc: AnalogicaDiseñoThumb,
        nextPage: "/hardware/analogica-diseño",
        imgAlt: "Diseño de sistemas electrónicos analógicos y digitales"
      },
      {
        name: "DProgramación de microcontroladores PIC con el nuevo ensamblador PIC-AS XV8",
        imgSrc: picAsm,
        nextPage: "/firmware/pic-asm",
        imgAlt: "DProgramación de microcontroladores PIC con el nuevo ensamblador PIC-AS XV8"
      },
    ]
  },
}
