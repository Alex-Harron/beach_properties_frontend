class ReviewService{
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    //2nd fetch request : 
    getReviews(){
        fetch('https://beach-properties-api.herokuapp.com/reviews')
        .then(resp => resp.json())
        .then(reviews => {
            for (const review of reviews){
                const c = new Review(review)
                c.putOnDom()
            }
        })
    }

    //3rd fetch request
    createReview(){
        const review = {
            user_id: 2,
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

        fetch('https://beach-properties-api.herokuapp.com/reviews', configObj)
        .then(resp => resp.json())
        .then(review => {
            const r = new Review(review)
            r.putOnDom()
        })
    }

    //4th fetch request
    deleteReview(id){
        fetch(`https://beach-properties-api.herokuapp.com/reviews/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json)
        .then(json => alert("Review has Been Deleted"))
    }
}