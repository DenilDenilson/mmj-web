// Especialozaciones
import AnsiCThumb from '@/assets/ThumbnailCourses/AnsiC.webp'
import LabviewIoTThumb from '@/assets/ThumbnailCourses/labviewIoT.webp'
import LabviewAdvancedThum from '@/assets/ThumbnailCourses/LabviewAvanzado.webp'
import AltiumThumb from '@/assets/ThumbnailCourses/Altium.webp'
import AnalogicaDiseñoThumb from '@/assets/ThumbnailCourses/AnalogicaDiseño.webp'
import esp32Arduino from '@/assets/ThumbnailCourses/esp32Arduino.webp'
import esp32C from '@/assets/ThumbnailCourses/esp32C.webp'
import autoPlc from '@/assets/ThumbnailCourses/autoPlc.webp'
import autoPresion from '@/assets/ThumbnailCourses/autoPresion.webp'
import picIoT from '@/assets/ThumbnailCourses/picIoT.webp'
import picAsm from '@/assets/ThumbnailCourses/picAsm.webp'
import nextion from '@/assets/ThumbnailCourses/nextion.webp'

// Carreras
import SistemasEmbebidos from '@/assets/ThumbnailCourses/SistemasEmbebidosThumb.webp'
import DevelopSW from '@/assets/ThumbnailCourses/DesarrolloSWThumb.webp'
import InternetThingsThumb from '@/assets/ThumbnailCourses/InternetThingsThumb.webp'
import DesarrollodeHWThumb from '@/assets/ThumbnailCourses/DesarrollodeHWThumb.webp'
import AutoIndustrialThumb from '@/assets/ThumbnailCourses/AutoIndustrialThumb.webp'
import PresencialThumb from '@/assets/ThumbnailCourses/PresencialThumb.webp'

// Líneas de carrera banners
import SistemasEmbebidosBanner from '@/assets/Banners/firmware.webp'
import DevelopSWBanner from '@/assets/Banners/software.webp'
import InternetThingsBanner from '@/assets/Banners/iot.webp'
import DesarrollodeHWBanner from '@/assets/Banners/hardware.webp'
import AutoIndustrialBanner from '@/assets/Banners/auto.webp'
import PresencialBanner from '@/assets/Banners/presencial.webp'


