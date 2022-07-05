import { array } from "./array.js";
// array.length = 224

const chunkArray = _.chunk(array, 3);
console.log("chunkArray :>> ", chunkArray);
// Output: chunkArray :>>  (75) [Array(3), Array(3), Array(3),...]

const differenceArray = _.difference(array, ["Camel", "Dove", "Elephant"]);
console.log("differenceArray :>> ", differenceArray);
// Output: differenceArray :>>  (221) [...]

const joinArray = _.join(array, " ");
console.log("joinArray :>> ", joinArray);
// Output: joinArray :>>  Aardvark Albatross Alligator Alpaca Ant Anteater Antelope Ape ...

const withoutArray = _.without(array, "Camel", "Dove", "Elephant");
console.log("withoutArray :>> ", withoutArray);
// Output: withoutArray :>>  (221) ['Aardvark', 'Albatross', 'Alligator', ...] *without Camel Dove and Elephant

const uniqArray = _.uniq(array);
console.log("uniqArray :>> ", uniqArray);
// Output: uniqArray :>>  (224) ['Aardvark', 'Albatross', 'Alligator',...] *remove duplicated elements
