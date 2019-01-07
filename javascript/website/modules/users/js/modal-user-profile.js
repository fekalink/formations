document.querySelectorAll('#modal-profile-form .close').forEach(function(node) {
  node.addEventListener('click', function (e) {
    this.style.display = 'none';
  })
});

document.getElementById('user-profile-form').addEventListener('submit', function(e) {
  console.log("qsdqsdqsdqsd");
  e.preventDefault();
  e.stopPropagation();
  /*
   let formData = new FormData(this);
   let settings = {
     async:false,
     data: formData
   };
   MUSICBAND.query.post("/modules/ajax/05-controller.php/action=updateUser", settings, function(responseText, settings) {

   } );
*/

})
