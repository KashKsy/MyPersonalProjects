const buttons = document.querySelectorAll('.toggle');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        button.parentNode.classList.toggle('active'); //secret sauce here- parentNode.classList.toggle('classname)
    })
})