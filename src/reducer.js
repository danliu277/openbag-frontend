let initialState = {
    user: null,
    games: [],
    customers: [],
    cart: []
}

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case 'SETUSER':
            return { ...prevState, user: action.user }
        case 'SETGAMES':
            return { ...prevState, games: action.games }
        case 'SETCUSTOMERS':
            return { ...prevState, customers: action.customers }
        case 'SETCART':
            return { ...prevState, cart: action.cart }
        default:
            return prevState
    }
}

export default reducer;