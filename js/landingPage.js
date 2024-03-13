toggle = document.getElementById('toggle')
open = document.getElementById('open')
// model may be modal for id
modal = document.getElementById('modal')
close = document.getElementById('close')


// toggle Nav
toggle.addEventListener('click', () =>{
    console.log('hello');
    document.body.classList.toggle('show-nav')
})
// Show modal
open.addEventListener('click', () =>{
    modal.classList.add('show-modal')
})
// Hide Modal
close.addEventListener('click', () => {
    modal.classList.remove('show-modal')
})
// Hide model on outside click
window.addEventListener('click', (e) => {
    if (e.target == modal){
        modal.classList.remove('show-modal')
    }
})
