const modalContainerEl = document.querySelector('.modal-container')
const addTaskBtn = document.getElementById('add-task-btn')

console.log(modalContainerEl)

addTaskBtn.addEventListener('click', function(){
    modalContainerEl.style.display = 'block';
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