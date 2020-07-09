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


export const setGames = games => ({ type: 'SETGAMES', games })
export const getGames = () => {
    return dispatch => {
        fetch(`${API_ROOT}/games`)
            .then(res => res.json())
            .then(plants => {
                dispatch(setGames(plants))
            })
    }
}

export const setCustomers = customers => ({ type: 'SETCUSTOMERS', customers})
export const searchCustomer = (input) => {
    return dispatch => {
        fetch(`${API_ROOT}/customers/search/${input}`)
            .then(res => res.json())
            .then(customers => {
                dispatch(setCustomers(customers))
            })
    }
}
