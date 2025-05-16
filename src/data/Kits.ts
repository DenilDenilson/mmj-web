// import KitAnsiC from "@src/Images/Carreras/Embebido/KitRedCelular.png";
// import KitAnsiC from "@src/Images/Carreras/Embebido/ANCIC.png";
// import KitAnsiC from "@src/Images/Carreras/Embebido/KitAnsiC.webp";
import KitAnsiC from "@src/Images/Carreras/Embebido/ANCICv2.webp";
// import KitAnsiC from "@public/Images/KitAnsiC.webp";

// Acá la URI define la key del objeto
interface kitImage {
  [key: string]: ImageMetadata;
}

export const kitsImages: kitImage = {
  "ansi-c": KitAnsiC,
};
