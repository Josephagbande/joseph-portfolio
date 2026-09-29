export type Project = {
  title: string;
  description: string;
  category: "Électricité" | "Web" | "Énergie & Web" | "Innovation";
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Tableau de distribution intelligent",
    description:
      "Conception et réalisation d'un tableau de distribution intelligent avec gestion dynamique des priorités pour les installations solaires.",
    category: "Électricité",
    technologies: ["Électricité", "Capteurs", "Automatisation", "Énergie solaire"],
    image: "/images/projects/tableau-distribution.svg",
  },
  {
    title: "Application de gestion de Hackathon",
    description:
      "Gestion des équipes, projets, scores, classement, catégories et tableau de bord du jury.",
    category: "Web",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/hackathon-manager.svg",
  },
  {
    title: "Portfolio personnel",
    description:
      "Mon portfolio professionnel, conçu pour présenter mon profil, mes compétences et mes réalisations.",
    category: "Web",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP"],
    image: "/images/projects/portfolio.svg",
  },
  {
    title: "Site web Coach sportif",
    description:
      "Site de présentation pour un coach sportif. Description et fonctionnalités à compléter.",
    category: "Web",
    technologies: [],
    image: "/images/projects/coach-sportif.svg",
  },
  {
    title: "TechShop",
    description:
      "Boutique en ligne de matériel informatique : catalogue avec recherche et filtres, panier invité ou compte, tunnel de commande complet, codes promo, avis clients modérés, favoris et newsletter. Le dashboard admin permet de gérer les produits (avec upload d'images), les commandes et les clients.",
    category: "Web",
    technologies: ["Laravel", "PHP", "MySQL", "Blade", "Tailwind CSS", "JavaScript"],
    image: "/images/projects/techshop.svg",
  },
  {
    title: "Supervision solaire PV",
    description:
      "Plateforme web de supervision d'installations photovoltaïques, avec un tableau de bord de suivi et des graphiques. Projet présenté en soutenance.",
    category: "Énergie & Web",
    technologies: ["HTML/CSS/JS", "PHP", "MySQL", "Chart.js"],
    image: "/images/projects/supervision-solaire.svg",
  },
  {
    title: "Seguro Hôtel",
    description:
      "Site de réservation d'un hôtel de luxe, avec réservations dynamiques et tableau de bord administrateur. Réalisé lors du Hackathon EIG et présenté devant un jury.",
    category: "Web",
    technologies: ["HTML/CSS/JS", "PHP", "MySQL"],
    image: "/images/projects/seguro-hotel.svg",
  },
  {
    title: "Hackathon FIC — Epitech",
    description:
      "Mobilité durable et intelligente : réduire les embouteillages en ville grâce à des solutions numériques collaboratives (covoiturage, gestion intelligente du trafic). J'étais spécialiste technique de mon équipe.",
    category: "Innovation",
    technologies: [],
    image: "/images/projects/hackathon-fic.svg",
  },
];