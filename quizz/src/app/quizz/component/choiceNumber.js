// ==============================================================================
// FICHIER : src/app/quizz/component/choiceNumber.js
// RÔLE : Composant de configuration initiale.
// Il permet à l'utilisateur de choisir combien de questions il souhaite
// avant de lancer le quizz.
// ==============================================================================

/**
 * Composant ChoiceNumber
 * 
 * NOTION CLÉ : LES PROPS (Propriétés)
 * En React, les "props" permettent de transmettre des données et des fonctions
 * d'un composant parent (ici la page quizz) vers un composant enfant (ici ChoiceNumber).
 * La syntaxe { numberQuestions, ... } utilise la "déstructuration" d'objet JavaScript.
 *
 * @param {number} props.numberQuestions - La valeur actuelle du nombre de questions choisi.
 * @param {Function} props.setNumberQuestions - La fonction pour modifier cette valeur dans le composant parent.
 * @param {Function} props.onTrigger - La fonction à exécuter lorsque l'utilisateur clique sur "Démarrer".
 * @param {number} props.maxQuestions - Le nombre maximum de questions possibles (valeur par défaut : 15).
 */
export default function ChoiceNumber({
    numberQuestions,
    setNumberQuestions,
    onTrigger,
    maxQuestions = 15,
}) {
    // --------------------------------------------------------------------------
    // 1. GÉNÉRATION DES OPTIONS DU MENU DÉROULANT (<select>)
    // --------------------------------------------------------------------------
    // On crée un tableau vide, puis on le remplit avec une boucle for classique.
    const options = [];
    for (let i = 1; i <= maxQuestions; i++) {
        // En React, quand on génère une liste d'éléments, il faut TOUJOURS donner
        // un attribut unique "key" pour aider React à identifier chaque élément du DOM.
        options.push(
            <option key={i} value={i}>
                {i}
            </option>
        );
    }

    // --------------------------------------------------------------------------
    // 2. RENDU VISUEL (JSX) DU COMPOSANT
    // --------------------------------------------------------------------------
    return (
        <div className="animate__animated animate__zoomIn animate__faster flex flex-col items-center justify-center text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md w-full border border-gray-100 dark:border-gray-700">
            {/* Émoticône décorative */}
            <span className="text-4xl mb-3 block animate__animated animate__bounce animate__delay-1s">
                🎯
            </span>

            <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
                Configuration du Quizz
            </h2>

            {/* Label associé au champ select (via l'attribut htmlFor correspondant à l'id) */}
            <label htmlFor="quantity" className="text-gray-600 dark:text-gray-300 mb-2 text-sm sm:text-base">
                Choisissez le nombre de questions souhaité (max {maxQuestions}) :
            </label>

            {/*
              Menu déroulant (<select>)
              - 'value' : la valeur sélectionnée est pilotée par l'état React (Composant contrôlé).
              - 'onChange' : se déclenche quand l'utilisateur change la sélection.
                ATTENTION : e.target.value renvoie toujours du texte ("string").
                On utilise parseInt(..., 10) pour convertir la chaîne en nombre entier.
            */}
            <select
                id="quantity"
                name="quantity"
                value={numberQuestions}
                onChange={(e) => setNumberQuestions(parseInt(e.target.value, 10))}
                className="my-4 p-3 text-lg border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-blue-200 focus:border-blue-500 focus:outline-none w-36 text-center font-bold transition-all"
            >
                {/* On insère dynamiquement le tableau d'éléments <option> généré plus haut */}
                {options}
            </select>

            {/*
              Bouton d'action pour lancer le quizz.
              'onClick={onTrigger}' appelle la fonction passée par le parent (setNewQuizz).
            */}
            <button
                className="mt-4 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                onClick={onTrigger}
            >
                Démarrer le quizz !
            </button>
        </div>
    );
}