$(document).ready(function() {
  //insert other subtemplates (components)
  $("#modal-login-form-container").load("/modules/forms/modal-login-form.html", function() {
     MUSICBAND.addScript("/modules/forms/js/modal-login-form.js");
  });

  $("#menu").load("/modules/menu/nav-links.html", function() {
      if (MUSICBAND.session.isLoggedIn()) {
            $("#login-link").text("Log Out");
            $("#login-link").toggleClass("w3-green w3-red");
      } else {
        $("#login-link").text("Log In");
      }
      $("#login-link").click(function(e){
          if (MUSICBAND.session.isLoggedIn()) {
            MUSICBAND.session.logOut();
          } else {
            $("#modal-login-form").show();

          }
      });
  });

});


