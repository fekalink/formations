$(document).ready(function() {
  //insert other subtemplates (components)

  //modal login form (hidden by default)
  $("#modal-login-form-container").load("/modules/forms/modal-login-form.html", function() {
     MUSICBAND.addScript("/modules/forms/js/modal-login-form.js");
  });

  //main menu in navigation bar
  $("#menu").load("/modules/menu/nav-links.html", function() {
      //change style right after loading it
      if (MUSICBAND.session.isLoggedIn()) {
        $("#login-link").text("Log Out");
        $("#login-link").toggleClass("w3-green w3-red");
      }

      $("#login-link").click(function(e) {
          if (MUSICBAND.session.isLoggedIn()) {
            MUSICBAND.session.logOut();
            $("#login-link").toggleClass("w3-red w3-green");
            $("#login-link").text("Log In");
          } else {
            $("#modal-login-form").show();
          }
      });
  });

});
