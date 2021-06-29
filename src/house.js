
class House {

    static all = []
    static housesContainer = document.getElementById("houses-container")

    constructor({id, name, description, img_url}) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.img_url = img_url;
        this.reviews = []

        this.element = document.createElement("p")

        House.all.push(this)


    }

    addReviews() {
        let houseReviews = Review.all.filter(r => {
            return r.house_id === this.id;
        })
        this.reviews.push(houseReviews);
        console.log(this.reviews)
    }
    


    houseHTML(){
        this.element.innerHTML += `
            <div class="w3-row-padding w3-padding-16">
                <div class="w3-third w3-margin-bottom">
                    <img src="${this.img_url}" style="width:100%;">
                    <div class="w3-container w3-white">
                        <h3>${this.name}</h3>
                        <h6 class="w3-opacity">From $99</h6>
                        <p>${this.reviews}</p>
                        <p>15m<sup>2</sup></p>
                        <p class="w3-large"><i class="fa fa-bath"></i> <i class="fa fa-phone"></i> <i class="fa fa-wifi"></i></p>
                        <button class="w3-button w3-block w3-black w3-margin-bottom">Write A Review</button>
                    </div>
                </div>
            </div>
            `
        return this.element
    }
    onDom(){
        House.housesContainer.append(this.houseHTML())
    }
}