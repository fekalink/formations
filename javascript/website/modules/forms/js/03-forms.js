window.addEventListener("load", function() {

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
    let zipInput = this.parentNode.querySelector("input[name=zipcode]");
    //recuperer le zipcode de la ville sélectionnée
    let zipcode = getAttributeValueVille(ville, "zipcode");
    zipInput.value = zipcode;
    e.preventDefault();
  }

});
