const searchParams = new URLSearchParams(window.location.search)
const result = searchParams.get('answer')

const answer = document.querySelector('#response')


let score = localStorage.getItem("score")
console.log(score)


let count = localStorage.getItem("count")

function increaseCount(){
    console.log(count)
    count = parseInt(count) + 1;
    console.log(count)
    localStorage.setItem("count", count);
        // count = localStorage.setItem("count", (parseInt("count") + increase));
    if (count === 5) {
        setTimeout(() => {
            window.location = `http://localhost:3001/gameover.html?score=${score}`
        }, 4000);
    };console.log(localStorage.getItem("count"))
} 



if (result === "true"){
    const rightAnswer = document.createElement('h6');
    rightAnswer.textContent = "RIGHT!";
    score = parseInt(score) + 1;
    localStorage.setItem("score", score);
    console.log(score)
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
