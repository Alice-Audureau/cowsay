const myInfos = require('./information.js');

var cowsay = require("cowsay");

console.log(cowsay.say({
	text : `Hi my name is ${myInfos.name} and i'm from ${myInfos.campus}`,
	e : "oO",
	T : "U "
}));


