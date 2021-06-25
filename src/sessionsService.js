class SessionsService {
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    //3rd fetch request : 
    getUsers(){
        fetch(`${this.endpoint}/users`)
        .then(resp => resp.json())
        .then(users => {
            //For each user of Users array
            for (const user of users){
                const c = new User(user)
                c.placeOnDom()
            }
        })
    }
}