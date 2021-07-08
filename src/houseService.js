class HouseService {
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    //1st fetch request : 
    getHouses(){
        fetch(`${this.endpoint}/houses`)
        .then(resp => resp.json())
        .then((houses) => {
            for (const house of houses){
                const h = new House(house)
                h.onDom1()
                h.onDom2()
                h.onDom3()
                h.addReviews()
            }
        })
    }
}