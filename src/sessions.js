class User {
    //remembering objects 
    static all = []
    static usersContainer = document.getElementById("users-container")
    static userForm = document.getElementById("form-container")

    constructor({id, username, email, password}){
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;

        this.node = document.createElement('p')
        
        User.all.push(this)
    }

    userHTML(){
        this.node.innerHTML += `
            <div>
                <h3>${this.username}</h3>
                <p>${this.email} - ${this.id}</p>
            </div>
        `
        return this.node;

    }
    placeOnDom(){
        User.usersContainer.append(this.userHTML())
    }

    static renderUserForm(){
        User.userForm.innerHTML += `
        <form id="new-user-form">
            Username: <input type="text" id="username">
            Email: <input type="text" id="email">
            Password: <input type="text" id="password">
            <input type="submit" id="Sign Up">
        <form>
        `
    }

}