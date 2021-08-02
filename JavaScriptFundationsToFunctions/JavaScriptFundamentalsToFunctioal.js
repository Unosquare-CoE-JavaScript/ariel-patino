/* 
Functional Programing
  Breaking up the code into verbs.  POO is about NOuns.
  Object and Arrays: Property Access;
  primary value pass the value
  object, function, array, promise are by reference.
*/

var game = {};
game.murderer = "??";
game['weapons'] = [
  {type: 'lasers', location: 'lab'},
  {type: 'angry cats', location: 'kitchen'},
  {type: 'dish soap', location: 'bathroom'}
]
game.name = [];

game.name.push['scarlet'];
game.name.push['Ramiro'];
game.name.push['Raquel'];


/*
  Rules for Objects
	  Dots you can use string;
	  Dots you cannot use number;
	  Dots you cannot use quotations;
	  Dots you cannot use weird characters;
	  Dots you cannot use expressions;
	  
	  Brackets you can use string;
	  Brackets you can use number;
	  Brackets you can use quotations;
	  Brackets you can use weird characters;
	  Brackets you can use expressions;
	  
Destructuring: 
      Target  =  Source
      Simplify way to defined variables and take them outside to use them in a current scope.
	  
*/

var obj = { name: "rusty", room: "kitchen", weapon: "candlestick"}
const {name, room, weapon } = obj;
console.log(name);
console.log(room);
console.log(weapon);

var [a, [b , [c,d]]] = [1, [2, [[[3,4],5],6]]]
console.log(a, b , c , d);

/* 
  List Transformations:
    take a list of collection and extracc data from them using loopic stuctures.
*/

const game = {
	suspect: [
	  {
		name:"someone1"  ,
		color:"red"
	  },
	  {
		  name:"someone2"  ,
		  color:"yellow"
	  }
	]
}

for (let index in game.suspect) {
	console.log(game.suspect[index].name);
}

const firstColor = game.suspect[0].color;
const secondColor = game.suspect[1].color;

var [color, color2] = [game.suspect[0].color, game.suspect[1].color]

/*
Using functions
  when a funtion return an object we are returning a new instance implicity.  so the context assigned is from the caller.
  forEach
*/

const _ = {};
_.each = function(list, callback) {
	if (Array.isArray(list)) {
		for (let i = 0; i < list.length; i++) {
			callback(list[i], i, list);
		}
	} else {
		for (let key in list) {
			callback(list[key], key, list)
		}
	}
}

_.each(['sally', 'georigy','porgie'], function(name, i, list) {
	if (list[i+1]) {
		console.log(name, 'is younger than', list[i+1]);
	} else {
		console.log(name, 'is the oldest');
	}
})

/*
.map 
  foreach dosn't return anything, map returns an array;
.filter  
  returns  an array
*/

const _ = {};
_.map = function(list, callback) {
	var storage = [];
	for (let i = 0; i < list.length; i++) {
		storage.push(callback(list[i]), i, list);
	}
	
	retun storage;	
}

_.map([1,2,3], function (val) {return val + 1 }); 

const videoData = [
	{name: "some1", present: true, room: [1,2,3]},
	{name: "some2", present: true, room: [4,5,6]},
	{name: "some3", present: true, room: [7,8,9]}
]

_.filter = function(arr, cb) {
	const storage = [];
	_.each(arr, function(item,i,list) {
		if (cb(item, i, list)) 
			storage.push(item)
	});
	return storage;
}

_.filter(videoData, function(suspectObject){
	return suspectObject.present;
});
/**
Arrow Function 
  works with Lexical context, it means that take the this from the parent context;
Spread Operator
  as a parameter gets all the extra parameters at the end;
Default Parameters
  When a parameter has not a value it will have a value by default
  
*/

const add = function(a, b) {
  b = b || 2;
  console.log(arguments);
  return a + b;
}

add(3)


/*
Array As an Object
  it is posible to add functionaloty because prototyping
*/
const constructArr = function() {
	const arr = Array.prototype.slice.call(arguments);
	arr.push('some text');
	return arr.join(' ');
}

constructArr('was', 'it', 'in');

/*
High order functions
  in Javascript function is data.  it means we can sent function as parameter use them and they can returns data or execute acctions.
  
*/

const increment = (n) => {
	return n + 1;
};
const square = (n) => {
	return n * n;
};
const doMathSoIDontHaveTo = (n, func) => { return func(n); };

/*
Currying
  It's when we create a function and it can be executed multiple times with different arguments
  it lets to call a function spliting the params
*/

var abc = function(a, b, c) {
	return [a, b, c];
}

var curried = _.curry(abc);

var result = curried(1)(2)(3);
var result2 = curried(1, 2)(3);
console.log(result, result2, "are the same results");

/*
Composing
  It's when we have to functions and we join them.
*/

const consider = (name) => {
	return `I thing it could be... ${name}`
}
const exclaims = (statement) => {
	return `${statement.toUpperCase()}!`;
}

const blame = _.(consider, exclaims);

console.log(blame(you)); // I thing it could be...YOU!

/*
Scope 
*/

const myAlert = () => {
	const x = "Done!";
	let count = 0;
	const alerter = () => {
		alert(`${x} ${++count}`);
	}
	return alerter;
}

const funcAlert = myAlert();
const funcAlert2 = myAlert();
funcAlert();
funcAlert();

