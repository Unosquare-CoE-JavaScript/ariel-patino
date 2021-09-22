// Hoisting

a = 2;
var a;
console.log( a );

// Another example

console.log( a );

var a = 2;

//With fuhnctions 
foo();

function foo() {
	console.log( a ); // undefined

	var a = 2;
}

// Function declarations are hoisted, as we just saw. But function expressions are not.
foo(); // not ReferenceError, but TypeError!

var foo = function bar() {
	// ...
};

// Another example
foo(); // TypeError
bar(); // ReferenceError

var foo = function bar() {
	// ...
};

//Another one
var foo;

foo(); // TypeError
bar(); // ReferenceError

foo = function() {
	var bar = ''
	// ...
}

// Functions First
foo(); // "b"

var a = true;
if (a) {
   function foo() { console.log( "a" ); }
}
else {
   function foo() { console.log( "b" ); }
}