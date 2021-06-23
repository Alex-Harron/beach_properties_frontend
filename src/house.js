class House {
    constructor(id, name, description, img_url) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.img_url = img_url;
        this.reviews = []
    }

    addReviews(reviews) {
        for (let r of reviews) {
            this.reviews.push(new Review(r.user_id, r.text))
        }
        console.log(this.reivews)
    }
}