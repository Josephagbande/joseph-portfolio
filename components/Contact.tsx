"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useForm, ValidationError } from "@formspree/react";
import { contact } from "@/data/contact";

gsap.registerPlugin(ScrollTrigger);

const inputClass =
  "mt-1 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/30 dark:border-gray-700";

export default function Contact() {
  const rootRef = useRef<HTMLElement>(null);
  const [state, handleSubmit] = useForm("maenaewj");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-anim", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 75%",
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={rootRef} className="flex min-h-screen items-center py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-2">
        <div className="contact-anim">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Construisons quelque chose ensemble.
          </h2>
          <div className="mt-2 h-1 w-16 rounded bg-emerald-600" />
          <p className="mt-6 max-w-md text-lg text-gray-600 dark:text-gray-300">
            Vous avez un projet, une opportunité ou une idée à développer ? Échangeons.
          </p>

          <ul className="mt-8 space-y-3 text-gray-700 dark:text-gray-200">
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-emerald-600">
                Email : {contact.email}
              </a>
            </li>
            <li>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-emerald-600">
                Téléphone : {contact.phone}
              </a>
            </li>
            <li>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600">
                GitHub
              </a>
            </li>
            {contact.linkedin && (
              <li>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600">
                  LinkedIn
                </a>
              </li>
            )}
          </ul>
        </div>

        {state.succeeded ? (
          <div className="contact-anim flex items-center justify-center rounded-2xl border border-emerald-600/30 bg-emerald-600/5 p-8">
            <p className="text-center text-lg text-emerald-700 dark:text-emerald-400">
              Merci ! Votre message a bien été envoyé, je vous répondrai rapidement.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-anim space-y-5">
            <div className="hidden" aria-hidden="true">
              <label>
                Ne pas remplir
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <div>
              <label htmlFor="name" className="text-sm font-medium">Nom</label>
              <input id="name" name="name" type="text" required minLength={2} autoComplete="name" className={inputClass} />
              <ValidationError prefix="Nom" field="name" errors={state.errors} className="mt-1 text-sm text-red-600" />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-red-600" />
            </div>

            <div>
              <label htmlFor="subject" className="text-sm font-medium">Sujet</label>
              <input id="subject" name="subject" type="text" required minLength={3} className={inputClass} />
              <ValidationError prefix="Sujet" field="subject" errors={state.errors} className="mt-1 text-sm text-red-600" />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea id="message" name="message" rows={5} required minLength={10} className={inputClass} />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-sm text-red-600" />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="rounded-full bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-700 disabled:opacity-60"
            >
              {state.submitting ? "Envoi en cours..." : "Envoyer le message"}
            </button>

            <ValidationError errors={state.errors} className="text-sm text-red-600" />
          </form>
        )}
      </div>
    </section>
  );
}