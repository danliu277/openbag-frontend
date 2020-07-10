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
export const getGames = () => {
    return dispatch => {
        fetch(`${API_ROOT}/games`)
            .then(res => res.json())
            .then(games => {
                dispatch(setGames(games))
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

export const setSales = sales => ({ type: 'SETSALES', sales})

export const createSales = sales => {
    return dispatch => {
        fetch(`${API_ROOT}/sales`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({ sales })
        })
    }
}