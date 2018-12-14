//3 instructions
var x = 1;
var y = 2;
var z = x + y;


function toto() 
{
  let j = 2;
  let k = 3;
  let l = j+k;
  return l;

}

var result = toto();
var ecran = document.getElementById("ecran");
ecran.innerHTML = result;
