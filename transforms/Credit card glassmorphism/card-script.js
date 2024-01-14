'use strict'

const cardNum = document.querySelectorAll(".input-card-number");
Array.from(cardNum).forEach(function(element, i) {
    element.addEventListener("keyup", (e) => {
        if (e.isComposing || e.keyCode === 229) {
            return;
        }

        const count = element.value.length;
        if (count === 4 && (i + 1) < count) {
            cardNum[i+1].focus();
        }
    })
});

const valid = document.querySelectorAll(".valid");
Array.from(valid).forEach(function(element, i) {
    element.addEventListener("keyup", (e) => {
        if (e.isComposing || e.keyCode === 229) {
            return;
        }

        const count = element.value.length;
        if (count === 2 && (i + 1) < count) {
            valid[i+1].focus();
        }
    });
});
