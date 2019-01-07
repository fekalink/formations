frameworkVersion = "05";
MUSICBAND.log("Framework version is " + frameworkVersion);
//global configuration
MUSICBAND.config.load("/config/" + frameworkVersion + "-config.json");

/**********************/
/*  Loading session   */
/**********************/

var userCookie = MUSICBAND.cookie.get("user");
if (parseInt(userCookie) > 0) {
  MUSICBAND.session.create(userCookie);
} else {
  MUSICBAND.session.create(0);
}

//preload data
MUSICBAND.data.load("/data/" + frameworkVersion + "-users.json", {property:"users"});
MUSICBAND.session.set("users", MUSICBAND.data.get("users", {property:"users"}));

MUSICBAND.data.load("/data/" + frameworkVersion + "-products.json", {property:"products"});
MUSICBAND.session.set("products", MUSICBAND.data.get("products", {property:"products"}) );

//@TODO should be part of a generic init procedure from module configuration
let cart = MUSICBAND.session.get("cart")
if (!cart) {
  MUSICBAND.session.set("cart", {"products":[]});
}

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
    let component = MUSICBAND.config.data.components[i];
    if (!component.active) {
      continue;
    }
    for (var j=0;j<component.scripts.length;j++) {
        let src = component.scripts[j];
        console.log("[INFO] Component loading JS "+ src);
        MUSICBAND.addScript(src);
    }
    for (var k=0;k<component.css.length;k++) {
        let src = component.css[i];
        console.log("[INFO] Component loading CSS "+ src);
        MUSICBAND.addCSS(src);
    }
    let src = component.src;
    let targetSelector = component.target;
    MUSICBAND.file.includeHTML(src,
                              {
                                async:false,
                                target:targetSelector,
                              },
                              function(content, settings) {
                                window.addEventListener("load", function(e) {
                                  document.querySelector(settings.target).innerHTML = content;
                                });
                              });

}
