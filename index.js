const base_url = "http://localhost:3000"
const reviewService = new ReviewService(base_url)
const houseService = new HouseService(base_url)
const sessionsService = new SessionsService(base_url)

reviewService.getReviews()
houseService.getHouses()
sessionsService.getUsers()

Review.reviewForm.addEventListener('submit', handleSubmit)
Review.renderForm()



function handleSubmit(e){
    e.preventDefault()
    reviewService.createReview()
    e.target.reset()
}



