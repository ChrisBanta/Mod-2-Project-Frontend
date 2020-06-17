const baseURL = "http://localhost:3000";
const superherosURL = `${baseURL}/superheros`;
const questionsURL = `${baseURL}/questions`;
let questionNumber;
let winner=0;


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
  console.log(players)
  console.log(winner)
  console.log(questionNumber)
  console.log(`${questionNumber}`)
  switch (`${questionNumber}`) {
    case 1 : 
      winner = players.map(x => x.speed).max;
      break;
    case 2 : 
      winner = players.map(x => x.intelligence).max;
      break;
    case 3 :
      winner = players.map(x => x.intelligence + x.durability).max;
      break;
    case 4 :
      winner = players.map(x => x.speed).min;
      break;
    case 5 :
      winner = players.map(x => x.strength).max;
      break;
    case 6 :
      winner = players.map(x => x.intelligence).min;
      break;
  } console.log(winner)
}


function showSuperhero(superhero) {
  const superheroCard = document.createElement("div");
  
  const image = document.createElement("img");
  image.src = superhero.picture; 
  
  const name = document.createElement("h2");
  // name.textContent = superhero.name; 
  
  const fullname = document.createElement("p");
  fullname.textContent = superhero.fullname;
  
  const occupation = document.createElement("p");
  occupation.textContent = superhero.occupation;
  
  const namelabel = document.createElement('h5');
  namelabel.textContent = "Real Name:";
  
  const occupationlabel = document.createElement('h5');
  occupationlabel.textContent = "Occupation:";

  console.log(superheroCard)
  console.log(superhero)
  console.log(winner)
  
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