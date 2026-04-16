const modalContainerEl = document.querySelector('.modal-container')
const addTaskBtn = document.getElementById('add-task-btn')

console.log(modalContainerEl)

addTaskBtn.addEventListener('click', function(){
    modalContainerEl.style.display = 'block';
})