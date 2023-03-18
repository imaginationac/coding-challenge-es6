// grab the button
// Make GET request with fetch
// Get the
// Update the header element with the name
// Update the paragraph element with the hit points (HP)

let button = document.querySelector("button");
let header = document.querySelector("header");
let p = document.querySelector("p");
let input = document.querySelector("input");

let getPokeAPI = async function() {
    let pokemon = input.value.toLowerCase();
    let URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    let response = await fetch(URL);
    let json = await response.json();

    header.innerHTML = json.name;
    p.innerHTML = `HP: ${json.stats[0]["base_stat"]}`;
}

button.addEventListener("click", getPokeAPI);