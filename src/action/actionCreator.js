
import { API_ROOT, HEADERS } from '../constants'

export const setUserCreator = user => ({ type: 'SETUSER', user })
export const loginActionCreater = (username, password) => {
    return dispatch => {
        fetch(`${API_ROOT}/employees`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({ username, password })
        }).then(res => res.json())
            .then(user => {
                dispatch(setUserCreator(user))
            })
    }
}