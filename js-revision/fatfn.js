// Functions are those DECLARED with the reserved word 'function'.
// Functions are also classes based on Prototypes in JavaScript, they have 'this' context.
function Fn() {
	// { prop: 'property' }
	this.prop = 'property';
} 

Fn.prototype.lala = function FunctionPrototype() {}

const r = new Fn();
//console.log(r);
//console.log(r.__proto__);

// ################################################################################################################ //
// fat arrow function
// fat arrow functions cannot be called with the reserved word 'new'
// When we are calling the reserved word 'this' we are really calling the 'this' which is outside function's range.

const fatFn = () => { // -> They DON'T HAVE 'this' context.
	this.prop = 'lala';
};

const r1 = fatFn();
//console.log(this);

//console.log(r1);

// ############################### //

// implicit return
// If we omit '{' & '}', the fat arrow function will have an implicit return. We can't use RETURN if we don't have {}
const fnR = () => 2;

console.log(fnR());
