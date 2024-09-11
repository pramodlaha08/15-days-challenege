// Export the functions
let notesContainer = document.querySelector('.container__notes');
export function updateStorage() {
    sessionStorage.setItem("notes", notesContainer.innerHTML);
}

export function showNotes() {
    notesContainer.innerHTML = sessionStorage.getItem('notes');
}
