const editor = document.getElementById('editor');
const deleteButton = document.getElementById('delete');

editor.value = localStorage.editor;

editor.addEventListener('change', () => {
    localStorage.editor = editor.value;
});

deleteButton.addEventListener('click', (e) => {
    e.preventDefault();
    editor.value = '';
    localStorage.editor = '';
});