const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg')

//for load percentage
let load = 0;

//because you want it to load every 30ms
let int = setInterval(blurring, 30);

//blurring function increments load percentage, changes 
function blurring() {
    load++;

    if (load > 99) {
        clearInterval(int);
    }
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

//this is for mapping a range of number to another range of number. In this case, it is mapping 1-100 (load) to 1-0(for opacity)
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}