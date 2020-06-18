const searchParams = new URLSearchParams(window.location.search)
// const result = searchParams.get('answer')

const answer = document.querySelector('#response')

let count = 0;
let score = 0;

if (result === "true"){
    const rightAnswer = document.createElement('h6');
    rightAnswer.textContent = "RIGHT!";
    document.body.prepend(rightAnswer);
    score += 1;
} else {
    const wrongAnswer = document.createElement('h6');
    wrongAnswer.textContent = "WRONG!";
    document.body.prepend(wrongAnswer);
}

const scoreDisplay = document.querySelector("#score-display")
    
function increaseCount(increase){
    count += increase
    if (count === 5) {
        const display = document.createElement('p')
        display.textContent = `${score}/${count}`
        scoreDisplay.appendChild(display)
    }
}