const input = document.getElementById('task__input');
const addTaskButton = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

addTaskButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value != '') {
        tasksList.insertAdjacentHTML('beforeend', 
        `<div class="task">
            <div class="task__title">
                ${input.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`
        );
        input.value = '';
        const tasks = Array.from(document.querySelectorAll('.task'));
        const removeTaskButton = tasks[tasks.length - 1].querySelector('.task__remove');
        removeTaskButton.addEventListener('click', (e) => {
            e.preventDefault();
            tasks[tasks.length - 1].remove();
        });
    }
});