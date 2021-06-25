class HouseService {
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    //1st fetch request : 
    getHouses(){
        fetch(`${this.endpoint}/houses`)
        .then(resp => resp.json())
        .then(houses => {
            for (const house of houses){
                const c = new House(house)
                c.onDom()
            }
        })
    }

}