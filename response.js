const searchParams = new URLSearchParams(window.location.search)
// const result = searchParams.get('answer')

const answer = document.querySelector('#response')

let count = 0;
let score = 0;

if (result === "true"){
    const rightAnswer = document.createElement('h6');
    rightAnswer.textContent = "RIGHT!";


    const niceWork = document.createElement('h1');
    niceWork.textContent = "Nice Work, Human";

    document.body.append(rightAnswer, niceWork)
} else {
    const wrongAnswer = document.createElement('h6');
    wrongAnswer.textContent = "WRONG!";

    const studyUp = document.createElement('h1');
    studyUp.textContent = "Study Up, Human";

    document.body.append(wrongAnswer, studyUp)
    

   

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