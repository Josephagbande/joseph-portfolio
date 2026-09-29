import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projets" className="flex min-h-screen items-center py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projets</h2>
        <div className="mt-2 h-1 w-16 rounded bg-emerald-600" />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-2xl border border-gray-200 transition duration-300 hover:-translate-y-1 hover:border-emerald-600 hover:shadow-lg dark:border-gray-800">
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>

              <div className="p-6">
                <span className="rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                  {project.category}
                </span>
                <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>

                {project.technologies.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li key={tech} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}

                {(project.liveUrl || project.githubUrl) && (
                  <div className="mt-5 flex gap-4 text-sm font-medium">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline dark:text-emerald-400">
                        Voir le site
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline dark:text-emerald-400">
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}