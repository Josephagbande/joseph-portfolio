import { contact } from "@/data/contact";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 py-10 dark:border-gray-800">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-semibold">Joseph Agbande</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Technicien en génie électrique &amp; énergie renouvelable | Développeur web
          </p>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          {contact.linkedin && (
            <li>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600">
                LinkedIn
              </a>
            </li>
          )}
          <li>
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600">
              GitHub
            </a>
          </li>
          <li>
            <a href={`mailto:${contact.email}`} className="hover:text-emerald-600">
              Email
            </a>
          </li>
        </ul>
      </div>

      <p className="mt-6 text-center text-xs text-gray-400 dark:text-gray-500">
        © {year} Joseph Agbande. Tous droits réservés.
      </p>
    </footer>
  );
}