// Scope 
function foo(a) {
	var b = a;
	return a + b;
}

var c = foo( 2 );

// Look console escope
function foo(a) {

	var b = a * 2;

	function bar(c) {
		console.log( a, b, c );
	}

	bar(b * 3);
}

foo( 2 ); // 2 4 12

// CHeating Lexical
function foo(str, a) {
	eval( str ); // cheating!
	console.log( a, b );
}

var b = 2;

foo( "var b = 3;", 1 ); // 1 3

//Use stric
function foo(str) {
    "use strict";
    eval( str );
    console.log( a ); // ReferenceError: a is not defined
 }
 
 foo( "var a = 2" );