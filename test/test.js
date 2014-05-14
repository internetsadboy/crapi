var crapi = require('../crapi')
  , test = require('tape');

//var crapi = require('crapi');
var ks = require('kickstarter-crawler');
var opts = {
  url: crapi.kickstarter['philosophy-posters']
};
var project = new ks.project(opts);
project.getTitle().getCity(function(err, data) {
  if(err) throw err;
  console.log(data);
});

  /*
test(function(t) {
  t.plan(2);
  t.deepEqual(crapi.indiegogo['accidental-incest-the-movie'],
   'http://indiegogo.com/projects/accidental-incest-the-movie');
  t.deepEqual(crapi.kickstarter['philosophy-posters'],
    'http://www.kickstarter.com/projects/1200751084/philosophy-posters/');
});
*/
