const superheroes = require('superheroes');
const supervillain = require('supervillains');

var mySuperheroName = superheroes.random();
var mySupervillainName = supervillain.random();

console.log(mySuperheroName + ' vs ' + mySupervillainName);
