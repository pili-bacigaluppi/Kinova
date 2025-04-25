// ELEMENTOS DEL DOM
const nameProfile = document.getElementById("inputName");
const btnLogin = document.getElementById("btnSubmit");
const profile = document.getElementById("profile");

// CONECTO EL JSON
const dataJSON = "../data/peliculas.json";
fetch(dataJSON)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); // Si no es exitosa, lanza un error con el código de estado
        } else{
            return response.json();
        }
    })
    .then((data) => {
    movieData = data;
    console.log("Datos cargados correctamente:", musicData);
    })
    .catch((error) => {
    console.error("Error al cargar los datos:", error); // Muestra el error en la consola
    displayMessage("Error al cargar la información musical."); // Llama a la función para mostrar un mensaje de error en la interfaz de usuario
    });
// ARRAYS

// LOAD DATOS
window.addEventListener(`DOMContentLoaded`, function(){
    if (profile) {
        showNameProfile();
    } else{
        alert(`NO FUNCIONA`);
    }

});

// FUNCIONES
function showNameProfile(){
    const loadName = document.createElement("p");
    loadName.innerText = `¡Hola ${localStorage.getItem("nameProfile")}!`;
    profile.appendChild(loadName);
}
function loadMovies(){
}