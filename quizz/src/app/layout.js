// ==============================================================================
// FICHIER : src/app/layout.js
// RÔLE : "Root Layout" (mise en page racine) de l'application Next.js.
// Dans Next.js (App Router), ce fichier enveloppe TOUTES les pages du site.
// C'est ici que l'on définit la structure HTML de base (<html>, <body>),
// les polices de caractères globales et les styles CSS généraux.
// ==============================================================================

// Import de la police optimisée "Inter" fournie par Next.js
import { Inter } from "next/font/google";

// Import des styles globaux (Tailwind CSS) et des animations Animate.css
import "./globals.css";
import "animate.css";

// Configuration de la police de caractères avec le sous-ensemble latin
const inter = Inter({ subsets: ["latin"] });

// Métadonnées du site : affichées dans l'onglet du navigateur et lues par les moteurs de recherche
export const metadata = {
  title: "Mon super quizz",
  description: "Un quizz pour parfaire ses connaissances en informatique",
};

/**
 * Composant RootLayout (composant racine).
 * En React / Next.js, un composant est une fonction JavaScript qui retourne du JSX (HTML enrichi).
 * 
 * @param {Object} props - Les propriétés passées au composant.
 * @param {React.ReactNode} props.children - 'children' représente la page active qui sera affichée à l'intérieur de ce layout.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      {/* On applique la classe CSS de la police Google à tout le corps de la page */}
      <body className={inter.className}>
        {/* Ici, Next.js injecte automatiquement le contenu de la page courante (ex: page.js) */}
        {children}
      </body>
    </html>
  );
}
