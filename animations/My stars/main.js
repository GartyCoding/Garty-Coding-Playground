let section = document.querySelector('section');
let j = 0;

while(j < 200) {
    let star = document.createElement('i');
    if (j <= 100) {
        star.classList.add("star1");
    } else {
        star.classList.add("star2");
    }
    let x = Math.floor(Math.random() * window.innerWidth);
    star.style.left = `${x}px`;
    let y = Math.floor(Math.random() * window.innerHeight);
    star.style.top = `${y}px`;

    let size = Math.random() * 4;
    star.style.width = `${1 + size}px`;
    star.style.height = `${1 + size}px`;

    let duration = Math.random() * 2;
    star.style.animationDuration = `${duration + 1}s`

    section.appendChild(star);
    j++;
}

let sun =  document.querySelector('.sun');
let boxSirius =  document.querySelector('.box-sirius');
let rigel =  document.querySelector('.rigel');
let star1 =  document.getElementsByClassName('star1');
let star2 =  document.getElementsByClassName('star2');

sun.addEventListener('mouseover', function() {
    boxSirius.classList.add("dim");
    rigel.classList.add("dim");

    for (const s of star2) {
        s.classList.add('hide-star');
    }
});

sun.addEventListener('mouseout', function() {
    boxSirius.classList.remove("dim");
    rigel.classList.remove("dim");

    for (const s of star2) {
        s.classList.remove("hide-star");
    }
});

boxSirius.addEventListener('mouseover', function() {
    sun.classList.add("dim");
    rigel.classList.add("dim");

    for (const s of star1) {
        s.classList.add('hide-star');
    }
});

boxSirius.addEventListener('mouseout', function() {
    sun.classList.remove("dim");
    rigel.classList.remove("dim");

    for (const s of star1) {
        s.classList.remove("hide-star");
    }
});
