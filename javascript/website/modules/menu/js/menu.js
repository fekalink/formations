$(document).ready(function() {
  //insert other subtemplates (components)
  $("#modal-login-form-container").load("/modules/forms/modal-login-form.html", function() {
     MUSICBAND.addScript("/modules/forms/js/modal-login-form.js");
  });
  $("#menu").load("/modules/menu/nav-links.html", function() {
      if (MUSICBAND.session.isLoggedIn()) {
        $("#login-link").hide();
      } else {
        $("#login-link").show();
      }
  });

});


