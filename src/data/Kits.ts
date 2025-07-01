// import KitAnsiC from "@src/Images/Carreras/Embebido/KitRedCelular.png";
// import KitAnsiC from "@src/Images/Carreras/Embebido/ANCIC.png";
// import KitAnsiC from "@src/Images/Carreras/Embebido/KitAnsiC.webp";
import KitAnsiC from "@src/Images/Carreras/Embebido/ANCICv2.webp";
import KitPIC from "@src/Images/Carreras/Embebido/KitPIC.webp";
import KitRedes from "@src/Images/Carreras/Embebido/KitRedes.webp";
import KitEsp32IoT from "@src/Images/Carreras/IoT/KitEsp32IoT.webp";
import KitRedCelular from "@src/Images/Carreras/IoT/KitRedCelular.webp";
import KitSocEsp32 from "@src/Images/Carreras/IoT/KitSocEsp32.webp";
import KitPython from "@src/Images/Carreras/Software/KitPython.webp";
import KitLabview from "@src/Images/Carreras/Software/KitLabview.webp";
import KitDiseñoDigital from "@src/Images/Carreras/Hardware/KitDiseñoDigital.webp";
import KitSistemasElectronicos from "@src/Images/Carreras/Hardware/KitSistemasElectronicos.webp";
// import KitAnsiC from "@public/Images/KitAnsiC.webp";

// Acá la URI define la key del objeto
interface kitImage {
  [key: string]: ImageMetadata;
}

export const kitsImages: kitImage = {
  "ansi-c": KitAnsiC,
  "pic-wifi": KitPIC,
  "pic-asm": KitPIC,
  redes: KitRedes,
  "esp32-arduino": KitEsp32IoT,
  "esp32-c": KitSocEsp32,
  "red-celular": KitRedCelular,
  python: KitPython,
  labview: KitLabview,
  altium: KitSistemasElectronicos,
  digital: KitDiseñoDigital,
  "analogica-digitales": KitSistemasElectronicos,
};
