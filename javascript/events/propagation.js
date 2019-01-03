window.addEventListener("load", function() {

  var
  table = document.querySelector('table'),
  tbody = table.querySelector('tbody')
  ;

  addEventListeners();

  //déclaration d'une fonction personnelle pour l'écoute des événements
  function addEventListeners() {
    window.addEventListener('click', clearLog, true);

    var innerBox = document.querySelector('.box.inner');

    var n = innerBox;
    //tant qu'il y a un parent
    while (n) {
      n.addEventListener('click', listener('capturing1'), true);
      n.addEventListener('click', listener('capturing2'), true);
      n.addEventListener('click', listener('bubbling1'));
      n.addEventListener('click', listener('bubbling2'));

      n = n.parentNode;
    }
    //ajoute des écouteurs pour le dernier élément de la liste
    window.addEventListener('click', listener('capturing1'), true);
    window.addEventListener('click', listener('capturing2'), true);
    window.addEventListener('click', listener('bubbling1'));
    window.addEventListener('click', listener('bubbling2'));
  }

  //définition de l'action à l'appel de l'événement (callback)
  function listener(id) {
    return function(e) {
      log(e.eventPhase, e.currentTarget, this, e.target, id);
    }
  }

  //affichage des infos
  function log(phase, currentTarget, _this, target, id) {
    var row = document.createElement('tr');

    td = document.createElement('td');
    td.innerHTML = formatNode(target);
    row.appendChild(td);

    switch (phase) {
      case Event.CAPTURING_PHASE:
      phase = 'capturing';
      break;
      case Event.AT_TARGET:
      phase = 'at target';
      break;
      case Event.BUBBLING_PHASE:
      phase = 'bubbling';
      break;
    }
    var td = document.createElement('td');
    td.innerHTML = phase;
    row.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = formatNode(currentTarget);
    row.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = formatNode(_this);
    row.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = id;
    row.appendChild(td);

    tbody.appendChild(row);
  }

  function formatNode(n) {
    var out;

    if (n == window)
    out = 'window';
    else {
      out = n.nodeName.toLowerCase();
      if (n.id)
      out += '#' + n.id;
    }

    return out;
  }

  function clearLog() {
    tbody.innerHTML = '';
    table.classList.remove('empty');
  }

});
