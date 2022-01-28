
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

        this.element = document.createElement("ul")
        this.element.addEventListener('click', this.handleClick)

        House.all.push(this)
    }

    houseHTML(){
        this.element.innerHTML += `
            <img src=${this.img_url} style="width:100%; height: 300px">
                <h3>${this.name}</h3>
                <h6 class="w3-opacity">From $99</h6>
                <p>${this.description}</p>
                <br/>
                <a href="#new-review-form" class="w3-button w3-block w3-black w3-margin-bottom">Review this House</a>
                <button  class="w3-button w3-block w3-light-blue w3-margin-bottom">Delete</button>
                <div class="w3-container w3-padding-12 w3-black w3-card" style="margin:32px 0;"></div>
                <h3>${this.name} Reviews: </h3>

        `
        return this.element
    }

    onDom(){
        if(this.id === 1){
            House.house1Container.append(this.houseHTML())
        }else if(this.id === 2){
            House.house2Container.append(this.houseHTML())
        }else {
            House.house3Container.append(this.houseHTML())
        }
    }

    handleClick = (e) => {
        if (e.target.innerText === 'Review this House'){
            Review.renderForm()
            document.getElementById('house_id').value = `${this.id}`
        }
    }
}