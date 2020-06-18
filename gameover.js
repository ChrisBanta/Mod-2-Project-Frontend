const searchParams = new URLSearchParams(window.location.search)
const score = searchParams.get('score')

const scoreDisplay = document.querySelector("#score-display")

const display = document.createElement('h2')
display.textContent = `${score}/5`
scoreDisplay.appendChild(display)