import { API_ROOT, HEADERS } from '../constants'

export const setUser = user => ({ type: 'SETUSER', user })
export const login = (username, password) => {
    return dispatch => {
        fetch(`${API_ROOT}/employees`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({ username, password })
        }).then(res => res.json())
            .then(user => {
                dispatch(setUser(user))
            })
    }
}

const warning = () => {
    const audio = new Audio(process.env.PUBLIC_URL + '/warning.mp3')
    const playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise
            .then(_ => {
                console.log("audio played auto");
            })
            .catch(error => {
                console.log("playback prevented");
            });
    }
}

const check = (games) => {
    const warn = games.find(game => game.stock < game.threshold)
    if (warn)
        warning()
}

export const setGames = games => ({ type: 'SETGAMES', games })
export const getGames = (warning = false) => {
    return dispatch => {
        fetch(`${API_ROOT}/games`)
            .then(res => res.json())
            .then(games => {
                dispatch(setGames(games))
                if(warning)
                    check(games)
            })
    }
}

export const setCustomers = customers => ({ type: 'SETCUSTOMERS', customers })
export const searchCustomer = (input) => {
    return dispatch => {
        fetch(`${API_ROOT}/customers/search/${input}`)
            .then(res => res.json())
            .then(customers => {
                dispatch(setCustomers(customers))
            })
    }
}

export const setCart = cart => ({ type: 'SETCART', cart})
export const updateCartQuantity = (gameId, quantity) => ({ type: 'UPDATECARTQUANTITY', gameId, quantity})

export const setSales = sales => ({ type: 'SETSALES', sales})
export const getSales = () => {
    return dispatch => {
        fetch(`${API_ROOT}/sales`)
            .then(res => res.json())
            .then(sales => {
                dispatch(setSales(sales))
            })
    }
}

export const createSales = sales => {
    return dispatch => {
        fetch(`${API_ROOT}/sales`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({ sales })
        }).then(() => {
            dispatch(setCart([]))
        })
    }
}

export const setTopFive = games => ({ type: 'SETTOPFIVE', games})
export const getTopFive = () => {
    return dispatch => {
        fetch(`${API_ROOT}/sales/top_five`)
            .then(res => res.json())
            .then(games => {
                dispatch(setTopFive(games))
            })
    }
}

export const setAllVendors = allVendors => ({ type: 'SETALLVENDORS', allVendors})
export const getAllVendors = () => {
    return dispatch => {
        fetch(`${API_ROOT}/vendors`)
            .then(res => res.json())
            .then(allVendors => {
                dispatch(setAllVendors(allVendors))
            })
    }
}

export const setPurchaseOrders = purchaseOrders => ({ type: 'SETPURCHASEORDERS', purchaseOrders})
export const createPurchaseOrder = (game_id, quantity, vendor_id) => ({ type: 'CREATEPURCHASEORDER', game_id,quantity, vendor_id})