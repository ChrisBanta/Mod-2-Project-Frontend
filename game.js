baseURL = "http://localhost:3000";
superherosURL = `${baseURL}/superheros`;
questionsURL = `${baseURL}/questions`;

const superheroSection = document.querySelector("section");


fetch(superherosURL)
  .then(parseJSON)
  .then(displaySuperheros);
  
fetch(questionsURL)
  .then(parseJSON)
  .then(displayQuestion)

const questionSection = document.querySelector("h1")
  
function displayQuestion(question){
  questionSection.appendChild(question.text)
  // answerQuestion(question)
  const questionNumber = question.number

  return questionNumber
}

function answerQuestion(players){
  switch (questionNumber) {
    case 1: 
      const winner = players.map(&:speed).max;
      break;
    case 2: 
      const winner = players.map(&:intelligence).max;
      break;
    case 3:
      const winner = players.map {|player| player.intelligence + player.durability};
      break;
    case 4:
      const winner = players.map(&:speed).min;
      break;
    case 5:
      const winner = players.map(&:strength).max
      break;
    case 6:
      const winner = players.map(&:intelligence).min
      break;
  }
  return winner
}

function displaySuperheros(superheros) {
  superheros.forEach(showSuperhero);
}

function showSuperhero(superhero) {
  const superheroCard = document.createElement("div");

  const image = document.createElement("img");
  image.src = superhero.picture; 
  
  const name = document.createElement("h2");
  name.textContent = superhero.name; 
  
  const fullname = document.createElement("p");
  fullname.textContent = superhero.fullname;

  const occupation = document.createElement("p");
  occupation.textContent = superhero.occupation;

  const namelabel = document.createElement('h5');
  namelabel.textContent = "Real Name:";

  const occupationlabel = document.createElement('h5');
  occupationlabel.textContent = "Occupation:";

  if (answer === true){
    superheroCard.innerHTML = `<a href="http://localhost:3000/response.html?answer=true"/>`
  } else {
    superheroCard.innerHTML = `<a href="http://localhost:3000/response.html?answer=false"/>`
  }



//   var namelabel = document.createTextNode('Name:')
//   var occupationlabel = document.createTextNode('Occupation:')

  superheroCard.append(image, name, namelabel, fullname, occupationlabel, occupation);
  superheroSection.append(superheroCard);
}

function parseJSON(response) {
  return response.json();
}