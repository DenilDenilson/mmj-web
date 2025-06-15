// import KitAnsiC from "@src/Images/Carreras/Embebido/KitRedCelular.png";
// import KitAnsiC from "@src/Images/Carreras/Embebido/ANCIC.png";
// import KitAnsiC from "@src/Images/Carreras/Embebido/KitAnsiC.webp";
import KitAnsiC from "@src/Images/Carreras/Embebido/ANCICv2.webp";
import KitPIC from "@src/Images/Carreras/Embebido/KitPIC.webp";
import KitRedes from "@src/Images/Carreras/Embebido/KitRedes.webp";
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
};
