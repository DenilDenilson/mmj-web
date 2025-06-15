import ThumbAnsiC from "@src/Images/Carreras/Embebido/ThumbAnsiC.jpg";
import ThumbARM from "@src/Images/Carreras/Embebido/ThumbARM.jpg";
import ThumbPicWiFi from "@src/Images/Carreras/Embebido/ThumbPicWifi.jpg";
import ThumbPicASM from "@src/Images/Carreras/Embebido/ThumbPicASM.jpg";
import ThumbRedesIndustriales from "@src/Images/Carreras/Embebido/ThumbRedesIndustriales.jpg";
import ThumbRedCelular from "@src/Images/Carreras/IoT/ThumbRedCelular.jpg";
import ThumbEsp32C from "@src/Images/Carreras/IoT/ThumbEsp32C.jpg";
import ThumbLabview from "@src/Images/Carreras/Software/ThumbLabview.jpg";
import ThumbPython from "@src/Images/Carreras/Software/ThumbPython.jpg";

interface bgImage {
  [key: string]: ImageMetadata;
}

export const bgImages: bgImage = {
  "ansi-c": ThumbAnsiC,
  arm: ThumbARM,
  "pic-wifi": ThumbPicWiFi,
  "pic-asm": ThumbPicASM,
  redes: ThumbRedesIndustriales,
  redcelular: ThumbRedCelular,
  esp32c: ThumbEsp32C,
  labview: ThumbLabview,
  python: ThumbPython,
};
