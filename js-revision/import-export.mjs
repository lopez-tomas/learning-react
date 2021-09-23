const happyPigs = ['piggy 1', 'piggy 2', 'piggy 3'];

const sadPigs = ['sad 1', 'sad 2'];
const otherPigs = ['other pig 1'];

// Old version

//module.exports = { 
	//happyPigs,
	//sadPigs
//}

const fn1 = () => {
	console.log("I'm the function 1.");
};

const fn2 = () => {
	console.log("I'm the function 2.");
};

// New version
export { sadPigs, otherPigs, fn1, fn2 };
export default happyPigs;
