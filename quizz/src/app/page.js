// ==============================================================================
// FICHIER : src/app/page.js
// RÔLE : Page d'accueil de l'application (accessible à l'URL racine "/").
// En Next.js (App Router), chaque dossier contenant un fichier "page.js"
// devient automatiquement une route (une URL) du site web.
// ==============================================================================

// En React/Next.js, on importe le composant <Link> pour naviguer entre les pages.
// Contrairement à une balise standard HTML <a href="...">, <Link> permet de changer
// de page instantanément SANS recharger entièrement le navigateur (concept de SPA : Single Page Application).
import Link from "next/link";

/**
 * Composant fonctionnel représentant la page d'accueil (Home).
 * En JavaScript moderne et React :
 * - "export default" permet d'exporter ce composant pour que Next.js puisse l'afficher.
 * - Le composant renvoie du code "JSX" (mélange de JavaScript et d'HTML).
 */
export default function Home() {
  return (
    // <main> est une balise HTML sémantique représentant le contenu principal.
    // Les attributs "className" en React remplacent l'attribut HTML "class" (car 'class' est un mot-clé réservé en JavaScript).
    // Les styles utilisés ici proviennent de Tailwind CSS (ex: 'flex', 'min-h-screen', 'items-center').
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center overflow-hidden">
      
      {/* Conteneur du titre avec des classes d'animation Animate.css */}
      <div className="animate__animated animate__fadeInDown max-w-lg">
        {/* Icône fusée avec animation de rebond */}
        <span className="text-5xl mb-4 block animate__animated animate__bounce animate__delay-1s">
          🚀
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
          Bienvenue sur mon Super Quizz !
        </h1>
      </div>

      {/* Description de présentation du quizz */}
      <p className="animate__animated animate__fadeIn animate__delay-1s text-lg text-gray-600 dark:text-gray-300 max-w-md mt-2">
        Ce quiz a été créé afin de tester vos connaissances en informatique.
      </p>

      {/* Bouton de lien vers la page du quizz (/quizz).
          En cliquant ici, Next.js chargera le fichier 'src/app/quizz/page.js' */}
      <Link
        href="/quizz"
        className="animate__animated animate__fadeInUp animate__delay-1s mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center gap-2"
      >
        <span>Démarrer le Quizz</span>
        <span>→</span>
      </Link>
    </main>
  );
}
