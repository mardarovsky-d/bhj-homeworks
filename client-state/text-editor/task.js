const editor = document.getElementById('editor');
const deleteButton = document.getElementById('delete');

if (localStorage.editor !== undefined) {
    editor.value = localStorage.editor;
} else {
    editor.value = '';
}

editor.addEventListener('change', () => {
    localStorage.editor = editor.value;
});

deleteButton.addEventListener('click', (e) => {
    e.preventDefault();
    editor.value = '';
    localStorage.editor = '';
});