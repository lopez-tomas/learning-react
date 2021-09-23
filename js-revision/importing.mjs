// Old version

//const pigs = require('./import-export');

//console.log(pigs);

//for (let happyPig of pigs.happyPigs) {
	//console.log(happyPig);
//}

//for (let sadPig of pigs.sadPigs) {
	//console.log(sadPig);
//}

// New version
// We don't have a package.json so we MUST use .mjs extension to work with import and export in both files.
import pigs, { sadPigs, otherPigs, fn1, fn2 } from './import-export.mjs';

console.log(pigs);
console.log(sadPigs);
console.log(otherPigs);
fn1();
fn2();
