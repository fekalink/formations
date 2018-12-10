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

    log: function(message, level="INFO") {
      console.log("["+level+"] "+ message);
    }

}

//TODO simulate login/logout
MUSICBAND.session = {

    id: 0,

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
      this.id = userId; 
    },

    destroy : function() {
      localStorage.clear();
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
   }

}

/*
var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "http://scriptlocation/das.js";
    // Use any selector
    $("head").append(s);
*/
