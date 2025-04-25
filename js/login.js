// ELEMENTOS DEL DOM
const nameProfile = document.getElementById("inputName");
const btnLogin = document.getElementById("btnSubmit");
// LOAD DATOS
btnLogin.addEventListener("click", loadNameProfile);
// FUNCIONES
function loadNameProfile(){
    const name = nameProfile.value;
    if(name == ""){
        return
    } else{
        localStorage.setItem(`nameProfile`, name);
    }
}