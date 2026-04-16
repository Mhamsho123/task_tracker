const modalContainerEl = document.querySelector('.modal-container')
const addTaskBtn = document.getElementById('add-task-btn')
const taskFormEl = document.getElementById('task-form')

let isModalDisplay = false

const task = []


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


    if(isModalDisplay){
        modalContainerEl.style.display = 'none'
        isModalDisplay = false
    }

    const formTitle = document.getElementById('modal-task-title').value
    let formDetail = document.getElementById('modal-description').value
    const formDate = document.getElementById('dob').value

    if(formDetail === ''){
        formDetail = 'Empty'
    }
 
    const newTask = {
        title: formTitle,
        description: formDetail,
        date: formDate,
    }

    task.push(newTask)

    taskFormEl.reset()

    console.log(task)

})