export const specialites = {
  "software": {
    name: "Desarrollo de software",
    bannerSrc: DevelopSWBanner,
    courses: [
      {
        name: "Especialización en lenguaje Ansi C orientado a los sistemas embebidos",
        imgSrc: AnsiCThumb,
        nextPage: "/software/ansi-c",
        imgAlt: "Especialización en lenguaje Ansi C orientado a los sistemas embebidos"
      },
      {
        name: "Especialización en diseño de sistemas scada e industria 4.0 con Ni LabVIEW y protocolos IoT",
        imgSrc: LabviewIoTThumb,
        nextPage: "/software/labview-iot",
        imgAlt: "Especialización en diseño de sistemas scada e industria 4.0 con Ni LabVIEW y protocolos IoT"
      },
      {
        name: "Especialización en diseño de software industrial usando arquitecturas avanzadas con NI LabVIEW",
        imgSrc: LabviewAdvancedThum,
        nextPage: "/software/labview-avanzado",
        imgAlt: "Especialización en diseño de software industrial usando arquitecturas avanzadas con NI LabVIEW"
      }
    ]
  },
  "hardware": {
    name: "Desarrollo de hardware",
    bannerSrc: DesarrollodeHWBanner,
    courses: [
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
      }
    ]
  },
  "iot": {
    name: "Internet de las cosas IoT",
    bannerSrc: InternetThingsBanner,
    courses: [
      {
        name: "Desarrollo de aplicaciones IoT con Esp32 y Arduino",
        imgSrc: esp32Arduino,
        nextPage: "/iot/esp32-arduino",
        imgAlt: "Desarrollo de aplicaciones IoT con Esp32 y Arduino"
      },
      {
        name: "Programación de SoC Esp32 en lenguaje Ansi C y aplicaciones IoT",
        imgSrc: esp32C,
        nextPage: "/iot/esp32-c",
        imgAlt: "Programación de SoC Esp32 en lenguaje Ansi C y aplicaciones IoT"
      }
    ]
  },
  "auto": {
    name: "Automatización industrial",
    bannerSrc: AutoIndustrialBanner,
    courses: [
      {
        name: "Programación de procesos industriales con PLC S7-1200 PLC",
        imgSrc: autoPlc,
        nextPage: "/auto/plc",
        imgAlt: "Programación de procesos industriales con PLC S7-1200 PLC"
      },
      {
        name: "Diseño y programación para un sistema de control de presión constante",
        imgSrc: autoPresion,
        nextPage: "/auto/presion",
        imgAlt: "Diseño y programación para un sistema de control de presión constante"
      }
    ]
  },
  "firmware": {
    name: "Desarrollo de sistemas embebidos con mcu",
    bannerSrc: SistemasEmbebidosBanner,
    courses: [
      {
        name: "Programación de microcontroladores PIC y comunicación WiFi para IoT",
        imgSrc: picIoT,
        nextPage: "/firmware/pic-iot",
        imgAlt: "Programación de microcontroladores PIC y comunicación WiFi para IoT"
      },
      {
        name: "DProgramación de microcontroladores PIC con el nuevo ensamblador PIC-AS XV8",
        imgSrc: picAsm,
        nextPage: "/firmware/pic-asm",
        imgAlt: "DProgramación de microcontroladores PIC con el nuevo ensamblador PIC-AS XV8"
      },
      {
        name: "Diseño de sistemas HMI con pantallas táctiles y microcontroladores PIC",
        imgSrc: nextion,
        nextPage: "/firmware/nextion",
        imgAlt: "Diseño de sistemas HMI con pantallas táctiles y microcontroladores PIC"
      }
    ]
  },
  "presencial": {
    name: "Desarrollo de hardware",
    bannerSrc: PresencialBanner,
    courses: [
      {
        name: "Especialización en diseño electrónico profesional con Altium Designer y Normas IPC",
        imgSrc: SistemasEmbebidos,
        nextPage: "/presencial/altium-presencial",
        imgAlt: "Especialización en diseño electrónico profesional con Altium Designer y Normas IPC"
      },
      {
        name: "Diseño de sistemas electrónicos analógicos y digitales",
        imgSrc: SistemasEmbebidos,
        nextPage: "/presencial/analogica-diseño-presencial",
        imgAlt: "Diseño de sistemas electrónicos analógicos y digitales"
      }
    ]
  }
}

export const specializations = [
	{
		name: 'Desarrollo de sistemas embebidos',
		imgSrc: SistemasEmbebidos,
		imgAlt: 'Desarrollo de sistemas embebidos',
    nextPage: '/firmware'
	},
	{
		name: 'Desarrollo de software',
		imgSrc: DevelopSW,
		imgAlt: 'Desarrollo de software',
    nextPage: '/software'
	},
	{
		name: 'Internet de las cosas IoT',
		imgSrc: InternetThingsThumb,
		imgAlt: 'Internet de las cosas IoT',
    nextPage: '/iot'
	},
	{
		name: 'Desarrollo de hardware',
		imgSrc: DesarrollodeHWThumb,
		imgAlt: 'Desarrollo de hardware',
    nextPage: '/hardware'
	},
	{
		name: 'Automatización industrial',
		imgSrc: AutoIndustrialThumb,
		imgAlt: 'Automatización industrial',
    nextPage: '/auto'
	},
	{
		name: 'Cursos presenciales',
		imgSrc: PresencialThumb,
		imgAlt: 'Cursos presenciales',
    nextPage: '/presencial'
	},
]