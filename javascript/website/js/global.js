var MUSICBAND = MUSICBAND || {};

MUSICBAND = {

    global : {},

    getHttpRoot: function() {
      var httpRoot = this.config.localRootDir; 
      if (window.location.protocol !== "file:") {
        httpRoot = window.location.protocol + "//" +window.location.host + "/";
      }
      return httpRoot;
    },

    addScript: function(url) {
      // gets the first script in the list
      let js = document.createElement('script');
      js.type = 'text/javascript';
      js.src = url;
      js.async= false;
      document.head.appendChild(js);
    },
    addCSS: function(url) {
      var ss = document.createElement("link");
      ss.type = "text/css";
      ss.rel = "stylesheet";
      ss.href = url;
      document.getElementsByTagName("head")[0].appendChild(ss);
    },

    log: function(message, level="INFO") {
      console.log("["+level+"] "+ message);
    }

}

//TODO depedencies injection
MUSICBAND.session = {

    id: 0,
    sessionData: {},

    //TODO : should be stored according to the session user id
    set : function(key, value) {
      var json = JSON.stringify(value);
      localStorage.setItem(key, json);
      //MUSICBAND.log("Session set key=" + key + " value "+ json, "DEBUG");
    },

    get : function(key) {
      var value = JSON.parse(localStorage.getItem(key));
      return value;
    },

    create : function(userId=0) {
      this.logIn(userId);
      this.set(this.getSessionKey(), '{"session created"}');
      MUSICBAND.cookie.set('user', userId);
    },

    destroy : function() {
      localStorage.removeItem(this.getSessionKey());
    },

    isLoggedIn: function () { 
      if (this.id > 0 && MUSICBAND.cookie.get('user') > 0) {
        return true;  
      }
      return false;
    },

    logOut: function() {
      this.id = 0;
      MUSICBAND.cookie.set('user', 0);
    },

    logIn: function(userId) {
      this.id = userId;
      MUSICBAND.cookie.set('user', userId);
    },

    getSessionKey: function() {
      return "session" + this.id;
    }

};

MUSICBAND.cookie = {

  set: function(cname, cvalue, exdays=365) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  },

  get: function(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

};

MUSICBAND.config = {

  data : {},

  load: function(file) {
      MUSICBAND.query.getJSON(
        file,
        {},
        function(data) {
          MUSICBAND.config.data = JSON.parse(data); 
          MUSICBAND.log("Config loaded", "INFO");
          //MUSICBAND.log(data, "INFO");
        }
      );
  }

};

MUSICBAND.query = {

   getJSON: function(src, settings, callback) {
       settings.dataType = "application/json";
       settings.async = false;
       settings.method = 'GET';
       this.exec(src, settings, callback);
   },

   get: function(src, settings, callback) {
     settings.method = "GET";
     this.exec(src, settings, callback);
   },

   post: function(src, settings, callback) {
     settings.method = "GET";
     this.exec(src, settings, callback);
   },

   exec : function(src, settings, callback) {
      if (settings.async !== false) {
        settings.async = true;
      }
      var xobj = new XMLHttpRequest();
      xobj.overrideMimeType(settings.dataType);
      try {
        xobj.open(settings.method, src, settings.async); 
      } catch(e) {
        console.error(e);
      }
      xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
          callback(xobj.responseText);
        }
      };
      xobj.send(null);
   },

   redirect: function(url) {
      this.get(url);
   }

}

/*
var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "http://scriptlocation/das.js";
    // Use any selector
    $("head").append(s);
*/
