document.querySelectorAll('#modal-profile-form .close').forEach(function(node) {
  node.addEventListener('click', function (e) {
    this.style.display = 'none';
  })
});
