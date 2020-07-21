let initialState = {
    user: null,
    games: [],
    customers: [],
    cart: [],
    sales: [],
    topFive: [],
    allVendors: [],
    purchaseOrders: []
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
        case 'SETPURCHASEORDERS':
            return { ...prevState, purchaseOrders: action.purchaseOrders }
        case 'CREATEPURCHASEORDER':
            console.log(prevState.purchaseOrders)
            return {
                ...prevState,
                purchaseOrders: [
                    ...prevState.purchaseOrders,
                    {
                        game_id: action.game_id,
                        employee_id: prevState.user && prevState.user.id,
                        quantity: action.quantity,
                        vendor_id: action.vendor_id
                    }]
            }
        default:
            return prevState
    }
}

export default reducer;