import { updateStorage, showNotes } from './sessionstorage.js';

let notesContainer = document.querySelector('.container__notes');
let createBtn = document.querySelector('.container__btn');
let notes = document.querySelectorAll('.input-box');


showNotes();


createBtn.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.classList.add('input-box');
    inputBox.setAttribute("contenteditable", "true");
    img.src = "./assets/svgs/delete.svg";
    notesContainer.appendChild(inputBox).appendChild(img);

})

notesContainer.addEventListener('click', (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll('.input-box');
        notes.forEach((nt) => {
            nt.onkeyup = function () {
                updateStorage();
            }
        })
    }
    
})

document.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        document.execCommand('insertLineBreak');
        e.preventDefault();
    }
})