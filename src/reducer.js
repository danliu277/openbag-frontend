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
            if (prevState.purchaseOrders.find(purchaseOrder => purchaseOrder.game_id === action.game_id))
                return { ...prevState }
            else {
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
            }
        case 'UPDATEPURCHASEORDER':
            let purchaseOrders = prevState.purchaseOrders
            let index = purchaseOrders.findIndex(x => x.game_id === action.game_id)
            if(index >= 0) {
                purchaseOrders[index].quantity = action.quantity
                purchaseOrders[index].vendor_id = action.vendor_id
            }
            return { ...prevState, purchaseOrders }
        default:
            return prevState
    }
}

export default reducer;