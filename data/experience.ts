export type Experience = {
  date: string;
  title: string;
  organization: string;
  description: string;
  achievements: string[];
};

export const experiences: Experience[] = [
  {
    date: "2026",
    title: "Formation en développement web",
    organization: "EIG Bénin",
    description:
      "Formation en développement web full stack, avec une recherche de stage académique.",
    achievements: [
      "Seguro Hôtel : site de réservation d'un hôtel de luxe, présenté devant un jury lors du Hackathon EIG",
      "Hackathon Manager : application full-stack avec React, Node.js/Express et MongoDB Atlas",
    ],
  },
  {
    date: "2025",
    title: "Licence en génie électrique et énergies renouvelables",
    organization: "ESMER",
    description:
      "Formation en génie électrique et énergies renouvelables, avec une rigueur que j'applique aujourd'hui à mon code.",
    achievements: [
      "Soutenance : plateforme web de supervision d'installations photovoltaïques",
      "Tableau de bord de suivi avec graphiques (Chart.js), en PHP et MySQL",
    ],
  },
  {
    date: "2025",
    title: "Spécialiste technique du Hackathon FIC",
    organization: "Epitech",
    description:
      "Spécialiste technique de mon équipe sur le thème de la mobilité durable et intelligente.",
    achievements: [
      "Réduire les embouteillages en ville par des solutions numériques collaboratives",
      "Pistes explorées : covoiturage et gestion intelligente du trafic",
    ],
  },
  {
    date: "2021 - 2022",
    title: "Baccalauréat série D",
    organization: "CS Le Bon Berger",
    description: "Baccalauréat scientifique, série D.",
    achievements: [],
  },
];