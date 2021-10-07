const base_url = "https://beach-properties-api.herokuapp.com"
const reviewService = new ReviewService(base_url)
const houseService = new HouseService(base_url)


houseService.getHouses()
reviewService.getReviews()


Review.reviewForm.addEventListener('submit', handleSubmit)


function handleSubmit(e){
    e.preventDefault()
    reviewService.createReview()
    e.target.remove()
}






