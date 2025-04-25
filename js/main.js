// ELEMENTOS DEL DOM
const nameProfile = document.getElementById("inputName");
const btnLogin = document.getElementById("btnSubmit");
const profile = document.getElementById("profile");
const SectOriginals = document.getElementById("originals");
const SectFantasy = document.getElementById("fantasia");
const SectDrama = document.getElementById("drama");
const SectOtras = document.getElementById("otras");

// ARRAYS
let movieData = [];
const elegidosFavoritos = [];

// CONECTO EL JSON
const dataJSON = "../data/peliculas.json";
fetch(dataJSON)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
    movieData = data;
    console.log("Datos cargados correctamente:", movieData);
    loadMovies();
    })
    .catch(() => {
    console.error("No se pudieron cargar los datos, hay un error");
    });
// LOAD DATOS
window.addEventListener(`DOMContentLoaded`, function(){
    if (profile) {
        showNameProfile();
    } else{
        alert(`NO FUNCIONA`);
    };
});

// FUNCIONES
function showNameProfile(){
    const loadName = document.createElement("p");
    loadName.innerText = `¡Hola ${localStorage.getItem("nameProfile")}!`;
    profile.appendChild(loadName);
}
function loadMovies(){
    movieData.forEach(movie => {
        if (movie.netflixOriginal === "YES") {
            const eachMovie = document.createElement("div");
        }
    });
}