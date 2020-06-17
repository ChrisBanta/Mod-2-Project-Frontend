baseURL = "http://localhost:3000";
superherosURL = `${baseURL}/superheros`;

const superheroSection = document.querySelector("section");


fetch(superherosURL)
  .then(parseJSON)
  .then(displaySuperheros);
  

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



//   var namelabel = document.createTextNode('Name:')
//   var occupationlabel = document.createTextNode('Occupation:')

  superheroCard.append(image, name, namelabel, fullname, occupationlabel, occupation);
  superheroSection.append(superheroCard);
}

function parseJSON(response) {
  return response.json();
}