$(document).ready(function() {
 $("#login-form button[type=submit]").click(function(e){
   e.preventDefault();
   console.log("qsdqsdq");
   $("#modal-login-form").css("display", "none");
   //TODO authenticate user
   MUSICBAND.session.create(1);
 });
});
