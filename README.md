## crapi

* crapi enables you to require a crowdfunding data set consisting of 69,294 projects (name-url)
* data is organized around platforms
* each platform is a json where the kv notation is project name-url

## installation
    npm install crapi

## examples
find out the number of kickstarter and indiegogo projects
```javascript
var crapi = require('crapi');
console.log('kickstarter '+Object.keys(crapi.kickstarter).length); // kickstarter 61356
console.log('indiegogo '+Object.keys(crapi.indiegogo).length); // indiegogo 7785
```
log all kickstarter projects to the console
```javascript
var crapi = require('crapi');
var projects = crapi.kickstarter;
for(var i in projects) {
  console.log(i+': '+projects[i]);
}
```
fetch a project url by name
```javascript
var crapi = require('crapi');
var oculus = crapi.kickstarter['oculus-rift-step-into-the-game'];
// http://www.kickstarter.com/projects/1523379957/oculus-rift-step-into-the-game
```
