
MUSICBAND.users = {

   storageKey : "users",

   viewProfile: function(id) {
    var userslist = MUSICBAND.session.get(this.storageKey);

    var user = userslist.users.find(function(u){
        return u.id == id;
    });
    //MUSICBAND.log(JSON.stringify(user), "DEBUG");
   }

};


$(document).ready(function() {
  var userslist = { "users" : MUSICBAND.session.get("users") };
  console.log(userslist);
  w3.displayObject("userslist", userslist);
});
