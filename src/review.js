class Review {
    //remembering objects 
    static all = []
    static reviewsContainer = document.getElementById("reviews-container")
    static reviewForm = document.getElementById("form-container")

    constructor({user_id, house_id, text}){
        this.user_id = user_id;
        this.house_id = house_id;
        this.text = text;

        this.node = document.createElement('li')
        
        Review.all.push(this)
    }

    reviewHTML(){
        this.node.innerHTML += `
            <div>
                <h3>${this.text}</h3>
                <p>${this.house_id} - ${this.user_id}</p>
            </div>
        `
        return this.node;

    }
    putOnDom(){
        Review.reviewsContainer.append(this.reviewHTML())
    }
}