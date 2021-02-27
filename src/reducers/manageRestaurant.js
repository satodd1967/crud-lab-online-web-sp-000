import cuid from 'cuid';

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
}, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
        
            const restaurant = {
                id: cuid(),
                text: action.text
            }

            return {
                ...state,
                restaurants: state.restaurants.concat(restaurant),
                reviews: [...state.reviews]
            };

        case 'DELETE_RESTAURANT':
            
            let newRestaurantState = state.restaurants.filter(restaurant => restaurant.id !== action.id)

            return {
                ...state,
                restaurants: newRestaurantState,
                reviews: [...state.reviews]
            };

        case 'Add_REVIEW':
            const review = {
                id: cuid(),
                restaurantId: action.review.text.split(", ")[1],
                text: action.review.text.split(", ")[0]
            };

            return {
                ...state,
                restaurants: [...state.restaurants],
                reviews: state.reviews.concat(review)
            };

        case 'DELETE_REVIEW':

            let newReviewState = state.reviews.filter(review => review.id !== action.id)

            return {
                ...state,
                restaurants: [...state.restaurants],
                reviews: newReviewState
            };
             

        default:
            return state;

    }

};
