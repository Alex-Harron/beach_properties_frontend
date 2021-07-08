class Review {
    //remembering objects 
    static all = []
    static house1Reviews = document.getElementById("house1-reviews")
    static house2Reviews = document.getElementById("house2-reviews")
    static house3Reviews = document.getElementById("house3-reviews")
    static reviewForm = document.getElementById("form-container")

    constructor({text, house_id, id}){
        this.id = id;
        this.house_id = house_id;
        this.text = text;

        this.node = document.createElement('ul')
        this.node.id = `review-${this.id}`
        this.node.addEventListener('click', this.handleClick)
        
        Review.all.push(this)
    }

    
    reviewHTML(){
        this.node.innerHTML += `
        <li style="margin-left: 40px">${this.text}</li>
        `
        return this.node;

    }
    putOnDom1(){
        if(this.house_id === 16)
        Review.house1Reviews.append(this.reviewHTML())
    }

    putOnDom2(){
        if(this.house_id === 17)
        Review.house2Reviews.append(this.reviewHTML())
    }

    putOnDom3(){
        if(this.house_id === 18)
        Review.house3Reviews.append(this.reviewHTML())
    }

    static renderForm(){
        Review.reviewForm.innerHTML += `
        <h3> Write a Review: </h3>
        <form id="new-review-form">
            House_id: <input class="w3-input w3-padding-16 w3-border" type="integer" placeholder="house_id" id="house_id" required>
            Text: <input class="w3-input w3-padding-16 w3-border" input type="text" placeholder="Your Review" id="text" required>
            <br>
            <button class="w3-button w3-light-blue w3-padding-large" type="submit">Post Review</button></p>
        <form>
        `
    }
}