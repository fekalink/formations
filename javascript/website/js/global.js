var MUSICBAND = MUSICBAND || {};

MUSICBAND = {

    global : {},

    getHttpRoot: function() {
      var httpRoot = window.location.protocol + "//" +window.location.host + "/";
      return httpRoot;
    },

    getScript: function(src) {
      var s = document.createElement('script');
      s.type = "text/javascript";
      s.src = src;
      document.body.appendChild(s);
      log(" script added " + s.src, "INFO");
    },

    log: function(message, level="INFO") {
      console.log("["+level+"] "+ message); 
    }

};

//TODO simulate login/logout
MUSICBAND.session = {

    id: 0,

    set : function(key, value) {
      var json = JSON.stringify(value);
      localStorage.setItem(key, json);
      MUSICBAND.log("Session set key=" + key + " value "+ json, "DEBUG");
    },

    get : function(key) {
      var value = JSON.parse(localStorage.getItem(key));
      return value;
    },

    create : function(userId=0) {
      this.id = userId; 
    },

    destroy : function() {
      localStorage.clear();
    }

};


