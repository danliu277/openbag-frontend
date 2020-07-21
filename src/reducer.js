let initialState = {
    user: null,
    games: [],
    customers: [],
    cart: [],
    sales: [],
    topFive: [],
    allVendors: []
}

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case 'SETUSER':
            return { ...prevState, user: action.user }
        case 'SETGAMES':
            return { ...prevState, games: action.games }
        case 'SETCUSTOMERS':
            return { ...prevState, customers: action.customers }
        case 'UPDATECARTQUANTITY':
            return {
                ...prevState, cart: prevState.cart.map(game => {
                    if (game.id === action.gameId)
                        game.quantity = action.quantity
                    return game
                })
            }
        case 'SETCART':
            return { ...prevState, cart: action.cart }
        case 'SETSALES':
            return { ...prevState, sales: action.sales }
        case 'SETTOPFIVE':
            return { ...prevState, topFive: action.games }
        case 'SETALLVENDORS':
            return { ...prevState, allVendors: action.allVendors }
        default:
            return prevState
    }
}

export default reducer;