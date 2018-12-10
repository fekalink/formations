

MUSICBAND.config.load("file:///home/guillaume/Travail/sources/formations/javascript/website/config/config.json");
MUSICBAND.log(MUSICBAND.config.values, "INFO");

//load scripts tags
for (var i=0;i<MUSICBAND.config.scripts.lenght;i++) {
    var src = MUSICBAND.config.scripts[i];
    MUSICBAND.addScript(src);
}


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



