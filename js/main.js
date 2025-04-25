// ELEMENTOS DEL DOM
const nameProfile = document.getElementById("inputName");
const btnLogin = document.getElementById("btnSubmit");
const profile = document.getElementById("profile");
const sectOriginals = document.getElementById("originals");
const sectFantasy = document.getElementById("fantasia");
const sectDrama = document.getElementById("drama");
const sectOtras = document.getElementById("otras");
const btnFavorite = document.getElementById("favorites");
const btnClosePreview = document.getElementById("closeModalP");
const preview = document.getElementById("modalPreview");
const sectPreview = document.getElementById("preview");
const searchInput = document.getElementById("search-input"); 
const searchButton = document.getElementById("search-button");
const results = document.getElementById("results");

// ARRAYS
let movieData = [];

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
        console.log(`NO FUNCIONA`);
    };
    
    searchButton.addEventListener("click", searchBar);
    searchInput.addEventListener("keypress", (event) => {if (event.key === "Enter") {
        searchBar();
    }});
});
// FUNCIONES
function showNameProfile(){
    const loadName = document.createElement("p");
    loadName.innerText = `¡Hola ${localStorage.getItem("nameProfile")}!`;
    profile.appendChild(loadName);
}
function loadMovies(){
    movieData.forEach( movie => {
        if (movie.netflixOriginal === "YES") {
            const eachMovie = document.createElement("div");
            eachMovie.classList.add(`swiper-slide`);
            eachMovie.innerHTML = `
            <article class="eachMovie">
                <img src="${movie.miniature}" alt="portada de las peliculas o series de ${movie.name}">
                <div class="actions" id="actions">
                    <button class="watch" data-nombre="${movie.className}">Ver Ahora</button>
                </div>
            </article>
            `;
            sectOriginals.appendChild(eachMovie);
        }
        if( movie.genre === "Drama"){
            const eachMovie = document.createElement("div");
            eachMovie.classList.add(`swiper-slide`);
            eachMovie.innerHTML = `
            <article class="eachMovie">
                <img src="${movie.miniature}" alt="portada de las peliculas o series de ${movie.name}">
                <div class="actions" id="actions">
                    <button class="watch" data-nombre="${movie.className}">Ver Ahora</button>
                </div>
            </article>
            `;
            sectDrama.appendChild(eachMovie);
        }
        if(movie.genre === "Fantasia"){
            const eachMovie = document.createElement("div");
            eachMovie.classList.add(`swiper-slide`);
            eachMovie.innerHTML = `
            <article class="eachMovie">
                <img src="${movie.miniature}" alt="portada de las peliculas o series de ${movie.name}">
                <div class="actions" id="actions">
                    <button class="watch" data-nombre="${movie.className}">Ver Ahora</button>
                </div>
            </article>
            `;
            sectFantasy.appendChild(eachMovie);
        } 
        if (movie.genre === "Ciencia Ficción" || movie.genre === "Historica") {
            const eachMovie = document.createElement("div");
            eachMovie.classList.add(`swiper-slide`);
            eachMovie.innerHTML = `
            <article class="eachMovie">
                <img src="${movie.miniature}" alt="portada de las peliculas o series de ${movie.name}">
                <div class="actions" id="actions">
                    <button class="watch" data-nombre="${movie.className}">Ver Ahora</button>
                </div>
            </article>
            `;
            sectOtras.appendChild(eachMovie);
        }
    })
    let moviePreviewChosen = document.querySelectorAll(".watch");
    moviePreviewChosen.forEach( boton => {
        boton.addEventListener(`click`, function(){
            const movieChosen = boton.dataset.nombre;
            showPreview(movieChosen);
        })
    })
}
function showPreview(movieName){
    const movieChosen = movieData.find(movieData => movieData.className.toLowerCase() === movieName.toLowerCase());
    const bgModal = document.querySelector(".preview");
    if (movieChosen){
        const showMovie = document.createElement("article");
        showMovie.classList.add("text");
        showMovie.innerHTML = `
        <img src="../assets/top-netfix.webp" alt="netflix series" class="leyenda">
        <img src="${movieChosen.titlePreview}" alt="titulo de la pelicula" class="titulo">
        <p>${movieChosen.description}</p>
        <div>
        <button class="watchMovie" id="openModalV">Ver</button>
        </div>
        `;
        sectPreview.innerHTML = "";
        sectPreview.appendChild(showMovie);
        preview.style.display = "block";
        bgModal.style.backgroundImage = `url('${movieChosen.bgPreview}')`;
    }
    btnClosePreview.onclick = function() {
        preview.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == preview) {
            preview.style.display = "none";
        }
    }
}
// function searchBar(){
//     const searchTerm = searchInput.value.toLowerCase();
//     results.innerHTML = ""; 
//     const filteredMovies = movieData.filter(movie => {
//         return (
//             movie.name.toLowerCase().includes(searchTerm) ||
//             movie.genre.toLowerCase().includes(searchTerm)
//         );
//     })
//     const searchBlock = document.querySelector(".results");
//     if (filteredMovies.length === 0) {
//         searchBlock.style.display = "block";
//         const noResults = document.createElement("p");
//         noResults.classList.add("noResults");
//         noResults.textContent = "No se encontraron resultados.";
//         results.appendChild(noResults);
//     } else {
//         searchBlock.style.display = "block";
//         filteredMovies.forEach(movie => {
//             const eachMovie = document.createElement("div");
//             eachMovie.classList.add("swiper-slide");
//             eachMovie.innerHTML = `
//                 <article class="movieFound">
//                     <img src="${movie.miniature}" alt="portada de ${movie.name}">
//                     <div class="actions">
//                         <button class="watch" data-nombre="${movie.className}">Ver Ahora</button>
//                     </div>
//                 </article>
//             `;
//             results.appendChild(eachMovie);
//         });
//         let moviePreviewChosen = document.querySelectorAll(".watch");
//         moviePreviewChosen.forEach(boton => {
//             boton.addEventListener("click", function () {
//                 const movieChosen = boton.dataset.nombre;
//                 showPreview(movieChosen);
//             });
//         });
//     }
// }