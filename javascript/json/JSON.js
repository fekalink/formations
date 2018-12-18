var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}'; 

//JSON.parse()  text (JSON) -> objet

var objet = JSON.parse(text);
console.log(objet);

objet.employees[0].firstName = "Charlotte";
objet.employees[0].age = 27;

var text = JSON.stringify(objet);
console.log(text);

