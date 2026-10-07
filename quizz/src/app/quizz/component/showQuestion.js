// ==============================================================================
// FICHIER : src/app/quizz/component/showQuestion.js
// RÔLE : Composant d'affichage d'une question.
// Il gère la sélection d'une option par l'utilisateur, la validation
// de la réponse et l'affichage des explications et corrections.
// ==============================================================================

import React, { useState } from "react";

/**
 * Composant ShowQuestion
 *
 * @param {Object} props.question - L'objet représentant la question (titre, choix, bonne réponse, etc.).
 * @param {number} props.questionNumber - Le numéro d'affichage de la question (ex: 1, 2, ...).
 * @param {number} props.totalQuestions - Le nombre total de questions du quizz.
 * @param {Object|null} props.savedAnswer - La réponse déjà enregistrée si l'utilisateur revient en arrière.
 * @param {Function} props.onAnswer - Fonction callback appelée lors de la validation pour informer le parent.
 * @param {boolean} props.readOnly - Affiche le corrigé sans permettre de modifier les réponses.
 */
export default function ShowQuestion({
    question,
    questionNumber,
    totalQuestions,
    savedAnswer = null,
    onAnswer,
    readOnly = false,
}) {
    // --------------------------------------------------------------------------
    // 1. ÉTATS LOCAUX DU COMPOSANT (useState)
    // --------------------------------------------------------------------------

    // Mémorise le texte de la réponse actuellement cochée par l'utilisateur.
    // Si la question a déjà été répondue auparavant, on reprend la réponse enregistrée.
    const [selectedAnswer, setSelectedAnswer] = useState(
        savedAnswer ? savedAnswer.answer : ""
    );

    // Mémorise si l'utilisateur a cliqué sur le bouton "Valider la réponse".
    // La syntaxe "!!savedAnswer" est une astuce JavaScript pour convertir une valeur en vrai booléen (true ou false).
    const [isSubmitted, setIsSubmitted] = useState(!!savedAnswer);
    const showCorrection = readOnly || isSubmitted;
    const isUnanswered = readOnly && !savedAnswer;

    // --------------------------------------------------------------------------
    // 2. VARIABLES DÉRIVÉES ET FONCTIONS
    // --------------------------------------------------------------------------

    // Détermine si la réponse donnée est la bonne :
    // - Si déjà sauvegardée : on lit directement le résultat enregistré.
    // - Sinon : on compare la réponse sélectionnée avec le champ 'correct' de la question.
    const isCorrect = savedAnswer
        ? savedAnswer.isCorrect
        : selectedAnswer === question.correct;

    /**
     * Fonction exécutée au clic sur "Valider la réponse".
     */
    const handleValidate = () => {
        // Sécurité : si aucune réponse n'est cochée, on ne fait rien.
        if (readOnly || isSubmitted || !selectedAnswer) return;

        const correct = selectedAnswer === question.correct;

        // On passe le statut du composant à "soumis" pour afficher le résultat
        setIsSubmitted(true);

        // On communique la réponse et sa validité au composant parent (page.js)
        if (onAnswer) {
            onAnswer(selectedAnswer, correct);
        }
    };

    // --------------------------------------------------------------------------
    // 3. RENDU VISUEL (JSX)
    // --------------------------------------------------------------------------
    return (
        <section className="animate__animated animate__fadeIn animate__faster w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col items-center border border-gray-100 dark:border-gray-700">
            {/* Barre d'information en haut de la carte : progression */}
            <div className="w-full flex justify-between items-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                <span>Question {questionNumber} sur {totalQuestions}</span>
            </div>

            {/* Énoncé de la question */}
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
                {question.question}
            </h2>

            {/*
              LISTE DES CHOIX DE RÉPONSE
              En JavaScript, la méthode .map() permet de parcourir un tableau d'éléments (ici question.answers)
              et de transformer chaque élément en code JSX (ici une balise <label> avec son bouton radio).
            */}
            <div className="w-full flex flex-col gap-3 mb-6">
                {question.answers.map((answer, index) => {
                    // Identifiant unique pour relier le label à son input radio
                    const inputId = `answer-${questionNumber}-${index}`;

                    // GESTION DYNAMIQUE DU STYLE :
                    // On modifie l'apparence des boutons en fonction de l'état (normal, sélectionné, correct, incorrect).
                    let optionStyle = "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:border-gray-300";

                    if (showCorrection) {
                        if (answer === question.correct) {
                            // C'est la bonne réponse : style vert !
                            optionStyle = "bg-green-50 dark:bg-green-950/40 border-green-500 text-green-900 dark:text-green-300 font-semibold shadow-sm";
                        } else if (answer === selectedAnswer && !isCorrect) {
                            // C'est la mauvaise réponse choisie par l'utilisateur : style rouge !
                            optionStyle = "bg-red-50 dark:bg-red-950/40 border-red-500 text-red-900 dark:text-red-300 shadow-sm";
                        } else {
                            // Autres réponses non choisies : grisées
                            optionStyle = `${readOnly ? "" : "opacity-50"} border-gray-200 dark:border-gray-700`;
                        }
                    } else if (selectedAnswer === answer) {
                        // Réponse sélectionnée avant validation : style bleu
                        optionStyle = "bg-blue-50 dark:bg-blue-950/40 border-blue-500 text-blue-900 dark:text-blue-300 font-semibold shadow-sm";
                    }

                    return (
                        <label
                            key={index}
                            htmlFor={inputId}
                            className={`flex items-center p-4 border-2 rounded-xl ${showCorrection ? "cursor-default" : "cursor-pointer"} transition-all duration-200 ${optionStyle}`}
                        >
                            {/*
                              Champ de type "radio" :
                              - Tous les boutons d'une même question partagent le même 'name' pour être exclusifs.
                              - 'disabled={isSubmitted}' empêche de changer d'avis après validation.
                              - 'onChange' met à jour l'état selectedAnswer.
                            */}
                            <input
                                id={inputId}
                                type="radio"
                                name={`question-${questionNumber}`}
                                value={answer}
                                checked={selectedAnswer === answer}
                                disabled={showCorrection}
                                onChange={() => setSelectedAnswer(answer)}
                                className="w-4 h-4 shrink-0 text-blue-600 focus:ring-blue-500 disabled:cursor-default"
                            />
                            <span className="ml-3 min-w-0 break-words text-base text-gray-800 dark:text-gray-200">
                                {answer}
                                {readOnly && (answer === selectedAnswer || answer === question.correct) && (
                                    <span className="block mt-1 text-sm font-semibold">
                                        {answer === selectedAnswer && "Votre réponse"}
                                        {answer === selectedAnswer && answer === question.correct && " · "}
                                        {answer === question.correct && "Bonne réponse"}
                                    </span>
                                )}
                            </span>
                        </label>
                    );
                })}
            </div>

            {/*
              BLOC DU BAS : RENDU CONDITIONNEL
              - Si la réponse a été validée (isSubmitted === true) : on affiche le message de correction et explications.
              - Sinon : on affiche le bouton "Valider la réponse".
            */}
            {showCorrection ? (
                <div
                    className={`animate__animated ${
                        isCorrect ? "animate__bounceIn" : "animate__headShake"
                    } w-full p-5 rounded-xl border-2 mb-2 ${
                        isUnanswered
                            ? "bg-gray-50 border-gray-300 text-gray-900 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200"
                            : isCorrect
                            ? "bg-green-50 border-green-400 text-green-900 dark:bg-green-950/40 dark:border-green-800 dark:text-green-200"
                            : "bg-red-50 border-red-400 text-red-900 dark:bg-red-950/40 dark:border-red-800 dark:text-red-200"
                    }`}
                >
                    <p className="font-bold text-lg mb-1 flex items-center gap-2">
                        <span>{isUnanswered ? "Question sans réponse" : isCorrect ? "🎉 Bonne réponse !" : "❌ Mauvaise réponse !"}</span>
                    </p>

                    {/* Si l'utilisateur a fait une erreur, on lui rappelle quelle était la bonne réponse */}
                    {!isCorrect && (
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            La bonne réponse était : <span className="underline font-bold text-green-700 dark:text-green-400">{question.correct}</span>
                        </p>
                    )}

                    {/* Explications supplémentaires (si présentes dans les données) */}
                    {question.moreInfo && (
                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                            {question.moreInfo}
                        </p>
                    )}

                    {/* Lien web pour aller plus loin (si présent) */}
                    {question.lien && (
                        <a
                            href={question.lien}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 mt-3 text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            <span>En savoir plus</span>
                            <span>↗</span>
                        </a>
                    )}
                </div>
            ) : (
                <button
                    onClick={handleValidate}
                    disabled={!selectedAnswer}
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-95"
                >
                    Valider la réponse
                </button>
            )}
        </section>
    );
}
