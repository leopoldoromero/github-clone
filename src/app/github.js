class Github {
    constructor(clientId, clientSecret) {
        this.client_id = clientId;
        this.client_secret = clientSecret;
        this.repos_count = 6;
        this.repos_sort = "created: asc";
    }

    async fetchUser(user) {
        const userDataRequest = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repositoriesRequest = await fetch(`http://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.repos_count}&sort=${this.repos_sort}`)
        const repositories = await repositoriesRequest.json();
        const userData = await userDataRequest.json();
        return {
            userData,
            repositories
        };
        
        //console.log(userData);
    }
}

module.exports = Github;

//la constante userData se crea con la finalidad de almacenar la peticion convertida a formato json.
// tuve que aregar la palabra clave await antes de userDataRequest.json() porque tambien eso es codigo asincrono y de esta forma si puedo ver los datos que me a devuelto la api de github en un formato legible.
