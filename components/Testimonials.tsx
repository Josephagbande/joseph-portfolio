const goals = [
  {
    title: "Un stage académique",
    text: "Je recherche un stage en développement web full stack, dans le cadre de ma formation à EIG Bénin, pour travailler sur des projets réels au sein d'une équipe.",
  },
  {
    title: "Des opportunités professionnelles",
    text: "Je suis ouvert aux missions et aux postes de développeur web, front-end comme back-end, dans des entreprises, des agences ou des startups.",
  },
  {
    title: "Des projets énergie et numérique",
    text: "Grâce à ma formation en génie électrique et énergies renouvelables, je souhaite contribuer à des projets qui relient l'énergie et le numérique.",
  },
];

export default function Testimonials() {
  return (
    <section id="temoignages" className="flex min-h-screen items-center py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Mes objectifs professionnels</h2>
        <div className="mt-2 h-1 w-16 rounded bg-emerald-600" />
        <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Ce que je recherche aujourd&apos;hui, pour construire la suite de mon parcours.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {goals.map((goal) => (
            <div key={goal.title} className="rounded-2xl border border-gray-200 p-6 transition hover:border-emerald-600 dark:border-gray-800">
              <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">{goal.title}</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">{goal.text}</p>
            </div>
          ))}
        </div>

        <a href="#contact" className="mt-10 inline-block rounded-full bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-700">
          Échangeons
        </a>
      </div>
    </section>
  );
}