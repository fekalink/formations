window.addEventListener("load", function() {
  //insert other subtemplates (components)

  let settings = {
    "async":true,
    "targetSelector": "#modal-login-form-container"
  };
  MUSICBAND.query.get("/modules/forms/modal-login-form.html", settings, function(responseText, settings) {
    document.querySelector(settings.targetSelector).innerHTML = responseText;
    MUSICBAND.addScript("/modules/forms/js/modal-login-form.js");
  });

  //main menu in navigation bar
  let menu = MUSICBAND.config.data.menu;
  for (i=0; i < menu.length; i++) {
    let row = menu[i];
    let a   = document.createElement("a");
    a.href  = row.href;
    a.value =  row.value;
    a.id    =  row.id;
    a.text  = row.text;
    a.setAttribute('class', row.class);
    document.getElementById("menu").appendChild(a);
  }

  /****************/
  /* SIGNUP MODAL */
  /****************/
  settings = {
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
      e.preventDefault();
      let formData = new FormData(this);
      let settings = {
        async:false,
        data: formData,
        targetSelector: "#message-signup-form"
      };
      MUSICBAND.query.post("/modules/ajax/05-controller.php?action=createUser", settings,
        function(responseText, settings) {
          let response = JSON.parse(responseText);
          console.log("TOTO",settings);
          let message = document.querySelector(settings.targetSelector);
          if (response.users) {
            message.innerHTML = "Utilsateur crée avec succès";
          } else {
            message.innerHTML = "La création de l'utilisateur a échoué";
          }
          console.log(response);
        } );
    })
  });

});
