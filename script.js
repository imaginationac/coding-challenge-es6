// grab the button
// Make GET request with fetch
// Update the header element with the name
// Update the paragraph element with the hit points (HP)

let button = document.querySelector("button");
let header = document.querySelector("header");
let p = document.querySelector("p");

let getPokeAPI = async function() {
    let URL = "https://pokeapi.co/api/v2/pokemon/nidoking";
    let response = await fetch(URL);
    let json = await response.json();

    header.innerHTML = json.name;
    p.innerHTML = `HP: ${json.stats[0]["base_stat"]}`;
}

button.addEventListener("click", getPokeAPI);