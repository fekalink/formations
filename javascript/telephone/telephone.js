$(document).ready(function() {

    var button = $("#switchButton");
    button.click( function(){
         var buttonText = $(this).text();
         if(buttonText == "Start"){
          $(this).text("Stop");
         }else{
           $(this).text("Start");
        }
        testAll();
        progressBar();
    });

function testAll() {
  var ecran = document.getElementById("ecran");
  ecran.innerHTML  = "";
  
  //Test 1
  ecran.innerHTML  += "Running test 1<br />";
  var result = "KO";
  writeLocalStorage("test1", result);

  //Test 2
  ecran.innerHTML  += "Running test 2 <br />";
  var result = "KO";
  writeLocalStorage("test2", result);
  
  
}


function writeLocalStorage(itemName,itemValue) {
    console.log("[INFO] Local Storage item name:" + itemName + " value" + itemValue);    
    localStorage.setItem(itemName, itemValue);
    return false;
}

function readLocalStorage(itemName) {
  let value = localStorage.getItem(itemName);
  return value;
}



function progressBar() {
    var elem = document.getElementById("myBar");   
    var width = 0;
    var id = setInterval(frame, 10);
    
    function frame() {
      if (width == 100) {
        clearInterval(id);
       } else {
         width++; 
         elem.style.width = width + '%'; 
      }
  }
}

class Animal {

    let pattes;
 
    constructor () {
        this.pattes = 4 
    }

    cri (message) {
        console.log(message);
    }

}
var animal = new Animal();
animal.cri("ggrrrrr");
    


    
});
