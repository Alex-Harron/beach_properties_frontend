class House {

    static all = []
    static housesContainer = document.getElementById("houses-container")

    constructor({id, name, description, img_url}) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.img_url = img_url;
        this.reviews = []

        this.element = document.createElement('li')

        House.all.push(this)


    }

    addReviews(reviews) {
        for (let r of reviews) {
            this.reviews.push(new Review(r.user_id, r.text))
        }
    }

    houseHTML(){
        this.element.innerHTML += `
            <div>
                <h3>${this.name}</h3>
                <p>${this.description} - <img src= "${this.img_url}"></p>
            </div>
            `
        return this.element
    }
    onDom(){
        House.housesContainer.append(this.houseHTML())
    }
}