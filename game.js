const baseURL = "http://localhost:3000";
const superherosURL = `${baseURL}/superheros`;
const questionsURL = `${baseURL}/questions`;
let questionNumber;
let winner;
let middle;


fetch(questionsURL)
  .then(parseJSON)
  .then(displayQuestion);


const superheroSection = document.querySelector("section");

const questionSection = document.querySelector("#question-spot");
  
function displayQuestion(question){
  const text = document.createElement('p');
  text.textContent = `${question.text}`;
  questionSection.appendChild(text);
  questionNumber = question.number;
  fetch(superherosURL)
    .then(parseJSON)
    .then(superheros => {
      answerQuestion(superheros);
      displaySuperheros(superheros);
    });
};

function answerQuestion(players){
  switch (questionNumber) {
    case 1: 
      middle = players.map(x => x.speed);
      middle = Math.max(...middle);
      winner = players.find(x => x.speed === middle);
      break;
    case 2: 
      middle = players.map(x => x.intelligence);
      middle = Math.max(...middle);
      winner = players.find(x => x.intelligence === middle);
      break;
    case 3:
      middle = players.map(x => x.intelligence + x.durability);
      middle = Math.max(...middle);
      winner = players.find(x => (x.intelligence + x.durability) === middle);
      break;
    case 4:
      middle = players.map(x => x.speed);
      middle = Math.min(...middle);
      winner = players.find(x => x.speed === middle)
      break;
    case 5:
      middle = players.map(x => x.strength);
      middle = Math.max(...middle);
      winner = players.find(x => x.strength === middle)
      break;
    case 6:
      middle = players.map(x => x.intelligence);
      middle = Math.min(...middle);
      winner = players.find(x => x.intelligence === middle)
      break;
  } 
}


function showSuperhero(superhero) {
  const superheroCard = document.createElement("div");
  
  const image = document.createElement("img");
  image.src = superhero.picture; 
  
  
  const fullname = document.createElement("p");
  fullname.textContent = superhero.fullname;
  
  const occupation = document.createElement("p");
  occupation.textContent = superhero.occupation;
  
  const namelabel = document.createElement('h5');
  namelabel.textContent = "Real Name:";
  
  const occupationlabel = document.createElement('h5');
  occupationlabel.textContent = "Occupation:";
  

  const name = document.createElement("h2");
  
  if (winner === superhero) {
    name.innerHTML = `<a href="http://localhost:3001/response.html?answer=true">${superhero.name}</a>`
  } else {
    name.innerHTML = `<a href="http://localhost:3001/response.html?answer=false">${superhero.name}</a>`
  };
  
  superheroCard.append(image, name, namelabel, fullname, occupationlabel, occupation);
  superheroSection.append(superheroCard);
}

function displaySuperheros(superheros) {
  superheros.forEach(showSuperhero);
}

function parseJSON(response) {
  return response.json();
}