class ReviewService{
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    //1st fetch request : 
    getReviews(){
        fetch(`${this.endpoint}/reviews`)
        .then(resp => resp.json())
        .then(reviews => {
            //For each review of Reviews array
            for (const review of reviews){
                const c = new Review(review)
                c.putOnDom()
            }
        })
    }

    createReview(){

        const review = {
            user_id: document.getElementById('user_id').value,
            house_id: document.getElementById('house_id').value,
            text: document.getElementById('text').value
        }

        const configObj = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'            
            },
            body: JSON.stringify(review)
        }

        fetch(`${this.endpoint}/reviews`, configObj)
        .then(resp => resp.json())
        .then(review => {
            const r = new Review(review)
            r.putOnDom()
        })
    }

}