//global configuration
MUSICBAND.config.load("/config/config.json");

/**********************/
/*  Loading session   */
/**********************/

var userCookie = MUSICBAND.cookie.get("user");
if (parseInt(userCookie) > 0) {
  MUSICBAND.session.create(userCookie);
} else {
  MUSICBAND.session.create(0);
}

MUSICBAND.session.set("users", MUSICBAND.config.data.users );
MUSICBAND.session.set("products", MUSICBAND.config.data.products );

/**********************/
/* load scripts tags  */
/**********************/

//load global scripts
for (var i=0;i<MUSICBAND.config.data.scripts.length;i++) {
  var src = MUSICBAND.config.data.scripts[i];
  MUSICBAND.addScript(src);
}

//load global css
for (var i=0;i<MUSICBAND.config.data.css.length;i++) {
  var src = MUSICBAND.config.data.css[i];
  MUSICBAND.addCSS(src);
}

var reg = new RegExp('(?:.+\/)([^#?]+)');
for (var i=0;i<MUSICBAND.config.data.pages.length;i++) {
  var pageFile = reg.exec(window.location)[1];
  if (pageFile === MUSICBAND.config.data.pages[i].name) {
    //load page specific scripts
    for (var j=0;j<MUSICBAND.config.data.scripts.length;j++) {
      var src = MUSICBAND.config.data.pages[i].scripts[j];
      MUSICBAND.addScript(src);
    }
    //load page specific css
    for (var j=0;j<MUSICBAND.config.data.css.length;j++) {
      var src = MUSICBAND.config.data.pages[i].css[j];
      MUSICBAND.addCSS(src);
    }

  }
}

//components
for (var i=0;i<MUSICBAND.config.data.components.length;i++) {
    for (var j=0;j<MUSICBAND.config.data.components[i].scripts.length;j++) {
        let src = MUSICBAND.config.data.components[i].scripts[j];
        console.log("Loading JS "+src);
        MUSICBAND.addScript(src);
    }
    for (var k=0;k<MUSICBAND.config.data.components[i].css.length;k++) {
        let src = MUSICBAND.config.data.components[i].css[i];
        console.log("Loading CSS "+src);
        MUSICBAND.addCSS(src);
    }
    let src = MUSICBAND.config.data.components[i].src;
    let targetSelector = MUSICBAND.config.data.components[i].target;
    MUSICBAND.file.includeHTML(src,
                              {
                                async:false,
                                target:targetSelector,
                              },
                              function(content, settings) {
                                document.addEventListener("DOMContentLoaded", function(e) {
                                  document.querySelector(settings.target).innerHTML = content;
                                });
                              });

}
