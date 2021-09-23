// Rest operator
// It MUST ALWAYS be at the end. It must be the final parameter.
const rest = (a, b, ...args) => {
	console.log(a);
	console.log(b);
	console.log(args);
};
//rest(1, 2, 3, 4, 5, 6);

const obj = {
	a: 1, b: 2, c: 3, d: 4
}

// Object destructuring
// It's used to obtain a particular property or more than one.
//const { a, b, ...restObj } = obj;
//console.log(a, b, restObj);

const arr = [1, 2, 3, 4, 5]

const [a, b, ...restArr] = arr;
//console.log(a, b, restArr);

// It will be used in React
const useState = () => ['value', () => {}]

const [value, setValue] = useState();
console.log(value, setValue);
