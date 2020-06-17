const searchParams = new URLSearchParams(window.location.search)
const result = searchParams.get('answer')

const answer = document.querySelector('#response')

function displayAnswer(result) {
    console.log(result)
    const pin = document.createElement('p')
    if (result === "true"){
        pin.textContent = "RIGHT"
    } else {
        pin.textContent = "WRONG"
    }
    answer.appendChild(pin)
}

displayAnswer(result);