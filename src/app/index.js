const UI = require("./ui");
const Github = require("./github")

const {client_id, client_secret} = require("./config.json");

//la palabra new se utiliza para crear una nueva instancia del objeto Github como estamos llamando al metodo constructor tenemos que pasarle los mismos parametros.

const github = new Github(client_id, client_secret);
const ui = new UI();

//console.log(github.fetchUser("leopoldoromero"))  este console.log era para probrar que estuviese funcionando la recepcion de la peticion.

const userForm = document.getElementById("userForm");

userForm.addEventListener("submit", (e) => {
    //console.log("enviando");
    const textSearch = document.getElementById("textSearch").value;
    //console.log(textSearch);
    if (textSearch !== "") {
        github.fetchUser(textSearch)
        .then(data => {
            if(data.userData.message === "Not Found"){
                //console.log("User not exists")
                ui.showMessage("User not found", "alert alert-danger mt-2 col-md-12 ")
            } else {
                ui.showProfile(data.userData);
                ui.showRepositories(data.repositories);
                
            }
            
        })    
    }
    e.preventDefault();
});

//el metodo de arriba funciona cuando se ejecute el evento submit cuando se envie algo en el formulario lo captura y ejecuta una funcion.
//preventdefault lo utilizo para eliminar el comportamiento por defecto de la funcion que en ese caso era refrescar el navegador. cada vez que clicaba submit el navegador se refrescaba pero no me aparecia el texto que indique en el console.log("enviando");
