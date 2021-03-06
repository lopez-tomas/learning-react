const arr = [-5, -1, -2, -3, -4]

// Filter method
// It returns the same or minor length of the original array if the function we are passing to this method returns a TRUE value.
const r = arr.filter((el, i) => {
	//console.log(i);
	return el > 2;
});
//console.log(r);

// Map method
// It takes all the elements inside an array and applies on them a function. Finally, it returns an array of the same length but with a function applied to each element.

//const mapped = arr.map((el, i) => `<h1>${el}</h1>`);
//console.log(mapped);

const users = [
	{ id: 1, name: "Happy Pig" },
	{ id: 2, name: "Sad Pig" },
	{ id: 3, name: "Excited Pig" }, 
	{ id: 4, name: "Felipe" },
]

const mapped = users.map((user, i) => `<h1>${user.name}</h1>`);
//console.log(mapped);

// Reduce method
// It will take all the elements inside an array and we can returns whatever we want.
 
//const r1 = arr.reduce((acc, el) => acc + el, 0);

//const getMax = (a, b) => Math.max(a, b);
//const r1 = arr.reduce(getMax);

//const r1 = users.reduce((acc, el) => 
	//`${acc === "" ? "" : `${acc}, `}${el.name}`, "");

const r1 = users.reduce((acc, el) => {
	if (el.id < 2) {
		return acc;
	}
	return acc.concat(el);
}, [])

console.log(r1);
