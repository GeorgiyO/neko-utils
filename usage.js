const Utils = require("./index.js");

Utils.addAllExtraFunctions();

let str = "My ${pet}'s name is ${name}";
let args = {
    pet: "cat",
    name: "Tomas",
}
console.log(str.format(args)) // My cat's name is Tomas

let arr = ["a", "b", "c"];
console.log(arr.last()); // c