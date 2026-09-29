import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://josephagbande.com"),
  title: "Joseph Agbande | Génie électrique & Développement Web",
  description:
    "Portfolio de Joseph Agbande, technicien supérieur en génie électrique et énergie renouvelable, avec des compétences en développement web.",
  keywords: [
    "Joseph Agbande",
    "développeur web",
    "génie électrique",
    "énergie renouvelable",
    "développeur full stack",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Joseph Agbande" }],
  openGraph: {
    title: "Joseph Agbande | Génie électrique & Développement Web",
    description:
      "Portfolio de Joseph Agbande, technicien supérieur en génie électrique et énergie renouvelable, avec des compétences en développement web.",
    url: "https://josephagbande.com",
    siteName: "Joseph Agbande",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem("theme");
                const dark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
                if (dark) document.documentElement.classList.add("dark");
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}