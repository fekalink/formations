document.querySelector("#login-form button[type=submit]").addEventListener("click", function(e){
  e.preventDefault();
  e.stopPropagation();
  document.getElementById("modal-login-form").style.display = 'none';
  //TODO authenticate user
  MUSICBAND.session.create(1);
  document.getElementById("login-link").text = "Log out";
});

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
  e.stopPropagation();
  e.preventDefault();
});
