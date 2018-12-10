//global configuration
MUSICBAND.config.load("/config/config.json");

/**********************/
/*  Loading session   */
/**********************/

MUSICBAND.session.set("users", MUSICBAND.config.data.users );
MUSICBAND.session.set("products", MUSICBAND.config.data.products );

/**********************/
/* load scripts tags  */
/**********************/

//document.addEventListener("DOMContentLoaded", function() {
  //load global scripts
  for (var i=0;i<MUSICBAND.config.data.scripts.length;i++) {
    var src = MUSICBAND.config.data.scripts[i];
    MUSICBAND.addScript(src);
  }

  //load page specific scripts
  var reg = new RegExp('(?:.+\/)([^#?]+)'); 
  for (var i=0;i<MUSICBAND.config.data.pages.length;i++) {
    var pageFile = reg.exec(window.location)[1];
    if (pageFile === MUSICBAND.config.data.pages[i].name) {
      for (var j=0;j<MUSICBAND.config.data.scripts.length;j++) {
        var src = MUSICBAND.config.data.pages[i].scripts[j];
        MUSICBAND.addScript(src);
      }
    }
  }

//});


//load configuration (should be over http)
/*
$(document).ready(function() {
    
      $.ajax({
        dataType: "json",
        url: "file:///home/guillaume/Travail/sources/formations/javascript/website/config/config.json",
        data: {},
        async:false,
        success: function(data) {
          MUSICBAND.config = data;
          MUSICBAND.log("Config loaded", "INFO");
        }
      });
    
  //load dependencies
  $.each(MUSICBAND.config.scripts, function (key, value) {
    MUSICBAND.addScript(value);
  });


});
*/



