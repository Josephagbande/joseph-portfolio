const domains = [
  { title: "Génie électrique", text: "Installations, tableaux électriques et automatisation." },
  { title: "Énergie renouvelable", text: "Énergie solaire et dimensionnement photovoltaïque." },
  { title: "Électronique", text: "Capteurs, microcontrôleurs et systèmes intelligents." },
  { title: "Informatique", text: "Logique, outils numériques et résolution de problèmes." },
  { title: "Développement web", text: "Sites et applications modernes avec React et Next.js." },
];

export default function About() {
  return (
    <section id="apropos" className="flex min-h-screen items-center py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">À propos</h2>
        <div className="mt-2 h-1 w-16 rounded bg-emerald-600" />

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div className="space-y-5 text-lg text-gray-600 dark:text-gray-300">
            <p>
              Je suis technicien supérieur en génie électrique et énergie renouvelable, avec des
              compétences en électronique, en informatique et en développement web.
            </p>
            <p>
              Mon parcours me permet de faire le lien entre deux mondes : celui de
              l&apos;énergie et des installations électriques, et celui du numérique.
              J&apos;aime concevoir des solutions concrètes, qu&apos;il s&apos;agisse d&apos;un
              tableau de distribution intelligent ou d&apos;une application web.
            </p>
            <p>
              Curieux de technologie et d&apos;innovation, je cherche à mettre mes
              compétences au service de projets qui allient énergie, technologie et
              numérique.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {domains.map((d) => (
              <li key={d.title} className="rounded-2xl border border-gray-200 p-5 transition hover:border-emerald-600 dark:border-gray-800">
                <h3 className="font-semibold text-emerald-700 dark:text-emerald-400">{d.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{d.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}