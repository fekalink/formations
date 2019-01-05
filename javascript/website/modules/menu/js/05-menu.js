window.addEventListener("load", function() {
  //insert other subtemplates (components)

  let settings = {
    "async":true,
    "targetSelector": "#modal-login-form-container"
  };
  MUSICBAND.query.get("/modules/forms/modal-login-form.html", settings, function(responseText, settings) {
    document.querySelector(settings.targetSelector).innerHTML = responseText;
    MUSICBAND.addScript("/modules/forms/js/modal-login-form.js");
  });

  //main menu in navigation bar
  let menu = MUSICBAND.config.data.menu;
  for (i=0; i < menu.length; i++) {
    let row = menu[i];
    let a   = document.createElement("a");
    a.href  = row.href;
    a.value =  row.value;
    a.id    =  row.id;
    a.text  = row.text;
    a.setAttribute('class', row.class);
    document.getElementById("menu").appendChild(a);
  }

});
