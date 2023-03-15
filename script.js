// grab the button
// Make GET request with fetch
// Update the display div with the response

let button = document.querySelector("button");
let div = document.getElementById("displayAPIresult");

let getPokeAPI = async function() {
    let URL = "https://pokeapi.co/api/v2/";
    let response = await fetch(URL);
    let json = await response.json();

    div.innerHTML = JSON.stringify(json);
}

button.addEventListener("click", getPokeAPI);