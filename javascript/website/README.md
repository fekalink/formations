Note générale
================

Il est important de vous aider des petits tutoriels que l'on peut trouver sur internet
https://www.w3schools.com/howto/default.asp

Barre de navigation
===================

### Exercice 1
- En tant qu'utilisateur anonyme je veux pouvoir accéder aux pages du site par des liens dans la barre de menu

- En tant que developpeur je veux que tous les fichiers html des modules soient accessibles par un lien dans la barre de menu

### Exercice 2

- En tant qu'utilisateur je souhaite pouvoir me connecter, en cliquant sur le bouton login

- En tant que développeur je veux que le bouton login affiche un formulaire de login.

- En tant qu'utilisateur connecté je veux pouvoir me déconnecter.

Page produit
============

### Exercice 1

- En tant qu'utilisateur anonyme je veux pouvoir ajouter un produit au panier !

- En tant que développeur je veux pouvoir ajouter un produit au panier en

### Exercice 2

TODO

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

En tant qu'utilisateur je veux pouvoir voir le détail du profil du fan sélectionné

### Exercice 3

En tant qu'utilisateur je veux pouvoir modifier mon profil

Session
==============

Le localStorage permet de stocker des données relative à la navigation courante
Nous avons besoin de savoir si l'utilisateur courant est anonyme ou non (connecté)
 - comment distinguer un utilisateur conecté de l'utilsateur anonyme ?

 - comment stocker les données d'un utilisateur donné et s'en souvenir après
 déconnexion/reconnexion ?

 - Notion d'indentifiant, que choisir comme identifiant ?

Modularisation
==============

Eviter les copier de coller de code html/js

### Exercice 0
Indentifier les zones html qui sont partagées par toutes les pages du site
 - donner une liste des modules à créer
 - existe-t-il un module avec une présentation particulière par rapport aux autres ?
   si oui en quoi est-il différents des autres différence ?

### Exercice 1
créer un module Menu (navigation)
 - créer une confuration json qui permet de paramétrer le module
 - lire la configuration depuis le mondule pour peupler le code de présentation
 - créer une fonction js qui permet d'afficher le module


### Exercice 2

 créer un module slideshow

### Exercice 3
 module fomrulaire de connexion (dans le module session ? KISS ?)
