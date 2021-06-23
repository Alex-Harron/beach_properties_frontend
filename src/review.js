class Review {

    static all = []
    static reviewsContainer = document.getElementById("reviews-container")
    static reviewForm = document.getElementById("form-container")

    constructor({id, user_id, house_id, text}){
        this.id = id;
        this.user_id = user_id;
        this.house_id = house_id;
        this.text = text;

        this.element = document.createElement('li')
        this.element.dataset.id = this.id
        this.element.id = `Review- ${this.id}`

        Review.all.push(this)
    }

    reviewHTML(){
        this.element.innerHTML += `
            <div>
                <h3>${this.text}</h3>
                <p>${this.house_id} - ${this.user_id}</p>
            </div>
            `
        return this.element
    }
    putOnDom(){
        Review.reviewsContainer.append(this.reviewHTML())
    }
}