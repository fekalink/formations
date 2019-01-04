
MUSICBAND.users = {

   storageKey : "users",

   get: function(id) {
    var userslist = MUSICBAND.session.get(this.storageKey)["users"];
    var user = userslist.find(function(u){
        return u.id == id;
    });
    return user;
   }

};


window.addEventListener("load", function() {
  //chargement de la liste des utilisateurs
  var userslist = MUSICBAND.session.get("users");
  w3.displayObject("userslist", userslist);

  //affichage d'une fenetre modale au clic sur icone
  let aList = document.querySelectorAll('a[class="fa fa-address-book"]');
  aList.forEach(function(node) {
     node.addEventListener("click", function(e) {
       let userId = node.getAttribute("data-user-id");
       let settings = {
         async: true,
         data: { "userId": userId },
         targetSelector: "#modal-user-profile-container"
       };
       //modal login form (hidden by default)
       //@todo créer un cahrgeur de modules html/js configurables
       MUSICBAND.query.get("/modules/users/modal-profile.html", settings, function(responseText, settings) {
           //recupération du contenu de la modale
           document.querySelector(settings.targetSelector).innerHTML = responseText;
           document.getElementById('modal-profile-form').style.display = 'block';
           let user = MUSICBAND.users.get(settings.data["userId"]);
           w3.displayObject("user-profile-form", { "user": [ user ] });

           //fermeture de la fenetre modale au clic
           document.querySelectorAll('#modal-profile-form .close').forEach(function(node) {
             node.addEventListener('click', function (e) {
               document.getElementById('modal-profile-form').style.display = 'none';
             })
           });
       });
       e.stopPropagation();
       e.preventDefault();
     });
  });

});
