export type Lang = "fr" | "en";

export const translations = {
  fr: {
    nav: {
      accueil: "Accueil",
      apropos: "À propos",
      competences: "Compétences",
      projets: "Projets",
      parcours: "Parcours",
      objectifs: "Objectifs",
      contact: "Contact",
      meContacter: "Me contacter",
    },
    hero: {
      badge: "Disponible pour un emploi ou un stage",
      title: "Technicien supérieur en génie électrique & énergie renouvelable | Développeur web",
      tagline: "Je transforme les idées en solutions numériques et énergétiques.",
      seeProjects: "Voir mes projets",
      contactMe: "Me contacter",
      downloadCv: "Télécharger mon CV",
    },
    about: {
      heading: "À propos",
      p1: "Je suis technicien supérieur en génie électrique et énergie renouvelable, avec des compétences en électronique, en informatique et en développement web.",
      p2: "Mon parcours me permet de faire le lien entre deux mondes : celui de l'énergie et des installations électriques, et celui du numérique. J'aime concevoir des solutions concrètes, qu'il s'agisse d'un tableau de distribution intelligent ou d'une application web.",
      p3: "Curieux de technologie et d'innovation, je cherche à mettre mes compétences au service de projets qui allient énergie, technologie et numérique.",
      domains: [
        { title: "Génie électrique", text: "Installations, tableaux électriques et automatisation." },
        { title: "Énergie renouvelable", text: "Énergie solaire et dimensionnement photovoltaïque." },
        { title: "Électronique", text: "Capteurs, microcontrôleurs et systèmes intelligents." },
        { title: "Informatique", text: "Logique, outils numériques et résolution de problèmes." },
        { title: "Développement web", text: "Sites et applications modernes avec React et Next.js." },
      ],
    },
    skills: {
      heading: "Compétences",
    },
    projects: {
      heading: "Projets",
      comingSoon: "Aperçu à venir",
      viewSite: "Voir le site",
      items: [
        {
          category: "Électricité",
          title: "Tableau de distribution intelligent",
          description: "Conception et réalisation d'un tableau de distribution intelligent avec gestion dynamique des priorités pour les installations solaires.",
        },
        {
          category: "Web",
          title: "Application de gestion de Hackathon",
          description: "Gestion des équipes, projets, scores, classement, catégories et tableau de bord du jury.",
        },
        {
          category: "Web",
          title: "Portfolio personnel",
          description: "Mon portfolio professionnel, conçu pour présenter mon profil, mes compétences et mes réalisations.",
        },
        {
          category: "Web",
          title: "Site web Coach sportif",
          description: "Site de présentation pour un coach sportif. Description et fonctionnalités à compléter.",
        },
        {
          category: "Web",
          title: "TechShop",
          description: "Boutique en ligne de matériel informatique : catalogue avec recherche et filtres, panier invité ou compte, tunnel de commande complet, codes promo, avis clients modérés, favoris et newsletter. Le dashboard admin permet de gérer les produits (avec upload d'images), les commandes et les clients.",
        },
        {
          category: "Énergie & Web",
          title: "Supervision solaire PV",
          description: "Plateforme web de supervision d'installations photovoltaïques, avec un tableau de bord de suivi et des graphiques. Projet présenté en soutenance.",
        },
        {
          category: "Web",
          title: "Seguro Hôtel",
          description: "Site de réservation d'un hôtel de luxe, avec réservations dynamiques et tableau de bord administrateur. Réalisé lors du Hackathon EIG et présenté devant un jury.",
        },
        {
          category: "Innovation",
          title: "Hackathon FIC — Epitech",
          description: "Mobilité durable et intelligente : réduire les embouteillages en ville grâce à des solutions numériques collaboratives (covoiturage, gestion intelligente du trafic). J'étais spécialiste technique de mon équipe.",
        },
      ],
    },
    experience: {
      heading: "Parcours",
      items: [
        {
          date: "2026",
          title: "Formation en développement web",
          organization: "EIG Bénin",
          description: "Formation en développement web full stack, avec une recherche de stage académique.",
          achievements: [
            "Seguro Hôtel : site de réservation d'un hôtel de luxe, présenté devant un jury lors du Hackathon EIG",
            "Hackathon Manager : application full-stack avec React, Node.js/Express et MongoDB Atlas",
          ],
        },
        {
          date: "2025",
          title: "Licence en génie électrique et énergies renouvelables",
          organization: "ESMER",
          description: "Formation en génie électrique et énergies renouvelables, avec une rigueur que j'applique aujourd'hui à mon code.",
          achievements: [
            "Soutenance : plateforme web de supervision d'installations photovoltaïques",
            "Tableau de bord de suivi avec graphiques (Chart.js), en PHP et MySQL",
          ],
        },
        {
          date: "2025",
          title: "Spécialiste technique du Hackathon FIC",
          organization: "Epitech",
          description: "Spécialiste technique de mon équipe sur le thème de la mobilité durable et intelligente.",
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
      ],
    },
    testimonials: {
      heading: "Mes objectifs professionnels",
      subheading: "Ce que je recherche aujourd'hui, pour construire la suite de mon parcours.",
      cta: "Échangeons",
      goals: [
        { title: "Un stage académique", text: "Je recherche un stage en développement web full stack, dans le cadre de ma formation à EIG Bénin, pour travailler sur des projets réels au sein d'une équipe." },
        { title: "Des opportunités professionnelles", text: "Je suis ouvert aux missions et aux postes de développeur web, front-end comme back-end, dans des entreprises, des agences ou des startups." },
        { title: "Des projets énergie et numérique", text: "Grâce à ma formation en génie électrique et énergies renouvelables, je souhaite contribuer à des projets qui relient l'énergie et le numérique." },
      ],
    },
    contact: {
      heading: "Construisons quelque chose ensemble.",
      text: "Vous avez un projet, une opportunité ou une idée à développer ? Échangeons.",
      emailLabel: "Email",
      phoneLabel: "Téléphone",
      nameLabel: "Nom",
      emailFieldLabel: "Email",
      subjectLabel: "Sujet",
      messageLabel: "Message",
      send: "Envoyer le message",
      sending: "Envoi en cours...",
      success: "Merci ! Votre message a bien été envoyé, je vous répondrai rapidement.",
    },
    footer: {
      title: "Technicien en génie électrique & énergie renouvelable | Développeur web",
      rights: "Tous droits réservés.",
    },
  },
  en: {
    nav: {
      accueil: "Home",
      apropos: "About",
      competences: "Skills",
      projets: "Projects",
      parcours: "Experience",
      objectifs: "Goals",
      contact: "Contact",
      meContacter: "Contact me",
    },
    hero: {
      badge: "Available for a job or internship",
      title: "Electrical Engineering & Renewable Energy Technician | Web Developer",
      tagline: "I turn ideas into digital and energy solutions.",
      seeProjects: "View my projects",
      contactMe: "Contact me",
      downloadCv: "Download my CV",
    },
    about: {
      heading: "About",
      p1: "I am an superior electrical engineering and renewable energy technician, with skills in electronics, computer science, and web development.",
      p2: "My background lets me bridge two worlds: energy and electrical installations, and the digital world. I enjoy designing concrete solutions, whether it's a smart distribution board or a web application.",
      p3: "Curious about technology and innovation, I want to put my skills to work on projects that combine energy, technology, and digital.",
      domains: [
        { title: "Electrical engineering", text: "Installations, electrical panels, and automation." },
        { title: "Renewable energy", text: "Solar energy and photovoltaic sizing." },
        { title: "Electronics", text: "Sensors, microcontrollers, and smart systems." },
        { title: "Computer science", text: "Logic, digital tools, and problem-solving." },
        { title: "Web development", text: "Modern sites and applications with React and Next.js." },
      ],
    },
    skills: {
      heading: "Skills",
    },
    projects: {
      heading: "Projects",
      comingSoon: "Preview coming soon",
      viewSite: "View site",
      items: [
        {
          category: "Electrical",
          title: "Smart distribution board",
          description: "Design and construction of a smart distribution board with dynamic priority management for solar installations.",
        },
        {
          category: "Web",
          title: "Hackathon Management App",
          description: "Manages teams, projects, scores, rankings, categories, and a jury dashboard.",
        },
        {
          category: "Web",
          title: "Personal Portfolio",
          description: "My professional portfolio, designed to showcase my profile, skills, and achievements.",
        },
        {
          category: "Web",
          title: "Sports Coach Website",
          description: "A showcase site for a sports coach. Description and features to be completed.",
        },
        {
          category: "Web",
          title: "TechShop",
          description: "Online computer hardware store: catalog with search and filters, guest/account cart, full checkout flow, promo codes, moderated customer reviews, favorites, and newsletter. The admin dashboard manages products (with image upload), orders, and customers.",
        },
        {
          category: "Energy & Web",
          title: "Solar PV Monitoring",
          description: "A web platform for monitoring photovoltaic installations, with a tracking dashboard and charts. Presented at final thesis defense.",
        },
        {
          category: "Web",
          title: "Seguro Hotel",
          description: "A booking site for a luxury hotel, with dynamic reservations and an admin dashboard. Built during the EIG Hackathon and presented to a jury.",
        },
        {
          category: "Innovation",
          title: "Hackathon FIC — Epitech",
          description: "Sustainable and smart mobility: reducing urban traffic congestion through collaborative digital solutions (carpooling, smart traffic management). I was my team's technical specialist.",
        },
      ],
    },
    experience: {
      heading: "Experience",
      items: [
        {
          date: "2026",
          title: "Web Development Training",
          organization: "EIG Bénin",
          description: "Full-stack web development training, currently seeking an academic internship.",
          achievements: [
            "Seguro Hotel: luxury hotel booking site, presented to a jury during the EIG Hackathon",
            "Hackathon Manager: full-stack app with React, Node.js/Express, and MongoDB Atlas",
          ],
        },
        {
          date: "2025",
          title: "Bachelor's in Electrical Engineering and Renewable Energy",
          organization: "ESMER",
          description: "Training in electrical engineering and renewable energy, with a rigor I now apply to my code.",
          achievements: [
            "Thesis defense: web platform for monitoring photovoltaic installations",
            "Tracking dashboard with charts (Chart.js), built with PHP and MySQL",
          ],
        },
        {
          date: "2025",
          title: "Technical Specialist, Hackathon FIC",
          organization: "Epitech",
          description: "Technical specialist for my team on the theme of sustainable and smart mobility.",
          achievements: [
            "Reducing urban traffic congestion through collaborative digital solutions",
            "Explored ideas: carpooling and smart traffic management",
          ],
        },
        {
          date: "2021 - 2022",
          title: "High School Diploma, Science Track",
          organization: "CS Le Bon Berger",
          description: "Science-track high school diploma (French Baccalauréat série D).",
          achievements: [],
        },
      ],
    },
    testimonials: {
      heading: "My professional goals",
      subheading: "What I'm looking for today, to build the next step of my journey.",
      cta: "Let's talk",
      goals: [
        { title: "An academic internship", text: "I'm looking for a full-stack web development internship as part of my training at EIG Bénin, to work on real projects within a team." },
        { title: "Professional opportunities", text: "I'm open to freelance work and web developer positions, front-end or back-end, in companies, agencies, or startups." },
        { title: "Energy and digital projects", text: "Thanks to my training in electrical engineering and renewable energy, I want to contribute to projects that connect energy and digital technology." },
      ],
    },
    contact: {
      heading: "Let's build something together.",
      text: "Have a project, an opportunity, or an idea to develop? Let's talk.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      nameLabel: "Name",
      emailFieldLabel: "Email",
      subjectLabel: "Subject",
      messageLabel: "Message",
      send: "Send message",
      sending: "Sending...",
      success: "Thank you! Your message has been sent, I'll get back to you soon.",
    },
    footer: {
      title: "Electrical Engineering & Renewable Energy Technician | Web Developer",
      rights: "All rights reserved.",
    },
  },
} as const;