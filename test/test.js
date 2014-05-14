var crapi = require('../crapi')
//var crapi = require('crapi');

console.log('kickstarter '+Object.keys(crapi.kickstarter).length);
console.log('indiegogo   '+Object.keys(crapi.indiegogo).length);
/*
  , test = require('tape');
test(function(t) {
  t.plan(1);
  t.deepEqual(crapi.indiegogo['accidental-incest-the-movie'],
   'http://indiegogo.com/projects/accidental-incest-the-movie');
});
*/
var projects = crapi.kickstarter;
for(var i in projects) {
  console.log(i+': '+projects[i]);
}
