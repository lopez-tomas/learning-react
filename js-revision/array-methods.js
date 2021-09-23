const arr = [5, 1, 2, 3, 4]

// Filter method
// It returns the same or minor length of the original array if the function we are passing to this method returns a TRUE value.
const r = arr.filter((el, i) => {
	//console.log(i);
	return el > 2;
});
//console.log(r);

