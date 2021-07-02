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
            }
        })
    }

    createUser(){

        const user = {
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }

        const configObj = {
            method: "POST",
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }

        fetch(`${this.endpoint}/users`, configObj)
        .then(resp => resp.json())
        .then(user => {
            console.log(user)
        })
    }
}