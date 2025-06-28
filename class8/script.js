import {add} from './app.js';
let x = 8; // block-scoped
const y = 9; //constant
var z = 10; //function-scoped

const great = () => console.log("hello");

function great2(name = "Ramla Eman") {
    console.log(`hello ${name}`);
}

console.log(add(2,3))