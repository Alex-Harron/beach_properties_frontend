class Review {
    //remembering objects 
    static all = []
    static reviewsContainer = document.getElementById("reviews-container")
    static reviewForm = document.getElementById("form-container")

    constructor({id, user_id, house_id, text }){
        this.id = id;
        this.user_id = user_id;
        this.house_id = house_id;
        this.text = text;

        this.node = document.createElement('li')
        this.node.id = `review-${this.id}`
        this.node.addEventListener('click', this.handleClick)
        
        Review.all.push(this)
    }

    reviewHTML(){
        this.node.innerHTML += `

        <h3>${this.user_id}</h3>
        <p>${this.text}</p>
        `
        return this.node;

    }
    putOnDom(){
        Review.reviewsContainer.append(this.reviewHTML())
    }

    static renderForm(){
        Review.reviewForm.innerHTML += `
        <form id="new-review-form">
            House_id: <input type="integer" id="house_id">
            User_id: <input type="integer" id="user_id">
            Text: <input type="text" id="text">
            <input type="submit" id="create">
        <form>
        `
    }
}