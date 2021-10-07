class HouseService {
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    //1st fetch request : 
    getHouses(){
        fetch('https://beach-properties-api.herokuapp.com/houses')
        .then(resp => resp.json())
        .then((houses) => {
            for (const house of houses){
                const h = new House(house)
                h.onDom()
            }
        })
    }
}