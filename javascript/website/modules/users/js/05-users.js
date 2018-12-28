
MUSICBAND.users = {

   storageKey : "users",

   viewProfile: function(id) {
    var userslist = MUSICBAND.session.get(this.storageKey)["users"];    
    var user = userslist.find(function(u){
        return u.id == id;
    });
    MUSICBAND.log(JSON.stringify(user), "DEBUG");
   }

};


$(document).ready(function() {
  var userslist = MUSICBAND.session.get("users");
  w3.displayObject("userslist", userslist);
  //does snot work
  w3.includeHTML();

});
