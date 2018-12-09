var MUSICBAND = MUSICBAND || {};

MUSICBAND.users = {

   storageKey : "users",

   viewProfile: function(id) {
    var userslist = MUSICBAND.session.get(this.storageKey);

    var user = userslist.users.find(function(u){
        return u.id == id;
    });
    MUSICBAND.log(JSON.stringify(user), "DEBUG");
   }

};
