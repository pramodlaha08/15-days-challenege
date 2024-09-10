import generatePasswordUsingRanges from "./utility/generatePasswordInRange.js";
import copyPassword from "./utility/clipbord.js";

let passwordBox = document.getElementById('password');

let generateBtn = document.querySelector('#generate');
let copy = document.querySelector('#copy');


function createPassword() {
    passwordBox.value = generatePasswordUsingRanges(12);
}

generateBtn.addEventListener('click', createPassword);



copy.addEventListener('click', copyPassword);