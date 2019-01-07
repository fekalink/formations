/*
@TODO window.addEventListener("load", function(){});
*/

var formSelector = "#myForm";
let listeVilles = getListeVilles();

w3.displayObject("listeVilles", listeVilles);

//on écoute onchange du select ville
document.querySelector(formSelector + " select[name=ville]").addEventListener("change", showZipCode);
//on ecoute le submit du formulaire
document.querySelector(formSelector).addEventListener('submit', myCallbackSubmit);


/*********************/
/*    Callbacks      */
/*********************/

/**
 * Callback en réponse au submit du formulaire
 *@param event e
 */
function myCallbackSubmit(e) {
    console.log("Mon formulaire a été soumis !");
    let formElements = document.getElementById("myForm").elements;
    let postData = {};

    for (var i = 0; i < formElements.length; i++) {
       let elmt = formElements[i];
       if (elmt.type == "submit") {
         continue;
       }
       if (elmt.type == "radio" && !elmt.checked) {
           continue;
       }
       postData[elmt.name] = elmt.value;
    }
    console.log(postData);
    // tester avec ou sans e.preventDefault -> que se passe-t-il ?
    e.preventDefault();
}

/**
 * Callback qui permet de modifier le champ input zipcode
 *@param e event
 */
function showZipCode(e) {
  let ville = this.options[this.options.selectedIndex].value;
  //DOM navigation https://www.w3schools.com/js/js_htmldom_navigation.asp
  let zipInput = this.parentNode.querySelector("input[name=zipcode]");
  //recuperer le zipcode de la ville sélectionnée
  let zipcode = getAttributeValueVille(ville, "zipcode");
  zipInput.value = zipcode;
  e.preventDefault();
}

/********************************/
/*    Fonctions utilitaires     */
/********************************/

//@TODO
//Il faudrait distinguer les fonctions qui traitent directement les donnéels
//des fonctions qui sont des utilitaires d'interaction avec le code HTML/CSS

/**
 * Recupère la liste des villes par une requête HTTP GET synchrone
 *@TODO n'appeler qu'une seule fois la fonction qui effectue la requete ajax (cache)
 *@TODO précharger les données dans un fichier js inclus en tête de document
 *@TODO appeler la fonction query du framework
 */
function getListeVilles() {
  let settings = {
                   "method":"GET",
                   "async": false,
                   "data":"",
                   response:""
                 };
  //la fonction ajaxRequest appel une requete synchrone
  ajaxRequest("/modules/ajax/listeVilles.php",
              settings,
              function(content, settings) {
                //l'objet settings est modifié par la fonction callback
                settings.response = JSON.parse(content);
              });

   let listeVilles = settings.response;
   return listeVilles;
}

/**
 * Récupère la valeur d'un attribut d'une ville donnée
 *@TODO utliser une fonction javascript de recherche dans un tableau d'objet
 *@param nomVille nom de la ville recherchée
 *@param attributeName nom de la propriété de la ville
 */
function getAttributeValueVille(nomVille, attributeName ) {
  //recuperation du tableau des villes
  let listeVilles = getListeVilles().villes;
  let attributeValue = "";
  for (i=0;i<listeVilles.length;i++) {
    let ville = listeVilles[i];
    if (nomVille == ville.value) {
      attributeValue = ville[attributeName];
      break;
    }
  }
  return attributeValue;
}

/**
 * Fonction utilitaire qui devrait se trouver dans un module
 * accessible par tous les autres modules du site !!!
 */
function ajaxRequest(destination, settings, callback) {
   if (settings.async !== false) {
     settings.async = true;
     console.log("[DEBUG] Async query " + destination);
   } else {
     console.log("[WARNING] Synchronous query " + destination);
   }
   var xobj = new XMLHttpRequest();
   xobj.overrideMimeType(settings.dataType);
   try {
     xobj.open(settings.method, destination, settings.async);
   } catch(e) {
     console.error(e);
   }
   xobj.onreadystatechange = function () {
     if (xobj.readyState == 4 && xobj.status == "200") {
        callback(xobj.responseText, settings);
     }
   };
   //Send data for post only
   if (settings.method == "POST" && settings.data) {
     xobj.send(settings.data);
   } else {
     xobj.send(null);
   }
}
