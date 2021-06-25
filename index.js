const base_url = "http://127.0.0.1:3000"
const reviewService = new ReviewService(base_url)
const houseService = new HouseService(base_url)

reviewService.getReviews()
houseService.getHouses()
