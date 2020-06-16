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

  superheroCard.append(image, name, fullname, occupation);
  superheroSection.append(superheroCard);
}

function parseJSON(response) {
  return response.json();
}