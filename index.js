const base_url = "http://localhost:3000"
const reviewService = new ReviewService(base_url)
const houseService = new HouseService(base_url)


houseService.getHouses()
reviewService.getReviews()


Review.reviewForm.addEventListener('submit', handleSubmit)


document.addEventListener('DOMContentLoaded', () => {
    console.log("The DOM loaded!")
});

function handleSubmit(e){
    e.preventDefault()
    reviewService.createReview()
    e.target.reset()
}






