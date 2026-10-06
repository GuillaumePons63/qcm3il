// ==============================================================================
// FICHIER : src/app/quizz/component/questions/general.js
// RÔLE : Banque de questions pour le quizz (200 questions - Programmation Web Année 3).
//
// CONCEPTS CLÉS POUR DÉBUTANTS :
// 1. Tableaux (Arrays) : Représentés par des crochets [ ... ], ils contiennent
//    une liste ordonnée d'éléments.
// 2. Objets (Objects) : Représentés par des accolades { clé: valeur }, ils permettent
//    de structurer des données complexes (ici une question avec ses choix et sa réponse).
// 3. Export nommé : "export const questions" permet d'importer cette constante
//    dans un autre fichier via la syntaxe { questions } from "...".
// ==============================================================================

export const questions = [
    {
        "question": "Quel outil permet principalement d’inspecter le DOM et les requêtes réseau dans Chrome ?",
        "answers": [
            "Docker Compose",
            "Le gestionnaire de paquets npm",
            "SQLite Browser",
            "L’onglet Elements et l’onglet Network"
        ],
        "correct": "L’onglet Elements et l’onglet Network"
    },
    {
        "question": "Quelle commande initialise un dépôt Git dans un dossier ?",
        "answers": [
            "git create",
            "git start",
            "npm git",
            "git init"
        ],
        "correct": "git init"
    },
    {
        "question": "Quel est le rôle de npm dans le projet ?",
        "answers": [
            "Remplacer Git",
            "Compiler le noyau Linux",
            "Créer les tables SQLite",
            "Gérer les paquets et scripts JavaScript"
        ],
        "correct": "Gérer les paquets et scripts JavaScript"
    },
    {
        "question": "Dans VS Code, le terminal intégré sert principalement à…",
        "answers": [
            "Remplacer le navigateur",
            "Auditer uniquement l’accessibilité",
            "Lancer des commandes sans quitter l’éditeur",
            "Modifier directement le BIOS"
        ],
        "correct": "Lancer des commandes sans quitter l’éditeur"
    },
    {
        "question": "Quelle pratique rend un projet reproductible ?",
        "answers": [
            "Supprimer package-lock.json",
            "Utiliser des chemins absolus locaux",
            "Partager uniquement des captures d’écran",
            "Documenter l’installation dans README et verrouiller les dépendances"
        ],
        "correct": "Documenter l’installation dans README et verrouiller les dépendances"
    },
    {
        "question": "À quoi sert Chrome DevTools, onglet Console ?",
        "answers": [
            "Afficher les logs et erreurs JavaScript",
            "Modifier le DNS",
            "Conteneuriser Node",
            "Créer une base relationnelle"
        ],
        "correct": "Afficher les logs et erreurs JavaScript"
    },
    {
        "question": "Quel fichier décrit habituellement les scripts et dépendances npm ?",
        "answers": [
            "index.html",
            "package.json",
            "schema.sql",
            "docker-compose.yml"
        ],
        "correct": "package.json"
    },
    {
        "question": "L’audit Lighthouse fournit notamment…",
        "answers": [
            "Des mesures et recommandations de qualité web",
            "Des composants React",
            "Des migrations SQL automatiques",
            "Des clés secrètes"
        ],
        "correct": "Des mesures et recommandations de qualité web"
    },
    {
        "question": "Quel est l’intérêt d’un commit atomique ?",
        "answers": [
            "Éviter les tests",
            "Regrouper des changements sans lien",
            "Isoler une modification cohérente et traçable",
            "Supprimer tout historique"
        ],
        "correct": "Isoler une modification cohérente et traçable"
    },
    {
        "question": "Une IA agentique utilisée en développement doit être…",
        "answers": [
            "Contrôlée, testée et documentée",
            "Utilisée uniquement hors ligne",
            "Acceptée sans vérification",
            "Employée pour stocker les secrets"
        ],
        "correct": "Contrôlée, testée et documentée"
    },
    {
        "question": "Quelle commande installe les dépendances décrites par package-lock.json ?",
        "answers": [
            "docker pull",
            "node lock",
            "git fetch",
            "npm install"
        ],
        "correct": "npm install"
    },
    {
        "question": "Quelle information est particulièrement utile dans un README ?",
        "answers": [
            "Le mot de passe de production",
            "Une copie du navigateur",
            "Des données personnelles",
            "Les étapes d’installation et de lancement"
        ],
        "correct": "Les étapes d’installation et de lancement"
    },
    {
        "question": "Quel élément exprime le titre principal d’une page ?",
        "answers": [
            "<title> uniquement",
            "<strong>",
            "<header>",
            "<h1>"
        ],
        "correct": "<h1>"
    },
    {
        "question": "Quel élément est adapté à la navigation principale ?",
        "answers": [
            "<div>",
            "<nav>",
            "<meta>",
            "<b>"
        ],
        "correct": "<nav>"
    },
    {
        "question": "Pourquoi utiliser des éléments HTML sémantiques ?",
        "answers": [
            "Pour désactiver CSS",
            "Pour donner du sens à la structure et aider les technologies d’assistance",
            "Pour remplacer JavaScript",
            "Pour accélérer SQLite"
        ],
        "correct": "Pour donner du sens à la structure et aider les technologies d’assistance"
    },
    {
        "question": "Quel attribut fournit un texte alternatif à une image informative ?",
        "answers": [
            "srcset",
            "caption",
            "roleonly",
            "alt"
        ],
        "correct": "alt"
    },
    {
        "question": "Pour une image purement décorative, l’attribut alt devrait être…",
        "answers": [
            "alt=\"\"",
            "Absent",
            "Une longue description obligatoire",
            "Le nom du fichier"
        ],
        "correct": "alt=\"\""
    },
    {
        "question": "Quel élément associe correctement un intitulé à un champ ?",
        "answers": [
            "<caption>",
            "<label for=\"email\">",
            "<title>",
            "<legend id=\"email\"> seul"
        ],
        "correct": "<label for=\"email\">"
    },
    {
        "question": "Dans un formulaire, quel type convient à une adresse électronique ?",
        "answers": [
            "email",
            "address-only",
            "text-email",
            "mailbox"
        ],
        "correct": "email"
    },
    {
        "question": "Quel attribut rend un champ obligatoire côté navigateur ?",
        "answers": [
            "must",
            "needed",
            "required",
            "mandatory"
        ],
        "correct": "required"
    },
    {
        "question": "Quel attribut indique une aide attendue dans un champ ?",
        "answers": [
            "helptext",
            "placeholder",
            "aria-help",
            "hintonly"
        ],
        "correct": "placeholder"
    },
    {
        "question": "Quel principe clavier faut-il vérifier lors d’un audit ?",
        "answers": [
            "Seule la souris est supportée",
            "La touche Tab est désactivée",
            "Les formulaires sont cachés",
            "Tous les contrôles sont atteignables et utilisables au clavier"
        ],
        "correct": "Tous les contrôles sont atteignables et utilisables au clavier"
    },
    {
        "question": "Quel élément représente une liste non ordonnée ?",
        "answers": [
            "<items>",
            "<list>",
            "<ul>",
            "<ol>"
        ],
        "correct": "<ul>"
    },
    {
        "question": "Quel élément représente une liste ordonnée ?",
        "answers": [
            "<ul>",
            "<steps>",
            "<order>",
            "<ol>"
        ],
        "correct": "<ol>"
    },
    {
        "question": "À quoi sert l’attribut lang sur html ?",
        "answers": [
            "Définir le port",
            "Charger CSS",
            "Créer une route",
            "Indiquer la langue principale du document"
        ],
        "correct": "Indiquer la langue principale du document"
    },
    {
        "question": "Quelle balise contient normalement les métadonnées du document ?",
        "answers": [
            "<aside>",
            "<head>",
            "<footer>",
            "<main>"
        ],
        "correct": "<head>"
    },
    {
        "question": "Quel élément doit être unique et central dans une page ?",
        "answers": [
            "<br>",
            "<i>",
            "<main>",
            "<span>"
        ],
        "correct": "<main>"
    },
    {
        "question": "Pourquoi éviter de simuler un bouton avec un div cliquable ?",
        "answers": [
            "Le bouton natif gère mieux sémantique, clavier et état",
            "div crée une base",
            "div interdit tout CSS",
            "button ne peut pas recevoir d’événement"
        ],
        "correct": "Le bouton natif gère mieux sémantique, clavier et état"
    },
    {
        "question": "Quel attribut associe un champ à un message d’erreur accessible ?",
        "answers": [
            "aria-hidden=\"true\"",
            "error-for",
            "aria-describedby",
            "described-by-css"
        ],
        "correct": "aria-describedby"
    },
    {
        "question": "Quel élément décrit un tableau de données ?",
        "answers": [
            "<legend>",
            "<label>",
            "<caption>",
            "<summary> obligatoire"
        ],
        "correct": "<caption>"
    },
    {
        "question": "Pour une cellule d’en-tête de tableau, on utilise…",
        "answers": [
            "<th>",
            "<head>",
            "<header-cell>",
            "<tdh>"
        ],
        "correct": "<th>"
    },
    {
        "question": "Quel est l’objectif principal du SEO de base abordé dans le cours ?",
        "answers": [
            "Rendre le contenu compréhensible et indexable",
            "Encoder les mots de passe",
            "Cacher tout le texte",
            "Remplacer les tests"
        ],
        "correct": "Rendre le contenu compréhensible et indexable"
    },
    {
        "question": "Quel attribut permet de relier une image à une légende ?",
        "answers": [
            "img/legend",
            "media/caption-id",
            "picture/label",
            "figure/figcaption"
        ],
        "correct": "figure/figcaption"
    },
    {
        "question": "Quelle structure est la plus cohérente pour une page ?",
        "answers": [
            "footer, title, body",
            "div uniquement sans titres",
            "main, html, nav, head",
            "header, nav, main, footer"
        ],
        "correct": "header, nav, main, footer"
    },
    {
        "question": "Que doit faire une interface après une erreur de validation ?",
        "answers": [
            "Afficher uniquement une couleur",
            "Effacer silencieusement le formulaire",
            "Expliquer l’erreur près du champ et permettre la correction",
            "Bloquer le clavier"
        ],
        "correct": "Expliquer l’erreur près du champ et permettre la correction"
    },
    {
        "question": "Quel contraste doit être vérifié lors de l’audit ?",
        "answers": [
            "Texte et arrière-plan",
            "Version de Node",
            "Nom du fichier source",
            "Port réseau"
        ],
        "correct": "Texte et arrière-plan"
    },
    {
        "question": "Quel attribut peut donner un nom accessible à un bouton sans texte visible ?",
        "answers": [
            "label-hidden",
            "name-css",
            "aria-label",
            "alt obligatoire"
        ],
        "correct": "aria-label"
    },
    {
        "question": "Que signifie la cascade CSS ?",
        "answers": [
            "Les règles sont résolues selon origine, importance, spécificité et ordre",
            "Les sélecteurs deviennent du HTML",
            "Les styles sont exécutés côté serveur",
            "Les règles sont aléatoires"
        ],
        "correct": "Les règles sont résolues selon origine, importance, spécificité et ordre"
    },
    {
        "question": "Quel sélecteur cible tous les éléments de classe carte ?",
        "answers": [
            "#carte",
            "carte()",
            ".carte",
            "*carte"
        ],
        "correct": ".carte"
    },
    {
        "question": "Quel sélecteur cible l’élément dont id vaut app ?",
        "answers": [
            "id(app)",
            "#app",
            ".app",
            "app#"
        ],
        "correct": "#app"
    },
    {
        "question": "Dans le modèle de boîte, que contient le padding ?",
        "answers": [
            "La bordure uniquement",
            "Le texte uniquement",
            "L’espace entre contenu et bordure",
            "L’espace extérieur à la marge"
        ],
        "correct": "L’espace entre contenu et bordure"
    },
    {
        "question": "Que contient la marge (margin) ?",
        "answers": [
            "Le contenu HTML",
            "L’espace extérieur à la boîte",
            "La hauteur du texte",
            "La couleur de fond"
        ],
        "correct": "L’espace extérieur à la boîte"
    },
    {
        "question": "Quelle déclaration active Flexbox ?",
        "answers": [
            "flex:display",
            "display:flex",
            "position:flex",
            "layout:flex"
        ],
        "correct": "display:flex"
    },
    {
        "question": "Quelle propriété aligne les éléments sur l’axe principal en Flexbox ?",
        "answers": [
            "main-align",
            "align-items uniquement",
            "flex-axis",
            "justify-content"
        ],
        "correct": "justify-content"
    },
    {
        "question": "Quelle propriété aligne sur l’axe transversal en Flexbox ?",
        "answers": [
            "flex-cross",
            "align-items",
            "cross-content",
            "justify-items"
        ],
        "correct": "align-items"
    },
    {
        "question": "Quelle déclaration active CSS Grid ?",
        "answers": [
            "layout:grid",
            "grid:display",
            "position:grid",
            "display:grid"
        ],
        "correct": "display:grid"
    },
    {
        "question": "Quelle propriété définit des colonnes Grid ?",
        "answers": [
            "columns-grid",
            "grid-template-columns",
            "grid-columns-only",
            "template-columns-css"
        ],
        "correct": "grid-template-columns"
    },
    {
        "question": "Que signifie responsive ?",
        "answers": [
            "Le serveur change de base",
            "L’interface utilise uniquement JavaScript",
            "Le texte est toujours fixe",
            "L’interface s’adapte aux tailles et contextes d’écran"
        ],
        "correct": "L’interface s’adapte aux tailles et contextes d’écran"
    },
    {
        "question": "Quelle règle crée un point de rupture ?",
        "answers": [
            "@break 768",
            "media-width:768",
            "@media (max-width: 768px)",
            "@responsive"
        ],
        "correct": "@media (max-width: 768px)"
    },
    {
        "question": "Quelle unité dépend de la largeur du viewport ?",
        "answers": [
            "px fixe",
            "pt uniquement",
            "cm serveur",
            "vw"
        ],
        "correct": "vw"
    },
    {
        "question": "Quelle unité est relative à la taille de police racine ?",
        "answers": [
            "rootpx",
            "emroot",
            "rem",
            "rpx"
        ],
        "correct": "rem"
    },
    {
        "question": "Pourquoi privilégier une feuille CSS externe ?",
        "answers": [
            "Séparer présentation et structure et réutiliser les styles",
            "Remplacer HTML",
            "Empêcher tout responsive",
            "Stocker les données"
        ],
        "correct": "Séparer présentation et structure et réutiliser les styles"
    },
    {
        "question": "Quelle propriété modifie la couleur du texte ?",
        "answers": [
            "text-paint",
            "foreground-only",
            "color",
            "font-coloring"
        ],
        "correct": "color"
    },
    {
        "question": "Quelle propriété modifie la couleur de fond ?",
        "answers": [
            "background-color",
            "fill-text",
            "surface",
            "back-color-only"
        ],
        "correct": "background-color"
    },
    {
        "question": "À quoi sert box-sizing:border-box ?",
        "answers": [
            "Inclure padding et bordure dans largeur/hauteur déclarées",
            "Supprimer toutes les marges",
            "Activer Grid",
            "Cacher les débordements"
        ],
        "correct": "Inclure padding et bordure dans largeur/hauteur déclarées"
    },
    {
        "question": "Quelle approche est généralement mobile-first ?",
        "answers": [
            "Écrire les styles de base pour mobile puis enrichir via media queries",
            "Désactiver viewport",
            "Commencer par 4K et supprimer le mobile",
            "Utiliser uniquement des px"
        ],
        "correct": "Écrire les styles de base pour mobile puis enrichir via media queries"
    },
    {
        "question": "Quel sélecteur cible un descendant span dans .alerte ?",
        "answers": [
            ".alerte > uniquement",
            ".alerte+span",
            "span.alerte-descendant",
            ".alerte span"
        ],
        "correct": ".alerte span"
    },
    {
        "question": "Quelle propriété permet l’espacement entre lignes ?",
        "answers": [
            "leading-only",
            "line-height",
            "text-gap",
            "row-spacing-text"
        ],
        "correct": "line-height"
    },
    {
        "question": "Quelle propriété permet l’espacement entre éléments flex ou grid ?",
        "answers": [
            "space-items",
            "between",
            "element-gap-only",
            "gap"
        ],
        "correct": "gap"
    },
    {
        "question": "À quoi sert z-index ?",
        "answers": [
            "Contrôler l’ordre d’empilement des éléments positionnés",
            "Définir la taille du texte",
            "Créer une requête HTTP",
            "Changer la police"
        ],
        "correct": "Contrôler l’ordre d’empilement des éléments positionnés"
    },
    {
        "question": "Quelle règle évite qu’une image dépasse son conteneur ?",
        "answers": [
            "width:auto-only",
            "max-width:100%",
            "image-fit:never",
            "overflow:image"
        ],
        "correct": "max-width:100%"
    },
    {
        "question": "Quelle déclaration crée une variable réassignable avec portée de bloc ?",
        "answers": [
            "const",
            "mutable",
            "varblock",
            "let"
        ],
        "correct": "let"
    },
    {
        "question": "Quelle déclaration convient à une référence qui ne sera pas réassignée ?",
        "answers": [
            "static-js",
            "let-fixed",
            "final",
            "const"
        ],
        "correct": "const"
    },
    {
        "question": "Quel opérateur teste valeur et type ?",
        "answers": [
            "is",
            "==",
            "=",
            "==="
        ],
        "correct": "==="
    },
    {
        "question": "Quel mot-clé permet une branche conditionnelle ?",
        "answers": [
            "when-only",
            "case-if",
            "if",
            "condition"
        ],
        "correct": "if"
    },
    {
        "question": "Quelle boucle parcourt directement les valeurs d’un tableau ?",
        "answers": [
            "for...keys uniquement",
            "loop values",
            "each-of-only",
            "for...of"
        ],
        "correct": "for...of"
    },
    {
        "question": "Quelle méthode ajoute un élément à la fin d’un tableau ?",
        "answers": [
            "appendEnd",
            "insert-tail",
            "push",
            "addLast"
        ],
        "correct": "push"
    },
    {
        "question": "Quelle méthode transforme chaque élément d’un tableau ?",
        "answers": [
            "eachReturn",
            "transform-array-only",
            "map",
            "convertAll"
        ],
        "correct": "map"
    },
    {
        "question": "Quelle méthode conserve les éléments répondant à un prédicat ?",
        "answers": [
            "filter",
            "keepIfLoop",
            "selectOnly",
            "where-js"
        ],
        "correct": "filter"
    },
    {
        "question": "Comment accéder à une propriété nommée nom d’un objet utilisateur ?",
        "answers": [
            "utilisateur->nom",
            "nom.utilisateur",
            "utilisateur::nom",
            "utilisateur.nom"
        ],
        "correct": "utilisateur.nom"
    },
    {
        "question": "Quelle syntaxe définit une fonction fléchée ?",
        "answers": [
            "const f = () => {}",
            "arrow f := []",
            "function => f()",
            "f -> function"
        ],
        "correct": "const f = () => {}"
    },
    {
        "question": "Quel objet représente le document HTML chargé ?",
        "answers": [
            "domPage",
            "htmlDocumentOnly",
            "window.html",
            "document"
        ],
        "correct": "document"
    },
    {
        "question": "Quelle méthode sélectionne le premier élément correspondant à un sélecteur CSS ?",
        "answers": [
            "getCssOne",
            "findElementCssOnly",
            "querySelector",
            "selectFirstCss"
        ],
        "correct": "querySelector"
    },
    {
        "question": "Quelle méthode sélectionne tous les correspondants ?",
        "answers": [
            "selectEvery",
            "allQuery",
            "queryAllCssOnly",
            "querySelectorAll"
        ],
        "correct": "querySelectorAll"
    },
    {
        "question": "Quelle propriété modifie le texte sans interpréter HTML ?",
        "answers": [
            "htmlText",
            "textContent",
            "innerHTMLOnlySafe",
            "nodeValueHtml"
        ],
        "correct": "textContent"
    },
    {
        "question": "Pourquoi préférer textContent à innerHTML avec une entrée utilisateur ?",
        "answers": [
            "Pour accéder à SQLite",
            "Pour réduire le risque d’injection HTML/XSS",
            "Pour exécuter plus de scripts",
            "Pour créer une route"
        ],
        "correct": "Pour réduire le risque d’injection HTML/XSS"
    },
    {
        "question": "Quelle méthode attache un gestionnaire d’événement ?",
        "answers": [
            "onEventAttach",
            "event.connect",
            "addEventListener",
            "listenOnly"
        ],
        "correct": "addEventListener"
    },
    {
        "question": "Dans un gestionnaire de clic, que représente event.target ?",
        "answers": [
            "Le serveur distant",
            "L’élément à l’origine de l’événement",
            "Le formulaire racine toujours",
            "Le bouton précédent"
        ],
        "correct": "L’élément à l’origine de l’événement"
    },
    {
        "question": "Quelle méthode empêche l’action native d’un formulaire ?",
        "answers": [
            "form.cancelNative()",
            "event.preventDefault()",
            "preventSubmitOnly",
            "event.stopForm()"
        ],
        "correct": "event.preventDefault()"
    },
    {
        "question": "Quelle propriété récupère la valeur d’un input ?",
        "answers": [
            "input.contentValue",
            "input.data",
            "input.text",
            "input.value"
        ],
        "correct": "input.value"
    },
    {
        "question": "Pourquoi valider côté client ?",
        "answers": [
            "Désactiver HTTP",
            "Sécuriser définitivement la base",
            "Améliorer l’expérience et fournir un retour immédiat",
            "Remplacer toute validation serveur"
        ],
        "correct": "Améliorer l’expérience et fournir un retour immédiat"
    },
    {
        "question": "Quel événement est déclenché lors de la soumission d’un formulaire ?",
        "answers": [
            "posted",
            "formulate",
            "send-form",
            "submit"
        ],
        "correct": "submit"
    },
    {
        "question": "Quelle méthode crée un nouvel élément DOM ?",
        "answers": [
            "dom.create",
            "document.createElement",
            "document.newNode",
            "create.tag"
        ],
        "correct": "document.createElement"
    },
    {
        "question": "Quelle méthode ajoute un nœud à la fin d’un parent ?",
        "answers": [
            "addLastDom",
            "pushChild",
            "append",
            "insertEndNode"
        ],
        "correct": "append"
    },
    {
        "question": "Quel mécanisme permet de déléguer un clic au parent ?",
        "answers": [
            "Utiliser uniquement CSS",
            "Désactiver les enfants",
            "Écouter l’événement sur le parent et exploiter target/currentTarget",
            "Mettre tous les éléments en iframe"
        ],
        "correct": "Écouter l’événement sur le parent et exploiter target/currentTarget"
    },
    {
        "question": "Quelle valeur booléenne indique qu’un champ case est coché ?",
        "answers": [
            "selectedAlways",
            "isTickedOnly",
            "mark",
            "checked"
        ],
        "correct": "checked"
    },
    {
        "question": "Quel mot-clé quitte immédiatement une boucle ?",
        "answers": [
            "leave",
            "stop-for",
            "exitLoopOnly",
            "break"
        ],
        "correct": "break"
    },
    {
        "question": "Quel mot-clé saute à l’itération suivante ?",
        "answers": [
            "skip-to",
            "continue",
            "nextLoopOnly",
            "again"
        ],
        "correct": "continue"
    },
    {
        "question": "Quel est le résultat de typeof null en JavaScript ?",
        "answers": [
            "undefined",
            "\"object\"",
            "\"null\"",
            "\"empty\""
        ],
        "correct": "\"object\""
    },
    {
        "question": "Quelle portée possède une variable let déclarée dans un bloc ?",
        "answers": [
            "Tous les fichiers",
            "Le DOM uniquement",
            "Le bloc",
            "Tout le serveur"
        ],
        "correct": "Le bloc"
    },
    {
        "question": "Quelle pratique rend un gestionnaire de formulaire robuste ?",
        "answers": [
            "Insérer directement les valeurs en HTML",
            "Valider, afficher les erreurs et empêcher l’envoi invalide",
            "Ignorer les champs vides",
            "Masquer les erreurs"
        ],
        "correct": "Valider, afficher les erreurs et empêcher l’envoi invalide"
    },
    {
        "question": "Quel protocole est utilisé pour les échanges web décrits ?",
        "answers": [
            "SMTP",
            "FTP uniquement",
            "SSH",
            "HTTP"
        ],
        "correct": "HTTP"
    },
    {
        "question": "Quel verbe HTTP lit généralement une ressource ?",
        "answers": [
            "FETCHONLY",
            "GET",
            "SELECTHTTP",
            "READ"
        ],
        "correct": "GET"
    },
    {
        "question": "Quel verbe crée généralement une ressource ?",
        "answers": [
            "NEW",
            "ADDHTTP",
            "POST",
            "CREATE"
        ],
        "correct": "POST"
    },
    {
        "question": "Quel verbe remplace généralement une ressource ?",
        "answers": [
            "REPLACEONLY",
            "PUT",
            "SET",
            "UPDATEHTTP"
        ],
        "correct": "PUT"
    },
    {
        "question": "Quel verbe supprime une ressource ?",
        "answers": [
            "REMOVEHTTP",
            "DROPHTTP",
            "DELETE",
            "ERASE"
        ],
        "correct": "DELETE"
    },
    {
        "question": "Quel code signifie succès général ?",
        "answers": [
            "404",
            "200",
            "500",
            "301"
        ],
        "correct": "200"
    },
    {
        "question": "Quel code indique une création réussie ?",
        "answers": [
            "201",
            "202",
            "302",
            "204"
        ],
        "correct": "201"
    },
    {
        "question": "Quel code indique une requête invalide côté client ?",
        "answers": [
            "403",
            "401",
            "500",
            "400"
        ],
        "correct": "400"
    },
    {
        "question": "Quel code indique une ressource inexistante ?",
        "answers": [
            "400",
            "503",
            "404",
            "401"
        ],
        "correct": "404"
    },
    {
        "question": "Quel code indique une erreur serveur non détaillée ?",
        "answers": [
            "301",
            "204",
            "500",
            "404"
        ],
        "correct": "500"
    },
    {
        "question": "Quel format est couramment échangé par une API REST ?",
        "answers": [
            "BMP",
            "Binaire SQL",
            "DOCX uniquement",
            "JSON"
        ],
        "correct": "JSON"
    },
    {
        "question": "Quelle fonction transforme une réponse Fetch en JSON ?",
        "answers": [
            "JSON.response()",
            "fetch.parseJSON()",
            "response.json()",
            "response.toObject()"
        ],
        "correct": "response.json()"
    },
    {
        "question": "Fetch retourne initialement…",
        "answers": [
            "Un tableau synchrone",
            "Un serveur Express",
            "Une Promise",
            "Une réponse déjà parsée"
        ],
        "correct": "Une Promise"
    },
    {
        "question": "Quel mot-clé permet d’attendre une Promise dans une fonction async ?",
        "answers": [
            "pause",
            "waitfor",
            "defer",
            "await"
        ],
        "correct": "await"
    },
    {
        "question": "Quel objet permet de gérer l’échec d’une Promise ?",
        "answers": [
            "errorThen",
            "catch",
            "exceptPromise",
            "rejectOnly"
        ],
        "correct": "catch"
    },
    {
        "question": "Quelle en-tête indique un corps JSON ?",
        "answers": [
            "Content-Type: application/json",
            "JSON: true",
            "Accept-Body: JSON",
            "Body: json-only"
        ],
        "correct": "Content-Type: application/json"
    },
    {
        "question": "Que contient req.body dans Express après le parseur approprié ?",
        "answers": [
            "Les données du corps de la requête",
            "Le code HTTP",
            "La réponse SQLite",
            "Le fichier Docker"
        ],
        "correct": "Les données du corps de la requête"
    },
    {
        "question": "Que contient req.params pour /tasks/:id ?",
        "answers": [
            "Les en-têtes uniquement",
            "Le JSON de réponse",
            "La valeur de l’identifiant de chemin",
            "Les variables CSS"
        ],
        "correct": "La valeur de l’identifiant de chemin"
    },
    {
        "question": "Que contient req.query ?",
        "answers": [
            "Les logs Node",
            "Le corps POST uniquement",
            "Les routes montées",
            "Les paramètres de la chaîne de requête"
        ],
        "correct": "Les paramètres de la chaîne de requête"
    },
    {
        "question": "À quoi sert le middleware Express ?",
        "answers": [
            "Créer uniquement des tables",
            "Dessiner CSS",
            "Intercepter et traiter requête/réponse dans une chaîne",
            "Remplacer HTTP"
        ],
        "correct": "Intercepter et traiter requête/réponse dans une chaîne"
    },
    {
        "question": "Quel appel Express définit une route GET ?",
        "answers": [
            "server.readRoute",
            "app.get(\"/tasks\", handler)",
            "express.fetch(\"/tasks\")",
            "app.routeGetOnly"
        ],
        "correct": "app.get(\"/tasks\", handler)"
    },
    {
        "question": "Quel appel transmet au middleware suivant ?",
        "answers": [
            "continueRequest()",
            "next()",
            "forwardHTTP()",
            "passRoute()"
        ],
        "correct": "next()"
    },
    {
        "question": "Pourquoi gérer explicitement les erreurs dans une API ?",
        "answers": [
            "Éviter tout code HTTP",
            "Cacher les défauts",
            "Supprimer les tests",
            "Fournir des statuts et messages cohérents sans faire tomber le serveur"
        ],
        "correct": "Fournir des statuts et messages cohérents sans faire tomber le serveur"
    },
    {
        "question": "Node.js est principalement…",
        "answers": [
            "Un moteur SQL",
            "Un runtime JavaScript côté serveur",
            "Un navigateur graphique",
            "Un framework CSS"
        ],
        "correct": "Un runtime JavaScript côté serveur"
    },
    {
        "question": "Quelle API Node permet de créer un serveur HTTP natif ?",
        "answers": [
            "node:server-html",
            "node:css",
            "node:http",
            "http-dom"
        ],
        "correct": "node:http"
    },
    {
        "question": "Quel module permet d’importer avec require dans CommonJS ?",
        "answers": [
            "DOM parser",
            "module loader Node",
            "SQLite only",
            "CSS loader"
        ],
        "correct": "module loader Node"
    },
    {
        "question": "Pourquoi servir des fichiers statiques ?",
        "answers": [
            "Rendre HTML, CSS et JavaScript accessibles au client",
            "Créer seulement des tokens",
            "Remplacer les routes API",
            "Modifier le noyau"
        ],
        "correct": "Rendre HTML, CSS et JavaScript accessibles au client"
    },
    {
        "question": "Quelle distinction est correcte ?",
        "answers": [
            "Client : interface; serveur : logique/API; base : persistance",
            "Client : base; serveur : CSS; base : navigateur",
            "Tout s’exécute dans HTML",
            "API et base sont identiques"
        ],
        "correct": "Client : interface; serveur : logique/API; base : persistance"
    },
    {
        "question": "Une API REST bien conçue utilise principalement…",
        "answers": [
            "Des couleurs CSS",
            "Des mots de passe en URL",
            "Ressources, verbes HTTP et représentations",
            "Une seule route POST pour tout"
        ],
        "correct": "Ressources, verbes HTTP et représentations"
    },
    {
        "question": "Quelle vérification doit être faite côté serveur même si le client valide ?",
        "answers": [
            "La couleur du bouton uniquement",
            "La résolution écran",
            "Le zoom du navigateur",
            "La validation des entrées"
        ],
        "correct": "La validation des entrées"
    },
    {
        "question": "Pourquoi distinguer 401 et 403 ?",
        "answers": [
            "401 est succès; 403 création",
            "403 est une erreur SQL",
            "401 concerne l’authentification; 403 le refus d’accès",
            "Ils signifient toujours la même chose"
        ],
        "correct": "401 concerne l’authentification; 403 le refus d’accès"
    },
    {
        "question": "Quel code convient souvent à une suppression sans corps de réponse ?",
        "answers": [
            "201",
            "204",
            "302",
            "418"
        ],
        "correct": "204"
    },
    {
        "question": "Quel outil peut tester une API HTTP pendant le TP ?",
        "answers": [
            "Un lecteur PDF",
            "Un client HTTP",
            "Un compilateur CSS",
            "Un éditeur d’images"
        ],
        "correct": "Un client HTTP"
    },
    {
        "question": "Que doit faire le front pendant une requête distante ?",
        "answers": [
            "Ignorer la réponse",
            "Modifier directement SQLite",
            "Bloquer définitivement l’interface",
            "Afficher un état de chargement puis gérer succès et erreur"
        ],
        "correct": "Afficher un état de chargement puis gérer succès et erreur"
    },
    {
        "question": "Quelle propriété de réponse donne le code HTTP ?",
        "answers": [
            "response.httpOnly",
            "response.number",
            "response.codeText",
            "response.status"
        ],
        "correct": "response.status"
    },
    {
        "question": "Quelle méthode vérifie si une réponse Fetch est dans la famille succès ?",
        "answers": [
            "response.ok",
            "response.successOnly",
            "fetch.is200",
            "response.validHttp"
        ],
        "correct": "response.ok"
    },
    {
        "question": "Pourquoi ne pas confondre erreur réseau et statut HTTP 404 ?",
        "answers": [
            "Une réponse 404 est reçue; une erreur réseau peut empêcher toute réponse",
            "Fetch transforme 404 en 500 automatiquement",
            "404 est toujours une panne réseau",
            "Il n’existe aucune différence"
        ],
        "correct": "Une réponse 404 est reçue; une erreur réseau peut empêcher toute réponse"
    },
    {
        "question": "Quel risque présente le stockage d’un secret dans le code front ?",
        "answers": [
            "Il devient plus sécurisé",
            "Il est chiffré automatiquement",
            "Il crée une table",
            "Il est visible par les utilisateurs et ne doit pas être considéré secret"
        ],
        "correct": "Il est visible par les utilisateurs et ne doit pas être considéré secret"
    },
    {
        "question": "Quel enchaînement correspond au projet cible ?",
        "answers": [
            "Git → écran → SQL",
            "Docker → HTML → SMTP",
            "Front → API Express → SQLite",
            "SQLite → CSS → navigateur"
        ],
        "correct": "Front → API Express → SQLite"
    },
    {
        "question": "SQLite est…",
        "answers": [
            "Un protocole HTTP",
            "Un gestionnaire CSS",
            "Une base relationnelle embarquée",
            "Un framework front"
        ],
        "correct": "Une base relationnelle embarquée"
    },
    {
        "question": "Quel objet contient les lignes et colonnes ?",
        "answers": [
            "Une route",
            "Un middleware",
            "Un composant",
            "Une table"
        ],
        "correct": "Une table"
    },
    {
        "question": "Quel type identifie généralement une ligne de façon unique ?",
        "answers": [
            "Clé CSS",
            "Clé HTTP",
            "Clé Docker",
            "Clé primaire"
        ],
        "correct": "Clé primaire"
    },
    {
        "question": "Quel mot-clé crée une table ?",
        "answers": [
            "TABLE INIT",
            "CREATE TABLE",
            "NEW TABLE",
            "MAKE TABLE"
        ],
        "correct": "CREATE TABLE"
    },
    {
        "question": "Quel mot-clé lit des données ?",
        "answers": [
            "GET ROW",
            "FETCH SQL",
            "READ TABLE",
            "SELECT"
        ],
        "correct": "SELECT"
    },
    {
        "question": "Quel mot-clé ajoute une ligne ?",
        "answers": [
            "ADD ROW",
            "INSERT",
            "CREATE ROW",
            "PUSH SQL"
        ],
        "correct": "INSERT"
    },
    {
        "question": "Quel mot-clé modifie des lignes ?",
        "answers": [
            "ALTER ROW ONLY",
            "UPDATE",
            "EDIT TABLE",
            "CHANGE SQL"
        ],
        "correct": "UPDATE"
    },
    {
        "question": "Quel mot-clé supprime des lignes ?",
        "answers": [
            "DELETE",
            "ERASE SQL",
            "DROP DATA ONLY",
            "REMOVE ROW"
        ],
        "correct": "DELETE"
    },
    {
        "question": "Pourquoi utiliser WHERE dans UPDATE ou DELETE ?",
        "answers": [
            "Activer Docker",
            "Retourner JSON",
            "Limiter les lignes concernées",
            "Créer un index automatiquement"
        ],
        "correct": "Limiter les lignes concernées"
    },
    {
        "question": "Quel mécanisme évite l’injection SQL dans une valeur ?",
        "answers": [
            "Nom de table dynamique non contrôlé",
            "Concaténation de chaînes",
            "Requête paramétrée",
            "HTML échappé uniquement"
        ],
        "correct": "Requête paramétrée"
    },
    {
        "question": "Quel rôle a une clé étrangère ?",
        "answers": [
            "Créer un endpoint",
            "Chiffrer la base",
            "Référencer une clé d’une autre table",
            "Définir CSS"
        ],
        "correct": "Référencer une clé d’une autre table"
    },
    {
        "question": "Une contrainte NOT NULL signifie…",
        "answers": [
            "La valeur ne peut pas être absente",
            "La colonne est toujours numérique",
            "La ligne est supprimée",
            "Le champ est secret"
        ],
        "correct": "La valeur ne peut pas être absente"
    },
    {
        "question": "Une contrainte UNIQUE garantit…",
        "answers": [
            "Une API disponible",
            "L’absence de doublons dans une colonne ou combinaison",
            "La présence de texte",
            "Un conteneur lancé"
        ],
        "correct": "L’absence de doublons dans une colonne ou combinaison"
    },
    {
        "question": "Pourquoi documenter le schéma ?",
        "answers": [
            "Désactiver les relations",
            "Remplacer toutes les requêtes",
            "Cacher les contraintes",
            "Rendre les choix de données compréhensibles et vérifiables"
        ],
        "correct": "Rendre les choix de données compréhensibles et vérifiables"
    },
    {
        "question": "Quel avantage apporte la persistance ?",
        "answers": [
            "Les données survivent au redémarrage du serveur",
            "La base devient un navigateur",
            "Les tests sont inutiles",
            "Les données restent seulement en mémoire"
        ],
        "correct": "Les données survivent au redémarrage du serveur"
    },
    {
        "question": "Que devrait faire l’API avant un INSERT ?",
        "answers": [
            "Supprimer les contraintes",
            "Valider les données reçues",
            "Concaténer les entrées",
            "Faire confiance au navigateur"
        ],
        "correct": "Valider les données reçues"
    },
    {
        "question": "Dans une relation tâches-utilisateurs, une tâche peut référencer…",
        "answers": [
            "Une couleur CSS",
            "L’identifiant d’un utilisateur comme clé étrangère",
            "Un code 200",
            "Un port Docker"
        ],
        "correct": "L’identifiant d’un utilisateur comme clé étrangère"
    },
    {
        "question": "Quel danger présente DROP TABLE ?",
        "answers": [
            "Le démarrage d’Express",
            "La lecture seule",
            "La création d’un index",
            "La suppression de la structure et des données de la table"
        ],
        "correct": "La suppression de la structure et des données de la table"
    },
    {
        "question": "Quelle opération vérifie une API persistante ?",
        "answers": [
            "Modifier package.json",
            "Changer uniquement le logo",
            "Ouvrir DevTools sans requête",
            "Créer, lire, modifier puis supprimer une ressource"
        ],
        "correct": "Créer, lire, modifier puis supprimer une ressource"
    },
    {
        "question": "Pourquoi utiliser des transactions dans une opération multi-étapes ?",
        "answers": [
            "Créer des composants",
            "Accélérer CSS",
            "Garantir une unité cohérente de modifications",
            "Remplacer les clés"
        ],
        "correct": "Garantir une unité cohérente de modifications"
    },
    {
        "question": "Quel outil est cité pour prendre en main SQLite ?",
        "answers": [
            "Chrome Paint",
            "Node Designer",
            "DB Browser for SQLite",
            "Git Viewer"
        ],
        "correct": "DB Browser for SQLite"
    },
    {
        "question": "Quel résultat attend-on d’une requête SELECT ?",
        "answers": [
            "Un événement DOM",
            "Un ensemble de lignes correspondant aux critères",
            "Un fichier Docker",
            "Un code CSS"
        ],
        "correct": "Un ensemble de lignes correspondant aux critères"
    },
    {
        "question": "Que faut-il éviter dans une requête SQL construite avec une entrée utilisateur ?",
        "answers": [
            "La concaténation directe de la chaîne",
            "Les contraintes",
            "Les paramètres liés",
            "La validation"
        ],
        "correct": "La concaténation directe de la chaîne"
    },
    {
        "question": "Quelle couche doit gérer la conversion entre données HTTP et SQL ?",
        "answers": [
            "Le serveur/API",
            "Le CSS",
            "Le navigateur uniquement",
            "Le README"
        ],
        "correct": "Le serveur/API"
    },
    {
        "question": "Quel est l’intérêt principal d’un composant ?",
        "answers": [
            "Encapsuler une partie réutilisable de l’interface",
            "Remplacer la base",
            "Créer une requête SQL",
            "Désactiver les événements"
        ],
        "correct": "Encapsuler une partie réutilisable de l’interface"
    },
    {
        "question": "Que représente une propriété (props) ?",
        "answers": [
            "Un secret serveur",
            "Un code HTTP",
            "Des données reçues par un composant",
            "Une table SQLite"
        ],
        "correct": "Des données reçues par un composant"
    },
    {
        "question": "Que représente l’état (state) ?",
        "answers": [
            "Le fichier package-lock",
            "Des données internes susceptibles d’évoluer",
            "La largeur CSS",
            "Le schéma SQL"
        ],
        "correct": "Des données internes susceptibles d’évoluer"
    },
    {
        "question": "Pourquoi ne pas modifier directement des props ?",
        "answers": [
            "Elles contiennent toujours des secrets",
            "Elles sont du CSS",
            "Elles sont contrôlées par le parent et doivent rester prévisibles",
            "Le navigateur l’interdit toujours"
        ],
        "correct": "Elles sont contrôlées par le parent et doivent rester prévisibles"
    },
    {
        "question": "Quel outil est cité pour initialiser un projet Vue ou React ?",
        "answers": [
            "SQLite",
            "Vite",
            "Nginx uniquement",
            "Lighthouse"
        ],
        "correct": "Vite"
    },
    {
        "question": "Quel événement doit être transmis à un composant pour signaler une action ?",
        "answers": [
            "Un gestionnaire/callback ou mécanisme d’événement",
            "Une media query",
            "Un port HTTP",
            "Une clé SQL"
        ],
        "correct": "Un gestionnaire/callback ou mécanisme d’événement"
    },
    {
        "question": "Pourquoi découper une liste en composants ?",
        "answers": [
            "Réduire la complexité et favoriser la réutilisation",
            "Éviter toute donnée",
            "Rendre le HTML invalide",
            "Supprimer l’API"
        ],
        "correct": "Réduire la complexité et favoriser la réutilisation"
    },
    {
        "question": "Un composant de formulaire doit notamment gérer…",
        "answers": [
            "Valeurs, soumission, chargement et erreurs",
            "Le réseau Docker",
            "Uniquement la couleur",
            "Les migrations SQL directement"
        ],
        "correct": "Valeurs, soumission, chargement et erreurs"
    },
    {
        "question": "Quelle pratique évite des mises à jour instables d’une liste ?",
        "answers": [
            "Fournir une clé stable à chaque élément",
            "Supprimer les items",
            "Créer un id aléatoire à chaque rendu",
            "Utiliser uniquement index malgré réordonnancement"
        ],
        "correct": "Fournir une clé stable à chaque élément"
    },
    {
        "question": "Dans un front connecté à l’API, quel état est utile ?",
        "answers": [
            "Port et mot de passe",
            "Seulement couleur",
            "Chargement, données et erreur",
            "Uniquement données"
        ],
        "correct": "Chargement, données et erreur"
    },
    {
        "question": "Que vérifie un test unitaire ?",
        "answers": [
            "Le débit réseau mondial",
            "Le déploiement Docker entier uniquement",
            "Une petite unité isolée selon un comportement attendu",
            "La couleur d’un écran réel"
        ],
        "correct": "Une petite unité isolée selon un comportement attendu"
    },
    {
        "question": "Que vérifie un test d’API ?",
        "answers": [
            "Les routes, statuts et contenus selon des scénarios",
            "Le nom du dépôt",
            "Uniquement la syntaxe CSS",
            "Le clavier physique"
        ],
        "correct": "Les routes, statuts et contenus selon des scénarios"
    },
    {
        "question": "Pourquoi automatiser des scénarios critiques ?",
        "answers": [
            "Détecter les régressions de manière reproductible",
            "Supprimer la documentation",
            "Éviter les erreurs de conception par magie",
            "Remplacer toute validation humaine"
        ],
        "correct": "Détecter les régressions de manière reproductible"
    },
    {
        "question": "À quoi sert un linter ?",
        "answers": [
            "Servir des images",
            "Créer la base",
            "Signaler des problèmes de style ou de qualité dans le code",
            "Chiffrer HTTPS"
        ],
        "correct": "Signaler des problèmes de style ou de qualité dans le code"
    },
    {
        "question": "Que signifie une régression ?",
        "answers": [
            "Une nouvelle table créée",
            "Une amélioration visuelle",
            "Une fonctionnalité auparavant correcte devient défaillante",
            "Un succès HTTP"
        ],
        "correct": "Une fonctionnalité auparavant correcte devient défaillante"
    },
    {
        "question": "Un audit Lighthouse doit être suivi de…",
        "answers": [
            "Corrections puis nouvelle mesure",
            "La mise en production immédiate",
            "L’ignorance des résultats",
            "La suppression du projet"
        ],
        "correct": "Corrections puis nouvelle mesure"
    },
    {
        "question": "Quel livrable est attendu pour l’audit accessibilité ?",
        "answers": [
            "Une image Docker seule",
            "Une capture sans analyse",
            "Une grille d’audit avec corrections tracées",
            "Un fichier SQL secret"
        ],
        "correct": "Une grille d’audit avec corrections tracées"
    },
    {
        "question": "Pourquoi tester les erreurs et pas seulement le cas nominal ?",
        "answers": [
            "Les tests ralentissent toujours le serveur",
            "Les erreurs sont des comportements utilisateurs réels",
            "Le HTTP ne renvoie pas d’erreur",
            "Les erreurs n’arrivent jamais"
        ],
        "correct": "Les erreurs sont des comportements utilisateurs réels"
    },
    {
        "question": "Que signifie lint dans un pipeline de qualité ?",
        "answers": [
            "Analyse statique respectant des règles de code",
            "Création de tables",
            "Navigation clavier",
            "Compression des images"
        ],
        "correct": "Analyse statique respectant des règles de code"
    },
    {
        "question": "Quelle preuve rend un audit crédible ?",
        "answers": [
            "Une affirmation sans mesure",
            "Un mot de passe",
            "Constat, correction et résultat vérifié",
            "Une page vide"
        ],
        "correct": "Constat, correction et résultat vérifié"
    },
    {
        "question": "Pourquoi valider les entrées côté serveur ?",
        "answers": [
            "CSS filtre SQL",
            "Le navigateur est toujours fiable",
            "Le client peut être contourné",
            "Docker valide les utilisateurs"
        ],
        "correct": "Le client peut être contourné"
    },
    {
        "question": "Qu’est-ce qu’une injection SQL ?",
        "answers": [
            "Une erreur de DOM",
            "Insérer du SQL via une entrée interprétée comme code",
            "Une règle responsive",
            "Un composant"
        ],
        "correct": "Insérer du SQL via une entrée interprétée comme code"
    },
    {
        "question": "Quelle défense est adaptée contre l’injection SQL ?",
        "answers": [
            "Afficher la requête au client",
            "Désactiver les contraintes",
            "Concaténation directe",
            "Requêtes paramétrées"
        ],
        "correct": "Requêtes paramétrées"
    },
    {
        "question": "Qu’est-ce qu’une XSS ?",
        "answers": [
            "Une erreur réseau",
            "L’exécution de script injecté dans le contexte d’une page",
            "Une requête SQLite sûre",
            "Un conteneur"
        ],
        "correct": "L’exécution de script injecté dans le contexte d’une page"
    },
    {
        "question": "Quelle pratique réduit une XSS lors de l’affichage de texte utilisateur ?",
        "answers": [
            "Mettre la valeur dans un script",
            "Utiliser innerHTML sans contrôle",
            "Désactiver HTTPS",
            "Insérer du texte via textContent et échapper selon le contexte"
        ],
        "correct": "Insérer du texte via textContent et échapper selon le contexte"
    },
    {
        "question": "Où stocker un secret serveur ?",
        "answers": [
            "Dans le dépôt Git",
            "Dans une URL visible",
            "Dans une variable d’environnement ou un gestionnaire de secrets",
            "Dans le HTML public"
        ],
        "correct": "Dans une variable d’environnement ou un gestionnaire de secrets"
    },
    {
        "question": "Pourquoi protéger les dépendances ?",
        "answers": [
            "Elles empêchent Git",
            "Elles changent le HTML sémantique",
            "Une dépendance vulnérable peut compromettre l’application",
            "Elles remplacent les tests"
        ],
        "correct": "Une dépendance vulnérable peut compromettre l’application"
    },
    {
        "question": "À quoi sert HTTPS ?",
        "answers": [
            "Chiffrer et authentifier la communication via TLS",
            "Faire du responsive",
            "Créer un tableau SQL",
            "Remplacer les cookies"
        ],
        "correct": "Chiffrer et authentifier la communication via TLS"
    },
    {
        "question": "Quel principe s’applique aux messages d’erreur en production ?",
        "answers": [
            "Ne pas divulguer inutilement des détails sensibles",
            "Retourner toute la stack au client",
            "Afficher le mot de passe SQL",
            "Ignorer toutes les erreurs"
        ],
        "correct": "Ne pas divulguer inutilement des détails sensibles"
    },
    {
        "question": "Pourquoi limiter les permissions d’un compte base ?",
        "answers": [
            "Réduire l’impact d’une compromission",
            "Créer plus de routes",
            "Rendre les secrets publics",
            "Accélérer les media queries"
        ],
        "correct": "Réduire l’impact d’une compromission"
    },
    {
        "question": "Quel risque pose une donnée non échappée dans un attribut HTML ?",
        "answers": [
            "Une injection dans le contexte de l’attribut",
            "Une meilleure accessibilité automatique",
            "Une transaction SQLite",
            "Un test unitaire"
        ],
        "correct": "Une injection dans le contexte de l’attribut"
    },
    {
        "question": "Une dépendance doit être mise à jour…",
        "answers": [
            "Sans lire les changements en production",
            "En supprimant package-lock",
            "Uniquement après une attaque",
            "Selon une politique contrôlée avec tests et vérification de compatibilité"
        ],
        "correct": "Selon une politique contrôlée avec tests et vérification de compatibilité"
    },
    {
        "question": "Quel est le rôle de Docker dans le parcours ?",
        "answers": [
            "Remplacer HTML",
            "Reproduire l’environnement d’exécution",
            "Écrire les tests automatiquement",
            "Créer les composants"
        ],
        "correct": "Reproduire l’environnement d’exécution"
    },
    {
        "question": "Docker Compose sert à…",
        "answers": [
            "Éditer une feuille CSS",
            "Interroger le DOM",
            "Remplacer Git",
            "Orchestrer plusieurs services configurés ensemble"
        ],
        "correct": "Orchestrer plusieurs services configurés ensemble"
    },
    {
        "question": "Quel fichier décrit généralement des services Compose ?",
        "answers": [
            "docker-compose.yml",
            "compose.html",
            "services.sql",
            "Docker.lock.js"
        ],
        "correct": "docker-compose.yml"
    },
    {
        "question": "Pourquoi utiliser un volume pour SQLite en conteneur ?",
        "answers": [
            "Remplacer Express",
            "Augmenter le contraste",
            "Rendre le SQL public",
            "Conserver le fichier de base au-delà du cycle du conteneur"
        ],
        "correct": "Conserver le fichier de base au-delà du cycle du conteneur"
    },
    {
        "question": "Quelle propriété rend une construction plus reproductible ?",
        "answers": [
            "Des chemins personnels",
            "Un mot de passe dans l’image",
            "Une image de base versionnée et une configuration explicite",
            "latest partout sans test"
        ],
        "correct": "Une image de base versionnée et une configuration explicite"
    },
    {
        "question": "Quelle séquence correspond à une recette finale ?",
        "answers": [
            "Supprimer le README",
            "Installer, lancer, tester les scénarios critiques et vérifier les résultats",
            "Modifier au hasard en production",
            "Ignorer les erreurs"
        ],
        "correct": "Installer, lancer, tester les scénarios critiques et vérifier les résultats"
    },
    {
        "question": "Pourquoi le Dockerfile ne doit-il pas contenir de secrets ?",
        "answers": [
            "Ils sont supprimés avant build",
            "Ils sont nécessaires au CSS",
            "L’image et ses couches peuvent être inspectées",
            "Docker les chiffre toujours"
        ],
        "correct": "L’image et ses couches peuvent être inspectées"
    },
    {
        "question": "Que doit permettre la documentation finale ?",
        "answers": [
            "Cacher les limites",
            "Remplacer les tests",
            "Installer, démarrer et comprendre les choix techniques",
            "Uniquement voir le logo"
        ],
        "correct": "Installer, démarrer et comprendre les choix techniques"
    },
    {
        "question": "L’architecture full-stack cible associe…",
        "answers": [
            "Node sans données",
            "CSS, Git et PDF",
            "Interface Vue/React, API Express, SQLite et Docker Compose",
            "HTML seul et SMTP"
        ],
        "correct": "Interface Vue/React, API Express, SQLite et Docker Compose"
    },
    {
        "question": "Pourquoi Docker clôt-il le parcours ?",
        "answers": [
            "Il assemble des éléments déjà compris sans masquer leur fonctionnement",
            "Il rend les tests inutiles",
            "Il remplace l’apprentissage de Node",
            "Il intervient avant HTML"
        ],
        "correct": "Il assemble des éléments déjà compris sans masquer leur fonctionnement"
    },
    {
        "question": "Que doit démontrer la soutenance courte ?",
        "answers": [
            "Une liste de dépendances sans explication",
            "Fonctionnement, décisions techniques et vérifications",
            "Uniquement une capture d’écran",
            "Le mot de passe de la base"
        ],
        "correct": "Fonctionnement, décisions techniques et vérifications"
    },
    {
        "question": "Quel élément aide à relancer un projet par un autre étudiant ?",
        "answers": [
            "Un chemin local absolu",
            "README clair, scripts et configuration reproductible",
            "Une capture de terminal",
            "Un dossier node_modules seulement"
        ],
        "correct": "README clair, scripts et configuration reproductible"
    },
    {
        "question": "Quel est l’objectif du projet fil rouge ?",
        "answers": [
            "Supprimer les critères qualité",
            "Éviter l’intégration",
            "Réutiliser les productions et rendre visibles les dépendances entre blocs",
            "Changer de sujet à chaque séance"
        ],
        "correct": "Réutiliser les productions et rendre visibles les dépendances entre blocs"
    },
    {
        "question": "Quelle sortie correspond au bloc 1 ?",
        "answers": [
            "Composants React avec base",
            "API SQLite conteneurisée",
            "Page Coming Soon et CV web valides, responsives et audités",
            "Tests d’intégration uniquement"
        ],
        "correct": "Page Coming Soon et CV web valides, responsives et audités"
    }
];
