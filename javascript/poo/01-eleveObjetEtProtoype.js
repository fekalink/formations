

var eleve1 =
{
   prenom: 'Jean',
   nom: 'Dupont',
   age: 18,
   notes: {
     math: {
        note:14,
        coeff:3
     },
     info: {
        note:17,
        coeff:7
     },
     anglais: {
        note: 2,
        coeff: 1
     }
   },

};

console.log(eleve1);

eleve1.prototype = Eleve;

console.log(eleve1);





function getMoyenne(eleve1) {
    let moyenne = ((eleve.notes.math.note * eleve.notes.math.coeff) + (eleve.notes.info.note*eleve.notes.info.coeff) +
    (eleve.notes.anglais.note*eleve.notes.anglais.coeff) )
    /
    (eleve.notes.anglais.coeff + eleve.notes.math.coeff + eleve.notes.info.coeff)
    return moyenne;
}

var moyenne = getMoyenne(eleve1);

console.log(moyenne);
