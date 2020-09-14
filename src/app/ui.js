class UI {
    constructor(){
        this.profile = document.getElementById("profile");
    }

    showProfile(user){
        console.log(user)
        this.profile.innerHTML = `
        <div class="card mt-2 animated bounceInLeft">
            <img src="${user.avatar_url}" class="card-img-top"/>
            <div class="card-body">
                <h3 class="card-title">${user.name} / ${user.login}</h3>
                <a href="${user.html_url}" class="btn btn-primary btn-block" target="_blank">View Profile</a>
                <span class="badge badge-success">
                    Followers: ${user.followers}
                </span>
                <span class="badge badge-primary">
                    Following: ${user.following}
                </span>
                <span class="badge badge-warning">
                    Company: ${user.company}
                </span>
                <span class="badge badge-info d-block">
                    Blog: ${user.blog}
                </span>
            </div>
        </div>
        `;
        this.clearMessage();
    }

    showMessage(message, cssClass){
        const div = document.createElement("div");
        div.className = cssClass;
        div.appendChild(document.createTextNode(message));//esto es para indicarle que adentro de ese elemento div voy a crear otro elemento html.
        const content = document.querySelector(".row");//esto me sirve para buscar la clase indicada entre parentesis en mi html y crear dentro un elemento determinado.
        const profile = document.querySelector("#profile"); 
        content.insertBefore(div, profile);//esto le dice que me inserte algo antes de la variable profile que es igual al elemmento con el id profile.

    }

    clearMessage(){
        const alertFound = document.querySelector(".alert");
        if(alertFound) {
            alertFound.remove();
        }
    }

    showRepositories(repositories){
        console.log(repositories)
        let template = "";
        repositories.forEach(repo => {
         template += `
            <div class="card card-body mt-2 animated bounceInUp">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">
                            Language: ${repo.language}
                        </span>
                        <span class="badge badge-success">
                            Forks: ${repo.forks_count}
                        </span>
                    </div>
                </div>
            </div>
        `;
        })
     
        document.getElementById("repositories").innerHTML = template;
    }
}
module.exports = UI;
//showMessage obtiene dos parametros el primero es el mensaje que quiero mostrar y el segundo es el color o el css que le voy a aplicar.
