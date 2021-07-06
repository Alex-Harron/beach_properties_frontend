const base_url = "http://localhost:3000"
const reviewService = new ReviewService(base_url)
const houseService = new HouseService(base_url)
const sessionsService = new SessionsService(base_url)


houseService.getHouses()
reviewService.getReviews()
sessionsService.getUsers()

Review.reviewForm.addEventListener('submit', handleSubmit)



function handleSubmit(e){
    e.preventDefault()
    reviewService.createReview()
    e.target.reset()
}



