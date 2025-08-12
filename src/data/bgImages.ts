import ThumbAnsiC from "@src/Images/Carreras/Embebido/ThumbAnsiC.jpg";
import ThumbARM from "@src/Images/Carreras/Embebido/ThumbARM.jpg";
import ThumbPicWiFi from "@src/Images/Carreras/Embebido/ThumbPicWifi.jpg";
import ThumbPicASM from "@src/Images/Carreras/Embebido/ThumbPicASM.jpg";
import ThumbRedesIndustriales from "@src/Images/Carreras/Embebido/ThumbRedesIndustriales.jpg";
import ThumbRedCelular from "@src/Images/Carreras/IoT/ThumbRedCelular.jpg";
import ThumbEsp32C from "@src/Images/Carreras/IoT/ThumbEsp32C.jpg";
import ThumbArduinoIoT from "@src/Images/Carreras/IoT/ThumbArduinoIoT.jpg";
import ThumbLabview from "@src/Images/Carreras/Software/ThumbLabview.jpg";
import ThumbLabviewAdvanced from "@src/Images/Carreras/Software/ThumbLabviewAdvanced.jpg";
import ThumbPython from "@src/Images/Carreras/Software/ThumbPython.jpg";
import ThumbAltium from "@src/Images/Carreras/Hardware/ThumbAltium.jpg";
import ThumbDiseñoDigital from "@src/Images/Carreras/Hardware/ThumbDiseñoDigital.jpg";
import ThumbSitemasElectronicos from "@src/Images/Carreras/Hardware/ThumbSistemasElectronicos.jpg";

interface bgImage {
  [key: string]: ImageMetadata;
}

export const bgImages: bgImage = {
  "ansi-c": ThumbAnsiC,
  arm: ThumbARM,
  "labview-avanzado": ThumbLabviewAdvanced,
  "pic-wifi": ThumbPicWiFi,
  "pic-asm": ThumbPicASM,
  redes: ThumbRedesIndustriales,
  "esp32-arduino": ThumbArduinoIoT,
  "esp32-c": ThumbEsp32C,
  "red-celular": ThumbRedCelular,
  labview: ThumbLabview,
  python: ThumbPython,
  altium: ThumbAltium,
  digital: ThumbDiseñoDigital,
  "analogica-digitales": ThumbSitemasElectronicos,
};
