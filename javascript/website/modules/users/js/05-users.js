window.addEventListener("load", function() {
  //chargement de la liste des utilisateurs
  var userslist = MUSICBAND.session.get("users");
  w3.displayObject("userslist", userslist);

  /*****************/
  /* PROFILE MODAL */
  /*****************/
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
      MUSICBAND.query.get("/modules/users/modal-profile.html", settings, function(responseText, settings) {
        //MUSICBAND.query.get('/modules/users/js/modal-user-profile.js', settings, function(responseText, settings) {
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

        //soumission du profile form
        document.getElementById('user-profile-form').addEventListener('submit', function(e) {
          e.stopPropagation();
          let formData = new FormData(this);
          console.log("name = " + formData.get('name'));
          let settings = {
            async:false,
            data: formData
          };
          MUSICBAND.query.post("/modules/ajax/05-controller.php?action=updateUser", settings, function(responseText, settings) {
          } );
        });

        //});
      });
      e.stopPropagation();
      e.preventDefault();
    });
  });

  /****************/
  /* SIGNUP MODAL */
  /****************/
  let settings = {
    async: true,
    data: {},
    targetSelector: "#modal-signup-form-container"
  };
  MUSICBAND.query.get("/modules/users/modal-signup.html", settings, function(responseText, settings) {
    console.log(settings);
    document.querySelector(settings.targetSelector).innerHTML = responseText;
    //click sur signup
    document.getElementById("signup-link").addEventListener("click", function(e) {
      document.getElementById('modal-signup-form').style.display = "block";
      e.stopPropagation();
      e.preventDefault();
    });
    //fermeture de la modale
    document.querySelectorAll('#modal-signup-form .close').forEach(function(node) {
      node.addEventListener('click', function (e) {
        document.getElementById('modal-signup-form').style.display = 'none';
      })
    });
    //soumission signup form
    document.getElementById('user-signup-form').addEventListener('submit', function(e) {
      e.stopPropagation();
      let formData = new FormData(this);
      let settings = {
        async:false,
        data: formData
      };
      MUSICBAND.query.post("/modules/ajax/05-controller.php?action=createUser", settings, function(responseText, settings) {
      } );
    })
  });


});
