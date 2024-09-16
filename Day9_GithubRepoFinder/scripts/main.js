import { languages } from './utility/languages.js';
import { githubApi } from './utility/githubRestApi.js';

let selector = document.querySelector('select');
let btn = document.querySelector('#find');

btn.addEventListener('click', () => {
    githubApi(selector.value);
    gsap.from('.result', {
        opacity: 0,
        duration: 4,
    })
})
languages();

githubApi('javascript');