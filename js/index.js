trigger = document.getElementById('arrow')
show = document.querySelector('.drop-down')
// Only need lines 1-2 and 14-16 the rest can be used as a reference
// model may be modal for id
modal = document.getElementById('model')
close = document.getElementById('close')


// Adds a class to the body
// document.body.classList.toggle('show-nav')


// toggle Drop down
trigger.addEventListener('click', () => {
    show.classList.toggle('drop-down-open')
})
// Show modal
open.addEventListener('click', () => {
    modal.classList.add('show-modal')
})
// Hide Modal
close.addEventListener('click', () => {
    modal.classList.remove('show-modal')
})
// Hide model on outside click
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.classList.remove('show-modal')
    }
})
