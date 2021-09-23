// Class expression (no hoisting)
// We are defining the 'R' class and assigning it to a constant called 'Rectangle'.
//const Rectangle = class R {

//}

// Anonymous class
//const Rectangle = class {

//}

// Class declaration (no hoisting)
//console.log(Rectangle);
// Classes declared with the reserved word 'class' have not hoisting.
class Rectangle {

}

// Hoisting
// It's when we have variables defined with the reserved word 'var' & functions defined with the reserved word 'function'
// and they're re-located at the beginning of the file.
//console.log(Square);
function Square() {}
//console.log(Square, Rectangle);

const r = new Rectangle();

class Pig {
	property = "my property";
	#hunger; // -> We use # to create a private property and/or method.
	static staticProperty = 42; // -> We use the reserved word 'static' to define a static property and/or method.

	constructor(mood = "happy", hunger = false) {
		this.mood = mood;
		this.#hunger = hunger;
	}

	speak() {
		console.log(`I'm a ${this.mood} pig... ${this.#hunger ? 'with hungry!' : 'satisfied!'}`);
	}

	static eat() {
		console.log("I'm eating " + (this.staticProperty > 1 ? this.staticProperty + " apples!" : this.staticProperty + " apple!"));
	}
}

Pig.eat();
const happy = new Pig("happy");
//console.log(happy.__proto__);
//console.log(happy.__proto__.speak);
//happy.speak()
//console.log(feliz);

const sad = new Pig("sad");
//sad.speak()

const noMood = new Pig();
//noMood.speak()
