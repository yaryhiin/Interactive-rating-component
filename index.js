const buttons = document.querySelectorAll('.score-item button');
const score = document.querySelector('.number');
const submit = document.querySelector('.submit');
const rating = document.querySelector('.rating');
const result = document.querySelector('.result');
let chosen = null;

for (let i of buttons) {
    i.addEventListener('click', () => {
        chosen = i.value;
        i.parentNode.classList.add('active');
        i.parentNode.classList.remove("hover");
        for (let j of buttons) {
            if (j == i) {
                continue;
            }
            j.parentNode.classList.remove("active");
            j.parentNode.classList.add('hover');
        }
    })
}

submit.addEventListener('click', () => {
    for (let i of buttons) {
        if (i.parentNode.classList.contains('active')) {
            score.innerHTML = chosen;
            rating.classList.add('unvisible');
            result.classList.remove('unvisible');
        }
    }
})