
class House {

    static all = []
    static house1Container = document.getElementById("house1-container")
    static house2Container = document.getElementById("house2-container")
    static house3Container = document.getElementById("house3-container")

    constructor({id, name, description, img_url}) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.img_url = img_url;
        this.reviews = []

        this.element = document.createElement("p")
        this.element.addEventListener('click', this.handleClick)


        House.all.push(this)
    }
    
    addReviews(){
        Review.all.filter(r => {
            if(r.house_id === this.id){
                this.reviews.push(r.text)
            }
        })
    }

    house1HTML(){
        this.element.innerHTML += `
            <img src=${this.img_url} style="width:100%">
            <div class="w3-container w3-white">
                <h3>${this.name}</h3>
                <h6 class="w3-opacity">From $99</h6>
                <p>${this.description}</p>
                <p>${this.reviews}</p>
                <p class="w3-large"><i class="fa fa-bath"></i> <i class="fa fa-phone"></i> <i class="fa fa-wifi"></i></p>
                <button class="w3-button w3-block w3-black w3-margin-bottom">Review</button>
            </div>
        `
        return this.element
    }
    house2HTML(){

            this.element.innerHTML += `
            <img src=${this.img_url} style="width:100%">
                <div class="w3-container w3-white">
                    <h3>${this.name}</h3>
                    <h6 class="w3-opacity">From $149</h6>
                    <p>${this.description}</p>
                    <p>${this.reviews}</p>
                    <p class="w3-large"><i class="fa fa-bath"></i> <i class="fa fa-phone"></i> <i class="fa fa-wifi"></i> <i class="fa fa-tv"></i></p>
                    <button class="w3-button w3-block w3-black w3-margin-bottom">Review</button>
                </div>
            `
        return this.element
    }
    house3HTML(){
            this.element.innerHTML += `
            <img src=${this.img_url} style="width:100%">
                <div class="w3-container w3-white">
                    <h3>${this.name}</h3>
                    <h6 class="w3-opacity">From $199</h6>
                    <p>${this.description}</p>
                    <p>${this.reviews}</p>
                    <p class="w3-large"><i class="fa fa-bath"></i> <i class="fa fa-phone"></i> <i class="fa fa-wifi"></i> <i class="fa fa-tv"></i> <i class="fa fa-glass"></i> <i class="fa fa-cutlery"></i></p>
                    <button class="w3-button w3-block w3-black w3-margin-bottom">Review</button>
                </div>
            `
        return this.element
    }
    onDom1(){
        if(this.id === 16){
        House.house1Container.append(this.house1HTML())
        }
    }
    onDom2(){
        if(this.id === 17){
        House.house2Container.append(this.house2HTML())
        }
    }
    onDom3(){
        if(this.id === 18){
        House.house3Container.append(this.house3HTML())
        }
    }

    handleClick = (e) => {
        if (e.target.innerText === 'Review'){
            Review.renderForm()
        }
    }
}