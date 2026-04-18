const modalContainerEl = document.querySelector('.modal-container')
const addTaskBtn = document.getElementById('add-task-btn')
const taskFormEl = document.getElementById('task-form')
const toDoEl = document.getElementById('to-do')

let isModalDisplay = false

let tasks = []


addTaskBtn.addEventListener('click', function(e){
    e.stopPropagation() // prevents this click from reaching document
    modalContainerEl.style.display = 'block'
    isModalDisplay = true
})

modalContainerEl.addEventListener('click', function(e){
    e.stopPropagation() // clicking inside modal should not close it
})

document.addEventListener('click', function(){
    if(isModalDisplay){
        modalContainerEl.style.display = 'none'
        isModalDisplay = false
    }
})

// Initialize Flatpickr for the input field
document.addEventListener('DOMContentLoaded', function () {
    const dobField = document.getElementById('dob');
    const calendarIcon = document.getElementById('calendar-icon');

    // Initialize Flatpickr with options
    const datepicker = flatpickr(dobField, {
        dateFormat: "d/m/Y",  // Date format
        position: "auto bottom",  // Calendar position
        allowInput: true,  // Allow manual input
        onClose: function () {
            // Calendar closes when clicked outside
        }
    });

    // Open the date picker when the calendar icon is clicked
    calendarIcon.addEventListener('click', function () {
        datepicker.open();
    });
});


//submit form functionality

taskFormEl.addEventListener('submit', function(e){
    e.preventDefault()

    const uuid = Math.floor(Math.random() * 1000)+1


    if(isModalDisplay){
        modalContainerEl.style.display = 'none'
        isModalDisplay = false
    }

    const formTitle = document.getElementById('modal-task-title').value.trim()
    let formDetail = document.getElementById('modal-description').value.trim()
    const formDate = document.getElementById('dob').value.trim()

    if(formDetail === ''){
        formDetail = 'Empty'
    }
 
    const newTask = {
        title: formTitle,
        description: formDetail,
        date: formDate,
        uuid: uuid
    }

    tasks.push(newTask)

    taskFormEl.reset()

    console.log(tasks)

    renderTasks()

})





function renderTasks(){
    let html = ""



    tasks.forEach(function(task){
        html += `
        <div class="rendered-to-do" id="${task.uuid}">
            <h2>${task.title}/<h2>
            <h4>${task.description}</h4>
            <h4>${task.date}</h4>
            <div>
                <button data-delete="${task.uuid}">Delete</button>
            </div>
        </div>
        `
    })
    console.log(html)
    toDoEl.innerHTML = html

}


document.addEventListener('click', function(e){
    const taskUuid = e.target.dataset.delete

    if(taskUuid){
        tasks = tasks.filter(function(task){
            return task.uuid != taskUuid
        })
    renderTasks()
    }
    console.log(tasks)
})

