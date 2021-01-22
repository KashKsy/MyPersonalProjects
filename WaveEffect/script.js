const labels = document.querySelectorAll('.form-control label');


//split to create an array out of our labels (email and password)
labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, index) => `<span style="transition-delay: ${index * 50}ms">${letter}</span>`)
    .join('');
    


})