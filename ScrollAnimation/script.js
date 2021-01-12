const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes();
function checkBoxes() {
    const triggerBottom = window.innerHeight * 0.8 //this is a vlue obtained through trial and error to approximately get 80% of the window height

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')

        } else {
            box.classList.remove('show')
        }

    })

}