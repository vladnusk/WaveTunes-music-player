import { v4 as uuid } from "uuid";

const defaultMusic = () => {
  
  return [
    {
      name: "Mask",
      cover:
        "https://cdns-images.dzcdn.net/images/cover/cf2f658fcd1f8caa06c6e1399a2c0066/500x500-000000-80-0-0.jpg",
      artist: "Izzamuzzic",
      audio:
        "https://cdns-preview-c.dzcdn.net/stream/c-cb7d18a73ddbbcb5252280bfc9fa7095-2.mp3 ",

      color: ["#5C84C9", "#20364B"],
      id: uuid(),
      active: true,
      default: true,
    },
    {
      name: "Night (Instinct Version)",
      cover:
        "https://cdns-images.dzcdn.net/images/cover/c5d63bc2d57b9892f85bc0ebd14c7fe4/500x500-000000-80-0-0.jpg",
      artist: "Izzamuzzic",
      audio:
        "https://cdns-preview-a.dzcdn.net/stream/c-af83086f6721ec79919bd5f138bbdd2c-4.mp3 ",

      color: ["#FCEEDC", "#2B242E"],
      id: uuid(),
      active: false,
      default: true,
    },
    {
      name: "Medveditca",
      cover:
        "https://cdns-images.dzcdn.net/images/cover/4c7389b5dc2f19cd74713a935aa48618/500x500-000000-80-0-0.jpg",
      artist: "Izzamuzzic",
      audio:
        "https://cdns-preview-9.dzcdn.net/stream/c-9588863bcfa5358d714c87f5f246bd97-6.mp3",

      color: ["#FF7100", "#4ADDFF"],
      id: uuid(),
      active: false,
      default: true,
    },
  ]
};

export default defaultMusic;
