Note générale
================

Il est important de vous aider des petits tutoriels que l'on peut trouver sur internet
https://www.w3schools.com/howto/default.asp

API (appels AJAX)
==================
Le site fourni une API JSON via l'url /modules/ajax/04-controller.php?action=NOM_ACTION
Où NON_ACTION est le nom de l'action souhaitée pour le moment le fichier 04-controller.php
contient unique listeVilles et listeUsers

### Exercice 1
En tant que développeur je veux pouvoir créer une nouvelle action qui me permet
de récupérer la liste des albums du groupe musicband au format JSON


Page discographie
==================

### Exercice 1 Création de la page

- En tant que développeur j'ai besoin d'un module discographie et les fichiers nécessaires à son fonctionnement
- En tant que développeur je veux afficher la page discographie avec les albums (voir la page produits par exemple)


Barre de navigation
===================

### Exercice 1
- En tant qu'utilisateur anonyme je veux pouvoir accéder aux pages du site par des liens dans la barre de menu

- En tant que developpeur je veux que tous les fichiers html des modules soient accessibles par un lien dans la barre de menu

### Exercice 2

- En tant qu'utilisateur je souhaite pouvoir me connecter, en cliquant sur le bouton login
  Coup de pouce : Soumission asynchrone du formulaire, il faut appeler la fonction MUSICBAND.query.post()
  avec le parametre settings contenant au moins ceci { async:true }. Prenez exemple sur l'existant (forms/*-forms.js)

- En tant que développeur je veux que le bouton login affiche un formulaire de login.

- En tant qu'utilisateur connecté je veux pouvoir me déconnecter.

Menu
============

### Exercice 1

 - En tant que développeur je veux pouvoir configurer mon module de menu depuis je fichier configuration json

 - lire la configuration depuis le module pour peupler le code de présentation


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

### Exercice 1

- En tant qu'utilisateur anonyme je veux afficher la liste des fans inscrits sur le site

### Exercice 2

- En tant qu'utilisateur je veux pouvoir afficher les détails du profil du fan sélectionné

### Exercice 3

- En tant qu'utilisateur connecté je veux pouvoir modifier mon profil

Session
==============

### Stockage des données dans le navigateur

Le localStorage permet de stocker des données relative à la navigation courante
Nous avons besoin de savoir si l'utilisateur courant est anonyme ou non (connecté)

### Cookies et session

 - comment distinguer un utilisateur connecté de l'utilsateur anonyme ?

 - comment stocker les données d'un utilisateur donné et s'en souvenir après
 déconnexion/reconnexion ?

 - Notion d'indentifiant, que choisir comme identifiant ?

Modularisation
==============

Eviter les copier de coller de code html/js

### Exercice 1

Identifier les zones html qui sont partagées par toutes les pages du site
 - donner une liste des modules à créer
 - existe-t-il un module avec une présentation particulière par rapport aux autres ?
   si oui en quoi est-il différents des autres différence ?

### Exercice 2

 module formulaire de connexion (dans le module session ? KISS ?)


Refactoring
=============

### Exercice 1 :

- En tant que développeur je veux utiliser les classes plutôt que les prototypes
pour la déclaration de mes classes.
