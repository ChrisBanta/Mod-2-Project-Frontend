const searchParams = new URLSearchParams(window.location.search)
const result = searchParams.get('answer')

const answer = document.querySelector('p')

if (result === "true"){
    answer.textContent = "RIGHT"
} else {
    answer.textContent = "WRONG"
}

