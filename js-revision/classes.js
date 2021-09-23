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
	constructor(mood = "happy") {
		this.mood = mood;
	}

	speak() {
		console.log(`I'm a ${this.mood} pig.`);
	}
}

const happy = new Pig("happy");
console.log(happy);
//happy.speak()
const sad = new Pig("sad");
//sad.speak()
const noMood = new Pig();
//noMood.speak()
