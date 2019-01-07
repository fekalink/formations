Note générale
================

Il est important de vous aider des petits tutoriels que l'on peut trouver sur internet
https://www.w3schools.com/howto/default.asp

Les fichiers préfixés d'un numéro correspondent au numéro de l'étape d'avancement
du travail (version).
Tous les fichiers 03 par exemple vont ensemble. Si il n'existe pas de fichier de
la même version :
  - ex 01-forms.js:  n'existe pas car le js est inclus dans le 01-forms.html
  - ex 02-framework.js n'existe pas car on utilisait global.js
  - controller.php n'existe pas avant la version 03 car on ne l'utilisait pas
  - un fichier 02 peut inclure un autre fichier 01, si ce dernier n'a subit de mdiifications
  - etc...

API (appels AJAX)
==================

Le site fourni une API JSON via l'url /modules/ajax/04-controller.php?action=NOM_ACTION
Où NON_ACTION est le nom de l'action souhaitée pour le moment le fichier 04-controller.php
contient unique listeVilles et listeUsers

### Exercice 1

En tant que développeur je veux pouvoir créer une nouvelle action qui me permet
de récupérer la liste des albums du groupe musicband au format JSON

### Exercice 2

Page discographie
==================

### Exercice 1 Création de la page

- En tant que développeur j'ai besoin d'un module discographie et les fichiers nécessaires à son fonctionnement
- En tant que développeur je veux afficher la page discographie avec les albums (voir la page produits par exemple)


Barre de navigation
===================

### Exercice 1

- En tant qu'utilisateur anonyme je veux pouvoir accéder aux pages du site par des liens dans la barre de menu

- En tant que développeur je veux que tous les fichiers html des modules soient accessibles par un lien dans la barre de menu
  - les liens peuvent être désactivable dans le fichier de configuration

### Exercice 2

- En tant qu'utilisateur je souhaite pouvoir me connecter, en cliquant sur le bouton login
  Coup de pouce : Soumission asynchrone du formulaire, il faut appeler la fonction MUSICBAND.query.post()
  avec le parametre settings contenant au moins ceci { async:true }. Prenez exemple sur l'existant (forms/\*-forms.js)

- En tant que développeur je veux que le bouton login affiche un formulaire de login.

- En tant qu'utilisateur connecté je veux pouvoir me déconnecter.

Menu
============

### Exercice 1

 - En tant que développeur je veux pouvoir configurer mon module de menu depuis je fichier configuration json

 - Lire la configuration depuis le module pour peupler le code de présentation

  - Quels sont les attributs de chaque lien que je souhaite rendre configurable ?
  - Quelle fonction ou méthode puis-je écrire pour ajouter un lien dans une page ?

Page produit
============

### Exercice 1

- En tant qu'utilisateur anonyme je veux pouvoir ajouter un produit au panier !

- En tant que développeur je veux pouvoir ajouter un produit au panier en

### Exercice 2

TODO

Ergonomie
===========

### Exercice 1

- En tant qu'utilisateur je veux une barre de menu collante (sticky navbar)
https://www.w3schools.com/howto/howto_js_navbar_sticky.asp

### Exercice 2

- En tant qu'utilisateur je veux pouvoir cliquer sur une flèche qui me permet de remonter automatiquement en tête de pages
ex: https://www.escaleindienne.fr/service-traiteur.php


Page panier
===========

### Exercice 1

- En tant qu'utilisateur anonyme je veux afficher le panier et la liste produit à partir du Web Storage

### Exercice 2

Page fan club
=============

Un utilisateur du site n'est pas forcément un fan. La structure de données est-elle suffisante
pour faire la distinction entre un fan et un utilisateur lamba ?

### Exercice 1 (intermédiaire)

- En tant qu'utilisateur anonyme je veux afficher la liste des fans inscrits sur le site

### Exercice 2 (intermédiaire)

- En tant qu'utilisateur je veux pouvoir afficher les détails du profil du fan sélectionné

### Exercice 3 (difficile)

- En tant qu'utilisateur connecté je veux pouvoir modifier mon profil (localStorage)
   - étape 1 : faire une page à part qui envoie les données en POST et écrit dans le localStorage
   - étape 2 : soumission asynchrone (avec la fonction du framework)
   - étape 3 : soumission asynchrone avec formData et Promise()
   - étape 4 : faire un component formulaire qui s'affiche en fenetre modale ou popup


Session
==============

### Exercice 1 : Stockage des données dans le navigateur

Le localStorage permet de stocker des données relative à la navigation courante.
Nous avons besoin de savoir si l'utilisateur courant est anonyme ou non (connecté)

  - Existe-il déjà des données dans le localStorage si oui lesquelles ?

  - Comment stocker les données d'un utilisateur donné et s'en souvenir après
  déconnexion/reconnexion ?

### Exercice Cookies

 - Comment distinguer un utilisateur connecté de l'utilisateur anonyme ?
 - Voyez-vous un cookie quelquepart dans la console ? les cookies appartiennent à une requête (facile)


 - Notion d'identifiant, que choisir comme identifiant ?
      - essayer avec un entier
      - une chaine plus complexe (hash sha128 par exemple)

Modularisation
==============

Eviter les copier de coller de code html/js, le framework permet de déclarer des
"components" dans la configuration. Ce sont des morceaux de code html de l'on peut
injecter dans les pages avec leur propre js et css (cf config.js slideshow)

### Exercice 1

Identifier les zones html qui sont partagées par toutes les pages du site
 - donner une liste des modules à créer (facile)
 - configurer le menu pour qu'il soit appelé comme un component (intermédiaire)

### Exercice 2


Refactoring
=============

### Exercice 1 : (facile)

- En tant que développeur je veux utiliser les classes plutôt que les prototypes
pour la déclaration de mes classes.

### Exercice 2 : (difficile)

- En tant que développeur je veux utiliser les promesses (new Promise()) pour effectuer
les actions asynchrones (pouvoir les executer en cascade plus facilement)

### Exercice 3 : (difficile)

- En tant que développeur je veux capturer l'événement de mise à jour des données
dans le localStorage pour mettre à jour les pages qui affiches ses données
(listes produits du panier par exemple)

### Exercice 4 : (intermédiaire)

- En tant que développeur je veux utiliser les namespaces dans les modules et components pour éviter les collisions, et effets de bord des globales.
