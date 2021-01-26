//first, we create an array of our sounds. Make sure they are named the same as ids mentioned for each audio tag in out html file
const sounds = ['Applause', 'Win', 'Lose', 'Laugh', 'Gasp']

//then we run a foreach to create element "btn" and then append it to our main "buttons" <div>
sounds.forEach((sound) => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

//this is simply what we want written inside our buttons
    btn.innerText = sound;

//this function plays the audio when we click on the buttons
    btn.addEventListener('click', () => {
        //we need to stop the audio to avoid overlapping of audios
        stopSongs();
//using "play()" web api here to play our audio
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn);

})

function stopSongs() {

    sounds.forEach(sound => {

        const song = document.getElementById(sound)
//there's no "stop" feature in js web api for this so this is how we do it- use pause() then set currentTime = 0
        song.pause()
        song.currentTime = 0;
    })
}