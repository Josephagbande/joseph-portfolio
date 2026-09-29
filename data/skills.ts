export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Développement web",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "UI / Design",
    skills: ["Tailwind CSS", "Sass", "Responsive Design"],
  },
  {
    title: "Animation",
    skills: ["GSAP"],
  },
  {
    title: "Outils",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Électricité et énergie",
    skills: [
      "Installations électriques",
      "Énergie solaire",
      "Dimensionnement photovoltaïque",
      "Tableaux électriques",
      "Automatisation",
      "Électronique",
    ],
  },
];