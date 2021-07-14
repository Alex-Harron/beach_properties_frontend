class ReviewService{
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    //2nd fetch request : 
    getReviews(){
        fetch(`${this.endpoint}/reviews`)
        .then(resp => resp.json())
        .then(reviews => {
            //For each review of Reviews array
            for (const review of reviews){
                const c = new Review(review)
                c.putOnDom1()
                c.putOnDom2()
                c.putOnDom3()
            }
        })
    }

    //3rd fetch request
    createReview(){
        const review = {
            user_id: 10,
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
            r.putOnDom1()
            r.putOnDom2()
            r.putOnDom3()
        })
    }

    //4th fetch request
    deleteReview(id){
        fetch(`${this.endpoint}/reviews/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json)
        .then(json => alert("Review has Been Deleted"))
    }
}