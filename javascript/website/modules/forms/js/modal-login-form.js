$(document).ready(function() {
 $("#login-form button[type=submit]").click(function(e){
   e.preventDefault();
   $("#modal-login-form").hide();
   //TODO authenticate user
   MUSICBAND.session.create(1);

   $("#login-link").text("Log out");
   $("#login-link").text("Log out");

   

 });
});
