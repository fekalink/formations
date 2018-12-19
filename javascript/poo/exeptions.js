//Mécanisme d'Exception

/**
 * Definition d'un type d'exception particulier
 */
class MonErreur extends Error {

      constructor(message) {
         if (!message) {
           message = "Ceci est le message de Mon Erreur!";
         }
         super(message);
      }
}

function getA() {
    let result = ' A ' + getB();
    return result;
}

function getB() {
    let result = ' B ' + getC();
    return result;
}

function getC() {
    let result;
    try {
      result = ' C ' + getD(false);
    } catch(error) {
      //traitement de l'Exception : stop propagation
      console.log("Je suis la fonction getC() " + error.message);
      result = ' c ';
    } finally {
      result += " 'Sware " ;
    }
    return result;
}

function getD(parameter=true) {
    if (!parameter) {
      throw new MonErreur();
    }
    return ' D ';
}

let result = getA();
console.log("[DEBUG] Resultat de la fonction getA(): " +  result   );
