const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textArea')

//js web api for focussing on an element
textarea.focus();

//fetching things or "values" from the textarea by adding a keyup event and applying createTags function
textarea.addEventListener('keyup', (event) => {
    createTags(event.target.value)
//when you enter your choices and press enter, the textarea empties itself by replacing the whole thing with ''
    if (event.key === 'Enter') {
        setTimeout(() => {
            event.target.value = ''
        }, 10)

        randomSelect()
    }

})

//createTags function for creating span tags
function createTags(input) {
    //split for splitting on the basis of a comma, then using filter() with trim() to trim any empty string and then map()  with trim() for removing whitespaces
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    //this is to not create a tag  everytime you type in a letter/character
    tagsEl.innerHTML = ''

    //here we take each tag and put it in span tag, adding a class of "tag" (refer html file), setting innerHTML to the tag we write in the textArea, then finally append it to our div class(tagsEl)
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerHTML = tag
        tagsEl.appendChild(tagEl)
    })
}

function randomSelect() {
    //no. of times it should highlight a tag before it stops at one, here we take an example of 30
    const times = 30
    //start highlighting every tag randomly for 30 times for indefinite time
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        hightlightTag(randomTag)

        setTimeout(() => {
            unhightlightTag(randomTag)
        }, 100)
    }, 100);

    //how to stop it from highlighting tags and finally choose one 

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()
            hightlightTag(randomTag)
        }, 100)
    }, times * 100)

}

//function to pick random tag by applying math.random with the length od the tags nodeList/array
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}


//function to highlight a tag by adding a class of 'highlight'
function hightlightTag(tag) {
    tag.classList.add('highlight')

}

//function to unhighlight a tag by removing the "highlight" class
function unhightlightTag(tag) {
    tag.classList.remove('highlight')

}