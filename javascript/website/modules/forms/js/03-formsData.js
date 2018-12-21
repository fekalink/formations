/********************************/
/*    Fonctions utilitaires     */
/********************************/

// !!!! IMPORTANT !!!!!
//Il faudrait distinguer les fonctions qui traitent directement les donnéels
//des fonctions qui sont des utilitaires d'interaction avec le code HTML/CSS

/**
 * Recupère la liste des villes par une requête HTTP GET synchrone
 */
function getListeVilles() {
  let listeVilles = MUSICBAND.session.get("listeVilles");
  if (!listeVilles) {
    let settings = {
                     "async": false,
                     "data":"",
                     "response":""
                   };
    //la fonction ajaxRequest appel une requete synchrone
    MUSICBAND.query.get("/modules/ajax/listeVilles.php",
                settings,
                function(content, settings) {
                  //l'objet settings est modifié par la fonction callback
                  settings.response = JSON.parse(content);
                });
    MUSICBAND.session.set("listeVilles", settings.response);

    listeVilles = settings.response;
    }
    return listeVilles;
}

/**
 * Récupère la valeur d'un attribut d'une ville donnée
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
