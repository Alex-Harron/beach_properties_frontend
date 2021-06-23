class Review {

    static all = []
    static reviewsContainer = document.getElementById("reviews-container")
    static reviewForm = document.getElementById("form-container")

    constructor({user_id, house_id, text}){
        this.user_id = user_id;
        this.house_id = house_id;
        this.text = text;
    }

    
}