
MUSICBAND.users = {

  storageKey : "users",

  get: function(id) {
    var userslist = MUSICBAND.session.get(this.storageKey)["users"];
    var user = userslist.find(function(u){
      return u.id == id;
    });
    return user;
  }

};
