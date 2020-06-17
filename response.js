const searchParams = new URLSearchParams(window.location.search)
// const result = searchParams.get('answer')

const answer = document.querySelector('p')

let result  = "false";

console.log(result)

if (result === "true"){
    const rightAnswer = document.createElement('h6');
    rightAnswer.textContent = "RIGHT!";
    document.body.prepend(rightAnswer)
} else {
    const wrongAnswer = document.createElement('h6');
    wrongAnswer.textContent = "WRONG!";
    document.body.prepend(wrongAnswer)
    
}

