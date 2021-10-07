class Review {
    //remembering objects 
    static all = []
    static house1Reviews = document.getElementById("house1-reviews")
    static house2Reviews = document.getElementById("house2-reviews")
    static house3Reviews = document.getElementById("house3-reviews")
    static reviewForm = document.getElementById("form-container")

    constructor({text, house_id, id, user_id}){
        this.id = id;
        this.house_id = house_id;
        this.text = text;
        this.user_id = user_id;

        this.node = document.createElement('p')
        this.node.id = `review-${this.id}`
        this.node.addEventListener('click', this.handleClick)
        
        Review.all.push(this)
    }

    
    reviewHTML(){
        if (this.user_id === 1){
        this.node.innerHTML += `
        <li>${this.text}</li>
        <br>
        <button id='delete-bttn'class= "w3-black ">Delete</button>
        <div class="w3-container w3-padding-12 w3-black w3-card" style="margin:32px 0;">
        </div>
        `
        return this.node;
        }else{
            this.node.innerHTML += `
            <li>${this.text}</li>
            <div class="w3-container w3-padding-12 w3-black w3-card" style="margin:32px 0;">
            </div>
            `
            return this.node;
        }
    }
    putOnDom(){
        if(this.house_id === 1){
            Review.house1Reviews.append(this.reviewHTML())
        }else if(this.house_id === 2){
            Review.house2Reviews.append(this.reviewHTML())
        }else {
            Review.house3Reviews.append(this.reviewHTML())
        }
    }

    static renderForm(){
        Review.reviewForm.innerHTML += `
        <form>
        <h3 id="new-review-form"> Write a Review: </h3>
            <input class="w3-input w3-padding-16 w3-border" type="hidden" id="house_id" >
            Text: <input class="w3-input w3-padding-16 w3-border" input type="text" placeholder="Your Review:" id="text" required>
            <br><br>
            <button class="w3-button w3-light-blue w3-padding-large" type="submit">Post Review</button></p>
        </form>
        `
    }

    handleClick = (e) => {
        if (e.target.innerText === 'Delete'){
            this.node.remove()
            reviewService.deleteReview(this.id)
        }
    }
}