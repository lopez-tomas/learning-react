//console.log(myVariable); -> It returns undefined
// It 'works' because 'var' variables are re-located at the beginning of the file.
var myVariable = 'variable';
myVariable = 'other value'; // -> We can assign other value to VAR variables

//console.log(variable) -> It throws reference error 
let variable = 'variable created with let'; // -> We can assign other value to LET variables
variable = 'other value to let';

//console.log(constant) -> It throws reference error 
const constant = 'this value is constant';
//constant = 'this operation is invalid'; -> We can't assign other value to CONST

console.log(myVariable);
console.log(variable);
console.log(constant);

// I knew all this stuff, but it's okay.
