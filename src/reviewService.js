class ReviewService {
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    //1st fetch request : 
    getReviews(){
        fetch(`${this.endpoint}/reviews`)
        .then(resp => resp.json())
        .then(reviews => {
            for (const review of reviews){
                const c = new Review(review)
                c.putOnDom
            }
        })
    }

}