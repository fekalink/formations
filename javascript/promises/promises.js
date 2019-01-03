'use strict';


/*************************/
/*   Premiere promesse   */
/*************************/

var promise1 = new Promise( function(resolve, reject) {
   let v = Math.random()*1000;
   console.log("Random value = " + v);
   if (v < 500) {
    resolve('Valeur aléatoire inférieure à 500');
   } else {
    reject('Attention valeur supérieure ou égale à 500');
   }
});

promise1.then( function(successMsg) {
                console.log("Success message = " + successMsg);
              },
              function(failureMsg) {
                console.log("Failure message = " + failureMsg);
              }
             );
promise1.then(
    function(value) {
        console.log("then success = " + value );
    },
    function(value) {
        console.log("then failure = " + value );
    }
);


console.log("Chainage complexe");
new Promise(function(resolve, reject) {
  let settings = {param1:true};
  resolve(settings);
}).then(
      function(result) {
          console.log("First then = ", result);
          result.param2 = 2;
          return new Promise(
            function(resolve, reject) {
                setTimeout(
                  function(result) {
                    console.log(result);
                        result.param2 = result.param2 * 2;
                        resolve(result);
                  },
                  1000
                );
               }
             );
      }).then(function(result) {
  console.log("Second then = " + result);
  return new Promise((resolve, reject) => {
    if (Math.random() * 1000 < 500) {
      result.status = "OK";
      resolve(result);
    } else {
      result.status = "KO";
      reject(result);
    }
  });
}).then(function(result) {
          console.log(result + " Then I feel good "); // 4
        },
        function(result) {
          console.log(result + " Then I feel almost good "); // 4
          return new Promise((resolve,reject) => {
            resolve(result);
          });
        }
).finally(function(result){
    console.log("Resultat final = ", result);
});


/*************************/
/*  Definir sa promesse  */
/*************************/

//utile pour pouvoir étendre le fonctionnement natif
class MyPromise extends Promise {
  constructor(callback) {
    super(callback);
  }
}
m = new MyPromise(function(resolve, reject) { resolve('toto')}).then(function(result) {alert(result)});
