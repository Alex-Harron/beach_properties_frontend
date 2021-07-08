class Review extends House{
    //remembering objects 
    static all = []
    static reviewsContainer = document.getElementById("reviews-container")
    static reviewForm = document.getElementById("form-container")

    constructor({text, house_id, id}){
        super(id);
        this.house_id = house_id;
        this.text = text;

        this.node = document.createElement('ul')
        this.node.id = `review-${this.id}`
        this.node.addEventListener('click', this.handleClick)
        
        Review.all.push(this)
    }

    
    reviewHTML(){
        this.node.innerHTML += `

        <h3>${this.house_id}</h3>
        <p>${this.text}</p>
        `
        return this.node;

    }
    putOnDom(){
        Review.reviewsContainer.append(this.reviewHTML())
    }

    static renderForm(){
        Review.reviewForm.innerHTML += `
        <h3> Write a Review: </h3>
        <form id="new-review-form">
            House_id: <input class="w3-input w3-padding-16 w3-border" type="integer" placeholder="house_id" id="house_id">
            Text: <input class="w3-input w3-padding-16 w3-border" input type="text" placeholder="Your Review" id="text">
            <br>
            <button class="w3-button w3-black w3-padding-large" type="submit">Post Review</button></p>
        <form>
        `
    }
}