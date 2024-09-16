import { languages } from './utility/languages.js';

let select = document.querySelector('#language');
console.log(select.innerHTML);
// await languages().then((data) => {
//     console.log(data)
// })

languages();
