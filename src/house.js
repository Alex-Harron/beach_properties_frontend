
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
        this.element.id = `house-${this.id}`
        this.element.addEventListener('click', this.handleClick)


        House.all.push(this)
    }
    
    getReviews(){
        Review.all.filter(r => {
            if(r.house_id === this.id){
                this.reviews.push(r.text)
            }
        })
    }

    houseHTML(){
        this.element.innerHTML += `
        <center><div class="w3-container w3-white">
                    <img src="${this.img_url}" style="width:100%;">
                        <h3>${this.name}</h3>
                        <h6 class="w3-opacity">All Reviews</h6>
                        <li>${this.reviews}</li>
                        <p>15m<sup>2</sup></p>
                        <p class="w3-large"><i class="fa fa-bath"></i> <i class="fa fa-phone"></i> <i class="fa fa-wifi"></i></p>
                        <button class="w3-button w3-block w3-black w3-margin-bottom">Review</button>
            </div></center>
            `
        return this.element
    }
    onDom(){
        House.housesContainer.append(this.houseHTML())
    }

    handleClick = () => {
        if (event.target.innerText === 'Review'){
            Review.renderForm()
        }
    }
}