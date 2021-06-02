//CommonJS, every file in node is a module (by default)
//Modules - Encapsulated Code (only share minimum)

const names= require('./4-names');
const sayHi = require('./5-utils.js');
const data = require('./6-alternative-flavor');

//when using require we also export the method calls
require('./7-mind-grenade');

// sayHi('Julio');
// sayHi(names.john);
// sayHi(names.peter);